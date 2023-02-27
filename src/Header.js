import React from "react";
import { Link } from "react-router-dom";
export default function Header(){
    return (
        <div className="width-full bg-white/5 md:hidden items-center">
            <Link to='/'>
            <h1 className="text-white font-bold text-xl ml-10">Discover</h1>
            </Link>
        </div>
    )

}