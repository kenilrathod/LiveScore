import React from 'react';
import './App.css';
import Navbar from './Navbar';
import {Switch,Redirect,Route} from 'react-router-dom';
import Twenty from './Twenty';
import Oneday from './Oneday';
import Home from './Home';
import Test from './Test';
import Playerinfo from './Playerinfo'
import Loader from 'react-loader-spinner'
import Scorecard from './Scorecard'


function App() {

  return <>
  
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/20-20" component={Twenty}/>
      <Route exact path="/odi" component={Oneday}/>
      <Route exact path="/test" component={Test}/>
      <Route exact path="/playerinfo" component={Playerinfo}/>
      <Route exact path="/scorecard/:id" component={Scorecard}/>
      <Redirect to="/" />
    </Switch>

    <Loader className="loader"
    type="ThreeDots"
    color="#001b44"
    secondaryColor="red"
    height={150}
    width={150}
    timeout={2000}

      />
      
      
    </> 
};

export default App;
