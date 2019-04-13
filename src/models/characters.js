const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Characters = function () {
  this.charactersData = [];
  this.episodes = [];
};

// Characters.prototype.bindEvents = function () {
//   PubSub.subscribe('SelectView:episode-ready', (evt) => {
//     const episodeIndex = evt.detail;
//     this.publishCharactersByEpisode(episodeIndex);
//   });
// };

Characters.prototype.getData = function () {
  const request = new RequestHelper('https://rickandmortyapi.com/api/character');
  request.get().then( (data) => {
    this.charactersData = data;
    // PubSub.publish('Characters:episode-characters', this.charactersData);
    console.log(this.charactersData);
  });
};

module.exports = Characters;
