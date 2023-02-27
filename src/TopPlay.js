import React from "react";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

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

export default function TopPlay(){

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
<div className="xl:max-w-[400px] max-w-[250px] flex flex-col ">

    <div className="mt-4" style={{width:'100%'}}>
    <h1 className="text-white text-2xl font-bold mb-4">Top Songs :</h1>
    {topPlays.map((song,i)=>(
        <TopChartCard song={song} i={i} />
    ))}
 
  </div>



  <div className="w-full flex flex-col mt-4">

<div className="flex flex-row justify-between items-center">
    <h2 className="text-white font-bold text-2xl">Top Artist</h2>
    
  </div>


      <Swiper
        slidesPerView="auto"
        spaceBetween={15}
        freeMode
        centeredSlides
        centeredSlidesBounds
        modules={[FreeMode]}
        className="mt-4"
      >
        {topPlays?.map((song,i)=>(
            <SwiperSlide
            key={song?.key}
            style={{width:'25%',height:'auto'}}
            className="shadow-lg rounded-full animate-slideright"
            >
             
                <img src={song?.images.background} className="rounded-full w-full object-cover" />
              
            </SwiperSlide>
        ))}


      </Swiper>


</div>




  </div>
)

}