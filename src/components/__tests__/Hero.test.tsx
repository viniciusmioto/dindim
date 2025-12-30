import { render, screen } from "@testing-library/react";
import Hero from "../Hero";

describe("Hero", () => {
  it("renders main heading and text", () => {
    render(<Hero />);

    expect(screen.getByText(/As Aventuras de Dindim/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Explicações simples, decisões mais seguras/i),
    ).toBeInTheDocument();
  });

  it("renders illustration", () => {
    render(<Hero />);
    expect(screen.getByAltText("Dindim Character")).toBeInTheDocument();
  });

  it("renders CTA buttons", () => {
    render(<Hero />);

    const subscribeBtn = screen.getByRole("button", { name: /inscrever-se/i });
    const readBtn = screen.getByRole("button", { name: /ler artigos/i });

    expect(subscribeBtn).toBeInTheDocument();
    expect(readBtn).toBeInTheDocument();
  });
});
