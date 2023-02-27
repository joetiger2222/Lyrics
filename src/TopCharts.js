import React from "react";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import Loader from "./Loader";


// const TopChartCard=({song,i})=>(
//     <div className="w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2">
//         <h3 className="text-white font-bold text-base mr-3">{i+1}.</h3>
//         <div className="flex-1 flex flex-row justify-between">
//           <img className="w-20 h-20 rounded-lg" src={song?.images?.coverart} alt="cover image" />
//           <div className="flex-1 flex flex-col justify-center mx-3">
            
//               <p className="text-xl fond-bold text-white">{song?.title}</p>
            
           
//               <p className="text-base  text-gray-300 mt-1">{song?.subtitle}</p>
            
//           </div>
  
//         </div>
//     </div>
//   )



const TopChartCard=({song,i})=>(
    <Link to={`/SongPage/${song.key}`}>
        
<div className="flex mb-5 items-center hover:bg-[#4c426e] cursor-pointer">
    <div style={{width:'50%'}}>
        <img src={song.images?.coverart} style={{width:'80px'}} className='rounded-lg'></img>
    </div>

    <div style={{width:'50%'}}>
        <h1 className="text-white font-bold text-2xl" style={{width:'100%'}}>{song.title}</h1>
        <h3 className="text-gray-300 text-xl text-base truncate" style={{width:'100%'}}>{song.subtitle}</h3>
    </div>

    </div>
    </Link>
);


export default function TopCharts(){

    const [topData,setTopData]=useState(null);

    function getTopData(){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '9987e2b55cmsheebd5b7718b9e31p1a4c3djsn213f209f1eff',
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
        };
        
        fetch('https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0', options)
            .then(response => response.json())
            .then(data => setTopData(data.tracks))
            .catch(err => console.error(err));
    }
    
    useEffect(()=>{
        getTopData();
        
    },[])




let topPlays;
if(topData)topPlays=topData.slice(0,5);
if(topData===null)return;

    return (
        <div className="mt-10" style={{width:'100%'}}>
        <h1 className="text-white text-2xl font-bold mb-4">Top Songs :</h1>
        {topPlays.map((song,i)=>(
            <TopChartCard song={song} i={i} />
        ))}
          
        
      </div>
    )
}