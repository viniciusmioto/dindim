import { render, screen, fireEvent } from "@testing-library/react";
import Newsletter from "../Newsletter";

describe("Newsletter", () => {
  it("renders input and button", () => {
    render(<Newsletter />);
    expect(
      screen.getByPlaceholderText(/Seu melhor e-mail/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /inscrever-se/i }),
    ).toBeInTheDocument();
  });

  it("shows error for invalid email", () => {
    render(<Newsletter />);

    const button = screen.getByRole("button", { name: /inscrever-se/i });
    fireEvent.click(button);

    expect(
      screen.getByText(/Por favor, insira um e-mail válido/i),
    ).toBeInTheDocument();
  });

  it("shows success message on valid submission", () => {
    render(<Newsletter />);

    const input = screen.getByPlaceholderText(/Seu melhor e-mail/i);
    const button = screen.getByRole("button", { name: /inscrever-se/i });

    fireEvent.change(input, { target: { value: "test@example.com" } });
    fireEvent.click(button);

    expect(screen.getByText(/Bem-vindo ao clube/i)).toBeInTheDocument();
  });
});
