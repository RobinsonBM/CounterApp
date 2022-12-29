import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Pruebas en 09-promesas', () => {
  test('GetHeroeByIsAsync debe retornar un Heroe', (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual({
        id: 1,
        name: 'Batman',
        owner: 'DC',
      });
      done();
    });
  });

  test('GetHeroeByIsAsync debe retornar un error si Heroe no existe', (done) => {
    const id = 100;
    getHeroeByIdAsync(id)
      .then((hero) => {
        expect(hero).toBeFalsy();
        done();
      })
      .catch((error) => {
        expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
        done();
      });
  });
});
