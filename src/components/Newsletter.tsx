"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      setMessage("Por favor, insira um e-mail válido.");
      return;
    }

    // Simulate API call
    setStatus("success");
    setMessage("Bem-vindo ao clube! Verifique sua caixa de entrada.");
    setEmail("");
  };

  return (
    <section className="bg-card-bg border-b-2 border-black py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
          Entre para o Clube Dindim
        </h2>
        <p className="text-gray-600 mb-8 font-body text-lg">
          Receba dicas semanais de como cuidar do seu dinheiro sem perder a
          cabeça. Sem spam, só o que vale ouro.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto space-y-4"
          noValidate
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") {
                  setStatus("idle");
                  setMessage("");
                }
              }}
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-lg border-2 border-black focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] font-body transition-shadow"
              aria-label="Endereço de e-mail"
              required
            />
            <button
              type="submit"
              className="bg-accent text-black px-8 py-3 rounded-lg font-display font-bold uppercase tracking-wide comic-button whitespace-nowrap"
            >
              Inscrever-se
            </button>
          </div>

          {message && (
            <p
              className={`text-sm font-bold ${status === "error" ? "text-red-500" : "text-growth"}`}
            >
              {message}
            </p>
          )}

          <p className="text-xs text-gray-500 mt-4">
            Respeitamos sua privacidade. Cancele a qualquer momento.
          </p>
        </form>
      </div>
    </section>
  );
}
