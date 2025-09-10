import Image from "next/image";
import Link from "next/link"; // Import Link for better internal navigation
import { FaPhone, FaEnvelope } from "react-icons/fa";

const personnel = [
  {
    name: "Martin Lindblom",
    title: "Verksamhetsansvarig relining",
    image: "/Images/card-martin.jpg",
    phone: "070-644 65 75",
    email: "martin@ltin.se",
  },
  {
    name: "Johan Roos",
    title: "Verksamhetsansvarig Rörinspektion",
    image: "/Images/card-johan.jpg",
    phone: "070-294 21 75",
    email: "johan@ltin.se",
  },
  {
    name: "Rasmus Blom",
    title: "Reliningstekniker",
    image: "/Images/card-rasmus.jpg",
    phone: "070-000 00 00",
    email: "rasmus@ltin.se",
  },
  {
    name: "Axel Carlsson",
    title: "Reliningstekniker",
    image: "/Images/card-axel.jpg",
    phone: "070-000 00 00",
    email: "axel@ltin.se",
  },
  {
    name: "Peter Lundberg",
    title: "Reliningstekniker",
    image: "/Images/card-peter.jpg",
    phone: "070-000 00 00",
    email: "peter@ltin.se",
  },
];

export default function Personnel() {
  // Dela upp personalen i två rader
  const firstRow = personnel.slice(0, 2);
  const secondRow = personnel.slice(2);

  return (
    <section id="personal" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-sky-800 sm:text-5xl">
            Vårt team
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Möt personerna bakom Ledningsteknik AB.
          </p>
        </div>

        {/* Första raden med två kort */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
          {firstRow.map((person) => (
            <div
              key={person.name}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center p-8 border border-gray-100 w-full md:w-1/2"
            >
              <div className="relative w-32 h-32 mb-6">
                <Image
                  src={person.image}
                  alt={`Profilbild av ${person.name}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full border-3 border-sky-600 shadow-md"
                />
              </div>
              <h3 className="text-2xl font-bold text-center text-red-800 mb-2">
                {person.name}
              </h3>
              <p className="text-md text-sky-600 text-center font-medium mb-4">
                {person.title}
              </p>
              <div className="flex flex-col items-center space-y-3 mt-auto">
                {person.phone !== "070-000 00 00" && (
                  <Link
                    href={`tel:${person.phone.replace(/[-\s]/g, "")}`}
                    className="flex items-center text-gray-700 hover:text-sky-600 transition-colors duration-300"
                  >
                    <FaPhone className="mr-3 text-lg" />
                    <span className="text-lg">{person.phone}</span>
                  </Link>
                )}
                {person.email !== "E-post" && (
                  <Link
                    href={`mailto:${person.email}`}
                    className="flex items-center text-gray-700 hover:text-sky-600 transition-colors duration-300"
                  >
                    <FaEnvelope className="mr-3 text-lg" />
                    <span className="text-lg">{person.email}</span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Andra raden med tre kort */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {secondRow.map((person) => (
            <div
              key={person.name}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center p-8 border border-gray-100"
            >
              <div className="relative w-32 h-32 mb-6">
                <Image
                  src={person.image}
                  alt={`Profilbild av ${person.name}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full border-3 border-sky-600 shadow-md"
                />
              </div>
              <h3 className="text-2xl font-bold text-center text-red-800 mb-2">
                {person.name}
              </h3>
              <p className="text-md text-sky-600 text-center font-medium mb-4">
                {person.title}
              </p>
              <div className="flex flex-col items-center space-y-3 mt-auto">
                {person.phone !== "070-000 00 00" && (
                  <Link
                    href={`tel:${person.phone.replace(/[-\s]/g, "")}`}
                    className="flex items-center text-gray-700 hover:text-sky-600 transition-colors duration-300"
                  >
                    <FaPhone className="mr-3 text-lg" />
                    <span className="text-lg">{person.phone}</span>
                  </Link>
                )}
                {person.email !== "E-post" && (
                  <Link
                    href={`mailto:${person.email}`}
                    className="flex items-center text-gray-700 hover:text-sky-600 transition-colors duration-300"
                  >
                    <FaEnvelope className="mr-3 text-lg" />
                    <span className="text-lg">{person.email}</span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
