import { useHistory } from "react-router-dom"
import {useState} from "react"


function Login ({setCurrentUser}) {

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

    const handleLogin = (e) => {
        e.preventDefault()
        const newUser = {
            username: username,
            password: password    
        }

        fetch("http://localhost:3000/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
                'Accept': 'Application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                return resp.json().then((data) => {
                throw data;
                });
            }
        })
        .then(userData => {
            console.log(userData)
            // setCurrentUser(userData.token)
            // localStorage.setItem("token", userData.token)
            // history.push("/choose_game")
        })
        .catch((data) => {
            setErrors(data.errors);
        });
    }

// ----------- DOM ----------- //  
    return (
    <div className="login">
        <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <input onChange={handleUsername} value={username} type="text" placeholder="Username" className="usernameEnter"/>
        <input onChange={handlePassword} value={password} type="password" placeholder="Password" className="passwordEnter"/>
        {/* {errors.map((error) => (
          <p key={error} style={{ color: "red" }}>
            {error}
          </p>
        ))} */}
        <button type="submit"> Login </button>
        </form>
    </div>
    )
}

export default Login