import Image from "next/image";

export default function Brif() {
  return (
    <div
      id="brif"
      className="flex flex-col md:flex-row items-center justify-between p-8 bg-white shadow-lg rounded-lg max-w-6xl mx-auto my-10"
    >
      <div className="w-full md:w-full md:pr-8 mb-8 md:mb-0 text-left md:text-left">
        <h2 className="text-xl md:text-xl font-semibold text-red-800 mb-4">
          Snabbfakta om BRiF
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Branschföreningen Relining i Fastigheter (BRiF) är den nationella
          branschorganisationen för relining av rörsystem i fastigheter.
          Föreningen grundades 2009 och inkluderar entreprenörer, leverantörer
          och konsulter verksamma inom området. BRiF har även ett samarbetsavtal
          med Byggföretagen. Relining är ett samlingsbegrepp för en rad olika
          metoder som syftar till att renovera eller förnya rör och ledningar
          inuti fastigheter. Till skillnad från ett traditionellt stambyte
          erbjuder relining en bekvämare lösning för fastighetsägare,
          hyresgäster och lägenhetsinnehavare, då det minimerar störningar och
          ombyggnadsbehov.
          <br />
          <br />
          BRiF, etablerat 2009, är den rikstäckande branschorganisationen för
          relining av rörsystem i fastigheter. Organisationen samlar medlemmar
          som verkar som entreprenörer, leverantörer och konsulter inom området
          och har ett etablerat samarbetsavtal med Byggföretagen. Vad är
          relining? Relining är ett samlingsbegrepp för olika metoder att förnya
          och renovera rör och ledningar i befintliga fastigheter. Det som
          utmärker relining är att det erbjuder en mindre störande och ofta
          bekvämare lösning jämfört med ett traditionellt stambyte, vilket
          gynnar både fastighetsägare och boende.
        </p>
        <Image
          src="/images/brif-logo.png"
          alt="BRiF logo"
          width={96}
          height={96}
          className="h-24 mb-4 mt-4"
        />
      </div>
    </div>
  );
}
