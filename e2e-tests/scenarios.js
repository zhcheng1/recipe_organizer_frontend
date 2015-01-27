'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /recipes when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/recipes");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#/recipes');
    });


    it('should render recipes when user navigates to /recipes', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('review', function() {

    beforeEach(function() {
      browser.get('index.html#/review');
    });


    it('should render review when user navigates to /review', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
