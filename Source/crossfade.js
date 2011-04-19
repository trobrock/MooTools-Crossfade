/*
---
description: Element class, Elements class, and basic dom methods.

license: MIT-style

authors:
- Trae Robrock

requires:
- core/1.3: '*'

provides: [Crossfade]

*/

var Crossfade = new Class({
  Implements: [Options, Chain],
  options: {
    duration: 1000
  },

  initialize: function(element, options) {
    this.setOptions(options);
    this.element = element;
    this.currentIndex = 0;
    this.images = element.getElements('img');
    for (var i = 0; i < this.images.length; i++) {
      if (i in this.images) {
        this.images[i].setStyles({ top: 0, left: 0, position: "absolute" });
        this.images[i].set('tween', { duration: this.options.duration });
        if (i !== 0) { this.images[i].fade('hide'); }
      }
    }
  },

  start: function() {
    this.timer = setInterval(this.next.bind(this), 5000);
  },

  next: function() {
    var currentImage = this.images[this.currentIndex],
        nextIndex    = (this.currentIndex + 1 == this.images.length) ? 0 : this.currentIndex + 1;
        nextImage    = this.images[nextIndex];

    this.chain(
      function(){ this.hide(currentImage); }.bind(this),
      function(){ this.show(nextImage); }.bind(this)
    );
    this.callChain();

    this.currentIndex = nextIndex;
  },

  show: function(image) {
    image.setStyle('z-index', 100);
    image.fade('in');
  },

  hide: function(image) {
    setTimeout(this.callChain.bind(this), this.options.duration / 4);
    image.setStyle('z-index', 0);
    image.fade('out');
  }
});
