"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/Images/Ledningsteknik-loggo-01.png"
            alt="Ledningsteknik Logo"
            width={800}
            height={800}
            className="h-24 w-auto"
          />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <FaBars className="w-5 h-5" />
        </button>
        <div
          className={`w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                href="#omforetaget"
                className="block py-2 px-3 font-semibold text-blue-700 hover:text-red-700"
              >
                Om företaget
              </Link>
            </li>
            <li>
              <Link
                href="#brif"
                className="block py-2 px-3 font-semibold text-blue-700 hover:text-red-700"
              >
                Brif
              </Link>
            </li>
            <li>
              <Link
                href="#relining"
                className="block py-2 px-3 font-semibold text-blue-700 hover:text-red-700"
              >
                Tjänster
              </Link>
            </li>

            <li>
              <Link
                href="#contact-form"
                className="block py-2 px-3 font-semibold text-blue-700 hover:text-red-700"
              >
                Kontakta oss
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
