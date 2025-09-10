import Image from "next/image";

const cards = [
  {
    id: "relining",
    image: "/Images/bild1.jpg",
    title: "Relining i Fastigheter",
    description:
      "Vi erbjuder kostnads- och tidseffektiva lösningar för avloppsrenovering med hjälp av flexibelt foder. Denna metod garanterar en livslängd som är jämförbar med ett traditionellt stambyte, men med avsevärt mindre störning för fastighetens boende. De boende kan stanna kvar i sina hem under hela processen och slipper både byggdamm och oväsen.",
  },
  {
    id: "relining-mark",
    image: "/Images/bild2.jpg",
    title: "Relining i Mark",
    description:
      "Vi erbjuder relining av markförlagda spill- och dagvattenledningar upp till dimensionen 300 mm. Efter att reliningen är utförd, kan vi med hjälp av robotfräs exakt återöppna anslutande grenrör och serviceledningar. Denna metod säkerställer en effektiv och hållbar renovering med minimala störningar.",
  },
  {
    id: "rorinspektion",
    image: "/Images/bild3.jpg",
    title: "Rörinspektion",
    description:
      "Vi förfogar över auktoriserade rörinspektörer certifierade av STVF. Våra inspektioner utförs i enlighet med gällande branschstandarder: P93 för markledningar och T25 för fastighetsledningar. Detta säkerställer en korrekt och tillförlitlig bedömning av era rörsystem.",
  },
];

export default function Cards() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              id={card.id}
              className="relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative w-full h-64">
                <Image
                  src={card.image}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t"></div>
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-sky-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-700">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
