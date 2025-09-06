// import React from "react";

// export default function Products() {
//   return (
//     <section className="p-6">
//       <h2 className="text-2xl font-bold">Our Products</h2>
//       <ul className="list-disc ml-6 mt-2">
//         <li>Litchi Honey</li>
//         <li>Karanj Honey</li>
//         <li>Mustard Honey</li>
//         <li>Forest Natural Honey</li>
//         <li>Bee Boxes & Comb Sheets</li>
//       </ul>
//     </section>
//   );
// }


import React from "react";

export default function Products() {
  const blogs = [
    {
      title: "Litchi Honey",
      desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      img: "/images/litchi.jpg",
      link: "https://en.wikipedia.org/wiki/Honey",
    },
    {
      title: "Karang Honey",
      desc: "A look into how artificial intelligence is transforming industries and daily life.",
      img: "/images/karang.jpg",
      link: "https://en.wikipedia.org/wiki/Honey",
    },
    {
      title: "Comb Foundation",
      desc: "Exploring decentralized apps, blockchain, and the future of the internet.",
      img: "images/combfoundation.jpeg",
      link: "https://en.wikipedia.org/wiki/Honeycomb",
    },
    {
      title: "Bee Box",
      desc: "Exploring decentralized apps, blockchain, and the future of the internet.",
      img: "images/bee box.jpg",
      link: "https://en.wikipedia.org/wiki/Beekeeping",
    },
    {
      title: "Bee Box",
      desc: "Exploring decentralized apps, blockchain, and the future of the internet.",
      img: "images/bee box.jpg",
      link: "#",
    },
     {
      title: "Karang Honey",
      desc: "A look into how artificial intelligence is transforming industries and daily life.",
      img: "/images/karang.jpg",
      link: "#",
    },
   
  ];

  return (
    <section className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Our Products.</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog, i) => (
          <div
            key={i}
            className="max-w-sm bg-orange-50 border border-black-200 rounded-lg shadow-sm 
            dark:bg-gray-800 dark:border-gray-700 
            transform transition duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2"
          >
            <a href={blog.link}>
              <img
                className="rounded-t-lg w-full h-48 object-cover transition duration-300 hover:opacity-90 rounded-lg"
                src={blog.img}
                alt={blog.title}
              />
            </a>
            <div className="p-5">
              <a href={blog.link}>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {blog.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {blog.desc}
              </p>
              <a
                href={blog.link}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white 
                bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none 
                focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 
                transition duration-300"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
