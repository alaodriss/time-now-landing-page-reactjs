import React from "react";
import logo from "../../assets/Logo.svg";
import styled from "styled-components";
import Silder from "../Silder/Silder";

const Nb = styled.div`
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 160px;
  }
  .navbar_link {
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
  button {
    padding: 17px 20px;
    background-color: #030385;
    color: white;
    border: none;
    border-radius: 5px;
    font-weight: 600;
  }
`;

const Header = () => {
  return (
    <>
      <Nb>
        <div className="navbar">
          <div className="navbar_link">
            <ul className="links_pages">
              <li>
                <img src={logo} alt="logo" />
              </li>
              <li>Features</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="navbar_btn">
            <button className="start">Start Scheduling</button>
          </div>
        </div>
      </Nb>
      <Silder />
    </>
  );
};

export default Header;
