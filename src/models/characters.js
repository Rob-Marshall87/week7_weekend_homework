const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Characters = function () {
  this.charactersData = [];
  this.episodes = [];
};

Characters.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:episode-ready', (evt) => {
    const episodeName = evt.detail;
    // console.log(episodeName);
    this.publishCharactersByEpisode(episodeName);
  });
};

Characters.prototype.getData = function () {
  const request = new RequestHelper('https://rickandmortyapi.com/api/character');
  request.get().then( (data) => {
    this.charactersData = data.results;
    PubSub.publish('Characters:send-data', this.charactersData);
    console.log(this.charactersData);
  });
};

Characters.prototype.getEpisodes = function () {
  const request = new RequestHelper('https://rickandmortyapi.com/api/episode');
  request.get().then( (data) => {
    this.episodeData = data.results;
    const listEpisodeNames = this.episodeData.map((episode) => {
      return episode.name;
    });
    PubSub.publish('Characters:episode-names', listEpisodeNames);
    // console.log(listEpisodeNames);
  });
};

Characters.prototype.publishCharactersByEpisode = function () {

};

module.exports = Characters;
