// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getDecade from '.'

describe('getDecade', function() {
  it('returns the decade for a the given date', function() {
    var result = getDecade(/* 1350/8/17 */ new Date(1971, 10 /* Nov */, 8))
    assert(result === 1350)
  })

  it('accepts a timestamp', function() {
    var result = getDecade(
      /* 1348/4/29 */ new Date(1969, 6 /* Jul */, 20).getTime()
    )
    assert(result === 1340)
  })

  it('returns NaN if the given date is invalid', function() {
    var result = getDecade(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(getDecade.bind(null), TypeError)
  })
})
