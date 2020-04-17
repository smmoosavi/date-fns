/**
 *
 * @param cleanDate {Date}
 * @returns {number}
 */
import { toJalaali } from '../../_jalaali'

export default function getDate(cleanDate) {
  const gd = cleanDate.getDate()
  const gm = cleanDate.getMonth() + 1
  const gy = cleanDate.getFullYear()
  return toJalaali(gy, gm, gd).jd
}
