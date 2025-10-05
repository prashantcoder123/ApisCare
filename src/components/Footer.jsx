

//import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-4 text-center mt-4 rounded-lg mb-4">
      {/* Company Info */}
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-2 space-y-1 md:space-y-0">
        <p className="text-sm ">© {new Date().getFullYear()} Apis Care Pvt. Ltd.</p>
        <p className="text-sm">All Rights Reserved.</p>
      </div>

      {/* Developer */}
      <p className="text-sm mt-1">
        Developed by <span className="font-semibold text-white">Prashant Kumar</span>
      </p>

      {/* Social Icons */}
      <div className="flex justify-center space-x-5 mt-3 text-xl">
        
        <a
          href="https://www.linkedin.com/in/prashant-kumar-16b010261/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/prashantcoder123"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors"
        >
          <FaGithub />
        </a><a
          href="https://www.instagram.com/prashantt_1718/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition-colors"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}

