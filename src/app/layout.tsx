// src\app\layout.tsx
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Ledningsteknik AB | Entreprenad, konsult och utbildning inom ledningsbyggnad",
  description: "Ledningsteknik AB erbjuder tjänster inom entreprenad, konsult och utbildning för ledningsbyggnad. Vi har lång erfarenhet och bred kompetens inom branschen.",
  keywords: [
    "ledningsteknik",
    "entreprenad",
    "konsult",
    "utbildning",
    "ledningsbyggnad",
    "infrastruktur",
    "Piteå",
    "Norrbotten"
  ],
  openGraph: {
    title: "Ledningsteknik AB",
    description: "Entreprenad, konsult och utbildning inom ledningsbyggnad.",
    url: "https://ledningsteknik.se/",
    siteName: "Ledningsteknik AB",
    images: [
      {
        url: "/public/Images/Ledningsteknik-loggo-01.png",
        width: 800,
        height: 600,
        alt: "Ledningsteknik logotyp"
      }
    ],
    locale: "sv_SE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ledningsteknik AB",
    description: "Entreprenad, konsult och utbildning inom ledningsbyggnad.",
    images: ["/public/Images/Ledningsteknik-loggo-01.png"]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Ledningsteknik AB",
              "url": "https://ledningsteknik.se/",
              "logo": "https://ledningsteknik.se/Images/Ledningsteknik-loggo-01.png",
              "description": "Ledningsteknik AB erbjuder tjänster inom entreprenad, konsult och utbildning för ledningsbyggnad.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Hammarvägen 28",
                "addressLocality": "Piteå",
                "postalCode": "941 52",
                "addressCountry": "SE"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+46-911-123456",
                "contactType": "customer service",
                "areaServed": "SE",
                "availableLanguage": ["Swedish", "English"]
              }
            }
          `}
        </script>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
