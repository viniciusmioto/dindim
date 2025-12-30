import HeroText from "./hero/HeroText";
import HeroCTA from "./hero/HeroCTA";
import HeroIllustration from "./hero/HeroIllustration";

export default function Hero() {
  return (
    <section className="bg-background border-b border-stroke py-16 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Content - Takes up 8 columns (approx 67%) on desktop for wider text */}
          <div className="order-2 lg:order-1 lg:col-span-8 flex flex-col justify-center">
            <HeroText />
            <HeroCTA />
          </div>

          {/* Illustration - Takes up 4 columns on desktop */}
          <div className="order-1 lg:order-2 lg:col-span-4 flex justify-center lg:justify-end">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
