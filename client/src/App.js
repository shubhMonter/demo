import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Addfriend from './components/friends/Addfriend';
import Friendlist from './components/friends/Friendlist';

function App() {
  return (

      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={Landing}/>
          <div className="container">
            <Route exact path="/addfriend" component={Addfriend}/>
            <Route exact path="/friendlist" component={Friendlist}/>
          </div>
          <Footer/>
        </div>
      </Router>

  );
}

export default App;
