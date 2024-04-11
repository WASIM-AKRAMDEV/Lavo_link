import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#151D48] overflow-hidden">
      <div className="mx-auto  px-2 sm:px-2 lg:px-2 max-w-[1550px] flex flex-col justify-center items-center">
        <div className="flex md:flex-row lg:flex-row xl:flex-row flex-col  justify-between gap-2 flex-wrap sm:flex-col w-full sm:  md:w-full lg:w-[86%]  py-16">
          <ul>
            <li className="my-5">
              <a
                href="#"
                className="text-base text-white font-light hover:underline"
              >
                About
              </a>
            </li>
            <li className="my-5">
              <a
                href="#"
                className="text-base text-white font-light hover:underline"
              >
                Feedback
              </a>
            </li>
            <li className="my-5">
              <a
                href="#"
                className="text-base text-white font-light  hover:underline transition-all"
              >
                Community
              </a>
            </li>
          </ul>
          <ul>
            <li className="my-5">
              <a
                href="#"
                className="text-base text-white font-light  hover:underline transition-all"
              >
                Terms & Services
              </a>
            </li>
            <li className="my-5">
              <a
                href="#"
                className="text-base text-white font-light  hover:underline transition-all"
              >
                Privacy & Policy
              </a>
            </li>
            <li className="my-5">
              <a
                href="#"
                className="text-base text-white font-light  hover:underline transition-all"
              >
                Security
              </a>
            </li>
          </ul>
          <ul>
            <li className="my-5">
              <a
                href="#"
                className="text-base text-white font-light  hover:underline transition-all"
              >
                Accessibilities
              </a>
            </li>
            <li className="my-5">
              <a
                href="#"
                className="text-base text-white font-light  hover:underline transition-all"
              >
                Cookies Policy
              </a>
            </li>
            <li className="my-5">
              <a
                href="#"
                className="text-base text-white font-light  hover:underline transition-all"
              >
                Community
              </a>
            </li>
          </ul>
          <ul>
            <li className="my-5">
              <a
                href="#"
                className="text-base text-white font-light  hover:underline transition-all"
              >
                Help Center
              </a>
            </li>
            <li className="my-5">
              <a
                href="#"
                className="text-base text-white font-light  hover:underline transition-all"
              >
                Cookies Setting
              </a>
            </li>
            <li className="my-5">
              <a
                href="#"
                className="text-base text-white font-light  hover:underline transition-all"
              >
                Help Center
              </a>
            </li>
          </ul>
          <ul>
            <li className="my-5">
              <a
                href="#"
                className="text-base text-white font-light  hover:underline transition-all"
              >
                Invite a friend
              </a>
            </li>
            <li className="my-5">
              <a
                href="#"
                className="text-base text-white font-light  hover:underline transition-all"
              >
                Events
              </a>
            </li>
            <li className="my-5">
              <a
                href="#"
                className="text-base text-white font-light  hover:underline transition-all"
              >
                Careers
              </a>
            </li>
          </ul>
          <ul>
            <li className="my-5">
              <a
                href="#"
                className="text-base text-white font-light  hover:underline transition-all"
              >
                Learn
              </a>
            </li>
            <li className="my-5">
              <a
                href="#"
                className="text-base text-white font-light  hover:underline transition-all"
              >
                Community Hub
              </a>
            </li>
            <li className="my-5">
              <a
                href="#"
                className="text-base text-white font-light  hover:underline transition-all"
              >
                Terms & Services
              </a>
            </li>
          </ul>
        </div>
        <div className="flex md:flex-row lg:flex-row xl:flex-row flex-col space-y-4 sm:space-y-0  justify-between gap-2 flex-wrap py-5 border-t border-white w-full">
          <div className="flex gap-2 items-center">
          <a href="#" className="font-semibold text-[#151D48] w-24">
            <img src="/assets/images/tr.png" alt="" />
          </a>
          <p  className="text-white text-xs">© Lavolink International Ltd. 2024</p>
          </div>
          <div className=" flex gap-3 items-center text-white">
            <p className="text-sm font-light">Follow Us:</p>
            <AiFillFacebook className="text-base" />
            <FaInstagram className="text-base" />
            <FaXTwitter className="text-base" />
            <AiOutlineLinkedin className="text-base" />
          </div>
          <p className="text-sm text-white font-light">
            All copy reserved design by Lavolink
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
