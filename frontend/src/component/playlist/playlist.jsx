import React from 'react';
import "./playlist.css"
import img from "../../assets/1.jpg";
import img2 from "../../assets/2.jpeg";
import img4 from "../../assets/4.jpeg";
import { MdOutlineAddBox } from "react-icons/md";

function Playlist() {
    return ( 
        <div className='playlist'>
            <div className='play'>
                <span>Playlist</span>
                <span><MdOutlineAddBox /></span>
            </div>

            <div className='im'>
            <div className='tr'>
                <span><img src={img} alt='' /></span>
                <span>On The Road</span>
            </div>
            <div className='tr'>
                <span><img src={img2} alt='' /></span>
                <span>My Father</span>
            </div>
            <div className='tr'>
                <span><img src={img4} alt=''/></span>
                <span>Working God</span>
            </div>
            <div className='tr'>
            <span><img src={img2} alt='' /></span>
            <span>Miracle Working God</span>
            </div>
            </div>
        </div>
     );
}

export default Playlist;