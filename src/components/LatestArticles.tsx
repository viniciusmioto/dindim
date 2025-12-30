import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "5 Erros Financeiros para Evitar nos Seus 20 Anos",
    excerpt:
      "Não deixe essas armadilhas comuns impedirem sua liberdade financeira.",
    date: "28 Dez, 2024",
    readTime: "5 min de leitura",
    tag: "Básico",
  },
  {
    id: 2,
    title: "Entendendo Juros Compostos",
    excerpt:
      "A oitava maravilha do mundo explicada de forma simples para todos.",
    date: "25 Dez, 2024",
    readTime: "4 min de leitura",
    tag: "Investimentos",
  },
  {
    id: 3,
    title: "Cartão de Crédito: Amigo ou Vilão?",
    excerpt: "Como usar o cartão a seu favor sem cair em dívidas.",
    date: "20 Dez, 2024",
    readTime: "6 min de leitura",
    tag: "Crédito",
  },
];

export default function LatestArticles() {
  return (
    <section className="bg-background border-b border-stroke py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h2 className="font-display font-bold text-3xl md:text-4xl">
            Últimos Artigos
          </h2>
          <Link
            href="/articles"
            className="text-accent font-bold hover:underline"
          >
            Ler todos artigos →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-card-bg rounded-xl border-2 border-stroke mb-4 relative overflow-hidden transition-transform group-hover:scale-[1.02]">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  {/* Image Placeholder */}
                  <span className="font-display">Imagem de Capa</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                <span className="font-bold text-accent">{article.tag}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
              <h3 className="font-display font-bold text-xl mb-2 group-hover:text-accent transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-600 line-clamp-2">{article.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
