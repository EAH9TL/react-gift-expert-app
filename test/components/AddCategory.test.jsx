const { screen, render, fireEvent } = require("@testing-library/react");
const { AddCategory } = require("../../src/components/AddCategory");

describe("Probando AddCategory", () => {
  test("should cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: "Naruto" } });
    // screen.debug();
    expect(input.value).toBe("Naruto");
  });

  test("should de llamar onNewCategory si el input tiene un valor", () => {
    const inputValue = "One Piece";
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");

    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe("");

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("should no llamar onNewCategory si el input está vacío", () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const form = screen.getByRole("form");

    fireEvent.submit(form);

    // expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
