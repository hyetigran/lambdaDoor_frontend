import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const StyledDiv = styled.div`
  background: #bb1333;
  display: flex;
  padding: 10px 5px 15px 5px;
  justify-content: center;
  color: #ffffff;
  margin-top: 20px;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem; /* Footer height */
  align-items: center;

  a {
    margin: 0 1rem;
    transition: transform 250ms;
    display: inline-block;
    color: #ffffff;
  }

  a:hover {
    transform: translateY(-3px);
  }
  .social-handle {
    display: flex;
    text-align: right;
    margin-right: 3%;
  }
  .copy-right {
    margin-right: 16%;
  }
  .tagline {
    text-align: left;
    margin-right: 15%;
  }
  @media only screen and (max-width: 1125px) {
    .social-handle {
      margin-right: 3%;
    }
    .tagline {
      margin-right: 10%;
    }
    .copy-right {
      margin-right: 10%;
    }
  }
  @media only screen and (max-width: 900px) {
    .social-handle {
      margin-right: 3%;
    }
    .tagline {
      margin-right: 5%;
    }
    .copy-right {
      margin-right: 5%;
    }
  }
  @media only screen and (max-width: 790px) {
    .social-handle {
      margin-right: 2%;
    }
    .tagline {
      margin-right: 3.5%;
    }
    .copy-right {
      margin-right: 3.5%;
    }
    a {
      margin: 0 0.5rem;
    }
    font-size: 14px;
  }
  @media only screen and (max-width: 705px) {
    .tagline {
      display: none;
    }
    a {
      margin: 0 1rem;
    }
    justify-content: space-evenly;
  }
  @media only screen and (max-width: 400px) {
    a {
      margin: 0 0.4rem;
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 359px) {
    a {
      margin: 0 0.2rem;
      font-size: 10px;
    }
  }
`;

export default function Footer() {
  return (
    <StyledDiv>
      <div className="tagline">
        Built by Lambda students, for Lambda students.
      </div>
      <div className="copy-right"> &copy; 2020 LambdaDoor</div>
      <div className="social-handle">
        <a href="https://twitter.com/LambdaSchool" className="twitter">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://www.facebook.com/LambdaSchoolOnline/"
          className="facebook"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/school/lambdaschool/"
          className="linkdIn"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://lambdaschool.com/" className="webpage">
          <FontAwesomeIcon icon={faGlobe} size="2x" />
        </a>
      </div>
    </StyledDiv>
  );
}