import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-red-800 rounded-lg shadow-sm dark:bg-red-800 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/images/lednings-teknik-ltinitab-l.jpg"
              alt="Liten Logga"
              width={64}
              height={64}
              className="h-16 w-auto border-2 border-black"
            />
          </Link>
          <Link
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/images/brif-logo.png"
              alt="BRiF"
              width={64}
              height={64}
              className="h-16 w-auto"
            />
          </Link>
          <Link
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/images/stvf.png"
              alt="STVF"
              width={64}
              height={64}
              className="h-16 w-auto"
            />
          </Link>
          <Link
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/images/sintef.png"
              alt="Sintef"
              width={64}
              height={64}
              className="h-16 w-auto"
            />
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-white">
            <li>
              <Link
                href="#omforetaget"
                className="hover:underline me-4 md:me-6"
              >
                Om företaget
              </Link>
            </li>
            <li>
              <Link href="#relining" className="hover:underline me-4 md:me-6">
                Relining
              </Link>
            </li>
            <li>
              <Link
                href="#rorinspektion"
                className="hover:underline me-4 md:me-6"
              >
                Rörinspektion
              </Link>
            </li>
            <li>
              <Link href="#brif" className="hover:underline me-4 md:me-6">
                Brif
              </Link>
            </li>
            <li>
              <Link href="#omoss" className="hover:underline">
                Om oss
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-white sm:text-center dark:text-white">
          © 2023{" "}
          <Link href="#" className="hover:underline">
            Ledningsteknik AB
          </Link>
          . All Rights Reserved.
          <Link href="https://kodochdesign/" className="hover:underline">
            Design by Kod och Design
          </Link>
          .
        </span>
      </div>
    </footer>
  );
}
