import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Image
              src="/assets/logo.svg"
              alt="Dindim Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <span className="font-display font-bold text-xl">Dindim</span>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-sm font-bold text-gray-600">
            <Link href="/terms" className="hover:text-accent">
              Termos
            </Link>
            <Link href="/privacy" className="hover:text-accent">
              Privacidade
            </Link>
            <Link href="/contact" className="hover:text-accent">
              Contato
            </Link>
          </div>

          {/* Socials (Placeholder) */}
          <div className="flex gap-4">
            {/* Simple circles for social icons */}
            <div className="w-8 h-8 rounded-full bg-stroke flex items-center justify-center text-white text-xs hover:bg-accent cursor-pointer transition-colors">
              IG
            </div>
            <div className="w-8 h-8 rounded-full bg-stroke flex items-center justify-center text-white text-xs hover:bg-accent cursor-pointer transition-colors">
              YT
            </div>
            <div className="w-8 h-8 rounded-full bg-stroke flex items-center justify-center text-white text-xs hover:bg-accent cursor-pointer transition-colors">
              X
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} As Aventuras de Dindim. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
