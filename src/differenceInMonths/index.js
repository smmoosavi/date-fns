import toDate from '../toDate/index'
import differenceInCalendarMonths from '../differenceInCalendarMonths/index'
import compareAsc from '../compareAsc/index'
import requiredArgs from '../_lib/requiredArgs/index'

import coreGetMonth from '../_core/getMonth/index'
import coreSetMonth from '../_core/setMonth/index'

/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */
export default function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments)

  var dateLeft = toDate(dirtyDateLeft)
  var dateRight = toDate(dirtyDateRight)

  var sign = compareAsc(dateLeft, dateRight)
  var difference = Math.abs(differenceInCalendarMonths(dateLeft, dateRight))
  coreSetMonth(dateLeft, coreGetMonth(dateLeft) - sign * difference)

  // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastMonthNotFull = compareAsc(dateLeft, dateRight) === -sign
  var result = sign * (difference - isLastMonthNotFull)
  // Prevent negative zero
  return result === 0 ? 0 : result
}
