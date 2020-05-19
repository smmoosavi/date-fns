// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getYear from '.'

describe('getYear', function() {
  it('returns the year of the given date', function() {
    var result = getYear(/* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2))
    assert(result === 2014)
  })

  it('accepts a timestamp', function() {
    var result = getYear(
      /* 19379/1/15 */ new Date(20000, 3 /* Apr */, 2).getTime()
    )
    assert(result === 20000)
  })

  it('returns NaN if the given date is invalid', function() {
    var result = getYear(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(getYear.bind(null), TypeError)
  })
})
