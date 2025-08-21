import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-white shadow-lg rounded-lg max-w-6xl mx-auto my-10">
      <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0 text-left md:text-left">
        <h2 className="text-xl md:text-xl font-semibold text-red-800 mb-4">
          Om oss
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Vi är specialister på rörförnyelse (även kallat relining med flexibelt
          foder eller strumpmetoden), rörinspektioner och ledningsutredningar.
          <br />
          <br />
          Som medlemmar i BRiF (Branschföreningen för Relining i Fastigheter)
          har vi auktoriserad personal med relevanta utbildningar från BRiF för
          relining och från STVF (Sveriges TV-InspektionsFöretag) för
          rörinspektion. Detta garanterar hög kvalitet och professionalism i
          alla våra uppdrag. <br />
          Vår verksamhet är primärt förlagd till Norr- och Västerbotten, med
          särskilt fokus på Piteå, Luleå, Boden, Älvsbyn och Skellefteå. Vi
          utför tjänster för en bred kundkrets, inklusive större aktörer som
          kommuner, Fortifikationsverket och större fastighetsägare, samt för
          privatpersoner som kan dra nytta av ROT-avdraget. Kontakta oss gärna
          om du har intresse av relining, ledningsutredningar eller om du har
          övriga frågor.
        </p>
        <br />
        <h2 className="text-xl md:text-xl font-semibold text-red-800 mb-4">
          Kundnöjdhet är A och O
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Vi är ett väletablerat företag med ett starkt fokus på kundnöjdhet och
          att leverera slutprodukter av högsta kvalitet. Vårt arbete genomsyras
          av principerna i ISO 9001 (kvalitetsledning) och ISO 14001
          (miljöledning), vilket säkerställer att vi upprätthåller de strängaste
          standarderna i alla våra processer.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <Image
          src="/images/omoss.jpg"
          alt="bild om företaget"
          width={500}
          height={500}
          className="rounded-lg shadow-md max-w-full h-auto"
        />
      </div>
    </div>
  );
}
