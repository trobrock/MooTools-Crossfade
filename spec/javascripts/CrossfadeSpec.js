var dom, crossfade;

describe("Crossfade", function() {
  beforeEach(function() {
    dom = Elements.from("<ul><li><img src='img1.png' /></li><li><img src='img2.png' /></li><li><img src='img3.png' /></li></ul>")[0];
  });

  describe("initialize", function() {
    beforeEach(function() {
      crossfade = new Crossfade(dom);
    });

    it("should collect the images", function() {
      expect(crossfade.images.length).toEqual(3);
    });

    it("should hide all the images except the first", function() {
      expect(crossfade.images[0].getStyle('opacity')).not.toEqual(0);
      for (var i = 1; i < crossfade.images.length; i++) {
        expect(crossfade.images[i].getStyle('opacity')).toEqual(0);
      }
    });

    it("should set the tween duration on all the images", function() {
      for (var i = 0; i < crossfade.images.length; i++) {
        expect(crossfade.images[i].get('tween').options.duration).toEqual(1000);
      }
    });
  });
});
