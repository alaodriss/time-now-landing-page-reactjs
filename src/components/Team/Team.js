import React from "react";
import U1 from "../../assets/UA1.png";
import U2 from "../../assets/UA2.png";
import U3 from "../../assets/UA3.png";
import U4 from "../../assets/UA4.png";
import U5 from "../../assets/UA5.png";
import U6 from "../../assets/UA6.png";
import U7 from "../../assets/UA7.png";
import styled from "styled-components";

const TM = styled.div`
  .team {
    display: flex;
    justify-content: space-around;
    margin-top: 20rem;
  }

  h1 {
    font-size: 25px;
    font-weight: 600;
    color: #030385;
  }
  p{
    padding-left: 2rem
  }
  .par2 {
    margin: 3rem 0;
  }
  img {
    margin: 3rem 1rem;
  }
`;

const Team = () => {
  return (
    <>
    <TM>
      <div className="team">
        <div className="team_profile">
          <h1>
            TimeNow is uesd by the most
            <br /> influential peopole .
          </h1>
          <div className="imgs">
            <img src={U1} height="35px" width="35px" alt="prfile" />
            <img src={U2} height="35px" width="35px" alt="prfile" />
            <img src={U3} height="35px" width="35px" alt="prfile" />
            <img src={U4} height="35px" width="35px" alt="prfile" />
            <img src={U5} height="35px" width="35px" alt="prfile" />
            <img src={U6} height="35px" width="35px" alt="prfile" />
            <img src={U7} height="35px" width="35px" alt="prfile" />
          </div>
        </div>
        <div className="team_text">
          <p className="par1">
            Egestas himenaeos mauris neque cum litora purus auctor libero.
            <br /> Tincidunt phasellus lacinia magna <br /> ornare morbi
            molestie ultricies
          </p>
          <p className="par2">
            Tincidunt phasellus lacinia magna ornare morbi <br /> molestie
            ultricies tellus
          </p>
        </div>
      </div>
    </TM>
    </>
  );
};

export default Team;
