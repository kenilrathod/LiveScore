import React, {useEffect} from 'react';
import {useState} from 'react';
import {getdata} from './Api';
import Card from './Card'

const Home=()=>{
    const [matches,setMatches] = useState([])

    useEffect(() => {
        getdata()
        .then((data)=>setMatches(data.matches))
        .catch((error)=>alert("Sorry we can't load data Please check your Internet Connection"));

      }, [])

      return <div className="maindiv">
      {
        matches.map((match,id)=>(
          <>
         <Card key={id} match={match}/>
        
        </>
        
        ))}
    </div>
}
export default Home;