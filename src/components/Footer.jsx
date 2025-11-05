import React from "react";
import EmailIcon from "@/assets/icons/email.png";
import TwitterIcon from "@/assets/icons/twitter.png";
import FacebookIcon from "@/assets/icons/facebook.png";
import PinterestIcon from "@/assets/icons/pinterest.png";
import SocialIcon from "./ui/SocialIcon";

function Footer() {
  return (
    <footer>
      <div className="px-4 flex items-center gap-2 flex-col md:flex-row md:justify-between">
        {/* Left: Text */}
        <div
          className="flex flex-col items-center text-center gap-1 md:flex-row md:items-center md:text-left"
          id="footer-name-section"
        >
          <span>Friends of Charleston Lake Park</span>
        </div>

        <hr className="block md:hidden" />

        {/* Right: Social Icons */}
        <div className="flex items-center gap-x-2">
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
