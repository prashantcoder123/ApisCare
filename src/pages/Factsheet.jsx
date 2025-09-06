// export default function Factsheet() {
//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Company Factsheet</h1>
//       <ul className="list-disc pl-6 space-y-2">
//         <li>Founded: 2020</li>
//         <li>Headquarters: New Delhi, India</li>
//         <li>Employees: 150+</li>
//         <li>Revenue: $5M (2024)</li>
//         <li>Industry: Healthcare Tech</li>
//       </ul>
//     </div>
//   );
// }

export default function Factsheet() {
  const basicInfo = [
    { label: "Nature of Business", value: "Wholesaler/Distributor" },
    {
      label: "Additional Business",
      value: (
        <>
          Wholesale Business<br />
          Factory / Manufacturing<br />
          Retail Business
        </>
      ),
    },
    { label: "Company CEO", value: "Ranjeet Kumar Singh" },
    { label: "GST Registration Date", value: "01-07-2017" },
    { label: "Legal Status of Firm", value: "Proprietorship" },
    { label: "Annual Turnover", value: "1.5 - 5 Cr" },
    { label: "GST Partner Name", value: "Rekha Sinha" },
  ];

  const statutoryProfile = [
    { label: "GST No.", value: "10BHZPS1930A1ZJ" },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-red-500">Fact Sheet</h1>

      {/* Basic Information */}
      <div className="bg-white shadow-sm border rounded-md mb-6">
        <h2 className="bg-orange-100 px-4 py-2 text-lg font-semibold border-b">
          Basic Information
        </h2>
        <div className="divide-y">
          {basicInfo.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between px-4 py-3"
            >
              <span className="text-gray-600 font-medium">{item.label}</span>
              <span className="mt-1 sm:mt-0 text-black sm:text-left">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Statutory Profile */}
      <div className="bg-white shadow-sm border rounded-md">
        <h2 className="bg-orange-50 px-4 py-2 text-lg font-semibold border-b">
          Statutory Profile
        </h2>
        <div className="divide-y">
          {statutoryProfile.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between px-4 py-3"
            >
              <span className="text-gray-600 font-medium">{item.label}</span>
              <span className="mt-1 sm:mt-0 text-black text-right sm:text-left">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
