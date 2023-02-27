import React from "react";
import { Link, useParams } from "react-router-dom";

export default function DiscoverSongCard({ song }) {
    let songId;
  if (song) {
    songId= song.key;
    console.log(songId)
  }
  return (
    <div
      className="backdrop-blur-sm bg-white/5 rounded-lg hover:bg-white/10 cursor-pointer"
      style={{
        margin: "20px",
        width: "30%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      <Link to={`/SongPage/${songId}`} style={{width:'100%'}}>

      <div style={{ width: "100%", marginBottom: "20px" }}>
        <img src={song.images?.coverart} style={{ width: "100%" }}></img>
      </div>
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h1
          className="truncate"
          style={{
            fontWeight: "bold",
            color: "white",
            fontSize: "1.5em",
            width: "100%",
            textAlign: "center",
          }}
        >
          {song.title}
        </h1>
        <h3
          className="truncate"
          style={{
            color: "#CCC",
            fontSize: "1.2em",
            width: "100%",
            textAlign: "center",
          }}
        >
          {song.subtitle}
        </h3>
      </div>

      </Link>
    </div>
  );
}
