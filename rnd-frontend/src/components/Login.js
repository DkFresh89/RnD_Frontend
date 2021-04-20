import { useHistory } from "react-router-dom"
import {useState} from "react"


function Login () {

// ----------- Use States ----------- //
    const history = useHistory()

// ----------- Navigation to MainPage ----------- //
    const handleMainPage = () => {

        history.push("/main_page")
    }

    
// ----------- DOM ----------- //  
    return (
    <div className="login">
        <h1>Login</h1>
        <input type="text" placeholder="Username" className="usernameEnter"/>
        <input type="password" placeholder="Password" className="passwordEnter"/>
        <button onClick={handleMainPage}>Main Page</button>
    </div>
    )
}

export default Login