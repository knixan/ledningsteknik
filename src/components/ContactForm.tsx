"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Skickar...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Tack! Meddelandet har skickats.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          city: "",
          message: "",
        });
      } else {
        setStatus("Kunde inte skicka meddelandet. Försök igen senare.");
      }
    } catch (error) {
      console.error(error);
      setStatus(
        "Ett fel uppstod. Kontrollera din internetanslutning och försök igen."
      );
    }
  };

  const inputClasses =
    "mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm transition-colors duration-300";
  const labelClasses = "block text-sm font-semibold text-gray-700";

  return (
    <div
      id="contact-form"
      className="relative min-h-screen flex items-center justify-center p-4 md:p-8"
    >
      <Image
        src="/Images/bakgrund2.jpg"
        alt="bakgrundsbild"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute z-0"
      />
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      <div className="relative z-20 bg-white bg-opacity-90 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-xl w-full max-w-xl border border-gray-200">
        <h2 className="text-3xl font-extrabold text-sky-800 mb-2 text-center">
          Kontakta oss
        </h2>
        <p className="text-gray-700 mb-8 text-center">
          Fyll i formuläret nedan så återkommer vi så snart som möjligt.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className={labelClasses}>
                Förnamn
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="lastName" className={labelClasses}>
                Efternamn
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className={labelClasses}>
              E-post
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelClasses}>
              Telefonnummer
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="city" className={labelClasses}>
              Stad/Ort
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="message" className={labelClasses}>
              Meddelande
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className={`${inputClasses} resize-y`}
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-lg text-lg font-bold text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-300"
              disabled={status === "Skickar..."}
            >
              {status === "Skickar..." ? "Skickar..." : "Skicka!"}
            </button>
          </div>
        </form>
        {status && (
          <p
            className={`mt-4 text-center font-semibold ${
              status.includes("Tack") ? "text-green-600" : "text-red-600"
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </div>
  );
}
