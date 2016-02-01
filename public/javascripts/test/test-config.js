(function() {
  (function(require) {
    return require.config({
      paths: {
        mocha: '../../vendors/mocha/mocha.js',
        chai: '../../public/vendors/chai/chai.js'
      },
      shim: {
        mocha: {
          exports: 'mocha'
        },
        chai: {
          exports: 'chai'
        }
      }
    });
  })(require);

}).call(this);
