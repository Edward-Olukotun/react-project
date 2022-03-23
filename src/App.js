import Setup from './setup';
import './App.css';
import React from 'react'
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import Page from './page2'

function App() {
  return (
    <Router>
      {/* <Setup/> */}
        <Switch>
          <Route exact path='/setup' component={Setup}/>
          <Route exact path='/page2' component={Page}/>
        </Switch>
    </Router>  
  )
}

export default App
