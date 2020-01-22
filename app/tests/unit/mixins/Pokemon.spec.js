import Pokemon from "../../../src/mixins/Pokemon";
import { mock } from '../../mocks/PokemonResponseObject'

const poke = new Pokemon(mock);

test('As propriedades básicas devem ser setadas corretamente', () => {
  expect(poke.name).toBe('sandshrew');
  expect(poke.xp).toBe(60);
  expect(poke.weight).toBe(120);
});

test('A Prop sprites deve ser setada corretamente', () => {
  expect(poke.sprites).toMatchObject({
    default: {
      back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/27.png',
      front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png',
    },
    shiny: {
      back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/27.png',
      front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/27.png',
    }
  })
});

test('Os textos de stats devem ter sido convertidos corretamente', () => {
  expect(poke.stats.length).toBe(6);

  expect(poke.stats[0]).toMatchObject({
    title: 'Speed',
    value: 40,
  })

  expect(poke.stats[1]).toMatchObject({
    title: 'Special defense',
    value: 30,
  })

  expect(poke.stats[2]).toMatchObject({
    title: 'Special attack',
    value: 20,
  })

  expect(poke.stats[3]).toMatchObject({
    title: 'Defense',
    value: 85,
  })

  expect(poke.stats[4]).toMatchObject({
    title: 'Attack',
    value: 75,
  })

  expect(poke.stats[5]).toMatchObject({
    title: 'Hp',
    value: 50,
  })
});
