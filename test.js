const assert = require('assert');

function testFunction() {
  return 1000;
}

console.log('Executed tests');
assert(testFunction() < 1000);
