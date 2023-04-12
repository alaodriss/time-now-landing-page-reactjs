import React from "react";
import CheckMark from "../../assets/Checkmark.svg";
import MockUp from "../../assets/Mockup.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Team from "../Team/Team";

const SliDer = styled.div`
  .slider {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .silder_infos {
    width: 550px;
    margin-left: 7%;
  }

  .links_pages {
    display: flex;
    align-items: center;
  }
  li {
    text-decoration: none;
    list-style-type: none;
    padding-right: 30px;
  }

  .silder_img:before {
    content: "";
    background-color: #00fffb;
    height: 700px;
    position: absolute;
    width: 50%;
    right: 0;
    top: 0;
    z-index: -1;
  }
  button {
    padding: 17px 20px;
    background-color: #030385;
    color: white;
    border: none;
    font-weight: 600;
    border-radius: 5px;
  }

  h1 {
    font-size: 51px;
    font-weight: 600;
    color: #030385;
  }
  p {
    padding: 20px 0;
  }
  span {
    padding-left: 25px;
    font-weight: 600;
  }

`;

const Silder = () => {
  return (
    <> 
    <SliDer>
      <div className="slider">
        <div className="silder_infos">
          <h1>
            Poset When your <br /> audience is most
            <br /> active.
          </h1>
          <p>
            Egestas himenaeos mauris neque cum litora purus auctor
            <br /> libero. Tincidunt phasellus lacinia magna ornare
            <br /> morbi molestie ultricies tellus
          </p>
          <div className="navbar_btn">
            <button className="start">Start Scheduling</button>
            <span> View Demo</span>
            <p className="more">
              <img className="check" width='22px' height="14" src={CheckMark} alt="icon" />
              TimeNow does not sell your data . <Link> Learn more </Link>
            </p>
          </div>
        </div>
        <div className="silder_img">
          <img src={MockUp} width="550px" height="500px" alt="bg" />
        </div>
      </div>
    </SliDer>
    
    <Team />
    </>
  );
};

export default Silder;
