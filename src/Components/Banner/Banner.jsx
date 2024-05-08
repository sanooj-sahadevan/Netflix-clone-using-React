/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "./Banner.css";
import axios from '../../axios'



function Banner() {

useEffect(()=>{
  axios.get()
})




  return (
    <div className="banner">
      <div className="content">
        <h1 className="title">Movie Name</h1>
        <div className="bannerbuttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
          <div>
            <h1 className="description">
              fiwehfuiewhjewhui ewihfuiewhf wiuwjfbweui fyewif wiwesdbsd vidg78r
              sdjcbsdjkbwe sdihidhvery iugfuiy ihfhuiegf784 fyergf7wgj ef7wry
              g7ery hfuih 74y gfuie gf7w bier gf7 fweufew7qy
            </h1>
          </div>
        </div>
      </div>

      <div className="fade"></div>
    </div>
  );
}

export default Banner;
