import React from "react";

function SocialIcon({ img, link, alt }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={img} alt={alt} className="h-10 w-10" />
    </a>
  );
}

export default SocialIcon;
