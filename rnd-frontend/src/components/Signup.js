import { useHistory } from "react-router-dom"
import {useState} from "react"

function Signup ({setCurrentUser}) {

// ----------- Use States ----------- //
    const history = useHistory()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([]);

// ----------- Navigation to MainPage ----------- //

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }
    
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSignup = (e) => {
        e.preventDefault()
        const newUser = {
            username: username,
            password_digest: password,
            high_score: 0,
            rank: 0 
        }

        fetch("http://localhost:3000/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
                'Accept': 'Application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(resp => resp.json())
        .then(userData => {
            setCurrentUser(userData.user)
            localStorage.setItem("user", JSON.stringify(userData.user))
            history.push("/choose_game")
        })
        .catch((data) => {
            setErrors(data.errors);
        });
    }

 // ----------- DOM ----------- //    
    return (
    <div className="signUp">
        <form onSubmit={handleSignup}>
        <h1>Signup</h1>
        <input onChange={handleUsername} type="text" placeholder="Username" className="usernameEnter"/>
        <input onChange={handlePassword} type="password" placeholder="Password" className="passwordEnter"/>
        {errors.map((error) => (
          <p key={error} style={{ color: "red" }}>
            {error}
          </p>
        ))}
        <button type="submit" >Sign Up</button>
        </form>
    </div>
    )
}

export default Signup