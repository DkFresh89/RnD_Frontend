import { useHistory } from "react-router-dom"

function Signup () {

// ----------- Use States ----------- //
    const history = useHistory()

// ----------- Handle Login and Signup Call Backs ----------- //
    const handleMainPage = () => history.push("/login")

   
    return (
    <div className="signUp">
        <h1>Signup</h1>
        <input type="text" placeholder="Username" className="usernameEnter"/>
        <input type="password" placeholder="Password" className="passwordEnter"/>
        <button onClick={handleMainPage}>Login Page</button>
    </div>
    )
}

export default Signup