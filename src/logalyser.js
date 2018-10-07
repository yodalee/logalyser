"use strict";

(function () {

var Lglz = function () {
  console.log("constructor");
  this.content = "";
  this.filters = [];

  this.elem = this.createElement();
  document.querySelector("#logalyser").appendChild(this.elem);

  var fileselect = this.elem.querySelector(".lglz-fileselect");
  fileselect.addEventListener('change', this.handleFile.bind(this));
};

Lglz.prototype.template = [
  '<div class="lglz-top">',
    '<input type="file" class="lglz-fileselect"/>', '</br>',
    '<textarea class="lglz-content">', '</textarea>',
    '<div>',
      'Filter',
      '<div class="lglz-filter">', '</div>',
    '</div>',
  '</div>',
].join("");

Lglz.prototype.createElement = function() {
  var div = document.createElement('div');
  div.innerHTML = this.template;
  return div;
}

Lglz.prototype.loadContent = function(content) {
  this.content = content;
  this.render();
}

Lglz.prototype.addFilter = function(keyword) {
  this.filters.push(keyword);
  this.render();
}

Lglz.prototype.render = function() {
  var textarea = this.elem.querySelector('.lglz-content');
  textarea.innerHTML = this.content;
}

Lglz.prototype.handleFile = function(evt) {
  var file = evt.target.files[0];
  var self = this;
  // FIXME: how to deal with empty file extension
  if (!(file.type.match("text/plain") || file.type == "")) {
    return;
  }

  var reader = new FileReader();

  reader.onload = (function(e) {
    var content = e.target.result;
    console.log(this);
    this.loadContent(content);
  }).bind(this);

  reader.readAsText(file);
}

window.Lglz = Lglz;

})();

window.onload = function() {(function () {

var lglz = new Lglz;

})()};
