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
        style={{ backgroundImage: 'url(/homepage/top-bg.jpg)' }}
      >
        {/* Main Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20">
            {/* Left Side - Content */}
            <header className="space-y-8">
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

              {/* CTA Button */}
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
            </header>
          </div>
        </div>
      </section>
    </>
  );
}
