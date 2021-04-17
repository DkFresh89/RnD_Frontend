import { useHistory } from "react-router-dom"

function Signup () {

// ----------- Use States ----------- //
    const history = useHistory()

// ----------- Navigation to MainPage ----------- //
    const handleMainPage = () => history.push("/login")

 // ----------- DOM ----------- //    
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