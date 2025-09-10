import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Sektion */}
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/Images/NylogotypLedningsteknikoriginal-01.jpg"
                alt="Ledningsteknik Logotyp"
                width={150}
                height={75}
                className="object-contain rounded-lg"
              />
            </Link>
            <p className="text-sm text-gray-400">
              Ledande inom rörinspektion och relining med fokus på kvalitet och
              innovation.
            </p>
          </div>

          {/* Navigationslänkar */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Navigering</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#omforetaget"
                  className="hover:text-sky-400 transition-colors duration-300"
                >
                  Om företaget
                </Link>
              </li>
              <li>
                <Link
                  href="#relining"
                  className="hover:text-sky-400 transition-colors duration-300"
                >
                  Relining
                </Link>
              </li>
              <li>
                <Link
                  href="#rorinspektion"
                  className="hover:text-sky-400 transition-colors duration-300"
                >
                  Rörinspektion
                </Link>
              </li>
              <li>
                <Link
                  href="#brif"
                  className="hover:text-sky-400 transition-colors duration-300"
                >
                  Brif
                </Link>
              </li>
              <li>
                <Link
                  href="#personal"
                  className="hover:text-sky-400 transition-colors duration-300"
                >
                  Om oss
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontaktinformation */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>
            <p className="text-sm text-gray-400">
              <strong>Ledningsteknik AB</strong>
              <br />
              Hammarvägen 28
              <br />
              943 36 Öjebyn
            </p>
            <p className="mt-4 text-sm text-gray-400">
              Kontor: 0911-105 15 <br />
              Martin Lindblom: 070-644 65 75 <br />
              Johan Roos: 070-294 21 75 <br /> E-post info@ledningsteknik.se
            </p>
          </div>
        </div>

        {/* Partners */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col items-center md:flex-row md:justify-between">
          <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            <Link href="#" aria-label="BRiF">
              <Image
                src="/Images/brif-logo.png"
                alt="BRiF"
                width={100}
                height={50}
                className="h-12 w-auto object-contain filter hover:grayscale transition-all duration-300"
              />
            </Link>
            <Link href="#" aria-label="STVF">
              <Image
                src="/Images/stvf.png"
                alt="STVF"
                width={100}
                height={50}
                className="h-12 w-auto object-contain filter  hover:grayscale transition-all duration-300"
              />
            </Link>
            <Link href="#" aria-label="Sintef">
              <Image
                src="/Images/sintef.png"
                alt="Sintef"
                width={100}
                height={50}
                className="h-12 w-auto object-contain filter hover:grayscale transition-all duration-300"
              />
            </Link>
          </div>
          <span className="text-sm text-gray-400">
            © {new Date().getFullYear()} Ledningsteknik AB. All Rights Reserved.
            <br />
            <Link
              href="https://kodochdesign.se"
              className="text-sky-400 hover:underline"
            >
              Kod och Design
            </Link>{" "}
            av Josefine .
          </span>
        </div>
      </div>
    </footer>
  );
}
