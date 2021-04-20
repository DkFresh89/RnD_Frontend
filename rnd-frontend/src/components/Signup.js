import { useHistory } from "react-router-dom"
import {useState} from "react"

function Signup () {

// ----------- Use States ----------- //
    const history = useHistory()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

// ----------- Navigation to MainPage ----------- //

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }
    
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSignup = () => {
        const newUser = {
            username: username,
            password_digest: password,
            high_score: 0,
            rank: 0 
        }

        fetch("http://localhost:3000/users/new_user", {
          method: 'POST',
          headers: {
              'Content-Type': 'Application/json',
              'Accept': 'Application/json'
          },
          body: JSON.stringify(newUser)
        })
        .then(resp => resp.json())
        .then(game => {
            console.log(game)
            
        })
        
        history.push("/choose_game")
    }

 // ----------- DOM ----------- //    
    return (
    <div className="signUp">
        <h1>Signup</h1>
        <input onChange={handleUsername} type="text" placeholder="Username" className="usernameEnter"/>
        <input onChange={handlePassword} type="password" placeholder="Password" className="passwordEnter"/>
        <button onClick={handleSignup}>Login Page</button>
    </div>
    )
}

export default Signup