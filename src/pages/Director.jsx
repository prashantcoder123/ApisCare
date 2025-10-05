
// import React from "react";

// export default function Directors() {
//   const directors = [
//     {
//       din: "11275514",
//       name: "RANJEET KUMAR SINGH",
//       designation: "Director",
//       appointment: "2nd September, 2025",
//       image: "/images/ranjeet.png",
//     },
//     {
//       din: "11275515",
//       name: "EVA SINGH AZAD",
//       designation: "Director",
//       appointment: "2nd September, 2025",
//       image: "/images/eva.png",
//     },
//   ];

//   return (
//     <section className="w-full bg-gradient-to-b from-gray-50 via-white to-gray-50 py-12 px-4">
//       <div className="max-w-4xl mx-auto"> {/* reduced max width for 2 cards */}
//         <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
//           DIRECTORS
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
//           {directors.map((d, i) => (
//             <div
//               key={i}
//               className="bg-white/50 backdrop-blur-md border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center
//                          shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4"
//               style={{ width: "250px" }}
//             >
//               <div className="w-28 h-28 mb-4 rounded-full overflow-hidden border-2 border-blue-300 shadow-lg transition-transform duration-300 hover:scale-110">
//                 <img
//                   src={d.image}
//                   alt={d.name}
//                   className="w-full h-full object-cover rounded-full"
//                 />
//               </div>

//               <h3 className="text-xl font-bold text-gray-800 mb-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
//                 {d.name}
//               </h3>
//               <p className="text-gray-600 mb-1">{d.designation}</p>
//               <p className="text-gray-400 text-sm mb-4">{d.appointment}</p>

//               <div className="flex gap-4">
//                 <a
//                   href="#"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
//                 >
//                   <i className="fab fa-linkedin"></i>
//                 </a>
//                 <a
//                   href="#"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-600 text-white hover:bg-gray-800 transition-colors"
//                 >
//                   <i className="fab fa-twitter"></i>
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";

export default function Directors() {
  const directors = [
    {
      din: "11275514",
      name: "RANJEET KUMAR SINGH",
      designation: "Director",
      appointment: "2nd September, 2025",
      image: "/images/ranjeet.png",
    },
    {
      din: "11275515",
      name: "EVA SINGH AZAD",
      designation: "Director",
      appointment: "2nd September, 2025",
      image: "/images/eva.png",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 via-white to-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          DIRECTORS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {directors.map((d, i) => (
            <div
              key={i}
              className="relative bg-white overflow-hidden border border-gray-200 rounded-2xl flex flex-col items-center text-center
                         shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 w-[260px] group"
            >
              {/* Green curved header (appears on hover) */}
              <div className="absolute top-0 left-0 w-full h-28 bg-orange-300 rounded-b-[100%] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 ease-out"></div>

              {/* Image + Circle Frame */}
              <div className="relative z-10 mt-8 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                <img
                  src={d.image}
                  alt={d.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 px-4 pt-3 pb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                  {d.name}
                </h3>
                <p className="text-gray-600 mb-1">{d.designation}</p>
                <p className="text-gray-400 text-sm mb-4">{d.appointment}</p>

                {/* Socials */}
                <div className="flex justify-center gap-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-600 text-white hover:bg-gray-800 transition-colors"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
