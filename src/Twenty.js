import React, {useEffect} from 'react';
import {useState} from 'react';
import {getdata} from './Api';
import Card from './Card'

const Twenty=()=>{
    const [matches,setMatches] = useState([])

    useEffect(() => {
        getdata()
        .then((data)=>
        setMatches(data.matches))
        .catch();
      }, [])
      return <div className="maindiv">
      {
        matches.map((match,id)=>(
          <>
         {(match.type==="Twenty20")?(<Card key={id} match={match} />):""}
        
        </>
        ))}
    </div>
}
export default Twenty;