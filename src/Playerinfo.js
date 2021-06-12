import React from 'react';
import reactDom from 'react-dom';
import 'tachyons';
import search from '../src/img/search.gif'
import '../src/playerinfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
const API_KEY = "NQP1acVZi6PjqMiZfCT9poygVPo2";
////const API_KEY = "8IvpEMudL8SsRwrrXB6gm4R9k683";

const Playerinfo=()=>{

     const searchvalue=()=>{
        var playername=document.getElementById("s").value;
        console.log(playername)
        
        const playeridfinder=`https://cricapi.com/api/playerFinder?apikey=${API_KEY}&name=${playername}`;
        
            return fetch(playeridfinder)
            .then((data)=>data.json()).then(data=>playerdatafinder(data['data'][0]['pid'])).catch(error=>reactDom.render(<div className="playerNotfound">
                            <img src={search} alt="Not"/><h4>*Player Not found</h4>
            </div>,document.getElementById("player_information")))
            .catch((error)=>console.log("Error Found: ",error));
        }
            const playerdatafinder=(pid)=>{

            const playerstate=`https://cricapi.com/api/playerStats?apikey=${API_KEY}&pid=${pid}`;
            return fetch(playerstate)
            .then((data)=>data.json()).then(data=>givedata(data)).catch(error=>console.log("error found",error))
            .catch((error)=>console.log("Error Found: ",error));
        }

        const givedata=(pdata)=>{
            console.log(pdata)
            reactDom.render(<div className="allinfo" >
                <div className="img_pinfo">
                    <img className="playerimg" src={pdata["imageURL"]} alt="PlayerImg" />
                    <table style={{border:0}}>
                        <tbody  className="playerinfo_table">
                        <tr>
                            <th>Country :-</th>
                            <td>{pdata['country']}</td>
                        </tr>
                        <tr>
                            <th>Name :-</th>
                            <td>{pdata["fullName"]}</td>
                        </tr>
                        <tr>
                            <th>Age :-</th>
                            <td>{pdata["currentAge"]}</td>
                        </tr>
                        <tr>
                            <th>Bat Style :-</th>
                            <td>{pdata["battingStyle"]}</td>
                        </tr>
                        <tr>
                            <th>Bow Style :-</th>
                            <td>{pdata["bowlingStyle"]}</td>
                        </tr>
                        <tr>
                            <th>Role :-</th>
                            <td>{pdata["playingRole"]}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="platerinfo"><p>{pdata['profile']}</p></div>

            <div className="stats" >
                <table>
                    <caption className="bat_bow" style={{textAlign:'left',padding:'5px',fontWeight:'bold'}}>Batting</caption>
                    <tbody >
                    <tr><th></th>
                        <th>Mat</th>
                        <th>Inns</th>
                        <th>BF</th>
                        <th>Runs</th>
                        <th>HS</th>
                        <th>SR</th>
                        <th>Ave</th>
                        <th>NO</th>
                        <th>50</th>
                        <th>100</th>
                        <th>4s</th>
                        <th>6s</th>
                    </tr>

                    <tr>
                        <th style={{textAlign:'left'}}>ODIs</th>
                        <td>{pdata["data"]["batting"]["ODIs"]?pdata["data"]["batting"]["ODIs"]["Mat"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["ODIs"]?pdata["data"]["batting"]["ODIs"]["Inns"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["ODIs"]?pdata["data"]["batting"]["ODIs"]["BF"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["ODIs"]?pdata["data"]["batting"]["ODIs"]["Runs"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["ODIs"]?pdata["data"]["batting"]["ODIs"]["HS"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["ODIs"]?pdata["data"]["batting"]["ODIs"]["SR"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["ODIs"]?pdata["data"]["batting"]["ODIs"]["Ave"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["ODIs"]?pdata["data"]["batting"]["ODIs"]["NO"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["ODIs"]?pdata["data"]["batting"]["ODIs"]["50"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["ODIs"]?pdata["data"]["batting"]["ODIs"]["100"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["ODIs"]?pdata["data"]["batting"]["ODIs"]["4s"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["ODIs"]?pdata["data"]["batting"]["ODIs"]["6s"]:"-"}</td>
    
                    </tr>

                    <tr>
                        <th style={{textAlign:'left'}}>T20</th>
                        <td>{pdata["data"]["batting"]["T20Is"]?pdata["data"]["batting"]["T20Is"]["Mat"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["T20Is"]?pdata["data"]["batting"]["T20Is"]["Inns"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["T20Is"]?pdata["data"]["batting"]["T20Is"]["BF"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["T20Is"]?pdata["data"]["batting"]["T20Is"]["Runs"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["T20Is"]?pdata["data"]["batting"]["T20Is"]["HS"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["T20Is"]?pdata["data"]["batting"]["T20Is"]["SR"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["T20Is"]?pdata["data"]["batting"]["T20Is"]["Ave"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["T20Is"]?pdata["data"]["batting"]["T20Is"]["NO"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["T20Is"]?pdata["data"]["batting"]["T20Is"]["50"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["T20Is"]?pdata["data"]["batting"]["T20Is"]["100"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["T20Is"]?pdata["data"]["batting"]["T20Is"]["4s"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["T20Is"]?pdata["data"]["batting"]["T20Is"]["6s"]:"-"}</td>
   
                    </tr>

                    <tr>
                        <th style={{textAlign:'left'}} >Tests</th>
                        <td>{pdata["data"]["batting"]["tests"]?pdata["data"]["batting"]["tests"]["Mat"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["tests"]?pdata["data"]["batting"]["tests"]["Inns"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["tests"]?pdata["data"]["batting"]["tests"]["BF"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["tests"]?pdata["data"]["batting"]["tests"]["Runs"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["tests"]?pdata["data"]["batting"]["tests"]["HS"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["tests"]?pdata["data"]["batting"]["tests"]["SR"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["tests"]?pdata["data"]["batting"]["tests"]["Ave"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["tests"]?pdata["data"]["batting"]["tests"]["NO"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["tests"]?pdata["data"]["batting"]["tests"]["50"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["tests"]?pdata["data"]["batting"]["tests"]["100"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["tests"]?pdata["data"]["batting"]["tests"]["4s"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["tests"]?pdata["data"]["batting"]["tests"]["6s"]:"-"}</td>
   
                    </tr>

                    <tr>
                        <th style={{textAlign:'left'}}>FC</th>
                        <td>{pdata["data"]["batting"]["firstClass"]?pdata["data"]["batting"]["firstClass"]["Mat"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["firstClass"]?pdata["data"]["batting"]["firstClass"]["Inns"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["firstClass"]?pdata["data"]["batting"]["firstClass"]["BF"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["firstClass"]?pdata["data"]["batting"]["firstClass"]["Runs"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["firstClass"]?pdata["data"]["batting"]["firstClass"]["HS"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["firstClass"]?pdata["data"]["batting"]["firstClass"]["SR"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["firstClass"]?pdata["data"]["batting"]["firstClass"]["Ave"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["firstClass"]?pdata["data"]["batting"]["firstClass"]["NO"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["firstClass"]?pdata["data"]["batting"]["firstClass"]["50"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["firstClass"]?pdata["data"]["batting"]["firstClass"]["100"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["firstClass"]?pdata["data"]["batting"]["firstClass"]["4s"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["firstClass"]?pdata["data"]["batting"]["firstClass"]["6s"]:"-"}</td>
  
                    </tr>

                    <tr>
                        <th style={{textAlign:'left'}}>ListA</th>
                        <td>{pdata["data"]["batting"]["listA"]?pdata["data"]["batting"]["listA"]["Mat"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["listA"]?pdata["data"]["batting"]["listA"]["Inns"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["listA"]?pdata["data"]["batting"]["listA"]["BF"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["listA"]?pdata["data"]["batting"]["listA"]["Runs"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["listA"]?pdata["data"]["batting"]["listA"]["HS"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["listA"]?pdata["data"]["batting"]["listA"]["SR"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["listA"]?pdata["data"]["batting"]["listA"]["Ave"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["listA"]?pdata["data"]["batting"]["listA"]["NO"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["listA"]?pdata["data"]["batting"]["listA"]["50"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["listA"]?pdata["data"]["batting"]["listA"]["100"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["listA"]?pdata["data"]["batting"]["listA"]["4s"]:"-"}</td>
                        <td>{pdata["data"]["batting"]["listA"]?pdata["data"]["batting"]["listA"]["6s"]:"-"}</td>
   
                    </tr>
                    </tbody>
                </table>
            <table>
                <caption className="bat_bow" style={{textAlign:'left',padding:'5px',fontWeight:'bold'}}>Bowling </caption>
                <tbody>
                <tr><th></th>
                        <th>Mat</th>
                        <th>Inns</th>
                        <th>Balls</th>
                        <th>Runs</th>
                        <th>Wkts</th>
                        <th>SR</th>
                        <th>Ave</th>
                        <th>Econ</th>
                        <th>BBI</th>
                        <th>BBM</th>
                        <th>5w</th>
                        <th>10</th>
                    </tr>
                    <tr>
                        <th style={{textAlign:'left'}}>ODIs</th>
                        <td>{pdata["data"]["bowling"]["ODIs"]?pdata["data"]["bowling"]["ODIs"]["Mat"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["ODIs"]?pdata["data"]["bowling"]["ODIs"]["Inns"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["ODIs"]?pdata["data"]["bowling"]["ODIs"]["Balls"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["ODIs"]?pdata["data"]["bowling"]["ODIs"]["Runs"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["ODIs"]?pdata["data"]["bowling"]["ODIs"]["Wkts"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["ODIs"]?pdata["data"]["bowling"]["ODIs"]["SR"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["ODIs"]?pdata["data"]["bowling"]["ODIs"]["Ave"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["ODIs"]?pdata["data"]["bowling"]["ODIs"]["Econ"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["ODIs"]?pdata["data"]["bowling"]["ODIs"]["BBI"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["ODIs"]?pdata["data"]["bowling"]["ODIs"]["BBM"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["ODIs"]?pdata["data"]["bowling"]["ODIs"]["5w"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["ODIs"]?pdata["data"]["bowling"]["ODIs"]["10"]:"-"}</td>
                    </tr>
                    <tr>
                        <th style={{textAlign:'left'}}>T20</th>
                        <td>{pdata["data"]["bowling"]["T20Is"]?pdata["data"]["bowling"]["T20Is"]["Mat"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["T20Is"]?pdata["data"]["bowling"]["T20Is"]["Inns"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["T20Is"]?pdata["data"]["bowling"]["T20Is"]["Balls"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["T20Is"]?pdata["data"]["bowling"]["T20Is"]["Runs"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["T20Is"]?pdata["data"]["bowling"]["T20Is"]["Wkts"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["T20Is"]?pdata["data"]["bowling"]["T20Is"]["SR"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["T20Is"]?pdata["data"]["bowling"]["T20Is"]["Ave"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["T20Is"]?pdata["data"]["bowling"]["T20Is"]["Econ"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["T20Is"]?pdata["data"]["bowling"]["T20Is"]["BBI"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["T20Is"]?pdata["data"]["bowling"]["T20Is"]["BBM"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["T20Is"]?pdata["data"]["bowling"]["T20Is"]["5w"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["T20Is"]?pdata["data"]["bowling"]["T20Is"]["10"]:"-"}</td>
                    </tr>
                    <tr>
                        <th style={{textAlign:'left'}}>Tests</th>
                        <td>{pdata["data"]["bowling"]["tests"]?pdata["data"]["bowling"]["tests"]["Mat"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["tests"]?pdata["data"]["bowling"]["tests"]["Inns"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["tests"]?pdata["data"]["bowling"]["tests"]["Balls"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["tests"]?pdata["data"]["bowling"]["tests"]["Runs"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["tests"]?pdata["data"]["bowling"]["tests"]["Wkts"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["tests"]?pdata["data"]["bowling"]["tests"]["SR"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["tests"]?pdata["data"]["bowling"]["tests"]["Ave"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["tests"]?pdata["data"]["bowling"]["tests"]["Econ"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["tests"]?pdata["data"]["bowling"]["tests"]["BBI"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["tests"]?pdata["data"]["bowling"]["tests"]["BBM"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["tests"]?pdata["data"]["bowling"]["tests"]["5w"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["tests"]?pdata["data"]["bowling"]["tests"]["10"]:"-"}</td>
                    </tr>
                    <tr>
                        <th style={{textAlign:'left'}}>FC</th>
                        <td>{pdata["data"]["bowling"]["firstClass"]?pdata["data"]["bowling"]["firstClass"]["Mat"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["firstClass"]?pdata["data"]["bowling"]["firstClass"]["Inns"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["firstClass"]?pdata["data"]["bowling"]["firstClass"]["Balls"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["firstClass"]?pdata["data"]["bowling"]["firstClass"]["Runs"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["firstClass"]?pdata["data"]["bowling"]["firstClass"]["Wkts"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["firstClass"]?pdata["data"]["bowling"]["firstClass"]["SR"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["firstClass"]?pdata["data"]["bowling"]["firstClass"]["Ave"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["firstClass"]?pdata["data"]["bowling"]["firstClass"]["Econ"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["firstClass"]?pdata["data"]["bowling"]["firstClass"]["BBI"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["firstClass"]?pdata["data"]["bowling"]["firstClass"]["BBM"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["firstClass"]?pdata["data"]["bowling"]["firstClass"]["5w"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["firstClass"]?pdata["data"]["bowling"]["firstClass"]["10"]:"-"}</td>
                    </tr>
                    <tr>
                        <th style={{textAlign:'left'}}>ListA</th>
                        <td>{pdata["data"]["bowling"]["listA"]?pdata["data"]["bowling"]["listA"]["Mat"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["listA"]?pdata["data"]["bowling"]["listA"]["Inns"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["listA"]?pdata["data"]["bowling"]["listA"]["Balls"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["listA"]?pdata["data"]["bowling"]["listA"]["Runs"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["listA"]?pdata["data"]["bowling"]["listA"]["Wkts"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["listA"]?pdata["data"]["bowling"]["listA"]["SR"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["listA"]?pdata["data"]["bowling"]["listA"]["Ave"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["listA"]?pdata["data"]["bowling"]["listA"]["Econ"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["listA"]?pdata["data"]["bowling"]["listA"]["BBI"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["listA"]?pdata["data"]["bowling"]["listA"]["BBM"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["listA"]?pdata["data"]["bowling"]["listA"]["5w"]:"-"}</td>
                        <td>{pdata["data"]["bowling"]["listA"]?pdata["data"]["bowling"]["listA"]["10"]:"-"}</td>  
                    </tr>
                </tbody>
            </table>    
            </div>

            </div>,document.getElementById("player_information")
            )
        }
        const info=()=>{
            return (
            <div>
                <div className="searchbar">
                    <div>
                <FontAwesomeIcon className="search" icon={faSearch}/>
                <FontAwesomeIcon className="times" icon={faTimes}  onClick={()=>{document.getElementById("s").value=""}}/>
                    <input className="players" id="s" type="text" name="name" placeholder="search player here" /></div>
                   <div><button className="searchplayer"  onClick={()=>{searchvalue()}}>Search</button> <br/> </div> 
                </div>    
                    <div id="player_information" className="player_information">
                    </div>
            </div>
            );}
    return info()
}

export default Playerinfo;