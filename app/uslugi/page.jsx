import Image from 'next/image';

import Button from '@/components/ui/Buttons';

export const metadata = {
  title: 'TwojaStrona.pl - Usługi',
  description:
    'Content marketing i profesjonalne projektowanie stron WWW. Zwiększ zasięg swojej marki z naszymi usługami.',
  metadataBase: new URL('https://twojastrona.pl/uslugi'),
};

export default function UslugiPage() {
  return (
    <>
      <section className="min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 container px-4 sm:px-6 lg:px-8">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start md:items-center justify-start">
            <div className="space-y-8 p-8 md:p-16 flex flex-col justify-start">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span>Usługi</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl">
                Oferujemy szeroki zakres usług, które pomogą Ci w budowie silnej
                obecności w sieci.
              </p>
            </div>
            <div className="relative w-full h-full min-h-[400px] sm:min-h-[400px] lg:min-h-full">
              <Image
                src="/uslugi/top-img.png"
                alt="Przedstawiamy naszą ofertę usług"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex items-center justify-center overflow-hidden mt-8">
        <div className="container px-4 xm:px-6 lg:px-8">
          <div className="space-y-8 text-center">
            <h2 className="text-4xl sm:text-3xl lg:text-5xl font-bold leading-tight">
              <span>Jak możemy Ci pomóc.</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-full">
              Nasze usługi obejmują projektowanie stron internetowych, content
              marketing, SEO i wiele innych. Skontaktuj się z nami, aby
              dowiedzieć się więcej o tym, jak możemy pomóc w rozwoju Twojej
              marki.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-center items-stretch  py-20">
            <div className="bg-gray-300 p-8 border-2 border-gray-300 rounded-2xl flex flex-col bg-gradient-to-b from-blue-600 to-purple-600">
              <div className="flex-grow space-y-6">
                <h3 className="text-2xl text-black font-semibold flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 7.5h4.5M9.75 10.5h4.5M9.75 13.5h4.5M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 4.5h18"
                    />
                  </svg>
                  Projektowanie Stron WWW
                </h3>
                <p className="text-white">
                  Tworzymy nowoczesne, responsywne strony internetowe dopasowane
                  do Twoich potrzeb. Od prostych witryn wizytówek po
                  zaawansowane sklepy internetowe – zapewniamy kompleksowe
                  rozwiązania, które wyróżnią Twoją markę w sieci.
                </p>
              </div>
            </div>
            <div className="bg-gray-300 p-8 border-2 border-gray-300 rounded-2xl flex flex-col bg-gradient-to-t from-blue-600 to-purple-600">
              <div className="flex-grow space-y-6">
                <h3 className="text-2xl text-black font-semibold flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                    />
                  </svg>
                  Optymalizacja SEO
                </h3>
                <p className="text-white">
                  Zwiększ widoczność swojej strony w wyszukiwarkach! Nasze
                  usługi SEO obejmują audyt strony, dobór słów kluczowych,
                  optymalizację treści i link building, aby Twoja witryna
                  osiągała wysokie pozycje w wynikach wyszukiwania.
                </p>
              </div>
            </div>
            <div className="bg-gray-300 p-8 border-2 border-gray-300 rounded-2xl flex flex-col bg-gradient-to-b from-blue-600 to-purple-600">
              <div className="flex-grow space-y-6">
                <h3 className="text-2xl text-black font-semibold flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 13l3 3 7-7"
                    />
                  </svg>
                  Content Marketing
                </h3>
                <p className="text-white">
                  Tworzymy angażujące i wartościowe treści, które przyciągną
                  Twoją grupę docelową i zbudują autorytet Twojej marki. Piszemy
                  artykuły blogowe, opisy produktów, teksty na strony WWW oraz
                  wiele innych, zoptymalizowane pod kątem SEO.
                </p>
              </div>
            </div>
            <div className="bg-gray-300 p-8 border-2 border-gray-300 rounded-2xl flex flex-col bg-gradient-to-t from-blue-600 to-purple-600">
              <div className="flex-grow space-y-6">
                <h3 className="text-2xl text-black font-semibold flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 17l-4 4-4-4m0-6l4-4 4 4"
                    />
                  </svg>
                  Audyt i Analiza Strony
                </h3>
                <p className="text-white">
                  Przeprowadzamy szczegółowe audyty techniczne i merytoryczne
                  Twojej strony, identyfikując obszary do poprawy w zakresie
                  użyteczności, wydajności i SEO. Dostarczamy konkretne
                  rekomendacje, które pomogą Ci zoptymalizować witrynę.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex items-center justify-center overflow-hidden mt-8">
        <div className="container px-4 xm:px-6 lg:px-8">
          <div className="space-y-8 text-center">
            <h2 className="text-4xl sm:text-3xl lg:text-5xl font-bold leading-tight md:max-w-2/3 mx-auto">
              <span>
                Odkryj Idealny Pakiet dla Twojej Strony: Projektowanie, SEO i
                Optymalizacja
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-full">
              Wybierz swój pakiet projektowania stron internetowych i wdrażania
              SEO, dopasowany do Twoich potrzeb i budżetu! Oferujemy trzy
              poziomy usług, od podstawowego wsparcia po kompleksową
              optymalizację pod kątem wyszukiwarek, aby Twoja firma zaistniała w
              sieci. Niezależnie od tego, czy szukasz strony internetowej
              opartej na Next.js, dynamicznej aplikacji w React.js, czy
              superszybkiej witryny w Astro.js, mamy dla Ciebie idealne
              rozwiązanie.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 justify-center py-20 items-stretch">
            <div className="bg-gray-300 p-8 border border-gray-300 rounded-2xl flex flex-col">
              <div className="flex-grow space-y-6">
                <h3 className="text-2xl text-black font-semibold flex justify-center items-center">
                  Pakiet Startowy
                </h3>
                <p className="text-gray-700 text-justify">
                  Idealny dla małych firm i startupów, które potrzebują
                  podstawowej strony internetowej z naciskiem na szybkość
                  ładowania i mobilną responsywność. W tym pakiecie skupiamy się
                  na stworzeniu funkcjonalnej witryny z solidnymi podstawami SEO
                  on-page
                </p>
                <ul className="list-disc pl-5 text-gray-900 font-bold">
                  <li>Projekt strony w Next.js lub landing page w Astro.js</li>
                  <li>Optymalizacja pod kątem podstawowych słów kluczowych</li>
                  <li>Indeksowanie przez Google</li>
                  <li>Optymalizacja struktury URL i meta tagów</li>
                  <li>Atrybuty alt dla obrazów</li>
                </ul>
              </div>
              <div className="space-x-8 col-span-1 text-left md:text-center">
                {/* Button */}
                <div className="pt-8 md:pt-0 mt-auto">
                  <Button
                    variant="primary"
                    size="lg"
                    className="group relative overflow-hidden"
                    aria-label="Poznaj nasze usługi web design i SEO"
                  >
                    <span className="relative z-10">Kontakt</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-gray-300 p-8 border border-gray-300 rounded-2xl flex flex-col">
              <div className="flex-grow space-y-6">
                <h3 className="text-2xl text-black font-semibold flex justify-center items-center">
                  Optymalizacja SEO
                </h3>
                <p className="text-gray-700 text-justify">
                  Średniej wielkości przedsiębiorstwa, które pragną rozszerzyć
                  swoją obecność online i zbudować silniejszą markę cyfrową,
                  znajdą tutaj wszystko, czego potrzebują. Ten pakiet obejmuje
                  rozbudowane projektowanie stron z elementami interaktywności i
                  zaawansowane strategie SEO
                </p>
                <ul className="list-disc pl-5 text-gray-900 font-bold">
                  <li>Rozbudowana strona w Next.js lub aplikacja w React.js</li>
                  <li>
                    Zaawansowana analiza konkurencji i research słów kluczowych
                  </li>
                  <li>Kompleksowa optymalizacja treści i link building</li>
                  <li>Monitoring pozycji w wyszukiwarkach</li>
                  <li>
                    Optymalizacja techniczna i treściowa dla wysokich rankingów
                  </li>
                  <li>Szybka i bezpieczna witryna</li>
                </ul>
              </div>
              <div className="space-x-8 col-span-1 text-left md:text-center">
                {/* Button */}
                <div className="pt-8 md:pt-0 mt-auto">
                  <Button
                    variant="primary"
                    size="lg"
                    className="group relative overflow-hidden"
                    aria-label="Poznaj nasze usługi web design i SEO"
                  >
                    <span className="relative z-10">Kontakt</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-gray-300 p-8 border border-gray-300 rounded-2xl flex flex-col">
              <div className="flex-grow space-y-6">
                <h3 className="text-2xl text-black font-semibold flex justify-center items-center">
                  Content Marketing
                </h3>
                <p className="text-gray-700 text-justify">
                  Dla firm, które dążą do dominacji w swojej niszy i potrzebują
                  kompleksowego rozwiązania cyfrowego. Ten pakiet oferuje
                  indywidualne projektowanie stron od podstaw z pełnym
                  wykorzystaniem możliwości Next.js, React.js lub Astro.js, oraz
                  najwyższą widoczność w Google.
                </p>
                <ul className="list-disc pl-5 text-gray-900 font-bold">
                  <li>
                    Indywidualne projektowanie i rozwój platformy
                    (Next.js/React.js/Astro.js)
                  </li>
                  <li>Zaawansowane SEO off-page i kompleksowe audyty SEO</li>
                  <li>
                    Optymalizacja dla Local SEO i integracja z narzędziami
                    analitycznymi
                  </li>
                  <li>Bieżące wsparcie i doradztwo SEO</li>
                  <li>
                    Tworzenie i realizacja strategii content marketingowej
                  </li>
                  <li>
                    Maksymalny ruch organiczny i najwyższa widoczność w Google
                  </li>
                </ul>
              </div>
              <div className="space-x-8 col-span-1 text-left md:text-center mt-8">
                {/* Button */}
                <div className="pt-8 md:pt-0 mt-auto">
                  <Button
                    variant="primary"
                    size="lg"
                    className="group relative overflow-hidden"
                    aria-label="Poznaj nasze usługi web design i SEO"
                  >
                    <span className="relative z-10">Kontakt</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
