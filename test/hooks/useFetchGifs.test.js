import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Probando useFetchGifs", () => {
  test("should regresar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("Naruto"));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("should regresar un arreglo de imagenes y el isLoading en false", async () => {
    const { result } = renderHook(() => useFetchGifs("Naruto"));

    await waitFor(
        () => expect(result.current.images.length).toBeGreaterThan(0)
    )

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
