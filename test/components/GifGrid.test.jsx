const { render, screen } = require("@testing-library/react");
const { GifGrid } = require("../../src/components/GifGrid");
const { useFetchGifs } = require("../../src/hooks/useFetchGifs");

jest.mock("../../src/hooks/useFetchGifs");

describe("Probando GifGrid", () => {
  const category = "Naruto";
  test("should mostrar loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando...")).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
  });

  test("should mostrar items cuando se cargan las imagenes mediante el useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Naruto",
        url: "https://localhost/naruto.jpg",
      },
      {
        id: "123",
        title: "One Piece",
        url: "https://localhost/one-piece.jpg",
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    const { container } = render(<GifGrid category={category} />);
    expect(container).toMatchSnapshot();

    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
