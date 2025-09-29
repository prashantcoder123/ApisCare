

import React from "react";

export default function Directors() {
  const directors = [
    {
      din: "11275514",
      name: "RANJEET KUMAR SINGH",
      designation: "Director",
      appointment: "2nd September, 2025",
      image: "/images/ranjeet.png", // replace with actual image path
    },
    {
      din: "11275515",
      name: "EVA SINGH AZAD",
      designation: "Director",
      appointment: "2nd September, 2025",
      image: "/images/eva.png", // replace with actual image path
    },
  ];

  return (
    <section className="w-full bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2 text-center">
          DIRECTORS
        </h2>

        {/* Responsive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {directors.map((d, i) => (
            <div
              key={i}
              className="border rounded-lg p-6 shadow-sm bg-gray-50 flex flex-col items-center text-center 
              transition transform hover:-translate-y-2 hover:shadow-xl hover:bg-orange-50"
            >
              <div className="overflow-hidden rounded-full">
                <img
                  src={d.image}
                  alt={d.name}
                  className="w-20 h-20 object-cover rounded-full border mb-3 
                  transition-transform duration-300 hover:scale-110"
                />
              </div>
              {/* <p className="text-sm text-gray-500 mb-1">DIN: {d.din}</p> */}
              <h3 className="text-lg font-semibold text-blue-700">{d.name}</h3>
              <p className="text-gray-700">{d.designation}</p>
              {/* <p className="text-gray-600 text-sm">{d.appointment}</p> */}
               <div className="flex gap-3 mt-3">
    <a href="#" target="_blank" rel="noopener noreferrer"
       className="text-blue-600 hover:text-blue-800">
      <i className="fab fa-linkedin"></i>
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer"
       className="text-gray-600 hover:text-gray-800">
      <i className="fab fa-twitter"></i>
    </a>
  </div>
            </div>
            
          ))}
          
        </div>
       
      </div>
    </section>
  );
}
