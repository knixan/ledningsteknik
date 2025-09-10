"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#omoss", text: "Om oss" },
    { href: "#brif", text: "Brif" },
    { href: "#relining", text: "Tjänster" }, // Grupperat relining, rörinspektion under "Tjänster"
    { href: "#personal", text: "Personal" },
    { href: "#contact-form", text: "Kontakta oss" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/Images/Ledningsteknik-loggo-01.png"
            alt="Ledningsteknik Logo"
            width={150} // Justerat för att vara mer proportionerlig i navbaren
            height={50} // Justerat för att vara mer proportionerlig i navbaren
            className="h-12 w-auto" // Mindre och mer anpassad storlek
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 justify-center text-sm text-gray-600 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Öppna huvudmenyn</span>
          <FaBars className="w-6 h-6" /> {/* Lite större ikon */}
        </button>

        {/* Desktop Menu */}
        <div
          className={`w-full md:block md:w-auto ${
            isOpen ? "block" : "hidden"
          } md:order-2`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 px-3 font-semibold text-gray-700 hover:text-sky-600 transition-colors duration-300 ease-in-out rounded-md"
                  onClick={() => setIsOpen(false)} // Stäng menyn när en länk klickas
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
