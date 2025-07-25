import Image from 'next/image';

import ContactUs from '../components/ContactUs';
import Button from '../components/ui/Buttons';

export const metadata = {
  title: {
    default: 'TwojaStrona.pl',
    template: '%s | TwojaStrona.pl',
  },
  description:
    'Content marketing i profesjonalne projektowanie stron WWW. Zwiększ zasięg swojej marki z naszymi usługami.',
  metadataBase: new URL('https://twojastrona.pl'),
};

export default function Home() {
  return (
    <>
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('/homepage/top-bg.jpg')",
        }}
      >
        {/* Main Content Container */}
        <div className="relative z-10 container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-800">Build audience and</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  grow your brand
                </span>
              </h1>

              <div className="space-y-4">
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl">
                  <strong>Content marketing</strong> is nothing but offering
                  users value.
                </p>
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl">
                  It is not just about traffic{' '}
                  <span className="text-purple-600 font-semibold">
                    million customers
                  </span>
                  .
                </p>
              </div>

              {/* Button */}
              <div className="pt-6">
                <Button
                  variant="secondary"
                  size="lg"
                  className="group relative overflow-hidden"
                  aria-label="Poznaj nasze usługi web design i SEO"
                >
                  <span className="relative z-10">Explore Us</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20">
            {/* Left Side - Image */}
            <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-full">
              <Image
                src="/homepage/top-bg.jpg"
                alt="Hero Image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl sm:text-3xl lg:text-5xl font-bold leading-tight">
                <span>We take a steps to build a successful business</span>
              </h2>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquam nesciunt, fugiat assumenda quidem modi, debitis sunt
                rerum minima corporis maxime, ratione sit dolore error labore!
                Facilis deleniti pariatur atque illo?
              </p>

              {/* Button */}
              <div className="pt-6">
                <Button
                  variant="primary"
                  size="lg"
                  className="group relative overflow-hidden"
                  aria-label="Poznaj nasze usługi web design i SEO"
                >
                  <span className="relative z-10">Explore Us</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20">
            <div className="space-y-8 order-2 lg:order-1">
              <h2 className="text-4xl sm:text-3xl lg:text-5xl font-bold leading-tight">
                <span>We take a steps to build a successful business</span>
              </h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquam nesciunt, fugiat assumenda quidem modi, debitis sunt
                rerum minima corporis maxime, ratione sit dolore error labore!
                Facilis deleniti pariatur atque illo?
              </p>

              {/* Button */}
              <div className="pt-6">
                <Button
                  variant="primary"
                  size="lg"
                  className="group relative overflow-hidden"
                  aria-label="Poznaj nasze usługi web design i SEO"
                >
                  <span className="relative z-10">Explore Us</span>
                </Button>
              </div>
            </div>
            {/* Right Side - Image */}
            <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-full order-1 lg:order-2">
              <Image
                src="/homepage/top-bg.jpg"
                alt="Hero Image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 container px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-3xl lg:text-5xl font-bold leading-tight">
              <span>We take a steps to build a successful business</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-full">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
              nesciunt, fugiat assumenda quidem modi, debitis sunt rerum minima
              corporis maxime, ratione sit dolore error labore! Facilis deleniti
              pariatur atque illo?
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch py-20 sm:px-20 lg:px-0">
            <div className="space-y-4 border border-gray-300 rounded-2xl py-10 px-10 h-full flex flex-col">
              <div className="flex-grow space-y-6">
                <h3 className="text-2xl font-semibold">
                  Projektowanie Stron WWW
                </h3>
                <p className="text-gray-600">
                  Profesjonalne i nowoczesne projektowanie stron internetowych,
                  które wzmocni Twoją obecność w sieci.
                </p>
                <ul className="list-disc pl-9 text-left text-gray-600 space-y-3">
                  <li>Szybkie i wydajne strony</li>
                  <li>Responsywny design dla wszystkich urządzeń</li>
                  <li>Przyjazne wyszukiwarkom (SEO)</li>
                  <li>Intuicyjny interfejs użytkownika</li>
                </ul>
              </div>
              {/* Button */}
              <div className="pt-8 mt-auto">
                <Button
                  variant="primary"
                  size="lg"
                  className="group relative overflow-hidden"
                  aria-label="Poznaj nasze usługi web design i SEO"
                >
                  <span className="relative z-10">Poznaj szczegóły</span>
                </Button>
              </div>
            </div>
            <div className="space-y-4 border border-gray-300 rounded-2xl py-10 px-10 h-full flex flex-col">
              <div className="flex-grow space-y-6">
                <h3 className="text-2xl font-semibold">Pozycjonowanie SEO</h3>
                <p className="text-gray-600">
                  Optymalizacja stron internetowych, która zwiększy Twoją
                  widoczność w wyszukiwarkach i przyciągnie więcej klientów.
                </p>
                <ul className="list-disc pl-9 text-left text-gray-600 space-y-3">
                  <li>Analityka i audyt SEO</li>
                  <li>Optymalizacja treści pod SEO</li>
                  <li>Monitoring pozycji w Google</li>
                  <li>Budowa profilu linków</li>
                </ul>
              </div>
              {/* Button */}
              <div className="pt-8 mt-auto">
                <Button
                  variant="primary"
                  size="lg"
                  className="group relative overflow-hidden"
                  aria-label="Poznaj nasze usługi web design i SEO"
                >
                  <span className="relative z-10">Explore Us</span>
                </Button>
              </div>
            </div>
            <div className="space-y-4 border border-gray-300 rounded-2xl py-10 px-10 h-full flex flex-col">
              <div className="flex-grow space-y-6">
                <h3 className="text-2xl font-semibold">Content Marketing</h3>
                <p className="text-gray-600">
                  Tworzenie wartościowych treści, które angażują odbiorców i
                  budują zaufanie do Twojej marki.
                </p>
                <ul className="list-disc pl-9 text-left text-gray-600 space-y-3">
                  <li>Strategia contentu</li>
                  <li>Prowadzenie blogów</li>
                  <li>Social media</li>
                  <li>Marketing wideo</li>
                </ul>
              </div>
              {/* Button */}
              <div className="pt-8 mt-auto">
                <Button
                  variant="primary"
                  size="lg"
                  className="group relative overflow-hidden"
                  aria-label="Poznaj nasze usługi web design i SEO"
                >
                  <span className="relative z-10">Explore Us</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactUs />
    </>
  );
}
