import React from "react";
import EmailIcon from "@/assets/icons/email.png";
import TwitterIcon from "@/assets/icons/twitter.png";
import FacebookIcon from "@/assets/icons/facebook.png";
import PinterestIcon from "@/assets/icons/pinterest.png";
import SocialIcon from "./ui/SocialIcon";

function Footer() {
  return (
    <footer className="py-3">
      <div className="px-4 flex items-center gap-2 flex-col md:flex-row md:justify-between">
        {/* Left: Text */}
        <div className="flex flex-col items-center text-center gap-1 md:flex-row md:items-center md:text-left">
          <span>Friends of Charleston Lake Park</span>
          <span className="hidden md:inline mx-2">|</span>
          <span>
            Website by{" "}
            <a
              href="https://www.linkedin.com/in/noah-miller-8556a7235"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Noah Miller
            </a>
          </span>
        </div>

        <hr className="block md:hidden mb-5 mt-5" />

        {/* Right: Social Icons */}
        <div className="flex items-center gap-x-2 md:px-4">
          <SocialIcon
            img={EmailIcon}
            link="mailto:info@friendsofcharlestonlakepark.ca"
            alt="Email"
          />
          <SocialIcon
            img={TwitterIcon}
            link="https://x.com/CharlestonLkPP"
            alt="Twitter/X"
          />
          <SocialIcon
            img={FacebookIcon}
            link="https://www.facebook.com/friendscharlestonlakepark"
            alt="Facebook"
          />
          <SocialIcon
            img={PinterestIcon}
            link="https://www.pinterest.ca/ontarioparks/charleston-lake/"
            alt="Pinterest"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
