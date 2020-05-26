/**
 *
 * @param args
 * @returns {Date}
 */
import { toGregorian } from '../../_jalaali'

export default function newDate(...args) {
  if (args.length > 1) {
    const [year, month, day = 1, ...rest] = args
    const g = toGregorian(year, month + 1, day)
    return new Date(...[g.gy, g.gm - 1, g.gd, ...rest])
  }
  return new Date(...args)
}
