/**
 *
 * @param cleanDate {Date}
 * @returns {number}
 */
import { toJalaali } from '../../_jalaali'

export default function getUTCDate(cleanDate) {
  const gd = cleanDate.getUTCDate()
  const gm = cleanDate.getUTCMonth() + 1
  const gy = cleanDate.getUTCFullYear()
  return toJalaali(gy, gm, gd).jd
}
