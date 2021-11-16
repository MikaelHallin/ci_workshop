const assert = require('assert');

function testFunction() {
  return 10;
}

console.log('Executed tests');
assert(testFunction() < 1000);
