import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaPauseCircle } from "react-icons/fa";
import imgg from "../../assets/card3.png";
import { IoPlaySkipBackOutline, IoPlaySkipForwardOutline, IoRepeat, IoShuffle } from "react-icons/io5";
import './music.css'

function Music() {
  return (
    <section>
      <div className="music">
        <span style={{display: "flex", justifyContent: "flex-end"}}>
          <IoIosArrowDown />
        </span>
        <div className="music1">
          <img src={imgg} alt="" style={{ height: "70px" }} />
        </div>
        <div className="music2">
          <span>03.50 - 05.00</span>
          <h1>your Name</h1>
          <span>Samuel Su</span>
        </div>
        <div className="music3">
          <span className="music6"><IoPlaySkipBackOutline /></span>
          <span className="music5"><FaPauseCircle /></span>
          <span className="music6"><IoPlaySkipForwardOutline /></span>
        </div>
        <div className="music4">
          <span><IoShuffle /></span>
          <span><IoRepeat /></span>
        </div>
      </div>
    </section>
  );
}

export default Music;
