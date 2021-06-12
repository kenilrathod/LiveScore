import React from 'react';
import {NavLink} from 'react-router-dom'; 
import './Navbar.css';
//import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes,faHome} from '@fortawesome/free-solid-svg-icons';
import logo from './img/CricStar4.png'

const Navbar= () => {
    return <div className="navbar">
      <img src={logo} alt="logo" className="logo"></img>
      <input type="checkbox" name="check" id="check"/>
      <label htmlFor="check" >
      <FontAwesomeIcon className="baricon" icon={faBars} />
      <FontAwesomeIcon className="timesicon" icon={faTimes} />
      </label>
      <ul className="nav">  
      <li><NavLink exact activeClassName="menu_active" className="home" to="/"><FontAwesomeIcon className="homeicon" icon={faHome}/></NavLink></li>
        <li><NavLink activeClassName="menu_active" className="twenty20" to="/20-20">20-20</NavLink></li>
        <li><NavLink activeClassName="menu_active" className="odi" to="/odi">ODI</NavLink></li>
        <li><NavLink activeClassName="menu_active" className="test" to="/test">TEST</NavLink></li>
        <li><NavLink activeClassName="menu_active" className="playerinfo" to="/playerinfo">Search</NavLink></li>
        <li><NavLink to="/scorecard" style={{display:'none'}}>Search</NavLink></li>
      </ul>
    </div>

   

}
export default Navbar;