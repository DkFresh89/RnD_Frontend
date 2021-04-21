import { useHistory } from "react-router-dom"
import {useState} from "react"

function Signup ({setCurrentUser}) {

// ----------- Use States ----------- //
    const history = useHistory()
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        username: "",
        password_digest: "",
        high_score: 0,
        rank: 0
      })

// ----------- Navigation to MainPage ----------- //

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSignup = (e) => {
        e.preventDefault()

        fetch("http://localhost:3000/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
                'Accept': 'Application/json'
            },
            body: JSON.stringify(formData)
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
        <input onChange={handleChange} type="text" placeholder="Username" name="username" className="usernameEnter"/>
        <input onChange={handleChange} type="password" placeholder="Password" name="password_digest" className="passwordEnter"/>
        {/* {errors.map((error) => (
          <p key={error} style={{ color: "red" }}>
            {error}
          </p>
        ))} */}
        <button type="submit" >Sign Up</button>
        </form>
    </div>
    )
}

export default Signup