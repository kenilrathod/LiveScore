
import {React,useEffect,useState} from 'react'
import reactDom from 'react-dom';
import { useHistory } from 'react-router-dom';
import './scorecard.css' ;

const API_KEY = "NQP1acVZi6PjqMiZfCT9poygVPo2";
//const API_KEY = "8IvpEMudL8SsRwrrXB6gm4R9k683";
const Scorecard=(props)=>{
    const matchid=props.match.params.id

    const [team1show, setteam1show] = useState(true)
    const [team2show, setteam2show] = useState(true)
    let history=useHistory();
    useEffect(() => {
        const url=`https://cricapi.com/api/fantasySummary?apikey=${API_KEY}&unique_id=${matchid}`;
        return fetch(url)
        .then(data=>data.json()).then(data=>console.log(data)+allscorecard(data))
        .catch(error=>console.log(error))
    })
    const allscorecard=(data)=>{
        const datalength=data["data"]["batting"].length;
        if(datalength===2){
        reactDom.render(
            
            <div>
                <div className="label">PLAYER OF THE MATCH</div>
                    <div className="momplayer">{data["data"]["man-of-the-match"]!==""?data["data"]["man-of-the-match"]["name"]:"Not Declared"}</div>
            <div className="allteam">
                <div className={`team1batting_bowling ${team1show?"":"maxzero"}`} >
                <div className="team1title" onClick={()=>setteam1show(!team1show)}>{data["data"]["batting"][0]["title"]}</div>
                {team1show?
                <table id="first">
                    <tbody>
                        <tr>
                            <th>BatsMan</th>
                            <th>Run</th>
                            <th>Ball</th>
                            <th>4s</th>
                            <th>6s</th>
                            <th>SR</th>
                        </tr>
                    
                        {data["data"]["batting"][0]["scores"].map((players)=>
                        <tr key={players.pid}>
                            <td><strong>{players["dismissal-info"]==='not out'?players.batsman+"*":players.batsman}</strong><br/>{players["dismissal-info"]}</td>
                            <td>{players.R}</td>
                            <td>{players.B}</td>
                            <td>{players["4s"]}</td>
                            <td>{players["6s"]}</td>
                            <td>{players["SR"]}</td>
                        </tr>
                        )} 
                    </tbody>
                </table>:""}
                {team1show?
                <table id="second">
                    <tbody>
                        <tr>
                            <th>Bowler</th>
                            <th>Over</th>
                            <th>Run</th>
                            <th>Wicket</th>
                            <th>Econ</th>
                        </tr>
                        {data["data"]["bowling"][0]["scores"].map((players)=>
                        <tr key={players.pid}>
                            <td><strong>{players['bowler']}</strong></td>
                            <td>{players["O"]}</td>
                            <td>{players["R"]}</td>
                            <td>{players["W"]}</td>
                            <td>{players["Econ"]}</td>
    
                        </tr>
                        )}
                    </tbody>
                </table>:""}
                </div>
    {/* Team 2 information and score in this div */}
    <div className={`team2batting_bowling ${team2show?"":"maxzero1"}`}>
        <div className="team2title" onClick={()=>setteam2show(!team2show)}>{data["data"]["batting"][1]["title"]}</div>
                {team2show?
                <table id="first1">
                    <tbody>
                        <tr>
                            <th>BatsMan</th>
                            <th>Run</th>
                            <th>Ball</th>
                            <th>4s</th>
                            <th>6s</th>
                            <th>SR</th>
                        </tr>
                    
                        {data["data"]["batting"][1]["scores"].map((players)=>
                        <tr key={players.pid}>
                            <td><strong>{players["dismissal-info"]==='not out'?players.batsman+"*":players.batsman}</strong><br/>{players["dismissal-info"]}</td>
                            <td>{players.R}</td>
                            <td>{players.B}</td>
                            <td>{players["4s"]}</td>
                            <td>{players["6s"]}</td>
                            <td>{players["SR"]}</td>
                        </tr>
                        )} 
                    </tbody>
                </table>:""}
            {team2show?
                <table id="second2">
                    <tbody>
                        <tr>
                            <th>Bowler</th>
                            <th>Over</th>
                            <th>Run</th>
                            <th>Wicket</th>
                            <th>Econ</th>
                        </tr>
                        {data["data"]["bowling"][1]["scores"].map((players)=>
                        <tr key={players.pid}>
                            <td><strong>{players['bowler']}</strong></td>
                            <td>{players["O"]}</td>
                            <td>{players["R"]}</td>
                            <td>{players["W"]}</td>
                            <td>{players["Econ"]}</td>
    
                        </tr>
                        )}
                    </tbody>
                </table>:""}
                </div>
    {/* end of team 2  */}
            </div></div>,document.getElementById("datapl"))
        }

        else if(datalength===1){
            reactDom.render(
                <div>
                <div className="label">PLAYER OF THE MATCH</div>
                    <div className="momplayer">{data["data"]["man-of-the-match"]!==""?data["data"]["man-of-the-match"]["name"]:"Not Declared"}</div>
            <div className="allteam">
                <div className={`team1batting_bowling ${team1show?"":"maxzero"}`} >
                <div className="team1title" onClick={()=>setteam1show(!team1show)}>{data["data"]["batting"][0]["title"]}</div>
                {team1show?
                <table id="first">
                    <tbody>
                        <tr>
                            <th>BatsMan</th>
                            <th>Run</th>
                            <th>Ball</th>
                            <th>4s</th>
                            <th>6s</th>
                            <th>SR</th>
                        </tr>
                    
                        {data["data"]["batting"][0]["scores"].map((players)=>
                        <tr key={players.pid}>
                            <td><strong>{players["dismissal-info"]==='not out'?players.batsman+"*":players.batsman}</strong><br/>{players["dismissal-info"]}</td>
                            <td>{players.R}</td>
                            <td>{players.B}</td>
                            <td>{players["4s"]}</td>
                            <td>{players["6s"]}</td>
                            <td>{players["SR"]}</td>
                        </tr>
                        )} 
                    </tbody>
                </table>:""}
                {team1show?
                <table id="second">
                    <tbody>
                        <tr>
                            <th>Bowler</th>
                            <th>Over</th>
                            <th>Run</th>
                            <th>Wicket</th>
                            <th>Econ</th>
                        </tr>
                        {data["data"]["bowling"][0]["scores"].map((players)=>
                        <tr key={players.pid}>
                            <td><strong>{players['bowler']}</strong></td>
                            <td>{players["O"]}</td>
                            <td>{players["R"]}</td>
                            <td>{players["W"]}</td>
                            <td>{players["Econ"]}</td>
    
                        </tr>
                        )}
                    </tbody>
                </table>:""}
                </div></div></div>
                ,document.getElementById("datapl"))
        }
        else reactDom.render(<div className="scorecard_not_found">Oops we have no scorecard data for this match</div>,document.getElementById("datapl"))
    }


return (<div style={{width:"100%"}}>
    <div className="dataof" id="datapl" style={{width:"100%"}}></div>
    <button className="backtohome" onClick={()=>history.push("/")}>Back To Home</button>
    </div>
)            
}
export default Scorecard;