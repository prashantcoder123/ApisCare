
// import { MapPin, CheckCircle, Mail, User, Phone } from "lucide-react";

// export default function Company() {
//   return (
//     <section className="p-6 bg-white rounded-xl shadow-md max-w-5xl mx-auto w-full">
//       {/* Company Info */}
//       <div className="border-b pb-4">
//         <p className="text-sm text-blue-800 font-semibold text-center mb-2">
//           Get Best Price
//         </p>
//         <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
//           Apis Care
//         </h1>

//         {/* Info row - responsive */}
//         <div className="mt-4 flex flex-col sm:flex-wrap sm:flex-row items-start sm:items-center sm:justify-center gap-3 text-sm sm:text-base text-gray-700">
//           <span className="flex items-center gap-2">
//             <MapPin className="w-4 h-4 text-gray-500" /> 
//             {/* <i className="fa-solid fa-location-dot text-gray-500"></i> */}
//             Shivaraha, Muzaffarpur, Bihar
//           </span>

//           <span className="flex items-center gap-1">
//             <CheckCircle className="w-4 h-4 text-green-600" /> 
//             GST - 10BHZPS1930A1ZJ
//           </span>

//           <span className="flex items-center gap-1">
//             <Phone className="w-4 h-4 text-blue-600" /> 
//             +91 98765 43210
//           </span>

//           <span className="flex items-center gap-1">
//             <Mail className="w-4 h-4 text-green-600" /> 
//             ranjeetazad@gmail.com
//           </span>

//           <span className="flex items-center gap-1">
//             <User className="w-4 h-4 text-gray-600" /> 
//             14 yrs
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// }


import { MapPin, CheckCircle, Mail, User, Phone } from "lucide-react";

export default function Company() {
  return (
    <section className="p-6 bg-red-50 rounded-xl shadow-md max-w-5xl mx-auto w-full">
      {/* Company Info */}
      <div className="border-b pb-4">
        <p className="text-sm text-blue-800 font-semibold text-center mb-2">
          Get Best Price
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
          Apis Care
        </h1>

        {/* Info row - responsive */}
        <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm sm:text-base text-gray-700">
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gray-500" />
            Shivaraha, Muzaffarpur, Bihar
          </span>

          <span className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-600" />
            GST - 10BHZPS1930A1ZJ
          </span>

          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-blue-600" />
            +91 98765 43210
          </span>

          <span className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-green-600" />
            ranjeetazad@gmail.com
          </span>

          <span className="flex items-center gap-2">
            <User className="w-4 h-4 text-gray-600" />
            14 yrs
          </span>
        </div>
      </div>
    </section>
  );
}
