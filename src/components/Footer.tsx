import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black rounded-lg shadow-sm m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/Images/NylogotypLedningsteknikoriginal-01.jpg"
              alt="Liten Logga"
              width={500}
              height={500}
              className="h-18 w-auto border-2 border-black"
            />
          </Link>
          <Link
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/Images/brif-logo.png"
              alt="BRiF"
              width={500}
              height={500}
              className="h-18 w-auto"
            />
          </Link>
          <Link
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/Images/stvf.png"
              alt="STVF"
              width={500}
              height={500}
              className="h-18 w-auto"
            />
          </Link>
          <Link
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/Images/sintef.png"
              alt="Sintef"
              width={500}
              height={500}
              className="h-18 w-auto"
            />
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-semibold text-blue-500 sm:mb-0">
            <li>
              <Link
                href="#omforetaget"
                className="  hover:text-red-700 me-4 md:me-6"
              >
                Om företaget
              </Link>
            </li>
            <li>
              <Link
                href="#relining"
                className="  hover:text-red-700 me-4 md:me-6"
              >
                Relining
              </Link>
            </li>
            <li>
              <Link
                href="#rorinspektion"
                className="  hover:text-red-700 me-4 md:me-6"
              >
                Rörinspektion
              </Link>
            </li>
            <li>
              <Link href="#brif" className="  hover:text-red-700 me-4 md:me-6">
                Brif
              </Link>
            </li>
            <li>
              <Link href="#omoss" className="  hover:text-red-700">
                Om oss
              </Link>
            </li>
          </ul>
        </div>

        {/* Adress tillagd här */}
        <div className="flex flex-col items-center sm:items-end mt-4 text-gray-200">
          <h3 className="text-lg font-semibold mb-2">Ledningsteknik AB</h3>
          <p className="text-sm">Hammarvägen 28</p>
          <p className="text-sm">943 36 Öjebyn</p>
          <br />
          <p className="text-sm">Telefon: 0911-105 15 </p>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-200 sm:text-center">
          © 2023{" "}
          <Link href="#" className="  hover:text-blue-500">
            Ledningsteknik AB
          </Link>
          . All Rights Reserved.
          <Link
            href="https://kodochdesign.se"
            className="  hover:text-blue-500"
          >
            Design by Kod och Design
          </Link>
          .
        </span>
      </div>
    </footer>
  );
}
