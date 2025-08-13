import Link from 'next/link';

import Button from './ui/Buttons';

export default function ContactUs() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/section_bg01.jpg')" }}
    >
      <div className="relative z-10 container py-14 px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="space-y-8 col-span-1 md:col-span-2 text-center md:text-left p-12">
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-semibold">
              <span>Porozmawiajmy o Twoim projekcie</span>
            </h3>
            <p className="text-lg sm:text-2xl md:text-3xl">
              Szukasz skutecznej strony internetowej, lepszej widoczności w
              Google albo treści, które przyciągają klientów? Napisz do mnie –
              wspólnie stworzymy rozwiązanie dopasowane do Twoich celów
              biznesowych.
            </p>
          </div>
          <div className="space-x-8 col-span-1 text-center ">
            {/* Button */}
            <div className="pt-8 md:pt-0 mt-auto">
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
  );
}
