
import { useRef } from "react";
import emailjs from "emailjs-com";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jjqwk3l", // replace with your EmailJS Service ID
        "template_duobvpf", // replace with your EmailJS Template ID
        form.current,
        "Rmweo0z_13yvDUDUA" // replace with your EmailJS Public Key
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
    <div className="isolate bg-red-100 px-6 py-24 sm:py-32 lg:px-8 dark:bg-gray-900 mt-4 rounded-xl">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
          Contact Us
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Have questions? We’d love to hear from you.
        </p>
      </div>

      {/* ✅ Connected form */}
      <form ref={form} onSubmit={sendEmail} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold text-gray-900 dark:text-white">
              First Name
            </label>
            <input
              type="text"
              name="from_name"
              required
              className="block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 dark:text-white">
              Email
            </label>
            <input
              type="email"
              name="from_email"
              required
              className="block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-900 dark:text-white">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              className="block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white"
            />
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-500"
          >
            Send Message
          </button>
        </div>
      </form>
            {/* Visiting Hours Section */}
      <div className="mx-auto max-w-xl mt-16 p-6 rounded-2xl bg-orange-50 shadow dark:bg-gray-800">
        <h3 className="text-2xl font-semibold text-center text-gray-800 dark:text-white">
          Visiting Hours
        </h3>
        <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
          We welcome visitors during the following hours:
        </p>
        <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
          <li>• Monday – Friday: 9:00 AM – 5:00 PM</li>
          <li>• Saturday: 10:00 AM – 4:00 PM</li>
          <li>• Sunday: Closed</li>
        </ul>
      </div>
        {/* ✅ Map Section */}
      <div className="mx-auto max-w-4xl mt-16">
        <h3 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-6">
          Find Us on the Map
        </h3>
        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.906747751156!2d85.419304162277!3d26.212541924251525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed1bfa6b985237%3A0x2a0ef2df972a38d0!2sApis%20Care!5e0!3m2!1sen!2sin!4v1757151749505!5m2!1sen!2sin"   // 👈 paste your embed link here
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

