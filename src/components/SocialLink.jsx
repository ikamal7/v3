import React from "react";
import socialLinksData from "@/app/contents/socialLinks";

export default function SocialLink() {
  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
      {socialLinksData.map((social, index) =>(
        <li key={index} className="mr-5 text-xs shrink-0">
        <a
          className="block hover:text-slate-200"
          href={social.link}
          target={social.target}
          rel="noreferrer noopener"
          aria-label={social.ariaLabel}
          title={social.name}
        >
          <span className="sr-only">{social.name}</span>
          {social.icon}
        </a>
      </li>
      
      ))}
      
      
      
      
    </ul>
  );
}
