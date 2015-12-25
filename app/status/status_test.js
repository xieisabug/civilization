'use strict';

describe('myApp.status module', function() {

  beforeEach(module('myApp.view1'));

  describe('status controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('StatusCtrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});