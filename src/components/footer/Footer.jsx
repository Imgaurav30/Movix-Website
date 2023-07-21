import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import{IoLogoYoutube} from "react-icons/io"

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";
import { Link } from "react-router-dom";
const socialIcon = [
  {
    socialIcon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/gaurav30/",
  },
  {
    socialIcon: <FaInstagram />,
    path: "https://www.instagram.com/im_gaurav30/",
  },
  {
    socialIcon: <FaFacebookF />,
    path: "https://www.facebook.com/profile.php?id=100004834777377",
  },
  {
    socialIcon: < IoLogoYoutube
    />,
    path: "https://www.youtube.com/channel/UCDJbNaI6xOKBz7tqlQbx_bQ",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">
            <Link to="/termsofuse" className="link">Terms Of Use</Link>
          </li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
        At Movix, the online video streaming Over The Top (OTT) platform, we truly believe that for entertainment to come alive, you need to feel it. That’s where Movix brings in the advantage of the language of your comfort! With 12 navigational and featured languages across original features, live TV, catch up TV, lifestyle shows, children's programmes, exclusive short series and acclaimed plays - it’s unlimited entertainment in the language that sounds like home. Movix offers an exhaustive array of content; with 90+ live TV channels and 1.25 lac+ hours of viewing across the languages of English, Hindi, Bengali, Malayalam, Tamil, Telugu, Kannada, Marathi, Oriya, Bhojpuri, Gujarati & Punjabi making it a complete video destination for OTT viewers. Our exhaustive selection of Bollywood and language movies make us the preferred destination for an avid cinema connoisseur.

        <br /><br />

We offer a comfortable and friendly user experience with highly evolved video streaming technology at amazing speed and crystal clear sounds. Language Navigation, Seamless Video playback, Smart Content Search & recommendation, option to choose video quality and much more create a video experience like no other. All you need is a compatible connected device. Tune into Movix now, in your language!
        </div>
        <div className="socialIcons">
          {socialIcon.map((icons, index) => (
            <span className="icon" key={index}>
              <Link to={icons.path} target="_blank" className="link">
                <p className="iconSize">{icons.socialIcon}</p>
              </Link>
            </span>
          ))}
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
