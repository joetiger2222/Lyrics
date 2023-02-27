import React from "react";
import loader from './loader.svg';

export default function Loader({title}){
    return(
        <div style={{
            display:'flex',
            flexDirection:'column',
           
            alignItems:'center',
        }}>
        <img src={loader}></img>
        <h1 style={{color:'white',fontSize:'2em'}}>{title}</h1>
        </div>
    )
}