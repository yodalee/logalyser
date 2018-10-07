"use strict";
(function () {

var Lglz = function () {
  console.log("constructor");
  this.content = "";
  this.filters = [];
  this.elem = this.createElement();
  document.querySelector("body").appendChild(this.elem);
}

Lglz.prototype.template = [
  '<div class="lglz-top">',
  '<textarea class="lglz-content">',
  '</textarea>',
  '</div>',
].join("");

Lglz.prototype.createElement = function() {
  var div = document.createElement('div');
  div.innerHTML = this.template;
  return div;
}

Lglz.prototype.setContent = function(content) {
  this.content = content;
}

window.Lglz = Lglz;

})();

window.onload = function() {(function () {
  var lglz = new Lglz;
})()};
