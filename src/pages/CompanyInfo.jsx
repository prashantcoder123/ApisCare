

export default function CompanyInfo() {
  const info = [
    { label: "CIN", value: "U01492BR2025PTC078608", color: "text-orange-600" },
    { label: "Company Status", value: "Active", color: "text-green-600" },
    { label: "Registration Number", value: "078608" },
    { label: "Date of Incorporation", value: "2nd September, 2025" },
    { label: "RoC", value: "RoC-Patna" },
    { label: "Company Age", value: "4 days" },
    { label: "Authorized Capital", value: "₹1,00,000" },
    { label: "Paid-up Capital", value: "₹1,00,000" },
    { label: "Company Category", value: "Company limited by Shares" },
    { label: "Company Sub-Category", value: "Non-govt company" },
    { label: "Class of Company", value: "Private" },
    { label: "Activity", value: "Bee-keeping and production of honey and beeswax" },
    { label: "Listing Status", value: "Unlisted" }, // This will appear in red
    { label: "Date of Last Annual General Meeting", value: "N/A" },
    { label: "Date of Latest Balance Sheet", value: "N/A" },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Company Information</h1>

      <div className="space-y-4">
        {info.map((item, index) => {
          const redValues =["Unlisted","N/A","Private"];
          const textColor =
                 item.color || (redValues.includes(item.value) ? "text-red-600" : "text-black");
          return (
            <div
              key={index}
              className="bg-gray-50 px-4 py-3 rounded-md shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between"
            >
              <p className="text-sm font-semibold text-gray-700">{item.label}</p>
              <p className={`text-base font-medium mt-1 sm:mt-0 ${textColor}`}>
                {item.value}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
