import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import img from "../../assets/card2.png";
import "./recent.css";

function Recent() {
  return (
    <section>
      <div className="recent">
        <h1>Recent Playing</h1>

        <div className="recent1">
          <img src={img} alt="" height={20} />
          <span>
            My Lord
            <p>the gosple</p>
          </span>
        </div>
        <div className="recent1">
          <img src={img} alt="" height={20} />
          <span>
            glory
            <p>sam</p>
          </span>
        </div>
        <div className="recent1">
          <img src={img} alt="" height={20} />
          <span>
            lifter
            <p>Samuel SU</p>
          </span>
        </div>

        <div className="p">
          See More <FaLongArrowAltRight />
        </div>
      </div>
    </section>
  );
}

export default Recent;
