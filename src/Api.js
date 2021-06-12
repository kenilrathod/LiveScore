
const API_KEY = "NQP1acVZi6PjqMiZfCT9poygVPo2";
//const API_KEY ="8IvpEMudL8SsRwrrXB6gm4R9k683";

export const getdata=()=>{
    const url=`https://cricapi.com/api/matches?apikey=${API_KEY}`;
    return fetch(url) 
    .then((data)=>data.json())
    .catch((error)=>alert("we cant't fetch data"));
};

export const matchdata=(id)=> {
    const url=`https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`; 

    return fetch(url)
    .then((data)=>data.json())
    .catch((error)=>console.log("Error Found: ",error));
}



