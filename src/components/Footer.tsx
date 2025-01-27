import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";

const footerSections = [
  {
    title: "Solutions",
    links: ["Travel", "Booking", "Flights", "Cruises", "Ground"],
  },
  {
    title: "Pricing",
    links: ["Travel", "Booking", "Flights", "Cruises", "Ground"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Jobs", "Cruises", "Press", "Partners"],
  },
  {
    title: "Legal",
    links: ["Claims", "Privacy", "Terms", "Press", "Partners"],
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-300 mt-24 p-2">
      <div className="max-w-[1400px] mx-auto">
        <div className="border-b-2 border-gray-200 py-8 px-4">
          <div className=" grid grid-cols-2 md:grid-cols-4  gap-y-5">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h6 className="font-bold uppercase">{section.title}</h6>
                <ul className="py-1">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-5 space-y-4">
            <h6 className="font-bold uppercase">Subscribe to our newsletter</h6>
            <p>
              The latest deals, articles, and resources, sent to your inbox
              weekly.
            </p>

            <form className="flex flex-col sm:flex-row">
              <input
                className="w-full p-2 mr-4 rounded-md mb-4 bg-white text-black"
                type="email"
                placeholder="Enter email.."
              />
              <button className="p-2 mb-4 rounded-md border-white">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div>
          <p className="py-4 max-lg:text-center">2022 Experiences, LLC. All rights reserved</p>
          <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <TiSocialPinterest size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
