import { useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jjqwk3l", 
        "template_duobvpf", 
        form.current,
        "Rmweo0z_13yvDUDUA"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message: " + error.text);
        }
      );
  };

  return (
    <div className="relative max-w-5xl mx-auto mt-10 px-6 sm:px-10 lg:px-16 py-12 rounded-2xl shadow-xl overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-red-300 to-pink-200 opacity-30 -z-10 rounded-2xl"></div>

      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold sm:text-5xl text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
          Have questions? We’d love to hear from you.
        </p>
      </div>

      {/* Form */}
      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="text"
            name="from_name"
            placeholder="First Name"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm transition-transform transform hover:scale-105 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm transition-transform transform hover:scale-105 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          />
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm transition-transform transform hover:scale-105 dark:bg-gray-800 dark:text-white dark:border-gray-600"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-indigo-500 hover:scale-105 transition-all duration-300"
        >
          Send Message
        </button>
      </form>

      {/* Visiting Hours */}
      <div className="mt-12 bg-orange-50 dark:bg-gray-800 p-6 rounded-xl shadow-md transform hover:scale-105 transition-all duration-300 max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-center text-gray-800 dark:text-white">
          Visiting Hours
        </h3>
        <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
          We welcome visitors during the following hours:
        </p>
        <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300 text-center">
          <li>• Monday – Friday: 9:00 AM – 5:00 PM</li>
          <li>• Saturday: 10:00 AM – 4:00 PM</li>
          <li>• Sunday: Closed</li>
        </ul>
      </div>

      {/* Map */}
      <div className="mt-12 max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg transform hover:scale-102 transition-all duration-300">
        <h3 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-4">
          Find Us on the Map
        </h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.906747751156!2d85.419304162277!3d26.212541924251525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed1bfa6b985237%3A0x2a0ef2df972a38d0!2sApis%20Care!5e0!3m2!1sen!2sin!4v1757151749505!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
}
