import { toJalaali } from '../../_jalaali'

/**
 *
 * @param cleanDate {Date}
 * @returns {number}
 */
export default function getUTCFullYear(cleanDate) {
  const gd = cleanDate.getUTCDate()
  const gm = cleanDate.getUTCMonth() + 1
  const gy = cleanDate.getUTCFullYear()
  return toJalaali(gy, gm, gd).jy
}
