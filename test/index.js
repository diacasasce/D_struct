const test = require('tap').test

const genSt = require('../index')

test('smoke test', function (t) {
  const string = genSt()
  t.is(typeof string, 'string')
  t.end()
})
