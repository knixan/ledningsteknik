import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <div
      id="omforetaget"
      className="relative w-full min-h-screen flex items-center justify-center p-4 text-center overflow-hidden"
    >
      <Image
        src="/Images/bakgrund1.jpg"
        alt="bakgrundsbild"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute z-0"
      />

      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      <div className="relative z-20 flex flex-col items-center justify-center px-4 md:px-8 max-w-4xl">
        <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg">
          Relining, nya rör utan att gräva eller riva
        </h1>
        <p className="mb-8 text-lg sm:text-xl font-light text-gray-200 drop-shadow-md">
          Verksamma i Norr- och Västerbotten med fokus på Piteå, Luleå, Boden,
          Älvsbyn och Skellefteå.
        </p>
        <Link
          href="#contact-form"
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-red-700 rounded-full shadow-lg hover:bg-red-800 transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-red-300"
        >
          Kontakta oss
          <FaArrowRight className="w-4 h-4 ml-3" />
        </Link>
      </div>
    </div>
  );
}
