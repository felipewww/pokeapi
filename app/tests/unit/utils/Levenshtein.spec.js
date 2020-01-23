import { pokeBasic } from '../../mocks/PokeBasicInfo'
import Levenshtein from "../../../src/utils/Levenshtein";

test('encontrar o índice do bulbusauro por proximidade do texto', () => {
  let lev = new Levenshtein();
  lev.setRootObject(pokeBasic);

  const idxs = lev.findIndexes('blb')
  expect(idxs).toMatchObject([0]);
})
