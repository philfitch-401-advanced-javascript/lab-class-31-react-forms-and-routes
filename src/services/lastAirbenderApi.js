
const getRandomCharacterImage = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/random')
    .then(res => res.json())
    .then(({ results }) => {
      return (results.photoUrl);
    });
};

module.exports = {
  getRandomCharacterImage
};
