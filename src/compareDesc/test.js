// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import compareDesc from '.'

describe('compareDesc', function() {
  it('returns 0 if the given dates are equal', function() {
    var result = compareDesc(
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10),
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10)
    )
    assert(result === 0)
  })

  it('returns 1 if the first date is before the second one', function() {
    var result = compareDesc(
      /* 1365/11/22 */ new Date(1987, 1 /* Feb */, 11),
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10)
    )
    assert(result === 1)
  })

  it('returns -1 if the first date is after the second one', function() {
    var result = compareDesc(
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10),
      /* 1365/11/22 */ new Date(1987, 1 /* Feb */, 11)
    )
    assert(result === -1)
  })

  it('sorts the dates array in the reverse chronological order when function is passed as the argument to Array.prototype.sort()', function() {
    var unsortedArray = [
      /* 1374/4/11 */ new Date(1995, 6 /* Jul */, 2),
      /* 1365/11/22 */ new Date(1987, 1 /* Feb */, 11),
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10)
    ]

    var sortedArray = [
      /* 1374/4/11 */ new Date(1995, 6 /* Jul */, 2),
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10),
      /* 1365/11/22 */ new Date(1987, 1 /* Feb */, 11)
    ]

    var result = unsortedArray.sort(compareDesc)

    assert.deepEqual(result, sortedArray)
  })

  it('accepts timestamps', function() {
    var result = compareDesc(
      /* 1365/11/22 */ new Date(1987, 1 /* Feb */, 11).getTime(),
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10).getTime()
    )
    assert(result === 1)
  })

  it('returns NaN if the first date is `Invalid Date`', function() {
    var result = compareDesc(
      new Date(NaN),
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10)
    )
    assert(isNaN(result))
  })

  it('returns NaN if the second date is `Invalid Date`', function() {
    var result = compareDesc(
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10),
      new Date(NaN)
    )
    assert(isNaN(result))
  })

  it('returns NaN if the both dates are `Invalid Date`', function() {
    var result = compareDesc(
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10),
      new Date(NaN)
    )
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(compareDesc.bind(null), TypeError)
    assert.throws(compareDesc.bind(null, 1), TypeError)
  })
})
