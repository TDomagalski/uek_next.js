export const metadata = {
  title: {
    default: 'TwojaStrona.pl - Kontakt',
    template: '%s | TwojaStrona.pl',
  },
  description:
    'Content marketing i profesjonalne projektowanie stron WWW. Zwiększ zasięg swojej marki z naszymi usługami.',
  metadataBase: new URL('https://twojastrona.pl/kontakt'),
};

export default function KontaktPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Kontakt</h1>
    </main>
  );
}
