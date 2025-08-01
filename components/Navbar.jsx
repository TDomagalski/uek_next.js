import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-bold text-xl">
          MojaFirma
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/uslugi" className="hover:text-gray-300">
              Usługi
            </Link>
          </li>
          <li>
            <Link href="/kontakt" className="hover:text-gray-300">
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
