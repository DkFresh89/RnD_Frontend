import '../App.css';
import {useState, useEffect} from "react"
import { Switch, Route } from "react-router-dom"
import { useHistory } from "react-router-dom"
import Header from './Header'
import Login from './Login'
import Signup from './Signup'
import ChooseGame from './ChooseGame'
import MainPage from './MainPage';
import { Button, chakra, Grid, Flex, Box } from "@chakra-ui/react"


function App() {

  // ----------- Use States ----------- //
  const history = useHistory()
  const [questions, setQuestions] = useState([])
  const [points, setPoints] = useState(0)
  const [currentUser, setCurrentUser] = useState(null)

  // ----------- Handle Login and Signup Call Backs ----------- //
  const handleLogin = () => history.push("/login")
  const handleSignup = () => history.push("/signup")

  // ----------- Auto Login ----------- //

  const getUser = localStorage.getItem("user")
  const user = JSON.parse(getUser)
  
  
// ----------- HandleGameOver Call back ----------- //  
  const handleGameOver = () => {
    const gameOver = {
      score: points,
      game_type: questions[0]["category"],
      time: 0.0,
      num_of_questions: questions.length,
      user_id: user.id
    }
  // ----------- FetchPost to create a new Game Instance ----------- // 
    fetch("http://localhost:3000/games/game_over", {
      method: 'POST',
      headers: {
          'Content-Type': 'Application/json',
          'Accept': 'Application/json'
      },
      body: JSON.stringify(gameOver)
    })
    handleUserUpdate()    
  }
// ----------- HandleUserUpdate Call back ----------- // 
const handleUserUpdate = () => {
  console.log(user)

  fetch(`http://localhost:3000/users/game_stats/${user.id}`,{
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(resp => resp.json())
    .then(userData =>{
      localStorage.setItem("user", JSON.stringify(userData))
    })
  
}


// ----------- DOM ----------- //  
  return (
    <div>
      <Header currentUser={currentUser}/>
      <main>
        <Switch>
          <Route path="/choose_game">
            <ChooseGame setQuestions={setQuestions} />
          </Route>
          <Route path="/main_page">
            <MainPage
              currentUser={currentUser} 
              questions={questions} 
              setPoints={setPoints} 
              points={points} 
              handleGameOver={handleGameOver}
            />
          </Route>
          <Route path="/login" >
            <Login setCurrentUser={setCurrentUser} />
          </Route>
          <Route path="/signup">
            <Signup setCurrentUser={setCurrentUser} />
          </Route>
          <Route path="/">
            <Flex justifyContent="center" alignItems="center" height="100%" width="100%" marginTop="5em">
              <Box height="549px" width="966px" bg="gray">
            <h1>Willkommen!! Please Login or Sign Up</h1><br/><br/>
            <Button id="login" onClick={handleLogin}>Login</Button>
            <Button id="signup" onClick={handleSignup}>Signup</Button>
            </Box>
            </Flex>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
