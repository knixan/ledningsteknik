import Image from "next/image";

export default function Brif() {
  return (
    <section id="brif" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center bg-white shadow-xl rounded-2xl p-8 md:p-12 transition-all duration-300">
          <div className="text-center w-full mb-8">
            <Image
              src="/Images/brif-logo.png"
              alt="BRiF logo"
              width={200}
              height={200}
              className="h-auto w-32 md:w-40 mx-auto"
            />
          </div>
          <div className="w-full text-left">
            <h2 className="text-3xl font-extrabold text-sky-800 mb-4 md:mb-6">
              Snabbfakta om BRiF
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              Branschföreningen Relining i Fastigheter (BRiF) är den nationella
              branschorganisationen för relining av rörsystem i fastigheter.
              Föreningen grundades 2009 och inkluderar entreprenörer,
              leverantörer och konsulter verksamma inom området. BRiF har även
              ett samarbetsavtal med Byggföretagen.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Relining är ett samlingsbegrepp för en rad olika metoder som
              syftar till att renovera eller förnya rör och ledningar inuti
              fastigheter. Till skillnad från ett traditionellt stambyte
              erbjuder relining en bekvämare lösning för fastighetsägare,
              hyresgäster och lägenhetsinnehavare, då det minimerar störningar
              och ombyggnadsbehov.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
