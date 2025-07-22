// components/Footer.js
import Link from 'next/link';
import Image from 'next/image';

export default function Footer({
  companyName = 'Expo',
  companyDescription = "Land behold it created good saw after she'd Our set living. Signs midst dominion creepeth morning laboris nisl ufsit aliquip.",
  address = '76/A, Green Lane, Dhanmondi, NYC',
  phone = '+10 (78) 738-9083',
  logoSrc = '/logo.png', // Ścieżka do logo
  logoAlt = 'Logo firmy Expo',
}) {
  // Dane nawigacji - łatwo edytowalne
  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'Uslugi', href: '/uslugi' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  // Dane usług - łatwo edytowalne
  const serviceLinks = [
    { name: 'Blackforest', href: '/uslugi/blackforest' },
    { name: 'Bodhubon', href: '/uslugi/bodhubon' },
    { name: 'Rongdhonu', href: '/uslugi/rongdhonu' },
  ];

  // Dane social media - z ikonami SVG
  const socialLinks = [
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Main Footer Content - Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 md:h-auto">
          {/* Company Info Column - Mobile: full width, Tablet+: equal height */}
          <div className="col-span-1 space-y-4 sm:space-y-6 px-2 sm:px-0 md:h-full md:flex md:flex-col">
            {/* Logo i nazwa firmy */}
            <div className="flex items-center justify-center sm:justify-start space-x-3">
              <div className="flex-shrink-0">
                {/* Kolorowe logo jak na screenshocie */}
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                {companyName}
              </h3>
            </div>

            {/* Opis firmy */}
            <div className="md:flex-1">
              <p className="text-gray-600 leading-relaxed text-center sm:text-left max-w-sm mx-auto sm:mx-0 text-sm sm:text-base">
                {companyDescription}
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3 sm:space-x-4 justify-center sm:justify-start">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-500 hover:text-white hover:bg-orange-500 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  aria-label={`Odwiedź nasz profil na ${social.name}`}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-2 flex flex-row justify-around">
            {/* Navigation Column */}
            <div className="space-y-4 sm:space-y-6 px-2 sm:px-0 md:h-full md:flex md:flex-col">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900  md:flex-shrink-0">
                Navigation
              </h4>
              <nav className="space-y-2 sm:space-y-3 md:flex-1 md:flex md:flex-col md:justify-start">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-sm sm:text-base text-gray-600 hover:text-orange-600 transition-colors duration-200 hover:translate-x-1 transform "
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services Column - Responsive height matching */}
            <div className="space-y-4 sm:space-y-6 px-2 sm:px-0 md:h-full md:flex md:flex-col">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900  md:flex-shrink-0">
                Services
              </h4>
              <nav className="space-y-2 sm:space-y-3 md:flex-1 md:flex md:flex-col md:justify-start">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="block text-sm sm:text-base text-gray-600 hover:text-orange-600 transition-colors duration-200 hover:translate-x-1 transform "
                  >
                    {service.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Contact Column - Responsive height matching */}
          <div className="col-span-1 space-y-4 sm:space-y-6 px-2 sm:px-0 md:h-full md:flex md:flex-col text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 md:text-center md:flex-shrink-0">
              Contact Us
            </h4>

            <div className="space-y-3 sm:space-y-4 md:flex-1 md:flex md:flex-col md:justify-start">
              {/* Adres */}
              <div className="flex items-start space-x-3 justify-center sm:justify-start md:justify-center">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-xs">
                  {address}
                </p>
              </div>

              {/* Telefon */}
              <div className="flex items-center space-x-3 justify-center sm:justify-start md:justify-center">
                <div className="flex-shrink-0">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <Link
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="text-sm sm:text-base text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-200"
                >
                  {phone}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border Line - Responsive */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 text-center sm:text-left">
            <p className="text-xs sm:text-sm text-gray-500">
              © {new Date().getFullYear()} {companyName}. Wszystkie prawa
              zastrzeżone.
            </p>

            {/* Dodatkowe linki prawne */}
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm">
              <Link
                href="/privacy-policy"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                Polityka Prywatności
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                Regulamin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
