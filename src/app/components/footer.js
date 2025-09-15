import Link from "next/link";
import { MessageCircle, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      <footer className="bg-black text-gray-300">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-1">
              <img
                src="https://cardamomcasa.com/wp-content/uploads/2023/12/logo-cardamam-2.jpg"
                alt="Cardamom Casa"
                className={`transition-all duration-300 group-hover:scale-105 h-14 sm:h-16 mb-6 w-auto object-contain shadow-lg`}
              />

              <p
                className="text-gray-400 leading-relaxed text-sm"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Welcome to Luxeliving, where luxury meets comfort. Our
                commitment to providing exceptional hospitality ensures an
                unforgettable experience for every guest.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3
                className="text-white text-lg font-light mb-6 "
                style={{ fontFamily: "serif" }}
              >
                Quick Link
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/feedback"
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Guest Feedback
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3
                className="text-white text-lg font-light mb-6 "
                style={{ fontFamily: "serif" }}
              >
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="text-gray-400 text-sm leading-relaxed">
                  <p>
                    Cardamom Casa Plantation Villa Resort, Bison Valley P.O,
                    Societymedu, Munnar, Kerala, India
                  </p>
                  <p className="mt-2">Pin- 685565</p>
                </div>

                <div className="text-gray-400 text-sm">
                  <p className="font-medium">+91 8104954254</p>
                  <p className="font-medium">+91 9074794502</p>
                </div>

                <div className="text-gray-400 text-sm">
                  <a
                    href="mailto:info@cardamomcasa.com"
                    className="hover:text-white transition-colors duration-200"
                  >
                    info@cardamomcasa.com
                  </a>
                </div>
              </div>
            </div>

            {/* Connect with Us */}
            <div>
              <h3
                className="text-white text-lg font-light mb-6"
                style={{ fontFamily: "serif" }}
              >
                Connect with Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://wa.me/918104954254"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[#25D366] transition-colors duration-300"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://instagram.com/cardamomcasa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://facebook.com/cardamomcasa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[#1877F2] transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://youtube.com/@cardamomcasa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[#FF0000] transition-colors duration-300"
                >
                  <Youtube className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
              <p className="mb-2 md:mb-0">Powered by Primewave.Inc</p>
              <p>Copyright © 2023 Cardamom Casa. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
