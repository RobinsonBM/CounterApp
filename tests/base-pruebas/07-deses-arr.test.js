import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Pruebas en 07-deses-arr", () => {
  test("Debe de retornar un string y un numero", () => {
    const [letras, numeros] = retornaArreglo();

    expect(letras).toBe("ABC");
    expect(numeros).toBe(123);

    expect(typeof letras).toBe("string");
    expect(typeof numeros).toBe("number");

    // (expect.any(String) expresion que indica que espera cualquier cosa (el tipo de dato esperado)
    expect(letras).toStrictEqual(expect.any(String));
    expect(numeros).toStrictEqual(expect.any(Number));
  });
});
