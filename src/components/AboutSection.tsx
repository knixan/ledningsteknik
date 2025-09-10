import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="omoss" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-xl rounded-2xl p-8 md:p-12 transition-all duration-300">
          <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0 text-left">
            <h2 className="text-3xl font-extrabold text-sky-800 mb-4 md:mb-6">
              Om oss
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              Vi är specialister på rörförnyelse (även kallat relining med
              flexibelt foder eller strumpmetoden), rörinspektioner och
              ledningsutredningar.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              Som medlemmar i BRiF (Branschföreningen för Relining i
              Fastigheter) har vi auktoriserad personal med relevanta
              utbildningar från BRiF för relining och från STVF (Sveriges
              TV-InspektionsFöretag) för rörinspektion. Detta garanterar hög
              kvalitet och professionalism i alla våra uppdrag.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Vår verksamhet är primärt förlagd till Norr- och Västerbotten, med
              särskilt fokus på Piteå, Luleå, Boden, Älvsbyn och Skellefteå. Vi
              utför tjänster för en bred kundkrets, inklusive större aktörer som
              kommuner, Fortifikationsverket och större fastighetsägare, samt
              för privatpersoner som kan dra nytta av ROT-avdraget. Kontakta oss
              gärna om du har intresse av relining, ledningsutredningar eller om
              du har övriga frågor.
            </p>

            <h3 className="text-xl font-bold text-sky-800 mt-8 mb-4">
              Kundnöjdhet är A och O
            </h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Vi är ett väletablerat företag med ett starkt fokus på kundnöjdhet
              och att leverera slutprodukter av högsta kvalitet. Vårt arbete
              genomsyras av principerna i ISO 9001 (kvalitetsledning) och ISO
              14001 (miljöledning), vilket säkerställer att vi upprätthåller de
              strängaste standarderna i alla våra processer.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <Image
              src="/Images/omoss.jpg"
              alt="bild om företaget"
              width={600}
              height={400}
              objectFit="cover"
              className="rounded-xl shadow-lg w-full h-auto md:h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
