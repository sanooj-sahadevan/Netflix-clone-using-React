/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./RowPost.css";
import { imageUrl,API_KEY } from "../../Constants/Constants";
import axios from "../../axios";
import Youtube from "react-youtube";
function RowPost(props) {
  const [movies, setMovies] = useState([]);

  const [urlid, seturlId] = useState("");
  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data);
      setMovies(response.data.results);
    });
    // .catch((err) => {
    //   alert("Neywork Error");
    // });
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response =>{
      
      if(response.data.results.length!==0){
        seturlId(response.data.results[0])
      }else{
        console.log('trailler not available');
      }
    })
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={() => handleMovie(obj.id)}
            className={props.isSmall ? "smallPoster" : "poster"}
            alt="poster"
            src={`${imageUrl + obj.backdrop_path}`}
          />
        ))}
      </div>

    { urlid && <Youtube opts={opts} videoId={urlid.key}  />}
    </div>
  );
}

export default RowPost;
