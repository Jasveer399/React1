import React from "react";
import {
  Copyright,
  facebook,
  instagram,
  twitter,
  linkedin,
  Bank,
} from "../assets";
import CTA from "./CTA";
import { footerLinks } from "../contants";

function Footer() {
  const comp = [
    {
      icon: facebook,
      link: "https://www.facebook.com/",
    },
    {
      icon: linkedin,
      link: "https://www.linkedin.com/",
    },
    {
      icon: instagram,
      link: "https://www.instagram.com/",
    },
    {
      icon: twitter,
      link: "https://www.twitter.com/",
    },
  ];
  return (
    <section>
      <div className="p-5 w-full bg-black text-white sm:p-20 sm:mr-10 sm:mt-10 mt-10">
        <div
          className=" 
      flex flex-col md:flex-row md:gap-40  rounded-xl"
        >
          <div className="mt-0 xs:mb-10">
            <img src={Bank} alt="AppLogo" className="max-w-[200px]" />
            <p className="text-dimWhite mt-8 max-w-[250px] leading-7">
              A new way to make the payments easy, reliable and secure.
            </p>
          </div>

          <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
            {footerLinks.map((footerLink) => (
              <div
                key={footerLink.key}
                className="flex flex-col ss:my-0 my-4 min-w-[150px]"
              >
                <h4 className="font-poppins font-semibold mb-2">
                  {footerLink.title}
                </h4>
                <ul>
                  {footerLink.links.map((link, index) => (
                    <a href={link.link}>
                      <li className="font-poppins font-normal text-[16px] leading-6 text-dimWhite hover:text-secondary cursor-pointer">
                        {link.name}
                      </li>
                    </a>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-[0.2px] bg-dimWhite" />
        <div className="flex justify-between h-10 ">
          <div
            className="flex 
          items-center"
          >
            <p className="text-dimWhite mr-2">Copyright</p>
            <img
              src={Copyright}
              alt="Copyright"
              className="w-[16px]  invert mr-4 "
            />
            <p className="text-dimWhite xs:block hidden ">2021 HooBank. All Rights Reserved.</p>
          </div>
          <div class="group gap-2 sm:gap-6 flex items-center">
            {comp.map((cp) => (
              <a href={cp.link}>
                 <img
              class="object-cover transition duration-300 ease-in-out transform hover:w-7"
              src={cp.icon}
              alt="Your Image"
            />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
