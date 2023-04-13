import React, { useState } from "react";
import styled from "styled-components";
import Checkmark from "../../assets/Checkmark.svg";
const PriCing = styled.div`
  .infos_pricing {
    margin-top: 6em;
  }
  .start {
    padding: 17px 20px;
    background-color: #030385;
    color: white;
    border: none;
    font-weight: 600;
    border-radius: 5px;
    width: 100%;
    margin: 13px 0;
  }

  li {
    list-style-type: none;
    padding: 10px 0px;
  }
  li img {
    margin-right: 10px;
  }

  .tables {
    display: flex;
    justify-content: space-around;
    justify-items: center;
    align-items: center;
  }
  .table {
    border: 1px solid gray;
    padding: 35px;
  }
  h1 {
    text-align: center;
    font-size: 45px;
    font-weight: 600;
  }
  p {
    text-align: center;
    color: gray;
  }
`;

const Dpricing = () => {

     // Initialize the state for the prices
  const [price1, setPrice1] = useState(10);
  const [price2, setPrice2] = useState(20);
  const [price3, setPrice3] = useState(30);

  // Function to handle the button click and change the prices
  const handleClick = () => {
    setPrice1(price1 + 5);
    setPrice2(price2 + 5);
    setPrice3(price3 + 5);
  };


  return (
    <PriCing>
      <div className="infos_pricing">
        <h1> Flexible Plans for Everyone.</h1>
        <p>
          Our plans are made for everyone ; whetether you're just starting out
          on socail media, <br /> or have been on there for a long time, w have
          a plan that's right for you.
        </p>
        <button onClick={handleClick}> Billed </button>
        <div className="tables">
          <div className="table">
            <h2> ${price1} /mo</h2>
            <p> Prefect plan if you're just starting out</p>
            <hr></hr>
            <ul>
              <li>
                <img src={Checkmark} width="15px" height="15px" alt="bg" />
                Linkeind Integration
              </li>
              <li>
                <img src={Checkmark} width="15px" height="15px" alt="bg" />
                Twitter Integration
              </li>
              <li>
                <img src={Checkmark} width="15px" height="15px" alt="bg" />
                Real-time Analytics
              </li>
            </ul>
            <button className="start">Subsribe Now </button>
          </div>
          <div className="table">
            <h2> ${price2}/mo</h2>
            <p> Prefect plan if you're just starting out</p>
            <hr></hr>
            <ul>
              <li>
                <img src={Checkmark} width="15px" height="15px" alt="bg" />
                Linkeind Integration
              </li>
              <li>
                <img src={Checkmark} width="15px" height="15px" alt="bg" />
                Twitter Integration
              </li>
              <li>
                <img src={Checkmark} width="15px" height="15px" alt="bg" />
                Instagram Integration
              </li>

              <li>
                <img src={Checkmark} width="15px" height="15px" alt="bg" />
                Real-time Analytics
              </li>
            </ul>
            <button className="start">Subsribe Now </button>
          </div>
          <div className="table">
            <h2> ${price3}/mo</h2>
            <p> Prefect plan if you're just starting out</p>
            <hr></hr>
            <ul>
              <li>
                <img src={Checkmark} width="15px" height="15px" alt="bg" />
                Linkeind Integration
              </li>
              <li>
                <img src={Checkmark} width="15px" height="15px" alt="bg" />
                Twitter Integration
              </li>
            </ul>
            <button className="start">Subsribe Now </button>
          </div>
        </div>
      </div>
    </PriCing>
  );
};

export default Dpricing;
