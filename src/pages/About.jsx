



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
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-200 flex flex-col items-center p-4 rounded-lg ">
      {/* About Us Heading - Top Center */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 text-center border-b-4 border-blue-600 inline-block">
        About Us
      </h2>

      {/* Company Card */}
      <div className="bg-white shadow-xl rounded-2xl max-w-4xl w-full overflow-hidden">
        {/* Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 flex items-center gap-4">
          <div className="bg-white text-blue-600 font-bold text-xl w-14 h-14 flex items-center justify-center rounded-full shadow-md">
            AC
          </div>
          <div className="min-w-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              APISCARE PRIVATE LIMITED
            </h1>
            <p className="text-white"><b>An ISO 9001:2015 Certified Company</b></p>
            {/* <p className="text-xs sm:text-sm text-gray-100/90">
              CIN: U01492BR2025PTC078608
            </p> */}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
          {/* Paragraph 1 */}
          <div className="flex items-start gap-3">
            <IdCard className="w-6 h-6 text-blue-600 shrink-0 mt-1 animate-bounce" />
            <p className="text-justify leading-relaxed"><b className="text-blue-700">APISCARE PVT.LTD</b> is a honey producing unit, having own <span className="bg-yellow-200 px-1 rounded">beekeeping farm</span>.
            Our Beekeeping farm and group has more than 5000 <i>Italian</i> bee colonies . 
            We are helping to other bee keepers in our area for good production and quality.
            Our farm yield pure and high quality honey of different variety from different areas. 
            most of the varities available are as mustard honey, Eucalyptus honey, multiflora honey ,
             Litchi honey, Karanj honey , etc. we are able to supply quality, quantity and varites of 
             pure honey according to requirement of the purchaser. we specalise in supply of world famous 
             uniflora litchi honey sourced from exclusively Litchi flowers from famous litchi orchards of 
             Litchi's city,Muzaffarpur.We are second Generation in this business having good essential background 
             and knowledge to do this trade to the best. the firm is managed by well qualified person Mr. Ranjeet Kumar 
             Singh having master degree in Science and Management.</p>
            
          </div>

         
        </div>
      </div>
    </div>
  );
}
