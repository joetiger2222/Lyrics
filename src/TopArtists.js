import React from "react";
import {Swiper,SwiperSlide} from 'swiper/react';
import { FreeMode } from "swiper";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";




export default function TopArtists(){




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
        
        <div className="w-full flex flex-col mt-8">

      <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl mb-2">Top Artist :</h2>
          
        </div>
        <div className="flex">
        {topPlays.map((song)=>(
            <img src={song.images?.background} className='rounded-full w-24 h-24 mx-2' />
        ))}

</div>


      </div>

    )
}