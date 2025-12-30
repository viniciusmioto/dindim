export default function VideoBlock() {
  return (
    <section className="bg-background border-b border-stroke py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-display font-bold text-3xl md:text-4xl">
            Assista e Aprenda
          </h2>
          <a href="/videos" className="text-accent font-bold hover:underline">
            Ver todos vídeos →
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Video */}
          <div className="lg:col-span-2">
            <div className="aspect-video bg-black rounded-xl overflow-hidden border-2 border-stroke shadow-sm relative">
              {/* Placeholder for YouTube Embed */}
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <span className="font-display text-xl">Vídeo em Destaque</span>
              </div>
            </div>
            <h3 className="font-display font-bold text-xl mt-4">
              Como começar a investir com R$ 50
            </h3>
            <p className="text-gray-600 mt-2">
              Você não precisa ser rico para começar a construir patrimônio.
              Aqui está o passo a passo.
            </p>
          </div>

          {/* Shorts List */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">Shorts Populares</h3>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex gap-4 items-center group cursor-pointer"
              >
                <div className="w-24 h-40 bg-gray-200 rounded-lg border border-stroke flex-shrink-0 relative overflow-hidden">
                  {/* Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs">
                    Short {i}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold group-hover:text-accent transition-colors">
                    Dica de Ouro #{i}
                  </h4>
                  <p className="text-sm text-gray-500">15k visualizações</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
