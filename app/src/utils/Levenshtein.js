var levenshtein = require('fast-levenshtein');

export default function Levenshtein () {
  let names = [];
  let rootObject = [];

  this.setRootObject = function (pokes) {
    names = [];
    rootObject = pokes;

    pokes.map(poke => {
      names.push(poke.name);
    })
  };

  this.find = function (text) {
    let indexes = this.findIndexes(text);
    let children = [];

    if (indexes.length) {
      indexes.forEach(idxNumber => {
        children.push(rootObject[idxNumber]);
      })
    }

    return children;
  };

  this.findIndexes = function (text) {
    let indexes = [];

    names.forEach((name, idx) => {
      if (name.match(text)) {
        indexes.push(idx);
      } else {
        const distance = levenshtein.get(text, name);
        const diff = name.length - distance;

        if (distance < 10 && diff >= 3) {
          indexes.push(idx);
        }
      }
    });

    return indexes;
  }
}
