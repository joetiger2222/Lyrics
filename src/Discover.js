import React, { useEffect, useState } from "react";
import DiscoverSongCard from "./DiscoverSongCard";
import Loader from "./Loader";

export default function Discover(){
const [discoverData,setDiscoverData]=useState(null);


function getDiscoverData(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9987e2b55cmsheebd5b7718b9e31p1a4c3djsn213f209f1eff',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };
    
    fetch('https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0', options)
        .then(response => response.json())
        .then(data => setDiscoverData(data.tracks))
        .catch(err => console.error(err));
}

useEffect(()=>{
    getDiscoverData();
    
},[])

console.log(discoverData);

if(discoverData===null)return <Loader title='Loading...'/>




    return (
        
        <div className="flex flex-col flex-wrap items-center" style={{width:'100%',height:'100%',alignItems:'center',}}>
            <div style={{display:'flex', justifyContent:'center', marginTop:'50px',justifyContent:'space-evenly',width:'100%'}}>
            <h1 className="text-3xl text-white font-bold">Discover</h1>
            
            
            </div>
            <div
            
            style={{width:'100%',display:'flex',marginTop:'100px',flexWrap:'wrap',justifyContent:'center',}}>
                {discoverData?.map((song)=>(
                    <DiscoverSongCard
                    // image={song.images?.coverart}
                    // title={song.title}
                    // subtitle={song.subtitle}
                    // songId={song.artists[0]?.adamid}
                    song={song}
                    ></DiscoverSongCard>
                ))}
            </div>
            
        </div>
        
    )

    
}