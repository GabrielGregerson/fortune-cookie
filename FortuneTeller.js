const fortunes = require('./Fortunes.json');

function getFortune() {
  const randNum = Math.floor(Math.random() * fortunes.length);
  const randFortune = fortunes[randNum];
  return randFortune;
}

module.exports = { getFortune };
