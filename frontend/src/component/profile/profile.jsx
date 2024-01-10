import React from "react";
import imgs from '../../assets/2.jpeg'
import { GoBell } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io"
import { Link } from "react-router-dom";

function Profile() {
  return (
    <section>
      <div style={{display: "flex", alignItems: "center", gap: "1rem", margin: "20px 0"}}>
      <div style={{background: "wheat", padding: "6px", borderRadius: "50%", opacity: "0.8"}} >
      <GoBell/>
      </div>
 
        <div>
            <img src={imgs} alt="" style={{height: "40px", width: "40px", borderRadius: "50%"}} />
        </div>
        <span>Samuel</span>
        <span><IoIosArrowDown /></span>
      </div>
    </section>
  );
}

export default Profile;
