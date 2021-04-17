import '../App.css';
import {useEffect, useState} from "react"
import { Switch, Route } from "react-router-dom"
import { useHistory } from "react-router-dom"
import Header from './Header'
import Login from './Login'
import Signup from './Signup'
import MainPage from './MainPage'

function App() {

  // ----------- Use States ----------- //
 
  const history = useHistory()

  // ----------- Handle Login and Signup Call Backs ----------- //
  const handleLogin = () => history.push("/login")
  const handleSignup = () => history.push("/signup")


  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/main_page">
            <MainPage />
          </Route>
          <Route path="/login" >
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <h1>Please Login or Sign Up</h1>
            <button id="login" onClick={handleLogin}>Login</button>
            <button id="signup" onClick={handleSignup}>Signup</button>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
