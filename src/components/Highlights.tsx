import Image from "next/image";

const highlights = [
  {
    id: 1,
    title: "Reserva de Emergência",
    icon: "/assets/safe_pig.svg",
    description: "Comece aqui! Durma tranquilo sabendo que está protegido.",
    bubble: "Segurança!",
  },
  {
    id: 2,
    title: "Investimentos",
    icon: "/assets/coin.svg",
    description:
      "Faça seu dinheiro trabalhar por você enquanto aproveita a vida.",
    bubble: "Cresça!",
  },
  {
    id: 3,
    title: "Gastos Inteligentes",
    icon: "/assets/credit_card.svg",
    description: "Aproveite seu dinheiro sem culpa ou dívidas ruins.",
    bubble: "Gaste bem!",
  },
];

export default function Highlights() {
  return (
    <section className="bg-card-bg border-b border-stroke py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-center mb-12">
          Domine seu dinheiro
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item) => (
            <div
              key={item.id}
              className="bg-background border-2 border-stroke rounded-xl p-6 relative shadow-sm hover:-translate-y-1 transition-transform"
            >
              {/* Comic Bubble */}
              <div className="absolute -top-4 right-4 bg-white border border-stroke px-3 py-1 rounded-full text-sm font-display shadow-sm">
                {item.bubble}
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-4 relative">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-body">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
