const Characters = require('./models/characters.js');
const SelectView = require('./views/select_episode_view.js');
const CharacterListView = require('./views/character_list_view.js');

document.addEventListener('DOMContentLoaded', () => {


  const characters = new Characters;
  characters.getData();
});
