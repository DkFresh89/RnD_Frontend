import '../App.css';
import {useEffect, useState} from "react"
import { Switch, Route } from "react-router-dom";
import Header from './Header'
import Login from './Login'
import MainPage from './MainPage'

function App() {


  return (
  <div>
    <Header />
    <MainPage />
  </div>
  );
}

export default App;
