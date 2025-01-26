"use client";

import Link from "next/link";
import Image from "next/image";
import NavbarLogo from "../public/hilink-logo.svg";
import Button from "./Button";
import { NAV_LINKS } from "@/constants";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen);

  return (
    <nav
      className="flexBetween max-container
  padding-container relative z-30 py-5"
    >
      <Link href="/">
        <Image src={NavbarLogo} alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer
            pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
        />
      </button>
      {isMenuOpen && (
        <div
          className="absolute top-full left-0 w-full bg-green-100/85
          flex flex-col items-center gap-4 py-4 lg:hidden shadow-md backdrop-blur-md"
        >
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-900 flexCenter cursor-pointer
              pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
