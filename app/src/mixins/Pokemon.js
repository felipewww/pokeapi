export default function Pokemon (pokeServiceResponse) {
  this.name = pokeServiceResponse.name;
  this.xp = pokeServiceResponse.base_experience;
  this.stats = pokeServiceResponse.stats;
  this.weight = pokeServiceResponse.weight;
  this.sprites = setSprites();
  this.stats = setStats();

  function setSprites () {
    return {
      default: {
        back: pokeServiceResponse.sprites.back_default,
        front: pokeServiceResponse.sprites.front_default,
      },
      shiny: {
        back: pokeServiceResponse.sprites.back_shiny,
        front: pokeServiceResponse.sprites.front_shiny,
      }
    }
  }

  function setStats () {
    return pokeServiceResponse.stats.map(statSettings => {
      return {
        title: asReadableText(statSettings.stat.name),
        value: statSettings.base_stat
      }
    })
  }

  /**
   * Converter some-text para Some text
   * @param text
   */
  function asReadableText (text) {
    const withoutTraceAndFirstChar = text.replace(/[-]+/g, ' ').substring(1);
    const firstCharAsUpper = text.charAt(0).toUpperCase();

    return firstCharAsUpper + withoutTraceAndFirstChar;
  }
}
