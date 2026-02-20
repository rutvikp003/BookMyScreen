import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import mainLogo from "../../assets/main-icon-white.png";

const Footer = () => {
  return (
    <footer className="bg-[#2b2b2b] text-gray-400 text-sm">
      <div className="border-t border-gray-600 w-full" />
      <div className="flex flex-col items-center py-6">
        {/* logo */}
        <img src={mainLogo} alt="BookMyScreen Logo" className="w-30 rounded-sm mb-4" />

        {/* social media links */}
        <div className="flex space-x-4 mb-4">
          <FaFacebookF
            className="w-8 h-8 p-2 rounded-full text-white bg-gray-700"
            size={20}
          />
          <FaTwitter
            className="w-8 h-8 p-2 rounded-full text-white bg-gray-700"
            size={20}
          />
          <FaInstagram
            className="w-8 h-8 p-2 rounded-full text-white bg-gray-700"
            size={20}
          />
          <FaYoutube
            className="w-8 h-8 p-2 rounded-full text-white bg-gray-700"
            size={20}
          />
          <FaLinkedin
            className="w-8 h-8 p-2 rounded-full text-white bg-gray-700"
            size={20}
          />
        </div>
        {/* copyright info */}
        <p className="text-center text-xs px-4 max-w-4xl">
          Copyright 2025 © BookMyScreen Pvt Ltd. All rights reserved.
          <br />
        </p>

        <small>
          Disclaimer: BookMyScreen is a fictional clone created for educational
          purposes only. All trademarks, logos, and brand names are the property
          of their respective owners. Use of these names, logos, and brands does
          not imply endorsement.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
