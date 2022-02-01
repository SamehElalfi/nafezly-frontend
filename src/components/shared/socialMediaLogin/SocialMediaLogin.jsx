import React from "react";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

function SocialMediaLogin({className}) {
  return (
    <div className={`flex flex-col items-center justify-center ${className} `}>
      <span className="mb-4 text-lg">يمكنك التسجيل بإستخدام</span>
      <div className="flex flex-row items-center justify-center gap-8">
        <a href="https://" title="login with Facebook">
          <Icon className="bg-blue-500">
            <FaFacebookF />
          </Icon>
        </a>
        <a href="https://" title="login with Twitter">
          <Icon className="bg-sky-500">
            <FaTwitter />
          </Icon>
        </a>
        <a href="https://" title="login with Google">
          <Icon className="bg-red-500">
            <FaGoogle />
          </Icon>
        </a>
      </div>
    </div>
  );
}

function Icon({ children, className }) {
  return (
    <div
      className={`flex flex-row items-center justify-center rounded-full p-4 text-white shadow-lg ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
}

export default SocialMediaLogin;
