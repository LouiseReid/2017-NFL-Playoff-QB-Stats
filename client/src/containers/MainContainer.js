import React from 'react';
import Main from '../components/Main';
import NavBar from '../components/NavBar';
import Playoffs from '../components/Playoffs';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import '../stylesheets/main.css';



class MainContainer extends React.Component {

  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Route exact path="/" component={Main}/>
          <Route path="/playoff-picture" component={Playoffs}/>
        </React.Fragment>
      </Router>
    );
  }
}

export default MainContainer
