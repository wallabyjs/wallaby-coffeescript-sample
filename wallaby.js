module.exports = function (w) {

  return {
    files: [
      'src/*.coffee'
    ],

    tests: [
      'test/*Spec.coffee'
    ]

    // CoffeeScript compiler is on by default with default options,
    // you can configure built-in compiler by passing options to it
    //compilers: {
    //  '**/*.coffee': w.compilers.coffeeScript({})
    //}
  };
};