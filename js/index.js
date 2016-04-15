"use strict";

(function(ko) {
  
  var Book = function() {
    var self = this;
    self.name = ko.observable('a');
    self.price = ko.observable('s');
  };
    
  var ShopListing = function() {
    var self = this;
    
    self.books = ko.observableArray([]);
    
    function init() {
        
      load();
    }
    
    function load() {
        
      $.getJSON('data/books.json', function(data) {
        $.map(data, function(item) {
          self.books.push(item);
        })
      });
    }
        
    init();
  };
  
  ko.options.deferUpdates = true;
  ko.applyBindings(new ShopListing());
})(ko);