import Image from "next/image";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const personnel = [
  {
    name: "Martin Lindblom",
    title: "Verksamhetsansvarig relining",
    image: "/images/card-martin.jpg",
    phone: "070-644 65 75",
    email: "martin@ltin.se",
  },
  {
    name: "Johan Roos",
    title: "Verksamhetsansvarig Rörinspektion",
    image: "/images/card-johan.jpg",
    phone: "070-294 21 75",
    email: "johan@ltin.se",
  },
  {
    name: "Rasmus Blom",
    title: "Reliningstekniker",
    image: "/images/card-rasmus.jpg",
    phone: "070-000 00 00",
    email: "E-post",
  },
  {
    name: "Axel Carlsson",
    title: "Reliningstekniker",
    image: "/images/card-axel.jpg",
    phone: "070-000 00 00",
    email: "E-post",
  },
  {
    name: "Peter Lundberg",
    title: "Reliningstekniker",
    image: "/images/card-peter.jpg",
    phone: "070-000 00 00",
    email: "E-post",
  },
];

export default function Personnel() {
  return (
    <div id="omoss" className="flex flex-wrap   justify-center gap-6 p-6">
      {personnel.map((person) => (
        <div
          key={person.name}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
        >
          <Image
            src={person.image}
            alt={`Profilbild av ${person.name}`}
            width={96}
            height={96}
            className="w-24 h-24 rounded-full hover:scale-120 object-cover mb-4 border-2 border-gray-300"
          />
          <h3 className="text-xl font-semibold text-red-800 mb-1">
            {person.name}
          </h3>
          <p className="text-gray-600 mb-4">{person.title}</p>
          <div className="flex items-center mb-2">
            <FaPhone className="text-gray-500 mr-2" />
            <a
              href={`tel:${person.phone.replace(/-/g, "")}`}
              className="text-blue-600 hover:underline"
            >
              {person.phone}
            </a>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-gray-500 mr-2" />
            <a
              href={`mailto:${person.email}`}
              className="text-blue-600 hover:underline"
            >
              {person.email}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
