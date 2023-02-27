import React from "react";
import { FaHome,FaHashtag  } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div
      className="bg-white/10 sticky  inset-0  h-screen hidden md:block"
      style={{
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        width: "25%",
      }}
    >
        <div className="mt-24 ml-5 " style={{display:'flex',flexDirection:'column',}}>
            <Link to='/'>
      <div className="flex cursor-pointer">
        <FaHome style={{color:'gray',width:'56px',height:'30px'}} />
        <h1 className="text-gray-300 text-xl font-bold hover:text-white">Discover</h1>
      </div>
      </Link>

      

      <div></div>
      </div>
    </div>
  );
}
