import Image from 'next/image';

import Button from '../components/ui/Buttons';
import Link from 'next/link';

export const metadata = {
  title: 'TwojaStrona.pl',
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
          backgroundImage: "url('/homepage/top-img.png')",
        }}
      >
        {/* Main Content Container */}
        <div className="relative z-10 container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20">
            {/* Left Side - Content */}
            <div className="space-y-8 bg-amber-50 border border-gray-300 rounded-4xl p-14">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-800">Tworzymy strony,</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  które pracują na wynik
                </span>
              </h1>

              <div className="space-y-4">
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl">
                  <strong>Design + SEO</strong> = przewaga nad konkurencją.
                </p>
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl">
                  Strona internetowa powinna nie tylko wyglądać dobrze, ale
                  przede wszystkim{' '}
                  <span className="text-purple-600 font-semibold">
                    realnie wspierać sprzedaż
                  </span>
                  .
                </p>
              </div>

              {/* Button */}
              <div className="pt-6">
                <Link href="/kontakt">
                  <Button
                    variant="primary"
                    size="lg"
                    className="group relative overflow-hidden"
                    aria-label="Poznaj nasze usługi web design i SEO"
                  >
                    <span className="relative z-10">Kontakt</span>
                  </Button>
                </Link>
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
                src="/homepage/img-1.png"
                alt="Projektowanie nowoczesnych stron internetowych w React.js, Next.js i Astro.js"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            {/* Right Side - Image */}
            <div className="space-y-8">
              <h2 className="text-4xl sm:text-3xl lg:text-5xl font-bold leading-tight">
                <span>
                  Projektujemy nowoczesne strony w React, Next.js i Astro
                </span>
              </h2>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl">
                Tworzymy{' '}
                <span className="font-semibold text-purple-600">szybkie</span>,{' '}
                <span className="font-semibold text-purple-600">
                  responsywne
                </span>{' '}
                i{' '}
                <span className="font-semibold text-purple-600">
                  skalowalne strony internetowe
                </span>{' '}
                w technologiach nowej generacji. Stawiamy na{' '}
                <span className="font-semibold text-purple-600">wydajność</span>
                , <span className="font-semibold text-purple-600">UX</span> i
                nowoczesny{' '}
                <span className="font-semibold text-purple-600">
                  web design
                </span>{' '}
                – od landing page'y po zaawansowane aplikacje.
              </p>

              {/* Button */}
              <div className="pt-6">
                <Link href="/kontakt">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="group relative overflow-hidden"
                    aria-label="Poznaj nasze usługi web design i SEO"
                  >
                    <span className="relative z-10">Kontakt</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20">
            {/* Left Side */}
            <div className="space-y-8 order-2 lg:order-1">
              <h2 className="text-4xl sm:text-3xl lg:text-5xl font-bold leading-tight">
                <span>Skuteczne SEO on-site i off-site dla Twojej marki</span>
              </h2>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl">
                Optymalizujemy strony pod kątem{' '}
                <span className="font-semibold text-purple-600">
                  SEO technicznego
                </span>
                ,{' '}
                <span className="font-semibold text-purple-600">
                  treściowego
                </span>{' '}
                i{' '}
                <span className="font-semibold text-purple-600">
                  strategicznego
                </span>
                . Zajmujemy się{' '}
                <span className="font-semibold text-purple-600">
                  audytami SEO
                </span>
                ,{' '}
                <span className="font-semibold text-purple-600">
                  link buildingiem
                </span>
                ,{' '}
                <span className="font-semibold text-purple-600">
                  content marketingiem
                </span>{' '}
                oraz{' '}
                <span className="font-semibold text-purple-600">
                  lokalnym pozycjonowaniem
                </span>
                .
              </p>

              {/* Button */}
              <div className="pt-6">
                <Link href="/kontakt">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="group relative overflow-hidden"
                    aria-label="Poznaj nasze usługi web design i SEO"
                  >
                    <span className="relative z-10">Kontakt</span>
                  </Button>
                </Link>
              </div>
            </div>
            {/* Right Side - Image */}
            <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-full order-1 lg:order-2">
              <Image
                src="/homepage/img-2.png"
                alt="Wdrażamy kompleksowo SEO on-site i off-site do Twojego projektu"
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
              <span>Budujemy silną obecność Twojej marki w internecie</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-full">
              Oferujemy kompleksowe wsparcie w zakresie{' '}
              <span className="font-semibold text-purple-600">
                projektowania stron internetowych
              </span>
              ,
              <span className="font-semibold text-purple-600">
                pozycjonowania SEO
              </span>{' '}
              oraz{' '}
              <span className="font-semibold text-purple-600">
                content marketingu
              </span>
              . Łączymy strategię, design i widoczność, aby pomóc Twojej firmie
              przyciągać klientów i zwiększać sprzedaż online.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch py-20 sm:px-20 lg:px-0">
            <div className="space-y-4 border border-gray-300 rounded-2xl p-10 h-full flex flex-col">
              <div className="flex-grow space-y-6">
                <h3 className="text-2xl font-semibold">
                  Projektowanie Stron WWW
                </h3>
                <p className="text-gray-600">
                  Profesjonalne i nowoczesne projektowanie stron internetowych,
                  które wzmocni Twoją obecność w sieci.
                </p>
                <ul className="list-disc pl-9 text-left space-y-3 text-white font-bold">
                  <li>Szybkie i wydajne strony</li>
                  <li>Responsywny design dla wszystkich urządzeń</li>
                  <li>Przyjazne wyszukiwarkom (SEO)</li>
                  <li>Intuicyjny interfejs użytkownika</li>
                </ul>
              </div>
              {/* Button */}
              <div className="pt-8 mt-auto">
                <Link href="/uslugi">
                  <Button
                    variant="primary"
                    size="lg"
                    className="group relative overflow-hidden"
                    aria-label="Poznaj nasze usługi web design i SEO"
                  >
                    <span className="relative z-10">Usługi</span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="space-y-4 border border-gray-300 rounded-2xl py-10 px-10 h-full flex flex-col">
              <div className="flex-grow space-y-6">
                <h3 className="text-2xl font-semibold">Pozycjonowanie SEO</h3>
                <p className="text-gray-600">
                  Optymalizacja stron internetowych, która zwiększy Twoją
                  widoczność w wyszukiwarkach i przyciągnie więcej klientów.
                </p>
                <ul className="list-disc pl-9 text-left space-y-3 text-white font-bold">
                  <li>Analityka i audyt SEO</li>
                  <li>Optymalizacja treści pod SEO</li>
                  <li>Monitoring pozycji w Google</li>
                  <li>Budowa profilu linków</li>
                </ul>
              </div>
              {/* Button */}
              <div className="pt-8 mt-auto">
                <Link href="/uslugi">
                  <Button
                    variant="primary"
                    size="lg"
                    className="group relative overflow-hidden"
                    aria-label="Poznaj nasze usługi web design i SEO"
                  >
                    <span className="relative z-10">Usługi</span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="space-y-4 border border-gray-300 rounded-2xl py-10 px-10 h-full flex flex-col">
              <div className="flex-grow space-y-6">
                <h3 className="text-2xl font-semibold">Content Marketing</h3>
                <p className="text-gray-600">
                  Tworzenie wartościowych treści, które angażują odbiorców i
                  budują zaufanie do Twojej marki.
                </p>
                <ul className="list-disc pl-9 text-left space-y-3 text-white font-bold">
                  <li>Strategia contentu</li>
                  <li>Prowadzenie blogów</li>
                  <li>Social media</li>
                  <li>Marketing wideo</li>
                </ul>
              </div>
              {/* Button */}
              <div className="pt-8 mt-auto">
                <Link href="/uslugi">
                  <Button
                    variant="primary"
                    size="lg"
                    className="group relative overflow-hidden"
                    aria-label="Poznaj nasze usługi web design i SEO"
                  >
                    <span className="relative z-10">Usługi</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
