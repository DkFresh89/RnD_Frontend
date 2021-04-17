import '../App.css';
import {useEffect, useState} from "react"
import { Switch, Route } from "react-router-dom"
import { useHistory } from "react-router-dom"
import Header from './Header'
import Login from './Login'
import Signup from './Signup'
import ChooseGame from './ChooseGame'

function App() {

  // ----------- Use States ----------- //
  const history = useHistory()

  // ----------- Handle Login and Signup Call Backs ----------- //
  const handleLogin = () => history.push("/login")
  const handleSignup = () => history.push("/signup")

// ----------- DOM ----------- //  
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/choose_game">
            <ChooseGame />
          </Route>
          <Route path="/login" >
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <div className="login">
            <h1>Please Login or Sign Up</h1>
            <button id="login" onClick={handleLogin}>Login</button>
            <button id="signup" onClick={handleSignup}>Signup</button>
            </div>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
