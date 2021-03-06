import toInteger from '../_lib/toInteger/index.js'
import toDate from '../toDate/index.js'
import getDaysInMonth from '../getDaysInMonth/index.js'
import requiredArgs from '../_lib/requiredArgs/index.js'

import coreGetMonth from '../_core/getMonth/index.js'
import coreSetMonth from '../_core/setMonth/index.js'
import coreGetDate from '../_core/getDate/index.js'
import coreGetFullYear from '../_core/getFullYear/index.js'
import coreSetFullYear from '../_core/setFullYear/index.js'

/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * var result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */
export default function addMonths(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments)

  var date = toDate(dirtyDate)
  var amount = toInteger(dirtyAmount)
  var desiredMonth = coreGetMonth(date) + amount
  var dateWithDesiredMonth = new Date(0)
  coreSetFullYear(dateWithDesiredMonth, coreGetFullYear(date), desiredMonth, 1)
  dateWithDesiredMonth.setHours(0, 0, 0, 0)
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth)
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  coreSetMonth(date, desiredMonth, Math.min(daysInMonth, coreGetDate(date)))
  return date
}
