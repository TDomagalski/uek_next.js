import Button from './ui/Buttons';

export default function ContactUs() {
  return (
    <section
      className="relative min-h-[250px] flex items-center justify-center overflow-hidden bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/section_bg01.jpg')" }}
    >
      <div className="relative z-10 container p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="space-y-8 col-span-1 md:col-span-2 text-left">
            <h3 className="text-2xl font-semibold">
              <span>Let's talk about your project</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              officiis pariatur nemo voluptatibus suscipit, id, sit cumque
              temporibus labore rem provident tempore tempora aut aliquid harum
              alias officia dolore debitis.
            </p>
          </div>
          <div className="space-x-8 col-span-1 text-left md:text-center">
            {/* Button */}
            <div className="pt-8 md:pt-0 mt-auto">
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
  );
}
