import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en <GifExpertApp/>", () => {
  test("should mostrar solo una categoría al iniciar el componente", () => {
    const {container} = render(<GifExpertApp />);

    expect(screen.getByText("GifExpertApp")).toBeTruthy();
    expect(screen.getByRole("form")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
    expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(1);
    expect(screen.getAllByRole("heading", { level: 2 }).length).toBe(1);
    expect(container).toMatchSnapshot();
  });

  test("should mostrar el valor elscrito en el input", () => {
    const inputValue = "Naruto";
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: inputValue } });
    expect(input.value).toBe(inputValue);
    screen.debug();
  });
});
