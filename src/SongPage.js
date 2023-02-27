import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import "./App.css";
export default function SongPage(){
    const {songId}=useParams();
    const[songDetails,setSongDetails]=useState(null);

    console.log("from song page",songId)


function getSongDetails(){
setSongDetails(null);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9987e2b55cmsheebd5b7718b9e31p1a4c3djsn213f209f1eff',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };
    
    fetch(`https://shazam.p.rapidapi.com/songs/get-details?key=${songId}&locale=en-US`, options)
        .then(response => response.json())
        .then(response => setSongDetails(response))
        .catch(err => console.error(err));

}

useEffect(()=>{
    getSongDetails();
},[songId])


let lyrics;
if(songDetails){
    if(songDetails.sections[1].type==='LYRICS'){
    lyrics=songDetails.sections[1].text.map((line)=>(
        <p className="text-gray-300 md:text-xl text-base">{line}</p>
    ))
    }
    else{
        lyrics=<p className="text-gray-300 text-xl">sorry no lyrics found</p>
    }
}



if(songDetails===null)return <Loader title="Loading song Details" />




    return (
        <div className="flex flex-col md:ml-24 ml-5 md:mr-auto">
            <div className="flex items-center mt-24 singerDetails">
                <img src={songDetails.images?.background} className="rounded-full w-36 h-32"></img>
                <div className="ml-10">
                <h1 className="text-3xl text-white font-bold">{songDetails.title}</h1>
                <h3 className="text-xl text-gray-300">{songDetails.subtitle}</h3>
                <h3 className="text-xl text-gray-300">{songDetails.genres?.primary}</h3>
                </div>
            </div>
            <div className="mt-24 mb-10 md:text-left text-center">
                <h1 className="text-3xl text-white font-bold mb-10">LYRICS:</h1>
                {lyrics}
            </div>

        </div>
    )
}