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

Characters.prototype.getEpisodes = function () {
  const request = new RequestHelper('https://rickandmortyapi.com/api/episode');
  request.get().then( (data) => {
    this.episodeData = data;
    // list_episode_names = for each i in data.results return i.name (push into array)
    // PubSub.publish('Characters:episode-characters', this.charactersData);
    console.log(this.episodeData);
  });
};

module.exports = Characters;
