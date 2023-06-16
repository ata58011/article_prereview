import React, { useState } from "react";
import drawers from "../images/drawers.jpg";
import avatar from "../images/avatar-michelle.jpg";
import share from "../images/icon-share.svg";
import facebook from "../images/icon-facebook.svg";

const Card = () => {
  const [isSocialMediaVisible, setSocialMediaVisible] = useState(false);

  const toggleSocialMedia = () => {
    setSocialMediaVisible((prevState) => !prevState);
  };

  return (
    <div className="mx-auto sm:flex block font-manrope relative">
      <div className="lg:max-w-sm max-w-xs">
        <img src={drawers} alt="" />
      </div>
      <div className="lg:max-w-lg sm:max-w-md max-w-xs mx-auto sm:flex bg-white block flex-col gap-y-4 px-8 justify-center">
        <h3 className="lg:text-2xl text-base mb-2 text-[#4a5061] font-bold">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h3>
        <p className="text-xs text-[#9ea1aa] mb-2">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I've got some simple tips to help
          you make any room feel complete.
        </p>
        <div className="flex justify-between items-center">
          <div id="user-part" className="flex items-center gap-x-4">
            <img src={avatar} alt="" className="w-16 h-16 rounded-full" />
            <div>
              <h4 className="text-[#4a5061] font-bold text-sm">
                Michelle Appleton
              </h4>
              <h5 className="text-[#9ea1aa] text-xs">28 Jun 2020</h5>
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-2 relative">
            {isSocialMediaVisible && (
              <div
                id="social-media-wrapper"
                className="bg-[#48556A] py-4 w-48	  block  sm:flex justify-center items-center rounded-lg absolute bottom-10"
              >
                <ul className="flex gap-x-4 items-center">
                  <li className="text-sm text-white tracking-[.25em]">SHARE</li>
                  <li>
                    <img src={facebook} alt="" className="w-4 h-4" />
                  </li>
                  <li>
                    <img src={facebook} alt="" className="w-4 h-4" />
                  </li>
                  <li>
                    <img src={facebook} alt="" className="w-4 h-4" />
                  </li>
                </ul>
              </div>
            )}
            <button
              className="bg-[#edf2f7] w-9 h-9 flex items-center justify-center rounded-full active:bg-[rgb(24,28,34)] active:text-white"
              onClick={toggleSocialMedia}
            >
              <img src={share} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
