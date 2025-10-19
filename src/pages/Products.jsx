// import React from "react";

// export default function Products() {
//   const blogs = [
//     {
//       title: "Litchi Honey",
//       desc: "Sweet, floral honey from litchi blossoms. Thiand <lorejewfnwkjbfkjwbfkjwfbkwjfbkwfbkjwjfbkwbfkjwfbfkwfbfwkfbwkjfbkjwfkjwbfkjwjfkjfbwbffknwfkwjbfkwjfkwejs honey is prized for its distinct taste, aroma, and natural benefits. It is great for boosting energy and strengthening immunity. Add more and more text here to test the scroll behavior inside the card without changing card size.",
//       img: "/images/litchi3.jpeg",
//       link: "https://en.wikipedia.org/wiki/Honey",
//     },
//     {
//       title: "Karanj Honey",
//       desc: "Rich in antioxidants and <lorejewfnwkjbfkjwbfkjwfbkwjfbkwfbkjwjfbkwbfkjwfbfkwfbfwkfbwand <lorejewfnwkjbfkjwbfkjwfbkwjfbkwfbkjwjfbkwbfkjwfbfkwfbfwkfbwkjfbkjwfkjwbfkjwjfkjfbwbffknwfkwjbfkwjfkwejkjfbkjwfkjwbfkjwjfkjfbwbffknwfkwjbfkwjfkwejbmedicinal properties.",
//       img: "/images/karang.jpg",
//       link: "https://en.wikipedia.org/wiki/Honey",
//     },
//     {
//       title: "Wax Comb Foundation Sheet",
//       desc: "High-quality foundation sheets for beekeepers.",
//       img: "images/combfoundation.jpeg",
//       link: "https://en.wikipedia.org/wiki/Honeycomb",
//     },
//     {
//       title: "Bee Box",
//       desc: "Premium bee boxes for sustainable beekeeping.",
//       img: "images/bee box.jpg",
//       link: "https://en.wikipedia.org/wiki/Beekeeping",
//     },
//     {
//       title: "Honey BeeHives",
//       desc: "Durable bee hives for hobbyists and professionals.",
//       img: "images/honeybee.jpeg",
//       link: "#",
//     },
//     {
//       title: "Tulsi Honey",
//       desc: "Herbal honey with immunity-boosting benefits.",
//       img: "/images/tulsi.jpeg",
//       link: "#",
//     },
//     {
//       title: "Mustard Honey",
//       desc: "Strong flavored mustard honey.",
//       img: "/images/mustard.jpeg",
//       link: "#",
//     },
//   ];

//   return (
//     <section className="p-6 max-w-7xl mx-auto">
//       <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
//         Our Products
//       </h2>

//       {/* Responsive grid: 1 (sm), 2 (md), 3 (lg) */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {blogs.map((blog, i) => (
//           <div
//             key={i}
//             className="bg-gradient-to-tr from-yellow-50 via-orange-50 to-red-50 
//               dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 
//               border border-transparent rounded-xl shadow-md overflow-hidden 
//               transform transition duration-500 hover:scale-105 hover:shadow-xl hover:-translate-y-1 
//               flex flex-col h-[500px]" // equal fixed height
//           >
//             {/* Image */}
//             <a href={blog.link} className="group relative block overflow-hidden">
//               <img
//                 className="w-full h-52 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110 rounded-t-xl"
//                 src={blog.img}
//                 alt={blog.title}
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-500 rounded-t-xl"></div>
//             </a>

//             {/* Content */}
//             <div className="p-5 flex flex-col flex-1">
//               <a href={blog.link}>
//                 <h5 className="text-xl font-semibold text-gray-900 dark:text-white hover:text-indigo-600 transition-colors break-normal">
//                   {blog.title}
//                 </h5>
//               </a>

//               {/* Scrollable description */}
//               <div className="flex-1 overflow-y-auto max-h-24 mt-2 pr-1">
//                 <p className="text-gray-700 dark:text-gray-300 break-words whitespace-normal">
//                   {blog.desc}
//                 </p>
//               </div>

//               {/* Button always pinned to bottom */}
//               <a
//                 href={blog.link}
//                 className="inline-flex items-center mt-4 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300 shadow"
//               >
//                 Read more
//                 <svg
//                   className="w-4 h-4 ms-2"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 14 10"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M1 5h12m0 0L9 1m4 4L9 9"
//                   />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import React from "react";

export default function Products() {
  const blogs = [
    {
      title: "Litchi Honey",
      desc: "Collected from the nectar of litchi blossoms, this premium honey is known for its delicate floral aroma and naturally sweet taste. Rich in antioxidants and vitamins, Litchi Honey supports digestion, boosts immunity, and serves as a healthy natural sweetener for your daily diet.",
      img: "/images/litchi3.jpeg",
      link: "https://en.wikipedia.org/wiki/Honey",
    },
    {
      title: "Karanj Honey",
      desc: "Sourced from the Karanj (Pongamia) tree flowers, this honey is rich in medicinal and antibacterial properties. It helps in detoxifying the body, improving liver function, and supporting skin health. Karanj Honey is also known for its slightly bitter yet earthy flavor, making it ideal for therapeutic uses.",
      img: "/images/karang.jpg",
      link: "https://en.wikipedia.org/wiki/Honey",
    },
    {
      title: "Wax Comb Foundation Sheet",
      desc: "Crafted from pure beeswax, these foundation sheets guide bees in building uniform and strong honeycombs. Essential for modern beekeeping, they improve honey yield, colony strength, and hive hygiene. Perfect for both beginner and professional beekeepers.",
      img: "images/combfoundation.jpeg",
      link: "https://en.wikipedia.org/wiki/Honeycomb",
    },
    {
      title: "Bee Box",
      desc: "Our high-quality wooden bee boxes provide a safe and efficient environment for bee colonies. Designed with durability and ventilation in mind, they help maintain ideal hive conditions for honey production and colony growth.",
      img: "images/bee box.jpg",
      link: "https://en.wikipedia.org/wiki/Beekeeping",
    },
    {
      title: "Honey BeeHives",
      desc: "Engineered for both small-scale and commercial beekeeping, these bee hives ensure optimal colony development and easy honey extraction. They are made from weather-resistant materials for long-term outdoor use and easy maintenance.",
      img: "images/honeybee.jpeg",
      link: "#",
    },
    {
      title: "Tulsi Honey",
      desc: "Infused with the essence of holy basil (Tulsi), this herbal honey offers numerous health benefits. It strengthens immunity, relieves cold and cough, and acts as a natural stress reliever. Tulsi Honey blends the healing power of Ayurveda with the sweetness of nature.",
      img: "/images/tulsi.jpeg",
      link: "#",
    },
    {
      title: "Mustard Honey",
      desc: "Harvested from mustard flower nectar, this honey has a bold and slightly tangy flavor. It is packed with natural antioxidants and helps in improving digestion and metabolism. Mustard Honey is especially beneficial during winter for maintaining warmth and respiratory health.",
      img: "/images/mustard.jpeg",
      link: "#",
    },
  ];

  return (
    <section className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Our Products
      </h2>

      {/* Responsive grid: 1 (sm), 2 (md), 3 (lg) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, i) => (
          <div
            key={i}
            className="bg-gradient-to-tr from-yellow-50 via-orange-50 to-red-50 
              dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 
              border border-transparent rounded-xl shadow-md overflow-hidden 
              transform transition duration-500 hover:scale-105 hover:shadow-xl hover:-translate-y-1 
              flex flex-col h-[500px]"
          >
            {/* Image */}
            <a href={blog.link} className="group relative block overflow-hidden">
              <img
                className="w-full h-52 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110 rounded-t-xl"
                src={blog.img}
                alt={blog.title}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-500 rounded-t-xl"></div>
            </a>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <a href={blog.link}>
                <h5 className="text-xl font-semibold text-gray-900 dark:text-white hover:text-indigo-600 transition-colors break-normal">
                  {blog.title}
                </h5>
              </a>

              {/* Scrollable description */}
              <div className="flex-1 overflow-y-auto max-h-24 mt-2 pr-1">
                <p className="text-gray-700 dark:text-gray-300 break-words whitespace-normal">
                  {blog.desc}
                </p>
              </div>

              {/* Button pinned to bottom */}
              <a
                href={blog.link}
                className="inline-flex items-center mt-4 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300 shadow"
              >
                Read more
                <svg
                  className="w-4 h-4 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
