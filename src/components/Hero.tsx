import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-background border-b border-stroke py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 md:order-1 content-center">
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              As Aventuras de Dindim —{" "}
              <span className="text-gray-600 block sm:inline">
                Finanças pessoais sem enrolação.
              </span>
            </h1>
            <p className="font-body text-xl text-gray-700 mb-8 max-w-lg">
              Explicações simples, decisões mais seguras. Aprenda a cuidar do
              seu dinheiro sem dor de cabeça.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-accent text-white px-8 py-3 rounded-full font-bold text-lg shadow-sm hover:opacity-90 transition-transform active:scale-95 border-2 border-accent">
                Inscrever-se
              </button>
              <button className="bg-transparent text-foreground px-8 py-3 rounded-full font-bold text-lg shadow-sm hover:bg-card-bg transition-colors border-2 border-stroke">
                Ler Artigos
              </button>
            </div>
          </div>

          {/* Illustration */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              {/* Dindim Character Illustration */}
              <Image
                src="/assets/dindim.svg"
                alt="Dindim Character"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
