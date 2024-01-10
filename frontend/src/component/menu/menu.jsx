import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineMenuBook } from "react-icons/md";
import { IoHome, IoSearchOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import "./menu.css";
import Playlist from "../playlist/playlist";

function Menu() {
  return (
    <div className="menu">
      <div className="logo">SMusiz</div>
      <div className="menu1">
        <span>Menu</span>
        <span style={{fontSize: '25px'}}>
          <MdOutlineMenuBook />
        </span>
      </div>
      <div className="link">
        <Link
          to=""
          style={{
            textDecoration: "none",
            color: "white",
            display: "flex",
            gap: "10px",
            alignItems: "center",
            opacity: '0.5'
          }}
        >
          <span>
            <IoHome />
          </span>
          <span>Home</span>
        </Link>
        <Link
          to=""
          style={{
            textDecoration: "none",
            color: "white",
            display: "flex",
            gap: "10px",
            alignItems: "center",
            opacity: '0.5'
          }}
        >
          <IoSearchOutline />
          Search
        </Link>
        <Link
          to=""
          style={{
            textDecoration: "none",
            color: "white",
            display: "flex",
            gap: "10px",
            alignItems: "center",
            opacity: '0.5'
          }}
        >
          <CiSettings />
          Setting
        </Link>
      </div>

      <Playlist />
    </div>
  );
}

export default Menu;
