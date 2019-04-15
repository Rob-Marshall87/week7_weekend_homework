const PubSub = require('../helpers/pub_sub.js');

const SelectView = function () {
  this.selectElement = [];
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Characters:episode-names', (data) => {
    this.selectElement = data.detail;
    console.log(this.selectElement);
    this.render();
    document.getElementById('episode-select')
    .addEventListener('change', this.handleChange);
  });
};

SelectView.prototype.render = function (){
  const select = document.getElementById('episode-select');
  this.selectElement.forEach((name) => {
    select.appendChild(this.createOption(name));
  });
};

SelectView.prototype.createOption = function (episode) {
  const option = document.createElement('option');
  option.textContent = episode;
  return option;
};


SelectView.prototype.handleChange = function(evt){
  PubSub.publish('SelectView:episode-ready', evt.target.value);
};


module.exports = SelectView;
