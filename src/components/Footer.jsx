import React from "react";
import EmailIcon from "@/assets/icons/email.png";
import TwitterIcon from "@/assets/icons/twitter.png";
import FacebookIcon from "@/assets/icons/facebook.png";
import PinterestIcon from "@/assets/icons/pinterest.png";

function Footer() {
  return (
    <footer className="py-3">
      <div className="px-4 flex flex-col items-center md:flex-row md:justify-between">
        {/* Left: Text */}
        <div className="flex items-center">
          <span>
            Friends of Charleston Lake Park | Website by{" "}
            <a
              href="https://www.linkedin.com/in/noah-miller-8556a7235"
              target="_blank"
              rel="noopener noreferrer"
            >
              Noah Miller
            </a>
          </span>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-x-2 md:px-4">
          <a
            href="mailto:info@friendsofcharlestonlakepark.ca"
            aria-label="Email"
          >
            <img src={EmailIcon} alt="Email icon" className="h-10 w-10" />
          </a>
          <a
            href="https://twitter.com/CharlestonLkPP"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter/X"
          >
            <img src={TwitterIcon} alt="Twitter icon" className="h-10 w-10" />
          </a>
          <a
            href="https://www.facebook.com/friendscharlestonlakepark"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img src={FacebookIcon} alt="Facebook icon" className="h-10 w-10" />
          </a>
          <a
            href="https://www.pinterest.ca/ontarioparks/charleston-lake/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pinterest"
          >
            <img
              src={PinterestIcon}
              alt="Pinterest icon"
              className="h-10 w-10"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
