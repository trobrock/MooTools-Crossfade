var dom, crossfade;

describe("Crossfade", function() {
  beforeEach(function() {
    dom = Elements.from("<div><img src='img1.png' /><img src='img2.png' /><img src='img3.png' /></div>");
  });

  describe("initialize", function() {
    beforeEach(function() {
      crossfade = new Crossfade(dom[0]);
    });

    it("should collect the images", function() {
      console.log(crossfade.images);
      expect(crossfade.images.length).toEqual(3);
    });

    it("should hide all the images except the first", function() {
      
    });

    it("should set the tween duration on all the images", function() {
      
    });
    
    
  });
});
