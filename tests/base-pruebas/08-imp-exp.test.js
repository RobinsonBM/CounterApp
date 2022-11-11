import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroeById debe retornar un heroe por ID", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    expect(heroe).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeById debe retornar undefined si no existe el ID", () => {
    const id = 100;
    const heroe = getHeroeById(id);

    expect(heroe).toBeFalsy();
  });

  test("getHeroesByOwner debe retornar un arreglo con los heroes de DC", () => {
    const owner = "DC";
    const heroe = getHeroesByOwner(owner);

    expect(heroe.length).toBe(3);
    expect(heroe).toEqual([
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ]);
    expect(heroe).toEqual(heroes.filter((item) => item.owner === owner));
  });

  test("getHeroesByOwner debe retornar un arreglo con los heroes de Marvel", () => {
    const owner = "Marvel";
    const heroe = getHeroesByOwner(owner);

    expect(heroe.length).toBe(2);
    expect(heroe).toEqual(heroes.filter((item) => item.owner === owner));
  });
});
