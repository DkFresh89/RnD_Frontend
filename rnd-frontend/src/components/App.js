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
  const [gameMatch, setGameMatch] = useState(false)


// ----------- Auto Login ----------- //

  useEffect(() => {
    const getUser = localStorage.getItem("user")

    if (getUser) {
      setCurrentUser(JSON.parse(getUser))
    }
  }, [])

  // ----------- Handle Login and Signup Call Backs ----------- //
  const handleLogin = () => history.push("/login")
  const handleSignup = () => history.push("/signup")
  
  
// ----------- HandleGameOver Call back ----------- //  
  const handleGameOver = () => {
    const gameOver = {
      score: points,
      game_type: questions[0]["category"],
      time: 0.0,
      num_of_questions: questions.length,
      user_id: currentUser.id
    }
  // ----------- FetchPost to create a new Game Instance ----------- // 
    fetch("http://localhost:3000/games/gameover", {
      method: 'POST',
      headers: {
          'Content-Type': 'Application/json',
          'Accept': 'Application/json'
      },
      body: JSON.stringify(gameOver)
    })
    .then(resp => resp.json())
    .then(userData =>{
      setCurrentUser(userData)
      localStorage.setItem("user", JSON.stringify(userData))
    }) 
  }
// ----------- HandleUserUpdate Call back ----------- // 
// const handleUserUpdate = () => {
//   console.log(currentUser.id)
//   debugger
//   fetch(`http://localhost:3000/users/game_stats/${currentUser.id}`,{
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     },
//     body: JSON.stringify(currentUser)
//   })
//     .then(resp => resp.json())
//     .then(userData =>{
//       setCurrentUser(userData)
//       localStorage.setItem("user", JSON.stringify(userData))
//     })
  
// }


// ----------- DOM ----------- //  
  return (
    <div>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser}/>
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
              gameMatch={gameMatch}
              setGameMatch={setGameMatch}
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
