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
    <div className="mx-auto md:flex block  font-manrope">
      <div className="md:max-w-sm">
        <img src={drawers} alt="" />
      </div>
      <div className="md:max-w-lg mx-auto  sm:flex bg-white block flex-col gap-y-4 px-8 justify-center">
        <h3 className="md:text-2xl text-base mb-2 text-[#4a5061] font-bold">
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
            <div>
              <img src={avatar} alt="" className="w-16 h-16 rounded-full" />
            </div>
            <div>
              <h4 className="text-[#4a5061] font-bold text-sm">
                Michelle Appleton
              </h4>
              <h5 className="text-[#9ea1aa] text-xs">28 Jun 2020</h5>
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-2  ">
            {isSocialMediaVisible && (
              <div
                id="social-media-wrapper"
                className="bg-[#48556A]  h-auto py-4 w-64 flex justify-center items-center rounded-lg "
              >
                <ul className="flex gap-x-4">
                  <li className="text-base text-white tracking-[.25em]">
                    SHARE
                  </li>
                  <li>
                    <img src={facebook} alt="" className="w-6 h-6" />
                  </li>
                  <li>
                    <img src={facebook} alt="" className="w-6 h-6" />
                  </li>
                  <li>
                    <img src={facebook} alt="" className="w-6 h-6" />
                  </li>
                </ul>
              </div>
            )}
            <button
              className="bg-[#edf2f7] w-9 h-9 flex items-center justify-center rounded-full active:bg-[rgb(24,28,34)] active:text-white"
              onClick={toggleSocialMedia}
            >
              <i className="active:bg-white">
                <img src={share} alt="" />
              </i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
