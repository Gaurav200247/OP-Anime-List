import React from "react";
import { MediaIcons } from "../data";

const Footer = () => {
  return (
    <footer className="footer-container bottom-0 left-0 bg-black text-white flex flex-col justify-center items-center">
      <div className="footer-tab-heading-container flex flex-col justify-center items-center text-4xl mb-10 mt-5 pointer-events-none">
        CONTACTS
      </div>
      <div className="follow-links-container flex justify-between items-center mb-10 w-1/3">
        {MediaIcons.map((item, index) => {
          const { icon, link, color } = item;

          return (
            <a
              key={index}
              href={`${link}`}
              className="text-4xl single-media-icon"
              style={{ backgroundColor: `${color}` }}
            >
              {icon}
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
