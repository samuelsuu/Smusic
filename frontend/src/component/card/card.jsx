import React from "react";
import img from "../../assets/card1.png";
import img2 from "../../assets/card5.png";
import img3 from "../../assets/card4.png";
import "./card.css";

function Card() {
  return (
    <section>
      <div className="card">
        <div className="card1">
          <div className="cardd">
            <h1>The Most Hitz</h1>
            <h1>Music In 2023</h1>
            <span>220 Music List</span>
            <br />
            <button>Listen Now</button>
          </div>
          <div className="cardimg">
            <img src={img} alt="" />
          </div>
        </div>

        <div className="card2">
          <div className="cardd1">
            <div className="cardd2">
              <h3>Relax</h3>
            </div>
          </div>
        </div>
      </div>


      <div className="card">
        <div className="card3">
            <div className="cardd3"> 
                <div className="cardd4">
                    <h3>Pop Punk</h3>
                </div>
            </div>
        </div>

        <div className="cardw1">
          <div className="cardd">
            <h1>Nostalgic Songs</h1>
            <h1>90S high school era</h1>
            <span>220 Music List</span>
            <br />
            <button>Listen Now</button>
          </div>
          <div className="cardimg3">
            <img src={img2} alt="" />
          </div>
        </div>
      </div>


      <div className="card">
        <div className="cardw2">
          <div className="cardd">
            <h1>This song will shake</h1>
            <h1>your spirit</h1>
            <span>220 Music List</span>
            <br />
            <button>Listen Now</button>
          </div>
          <div className="cardimg">
            <img src={img} alt="" />
          </div>
        </div>

        <div className="card4">
            <div className="cardd5"> 
                <div className="cardd5">
                    <h3>Gospel</h3>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
