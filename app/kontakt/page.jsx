import Image from 'next/image';

export default function KontaktPage() {
  return (
    <>
      <section className="min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 container px-4 sm:px-6 lg:px-8">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start md:items-center justify-start">
            <div className="space-y-8 p-8 md:p-16">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight ">
                <span>Kontakt</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl">
                Masz pytania, sugestie, a może chcesz{' '}
                <span className="font-semibold text-purple-600">
                  nawiązać współpracę?
                </span>{' '}
                Napisz bezpośrednio na{' '}
                <span className="font-semibold text-purple-600">
                  podany adres e-mail.
                </span>{' '}
                Postaram się odpowiedzieć na każdą wiadomość tak szybko, jak to
                możliwe.
              </p>
            </div>
            <div className="relative w-full h-full min-h-[400px] sm:min-h-[400px] lg:min-h-full">
              <Image
                src="/kontakt/top-img.png"
                alt="Skontaktuj się ze mną"
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
              <span>Skontaktuj się ze mną</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-full">
              Niniejsza{' '}
              <span className="font-semibold text-purple-600">
                strona internetowa
              </span>{' '}
              została zaprojektowana i stworzona jako integralna część{' '}
              <span className="font-semibold text-purple-600">
                pracy licencjackiej.
              </span>{' '}
              Powstała w celu praktycznego zastosowania oraz prezentacji wiedzy
              i umiejętności zdobytych podczas studiów.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-center items-stretch  py-20">
            <div className="bg-gray-300 p-8 border border-gray-300 rounded-2xl flex flex-col">
              <div className="space-y-6 flex flex-col justify-start flex-grow">
                <h3 className="text-2xl text-black font-semibold flex items-center">
                  <svg
                    className="h-8 w-8 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  Tomasz Domagalski
                </h3>
                <p className="text-gray-700 flex-grow">
                  Projekt stworzony do celów przeprowadzenia benchmarku jakości
                  SEO na stronach internetowych w React.js, Next.js i Astro.js.
                </p>
                <div className="mt-4 flex flex-col justify-start gap-2.5">
                  <div>
                    <h4 className="text-xl text-black flex items-center">
                      <svg
                        className="h-8 w-8 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
                        <line x1="8" y1="3" x2="8" y2="21"></line>
                      </svg>
                      Nr. Albumu: 208610
                    </h4>
                  </div>
                  <div>
                    <h4 className="text-xl text-black flex items-center">
                      <svg
                        className="h-8 w-8 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      Email: Tomektd6@gmail.com
                    </h4>
                  </div>
                  <div>
                    <h4 className="text-xl text-black flex items-center">
                      <svg
                        className="h-8 w-8 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      Nr. Telefonu: 664-939-711
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-300 p-8 border border-gray-300 rounded-2xl flex flex-col">
              <div className="space-y-6 flex flex-col justify-start flex-grow">
                <h3 className="text-2xl text-black font-semibold flex items-center">
                  <svg
                    className="h-8 w-8 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
                    <line x1="8" y1="3" x2="8" y2="21"></line>
                  </svg>
                  Praca licencjacka
                </h3>
                <p className="text-gray-700 flex-grow">
                  Dane pracy licencjackiej
                </p>
                <div className="mt-4 flex flex-col justify-start gap-2.5">
                  <div>
                    <h4 className="text-xl text-black flex items-center">
                      <svg
                        className="h-8 w-8 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v15H6.5A2.5 2.5 0 0 1 4 14.5v-11A2.5 2.5 0 0 1 6.5 2z"></path>
                      </svg>
                      Kierunek: Informatyka stosowana - Inżynieria
                      oprogramowania
                    </h4>
                  </div>
                  <div>
                    <h4 className="text-xl text-black flex items-center">
                      <svg
                        className="h-8 w-8 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v15H6.5A2.5 2.5 0 0 1 4 14.5v-11A2.5 2.5 0 0 1 6.5 2z"></path>
                      </svg>
                      Tytuł pracy:
                    </h4>
                  </div>
                  <div>
                    <h4 className="text-xl text-black flex items-center">
                      <svg
                        className="h-8 w-8 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      Promotor: dr Bartłomiej Balsamski
                    </h4>
                  </div>
                  <div>
                    <h4 className="text-xl text-black flex items-center">
                      <svg
                        className="h-8 w-8 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      Data obrony: 17.09.2025r.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
