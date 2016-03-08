describe('Search', function() {

  beforeEach(function() {
    browser.get('search');
  });

  it('should have an input', function() {
    expect(element(by.css('app section search form input')).isPresent()).toEqual(true);
  });

  it('should have a list of computer scientists', function() {
    expect(element(by.css('app section search ul')).getText()).toEqual('Dijkstra\nKnuth\nTuring\nHopper');
  });

  it('should add a name to the list using the form', function() {
    element(by.css('app section search form input')).sendKeys('Tim Berners-Lee');
    element(by.css('app section search form button')).click();
    expect(element(by.css('app section search ul')).getText()).toEqual('Dijkstra\nKnuth\nTuring\nHopper\nTim Berners-Lee');
  });
});
