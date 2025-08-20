import Image from "next/image";

const cards = [
  {
    id: "relining",
    image: "/images/bild1.jpg",
    title: "Relining i Fastigheter",
    description:
      "Vi erbjuder kostnads- och tidseffektiva lösningar för avloppsrenovering med hjälp av flexibelt foder. Denna metod garanterar en livslängd som är jämförbar med ett traditionellt stambyte, men med avsevärt mindre störning för fastighetens boende. De boende kan stanna kvar i sina hem under hela processen och slipper både byggdamm och oväsen.",
  },
  {
    id: "relining-mark",
    image: "/images/bild2.jpg",
    title: "Relining i Mark",
    description:
      "Vi erbjuder relining av markförlagda spill- och dagvattenledningar upp till dimensionen 300 mm. Efter att reliningen är utförd, kan vi med hjälp av robotfräs exakt återöppna anslutande grenrör och serviceledningar. Denna metod säkerställer en effektiv och hållbar renovering med minimala störningar.",
  },
  {
    id: "rorinspektion",
    image: "/images/bild3.jpg",
    title: "Rörinspektion",
    description:
      "Vi förfogar över auktoriserade rörinspektörer certifierade av STVF. Våra inspektioner utförs i enlighet med gällande branschstandarder: P93 för markledningar och T25 för fastighetsledningar. Detta säkerställer en korrekt och tillförlitlig bedömning av era rörsystem.",
  },
];

export default function Cards() {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 max-w-6xl  mx-auto my-10">
      {cards.map((card) => (
        <div
          key={card.id}
          id={card.id}
          className="flex-1 bg-white hover:scale-105 rounded-lg shadow-md  p-6 text-left"
        >
          <Image
            src={card.image}
            alt={card.title}
            width={400}
            height={200}
            className="w-full h-48 object-cover rounded-md mb-4 mx-auto"
          />
          <h3 className="text-xl font-semibold text-red-800 mb-2">
            {card.title}
          </h3>
          <p className="text-gray-700">{card.description}</p>
        </div>
      ))}
    </div>
  );
}
