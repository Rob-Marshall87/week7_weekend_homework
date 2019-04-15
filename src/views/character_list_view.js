const PubSub = require('../helpers/pub_sub.js');

const CharacterListView = function () {
  this.characters = [];
};

CharacterListView.prototype.bindEvents = function () {
  PubSub.subscribe('Characters:data-ready', (data) => {
    console.log(data);
    this.characters =  data;
  });
};
