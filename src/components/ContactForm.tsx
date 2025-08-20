"use client";

import { useState } from "react";

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

  return (
    <div
      id="contact-form"
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center p-4 md:p-8"
      style={{ backgroundImage: 'url("/images/bakgrund2.jpg")' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 bg-white bg-opacity-90 p-8 md:p-10 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-red-800 mb-6 text-center">
          Kontakta oss
        </h2>
        <p className="text-gray-700 mb-6 text-center">
          Fyll i formuläret nedan så återkommer vi så snart som möjligt.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* ... alla input-fält ... */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              Förnamn
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Efternamn
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              E-post
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Telefonnummer
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              Stad/Ort
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Meddelande
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm resize-y"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              disabled={status === "Skickar..."}
            >
              {status === "Skickar..." ? "Skickar..." : "Skicka!"}
            </button>
          </div>
        </form>
        {status && <p className="mt-4 text-center">{status}</p>}
      </div>
    </div>
  );
}
