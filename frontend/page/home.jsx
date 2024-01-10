import React from "react";
import Menu from "../src/component/menu/menu";
import Search from "../src/component/search/search";
import Type from "../src/component/type/type";
import Card from "../src/component/card/card";
import Profile from "../src/component/profile/profile";
import Music from "../src/component/music/music";
import Recent from "../src/component/recent/recent";

function Home() {
  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <div>
        <Menu />
      </div>
      <div>
        <Search />
        <Type />
        <Card />
      </div>
      <div style={{ padding: "15px 0" }}>
        <Profile />
        <Music />

        <div>
          <Recent />
        </div>
      </div>
    </div>
  );
}

export default Home;
