import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <div
      id="omforetaget"
      className="relative w-screen h-96 flex items-center justify-center"
    >
      <Image
        src="/images/bakgrund1.jpg"
        alt="bakgrundsbild"
        fill
        className="absolute z-0 object-cover"
      />

      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
          Relining, nya rör utan att gräva eller riva
        </h1>
        <p className="mb-6 text-lg font-normal lg:text-xl sm:px-16 xl:px-48">
          Verksamma i Norr- och Västerbotten med fokus på Piteå, Luleå, Boden,
          Älvsbyn och Skellefteå.
        </p>
        <Link
          href="#contact-form"
          className="inline-flex items-center  hover:scale-110 justify-center px-5 py-3 m-4 text-base font-medium text-center bg-red-700 rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-300 dark:focus:ring-blue-800"
        >
          Kontakt oss
          <FaArrowRight className="w-3.5 h-3.5 ms-2 rtl:rotate-180" />
        </Link>
      </div>
    </div>
  );
}
