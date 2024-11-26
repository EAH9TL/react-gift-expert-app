import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Probando GifItem", () => {
  const title = "Naruto";
  const url = "https://naruto.com/naruto.jpg";

  test("should match Snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("should mostrar la imagen y el alt indicado", () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();

    // expect(screen.getByRole("img").src).toBe(url);
    // expect(screen.getByRole("img").alt).toBe(title);

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("should mostrar el titulo en el componente", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
