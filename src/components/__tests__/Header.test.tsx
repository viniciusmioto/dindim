import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  it("renders logo and navigation links", () => {
    render(<Header />);

    // Check Logo (alt text)
    expect(screen.getByAltText("Dindim Logo")).toBeInTheDocument();

    // Check Navigation Links
    expect(screen.getByText("Início")).toBeInTheDocument();
    expect(screen.getByText("Artigos")).toBeInTheDocument();
    expect(screen.getByText("Vídeos")).toBeInTheDocument();
    expect(screen.getByText("Sobre")).toBeInTheDocument();
  });

  it("renders subscribe button", () => {
    render(<Header />);
    const buttons = screen.getAllByRole("button", { name: /inscrever-se/i });
    expect(buttons.length).toBeGreaterThan(0);
  });
});
