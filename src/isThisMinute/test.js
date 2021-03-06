// @flow
/* eslint-env mocha */

import assert from 'assert'
import sinon from 'sinon'
import isThisMinute from '.'

describe('isThisMinute', () => {
  let clock
  beforeEach(() => {
    clock = sinon.useFakeTimers(
      /* 1393/7/3 */ new Date(2014, 8 /* Sep */, 25, 18, 30, 15, 500).getTime()
    )
  })

  afterEach(() => {
    clock.restore()
  })

  it('returns true if the given date and the current date have the same minute', () => {
    const date = /* 1393/7/3 */ new Date(2014, 8 /* Sep */, 25, 18, 30)
    assert(isThisMinute(date) === true)
  })

  it('returns false if the given date and the current date have different minutes', () => {
    const date = /* 1393/7/3 */ new Date(2014, 8 /* Sep */, 25, 18, 31)
    assert(isThisMinute(date) === false)
  })

  it('accepts a timestamp', () => {
    const date = /* 1393/7/3 */ new Date(
      2014,
      8 /* Sep */,
      25,
      18,
      30,
      30
    ).getTime()
    assert(isThisMinute(date) === true)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(isThisMinute.bind(null), TypeError)
  })
})
