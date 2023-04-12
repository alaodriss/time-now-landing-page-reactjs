import React from "react";
import styled from "styled-components";
import Footer from "../footer/Footer";

const SV = styled.div`
  .services {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(0, 255, 251, 0.5);
    height: 350px;
  }

  button {
    padding: 17px 20px;
    background-color: #030385;
    color: white;
    border: none;
    font-weight: 600;
    border-radius: 5px;
    position: absolute;
  }

  span {
    color: #030385;
    font-weight: 600;
  }
  h1 {
    font-size: 20px;
    font-weight: 600;
    padding: 10px 0;
  }
  p {
    margin: 2rem 0px;
    color: gray;
  }
  .more_view {
    color: black;
    font-weight: 600;
  }
  .service_one {
    position: relative;
  }
`;

const Service = () => {
  return (
    <>
      <SV>
        <div className="services">
          <div className="service_one">
            <span> Unified Dashbord </span>
            <h1>
              Egestas himenaeos mauris neque cum <br />
              litora purus auctor libero.
            </h1>
            <p>
              Egestas himenaeos mauris neque cum litora purus auctor libero.{" "}
              <br />
              Tincidunt phasellus lacinia magna <br />
              ornare morbi molestie ultricies tellus.
            </p>
            <div className="btn_start">
              <button className="start">Start Scheduling</button>
            </div>
          </div>
          <div className="service_tow">
            <span> Unified Dashbord </span>
            <h1>
              Egestas himenaeos mauris neque cum <br />
              litora purus auctor libero.
            </h1>
            <p>
              Egestas himenaeos mauris neque cum litora purus auctor libero.{" "}
              <br />
              Tincidunt phasellus lacinia magna <br />
              ornare morbi molestie ultricies tellus.
            </p>
            <div>
              <span className="more_view">View Live Demo </span>
            </div>
          </div>
        </div>
      </SV>

      <Footer />
    </>
  );
};

export default Service;
