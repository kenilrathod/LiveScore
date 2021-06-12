import React, {useState} from 'react';
import './Card.css';
import image from '../src/img/vs1.png';
import 'tachyons';
import {useHistory} from 'react-router-dom'
import { matchdata } from './Api';
const Card = ({match}) => {
    const [score,Setscore] = useState([]);  
    const datashown=(id)=>{
        if(match['matchStarted']){
        matchdata(id)
        .then((data)=>Setscore(data)+console.log(data))
        .catch((error)=>console.log(error))
    }
    }
    let history=useHistory();
    function fullscorecard(id){
        history.push(`/scorecard/${id}`)
        console.log(id)
    }
    const teamscore=(score)=>{
       if(!score) return {}

       let numb=score && score.split("/");
       let numid=numb && numb[1] && numb[1].split("v");
       let ans={}
       ans.first = numb[0] && numid[0] && numb[0].replace(/[^0-9]/g,"")+'/'+numid[0].replace(/[^0-9]/g,"");
       ans.second = numb[2] && numid[1] && numid[1].replace(/[^0-9]/g,"")+'/'+numb[2].replace(/[^0-9]/g,"");
       console.log(ans.first)
       console.log(ans.second) 
       return ans
    }


    const getcard = () => {

 

        return <div className="main" id="maindiv">

            <div className="card-div"> 
            <div className="scorecard_matchstarted">
                <div className="fullscorecard"><button onClick={()=>fullscorecard(match.unique_id)}>{(match["matchStarted"]?"ScoreCard":"")}</button></div>
                <div className="matchstarted"><button style={{color:'green'}} >{(match["matchStarted"]?"In progress":"Not Started")}</button></div></div>
                <div className="team-details grow ">
                    <div className="team-1">{match["team-1"]}
                    <div id="team1score">{teamscore(score['score']).first}</div></div>         
                    <div className="cards"><img className="vs" src={image} alt=""/></div>
                    <div className="team-2">{match["team-2"]}
                    <div id="team2score">{teamscore(score['score']).second}</div></div>
                </div>
                <div className="score">{score["matchStarted"]?score['score']:""}</div>
                    <div className="buttons">
                    <button onClick={()=>{datashown(match.unique_id)}} className="details-Button br--right slide_left" disabled={!(match["matchStarted"])}>Show Details</button>

                    <button className="time-Button slide_left">Start Time:{new Date(match.dateTimeGMT).toLocaleString()}</button>
                </div>
        </div>
        </div>;
    };

    return getcard();

}
export default Card;