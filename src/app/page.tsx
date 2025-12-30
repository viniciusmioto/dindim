import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import LatestArticles from "@/components/LatestArticles";
import VideoBlock from "@/components/VideoBlock";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col">
        <Hero />
        <Highlights />
        <LatestArticles />
        <VideoBlock />
        <Newsletter />
      </div>
      <Footer />
    </main>
  );
}
