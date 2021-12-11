import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { AuthProvider } from "../contexts/AuthContext"

import Chats from "./Chats"
import Login from "./loginPage/Login"
import About from "./about/About"
import PptPage from "./ppt/PptPage"
import Help from "./help/Helpp"

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/chats" component={Chats} />
            <Route path="/about" component={About} />
            <Route path="/ppt" component={PptPage} />
            <Route path="/help" component={Help} />
            <Route path="/" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
