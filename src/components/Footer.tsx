import React from "react";
import Container from "./Container";
import { menuItems } from "@/utils/helper";
import Link from "next/link";
import { MdCall, MdLocationPin, MdMail } from "react-icons/md";
import { FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

const Footer: React.FC = () =>
{
  return (
    <footer className = "bg-secondary/20 pt-[100px]">
      <Container>
        <div className = "flex flex-col lg:flex-row gap-4 md:gap-10 px-4 md:px-0">
          <div className = "w-full lg:w-1/2">
            <div className = "relative max-w-full md:max-w-[200px] h-[50px]">
              <Image
                src = {logo}
                alt = "logo"
                fill
                sizes = "100vw"
                className = "object-contain"
              />
            </div>

            <p className = "mt-4 text-secondary text-justify">
              Welcome to Supernova, where creativity meets technology. We
              specialize in crafting innovative digital solutions tailored to
              elevate your brand and drive success in the digital world. From
              web development to online marketing, we&apos;re here to make your
              digital dreams a reality.
            </p>
          </div>

          <div className = "grid md:grid-cols-3 gap-6">
            <div className = "flex flex-col gap-4">
              <span className = "text-xl font-medium">Supernova</span>

              {
                menuItems.map(
                  (menu, idx) =>
                  (
                    <Link
                      key = {idx}
                      href = {menu.url}
                      className = "text-secondary w-fit"
                    >
                      {menu.name}
                    </Link>
                  )
                )
              }
            </div>

            <div className = "flex flex-col gap-4">
              <span className = "text-xl font-medium">Contact</span>

              <span className = "flex items-center gap-2 text-secondary">
                <MdCall className = "text-xl text-white"/> (406) 555-0120
              </span>

              <span className = "flex items-center gap-2 text-secondary">
                <MdMail className = "text-xl text-white"/>{" "}
                admin@supernova.com
              </span>

              <span className = "flex items-center gap-2 text-secondary">
                <MdLocationPin className = "text-xl text-white"/> Silicon Valley,
                California, USA
              </span>
            </div>

            <div className = "flex flex-col gap-4">
              <span className = "text-xl font-medium">Social</span>

              <a
                target = "_blank"
                href = "https://www.instagram.com/"
                className = "flex items-center gap-2 text-secondary"
              >
                <FaInstagram className = "text-xl text-white"/> Instagram
              </a>

              <a
                target = "_blank"
                href = "https://web.whatsapp.com/"
                className = "flex items-center gap-2 text-secondary"
              >
                <FaWhatsapp className = "text-xl text-white"/> Whatsapp
              </a>

              <a
                target = "_blank"
                href = "https://www.youtube.com/"
                className = "flex items-center gap-2 text-secondary"
              >
                <FaYoutube className = "text-xl text-white"/> Youtube
              </a>

              <a
                target = "_blank"
                href = "https://twitter.com/"
                className = "flex items-center gap-2 text-secondary"
              >
                <FaTwitter className = "text-xl text-white" /> Twitter
              </a>
            </div>
          </div>
        </div>

        <div className = "mt-8 pb-6">
          <p className = "text-sm text-center md:text-end text-secondary">
            &copy; { new Date().getFullYear() } Supernova. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;