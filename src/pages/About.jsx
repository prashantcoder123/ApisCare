
// import React from "react";
// import { Building2, Users, MapPin, CalendarDays, CheckCircle, IdCard } from "lucide-react";

// export default function About() {
//   return (
  
//     <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex justify-center items-center p-4">
//       <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
//         About Us
//       </h2>
      
//      <div className="bg-orange-50 shadow-xl rounded-2xl max-w-4xl w-full overflow-hidden">

//         {/* Banner */}
//         <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 flex items-center gap-4">
//           <div className="bg-white text-blue-600 font-bold text-xl w-14 h-14 flex items-center justify-center rounded-full shadow-md">
//             AP
//           </div>
//           <div className="min-w-0">
//             <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
//               APISCARE PRIVATE LIMITED
//             </h1>
//             <p className="text-xs sm:text-sm text-gray-100/90">
//               CIN: U01492BR2025PTC078608
//             </p>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="p-6 sm:p-8 space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
//           {/* Paragraph 1 (exact content) */}
//           <div className="flex items-start gap-3">
//             <IdCard className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
//             <p>
//               APISCARE PRIVATE LIMITED having CIN <b>U01492BR2025PTC078608</b> is
//               <b> 4 days old</b> Private company incorporated with MCA on
//               <b> 2nd September, 2025</b>. APISCARE PRIVATE LIMITED is listed in the
//               class of Private company and classified as Non-govt company. This
//               company is registered at Registrar of Companies(ROC), RoC-Patna with an
//               Authorized Share Capital of <b>₹1,00,000</b> and paid-up capital is
//               <b> ₹1,00,000</b>.
//             </p>
//           </div>

//           {/* Paragraph 2 (exact content) */}
//           <div className="flex items-start gap-3">
//             <Users className="w-6 h-6 text-indigo-600 shrink-0 mt-1" />
//             <p>
//               The company has <b>2 directors/key management personal</b>{" "}
//               <span className="font-semibold text-blue-700">RANJEET KUMAR SINGH</span>,{" "}
//               <span className="font-semibold text-blue-700">EVA SINGH AZAD</span>.
//               APISCARE PVT LTD company registration number is <b>078608</b> and its
//               Corporate Identification Number(CIN) provided from MCA is{" "}
//               <b>U01492BR2025PTC078608</b>.
//             </p>
//           </div>

//           {/* Paragraph 3 (exact content) */}
//           <div className="flex items-start gap-3">
//             <Building2 className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
//             <p>
//               As per MCA records APISCARE PRIVATE LIMITED is involved in activities
//               such as <b>Bee-keeping and production of honey and beeswax</b>
//             </p>
//           </div>

//           {/* Paragraph 4 (exact content) */}
//           <div className="flex items-start gap-3">
//             <MapPin className="w-6 h-6 text-red-500 shrink-0 mt-1" />
//             <p>
//               APISCARE PVT LTD's registered office address is{" "}
//               <b>
//                 Khata No.412,khesra 4934, Shivaraha Road, Mahmudpur, Jhapaha,
//                 Muzaffarpur, Bochaha, Bihar, India, 842004
//               </b>
//               . Find other contact information for APISCARE PRIVATE LIMITED such as
//               contact number, email, website, gst details and more below.
//             </p>
//           </div>

//           {/* Paragraph 5 (exact content) */}
//           <div className="flex items-start gap-3">
//             <CalendarDays className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
//             <p>
//               APISCARE PRIVATE LIMITED's last Annual General Meeting(AGM) was held on{" "}
//               <b>N/A</b>, and the company last updated its financials on <b>N/A</b>.
//             </p>
//           </div>

//           {/* Paragraph 6 (exact content) */}
//           <div className="flex items-center gap-3">
//             <CheckCircle className="w-6 h-6 text-green-600 shrink-0" />
//             <p className="font-bold text-green-700">
//               Current status of APISCARE PRIVATE LIMITED is Active.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React from "react";
import {
  Building2,
  Users,
  MapPin,
  CalendarDays,
  CheckCircle,
  IdCard,
  Phone,
  Mail,
  Globe,
  Receipt,
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-200 flex flex-col items-center p-4 rounded-lg">
      {/* About Us Heading - Top Center */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 text-center border-b-4 border-blue-600 inline-block">
        About Us
      </h2>

      {/* Company Card */}
      <div className="bg-white shadow-xl rounded-2xl max-w-4xl w-full overflow-hidden">
        {/* Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 flex items-center gap-4">
          <div className="bg-white text-blue-600 font-bold text-xl w-14 h-14 flex items-center justify-center rounded-full shadow-md">
            AP
          </div>
          <div className="min-w-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              APISCARE PRIVATE LIMITED
            </h1>
            <p className="text-xs sm:text-sm text-gray-100/90">
              CIN: U01492BR2025PTC078608
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
          {/* Paragraph 1 */}
          <div className="flex items-start gap-3">
            <IdCard className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
            <p>
              APISCARE PRIVATE LIMITED having CIN <b>U01492BR2025PTC078608</b> is
              <b> 4 days old</b> Private company incorporated with MCA on
              <b> 2nd September, 2025</b>. APISCARE PRIVATE LIMITED is listed in the
              class of Private company and classified as Non-govt company. This
              company is registered at Registrar of Companies(ROC), RoC-Patna with an
              Authorized Share Capital of <b>₹1,00,000</b> and paid-up capital is
              <b> ₹1,00,000</b>.
            </p>
          </div>

          {/* Paragraph 2 */}
          <div className="flex items-start gap-3">
            <Users className="w-6 h-6 text-indigo-600 shrink-0 mt-1" />
            <p>
              The company has <b>2 directors/key management personal</b>{" "}
              <span className="font-semibold text-blue-700">RANJEET KUMAR SINGH</span>,{" "}
              <span className="font-semibold text-blue-700">EVA SINGH AZAD</span>.
              APISCARE PVT LTD company registration number is <b>078608</b> and its
              Corporate Identification Number(CIN) provided from MCA is{" "}
              <b>U01492BR2025PTC078608</b>.
            </p>
          </div>

          {/* Paragraph 3 */}
          <div className="flex items-start gap-3">
            <Building2 className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
            <p>
              As per MCA records APISCARE PRIVATE LIMITED is involved in activities
              such as <b>Bee-keeping and production of honey and beeswax</b>.
            </p>
          </div>

          {/* Paragraph 4 */}
          <div className="flex items-start gap-3">
            <MapPin className="w-6 h-6 text-red-500 shrink-0 mt-1" />
            <p>
              APISCARE PVT LTD's registered office address is{" "}
              <b>
                Khata No.412, khesra 4934, Shivaraha Road, Mahmudpur, Jhapaha,
                Muzaffarpur, Bochaha, Bihar, India, 842004
              </b>
              . Find other contact information for APISCARE PRIVATE LIMITED such as
              contact number, email, website, gst details and more below.
            </p>
          </div>

          {/* Paragraph 5 */}
          <div className="flex items-start gap-3">
            <CalendarDays className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
            <p>
              APISCARE PRIVATE LIMITED's last Annual General Meeting(AGM) was held on{" "}
              <b>N/A</b>, and the company last updated its financials on <b>N/A</b>.
            </p>
          </div>

          {/* Paragraph 6 */}
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-600 shrink-0" />
            <p className="font-bold text-green-700">
              Current status of APISCARE PRIVATE LIMITED is Active.
            </p>
          </div>

          {/* Contact Info */}
          <div className="pt-6 border-t space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              Contact Info
            </h2>
            <p className="text-gray-600">
              Below are the contact details of APISCARE PRIVATE LIMITED. Reach out
              for queries, partnerships, or additional company information.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <p>
                  Phone:{" "}
                  <a
                    href="tel:+919999999999"
                    className="text-gray-800 font-medium hover:text-blue-600"
                  >
                    +91-9999999999
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-600" />
                <p>
                  Email:{" "}
                  <a
                    href="mailto:info@apiscare.com"
                    className="text-gray-800 font-medium hover:text-blue-600"
                  >
                    info@apiscare.com
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-green-600" />
                <p>
                  Website:{" "}
                  <a
                    href="https://www.apiscare.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 font-medium hover:text-blue-600"
                  >
                    www.apiscare.com
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Receipt className="w-5 h-5 text-indigo-600" />
                <p>
                  GST: <span className="text-gray-800 font-medium">XXXXXXXXXXXX</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
