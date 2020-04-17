/**
 *
 * @param cleanDate {Date}
 * @returns {boolean}
 */
import { isLeapJalaaliYear } from '../../_jalaali'
import getFullYear from '../getFullYear'

export default function isLeapYear(cleanDate) {
  var year = getFullYear(cleanDate)
  return isLeapJalaaliYear(year)
}
