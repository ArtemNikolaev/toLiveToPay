const assert = require('assert');
const { describe, it } = require('mocha');

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.strictEqual([1, 2, 3].indexOf(4), -1);
    });
  });
});
