



import React from "react";

export default function Contact() {
  return (
    <section className="w-full bg-orange-100 py-8 rounded-lg">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">
          CONTACT DETAILS
        </h2>

        <div className="flex flex-col gap-6 sm:gap-4">
          {/* Email */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span className="font-semibold w-24">Email</span>
            <div className="flex items-center gap-2">
              <span className="text-blue-600">📧</span>
              <a
                href="mailto:ranjeetazad@gmail.com"
                className="text-gray-700"
              >
apiscarepvtltd@gmail.com              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-2">
            <span className="font-semibold w-24">Address</span>
            <div className="flex items-start gap-2">
              <span className="text-green-600">📍</span>
              <p className="text-gray-700 leading-snug">
                Khata No.412, Khesra 4934, Shivaraha Road, Mahmudpur, Jhapaha,
                Muzaffarpur, Bochaha, Bihar, India,
                <a href="#" className="text-blue-600"> 842004</a>
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span className="font-semibold w-24">Contact</span>
            <div className="flex items-center gap-2">
              <span className="text-red-600">📞</span>
              <a href="tel:+919876543210" className="text-gray-700">
                +91 9431239344
              </a>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-3 text-2xl text-gray-600">
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>

          <a
            href="mailto:ranjeetazad@gmail.com"
            className="hover:text-blue-600"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
