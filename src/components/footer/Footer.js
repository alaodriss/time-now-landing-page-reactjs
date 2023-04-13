import React from "react";
import logo from "../../assets/Logo.svg";
import styled from "styled-components";

const FO = styled.div`
  position: relative;
  .footer_elemts {
    display: flex;
    justify-content: space-around;
    padding: 5rem 0;
  }

  li {
    text-decoration: none;
    list-style-type: none;
    padding: 3px 0;
  }
  .titre {
    font-weight: 600;
    padding: 1.3em 0;
  }
  .logo {
    position: absolute;
    top: 10%;
    left: 7%;
  }

  p {
    font-size: 15px;
    font-weight: 600;
    padding: 10px 0;
  }
  .send_mail {
    border-radius: 5px;
    padding: 4px 2px;
    border: 1px solid gray;
  }
  input {
    border: none;
  }
  .start {
    padding: 17px 20px;
    background-color: #030385;
    color: white;
    border: none;
    border-radius: 5px;
    font-weight: 600;
  }
`;

const Footer = () => {
  return (
    <FO>
      <div className="footer">
        <img className="logo" src={logo} alt="logo" />
        <div className="footer_elemts">
          <div>
            <ul>
              <li className="titre">Product</li>
              <li>Homepage</li>
              <li>Pricing</li>
              <li>Features</li>
            </ul>
          </div>

          <div>
            <ul>
              <li className="titre">Product</li>
              <li>Homepage</li>
              <li>Pricing</li>
              <li>Features</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="titre">Product</li>
              <li>Homepage</li>
              <li>Pricing</li>
              <li>Features</li>
            </ul>
          </div>
          <div>
            <p>Try TwwetNow</p>
            <div className="send_mail">
              <input type="text" placeholder="Email Address" />
              <input className="start" type="submit" value="Start Scheduling" />
            </div>
          </div>
        </div>
      </div>
    </FO>
  );
};

export default Footer;
