import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("Pruebas en 06-deses-obj", () => {
  test("useContext debe retornar un objeto con los datos que se envia", () => {
    const heroe = {
      clave: "Batman",
      edad: 34,
    };
    const { clave, edad } = heroe;
    const getHeroe = usContext({ clave, edad });

    expect(getHeroe).toStrictEqual({
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    });
  });
});
