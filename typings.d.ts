// This file is generated automatically by `scripts/build/typings.js`. Please, don't change it.

// FP Interfaces

interface CurriedFn1<A, R> {
  (a: A): R
}

interface CurriedFn2<A, B, R> {
  (a: A): CurriedFn1<B, R>
  (a: A, b: B): R
}

interface CurriedFn3<A, B, C, R> {
  (a: A): CurriedFn2<B, C, R>
  (a: A, b: B): CurriedFn1<C, R>
  (a: A, b: B, c: C): R
}

interface CurriedFn4<A, B, C, D, R> {
  (a: A): CurriedFn3<B, C, D, R>
  (a: A, b: B): CurriedFn2<C, D, R>
  (a: A, b: B, c: C): CurriedFn1<D, R>
  (a: A, b: B, c: C, d: D): R
}

// Type Aliases

type Interval = {
  start: Date | number
  end: Date | number
}
type IntervalAliased = Interval

type Locale = {
  code?: string
  formatDistance?: (...args: Array<any>) => any
  formatRelative?: (...args: Array<any>) => any
  localize?: {
    ordinalNumber: (...args: Array<any>) => any
    era: (...args: Array<any>) => any
    quarter: (...args: Array<any>) => any
    month: (...args: Array<any>) => any
    day: (...args: Array<any>) => any
    dayPeriod: (...args: Array<any>) => any
  }
  formatLong?: {
    date: (...args: Array<any>) => any
    time: (...args: Array<any>) => any
    dateTime: (...args: Array<any>) => any
  }
  match?: {
    ordinalNumber: (...args: Array<any>) => any
    era: (...args: Array<any>) => any
    quarter: (...args: Array<any>) => any
    month: (...args: Array<any>) => any
    day: (...args: Array<any>) => any
    dayPeriod: (...args: Array<any>) => any
  }
  options?: {
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
  }
}
type LocaleAliased = Locale

type Duration = {
  years?: number
  months?: number
  weeks?: number
  days?: number
  hours?: number
  minutes?: number
  seconds?: number
}
type DurationAliased = Duration

// Exported Type Aliases

declare module 'date-fns-jalaali' {
  export type Interval = IntervalAliased

  export type Locale = LocaleAliased

  export type Duration = DurationAliased
}

// Regular Functions

declare module 'date-fns-jalaali' {
  function add(date: Date | number, duration: Duration): Date
  namespace add {}

  function addBusinessDays(date: Date | number, amount: number): Date
  namespace addBusinessDays {}

  function addDays(date: Date | number, amount: number): Date
  namespace addDays {}

  function addHours(date: Date | number, amount: number): Date
  namespace addHours {}

  function addISOWeekYears(date: Date | number, amount: number): Date
  namespace addISOWeekYears {}

  function addMilliseconds(date: Date | number, amount: number): Date
  namespace addMilliseconds {}

  function addMinutes(date: Date | number, amount: number): Date
  namespace addMinutes {}

  function addMonths(date: Date | number, amount: number): Date
  namespace addMonths {}

  function addQuarters(date: Date | number, amount: number): Date
  namespace addQuarters {}

  function addSeconds(date: Date | number, amount: number): Date
  namespace addSeconds {}

  function addWeeks(date: Date | number, amount: number): Date
  namespace addWeeks {}

  function addYears(date: Date | number, amount: number): Date
  namespace addYears {}

  function areIntervalsOverlapping(
    intervalLeft: Interval,
    intervalRight: Interval,
    options?: {
      inclusive?: boolean
    }
  ): boolean
  namespace areIntervalsOverlapping {}

  function closestIndexTo(
    dateToCompare: Date | number,
    datesArray: (Date | number)[]
  ): number
  namespace closestIndexTo {}

  function closestTo(
    dateToCompare: Date | number,
    datesArray: (Date | number)[]
  ): Date
  namespace closestTo {}

  function compareAsc(dateLeft: Date | number, dateRight: Date | number): number
  namespace compareAsc {}

  function compareDesc(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace compareDesc {}

  function differenceInBusinessDays(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInBusinessDays {}

  function differenceInCalendarDays(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarDays {}

  function differenceInCalendarISOWeeks(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarISOWeeks {}

  function differenceInCalendarISOWeekYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarISOWeekYears {}

  function differenceInCalendarMonths(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarMonths {}

  function differenceInCalendarQuarters(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarQuarters {}

  function differenceInCalendarWeeks(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): number
  namespace differenceInCalendarWeeks {}

  function differenceInCalendarYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarYears {}

  function differenceInDays(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInDays {}

  function differenceInHours(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInHours {}

  function differenceInISOWeekYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInISOWeekYears {}

  function differenceInMilliseconds(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInMilliseconds {}

  function differenceInMinutes(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInMinutes {}

  function differenceInMonths(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInMonths {}

  function differenceInQuarters(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInQuarters {}

  function differenceInSeconds(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInSeconds {}

  function differenceInWeeks(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInWeeks {}

  function differenceInYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInYears {}

  function eachDayOfInterval(
    interval: Interval,
    options?: {
      step?: number
    }
  ): Date[]
  namespace eachDayOfInterval {}

  function eachMonthOfInterval(interval: Interval): Date[]
  namespace eachMonthOfInterval {}

  function eachWeekendOfInterval(interval: Interval): Date[]
  namespace eachWeekendOfInterval {}

  function eachWeekendOfMonth(date: Date | number): Date[]
  namespace eachWeekendOfMonth {}

  function eachWeekendOfYear(date: Date | number): Date[]
  namespace eachWeekendOfYear {}

  function eachWeekOfInterval(
    interval: Interval,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date[]
  namespace eachWeekOfInterval {}

  function eachYearOfInterval(interval: Interval): Date[]
  namespace eachYearOfInterval {}

  function endOfDay(date: Date | number): Date
  namespace endOfDay {}

  function endOfDecade(
    date: Date | number,
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date
  namespace endOfDecade {}

  function endOfHour(date: Date | number): Date
  namespace endOfHour {}

  function endOfISOWeek(date: Date | number): Date
  namespace endOfISOWeek {}

  function endOfISOWeekYear(date: Date | number): Date
  namespace endOfISOWeekYear {}

  function endOfMinute(date: Date | number): Date
  namespace endOfMinute {}

  function endOfMonth(date: Date | number): Date
  namespace endOfMonth {}

  function endOfQuarter(date: Date | number): Date
  namespace endOfQuarter {}

  function endOfSecond(date: Date | number): Date
  namespace endOfSecond {}

  function endOfToday(): Date
  namespace endOfToday {}

  function endOfTomorrow(): Date
  namespace endOfTomorrow {}

  function endOfWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date
  namespace endOfWeek {}

  function endOfYear(date: Date | number): Date
  namespace endOfYear {}

  function endOfYesterday(): Date
  namespace endOfYesterday {}

  function format(
    date: Date | number,
    format: string,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: number
      useAdditionalWeekYearTokens?: boolean
      useAdditionalDayOfYearTokens?: boolean
    }
  ): string
  namespace format {}

  function formatDistance(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      includeSeconds?: boolean
      addSuffix?: boolean
      locale?: Locale
    }
  ): string
  namespace formatDistance {}

  function formatDistanceStrict(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      addSuffix?: boolean
      unit?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'
      roundingMethod?: 'floor' | 'ceil' | 'round'
      locale?: Locale
    }
  ): string
  namespace formatDistanceStrict {}

  function formatDistanceToNow(
    date: Date | number,
    options?: {
      includeSeconds?: boolean
      addSuffix?: boolean
      locale?: Locale
    }
  ): string
  namespace formatDistanceToNow {}

  function formatDistanceToNowStrict(
    date: Date | number,
    options?: {
      addSuffix?: boolean
      unit?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'
      roundingMethod?: 'floor' | 'ceil' | 'round'
      locale?: Locale
    }
  ): string
  namespace formatDistanceToNowStrict {}

  function formatISO(
    date: Date | number,
    options?: {
      format?: 'extended' | 'basic'
      representation?: 'complete' | 'date' | 'time'
    }
  ): string
  namespace formatISO {}

  function formatISO9075(
    date: Date | number,
    options?: {
      format?: 'extended' | 'basic'
      representation?: 'complete' | 'date' | 'time'
    }
  ): string
  namespace formatISO9075 {}

  function formatISODuration(duration: Duration): string
  namespace formatISODuration {}

  function formatRelative(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): string
  namespace formatRelative {}

  function formatRFC3339(
    date: Date | number,
    options?: {
      fractionDigits?: 0 | 1 | 2 | 3
    }
  ): string
  namespace formatRFC3339 {}

  function formatRFC7231(date: Date | number): string
  namespace formatRFC7231 {}

  function fromUnixTime(unixTime: number): Date
  namespace fromUnixTime {}

  function getDate(date: Date | number): number
  namespace getDate {}

  function getDay(date: Date | number): 0 | 1 | 2 | 3 | 4 | 5 | 6
  namespace getDay {}

  function getDayOfYear(date: Date | number): number
  namespace getDayOfYear {}

  function getDaysInMonth(date: Date | number): number
  namespace getDaysInMonth {}

  function getDaysInYear(date: Date | number): number
  namespace getDaysInYear {}

  function getDecade(date: Date | number): number
  namespace getDecade {}

  function getHours(date: Date | number): number
  namespace getHours {}

  function getISODay(date: Date | number): number
  namespace getISODay {}

  function getISOWeek(date: Date | number): number
  namespace getISOWeek {}

  function getISOWeeksInYear(date: Date | number): number
  namespace getISOWeeksInYear {}

  function getISOWeekYear(date: Date | number): number
  namespace getISOWeekYear {}

  function getMilliseconds(date: Date | number): number
  namespace getMilliseconds {}

  function getMinutes(date: Date | number): number
  namespace getMinutes {}

  function getMonth(date: Date | number): number
  namespace getMonth {}

  function getOverlappingDaysInIntervals(
    intervalLeft: Interval,
    intervalRight: Interval
  ): number
  namespace getOverlappingDaysInIntervals {}

  function getQuarter(date: Date | number): number
  namespace getQuarter {}

  function getSeconds(date: Date | number): number
  namespace getSeconds {}

  function getTime(date: Date | number): number
  namespace getTime {}

  function getUnixTime(date: Date | number): number
  namespace getUnixTime {}

  function getWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): number
  namespace getWeek {}

  function getWeekOfMonth(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): number
  namespace getWeekOfMonth {}

  function getWeeksInMonth(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): number
  namespace getWeeksInMonth {}

  function getWeekYear(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): number
  namespace getWeekYear {}

  function getYear(date: Date | number): number
  namespace getYear {}

  function intervalToDuration(interval: Interval): Duration
  namespace intervalToDuration {}

  function isAfter(date: Date | number, dateToCompare: Date | number): boolean
  namespace isAfter {}

  function isBefore(date: Date | number, dateToCompare: Date | number): boolean
  namespace isBefore {}

  function isDate(value: any): boolean
  namespace isDate {}

  function isEqual(dateLeft: Date | number, dateRight: Date | number): boolean
  namespace isEqual {}

  function isExists(year: number, month: number, day: number): boolean
  namespace isExists {}

  function isFirstDayOfMonth(date: Date | number): boolean
  namespace isFirstDayOfMonth {}

  function isFriday(date: Date | number): boolean
  namespace isFriday {}

  function isFuture(date: Date | number): boolean
  namespace isFuture {}

  function isLastDayOfMonth(date: Date | number): boolean
  namespace isLastDayOfMonth {}

  function isLeapYear(date: Date | number): boolean
  namespace isLeapYear {}

  function isMonday(date: Date | number): boolean
  namespace isMonday {}

  function isPast(date: Date | number): boolean
  namespace isPast {}

  function isSameDay(dateLeft: Date | number, dateRight: Date | number): boolean
  namespace isSameDay {}

  function isSameHour(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameHour {}

  function isSameISOWeek(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameISOWeek {}

  function isSameISOWeekYear(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameISOWeekYear {}

  function isSameMinute(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameMinute {}

  function isSameMonth(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameMonth {}

  function isSameQuarter(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameQuarter {}

  function isSameSecond(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameSecond {}

  function isSameWeek(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): boolean
  namespace isSameWeek {}

  function isSameYear(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameYear {}

  function isSaturday(date: Date | number): boolean
  namespace isSaturday {}

  function isSunday(date: Date | number): boolean
  namespace isSunday {}

  function isThisHour(date: Date | number): boolean
  namespace isThisHour {}

  function isThisISOWeek(date: Date | number): boolean
  namespace isThisISOWeek {}

  function isThisMinute(date: Date | number): boolean
  namespace isThisMinute {}

  function isThisMonth(date: Date | number): boolean
  namespace isThisMonth {}

  function isThisQuarter(date: Date | number): boolean
  namespace isThisQuarter {}

  function isThisSecond(date: Date | number): boolean
  namespace isThisSecond {}

  function isThisWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): boolean
  namespace isThisWeek {}

  function isThisYear(date: Date | number): boolean
  namespace isThisYear {}

  function isThursday(date: Date | number): boolean
  namespace isThursday {}

  function isToday(date: Date | number): boolean
  namespace isToday {}

  function isTomorrow(date: Date | number): boolean
  namespace isTomorrow {}

  function isTuesday(date: Date | number): boolean
  namespace isTuesday {}

  function isValid(date: any): boolean
  namespace isValid {}

  function isWednesday(date: Date | number): boolean
  namespace isWednesday {}

  function isWeekend(date: Date | number): boolean
  namespace isWeekend {}

  function isWithinInterval(date: Date | number, interval: Interval): boolean
  namespace isWithinInterval {}

  function isYesterday(date: Date | number): boolean
  namespace isYesterday {}

  function lastDayOfDecade(date: Date | number): Date
  namespace lastDayOfDecade {}

  function lastDayOfISOWeek(date: Date | number): Date
  namespace lastDayOfISOWeek {}

  function lastDayOfISOWeekYear(date: Date | number): Date
  namespace lastDayOfISOWeekYear {}

  function lastDayOfMonth(date: Date | number): Date
  namespace lastDayOfMonth {}

  function lastDayOfQuarter(
    date: Date | number,
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date
  namespace lastDayOfQuarter {}

  function lastDayOfWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date
  namespace lastDayOfWeek {}

  function lastDayOfYear(date: Date | number): Date
  namespace lastDayOfYear {}

  function lightFormat(date: Date | number, format: string): string
  namespace lightFormat {}

  function max(datesArray: (Date | number)[]): Date
  namespace max {}

  function min(datesArray: (Date | number)[]): Date
  namespace min {}

  function parse(
    dateString: string,
    formatString: string,
    referenceDate: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      useAdditionalWeekYearTokens?: boolean
      useAdditionalDayOfYearTokens?: boolean
    }
  ): Date
  namespace parse {}

  function parseISO(
    argument: string,
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date
  namespace parseISO {}

  function parseJSON(argument: string | number | Date): Date
  namespace parseJSON {}

  function roundToNearestMinutes(
    date: Date | number,
    options?: {
      nearestTo?: number
    }
  ): Date
  namespace roundToNearestMinutes {}

  function set(
    date: Date | number,
    values: {
      year?: number
      month?: number
      date?: number
      hours?: number
      minutes?: number
      seconds?: number
      milliseconds?: number
    }
  ): Date
  namespace set {}

  function setDate(date: Date | number, dayOfMonth: number): Date
  namespace setDate {}

  function setDay(
    date: Date | number,
    day: number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date
  namespace setDay {}

  function setDayOfYear(date: Date | number, dayOfYear: number): Date
  namespace setDayOfYear {}

  function setHours(date: Date | number, hours: number): Date
  namespace setHours {}

  function setISODay(date: Date | number, day: number): Date
  namespace setISODay {}

  function setISOWeek(date: Date | number, isoWeek: number): Date
  namespace setISOWeek {}

  function setISOWeekYear(date: Date | number, isoWeekYear: number): Date
  namespace setISOWeekYear {}

  function setMilliseconds(date: Date | number, milliseconds: number): Date
  namespace setMilliseconds {}

  function setMinutes(date: Date | number, minutes: number): Date
  namespace setMinutes {}

  function setMonth(date: Date | number, month: number): Date
  namespace setMonth {}

  function setQuarter(date: Date | number, quarter: number): Date
  namespace setQuarter {}

  function setSeconds(date: Date | number, seconds: number): Date
  namespace setSeconds {}

  function setWeek(
    date: Date | number,
    week: number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): Date
  namespace setWeek {}

  function setWeekYear(
    date: Date | number,
    weekYear: number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): Date
  namespace setWeekYear {}

  function setYear(date: Date | number, year: number): Date
  namespace setYear {}

  function startOfDay(date: Date | number): Date
  namespace startOfDay {}

  function startOfDecade(date: Date | number): Date
  namespace startOfDecade {}

  function startOfHour(date: Date | number): Date
  namespace startOfHour {}

  function startOfISOWeek(date: Date | number): Date
  namespace startOfISOWeek {}

  function startOfISOWeekYear(date: Date | number): Date
  namespace startOfISOWeekYear {}

  function startOfMinute(date: Date | number): Date
  namespace startOfMinute {}

  function startOfMonth(date: Date | number): Date
  namespace startOfMonth {}

  function startOfQuarter(date: Date | number): Date
  namespace startOfQuarter {}

  function startOfSecond(date: Date | number): Date
  namespace startOfSecond {}

  function startOfToday(): Date
  namespace startOfToday {}

  function startOfTomorrow(): Date
  namespace startOfTomorrow {}

  function startOfWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date
  namespace startOfWeek {}

  function startOfWeekYear(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): Date
  namespace startOfWeekYear {}

  function startOfYear(date: Date | number): Date
  namespace startOfYear {}

  function startOfYesterday(): Date
  namespace startOfYesterday {}

  function sub(date: Date | number, duration: Duration): Date
  namespace sub {}

  function subBusinessDays(date: Date | number, amount: number): Date
  namespace subBusinessDays {}

  function subDays(date: Date | number, amount: number): Date
  namespace subDays {}

  function subHours(date: Date | number, amount: number): Date
  namespace subHours {}

  function subISOWeekYears(date: Date | number, amount: number): Date
  namespace subISOWeekYears {}

  function subMilliseconds(date: Date | number, amount: number): Date
  namespace subMilliseconds {}

  function subMinutes(date: Date | number, amount: number): Date
  namespace subMinutes {}

  function subMonths(date: Date | number, amount: number): Date
  namespace subMonths {}

  function subQuarters(date: Date | number, amount: number): Date
  namespace subQuarters {}

  function subSeconds(date: Date | number, amount: number): Date
  namespace subSeconds {}

  function subWeeks(date: Date | number, amount: number): Date
  namespace subWeeks {}

  function subYears(date: Date | number, amount: number): Date
  namespace subYears {}

  function toDate(argument: Date | number): Date
  namespace toDate {}

  const maxTime: number

  const minTime: number
}

declare module 'date-fns-jalaali/add' {
  import { add } from 'date-fns-jalaali'
  export default add
}

declare module 'date-fns-jalaali/addBusinessDays' {
  import { addBusinessDays } from 'date-fns-jalaali'
  export default addBusinessDays
}

declare module 'date-fns-jalaali/addDays' {
  import { addDays } from 'date-fns-jalaali'
  export default addDays
}

declare module 'date-fns-jalaali/addHours' {
  import { addHours } from 'date-fns-jalaali'
  export default addHours
}

declare module 'date-fns-jalaali/addISOWeekYears' {
  import { addISOWeekYears } from 'date-fns-jalaali'
  export default addISOWeekYears
}

declare module 'date-fns-jalaali/addMilliseconds' {
  import { addMilliseconds } from 'date-fns-jalaali'
  export default addMilliseconds
}

declare module 'date-fns-jalaali/addMinutes' {
  import { addMinutes } from 'date-fns-jalaali'
  export default addMinutes
}

declare module 'date-fns-jalaali/addMonths' {
  import { addMonths } from 'date-fns-jalaali'
  export default addMonths
}

declare module 'date-fns-jalaali/addQuarters' {
  import { addQuarters } from 'date-fns-jalaali'
  export default addQuarters
}

declare module 'date-fns-jalaali/addSeconds' {
  import { addSeconds } from 'date-fns-jalaali'
  export default addSeconds
}

declare module 'date-fns-jalaali/addWeeks' {
  import { addWeeks } from 'date-fns-jalaali'
  export default addWeeks
}

declare module 'date-fns-jalaali/addYears' {
  import { addYears } from 'date-fns-jalaali'
  export default addYears
}

declare module 'date-fns-jalaali/areIntervalsOverlapping' {
  import { areIntervalsOverlapping } from 'date-fns-jalaali'
  export default areIntervalsOverlapping
}

declare module 'date-fns-jalaali/closestIndexTo' {
  import { closestIndexTo } from 'date-fns-jalaali'
  export default closestIndexTo
}

declare module 'date-fns-jalaali/closestTo' {
  import { closestTo } from 'date-fns-jalaali'
  export default closestTo
}

declare module 'date-fns-jalaali/compareAsc' {
  import { compareAsc } from 'date-fns-jalaali'
  export default compareAsc
}

declare module 'date-fns-jalaali/compareDesc' {
  import { compareDesc } from 'date-fns-jalaali'
  export default compareDesc
}

declare module 'date-fns-jalaali/differenceInBusinessDays' {
  import { differenceInBusinessDays } from 'date-fns-jalaali'
  export default differenceInBusinessDays
}

declare module 'date-fns-jalaali/differenceInCalendarDays' {
  import { differenceInCalendarDays } from 'date-fns-jalaali'
  export default differenceInCalendarDays
}

declare module 'date-fns-jalaali/differenceInCalendarISOWeeks' {
  import { differenceInCalendarISOWeeks } from 'date-fns-jalaali'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns-jalaali/differenceInCalendarISOWeekYears' {
  import { differenceInCalendarISOWeekYears } from 'date-fns-jalaali'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns-jalaali/differenceInCalendarMonths' {
  import { differenceInCalendarMonths } from 'date-fns-jalaali'
  export default differenceInCalendarMonths
}

declare module 'date-fns-jalaali/differenceInCalendarQuarters' {
  import { differenceInCalendarQuarters } from 'date-fns-jalaali'
  export default differenceInCalendarQuarters
}

declare module 'date-fns-jalaali/differenceInCalendarWeeks' {
  import { differenceInCalendarWeeks } from 'date-fns-jalaali'
  export default differenceInCalendarWeeks
}

declare module 'date-fns-jalaali/differenceInCalendarYears' {
  import { differenceInCalendarYears } from 'date-fns-jalaali'
  export default differenceInCalendarYears
}

declare module 'date-fns-jalaali/differenceInDays' {
  import { differenceInDays } from 'date-fns-jalaali'
  export default differenceInDays
}

declare module 'date-fns-jalaali/differenceInHours' {
  import { differenceInHours } from 'date-fns-jalaali'
  export default differenceInHours
}

declare module 'date-fns-jalaali/differenceInISOWeekYears' {
  import { differenceInISOWeekYears } from 'date-fns-jalaali'
  export default differenceInISOWeekYears
}

declare module 'date-fns-jalaali/differenceInMilliseconds' {
  import { differenceInMilliseconds } from 'date-fns-jalaali'
  export default differenceInMilliseconds
}

declare module 'date-fns-jalaali/differenceInMinutes' {
  import { differenceInMinutes } from 'date-fns-jalaali'
  export default differenceInMinutes
}

declare module 'date-fns-jalaali/differenceInMonths' {
  import { differenceInMonths } from 'date-fns-jalaali'
  export default differenceInMonths
}

declare module 'date-fns-jalaali/differenceInQuarters' {
  import { differenceInQuarters } from 'date-fns-jalaali'
  export default differenceInQuarters
}

declare module 'date-fns-jalaali/differenceInSeconds' {
  import { differenceInSeconds } from 'date-fns-jalaali'
  export default differenceInSeconds
}

declare module 'date-fns-jalaali/differenceInWeeks' {
  import { differenceInWeeks } from 'date-fns-jalaali'
  export default differenceInWeeks
}

declare module 'date-fns-jalaali/differenceInYears' {
  import { differenceInYears } from 'date-fns-jalaali'
  export default differenceInYears
}

declare module 'date-fns-jalaali/eachDayOfInterval' {
  import { eachDayOfInterval } from 'date-fns-jalaali'
  export default eachDayOfInterval
}

declare module 'date-fns-jalaali/eachMonthOfInterval' {
  import { eachMonthOfInterval } from 'date-fns-jalaali'
  export default eachMonthOfInterval
}

declare module 'date-fns-jalaali/eachWeekendOfInterval' {
  import { eachWeekendOfInterval } from 'date-fns-jalaali'
  export default eachWeekendOfInterval
}

declare module 'date-fns-jalaali/eachWeekendOfMonth' {
  import { eachWeekendOfMonth } from 'date-fns-jalaali'
  export default eachWeekendOfMonth
}

declare module 'date-fns-jalaali/eachWeekendOfYear' {
  import { eachWeekendOfYear } from 'date-fns-jalaali'
  export default eachWeekendOfYear
}

declare module 'date-fns-jalaali/eachWeekOfInterval' {
  import { eachWeekOfInterval } from 'date-fns-jalaali'
  export default eachWeekOfInterval
}

declare module 'date-fns-jalaali/eachYearOfInterval' {
  import { eachYearOfInterval } from 'date-fns-jalaali'
  export default eachYearOfInterval
}

declare module 'date-fns-jalaali/endOfDay' {
  import { endOfDay } from 'date-fns-jalaali'
  export default endOfDay
}

declare module 'date-fns-jalaali/endOfDecade' {
  import { endOfDecade } from 'date-fns-jalaali'
  export default endOfDecade
}

declare module 'date-fns-jalaali/endOfHour' {
  import { endOfHour } from 'date-fns-jalaali'
  export default endOfHour
}

declare module 'date-fns-jalaali/endOfISOWeek' {
  import { endOfISOWeek } from 'date-fns-jalaali'
  export default endOfISOWeek
}

declare module 'date-fns-jalaali/endOfISOWeekYear' {
  import { endOfISOWeekYear } from 'date-fns-jalaali'
  export default endOfISOWeekYear
}

declare module 'date-fns-jalaali/endOfMinute' {
  import { endOfMinute } from 'date-fns-jalaali'
  export default endOfMinute
}

declare module 'date-fns-jalaali/endOfMonth' {
  import { endOfMonth } from 'date-fns-jalaali'
  export default endOfMonth
}

declare module 'date-fns-jalaali/endOfQuarter' {
  import { endOfQuarter } from 'date-fns-jalaali'
  export default endOfQuarter
}

declare module 'date-fns-jalaali/endOfSecond' {
  import { endOfSecond } from 'date-fns-jalaali'
  export default endOfSecond
}

declare module 'date-fns-jalaali/endOfToday' {
  import { endOfToday } from 'date-fns-jalaali'
  export default endOfToday
}

declare module 'date-fns-jalaali/endOfTomorrow' {
  import { endOfTomorrow } from 'date-fns-jalaali'
  export default endOfTomorrow
}

declare module 'date-fns-jalaali/endOfWeek' {
  import { endOfWeek } from 'date-fns-jalaali'
  export default endOfWeek
}

declare module 'date-fns-jalaali/endOfYear' {
  import { endOfYear } from 'date-fns-jalaali'
  export default endOfYear
}

declare module 'date-fns-jalaali/endOfYesterday' {
  import { endOfYesterday } from 'date-fns-jalaali'
  export default endOfYesterday
}

declare module 'date-fns-jalaali/format' {
  import { format } from 'date-fns-jalaali'
  export default format
}

declare module 'date-fns-jalaali/formatDistance' {
  import { formatDistance } from 'date-fns-jalaali'
  export default formatDistance
}

declare module 'date-fns-jalaali/formatDistanceStrict' {
  import { formatDistanceStrict } from 'date-fns-jalaali'
  export default formatDistanceStrict
}

declare module 'date-fns-jalaali/formatDistanceToNow' {
  import { formatDistanceToNow } from 'date-fns-jalaali'
  export default formatDistanceToNow
}

declare module 'date-fns-jalaali/formatDistanceToNowStrict' {
  import { formatDistanceToNowStrict } from 'date-fns-jalaali'
  export default formatDistanceToNowStrict
}

declare module 'date-fns-jalaali/formatISO' {
  import { formatISO } from 'date-fns-jalaali'
  export default formatISO
}

declare module 'date-fns-jalaali/formatISO9075' {
  import { formatISO9075 } from 'date-fns-jalaali'
  export default formatISO9075
}

declare module 'date-fns-jalaali/formatISODuration' {
  import { formatISODuration } from 'date-fns-jalaali'
  export default formatISODuration
}

declare module 'date-fns-jalaali/formatRelative' {
  import { formatRelative } from 'date-fns-jalaali'
  export default formatRelative
}

declare module 'date-fns-jalaali/formatRFC3339' {
  import { formatRFC3339 } from 'date-fns-jalaali'
  export default formatRFC3339
}

declare module 'date-fns-jalaali/formatRFC7231' {
  import { formatRFC7231 } from 'date-fns-jalaali'
  export default formatRFC7231
}

declare module 'date-fns-jalaali/fromUnixTime' {
  import { fromUnixTime } from 'date-fns-jalaali'
  export default fromUnixTime
}

declare module 'date-fns-jalaali/getDate' {
  import { getDate } from 'date-fns-jalaali'
  export default getDate
}

declare module 'date-fns-jalaali/getDay' {
  import { getDay } from 'date-fns-jalaali'
  export default getDay
}

declare module 'date-fns-jalaali/getDayOfYear' {
  import { getDayOfYear } from 'date-fns-jalaali'
  export default getDayOfYear
}

declare module 'date-fns-jalaali/getDaysInMonth' {
  import { getDaysInMonth } from 'date-fns-jalaali'
  export default getDaysInMonth
}

declare module 'date-fns-jalaali/getDaysInYear' {
  import { getDaysInYear } from 'date-fns-jalaali'
  export default getDaysInYear
}

declare module 'date-fns-jalaali/getDecade' {
  import { getDecade } from 'date-fns-jalaali'
  export default getDecade
}

declare module 'date-fns-jalaali/getHours' {
  import { getHours } from 'date-fns-jalaali'
  export default getHours
}

declare module 'date-fns-jalaali/getISODay' {
  import { getISODay } from 'date-fns-jalaali'
  export default getISODay
}

declare module 'date-fns-jalaali/getISOWeek' {
  import { getISOWeek } from 'date-fns-jalaali'
  export default getISOWeek
}

declare module 'date-fns-jalaali/getISOWeeksInYear' {
  import { getISOWeeksInYear } from 'date-fns-jalaali'
  export default getISOWeeksInYear
}

declare module 'date-fns-jalaali/getISOWeekYear' {
  import { getISOWeekYear } from 'date-fns-jalaali'
  export default getISOWeekYear
}

declare module 'date-fns-jalaali/getMilliseconds' {
  import { getMilliseconds } from 'date-fns-jalaali'
  export default getMilliseconds
}

declare module 'date-fns-jalaali/getMinutes' {
  import { getMinutes } from 'date-fns-jalaali'
  export default getMinutes
}

declare module 'date-fns-jalaali/getMonth' {
  import { getMonth } from 'date-fns-jalaali'
  export default getMonth
}

declare module 'date-fns-jalaali/getOverlappingDaysInIntervals' {
  import { getOverlappingDaysInIntervals } from 'date-fns-jalaali'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns-jalaali/getQuarter' {
  import { getQuarter } from 'date-fns-jalaali'
  export default getQuarter
}

declare module 'date-fns-jalaali/getSeconds' {
  import { getSeconds } from 'date-fns-jalaali'
  export default getSeconds
}

declare module 'date-fns-jalaali/getTime' {
  import { getTime } from 'date-fns-jalaali'
  export default getTime
}

declare module 'date-fns-jalaali/getUnixTime' {
  import { getUnixTime } from 'date-fns-jalaali'
  export default getUnixTime
}

declare module 'date-fns-jalaali/getWeek' {
  import { getWeek } from 'date-fns-jalaali'
  export default getWeek
}

declare module 'date-fns-jalaali/getWeekOfMonth' {
  import { getWeekOfMonth } from 'date-fns-jalaali'
  export default getWeekOfMonth
}

declare module 'date-fns-jalaali/getWeeksInMonth' {
  import { getWeeksInMonth } from 'date-fns-jalaali'
  export default getWeeksInMonth
}

declare module 'date-fns-jalaali/getWeekYear' {
  import { getWeekYear } from 'date-fns-jalaali'
  export default getWeekYear
}

declare module 'date-fns-jalaali/getYear' {
  import { getYear } from 'date-fns-jalaali'
  export default getYear
}

declare module 'date-fns-jalaali/intervalToDuration' {
  import { intervalToDuration } from 'date-fns-jalaali'
  export default intervalToDuration
}

declare module 'date-fns-jalaali/isAfter' {
  import { isAfter } from 'date-fns-jalaali'
  export default isAfter
}

declare module 'date-fns-jalaali/isBefore' {
  import { isBefore } from 'date-fns-jalaali'
  export default isBefore
}

declare module 'date-fns-jalaali/isDate' {
  import { isDate } from 'date-fns-jalaali'
  export default isDate
}

declare module 'date-fns-jalaali/isEqual' {
  import { isEqual } from 'date-fns-jalaali'
  export default isEqual
}

declare module 'date-fns-jalaali/isExists' {
  import { isExists } from 'date-fns-jalaali'
  export default isExists
}

declare module 'date-fns-jalaali/isFirstDayOfMonth' {
  import { isFirstDayOfMonth } from 'date-fns-jalaali'
  export default isFirstDayOfMonth
}

declare module 'date-fns-jalaali/isFriday' {
  import { isFriday } from 'date-fns-jalaali'
  export default isFriday
}

declare module 'date-fns-jalaali/isFuture' {
  import { isFuture } from 'date-fns-jalaali'
  export default isFuture
}

declare module 'date-fns-jalaali/isLastDayOfMonth' {
  import { isLastDayOfMonth } from 'date-fns-jalaali'
  export default isLastDayOfMonth
}

declare module 'date-fns-jalaali/isLeapYear' {
  import { isLeapYear } from 'date-fns-jalaali'
  export default isLeapYear
}

declare module 'date-fns-jalaali/isMonday' {
  import { isMonday } from 'date-fns-jalaali'
  export default isMonday
}

declare module 'date-fns-jalaali/isPast' {
  import { isPast } from 'date-fns-jalaali'
  export default isPast
}

declare module 'date-fns-jalaali/isSameDay' {
  import { isSameDay } from 'date-fns-jalaali'
  export default isSameDay
}

declare module 'date-fns-jalaali/isSameHour' {
  import { isSameHour } from 'date-fns-jalaali'
  export default isSameHour
}

declare module 'date-fns-jalaali/isSameISOWeek' {
  import { isSameISOWeek } from 'date-fns-jalaali'
  export default isSameISOWeek
}

declare module 'date-fns-jalaali/isSameISOWeekYear' {
  import { isSameISOWeekYear } from 'date-fns-jalaali'
  export default isSameISOWeekYear
}

declare module 'date-fns-jalaali/isSameMinute' {
  import { isSameMinute } from 'date-fns-jalaali'
  export default isSameMinute
}

declare module 'date-fns-jalaali/isSameMonth' {
  import { isSameMonth } from 'date-fns-jalaali'
  export default isSameMonth
}

declare module 'date-fns-jalaali/isSameQuarter' {
  import { isSameQuarter } from 'date-fns-jalaali'
  export default isSameQuarter
}

declare module 'date-fns-jalaali/isSameSecond' {
  import { isSameSecond } from 'date-fns-jalaali'
  export default isSameSecond
}

declare module 'date-fns-jalaali/isSameWeek' {
  import { isSameWeek } from 'date-fns-jalaali'
  export default isSameWeek
}

declare module 'date-fns-jalaali/isSameYear' {
  import { isSameYear } from 'date-fns-jalaali'
  export default isSameYear
}

declare module 'date-fns-jalaali/isSaturday' {
  import { isSaturday } from 'date-fns-jalaali'
  export default isSaturday
}

declare module 'date-fns-jalaali/isSunday' {
  import { isSunday } from 'date-fns-jalaali'
  export default isSunday
}

declare module 'date-fns-jalaali/isThisHour' {
  import { isThisHour } from 'date-fns-jalaali'
  export default isThisHour
}

declare module 'date-fns-jalaali/isThisISOWeek' {
  import { isThisISOWeek } from 'date-fns-jalaali'
  export default isThisISOWeek
}

declare module 'date-fns-jalaali/isThisMinute' {
  import { isThisMinute } from 'date-fns-jalaali'
  export default isThisMinute
}

declare module 'date-fns-jalaali/isThisMonth' {
  import { isThisMonth } from 'date-fns-jalaali'
  export default isThisMonth
}

declare module 'date-fns-jalaali/isThisQuarter' {
  import { isThisQuarter } from 'date-fns-jalaali'
  export default isThisQuarter
}

declare module 'date-fns-jalaali/isThisSecond' {
  import { isThisSecond } from 'date-fns-jalaali'
  export default isThisSecond
}

declare module 'date-fns-jalaali/isThisWeek' {
  import { isThisWeek } from 'date-fns-jalaali'
  export default isThisWeek
}

declare module 'date-fns-jalaali/isThisYear' {
  import { isThisYear } from 'date-fns-jalaali'
  export default isThisYear
}

declare module 'date-fns-jalaali/isThursday' {
  import { isThursday } from 'date-fns-jalaali'
  export default isThursday
}

declare module 'date-fns-jalaali/isToday' {
  import { isToday } from 'date-fns-jalaali'
  export default isToday
}

declare module 'date-fns-jalaali/isTomorrow' {
  import { isTomorrow } from 'date-fns-jalaali'
  export default isTomorrow
}

declare module 'date-fns-jalaali/isTuesday' {
  import { isTuesday } from 'date-fns-jalaali'
  export default isTuesday
}

declare module 'date-fns-jalaali/isValid' {
  import { isValid } from 'date-fns-jalaali'
  export default isValid
}

declare module 'date-fns-jalaali/isWednesday' {
  import { isWednesday } from 'date-fns-jalaali'
  export default isWednesday
}

declare module 'date-fns-jalaali/isWeekend' {
  import { isWeekend } from 'date-fns-jalaali'
  export default isWeekend
}

declare module 'date-fns-jalaali/isWithinInterval' {
  import { isWithinInterval } from 'date-fns-jalaali'
  export default isWithinInterval
}

declare module 'date-fns-jalaali/isYesterday' {
  import { isYesterday } from 'date-fns-jalaali'
  export default isYesterday
}

declare module 'date-fns-jalaali/lastDayOfDecade' {
  import { lastDayOfDecade } from 'date-fns-jalaali'
  export default lastDayOfDecade
}

declare module 'date-fns-jalaali/lastDayOfISOWeek' {
  import { lastDayOfISOWeek } from 'date-fns-jalaali'
  export default lastDayOfISOWeek
}

declare module 'date-fns-jalaali/lastDayOfISOWeekYear' {
  import { lastDayOfISOWeekYear } from 'date-fns-jalaali'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns-jalaali/lastDayOfMonth' {
  import { lastDayOfMonth } from 'date-fns-jalaali'
  export default lastDayOfMonth
}

declare module 'date-fns-jalaali/lastDayOfQuarter' {
  import { lastDayOfQuarter } from 'date-fns-jalaali'
  export default lastDayOfQuarter
}

declare module 'date-fns-jalaali/lastDayOfWeek' {
  import { lastDayOfWeek } from 'date-fns-jalaali'
  export default lastDayOfWeek
}

declare module 'date-fns-jalaali/lastDayOfYear' {
  import { lastDayOfYear } from 'date-fns-jalaali'
  export default lastDayOfYear
}

declare module 'date-fns-jalaali/lightFormat' {
  import { lightFormat } from 'date-fns-jalaali'
  export default lightFormat
}

declare module 'date-fns-jalaali/max' {
  import { max } from 'date-fns-jalaali'
  export default max
}

declare module 'date-fns-jalaali/min' {
  import { min } from 'date-fns-jalaali'
  export default min
}

declare module 'date-fns-jalaali/parse' {
  import { parse } from 'date-fns-jalaali'
  export default parse
}

declare module 'date-fns-jalaali/parseISO' {
  import { parseISO } from 'date-fns-jalaali'
  export default parseISO
}

declare module 'date-fns-jalaali/parseJSON' {
  import { parseJSON } from 'date-fns-jalaali'
  export default parseJSON
}

declare module 'date-fns-jalaali/roundToNearestMinutes' {
  import { roundToNearestMinutes } from 'date-fns-jalaali'
  export default roundToNearestMinutes
}

declare module 'date-fns-jalaali/set' {
  import { set } from 'date-fns-jalaali'
  export default set
}

declare module 'date-fns-jalaali/setDate' {
  import { setDate } from 'date-fns-jalaali'
  export default setDate
}

declare module 'date-fns-jalaali/setDay' {
  import { setDay } from 'date-fns-jalaali'
  export default setDay
}

declare module 'date-fns-jalaali/setDayOfYear' {
  import { setDayOfYear } from 'date-fns-jalaali'
  export default setDayOfYear
}

declare module 'date-fns-jalaali/setHours' {
  import { setHours } from 'date-fns-jalaali'
  export default setHours
}

declare module 'date-fns-jalaali/setISODay' {
  import { setISODay } from 'date-fns-jalaali'
  export default setISODay
}

declare module 'date-fns-jalaali/setISOWeek' {
  import { setISOWeek } from 'date-fns-jalaali'
  export default setISOWeek
}

declare module 'date-fns-jalaali/setISOWeekYear' {
  import { setISOWeekYear } from 'date-fns-jalaali'
  export default setISOWeekYear
}

declare module 'date-fns-jalaali/setMilliseconds' {
  import { setMilliseconds } from 'date-fns-jalaali'
  export default setMilliseconds
}

declare module 'date-fns-jalaali/setMinutes' {
  import { setMinutes } from 'date-fns-jalaali'
  export default setMinutes
}

declare module 'date-fns-jalaali/setMonth' {
  import { setMonth } from 'date-fns-jalaali'
  export default setMonth
}

declare module 'date-fns-jalaali/setQuarter' {
  import { setQuarter } from 'date-fns-jalaali'
  export default setQuarter
}

declare module 'date-fns-jalaali/setSeconds' {
  import { setSeconds } from 'date-fns-jalaali'
  export default setSeconds
}

declare module 'date-fns-jalaali/setWeek' {
  import { setWeek } from 'date-fns-jalaali'
  export default setWeek
}

declare module 'date-fns-jalaali/setWeekYear' {
  import { setWeekYear } from 'date-fns-jalaali'
  export default setWeekYear
}

declare module 'date-fns-jalaali/setYear' {
  import { setYear } from 'date-fns-jalaali'
  export default setYear
}

declare module 'date-fns-jalaali/startOfDay' {
  import { startOfDay } from 'date-fns-jalaali'
  export default startOfDay
}

declare module 'date-fns-jalaali/startOfDecade' {
  import { startOfDecade } from 'date-fns-jalaali'
  export default startOfDecade
}

declare module 'date-fns-jalaali/startOfHour' {
  import { startOfHour } from 'date-fns-jalaali'
  export default startOfHour
}

declare module 'date-fns-jalaali/startOfISOWeek' {
  import { startOfISOWeek } from 'date-fns-jalaali'
  export default startOfISOWeek
}

declare module 'date-fns-jalaali/startOfISOWeekYear' {
  import { startOfISOWeekYear } from 'date-fns-jalaali'
  export default startOfISOWeekYear
}

declare module 'date-fns-jalaali/startOfMinute' {
  import { startOfMinute } from 'date-fns-jalaali'
  export default startOfMinute
}

declare module 'date-fns-jalaali/startOfMonth' {
  import { startOfMonth } from 'date-fns-jalaali'
  export default startOfMonth
}

declare module 'date-fns-jalaali/startOfQuarter' {
  import { startOfQuarter } from 'date-fns-jalaali'
  export default startOfQuarter
}

declare module 'date-fns-jalaali/startOfSecond' {
  import { startOfSecond } from 'date-fns-jalaali'
  export default startOfSecond
}

declare module 'date-fns-jalaali/startOfToday' {
  import { startOfToday } from 'date-fns-jalaali'
  export default startOfToday
}

declare module 'date-fns-jalaali/startOfTomorrow' {
  import { startOfTomorrow } from 'date-fns-jalaali'
  export default startOfTomorrow
}

declare module 'date-fns-jalaali/startOfWeek' {
  import { startOfWeek } from 'date-fns-jalaali'
  export default startOfWeek
}

declare module 'date-fns-jalaali/startOfWeekYear' {
  import { startOfWeekYear } from 'date-fns-jalaali'
  export default startOfWeekYear
}

declare module 'date-fns-jalaali/startOfYear' {
  import { startOfYear } from 'date-fns-jalaali'
  export default startOfYear
}

declare module 'date-fns-jalaali/startOfYesterday' {
  import { startOfYesterday } from 'date-fns-jalaali'
  export default startOfYesterday
}

declare module 'date-fns-jalaali/sub' {
  import { sub } from 'date-fns-jalaali'
  export default sub
}

declare module 'date-fns-jalaali/subBusinessDays' {
  import { subBusinessDays } from 'date-fns-jalaali'
  export default subBusinessDays
}

declare module 'date-fns-jalaali/subDays' {
  import { subDays } from 'date-fns-jalaali'
  export default subDays
}

declare module 'date-fns-jalaali/subHours' {
  import { subHours } from 'date-fns-jalaali'
  export default subHours
}

declare module 'date-fns-jalaali/subISOWeekYears' {
  import { subISOWeekYears } from 'date-fns-jalaali'
  export default subISOWeekYears
}

declare module 'date-fns-jalaali/subMilliseconds' {
  import { subMilliseconds } from 'date-fns-jalaali'
  export default subMilliseconds
}

declare module 'date-fns-jalaali/subMinutes' {
  import { subMinutes } from 'date-fns-jalaali'
  export default subMinutes
}

declare module 'date-fns-jalaali/subMonths' {
  import { subMonths } from 'date-fns-jalaali'
  export default subMonths
}

declare module 'date-fns-jalaali/subQuarters' {
  import { subQuarters } from 'date-fns-jalaali'
  export default subQuarters
}

declare module 'date-fns-jalaali/subSeconds' {
  import { subSeconds } from 'date-fns-jalaali'
  export default subSeconds
}

declare module 'date-fns-jalaali/subWeeks' {
  import { subWeeks } from 'date-fns-jalaali'
  export default subWeeks
}

declare module 'date-fns-jalaali/subYears' {
  import { subYears } from 'date-fns-jalaali'
  export default subYears
}

declare module 'date-fns-jalaali/toDate' {
  import { toDate } from 'date-fns-jalaali'
  export default toDate
}

declare module 'date-fns-jalaali/add/index' {
  import { add } from 'date-fns-jalaali'
  export default add
}

declare module 'date-fns-jalaali/addBusinessDays/index' {
  import { addBusinessDays } from 'date-fns-jalaali'
  export default addBusinessDays
}

declare module 'date-fns-jalaali/addDays/index' {
  import { addDays } from 'date-fns-jalaali'
  export default addDays
}

declare module 'date-fns-jalaali/addHours/index' {
  import { addHours } from 'date-fns-jalaali'
  export default addHours
}

declare module 'date-fns-jalaali/addISOWeekYears/index' {
  import { addISOWeekYears } from 'date-fns-jalaali'
  export default addISOWeekYears
}

declare module 'date-fns-jalaali/addMilliseconds/index' {
  import { addMilliseconds } from 'date-fns-jalaali'
  export default addMilliseconds
}

declare module 'date-fns-jalaali/addMinutes/index' {
  import { addMinutes } from 'date-fns-jalaali'
  export default addMinutes
}

declare module 'date-fns-jalaali/addMonths/index' {
  import { addMonths } from 'date-fns-jalaali'
  export default addMonths
}

declare module 'date-fns-jalaali/addQuarters/index' {
  import { addQuarters } from 'date-fns-jalaali'
  export default addQuarters
}

declare module 'date-fns-jalaali/addSeconds/index' {
  import { addSeconds } from 'date-fns-jalaali'
  export default addSeconds
}

declare module 'date-fns-jalaali/addWeeks/index' {
  import { addWeeks } from 'date-fns-jalaali'
  export default addWeeks
}

declare module 'date-fns-jalaali/addYears/index' {
  import { addYears } from 'date-fns-jalaali'
  export default addYears
}

declare module 'date-fns-jalaali/areIntervalsOverlapping/index' {
  import { areIntervalsOverlapping } from 'date-fns-jalaali'
  export default areIntervalsOverlapping
}

declare module 'date-fns-jalaali/closestIndexTo/index' {
  import { closestIndexTo } from 'date-fns-jalaali'
  export default closestIndexTo
}

declare module 'date-fns-jalaali/closestTo/index' {
  import { closestTo } from 'date-fns-jalaali'
  export default closestTo
}

declare module 'date-fns-jalaali/compareAsc/index' {
  import { compareAsc } from 'date-fns-jalaali'
  export default compareAsc
}

declare module 'date-fns-jalaali/compareDesc/index' {
  import { compareDesc } from 'date-fns-jalaali'
  export default compareDesc
}

declare module 'date-fns-jalaali/differenceInBusinessDays/index' {
  import { differenceInBusinessDays } from 'date-fns-jalaali'
  export default differenceInBusinessDays
}

declare module 'date-fns-jalaali/differenceInCalendarDays/index' {
  import { differenceInCalendarDays } from 'date-fns-jalaali'
  export default differenceInCalendarDays
}

declare module 'date-fns-jalaali/differenceInCalendarISOWeeks/index' {
  import { differenceInCalendarISOWeeks } from 'date-fns-jalaali'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns-jalaali/differenceInCalendarISOWeekYears/index' {
  import { differenceInCalendarISOWeekYears } from 'date-fns-jalaali'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns-jalaali/differenceInCalendarMonths/index' {
  import { differenceInCalendarMonths } from 'date-fns-jalaali'
  export default differenceInCalendarMonths
}

declare module 'date-fns-jalaali/differenceInCalendarQuarters/index' {
  import { differenceInCalendarQuarters } from 'date-fns-jalaali'
  export default differenceInCalendarQuarters
}

declare module 'date-fns-jalaali/differenceInCalendarWeeks/index' {
  import { differenceInCalendarWeeks } from 'date-fns-jalaali'
  export default differenceInCalendarWeeks
}

declare module 'date-fns-jalaali/differenceInCalendarYears/index' {
  import { differenceInCalendarYears } from 'date-fns-jalaali'
  export default differenceInCalendarYears
}

declare module 'date-fns-jalaali/differenceInDays/index' {
  import { differenceInDays } from 'date-fns-jalaali'
  export default differenceInDays
}

declare module 'date-fns-jalaali/differenceInHours/index' {
  import { differenceInHours } from 'date-fns-jalaali'
  export default differenceInHours
}

declare module 'date-fns-jalaali/differenceInISOWeekYears/index' {
  import { differenceInISOWeekYears } from 'date-fns-jalaali'
  export default differenceInISOWeekYears
}

declare module 'date-fns-jalaali/differenceInMilliseconds/index' {
  import { differenceInMilliseconds } from 'date-fns-jalaali'
  export default differenceInMilliseconds
}

declare module 'date-fns-jalaali/differenceInMinutes/index' {
  import { differenceInMinutes } from 'date-fns-jalaali'
  export default differenceInMinutes
}

declare module 'date-fns-jalaali/differenceInMonths/index' {
  import { differenceInMonths } from 'date-fns-jalaali'
  export default differenceInMonths
}

declare module 'date-fns-jalaali/differenceInQuarters/index' {
  import { differenceInQuarters } from 'date-fns-jalaali'
  export default differenceInQuarters
}

declare module 'date-fns-jalaali/differenceInSeconds/index' {
  import { differenceInSeconds } from 'date-fns-jalaali'
  export default differenceInSeconds
}

declare module 'date-fns-jalaali/differenceInWeeks/index' {
  import { differenceInWeeks } from 'date-fns-jalaali'
  export default differenceInWeeks
}

declare module 'date-fns-jalaali/differenceInYears/index' {
  import { differenceInYears } from 'date-fns-jalaali'
  export default differenceInYears
}

declare module 'date-fns-jalaali/eachDayOfInterval/index' {
  import { eachDayOfInterval } from 'date-fns-jalaali'
  export default eachDayOfInterval
}

declare module 'date-fns-jalaali/eachMonthOfInterval/index' {
  import { eachMonthOfInterval } from 'date-fns-jalaali'
  export default eachMonthOfInterval
}

declare module 'date-fns-jalaali/eachWeekendOfInterval/index' {
  import { eachWeekendOfInterval } from 'date-fns-jalaali'
  export default eachWeekendOfInterval
}

declare module 'date-fns-jalaali/eachWeekendOfMonth/index' {
  import { eachWeekendOfMonth } from 'date-fns-jalaali'
  export default eachWeekendOfMonth
}

declare module 'date-fns-jalaali/eachWeekendOfYear/index' {
  import { eachWeekendOfYear } from 'date-fns-jalaali'
  export default eachWeekendOfYear
}

declare module 'date-fns-jalaali/eachWeekOfInterval/index' {
  import { eachWeekOfInterval } from 'date-fns-jalaali'
  export default eachWeekOfInterval
}

declare module 'date-fns-jalaali/eachYearOfInterval/index' {
  import { eachYearOfInterval } from 'date-fns-jalaali'
  export default eachYearOfInterval
}

declare module 'date-fns-jalaali/endOfDay/index' {
  import { endOfDay } from 'date-fns-jalaali'
  export default endOfDay
}

declare module 'date-fns-jalaali/endOfDecade/index' {
  import { endOfDecade } from 'date-fns-jalaali'
  export default endOfDecade
}

declare module 'date-fns-jalaali/endOfHour/index' {
  import { endOfHour } from 'date-fns-jalaali'
  export default endOfHour
}

declare module 'date-fns-jalaali/endOfISOWeek/index' {
  import { endOfISOWeek } from 'date-fns-jalaali'
  export default endOfISOWeek
}

declare module 'date-fns-jalaali/endOfISOWeekYear/index' {
  import { endOfISOWeekYear } from 'date-fns-jalaali'
  export default endOfISOWeekYear
}

declare module 'date-fns-jalaali/endOfMinute/index' {
  import { endOfMinute } from 'date-fns-jalaali'
  export default endOfMinute
}

declare module 'date-fns-jalaali/endOfMonth/index' {
  import { endOfMonth } from 'date-fns-jalaali'
  export default endOfMonth
}

declare module 'date-fns-jalaali/endOfQuarter/index' {
  import { endOfQuarter } from 'date-fns-jalaali'
  export default endOfQuarter
}

declare module 'date-fns-jalaali/endOfSecond/index' {
  import { endOfSecond } from 'date-fns-jalaali'
  export default endOfSecond
}

declare module 'date-fns-jalaali/endOfToday/index' {
  import { endOfToday } from 'date-fns-jalaali'
  export default endOfToday
}

declare module 'date-fns-jalaali/endOfTomorrow/index' {
  import { endOfTomorrow } from 'date-fns-jalaali'
  export default endOfTomorrow
}

declare module 'date-fns-jalaali/endOfWeek/index' {
  import { endOfWeek } from 'date-fns-jalaali'
  export default endOfWeek
}

declare module 'date-fns-jalaali/endOfYear/index' {
  import { endOfYear } from 'date-fns-jalaali'
  export default endOfYear
}

declare module 'date-fns-jalaali/endOfYesterday/index' {
  import { endOfYesterday } from 'date-fns-jalaali'
  export default endOfYesterday
}

declare module 'date-fns-jalaali/format/index' {
  import { format } from 'date-fns-jalaali'
  export default format
}

declare module 'date-fns-jalaali/formatDistance/index' {
  import { formatDistance } from 'date-fns-jalaali'
  export default formatDistance
}

declare module 'date-fns-jalaali/formatDistanceStrict/index' {
  import { formatDistanceStrict } from 'date-fns-jalaali'
  export default formatDistanceStrict
}

declare module 'date-fns-jalaali/formatDistanceToNow/index' {
  import { formatDistanceToNow } from 'date-fns-jalaali'
  export default formatDistanceToNow
}

declare module 'date-fns-jalaali/formatDistanceToNowStrict/index' {
  import { formatDistanceToNowStrict } from 'date-fns-jalaali'
  export default formatDistanceToNowStrict
}

declare module 'date-fns-jalaali/formatISO/index' {
  import { formatISO } from 'date-fns-jalaali'
  export default formatISO
}

declare module 'date-fns-jalaali/formatISO9075/index' {
  import { formatISO9075 } from 'date-fns-jalaali'
  export default formatISO9075
}

declare module 'date-fns-jalaali/formatISODuration/index' {
  import { formatISODuration } from 'date-fns-jalaali'
  export default formatISODuration
}

declare module 'date-fns-jalaali/formatRelative/index' {
  import { formatRelative } from 'date-fns-jalaali'
  export default formatRelative
}

declare module 'date-fns-jalaali/formatRFC3339/index' {
  import { formatRFC3339 } from 'date-fns-jalaali'
  export default formatRFC3339
}

declare module 'date-fns-jalaali/formatRFC7231/index' {
  import { formatRFC7231 } from 'date-fns-jalaali'
  export default formatRFC7231
}

declare module 'date-fns-jalaali/fromUnixTime/index' {
  import { fromUnixTime } from 'date-fns-jalaali'
  export default fromUnixTime
}

declare module 'date-fns-jalaali/getDate/index' {
  import { getDate } from 'date-fns-jalaali'
  export default getDate
}

declare module 'date-fns-jalaali/getDay/index' {
  import { getDay } from 'date-fns-jalaali'
  export default getDay
}

declare module 'date-fns-jalaali/getDayOfYear/index' {
  import { getDayOfYear } from 'date-fns-jalaali'
  export default getDayOfYear
}

declare module 'date-fns-jalaali/getDaysInMonth/index' {
  import { getDaysInMonth } from 'date-fns-jalaali'
  export default getDaysInMonth
}

declare module 'date-fns-jalaali/getDaysInYear/index' {
  import { getDaysInYear } from 'date-fns-jalaali'
  export default getDaysInYear
}

declare module 'date-fns-jalaali/getDecade/index' {
  import { getDecade } from 'date-fns-jalaali'
  export default getDecade
}

declare module 'date-fns-jalaali/getHours/index' {
  import { getHours } from 'date-fns-jalaali'
  export default getHours
}

declare module 'date-fns-jalaali/getISODay/index' {
  import { getISODay } from 'date-fns-jalaali'
  export default getISODay
}

declare module 'date-fns-jalaali/getISOWeek/index' {
  import { getISOWeek } from 'date-fns-jalaali'
  export default getISOWeek
}

declare module 'date-fns-jalaali/getISOWeeksInYear/index' {
  import { getISOWeeksInYear } from 'date-fns-jalaali'
  export default getISOWeeksInYear
}

declare module 'date-fns-jalaali/getISOWeekYear/index' {
  import { getISOWeekYear } from 'date-fns-jalaali'
  export default getISOWeekYear
}

declare module 'date-fns-jalaali/getMilliseconds/index' {
  import { getMilliseconds } from 'date-fns-jalaali'
  export default getMilliseconds
}

declare module 'date-fns-jalaali/getMinutes/index' {
  import { getMinutes } from 'date-fns-jalaali'
  export default getMinutes
}

declare module 'date-fns-jalaali/getMonth/index' {
  import { getMonth } from 'date-fns-jalaali'
  export default getMonth
}

declare module 'date-fns-jalaali/getOverlappingDaysInIntervals/index' {
  import { getOverlappingDaysInIntervals } from 'date-fns-jalaali'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns-jalaali/getQuarter/index' {
  import { getQuarter } from 'date-fns-jalaali'
  export default getQuarter
}

declare module 'date-fns-jalaali/getSeconds/index' {
  import { getSeconds } from 'date-fns-jalaali'
  export default getSeconds
}

declare module 'date-fns-jalaali/getTime/index' {
  import { getTime } from 'date-fns-jalaali'
  export default getTime
}

declare module 'date-fns-jalaali/getUnixTime/index' {
  import { getUnixTime } from 'date-fns-jalaali'
  export default getUnixTime
}

declare module 'date-fns-jalaali/getWeek/index' {
  import { getWeek } from 'date-fns-jalaali'
  export default getWeek
}

declare module 'date-fns-jalaali/getWeekOfMonth/index' {
  import { getWeekOfMonth } from 'date-fns-jalaali'
  export default getWeekOfMonth
}

declare module 'date-fns-jalaali/getWeeksInMonth/index' {
  import { getWeeksInMonth } from 'date-fns-jalaali'
  export default getWeeksInMonth
}

declare module 'date-fns-jalaali/getWeekYear/index' {
  import { getWeekYear } from 'date-fns-jalaali'
  export default getWeekYear
}

declare module 'date-fns-jalaali/getYear/index' {
  import { getYear } from 'date-fns-jalaali'
  export default getYear
}

declare module 'date-fns-jalaali/intervalToDuration/index' {
  import { intervalToDuration } from 'date-fns-jalaali'
  export default intervalToDuration
}

declare module 'date-fns-jalaali/isAfter/index' {
  import { isAfter } from 'date-fns-jalaali'
  export default isAfter
}

declare module 'date-fns-jalaali/isBefore/index' {
  import { isBefore } from 'date-fns-jalaali'
  export default isBefore
}

declare module 'date-fns-jalaali/isDate/index' {
  import { isDate } from 'date-fns-jalaali'
  export default isDate
}

declare module 'date-fns-jalaali/isEqual/index' {
  import { isEqual } from 'date-fns-jalaali'
  export default isEqual
}

declare module 'date-fns-jalaali/isExists/index' {
  import { isExists } from 'date-fns-jalaali'
  export default isExists
}

declare module 'date-fns-jalaali/isFirstDayOfMonth/index' {
  import { isFirstDayOfMonth } from 'date-fns-jalaali'
  export default isFirstDayOfMonth
}

declare module 'date-fns-jalaali/isFriday/index' {
  import { isFriday } from 'date-fns-jalaali'
  export default isFriday
}

declare module 'date-fns-jalaali/isFuture/index' {
  import { isFuture } from 'date-fns-jalaali'
  export default isFuture
}

declare module 'date-fns-jalaali/isLastDayOfMonth/index' {
  import { isLastDayOfMonth } from 'date-fns-jalaali'
  export default isLastDayOfMonth
}

declare module 'date-fns-jalaali/isLeapYear/index' {
  import { isLeapYear } from 'date-fns-jalaali'
  export default isLeapYear
}

declare module 'date-fns-jalaali/isMonday/index' {
  import { isMonday } from 'date-fns-jalaali'
  export default isMonday
}

declare module 'date-fns-jalaali/isPast/index' {
  import { isPast } from 'date-fns-jalaali'
  export default isPast
}

declare module 'date-fns-jalaali/isSameDay/index' {
  import { isSameDay } from 'date-fns-jalaali'
  export default isSameDay
}

declare module 'date-fns-jalaali/isSameHour/index' {
  import { isSameHour } from 'date-fns-jalaali'
  export default isSameHour
}

declare module 'date-fns-jalaali/isSameISOWeek/index' {
  import { isSameISOWeek } from 'date-fns-jalaali'
  export default isSameISOWeek
}

declare module 'date-fns-jalaali/isSameISOWeekYear/index' {
  import { isSameISOWeekYear } from 'date-fns-jalaali'
  export default isSameISOWeekYear
}

declare module 'date-fns-jalaali/isSameMinute/index' {
  import { isSameMinute } from 'date-fns-jalaali'
  export default isSameMinute
}

declare module 'date-fns-jalaali/isSameMonth/index' {
  import { isSameMonth } from 'date-fns-jalaali'
  export default isSameMonth
}

declare module 'date-fns-jalaali/isSameQuarter/index' {
  import { isSameQuarter } from 'date-fns-jalaali'
  export default isSameQuarter
}

declare module 'date-fns-jalaali/isSameSecond/index' {
  import { isSameSecond } from 'date-fns-jalaali'
  export default isSameSecond
}

declare module 'date-fns-jalaali/isSameWeek/index' {
  import { isSameWeek } from 'date-fns-jalaali'
  export default isSameWeek
}

declare module 'date-fns-jalaali/isSameYear/index' {
  import { isSameYear } from 'date-fns-jalaali'
  export default isSameYear
}

declare module 'date-fns-jalaali/isSaturday/index' {
  import { isSaturday } from 'date-fns-jalaali'
  export default isSaturday
}

declare module 'date-fns-jalaali/isSunday/index' {
  import { isSunday } from 'date-fns-jalaali'
  export default isSunday
}

declare module 'date-fns-jalaali/isThisHour/index' {
  import { isThisHour } from 'date-fns-jalaali'
  export default isThisHour
}

declare module 'date-fns-jalaali/isThisISOWeek/index' {
  import { isThisISOWeek } from 'date-fns-jalaali'
  export default isThisISOWeek
}

declare module 'date-fns-jalaali/isThisMinute/index' {
  import { isThisMinute } from 'date-fns-jalaali'
  export default isThisMinute
}

declare module 'date-fns-jalaali/isThisMonth/index' {
  import { isThisMonth } from 'date-fns-jalaali'
  export default isThisMonth
}

declare module 'date-fns-jalaali/isThisQuarter/index' {
  import { isThisQuarter } from 'date-fns-jalaali'
  export default isThisQuarter
}

declare module 'date-fns-jalaali/isThisSecond/index' {
  import { isThisSecond } from 'date-fns-jalaali'
  export default isThisSecond
}

declare module 'date-fns-jalaali/isThisWeek/index' {
  import { isThisWeek } from 'date-fns-jalaali'
  export default isThisWeek
}

declare module 'date-fns-jalaali/isThisYear/index' {
  import { isThisYear } from 'date-fns-jalaali'
  export default isThisYear
}

declare module 'date-fns-jalaali/isThursday/index' {
  import { isThursday } from 'date-fns-jalaali'
  export default isThursday
}

declare module 'date-fns-jalaali/isToday/index' {
  import { isToday } from 'date-fns-jalaali'
  export default isToday
}

declare module 'date-fns-jalaali/isTomorrow/index' {
  import { isTomorrow } from 'date-fns-jalaali'
  export default isTomorrow
}

declare module 'date-fns-jalaali/isTuesday/index' {
  import { isTuesday } from 'date-fns-jalaali'
  export default isTuesday
}

declare module 'date-fns-jalaali/isValid/index' {
  import { isValid } from 'date-fns-jalaali'
  export default isValid
}

declare module 'date-fns-jalaali/isWednesday/index' {
  import { isWednesday } from 'date-fns-jalaali'
  export default isWednesday
}

declare module 'date-fns-jalaali/isWeekend/index' {
  import { isWeekend } from 'date-fns-jalaali'
  export default isWeekend
}

declare module 'date-fns-jalaali/isWithinInterval/index' {
  import { isWithinInterval } from 'date-fns-jalaali'
  export default isWithinInterval
}

declare module 'date-fns-jalaali/isYesterday/index' {
  import { isYesterday } from 'date-fns-jalaali'
  export default isYesterday
}

declare module 'date-fns-jalaali/lastDayOfDecade/index' {
  import { lastDayOfDecade } from 'date-fns-jalaali'
  export default lastDayOfDecade
}

declare module 'date-fns-jalaali/lastDayOfISOWeek/index' {
  import { lastDayOfISOWeek } from 'date-fns-jalaali'
  export default lastDayOfISOWeek
}

declare module 'date-fns-jalaali/lastDayOfISOWeekYear/index' {
  import { lastDayOfISOWeekYear } from 'date-fns-jalaali'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns-jalaali/lastDayOfMonth/index' {
  import { lastDayOfMonth } from 'date-fns-jalaali'
  export default lastDayOfMonth
}

declare module 'date-fns-jalaali/lastDayOfQuarter/index' {
  import { lastDayOfQuarter } from 'date-fns-jalaali'
  export default lastDayOfQuarter
}

declare module 'date-fns-jalaali/lastDayOfWeek/index' {
  import { lastDayOfWeek } from 'date-fns-jalaali'
  export default lastDayOfWeek
}

declare module 'date-fns-jalaali/lastDayOfYear/index' {
  import { lastDayOfYear } from 'date-fns-jalaali'
  export default lastDayOfYear
}

declare module 'date-fns-jalaali/lightFormat/index' {
  import { lightFormat } from 'date-fns-jalaali'
  export default lightFormat
}

declare module 'date-fns-jalaali/max/index' {
  import { max } from 'date-fns-jalaali'
  export default max
}

declare module 'date-fns-jalaali/min/index' {
  import { min } from 'date-fns-jalaali'
  export default min
}

declare module 'date-fns-jalaali/parse/index' {
  import { parse } from 'date-fns-jalaali'
  export default parse
}

declare module 'date-fns-jalaali/parseISO/index' {
  import { parseISO } from 'date-fns-jalaali'
  export default parseISO
}

declare module 'date-fns-jalaali/parseJSON/index' {
  import { parseJSON } from 'date-fns-jalaali'
  export default parseJSON
}

declare module 'date-fns-jalaali/roundToNearestMinutes/index' {
  import { roundToNearestMinutes } from 'date-fns-jalaali'
  export default roundToNearestMinutes
}

declare module 'date-fns-jalaali/set/index' {
  import { set } from 'date-fns-jalaali'
  export default set
}

declare module 'date-fns-jalaali/setDate/index' {
  import { setDate } from 'date-fns-jalaali'
  export default setDate
}

declare module 'date-fns-jalaali/setDay/index' {
  import { setDay } from 'date-fns-jalaali'
  export default setDay
}

declare module 'date-fns-jalaali/setDayOfYear/index' {
  import { setDayOfYear } from 'date-fns-jalaali'
  export default setDayOfYear
}

declare module 'date-fns-jalaali/setHours/index' {
  import { setHours } from 'date-fns-jalaali'
  export default setHours
}

declare module 'date-fns-jalaali/setISODay/index' {
  import { setISODay } from 'date-fns-jalaali'
  export default setISODay
}

declare module 'date-fns-jalaali/setISOWeek/index' {
  import { setISOWeek } from 'date-fns-jalaali'
  export default setISOWeek
}

declare module 'date-fns-jalaali/setISOWeekYear/index' {
  import { setISOWeekYear } from 'date-fns-jalaali'
  export default setISOWeekYear
}

declare module 'date-fns-jalaali/setMilliseconds/index' {
  import { setMilliseconds } from 'date-fns-jalaali'
  export default setMilliseconds
}

declare module 'date-fns-jalaali/setMinutes/index' {
  import { setMinutes } from 'date-fns-jalaali'
  export default setMinutes
}

declare module 'date-fns-jalaali/setMonth/index' {
  import { setMonth } from 'date-fns-jalaali'
  export default setMonth
}

declare module 'date-fns-jalaali/setQuarter/index' {
  import { setQuarter } from 'date-fns-jalaali'
  export default setQuarter
}

declare module 'date-fns-jalaali/setSeconds/index' {
  import { setSeconds } from 'date-fns-jalaali'
  export default setSeconds
}

declare module 'date-fns-jalaali/setWeek/index' {
  import { setWeek } from 'date-fns-jalaali'
  export default setWeek
}

declare module 'date-fns-jalaali/setWeekYear/index' {
  import { setWeekYear } from 'date-fns-jalaali'
  export default setWeekYear
}

declare module 'date-fns-jalaali/setYear/index' {
  import { setYear } from 'date-fns-jalaali'
  export default setYear
}

declare module 'date-fns-jalaali/startOfDay/index' {
  import { startOfDay } from 'date-fns-jalaali'
  export default startOfDay
}

declare module 'date-fns-jalaali/startOfDecade/index' {
  import { startOfDecade } from 'date-fns-jalaali'
  export default startOfDecade
}

declare module 'date-fns-jalaali/startOfHour/index' {
  import { startOfHour } from 'date-fns-jalaali'
  export default startOfHour
}

declare module 'date-fns-jalaali/startOfISOWeek/index' {
  import { startOfISOWeek } from 'date-fns-jalaali'
  export default startOfISOWeek
}

declare module 'date-fns-jalaali/startOfISOWeekYear/index' {
  import { startOfISOWeekYear } from 'date-fns-jalaali'
  export default startOfISOWeekYear
}

declare module 'date-fns-jalaali/startOfMinute/index' {
  import { startOfMinute } from 'date-fns-jalaali'
  export default startOfMinute
}

declare module 'date-fns-jalaali/startOfMonth/index' {
  import { startOfMonth } from 'date-fns-jalaali'
  export default startOfMonth
}

declare module 'date-fns-jalaali/startOfQuarter/index' {
  import { startOfQuarter } from 'date-fns-jalaali'
  export default startOfQuarter
}

declare module 'date-fns-jalaali/startOfSecond/index' {
  import { startOfSecond } from 'date-fns-jalaali'
  export default startOfSecond
}

declare module 'date-fns-jalaali/startOfToday/index' {
  import { startOfToday } from 'date-fns-jalaali'
  export default startOfToday
}

declare module 'date-fns-jalaali/startOfTomorrow/index' {
  import { startOfTomorrow } from 'date-fns-jalaali'
  export default startOfTomorrow
}

declare module 'date-fns-jalaali/startOfWeek/index' {
  import { startOfWeek } from 'date-fns-jalaali'
  export default startOfWeek
}

declare module 'date-fns-jalaali/startOfWeekYear/index' {
  import { startOfWeekYear } from 'date-fns-jalaali'
  export default startOfWeekYear
}

declare module 'date-fns-jalaali/startOfYear/index' {
  import { startOfYear } from 'date-fns-jalaali'
  export default startOfYear
}

declare module 'date-fns-jalaali/startOfYesterday/index' {
  import { startOfYesterday } from 'date-fns-jalaali'
  export default startOfYesterday
}

declare module 'date-fns-jalaali/sub/index' {
  import { sub } from 'date-fns-jalaali'
  export default sub
}

declare module 'date-fns-jalaali/subBusinessDays/index' {
  import { subBusinessDays } from 'date-fns-jalaali'
  export default subBusinessDays
}

declare module 'date-fns-jalaali/subDays/index' {
  import { subDays } from 'date-fns-jalaali'
  export default subDays
}

declare module 'date-fns-jalaali/subHours/index' {
  import { subHours } from 'date-fns-jalaali'
  export default subHours
}

declare module 'date-fns-jalaali/subISOWeekYears/index' {
  import { subISOWeekYears } from 'date-fns-jalaali'
  export default subISOWeekYears
}

declare module 'date-fns-jalaali/subMilliseconds/index' {
  import { subMilliseconds } from 'date-fns-jalaali'
  export default subMilliseconds
}

declare module 'date-fns-jalaali/subMinutes/index' {
  import { subMinutes } from 'date-fns-jalaali'
  export default subMinutes
}

declare module 'date-fns-jalaali/subMonths/index' {
  import { subMonths } from 'date-fns-jalaali'
  export default subMonths
}

declare module 'date-fns-jalaali/subQuarters/index' {
  import { subQuarters } from 'date-fns-jalaali'
  export default subQuarters
}

declare module 'date-fns-jalaali/subSeconds/index' {
  import { subSeconds } from 'date-fns-jalaali'
  export default subSeconds
}

declare module 'date-fns-jalaali/subWeeks/index' {
  import { subWeeks } from 'date-fns-jalaali'
  export default subWeeks
}

declare module 'date-fns-jalaali/subYears/index' {
  import { subYears } from 'date-fns-jalaali'
  export default subYears
}

declare module 'date-fns-jalaali/toDate/index' {
  import { toDate } from 'date-fns-jalaali'
  export default toDate
}

declare module 'date-fns-jalaali/add/index.js' {
  import { add } from 'date-fns-jalaali'
  export default add
}

declare module 'date-fns-jalaali/addBusinessDays/index.js' {
  import { addBusinessDays } from 'date-fns-jalaali'
  export default addBusinessDays
}

declare module 'date-fns-jalaali/addDays/index.js' {
  import { addDays } from 'date-fns-jalaali'
  export default addDays
}

declare module 'date-fns-jalaali/addHours/index.js' {
  import { addHours } from 'date-fns-jalaali'
  export default addHours
}

declare module 'date-fns-jalaali/addISOWeekYears/index.js' {
  import { addISOWeekYears } from 'date-fns-jalaali'
  export default addISOWeekYears
}

declare module 'date-fns-jalaali/addMilliseconds/index.js' {
  import { addMilliseconds } from 'date-fns-jalaali'
  export default addMilliseconds
}

declare module 'date-fns-jalaali/addMinutes/index.js' {
  import { addMinutes } from 'date-fns-jalaali'
  export default addMinutes
}

declare module 'date-fns-jalaali/addMonths/index.js' {
  import { addMonths } from 'date-fns-jalaali'
  export default addMonths
}

declare module 'date-fns-jalaali/addQuarters/index.js' {
  import { addQuarters } from 'date-fns-jalaali'
  export default addQuarters
}

declare module 'date-fns-jalaali/addSeconds/index.js' {
  import { addSeconds } from 'date-fns-jalaali'
  export default addSeconds
}

declare module 'date-fns-jalaali/addWeeks/index.js' {
  import { addWeeks } from 'date-fns-jalaali'
  export default addWeeks
}

declare module 'date-fns-jalaali/addYears/index.js' {
  import { addYears } from 'date-fns-jalaali'
  export default addYears
}

declare module 'date-fns-jalaali/areIntervalsOverlapping/index.js' {
  import { areIntervalsOverlapping } from 'date-fns-jalaali'
  export default areIntervalsOverlapping
}

declare module 'date-fns-jalaali/closestIndexTo/index.js' {
  import { closestIndexTo } from 'date-fns-jalaali'
  export default closestIndexTo
}

declare module 'date-fns-jalaali/closestTo/index.js' {
  import { closestTo } from 'date-fns-jalaali'
  export default closestTo
}

declare module 'date-fns-jalaali/compareAsc/index.js' {
  import { compareAsc } from 'date-fns-jalaali'
  export default compareAsc
}

declare module 'date-fns-jalaali/compareDesc/index.js' {
  import { compareDesc } from 'date-fns-jalaali'
  export default compareDesc
}

declare module 'date-fns-jalaali/differenceInBusinessDays/index.js' {
  import { differenceInBusinessDays } from 'date-fns-jalaali'
  export default differenceInBusinessDays
}

declare module 'date-fns-jalaali/differenceInCalendarDays/index.js' {
  import { differenceInCalendarDays } from 'date-fns-jalaali'
  export default differenceInCalendarDays
}

declare module 'date-fns-jalaali/differenceInCalendarISOWeeks/index.js' {
  import { differenceInCalendarISOWeeks } from 'date-fns-jalaali'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns-jalaali/differenceInCalendarISOWeekYears/index.js' {
  import { differenceInCalendarISOWeekYears } from 'date-fns-jalaali'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns-jalaali/differenceInCalendarMonths/index.js' {
  import { differenceInCalendarMonths } from 'date-fns-jalaali'
  export default differenceInCalendarMonths
}

declare module 'date-fns-jalaali/differenceInCalendarQuarters/index.js' {
  import { differenceInCalendarQuarters } from 'date-fns-jalaali'
  export default differenceInCalendarQuarters
}

declare module 'date-fns-jalaali/differenceInCalendarWeeks/index.js' {
  import { differenceInCalendarWeeks } from 'date-fns-jalaali'
  export default differenceInCalendarWeeks
}

declare module 'date-fns-jalaali/differenceInCalendarYears/index.js' {
  import { differenceInCalendarYears } from 'date-fns-jalaali'
  export default differenceInCalendarYears
}

declare module 'date-fns-jalaali/differenceInDays/index.js' {
  import { differenceInDays } from 'date-fns-jalaali'
  export default differenceInDays
}

declare module 'date-fns-jalaali/differenceInHours/index.js' {
  import { differenceInHours } from 'date-fns-jalaali'
  export default differenceInHours
}

declare module 'date-fns-jalaali/differenceInISOWeekYears/index.js' {
  import { differenceInISOWeekYears } from 'date-fns-jalaali'
  export default differenceInISOWeekYears
}

declare module 'date-fns-jalaali/differenceInMilliseconds/index.js' {
  import { differenceInMilliseconds } from 'date-fns-jalaali'
  export default differenceInMilliseconds
}

declare module 'date-fns-jalaali/differenceInMinutes/index.js' {
  import { differenceInMinutes } from 'date-fns-jalaali'
  export default differenceInMinutes
}

declare module 'date-fns-jalaali/differenceInMonths/index.js' {
  import { differenceInMonths } from 'date-fns-jalaali'
  export default differenceInMonths
}

declare module 'date-fns-jalaali/differenceInQuarters/index.js' {
  import { differenceInQuarters } from 'date-fns-jalaali'
  export default differenceInQuarters
}

declare module 'date-fns-jalaali/differenceInSeconds/index.js' {
  import { differenceInSeconds } from 'date-fns-jalaali'
  export default differenceInSeconds
}

declare module 'date-fns-jalaali/differenceInWeeks/index.js' {
  import { differenceInWeeks } from 'date-fns-jalaali'
  export default differenceInWeeks
}

declare module 'date-fns-jalaali/differenceInYears/index.js' {
  import { differenceInYears } from 'date-fns-jalaali'
  export default differenceInYears
}

declare module 'date-fns-jalaali/eachDayOfInterval/index.js' {
  import { eachDayOfInterval } from 'date-fns-jalaali'
  export default eachDayOfInterval
}

declare module 'date-fns-jalaali/eachMonthOfInterval/index.js' {
  import { eachMonthOfInterval } from 'date-fns-jalaali'
  export default eachMonthOfInterval
}

declare module 'date-fns-jalaali/eachWeekendOfInterval/index.js' {
  import { eachWeekendOfInterval } from 'date-fns-jalaali'
  export default eachWeekendOfInterval
}

declare module 'date-fns-jalaali/eachWeekendOfMonth/index.js' {
  import { eachWeekendOfMonth } from 'date-fns-jalaali'
  export default eachWeekendOfMonth
}

declare module 'date-fns-jalaali/eachWeekendOfYear/index.js' {
  import { eachWeekendOfYear } from 'date-fns-jalaali'
  export default eachWeekendOfYear
}

declare module 'date-fns-jalaali/eachWeekOfInterval/index.js' {
  import { eachWeekOfInterval } from 'date-fns-jalaali'
  export default eachWeekOfInterval
}

declare module 'date-fns-jalaali/eachYearOfInterval/index.js' {
  import { eachYearOfInterval } from 'date-fns-jalaali'
  export default eachYearOfInterval
}

declare module 'date-fns-jalaali/endOfDay/index.js' {
  import { endOfDay } from 'date-fns-jalaali'
  export default endOfDay
}

declare module 'date-fns-jalaali/endOfDecade/index.js' {
  import { endOfDecade } from 'date-fns-jalaali'
  export default endOfDecade
}

declare module 'date-fns-jalaali/endOfHour/index.js' {
  import { endOfHour } from 'date-fns-jalaali'
  export default endOfHour
}

declare module 'date-fns-jalaali/endOfISOWeek/index.js' {
  import { endOfISOWeek } from 'date-fns-jalaali'
  export default endOfISOWeek
}

declare module 'date-fns-jalaali/endOfISOWeekYear/index.js' {
  import { endOfISOWeekYear } from 'date-fns-jalaali'
  export default endOfISOWeekYear
}

declare module 'date-fns-jalaali/endOfMinute/index.js' {
  import { endOfMinute } from 'date-fns-jalaali'
  export default endOfMinute
}

declare module 'date-fns-jalaali/endOfMonth/index.js' {
  import { endOfMonth } from 'date-fns-jalaali'
  export default endOfMonth
}

declare module 'date-fns-jalaali/endOfQuarter/index.js' {
  import { endOfQuarter } from 'date-fns-jalaali'
  export default endOfQuarter
}

declare module 'date-fns-jalaali/endOfSecond/index.js' {
  import { endOfSecond } from 'date-fns-jalaali'
  export default endOfSecond
}

declare module 'date-fns-jalaali/endOfToday/index.js' {
  import { endOfToday } from 'date-fns-jalaali'
  export default endOfToday
}

declare module 'date-fns-jalaali/endOfTomorrow/index.js' {
  import { endOfTomorrow } from 'date-fns-jalaali'
  export default endOfTomorrow
}

declare module 'date-fns-jalaali/endOfWeek/index.js' {
  import { endOfWeek } from 'date-fns-jalaali'
  export default endOfWeek
}

declare module 'date-fns-jalaali/endOfYear/index.js' {
  import { endOfYear } from 'date-fns-jalaali'
  export default endOfYear
}

declare module 'date-fns-jalaali/endOfYesterday/index.js' {
  import { endOfYesterday } from 'date-fns-jalaali'
  export default endOfYesterday
}

declare module 'date-fns-jalaali/format/index.js' {
  import { format } from 'date-fns-jalaali'
  export default format
}

declare module 'date-fns-jalaali/formatDistance/index.js' {
  import { formatDistance } from 'date-fns-jalaali'
  export default formatDistance
}

declare module 'date-fns-jalaali/formatDistanceStrict/index.js' {
  import { formatDistanceStrict } from 'date-fns-jalaali'
  export default formatDistanceStrict
}

declare module 'date-fns-jalaali/formatDistanceToNow/index.js' {
  import { formatDistanceToNow } from 'date-fns-jalaali'
  export default formatDistanceToNow
}

declare module 'date-fns-jalaali/formatDistanceToNowStrict/index.js' {
  import { formatDistanceToNowStrict } from 'date-fns-jalaali'
  export default formatDistanceToNowStrict
}

declare module 'date-fns-jalaali/formatISO/index.js' {
  import { formatISO } from 'date-fns-jalaali'
  export default formatISO
}

declare module 'date-fns-jalaali/formatISO9075/index.js' {
  import { formatISO9075 } from 'date-fns-jalaali'
  export default formatISO9075
}

declare module 'date-fns-jalaali/formatISODuration/index.js' {
  import { formatISODuration } from 'date-fns-jalaali'
  export default formatISODuration
}

declare module 'date-fns-jalaali/formatRelative/index.js' {
  import { formatRelative } from 'date-fns-jalaali'
  export default formatRelative
}

declare module 'date-fns-jalaali/formatRFC3339/index.js' {
  import { formatRFC3339 } from 'date-fns-jalaali'
  export default formatRFC3339
}

declare module 'date-fns-jalaali/formatRFC7231/index.js' {
  import { formatRFC7231 } from 'date-fns-jalaali'
  export default formatRFC7231
}

declare module 'date-fns-jalaali/fromUnixTime/index.js' {
  import { fromUnixTime } from 'date-fns-jalaali'
  export default fromUnixTime
}

declare module 'date-fns-jalaali/getDate/index.js' {
  import { getDate } from 'date-fns-jalaali'
  export default getDate
}

declare module 'date-fns-jalaali/getDay/index.js' {
  import { getDay } from 'date-fns-jalaali'
  export default getDay
}

declare module 'date-fns-jalaali/getDayOfYear/index.js' {
  import { getDayOfYear } from 'date-fns-jalaali'
  export default getDayOfYear
}

declare module 'date-fns-jalaali/getDaysInMonth/index.js' {
  import { getDaysInMonth } from 'date-fns-jalaali'
  export default getDaysInMonth
}

declare module 'date-fns-jalaali/getDaysInYear/index.js' {
  import { getDaysInYear } from 'date-fns-jalaali'
  export default getDaysInYear
}

declare module 'date-fns-jalaali/getDecade/index.js' {
  import { getDecade } from 'date-fns-jalaali'
  export default getDecade
}

declare module 'date-fns-jalaali/getHours/index.js' {
  import { getHours } from 'date-fns-jalaali'
  export default getHours
}

declare module 'date-fns-jalaali/getISODay/index.js' {
  import { getISODay } from 'date-fns-jalaali'
  export default getISODay
}

declare module 'date-fns-jalaali/getISOWeek/index.js' {
  import { getISOWeek } from 'date-fns-jalaali'
  export default getISOWeek
}

declare module 'date-fns-jalaali/getISOWeeksInYear/index.js' {
  import { getISOWeeksInYear } from 'date-fns-jalaali'
  export default getISOWeeksInYear
}

declare module 'date-fns-jalaali/getISOWeekYear/index.js' {
  import { getISOWeekYear } from 'date-fns-jalaali'
  export default getISOWeekYear
}

declare module 'date-fns-jalaali/getMilliseconds/index.js' {
  import { getMilliseconds } from 'date-fns-jalaali'
  export default getMilliseconds
}

declare module 'date-fns-jalaali/getMinutes/index.js' {
  import { getMinutes } from 'date-fns-jalaali'
  export default getMinutes
}

declare module 'date-fns-jalaali/getMonth/index.js' {
  import { getMonth } from 'date-fns-jalaali'
  export default getMonth
}

declare module 'date-fns-jalaali/getOverlappingDaysInIntervals/index.js' {
  import { getOverlappingDaysInIntervals } from 'date-fns-jalaali'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns-jalaali/getQuarter/index.js' {
  import { getQuarter } from 'date-fns-jalaali'
  export default getQuarter
}

declare module 'date-fns-jalaali/getSeconds/index.js' {
  import { getSeconds } from 'date-fns-jalaali'
  export default getSeconds
}

declare module 'date-fns-jalaali/getTime/index.js' {
  import { getTime } from 'date-fns-jalaali'
  export default getTime
}

declare module 'date-fns-jalaali/getUnixTime/index.js' {
  import { getUnixTime } from 'date-fns-jalaali'
  export default getUnixTime
}

declare module 'date-fns-jalaali/getWeek/index.js' {
  import { getWeek } from 'date-fns-jalaali'
  export default getWeek
}

declare module 'date-fns-jalaali/getWeekOfMonth/index.js' {
  import { getWeekOfMonth } from 'date-fns-jalaali'
  export default getWeekOfMonth
}

declare module 'date-fns-jalaali/getWeeksInMonth/index.js' {
  import { getWeeksInMonth } from 'date-fns-jalaali'
  export default getWeeksInMonth
}

declare module 'date-fns-jalaali/getWeekYear/index.js' {
  import { getWeekYear } from 'date-fns-jalaali'
  export default getWeekYear
}

declare module 'date-fns-jalaali/getYear/index.js' {
  import { getYear } from 'date-fns-jalaali'
  export default getYear
}

declare module 'date-fns-jalaali/intervalToDuration/index.js' {
  import { intervalToDuration } from 'date-fns-jalaali'
  export default intervalToDuration
}

declare module 'date-fns-jalaali/isAfter/index.js' {
  import { isAfter } from 'date-fns-jalaali'
  export default isAfter
}

declare module 'date-fns-jalaali/isBefore/index.js' {
  import { isBefore } from 'date-fns-jalaali'
  export default isBefore
}

declare module 'date-fns-jalaali/isDate/index.js' {
  import { isDate } from 'date-fns-jalaali'
  export default isDate
}

declare module 'date-fns-jalaali/isEqual/index.js' {
  import { isEqual } from 'date-fns-jalaali'
  export default isEqual
}

declare module 'date-fns-jalaali/isExists/index.js' {
  import { isExists } from 'date-fns-jalaali'
  export default isExists
}

declare module 'date-fns-jalaali/isFirstDayOfMonth/index.js' {
  import { isFirstDayOfMonth } from 'date-fns-jalaali'
  export default isFirstDayOfMonth
}

declare module 'date-fns-jalaali/isFriday/index.js' {
  import { isFriday } from 'date-fns-jalaali'
  export default isFriday
}

declare module 'date-fns-jalaali/isFuture/index.js' {
  import { isFuture } from 'date-fns-jalaali'
  export default isFuture
}

declare module 'date-fns-jalaali/isLastDayOfMonth/index.js' {
  import { isLastDayOfMonth } from 'date-fns-jalaali'
  export default isLastDayOfMonth
}

declare module 'date-fns-jalaali/isLeapYear/index.js' {
  import { isLeapYear } from 'date-fns-jalaali'
  export default isLeapYear
}

declare module 'date-fns-jalaali/isMonday/index.js' {
  import { isMonday } from 'date-fns-jalaali'
  export default isMonday
}

declare module 'date-fns-jalaali/isPast/index.js' {
  import { isPast } from 'date-fns-jalaali'
  export default isPast
}

declare module 'date-fns-jalaali/isSameDay/index.js' {
  import { isSameDay } from 'date-fns-jalaali'
  export default isSameDay
}

declare module 'date-fns-jalaali/isSameHour/index.js' {
  import { isSameHour } from 'date-fns-jalaali'
  export default isSameHour
}

declare module 'date-fns-jalaali/isSameISOWeek/index.js' {
  import { isSameISOWeek } from 'date-fns-jalaali'
  export default isSameISOWeek
}

declare module 'date-fns-jalaali/isSameISOWeekYear/index.js' {
  import { isSameISOWeekYear } from 'date-fns-jalaali'
  export default isSameISOWeekYear
}

declare module 'date-fns-jalaali/isSameMinute/index.js' {
  import { isSameMinute } from 'date-fns-jalaali'
  export default isSameMinute
}

declare module 'date-fns-jalaali/isSameMonth/index.js' {
  import { isSameMonth } from 'date-fns-jalaali'
  export default isSameMonth
}

declare module 'date-fns-jalaali/isSameQuarter/index.js' {
  import { isSameQuarter } from 'date-fns-jalaali'
  export default isSameQuarter
}

declare module 'date-fns-jalaali/isSameSecond/index.js' {
  import { isSameSecond } from 'date-fns-jalaali'
  export default isSameSecond
}

declare module 'date-fns-jalaali/isSameWeek/index.js' {
  import { isSameWeek } from 'date-fns-jalaali'
  export default isSameWeek
}

declare module 'date-fns-jalaali/isSameYear/index.js' {
  import { isSameYear } from 'date-fns-jalaali'
  export default isSameYear
}

declare module 'date-fns-jalaali/isSaturday/index.js' {
  import { isSaturday } from 'date-fns-jalaali'
  export default isSaturday
}

declare module 'date-fns-jalaali/isSunday/index.js' {
  import { isSunday } from 'date-fns-jalaali'
  export default isSunday
}

declare module 'date-fns-jalaali/isThisHour/index.js' {
  import { isThisHour } from 'date-fns-jalaali'
  export default isThisHour
}

declare module 'date-fns-jalaali/isThisISOWeek/index.js' {
  import { isThisISOWeek } from 'date-fns-jalaali'
  export default isThisISOWeek
}

declare module 'date-fns-jalaali/isThisMinute/index.js' {
  import { isThisMinute } from 'date-fns-jalaali'
  export default isThisMinute
}

declare module 'date-fns-jalaali/isThisMonth/index.js' {
  import { isThisMonth } from 'date-fns-jalaali'
  export default isThisMonth
}

declare module 'date-fns-jalaali/isThisQuarter/index.js' {
  import { isThisQuarter } from 'date-fns-jalaali'
  export default isThisQuarter
}

declare module 'date-fns-jalaali/isThisSecond/index.js' {
  import { isThisSecond } from 'date-fns-jalaali'
  export default isThisSecond
}

declare module 'date-fns-jalaali/isThisWeek/index.js' {
  import { isThisWeek } from 'date-fns-jalaali'
  export default isThisWeek
}

declare module 'date-fns-jalaali/isThisYear/index.js' {
  import { isThisYear } from 'date-fns-jalaali'
  export default isThisYear
}

declare module 'date-fns-jalaali/isThursday/index.js' {
  import { isThursday } from 'date-fns-jalaali'
  export default isThursday
}

declare module 'date-fns-jalaali/isToday/index.js' {
  import { isToday } from 'date-fns-jalaali'
  export default isToday
}

declare module 'date-fns-jalaali/isTomorrow/index.js' {
  import { isTomorrow } from 'date-fns-jalaali'
  export default isTomorrow
}

declare module 'date-fns-jalaali/isTuesday/index.js' {
  import { isTuesday } from 'date-fns-jalaali'
  export default isTuesday
}

declare module 'date-fns-jalaali/isValid/index.js' {
  import { isValid } from 'date-fns-jalaali'
  export default isValid
}

declare module 'date-fns-jalaali/isWednesday/index.js' {
  import { isWednesday } from 'date-fns-jalaali'
  export default isWednesday
}

declare module 'date-fns-jalaali/isWeekend/index.js' {
  import { isWeekend } from 'date-fns-jalaali'
  export default isWeekend
}

declare module 'date-fns-jalaali/isWithinInterval/index.js' {
  import { isWithinInterval } from 'date-fns-jalaali'
  export default isWithinInterval
}

declare module 'date-fns-jalaali/isYesterday/index.js' {
  import { isYesterday } from 'date-fns-jalaali'
  export default isYesterday
}

declare module 'date-fns-jalaali/lastDayOfDecade/index.js' {
  import { lastDayOfDecade } from 'date-fns-jalaali'
  export default lastDayOfDecade
}

declare module 'date-fns-jalaali/lastDayOfISOWeek/index.js' {
  import { lastDayOfISOWeek } from 'date-fns-jalaali'
  export default lastDayOfISOWeek
}

declare module 'date-fns-jalaali/lastDayOfISOWeekYear/index.js' {
  import { lastDayOfISOWeekYear } from 'date-fns-jalaali'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns-jalaali/lastDayOfMonth/index.js' {
  import { lastDayOfMonth } from 'date-fns-jalaali'
  export default lastDayOfMonth
}

declare module 'date-fns-jalaali/lastDayOfQuarter/index.js' {
  import { lastDayOfQuarter } from 'date-fns-jalaali'
  export default lastDayOfQuarter
}

declare module 'date-fns-jalaali/lastDayOfWeek/index.js' {
  import { lastDayOfWeek } from 'date-fns-jalaali'
  export default lastDayOfWeek
}

declare module 'date-fns-jalaali/lastDayOfYear/index.js' {
  import { lastDayOfYear } from 'date-fns-jalaali'
  export default lastDayOfYear
}

declare module 'date-fns-jalaali/lightFormat/index.js' {
  import { lightFormat } from 'date-fns-jalaali'
  export default lightFormat
}

declare module 'date-fns-jalaali/max/index.js' {
  import { max } from 'date-fns-jalaali'
  export default max
}

declare module 'date-fns-jalaali/min/index.js' {
  import { min } from 'date-fns-jalaali'
  export default min
}

declare module 'date-fns-jalaali/parse/index.js' {
  import { parse } from 'date-fns-jalaali'
  export default parse
}

declare module 'date-fns-jalaali/parseISO/index.js' {
  import { parseISO } from 'date-fns-jalaali'
  export default parseISO
}

declare module 'date-fns-jalaali/parseJSON/index.js' {
  import { parseJSON } from 'date-fns-jalaali'
  export default parseJSON
}

declare module 'date-fns-jalaali/roundToNearestMinutes/index.js' {
  import { roundToNearestMinutes } from 'date-fns-jalaali'
  export default roundToNearestMinutes
}

declare module 'date-fns-jalaali/set/index.js' {
  import { set } from 'date-fns-jalaali'
  export default set
}

declare module 'date-fns-jalaali/setDate/index.js' {
  import { setDate } from 'date-fns-jalaali'
  export default setDate
}

declare module 'date-fns-jalaali/setDay/index.js' {
  import { setDay } from 'date-fns-jalaali'
  export default setDay
}

declare module 'date-fns-jalaali/setDayOfYear/index.js' {
  import { setDayOfYear } from 'date-fns-jalaali'
  export default setDayOfYear
}

declare module 'date-fns-jalaali/setHours/index.js' {
  import { setHours } from 'date-fns-jalaali'
  export default setHours
}

declare module 'date-fns-jalaali/setISODay/index.js' {
  import { setISODay } from 'date-fns-jalaali'
  export default setISODay
}

declare module 'date-fns-jalaali/setISOWeek/index.js' {
  import { setISOWeek } from 'date-fns-jalaali'
  export default setISOWeek
}

declare module 'date-fns-jalaali/setISOWeekYear/index.js' {
  import { setISOWeekYear } from 'date-fns-jalaali'
  export default setISOWeekYear
}

declare module 'date-fns-jalaali/setMilliseconds/index.js' {
  import { setMilliseconds } from 'date-fns-jalaali'
  export default setMilliseconds
}

declare module 'date-fns-jalaali/setMinutes/index.js' {
  import { setMinutes } from 'date-fns-jalaali'
  export default setMinutes
}

declare module 'date-fns-jalaali/setMonth/index.js' {
  import { setMonth } from 'date-fns-jalaali'
  export default setMonth
}

declare module 'date-fns-jalaali/setQuarter/index.js' {
  import { setQuarter } from 'date-fns-jalaali'
  export default setQuarter
}

declare module 'date-fns-jalaali/setSeconds/index.js' {
  import { setSeconds } from 'date-fns-jalaali'
  export default setSeconds
}

declare module 'date-fns-jalaali/setWeek/index.js' {
  import { setWeek } from 'date-fns-jalaali'
  export default setWeek
}

declare module 'date-fns-jalaali/setWeekYear/index.js' {
  import { setWeekYear } from 'date-fns-jalaali'
  export default setWeekYear
}

declare module 'date-fns-jalaali/setYear/index.js' {
  import { setYear } from 'date-fns-jalaali'
  export default setYear
}

declare module 'date-fns-jalaali/startOfDay/index.js' {
  import { startOfDay } from 'date-fns-jalaali'
  export default startOfDay
}

declare module 'date-fns-jalaali/startOfDecade/index.js' {
  import { startOfDecade } from 'date-fns-jalaali'
  export default startOfDecade
}

declare module 'date-fns-jalaali/startOfHour/index.js' {
  import { startOfHour } from 'date-fns-jalaali'
  export default startOfHour
}

declare module 'date-fns-jalaali/startOfISOWeek/index.js' {
  import { startOfISOWeek } from 'date-fns-jalaali'
  export default startOfISOWeek
}

declare module 'date-fns-jalaali/startOfISOWeekYear/index.js' {
  import { startOfISOWeekYear } from 'date-fns-jalaali'
  export default startOfISOWeekYear
}

declare module 'date-fns-jalaali/startOfMinute/index.js' {
  import { startOfMinute } from 'date-fns-jalaali'
  export default startOfMinute
}

declare module 'date-fns-jalaali/startOfMonth/index.js' {
  import { startOfMonth } from 'date-fns-jalaali'
  export default startOfMonth
}

declare module 'date-fns-jalaali/startOfQuarter/index.js' {
  import { startOfQuarter } from 'date-fns-jalaali'
  export default startOfQuarter
}

declare module 'date-fns-jalaali/startOfSecond/index.js' {
  import { startOfSecond } from 'date-fns-jalaali'
  export default startOfSecond
}

declare module 'date-fns-jalaali/startOfToday/index.js' {
  import { startOfToday } from 'date-fns-jalaali'
  export default startOfToday
}

declare module 'date-fns-jalaali/startOfTomorrow/index.js' {
  import { startOfTomorrow } from 'date-fns-jalaali'
  export default startOfTomorrow
}

declare module 'date-fns-jalaali/startOfWeek/index.js' {
  import { startOfWeek } from 'date-fns-jalaali'
  export default startOfWeek
}

declare module 'date-fns-jalaali/startOfWeekYear/index.js' {
  import { startOfWeekYear } from 'date-fns-jalaali'
  export default startOfWeekYear
}

declare module 'date-fns-jalaali/startOfYear/index.js' {
  import { startOfYear } from 'date-fns-jalaali'
  export default startOfYear
}

declare module 'date-fns-jalaali/startOfYesterday/index.js' {
  import { startOfYesterday } from 'date-fns-jalaali'
  export default startOfYesterday
}

declare module 'date-fns-jalaali/sub/index.js' {
  import { sub } from 'date-fns-jalaali'
  export default sub
}

declare module 'date-fns-jalaali/subBusinessDays/index.js' {
  import { subBusinessDays } from 'date-fns-jalaali'
  export default subBusinessDays
}

declare module 'date-fns-jalaali/subDays/index.js' {
  import { subDays } from 'date-fns-jalaali'
  export default subDays
}

declare module 'date-fns-jalaali/subHours/index.js' {
  import { subHours } from 'date-fns-jalaali'
  export default subHours
}

declare module 'date-fns-jalaali/subISOWeekYears/index.js' {
  import { subISOWeekYears } from 'date-fns-jalaali'
  export default subISOWeekYears
}

declare module 'date-fns-jalaali/subMilliseconds/index.js' {
  import { subMilliseconds } from 'date-fns-jalaali'
  export default subMilliseconds
}

declare module 'date-fns-jalaali/subMinutes/index.js' {
  import { subMinutes } from 'date-fns-jalaali'
  export default subMinutes
}

declare module 'date-fns-jalaali/subMonths/index.js' {
  import { subMonths } from 'date-fns-jalaali'
  export default subMonths
}

declare module 'date-fns-jalaali/subQuarters/index.js' {
  import { subQuarters } from 'date-fns-jalaali'
  export default subQuarters
}

declare module 'date-fns-jalaali/subSeconds/index.js' {
  import { subSeconds } from 'date-fns-jalaali'
  export default subSeconds
}

declare module 'date-fns-jalaali/subWeeks/index.js' {
  import { subWeeks } from 'date-fns-jalaali'
  export default subWeeks
}

declare module 'date-fns-jalaali/subYears/index.js' {
  import { subYears } from 'date-fns-jalaali'
  export default subYears
}

declare module 'date-fns-jalaali/toDate/index.js' {
  import { toDate } from 'date-fns-jalaali'
  export default toDate
}

// FP Functions

declare module 'date-fns-jalaali/fp' {
  const add: CurriedFn2<Duration, Date | number, Date>
  namespace add {}

  const addBusinessDays: CurriedFn2<number, Date | number, Date>
  namespace addBusinessDays {}

  const addDays: CurriedFn2<number, Date | number, Date>
  namespace addDays {}

  const addHours: CurriedFn2<number, Date | number, Date>
  namespace addHours {}

  const addISOWeekYears: CurriedFn2<number, Date | number, Date>
  namespace addISOWeekYears {}

  const addMilliseconds: CurriedFn2<number, Date | number, Date>
  namespace addMilliseconds {}

  const addMinutes: CurriedFn2<number, Date | number, Date>
  namespace addMinutes {}

  const addMonths: CurriedFn2<number, Date | number, Date>
  namespace addMonths {}

  const addQuarters: CurriedFn2<number, Date | number, Date>
  namespace addQuarters {}

  const addSeconds: CurriedFn2<number, Date | number, Date>
  namespace addSeconds {}

  const addWeeks: CurriedFn2<number, Date | number, Date>
  namespace addWeeks {}

  const addYears: CurriedFn2<number, Date | number, Date>
  namespace addYears {}

  const areIntervalsOverlapping: CurriedFn2<Interval, Interval, boolean>
  namespace areIntervalsOverlapping {}

  const areIntervalsOverlappingWithOptions: CurriedFn3<
    {
      inclusive?: boolean
    },
    Interval,
    Interval,
    boolean
  >
  namespace areIntervalsOverlappingWithOptions {}

  const closestIndexTo: CurriedFn2<(Date | number)[], Date | number, number>
  namespace closestIndexTo {}

  const closestTo: CurriedFn2<(Date | number)[], Date | number, Date>
  namespace closestTo {}

  const compareAsc: CurriedFn2<Date | number, Date | number, number>
  namespace compareAsc {}

  const compareDesc: CurriedFn2<Date | number, Date | number, number>
  namespace compareDesc {}

  const differenceInBusinessDays: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInBusinessDays {}

  const differenceInCalendarDays: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarDays {}

  const differenceInCalendarISOWeeks: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarISOWeeks {}

  const differenceInCalendarISOWeekYears: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarISOWeekYears {}

  const differenceInCalendarMonths: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarMonths {}

  const differenceInCalendarQuarters: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarQuarters {}

  const differenceInCalendarWeeks: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarWeeks {}

  const differenceInCalendarWeeksWithOptions: CurriedFn3<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarWeeksWithOptions {}

  const differenceInCalendarYears: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarYears {}

  const differenceInDays: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInDays {}

  const differenceInHours: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInHours {}

  const differenceInISOWeekYears: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInISOWeekYears {}

  const differenceInMilliseconds: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInMilliseconds {}

  const differenceInMinutes: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInMinutes {}

  const differenceInMonths: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInMonths {}

  const differenceInQuarters: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInQuarters {}

  const differenceInSeconds: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInSeconds {}

  const differenceInWeeks: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInWeeks {}

  const differenceInYears: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInYears {}

  const eachDayOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachDayOfInterval {}

  const eachDayOfIntervalWithOptions: CurriedFn2<
    {
      step?: number
    },
    Interval,
    Date[]
  >
  namespace eachDayOfIntervalWithOptions {}

  const eachMonthOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachMonthOfInterval {}

  const eachWeekendOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachWeekendOfInterval {}

  const eachWeekendOfMonth: CurriedFn1<Date | number, Date[]>
  namespace eachWeekendOfMonth {}

  const eachWeekendOfYear: CurriedFn1<Date | number, Date[]>
  namespace eachWeekendOfYear {}

  const eachWeekOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachWeekOfInterval {}

  const eachWeekOfIntervalWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Interval,
    Date[]
  >
  namespace eachWeekOfIntervalWithOptions {}

  const eachYearOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachYearOfInterval {}

  const endOfDay: CurriedFn1<Date | number, Date>
  namespace endOfDay {}

  const endOfDecade: CurriedFn1<Date | number, Date>
  namespace endOfDecade {}

  const endOfDecadeWithOptions: CurriedFn2<
    {
      additionalDigits?: 0 | 1 | 2
    },
    Date | number,
    Date
  >
  namespace endOfDecadeWithOptions {}

  const endOfHour: CurriedFn1<Date | number, Date>
  namespace endOfHour {}

  const endOfISOWeek: CurriedFn1<Date | number, Date>
  namespace endOfISOWeek {}

  const endOfISOWeekYear: CurriedFn1<Date | number, Date>
  namespace endOfISOWeekYear {}

  const endOfMinute: CurriedFn1<Date | number, Date>
  namespace endOfMinute {}

  const endOfMonth: CurriedFn1<Date | number, Date>
  namespace endOfMonth {}

  const endOfQuarter: CurriedFn1<Date | number, Date>
  namespace endOfQuarter {}

  const endOfSecond: CurriedFn1<Date | number, Date>
  namespace endOfSecond {}

  const endOfWeek: CurriedFn1<Date | number, Date>
  namespace endOfWeek {}

  const endOfWeekWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date
  >
  namespace endOfWeekWithOptions {}

  const endOfYear: CurriedFn1<Date | number, Date>
  namespace endOfYear {}

  const format: CurriedFn2<string, Date | number, string>
  namespace format {}

  const formatDistance: CurriedFn2<Date | number, Date | number, string>
  namespace formatDistance {}

  const formatDistanceStrict: CurriedFn2<Date | number, Date | number, string>
  namespace formatDistanceStrict {}

  const formatDistanceStrictWithOptions: CurriedFn3<
    {
      locale?: Locale
      roundingMethod?: 'floor' | 'ceil' | 'round'
      unit?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'
      addSuffix?: boolean
    },
    Date | number,
    Date | number,
    string
  >
  namespace formatDistanceStrictWithOptions {}

  const formatDistanceWithOptions: CurriedFn3<
    {
      locale?: Locale
      addSuffix?: boolean
      includeSeconds?: boolean
    },
    Date | number,
    Date | number,
    string
  >
  namespace formatDistanceWithOptions {}

  const formatISO: CurriedFn1<Date | number, string>
  namespace formatISO {}

  const formatISO9075: CurriedFn1<Date | number, string>
  namespace formatISO9075 {}

  const formatISO9075WithOptions: CurriedFn2<
    {
      representation?: 'complete' | 'date' | 'time'
      format?: 'extended' | 'basic'
    },
    Date | number,
    string
  >
  namespace formatISO9075WithOptions {}

  const formatISODuration: CurriedFn1<Duration, string>
  namespace formatISODuration {}

  const formatISOWithOptions: CurriedFn2<
    {
      representation?: 'complete' | 'date' | 'time'
      format?: 'extended' | 'basic'
    },
    Date | number,
    string
  >
  namespace formatISOWithOptions {}

  const formatRelative: CurriedFn2<Date | number, Date | number, string>
  namespace formatRelative {}

  const formatRelativeWithOptions: CurriedFn3<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date | number,
    string
  >
  namespace formatRelativeWithOptions {}

  const formatRFC3339: CurriedFn1<Date | number, string>
  namespace formatRFC3339 {}

  const formatRFC3339WithOptions: CurriedFn2<
    {
      fractionDigits?: 0 | 1 | 2 | 3
    },
    Date | number,
    string
  >
  namespace formatRFC3339WithOptions {}

  const formatRFC7231: CurriedFn1<Date | number, string>
  namespace formatRFC7231 {}

  const formatWithOptions: CurriedFn3<
    {
      useAdditionalDayOfYearTokens?: boolean
      useAdditionalWeekYearTokens?: boolean
      firstWeekContainsDate?: number
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    string,
    Date | number,
    string
  >
  namespace formatWithOptions {}

  const fromUnixTime: CurriedFn1<number, Date>
  namespace fromUnixTime {}

  const getDate: CurriedFn1<Date | number, number>
  namespace getDate {}

  const getDay: CurriedFn1<Date | number, 0 | 1 | 2 | 3 | 4 | 5 | 6>
  namespace getDay {}

  const getDayOfYear: CurriedFn1<Date | number, number>
  namespace getDayOfYear {}

  const getDaysInMonth: CurriedFn1<Date | number, number>
  namespace getDaysInMonth {}

  const getDaysInYear: CurriedFn1<Date | number, number>
  namespace getDaysInYear {}

  const getDecade: CurriedFn1<Date | number, number>
  namespace getDecade {}

  const getHours: CurriedFn1<Date | number, number>
  namespace getHours {}

  const getISODay: CurriedFn1<Date | number, number>
  namespace getISODay {}

  const getISOWeek: CurriedFn1<Date | number, number>
  namespace getISOWeek {}

  const getISOWeeksInYear: CurriedFn1<Date | number, number>
  namespace getISOWeeksInYear {}

  const getISOWeekYear: CurriedFn1<Date | number, number>
  namespace getISOWeekYear {}

  const getMilliseconds: CurriedFn1<Date | number, number>
  namespace getMilliseconds {}

  const getMinutes: CurriedFn1<Date | number, number>
  namespace getMinutes {}

  const getMonth: CurriedFn1<Date | number, number>
  namespace getMonth {}

  const getOverlappingDaysInIntervals: CurriedFn2<Interval, Interval, number>
  namespace getOverlappingDaysInIntervals {}

  const getQuarter: CurriedFn1<Date | number, number>
  namespace getQuarter {}

  const getSeconds: CurriedFn1<Date | number, number>
  namespace getSeconds {}

  const getTime: CurriedFn1<Date | number, number>
  namespace getTime {}

  const getUnixTime: CurriedFn1<Date | number, number>
  namespace getUnixTime {}

  const getWeek: CurriedFn1<Date | number, number>
  namespace getWeek {}

  const getWeekOfMonth: CurriedFn1<Date | number, number>
  namespace getWeekOfMonth {}

  const getWeekOfMonthWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    number
  >
  namespace getWeekOfMonthWithOptions {}

  const getWeeksInMonth: CurriedFn1<Date | number, number>
  namespace getWeeksInMonth {}

  const getWeeksInMonthWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    number
  >
  namespace getWeeksInMonthWithOptions {}

  const getWeekWithOptions: CurriedFn2<
    {
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    number
  >
  namespace getWeekWithOptions {}

  const getWeekYear: CurriedFn1<Date | number, number>
  namespace getWeekYear {}

  const getWeekYearWithOptions: CurriedFn2<
    {
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    number
  >
  namespace getWeekYearWithOptions {}

  const getYear: CurriedFn1<Date | number, number>
  namespace getYear {}

  const intervalToDuration: CurriedFn1<Interval, Duration>
  namespace intervalToDuration {}

  const isAfter: CurriedFn2<Date | number, Date | number, boolean>
  namespace isAfter {}

  const isBefore: CurriedFn2<Date | number, Date | number, boolean>
  namespace isBefore {}

  const isDate: CurriedFn1<any, boolean>
  namespace isDate {}

  const isEqual: CurriedFn2<Date | number, Date | number, boolean>
  namespace isEqual {}

  const isExists: CurriedFn3<number, number, number, boolean>
  namespace isExists {}

  const isFirstDayOfMonth: CurriedFn1<Date | number, boolean>
  namespace isFirstDayOfMonth {}

  const isFriday: CurriedFn1<Date | number, boolean>
  namespace isFriday {}

  const isLastDayOfMonth: CurriedFn1<Date | number, boolean>
  namespace isLastDayOfMonth {}

  const isLeapYear: CurriedFn1<Date | number, boolean>
  namespace isLeapYear {}

  const isMonday: CurriedFn1<Date | number, boolean>
  namespace isMonday {}

  const isSameDay: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameDay {}

  const isSameHour: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameHour {}

  const isSameISOWeek: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameISOWeek {}

  const isSameISOWeekYear: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameISOWeekYear {}

  const isSameMinute: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameMinute {}

  const isSameMonth: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameMonth {}

  const isSameQuarter: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameQuarter {}

  const isSameSecond: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameSecond {}

  const isSameWeek: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameWeek {}

  const isSameWeekWithOptions: CurriedFn3<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date | number,
    boolean
  >
  namespace isSameWeekWithOptions {}

  const isSameYear: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameYear {}

  const isSaturday: CurriedFn1<Date | number, boolean>
  namespace isSaturday {}

  const isSunday: CurriedFn1<Date | number, boolean>
  namespace isSunday {}

  const isThursday: CurriedFn1<Date | number, boolean>
  namespace isThursday {}

  const isTuesday: CurriedFn1<Date | number, boolean>
  namespace isTuesday {}

  const isValid: CurriedFn1<any, boolean>
  namespace isValid {}

  const isWednesday: CurriedFn1<Date | number, boolean>
  namespace isWednesday {}

  const isWeekend: CurriedFn1<Date | number, boolean>
  namespace isWeekend {}

  const isWithinInterval: CurriedFn2<Interval, Date | number, boolean>
  namespace isWithinInterval {}

  const lastDayOfDecade: CurriedFn1<Date | number, Date>
  namespace lastDayOfDecade {}

  const lastDayOfISOWeek: CurriedFn1<Date | number, Date>
  namespace lastDayOfISOWeek {}

  const lastDayOfISOWeekYear: CurriedFn1<Date | number, Date>
  namespace lastDayOfISOWeekYear {}

  const lastDayOfMonth: CurriedFn1<Date | number, Date>
  namespace lastDayOfMonth {}

  const lastDayOfQuarter: CurriedFn1<Date | number, Date>
  namespace lastDayOfQuarter {}

  const lastDayOfQuarterWithOptions: CurriedFn2<
    {
      additionalDigits?: 0 | 1 | 2
    },
    Date | number,
    Date
  >
  namespace lastDayOfQuarterWithOptions {}

  const lastDayOfWeek: CurriedFn1<Date | number, Date>
  namespace lastDayOfWeek {}

  const lastDayOfWeekWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date
  >
  namespace lastDayOfWeekWithOptions {}

  const lastDayOfYear: CurriedFn1<Date | number, Date>
  namespace lastDayOfYear {}

  const lightFormat: CurriedFn2<string, Date | number, string>
  namespace lightFormat {}

  const max: CurriedFn1<(Date | number)[], Date>
  namespace max {}

  const min: CurriedFn1<(Date | number)[], Date>
  namespace min {}

  const parse: CurriedFn3<Date | number, string, string, Date>
  namespace parse {}

  const parseISO: CurriedFn1<string, Date>
  namespace parseISO {}

  const parseISOWithOptions: CurriedFn2<
    {
      additionalDigits?: 0 | 1 | 2
    },
    string,
    Date
  >
  namespace parseISOWithOptions {}

  const parseJSON: CurriedFn1<string | number | Date, Date>
  namespace parseJSON {}

  const parseWithOptions: CurriedFn4<
    {
      useAdditionalDayOfYearTokens?: boolean
      useAdditionalWeekYearTokens?: boolean
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    string,
    string,
    Date
  >
  namespace parseWithOptions {}

  const roundToNearestMinutes: CurriedFn1<Date | number, Date>
  namespace roundToNearestMinutes {}

  const roundToNearestMinutesWithOptions: CurriedFn2<
    {
      nearestTo?: number
    },
    Date | number,
    Date
  >
  namespace roundToNearestMinutesWithOptions {}

  const set: CurriedFn2<
    {
      milliseconds?: number
      seconds?: number
      minutes?: number
      hours?: number
      date?: number
      month?: number
      year?: number
    },
    Date | number,
    Date
  >
  namespace set {}

  const setDate: CurriedFn2<number, Date | number, Date>
  namespace setDate {}

  const setDay: CurriedFn2<number, Date | number, Date>
  namespace setDay {}

  const setDayOfYear: CurriedFn2<number, Date | number, Date>
  namespace setDayOfYear {}

  const setDayWithOptions: CurriedFn3<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    number,
    Date | number,
    Date
  >
  namespace setDayWithOptions {}

  const setHours: CurriedFn2<number, Date | number, Date>
  namespace setHours {}

  const setISODay: CurriedFn2<number, Date | number, Date>
  namespace setISODay {}

  const setISOWeek: CurriedFn2<number, Date | number, Date>
  namespace setISOWeek {}

  const setISOWeekYear: CurriedFn2<number, Date | number, Date>
  namespace setISOWeekYear {}

  const setMilliseconds: CurriedFn2<number, Date | number, Date>
  namespace setMilliseconds {}

  const setMinutes: CurriedFn2<number, Date | number, Date>
  namespace setMinutes {}

  const setMonth: CurriedFn2<number, Date | number, Date>
  namespace setMonth {}

  const setQuarter: CurriedFn2<number, Date | number, Date>
  namespace setQuarter {}

  const setSeconds: CurriedFn2<number, Date | number, Date>
  namespace setSeconds {}

  const setWeek: CurriedFn2<number, Date | number, Date>
  namespace setWeek {}

  const setWeekWithOptions: CurriedFn3<
    {
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    number,
    Date | number,
    Date
  >
  namespace setWeekWithOptions {}

  const setWeekYear: CurriedFn2<number, Date | number, Date>
  namespace setWeekYear {}

  const setWeekYearWithOptions: CurriedFn3<
    {
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    number,
    Date | number,
    Date
  >
  namespace setWeekYearWithOptions {}

  const setYear: CurriedFn2<number, Date | number, Date>
  namespace setYear {}

  const startOfDay: CurriedFn1<Date | number, Date>
  namespace startOfDay {}

  const startOfDecade: CurriedFn1<Date | number, Date>
  namespace startOfDecade {}

  const startOfHour: CurriedFn1<Date | number, Date>
  namespace startOfHour {}

  const startOfISOWeek: CurriedFn1<Date | number, Date>
  namespace startOfISOWeek {}

  const startOfISOWeekYear: CurriedFn1<Date | number, Date>
  namespace startOfISOWeekYear {}

  const startOfMinute: CurriedFn1<Date | number, Date>
  namespace startOfMinute {}

  const startOfMonth: CurriedFn1<Date | number, Date>
  namespace startOfMonth {}

  const startOfQuarter: CurriedFn1<Date | number, Date>
  namespace startOfQuarter {}

  const startOfSecond: CurriedFn1<Date | number, Date>
  namespace startOfSecond {}

  const startOfWeek: CurriedFn1<Date | number, Date>
  namespace startOfWeek {}

  const startOfWeekWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date
  >
  namespace startOfWeekWithOptions {}

  const startOfWeekYear: CurriedFn1<Date | number, Date>
  namespace startOfWeekYear {}

  const startOfWeekYearWithOptions: CurriedFn2<
    {
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date
  >
  namespace startOfWeekYearWithOptions {}

  const startOfYear: CurriedFn1<Date | number, Date>
  namespace startOfYear {}

  const sub: CurriedFn2<Duration, Date | number, Date>
  namespace sub {}

  const subBusinessDays: CurriedFn2<number, Date | number, Date>
  namespace subBusinessDays {}

  const subDays: CurriedFn2<number, Date | number, Date>
  namespace subDays {}

  const subHours: CurriedFn2<number, Date | number, Date>
  namespace subHours {}

  const subISOWeekYears: CurriedFn2<number, Date | number, Date>
  namespace subISOWeekYears {}

  const subMilliseconds: CurriedFn2<number, Date | number, Date>
  namespace subMilliseconds {}

  const subMinutes: CurriedFn2<number, Date | number, Date>
  namespace subMinutes {}

  const subMonths: CurriedFn2<number, Date | number, Date>
  namespace subMonths {}

  const subQuarters: CurriedFn2<number, Date | number, Date>
  namespace subQuarters {}

  const subSeconds: CurriedFn2<number, Date | number, Date>
  namespace subSeconds {}

  const subWeeks: CurriedFn2<number, Date | number, Date>
  namespace subWeeks {}

  const subYears: CurriedFn2<number, Date | number, Date>
  namespace subYears {}

  const toDate: CurriedFn1<Date | number, Date>
  namespace toDate {}

  const maxTime: number

  const minTime: number
}

declare module 'date-fns-jalaali/fp/add' {
  import { add } from 'date-fns-jalaali/fp'
  export default add
}

declare module 'date-fns-jalaali/fp/addBusinessDays' {
  import { addBusinessDays } from 'date-fns-jalaali/fp'
  export default addBusinessDays
}

declare module 'date-fns-jalaali/fp/addDays' {
  import { addDays } from 'date-fns-jalaali/fp'
  export default addDays
}

declare module 'date-fns-jalaali/fp/addHours' {
  import { addHours } from 'date-fns-jalaali/fp'
  export default addHours
}

declare module 'date-fns-jalaali/fp/addISOWeekYears' {
  import { addISOWeekYears } from 'date-fns-jalaali/fp'
  export default addISOWeekYears
}

declare module 'date-fns-jalaali/fp/addMilliseconds' {
  import { addMilliseconds } from 'date-fns-jalaali/fp'
  export default addMilliseconds
}

declare module 'date-fns-jalaali/fp/addMinutes' {
  import { addMinutes } from 'date-fns-jalaali/fp'
  export default addMinutes
}

declare module 'date-fns-jalaali/fp/addMonths' {
  import { addMonths } from 'date-fns-jalaali/fp'
  export default addMonths
}

declare module 'date-fns-jalaali/fp/addQuarters' {
  import { addQuarters } from 'date-fns-jalaali/fp'
  export default addQuarters
}

declare module 'date-fns-jalaali/fp/addSeconds' {
  import { addSeconds } from 'date-fns-jalaali/fp'
  export default addSeconds
}

declare module 'date-fns-jalaali/fp/addWeeks' {
  import { addWeeks } from 'date-fns-jalaali/fp'
  export default addWeeks
}

declare module 'date-fns-jalaali/fp/addYears' {
  import { addYears } from 'date-fns-jalaali/fp'
  export default addYears
}

declare module 'date-fns-jalaali/fp/areIntervalsOverlapping' {
  import { areIntervalsOverlapping } from 'date-fns-jalaali/fp'
  export default areIntervalsOverlapping
}

declare module 'date-fns-jalaali/fp/areIntervalsOverlappingWithOptions' {
  import { areIntervalsOverlappingWithOptions } from 'date-fns-jalaali/fp'
  export default areIntervalsOverlappingWithOptions
}

declare module 'date-fns-jalaali/fp/closestIndexTo' {
  import { closestIndexTo } from 'date-fns-jalaali/fp'
  export default closestIndexTo
}

declare module 'date-fns-jalaali/fp/closestTo' {
  import { closestTo } from 'date-fns-jalaali/fp'
  export default closestTo
}

declare module 'date-fns-jalaali/fp/compareAsc' {
  import { compareAsc } from 'date-fns-jalaali/fp'
  export default compareAsc
}

declare module 'date-fns-jalaali/fp/compareDesc' {
  import { compareDesc } from 'date-fns-jalaali/fp'
  export default compareDesc
}

declare module 'date-fns-jalaali/fp/differenceInBusinessDays' {
  import { differenceInBusinessDays } from 'date-fns-jalaali/fp'
  export default differenceInBusinessDays
}

declare module 'date-fns-jalaali/fp/differenceInCalendarDays' {
  import { differenceInCalendarDays } from 'date-fns-jalaali/fp'
  export default differenceInCalendarDays
}

declare module 'date-fns-jalaali/fp/differenceInCalendarISOWeeks' {
  import { differenceInCalendarISOWeeks } from 'date-fns-jalaali/fp'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns-jalaali/fp/differenceInCalendarISOWeekYears' {
  import { differenceInCalendarISOWeekYears } from 'date-fns-jalaali/fp'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns-jalaali/fp/differenceInCalendarMonths' {
  import { differenceInCalendarMonths } from 'date-fns-jalaali/fp'
  export default differenceInCalendarMonths
}

declare module 'date-fns-jalaali/fp/differenceInCalendarQuarters' {
  import { differenceInCalendarQuarters } from 'date-fns-jalaali/fp'
  export default differenceInCalendarQuarters
}

declare module 'date-fns-jalaali/fp/differenceInCalendarWeeks' {
  import { differenceInCalendarWeeks } from 'date-fns-jalaali/fp'
  export default differenceInCalendarWeeks
}

declare module 'date-fns-jalaali/fp/differenceInCalendarWeeksWithOptions' {
  import { differenceInCalendarWeeksWithOptions } from 'date-fns-jalaali/fp'
  export default differenceInCalendarWeeksWithOptions
}

declare module 'date-fns-jalaali/fp/differenceInCalendarYears' {
  import { differenceInCalendarYears } from 'date-fns-jalaali/fp'
  export default differenceInCalendarYears
}

declare module 'date-fns-jalaali/fp/differenceInDays' {
  import { differenceInDays } from 'date-fns-jalaali/fp'
  export default differenceInDays
}

declare module 'date-fns-jalaali/fp/differenceInHours' {
  import { differenceInHours } from 'date-fns-jalaali/fp'
  export default differenceInHours
}

declare module 'date-fns-jalaali/fp/differenceInISOWeekYears' {
  import { differenceInISOWeekYears } from 'date-fns-jalaali/fp'
  export default differenceInISOWeekYears
}

declare module 'date-fns-jalaali/fp/differenceInMilliseconds' {
  import { differenceInMilliseconds } from 'date-fns-jalaali/fp'
  export default differenceInMilliseconds
}

declare module 'date-fns-jalaali/fp/differenceInMinutes' {
  import { differenceInMinutes } from 'date-fns-jalaali/fp'
  export default differenceInMinutes
}

declare module 'date-fns-jalaali/fp/differenceInMonths' {
  import { differenceInMonths } from 'date-fns-jalaali/fp'
  export default differenceInMonths
}

declare module 'date-fns-jalaali/fp/differenceInQuarters' {
  import { differenceInQuarters } from 'date-fns-jalaali/fp'
  export default differenceInQuarters
}

declare module 'date-fns-jalaali/fp/differenceInSeconds' {
  import { differenceInSeconds } from 'date-fns-jalaali/fp'
  export default differenceInSeconds
}

declare module 'date-fns-jalaali/fp/differenceInWeeks' {
  import { differenceInWeeks } from 'date-fns-jalaali/fp'
  export default differenceInWeeks
}

declare module 'date-fns-jalaali/fp/differenceInYears' {
  import { differenceInYears } from 'date-fns-jalaali/fp'
  export default differenceInYears
}

declare module 'date-fns-jalaali/fp/eachDayOfInterval' {
  import { eachDayOfInterval } from 'date-fns-jalaali/fp'
  export default eachDayOfInterval
}

declare module 'date-fns-jalaali/fp/eachDayOfIntervalWithOptions' {
  import { eachDayOfIntervalWithOptions } from 'date-fns-jalaali/fp'
  export default eachDayOfIntervalWithOptions
}

declare module 'date-fns-jalaali/fp/eachMonthOfInterval' {
  import { eachMonthOfInterval } from 'date-fns-jalaali/fp'
  export default eachMonthOfInterval
}

declare module 'date-fns-jalaali/fp/eachWeekendOfInterval' {
  import { eachWeekendOfInterval } from 'date-fns-jalaali/fp'
  export default eachWeekendOfInterval
}

declare module 'date-fns-jalaali/fp/eachWeekendOfMonth' {
  import { eachWeekendOfMonth } from 'date-fns-jalaali/fp'
  export default eachWeekendOfMonth
}

declare module 'date-fns-jalaali/fp/eachWeekendOfYear' {
  import { eachWeekendOfYear } from 'date-fns-jalaali/fp'
  export default eachWeekendOfYear
}

declare module 'date-fns-jalaali/fp/eachWeekOfInterval' {
  import { eachWeekOfInterval } from 'date-fns-jalaali/fp'
  export default eachWeekOfInterval
}

declare module 'date-fns-jalaali/fp/eachWeekOfIntervalWithOptions' {
  import { eachWeekOfIntervalWithOptions } from 'date-fns-jalaali/fp'
  export default eachWeekOfIntervalWithOptions
}

declare module 'date-fns-jalaali/fp/eachYearOfInterval' {
  import { eachYearOfInterval } from 'date-fns-jalaali/fp'
  export default eachYearOfInterval
}

declare module 'date-fns-jalaali/fp/endOfDay' {
  import { endOfDay } from 'date-fns-jalaali/fp'
  export default endOfDay
}

declare module 'date-fns-jalaali/fp/endOfDecade' {
  import { endOfDecade } from 'date-fns-jalaali/fp'
  export default endOfDecade
}

declare module 'date-fns-jalaali/fp/endOfDecadeWithOptions' {
  import { endOfDecadeWithOptions } from 'date-fns-jalaali/fp'
  export default endOfDecadeWithOptions
}

declare module 'date-fns-jalaali/fp/endOfHour' {
  import { endOfHour } from 'date-fns-jalaali/fp'
  export default endOfHour
}

declare module 'date-fns-jalaali/fp/endOfISOWeek' {
  import { endOfISOWeek } from 'date-fns-jalaali/fp'
  export default endOfISOWeek
}

declare module 'date-fns-jalaali/fp/endOfISOWeekYear' {
  import { endOfISOWeekYear } from 'date-fns-jalaali/fp'
  export default endOfISOWeekYear
}

declare module 'date-fns-jalaali/fp/endOfMinute' {
  import { endOfMinute } from 'date-fns-jalaali/fp'
  export default endOfMinute
}

declare module 'date-fns-jalaali/fp/endOfMonth' {
  import { endOfMonth } from 'date-fns-jalaali/fp'
  export default endOfMonth
}

declare module 'date-fns-jalaali/fp/endOfQuarter' {
  import { endOfQuarter } from 'date-fns-jalaali/fp'
  export default endOfQuarter
}

declare module 'date-fns-jalaali/fp/endOfSecond' {
  import { endOfSecond } from 'date-fns-jalaali/fp'
  export default endOfSecond
}

declare module 'date-fns-jalaali/fp/endOfWeek' {
  import { endOfWeek } from 'date-fns-jalaali/fp'
  export default endOfWeek
}

declare module 'date-fns-jalaali/fp/endOfWeekWithOptions' {
  import { endOfWeekWithOptions } from 'date-fns-jalaali/fp'
  export default endOfWeekWithOptions
}

declare module 'date-fns-jalaali/fp/endOfYear' {
  import { endOfYear } from 'date-fns-jalaali/fp'
  export default endOfYear
}

declare module 'date-fns-jalaali/fp/format' {
  import { format } from 'date-fns-jalaali/fp'
  export default format
}

declare module 'date-fns-jalaali/fp/formatDistance' {
  import { formatDistance } from 'date-fns-jalaali/fp'
  export default formatDistance
}

declare module 'date-fns-jalaali/fp/formatDistanceStrict' {
  import { formatDistanceStrict } from 'date-fns-jalaali/fp'
  export default formatDistanceStrict
}

declare module 'date-fns-jalaali/fp/formatDistanceStrictWithOptions' {
  import { formatDistanceStrictWithOptions } from 'date-fns-jalaali/fp'
  export default formatDistanceStrictWithOptions
}

declare module 'date-fns-jalaali/fp/formatDistanceWithOptions' {
  import { formatDistanceWithOptions } from 'date-fns-jalaali/fp'
  export default formatDistanceWithOptions
}

declare module 'date-fns-jalaali/fp/formatISO' {
  import { formatISO } from 'date-fns-jalaali/fp'
  export default formatISO
}

declare module 'date-fns-jalaali/fp/formatISO9075' {
  import { formatISO9075 } from 'date-fns-jalaali/fp'
  export default formatISO9075
}

declare module 'date-fns-jalaali/fp/formatISO9075WithOptions' {
  import { formatISO9075WithOptions } from 'date-fns-jalaali/fp'
  export default formatISO9075WithOptions
}

declare module 'date-fns-jalaali/fp/formatISODuration' {
  import { formatISODuration } from 'date-fns-jalaali/fp'
  export default formatISODuration
}

declare module 'date-fns-jalaali/fp/formatISOWithOptions' {
  import { formatISOWithOptions } from 'date-fns-jalaali/fp'
  export default formatISOWithOptions
}

declare module 'date-fns-jalaali/fp/formatRelative' {
  import { formatRelative } from 'date-fns-jalaali/fp'
  export default formatRelative
}

declare module 'date-fns-jalaali/fp/formatRelativeWithOptions' {
  import { formatRelativeWithOptions } from 'date-fns-jalaali/fp'
  export default formatRelativeWithOptions
}

declare module 'date-fns-jalaali/fp/formatRFC3339' {
  import { formatRFC3339 } from 'date-fns-jalaali/fp'
  export default formatRFC3339
}

declare module 'date-fns-jalaali/fp/formatRFC3339WithOptions' {
  import { formatRFC3339WithOptions } from 'date-fns-jalaali/fp'
  export default formatRFC3339WithOptions
}

declare module 'date-fns-jalaali/fp/formatRFC7231' {
  import { formatRFC7231 } from 'date-fns-jalaali/fp'
  export default formatRFC7231
}

declare module 'date-fns-jalaali/fp/formatWithOptions' {
  import { formatWithOptions } from 'date-fns-jalaali/fp'
  export default formatWithOptions
}

declare module 'date-fns-jalaali/fp/fromUnixTime' {
  import { fromUnixTime } from 'date-fns-jalaali/fp'
  export default fromUnixTime
}

declare module 'date-fns-jalaali/fp/getDate' {
  import { getDate } from 'date-fns-jalaali/fp'
  export default getDate
}

declare module 'date-fns-jalaali/fp/getDay' {
  import { getDay } from 'date-fns-jalaali/fp'
  export default getDay
}

declare module 'date-fns-jalaali/fp/getDayOfYear' {
  import { getDayOfYear } from 'date-fns-jalaali/fp'
  export default getDayOfYear
}

declare module 'date-fns-jalaali/fp/getDaysInMonth' {
  import { getDaysInMonth } from 'date-fns-jalaali/fp'
  export default getDaysInMonth
}

declare module 'date-fns-jalaali/fp/getDaysInYear' {
  import { getDaysInYear } from 'date-fns-jalaali/fp'
  export default getDaysInYear
}

declare module 'date-fns-jalaali/fp/getDecade' {
  import { getDecade } from 'date-fns-jalaali/fp'
  export default getDecade
}

declare module 'date-fns-jalaali/fp/getHours' {
  import { getHours } from 'date-fns-jalaali/fp'
  export default getHours
}

declare module 'date-fns-jalaali/fp/getISODay' {
  import { getISODay } from 'date-fns-jalaali/fp'
  export default getISODay
}

declare module 'date-fns-jalaali/fp/getISOWeek' {
  import { getISOWeek } from 'date-fns-jalaali/fp'
  export default getISOWeek
}

declare module 'date-fns-jalaali/fp/getISOWeeksInYear' {
  import { getISOWeeksInYear } from 'date-fns-jalaali/fp'
  export default getISOWeeksInYear
}

declare module 'date-fns-jalaali/fp/getISOWeekYear' {
  import { getISOWeekYear } from 'date-fns-jalaali/fp'
  export default getISOWeekYear
}

declare module 'date-fns-jalaali/fp/getMilliseconds' {
  import { getMilliseconds } from 'date-fns-jalaali/fp'
  export default getMilliseconds
}

declare module 'date-fns-jalaali/fp/getMinutes' {
  import { getMinutes } from 'date-fns-jalaali/fp'
  export default getMinutes
}

declare module 'date-fns-jalaali/fp/getMonth' {
  import { getMonth } from 'date-fns-jalaali/fp'
  export default getMonth
}

declare module 'date-fns-jalaali/fp/getOverlappingDaysInIntervals' {
  import { getOverlappingDaysInIntervals } from 'date-fns-jalaali/fp'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns-jalaali/fp/getQuarter' {
  import { getQuarter } from 'date-fns-jalaali/fp'
  export default getQuarter
}

declare module 'date-fns-jalaali/fp/getSeconds' {
  import { getSeconds } from 'date-fns-jalaali/fp'
  export default getSeconds
}

declare module 'date-fns-jalaali/fp/getTime' {
  import { getTime } from 'date-fns-jalaali/fp'
  export default getTime
}

declare module 'date-fns-jalaali/fp/getUnixTime' {
  import { getUnixTime } from 'date-fns-jalaali/fp'
  export default getUnixTime
}

declare module 'date-fns-jalaali/fp/getWeek' {
  import { getWeek } from 'date-fns-jalaali/fp'
  export default getWeek
}

declare module 'date-fns-jalaali/fp/getWeekOfMonth' {
  import { getWeekOfMonth } from 'date-fns-jalaali/fp'
  export default getWeekOfMonth
}

declare module 'date-fns-jalaali/fp/getWeekOfMonthWithOptions' {
  import { getWeekOfMonthWithOptions } from 'date-fns-jalaali/fp'
  export default getWeekOfMonthWithOptions
}

declare module 'date-fns-jalaali/fp/getWeeksInMonth' {
  import { getWeeksInMonth } from 'date-fns-jalaali/fp'
  export default getWeeksInMonth
}

declare module 'date-fns-jalaali/fp/getWeeksInMonthWithOptions' {
  import { getWeeksInMonthWithOptions } from 'date-fns-jalaali/fp'
  export default getWeeksInMonthWithOptions
}

declare module 'date-fns-jalaali/fp/getWeekWithOptions' {
  import { getWeekWithOptions } from 'date-fns-jalaali/fp'
  export default getWeekWithOptions
}

declare module 'date-fns-jalaali/fp/getWeekYear' {
  import { getWeekYear } from 'date-fns-jalaali/fp'
  export default getWeekYear
}

declare module 'date-fns-jalaali/fp/getWeekYearWithOptions' {
  import { getWeekYearWithOptions } from 'date-fns-jalaali/fp'
  export default getWeekYearWithOptions
}

declare module 'date-fns-jalaali/fp/getYear' {
  import { getYear } from 'date-fns-jalaali/fp'
  export default getYear
}

declare module 'date-fns-jalaali/fp/intervalToDuration' {
  import { intervalToDuration } from 'date-fns-jalaali/fp'
  export default intervalToDuration
}

declare module 'date-fns-jalaali/fp/isAfter' {
  import { isAfter } from 'date-fns-jalaali/fp'
  export default isAfter
}

declare module 'date-fns-jalaali/fp/isBefore' {
  import { isBefore } from 'date-fns-jalaali/fp'
  export default isBefore
}

declare module 'date-fns-jalaali/fp/isDate' {
  import { isDate } from 'date-fns-jalaali/fp'
  export default isDate
}

declare module 'date-fns-jalaali/fp/isEqual' {
  import { isEqual } from 'date-fns-jalaali/fp'
  export default isEqual
}

declare module 'date-fns-jalaali/fp/isExists' {
  import { isExists } from 'date-fns-jalaali/fp'
  export default isExists
}

declare module 'date-fns-jalaali/fp/isFirstDayOfMonth' {
  import { isFirstDayOfMonth } from 'date-fns-jalaali/fp'
  export default isFirstDayOfMonth
}

declare module 'date-fns-jalaali/fp/isFriday' {
  import { isFriday } from 'date-fns-jalaali/fp'
  export default isFriday
}

declare module 'date-fns-jalaali/fp/isLastDayOfMonth' {
  import { isLastDayOfMonth } from 'date-fns-jalaali/fp'
  export default isLastDayOfMonth
}

declare module 'date-fns-jalaali/fp/isLeapYear' {
  import { isLeapYear } from 'date-fns-jalaali/fp'
  export default isLeapYear
}

declare module 'date-fns-jalaali/fp/isMonday' {
  import { isMonday } from 'date-fns-jalaali/fp'
  export default isMonday
}

declare module 'date-fns-jalaali/fp/isSameDay' {
  import { isSameDay } from 'date-fns-jalaali/fp'
  export default isSameDay
}

declare module 'date-fns-jalaali/fp/isSameHour' {
  import { isSameHour } from 'date-fns-jalaali/fp'
  export default isSameHour
}

declare module 'date-fns-jalaali/fp/isSameISOWeek' {
  import { isSameISOWeek } from 'date-fns-jalaali/fp'
  export default isSameISOWeek
}

declare module 'date-fns-jalaali/fp/isSameISOWeekYear' {
  import { isSameISOWeekYear } from 'date-fns-jalaali/fp'
  export default isSameISOWeekYear
}

declare module 'date-fns-jalaali/fp/isSameMinute' {
  import { isSameMinute } from 'date-fns-jalaali/fp'
  export default isSameMinute
}

declare module 'date-fns-jalaali/fp/isSameMonth' {
  import { isSameMonth } from 'date-fns-jalaali/fp'
  export default isSameMonth
}

declare module 'date-fns-jalaali/fp/isSameQuarter' {
  import { isSameQuarter } from 'date-fns-jalaali/fp'
  export default isSameQuarter
}

declare module 'date-fns-jalaali/fp/isSameSecond' {
  import { isSameSecond } from 'date-fns-jalaali/fp'
  export default isSameSecond
}

declare module 'date-fns-jalaali/fp/isSameWeek' {
  import { isSameWeek } from 'date-fns-jalaali/fp'
  export default isSameWeek
}

declare module 'date-fns-jalaali/fp/isSameWeekWithOptions' {
  import { isSameWeekWithOptions } from 'date-fns-jalaali/fp'
  export default isSameWeekWithOptions
}

declare module 'date-fns-jalaali/fp/isSameYear' {
  import { isSameYear } from 'date-fns-jalaali/fp'
  export default isSameYear
}

declare module 'date-fns-jalaali/fp/isSaturday' {
  import { isSaturday } from 'date-fns-jalaali/fp'
  export default isSaturday
}

declare module 'date-fns-jalaali/fp/isSunday' {
  import { isSunday } from 'date-fns-jalaali/fp'
  export default isSunday
}

declare module 'date-fns-jalaali/fp/isThursday' {
  import { isThursday } from 'date-fns-jalaali/fp'
  export default isThursday
}

declare module 'date-fns-jalaali/fp/isTuesday' {
  import { isTuesday } from 'date-fns-jalaali/fp'
  export default isTuesday
}

declare module 'date-fns-jalaali/fp/isValid' {
  import { isValid } from 'date-fns-jalaali/fp'
  export default isValid
}

declare module 'date-fns-jalaali/fp/isWednesday' {
  import { isWednesday } from 'date-fns-jalaali/fp'
  export default isWednesday
}

declare module 'date-fns-jalaali/fp/isWeekend' {
  import { isWeekend } from 'date-fns-jalaali/fp'
  export default isWeekend
}

declare module 'date-fns-jalaali/fp/isWithinInterval' {
  import { isWithinInterval } from 'date-fns-jalaali/fp'
  export default isWithinInterval
}

declare module 'date-fns-jalaali/fp/lastDayOfDecade' {
  import { lastDayOfDecade } from 'date-fns-jalaali/fp'
  export default lastDayOfDecade
}

declare module 'date-fns-jalaali/fp/lastDayOfISOWeek' {
  import { lastDayOfISOWeek } from 'date-fns-jalaali/fp'
  export default lastDayOfISOWeek
}

declare module 'date-fns-jalaali/fp/lastDayOfISOWeekYear' {
  import { lastDayOfISOWeekYear } from 'date-fns-jalaali/fp'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns-jalaali/fp/lastDayOfMonth' {
  import { lastDayOfMonth } from 'date-fns-jalaali/fp'
  export default lastDayOfMonth
}

declare module 'date-fns-jalaali/fp/lastDayOfQuarter' {
  import { lastDayOfQuarter } from 'date-fns-jalaali/fp'
  export default lastDayOfQuarter
}

declare module 'date-fns-jalaali/fp/lastDayOfQuarterWithOptions' {
  import { lastDayOfQuarterWithOptions } from 'date-fns-jalaali/fp'
  export default lastDayOfQuarterWithOptions
}

declare module 'date-fns-jalaali/fp/lastDayOfWeek' {
  import { lastDayOfWeek } from 'date-fns-jalaali/fp'
  export default lastDayOfWeek
}

declare module 'date-fns-jalaali/fp/lastDayOfWeekWithOptions' {
  import { lastDayOfWeekWithOptions } from 'date-fns-jalaali/fp'
  export default lastDayOfWeekWithOptions
}

declare module 'date-fns-jalaali/fp/lastDayOfYear' {
  import { lastDayOfYear } from 'date-fns-jalaali/fp'
  export default lastDayOfYear
}

declare module 'date-fns-jalaali/fp/lightFormat' {
  import { lightFormat } from 'date-fns-jalaali/fp'
  export default lightFormat
}

declare module 'date-fns-jalaali/fp/max' {
  import { max } from 'date-fns-jalaali/fp'
  export default max
}

declare module 'date-fns-jalaali/fp/min' {
  import { min } from 'date-fns-jalaali/fp'
  export default min
}

declare module 'date-fns-jalaali/fp/parse' {
  import { parse } from 'date-fns-jalaali/fp'
  export default parse
}

declare module 'date-fns-jalaali/fp/parseISO' {
  import { parseISO } from 'date-fns-jalaali/fp'
  export default parseISO
}

declare module 'date-fns-jalaali/fp/parseISOWithOptions' {
  import { parseISOWithOptions } from 'date-fns-jalaali/fp'
  export default parseISOWithOptions
}

declare module 'date-fns-jalaali/fp/parseJSON' {
  import { parseJSON } from 'date-fns-jalaali/fp'
  export default parseJSON
}

declare module 'date-fns-jalaali/fp/parseWithOptions' {
  import { parseWithOptions } from 'date-fns-jalaali/fp'
  export default parseWithOptions
}

declare module 'date-fns-jalaali/fp/roundToNearestMinutes' {
  import { roundToNearestMinutes } from 'date-fns-jalaali/fp'
  export default roundToNearestMinutes
}

declare module 'date-fns-jalaali/fp/roundToNearestMinutesWithOptions' {
  import { roundToNearestMinutesWithOptions } from 'date-fns-jalaali/fp'
  export default roundToNearestMinutesWithOptions
}

declare module 'date-fns-jalaali/fp/set' {
  import { set } from 'date-fns-jalaali/fp'
  export default set
}

declare module 'date-fns-jalaali/fp/setDate' {
  import { setDate } from 'date-fns-jalaali/fp'
  export default setDate
}

declare module 'date-fns-jalaali/fp/setDay' {
  import { setDay } from 'date-fns-jalaali/fp'
  export default setDay
}

declare module 'date-fns-jalaali/fp/setDayOfYear' {
  import { setDayOfYear } from 'date-fns-jalaali/fp'
  export default setDayOfYear
}

declare module 'date-fns-jalaali/fp/setDayWithOptions' {
  import { setDayWithOptions } from 'date-fns-jalaali/fp'
  export default setDayWithOptions
}

declare module 'date-fns-jalaali/fp/setHours' {
  import { setHours } from 'date-fns-jalaali/fp'
  export default setHours
}

declare module 'date-fns-jalaali/fp/setISODay' {
  import { setISODay } from 'date-fns-jalaali/fp'
  export default setISODay
}

declare module 'date-fns-jalaali/fp/setISOWeek' {
  import { setISOWeek } from 'date-fns-jalaali/fp'
  export default setISOWeek
}

declare module 'date-fns-jalaali/fp/setISOWeekYear' {
  import { setISOWeekYear } from 'date-fns-jalaali/fp'
  export default setISOWeekYear
}

declare module 'date-fns-jalaali/fp/setMilliseconds' {
  import { setMilliseconds } from 'date-fns-jalaali/fp'
  export default setMilliseconds
}

declare module 'date-fns-jalaali/fp/setMinutes' {
  import { setMinutes } from 'date-fns-jalaali/fp'
  export default setMinutes
}

declare module 'date-fns-jalaali/fp/setMonth' {
  import { setMonth } from 'date-fns-jalaali/fp'
  export default setMonth
}

declare module 'date-fns-jalaali/fp/setQuarter' {
  import { setQuarter } from 'date-fns-jalaali/fp'
  export default setQuarter
}

declare module 'date-fns-jalaali/fp/setSeconds' {
  import { setSeconds } from 'date-fns-jalaali/fp'
  export default setSeconds
}

declare module 'date-fns-jalaali/fp/setWeek' {
  import { setWeek } from 'date-fns-jalaali/fp'
  export default setWeek
}

declare module 'date-fns-jalaali/fp/setWeekWithOptions' {
  import { setWeekWithOptions } from 'date-fns-jalaali/fp'
  export default setWeekWithOptions
}

declare module 'date-fns-jalaali/fp/setWeekYear' {
  import { setWeekYear } from 'date-fns-jalaali/fp'
  export default setWeekYear
}

declare module 'date-fns-jalaali/fp/setWeekYearWithOptions' {
  import { setWeekYearWithOptions } from 'date-fns-jalaali/fp'
  export default setWeekYearWithOptions
}

declare module 'date-fns-jalaali/fp/setYear' {
  import { setYear } from 'date-fns-jalaali/fp'
  export default setYear
}

declare module 'date-fns-jalaali/fp/startOfDay' {
  import { startOfDay } from 'date-fns-jalaali/fp'
  export default startOfDay
}

declare module 'date-fns-jalaali/fp/startOfDecade' {
  import { startOfDecade } from 'date-fns-jalaali/fp'
  export default startOfDecade
}

declare module 'date-fns-jalaali/fp/startOfHour' {
  import { startOfHour } from 'date-fns-jalaali/fp'
  export default startOfHour
}

declare module 'date-fns-jalaali/fp/startOfISOWeek' {
  import { startOfISOWeek } from 'date-fns-jalaali/fp'
  export default startOfISOWeek
}

declare module 'date-fns-jalaali/fp/startOfISOWeekYear' {
  import { startOfISOWeekYear } from 'date-fns-jalaali/fp'
  export default startOfISOWeekYear
}

declare module 'date-fns-jalaali/fp/startOfMinute' {
  import { startOfMinute } from 'date-fns-jalaali/fp'
  export default startOfMinute
}

declare module 'date-fns-jalaali/fp/startOfMonth' {
  import { startOfMonth } from 'date-fns-jalaali/fp'
  export default startOfMonth
}

declare module 'date-fns-jalaali/fp/startOfQuarter' {
  import { startOfQuarter } from 'date-fns-jalaali/fp'
  export default startOfQuarter
}

declare module 'date-fns-jalaali/fp/startOfSecond' {
  import { startOfSecond } from 'date-fns-jalaali/fp'
  export default startOfSecond
}

declare module 'date-fns-jalaali/fp/startOfWeek' {
  import { startOfWeek } from 'date-fns-jalaali/fp'
  export default startOfWeek
}

declare module 'date-fns-jalaali/fp/startOfWeekWithOptions' {
  import { startOfWeekWithOptions } from 'date-fns-jalaali/fp'
  export default startOfWeekWithOptions
}

declare module 'date-fns-jalaali/fp/startOfWeekYear' {
  import { startOfWeekYear } from 'date-fns-jalaali/fp'
  export default startOfWeekYear
}

declare module 'date-fns-jalaali/fp/startOfWeekYearWithOptions' {
  import { startOfWeekYearWithOptions } from 'date-fns-jalaali/fp'
  export default startOfWeekYearWithOptions
}

declare module 'date-fns-jalaali/fp/startOfYear' {
  import { startOfYear } from 'date-fns-jalaali/fp'
  export default startOfYear
}

declare module 'date-fns-jalaali/fp/sub' {
  import { sub } from 'date-fns-jalaali/fp'
  export default sub
}

declare module 'date-fns-jalaali/fp/subBusinessDays' {
  import { subBusinessDays } from 'date-fns-jalaali/fp'
  export default subBusinessDays
}

declare module 'date-fns-jalaali/fp/subDays' {
  import { subDays } from 'date-fns-jalaali/fp'
  export default subDays
}

declare module 'date-fns-jalaali/fp/subHours' {
  import { subHours } from 'date-fns-jalaali/fp'
  export default subHours
}

declare module 'date-fns-jalaali/fp/subISOWeekYears' {
  import { subISOWeekYears } from 'date-fns-jalaali/fp'
  export default subISOWeekYears
}

declare module 'date-fns-jalaali/fp/subMilliseconds' {
  import { subMilliseconds } from 'date-fns-jalaali/fp'
  export default subMilliseconds
}

declare module 'date-fns-jalaali/fp/subMinutes' {
  import { subMinutes } from 'date-fns-jalaali/fp'
  export default subMinutes
}

declare module 'date-fns-jalaali/fp/subMonths' {
  import { subMonths } from 'date-fns-jalaali/fp'
  export default subMonths
}

declare module 'date-fns-jalaali/fp/subQuarters' {
  import { subQuarters } from 'date-fns-jalaali/fp'
  export default subQuarters
}

declare module 'date-fns-jalaali/fp/subSeconds' {
  import { subSeconds } from 'date-fns-jalaali/fp'
  export default subSeconds
}

declare module 'date-fns-jalaali/fp/subWeeks' {
  import { subWeeks } from 'date-fns-jalaali/fp'
  export default subWeeks
}

declare module 'date-fns-jalaali/fp/subYears' {
  import { subYears } from 'date-fns-jalaali/fp'
  export default subYears
}

declare module 'date-fns-jalaali/fp/toDate' {
  import { toDate } from 'date-fns-jalaali/fp'
  export default toDate
}

declare module 'date-fns-jalaali/fp/add/index' {
  import { add } from 'date-fns-jalaali/fp'
  export default add
}

declare module 'date-fns-jalaali/fp/addBusinessDays/index' {
  import { addBusinessDays } from 'date-fns-jalaali/fp'
  export default addBusinessDays
}

declare module 'date-fns-jalaali/fp/addDays/index' {
  import { addDays } from 'date-fns-jalaali/fp'
  export default addDays
}

declare module 'date-fns-jalaali/fp/addHours/index' {
  import { addHours } from 'date-fns-jalaali/fp'
  export default addHours
}

declare module 'date-fns-jalaali/fp/addISOWeekYears/index' {
  import { addISOWeekYears } from 'date-fns-jalaali/fp'
  export default addISOWeekYears
}

declare module 'date-fns-jalaali/fp/addMilliseconds/index' {
  import { addMilliseconds } from 'date-fns-jalaali/fp'
  export default addMilliseconds
}

declare module 'date-fns-jalaali/fp/addMinutes/index' {
  import { addMinutes } from 'date-fns-jalaali/fp'
  export default addMinutes
}

declare module 'date-fns-jalaali/fp/addMonths/index' {
  import { addMonths } from 'date-fns-jalaali/fp'
  export default addMonths
}

declare module 'date-fns-jalaali/fp/addQuarters/index' {
  import { addQuarters } from 'date-fns-jalaali/fp'
  export default addQuarters
}

declare module 'date-fns-jalaali/fp/addSeconds/index' {
  import { addSeconds } from 'date-fns-jalaali/fp'
  export default addSeconds
}

declare module 'date-fns-jalaali/fp/addWeeks/index' {
  import { addWeeks } from 'date-fns-jalaali/fp'
  export default addWeeks
}

declare module 'date-fns-jalaali/fp/addYears/index' {
  import { addYears } from 'date-fns-jalaali/fp'
  export default addYears
}

declare module 'date-fns-jalaali/fp/areIntervalsOverlapping/index' {
  import { areIntervalsOverlapping } from 'date-fns-jalaali/fp'
  export default areIntervalsOverlapping
}

declare module 'date-fns-jalaali/fp/areIntervalsOverlappingWithOptions/index' {
  import { areIntervalsOverlappingWithOptions } from 'date-fns-jalaali/fp'
  export default areIntervalsOverlappingWithOptions
}

declare module 'date-fns-jalaali/fp/closestIndexTo/index' {
  import { closestIndexTo } from 'date-fns-jalaali/fp'
  export default closestIndexTo
}

declare module 'date-fns-jalaali/fp/closestTo/index' {
  import { closestTo } from 'date-fns-jalaali/fp'
  export default closestTo
}

declare module 'date-fns-jalaali/fp/compareAsc/index' {
  import { compareAsc } from 'date-fns-jalaali/fp'
  export default compareAsc
}

declare module 'date-fns-jalaali/fp/compareDesc/index' {
  import { compareDesc } from 'date-fns-jalaali/fp'
  export default compareDesc
}

declare module 'date-fns-jalaali/fp/differenceInBusinessDays/index' {
  import { differenceInBusinessDays } from 'date-fns-jalaali/fp'
  export default differenceInBusinessDays
}

declare module 'date-fns-jalaali/fp/differenceInCalendarDays/index' {
  import { differenceInCalendarDays } from 'date-fns-jalaali/fp'
  export default differenceInCalendarDays
}

declare module 'date-fns-jalaali/fp/differenceInCalendarISOWeeks/index' {
  import { differenceInCalendarISOWeeks } from 'date-fns-jalaali/fp'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns-jalaali/fp/differenceInCalendarISOWeekYears/index' {
  import { differenceInCalendarISOWeekYears } from 'date-fns-jalaali/fp'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns-jalaali/fp/differenceInCalendarMonths/index' {
  import { differenceInCalendarMonths } from 'date-fns-jalaali/fp'
  export default differenceInCalendarMonths
}

declare module 'date-fns-jalaali/fp/differenceInCalendarQuarters/index' {
  import { differenceInCalendarQuarters } from 'date-fns-jalaali/fp'
  export default differenceInCalendarQuarters
}

declare module 'date-fns-jalaali/fp/differenceInCalendarWeeks/index' {
  import { differenceInCalendarWeeks } from 'date-fns-jalaali/fp'
  export default differenceInCalendarWeeks
}

declare module 'date-fns-jalaali/fp/differenceInCalendarWeeksWithOptions/index' {
  import { differenceInCalendarWeeksWithOptions } from 'date-fns-jalaali/fp'
  export default differenceInCalendarWeeksWithOptions
}

declare module 'date-fns-jalaali/fp/differenceInCalendarYears/index' {
  import { differenceInCalendarYears } from 'date-fns-jalaali/fp'
  export default differenceInCalendarYears
}

declare module 'date-fns-jalaali/fp/differenceInDays/index' {
  import { differenceInDays } from 'date-fns-jalaali/fp'
  export default differenceInDays
}

declare module 'date-fns-jalaali/fp/differenceInHours/index' {
  import { differenceInHours } from 'date-fns-jalaali/fp'
  export default differenceInHours
}

declare module 'date-fns-jalaali/fp/differenceInISOWeekYears/index' {
  import { differenceInISOWeekYears } from 'date-fns-jalaali/fp'
  export default differenceInISOWeekYears
}

declare module 'date-fns-jalaali/fp/differenceInMilliseconds/index' {
  import { differenceInMilliseconds } from 'date-fns-jalaali/fp'
  export default differenceInMilliseconds
}

declare module 'date-fns-jalaali/fp/differenceInMinutes/index' {
  import { differenceInMinutes } from 'date-fns-jalaali/fp'
  export default differenceInMinutes
}

declare module 'date-fns-jalaali/fp/differenceInMonths/index' {
  import { differenceInMonths } from 'date-fns-jalaali/fp'
  export default differenceInMonths
}

declare module 'date-fns-jalaali/fp/differenceInQuarters/index' {
  import { differenceInQuarters } from 'date-fns-jalaali/fp'
  export default differenceInQuarters
}

declare module 'date-fns-jalaali/fp/differenceInSeconds/index' {
  import { differenceInSeconds } from 'date-fns-jalaali/fp'
  export default differenceInSeconds
}

declare module 'date-fns-jalaali/fp/differenceInWeeks/index' {
  import { differenceInWeeks } from 'date-fns-jalaali/fp'
  export default differenceInWeeks
}

declare module 'date-fns-jalaali/fp/differenceInYears/index' {
  import { differenceInYears } from 'date-fns-jalaali/fp'
  export default differenceInYears
}

declare module 'date-fns-jalaali/fp/eachDayOfInterval/index' {
  import { eachDayOfInterval } from 'date-fns-jalaali/fp'
  export default eachDayOfInterval
}

declare module 'date-fns-jalaali/fp/eachDayOfIntervalWithOptions/index' {
  import { eachDayOfIntervalWithOptions } from 'date-fns-jalaali/fp'
  export default eachDayOfIntervalWithOptions
}

declare module 'date-fns-jalaali/fp/eachMonthOfInterval/index' {
  import { eachMonthOfInterval } from 'date-fns-jalaali/fp'
  export default eachMonthOfInterval
}

declare module 'date-fns-jalaali/fp/eachWeekendOfInterval/index' {
  import { eachWeekendOfInterval } from 'date-fns-jalaali/fp'
  export default eachWeekendOfInterval
}

declare module 'date-fns-jalaali/fp/eachWeekendOfMonth/index' {
  import { eachWeekendOfMonth } from 'date-fns-jalaali/fp'
  export default eachWeekendOfMonth
}

declare module 'date-fns-jalaali/fp/eachWeekendOfYear/index' {
  import { eachWeekendOfYear } from 'date-fns-jalaali/fp'
  export default eachWeekendOfYear
}

declare module 'date-fns-jalaali/fp/eachWeekOfInterval/index' {
  import { eachWeekOfInterval } from 'date-fns-jalaali/fp'
  export default eachWeekOfInterval
}

declare module 'date-fns-jalaali/fp/eachWeekOfIntervalWithOptions/index' {
  import { eachWeekOfIntervalWithOptions } from 'date-fns-jalaali/fp'
  export default eachWeekOfIntervalWithOptions
}

declare module 'date-fns-jalaali/fp/eachYearOfInterval/index' {
  import { eachYearOfInterval } from 'date-fns-jalaali/fp'
  export default eachYearOfInterval
}

declare module 'date-fns-jalaali/fp/endOfDay/index' {
  import { endOfDay } from 'date-fns-jalaali/fp'
  export default endOfDay
}

declare module 'date-fns-jalaali/fp/endOfDecade/index' {
  import { endOfDecade } from 'date-fns-jalaali/fp'
  export default endOfDecade
}

declare module 'date-fns-jalaali/fp/endOfDecadeWithOptions/index' {
  import { endOfDecadeWithOptions } from 'date-fns-jalaali/fp'
  export default endOfDecadeWithOptions
}

declare module 'date-fns-jalaali/fp/endOfHour/index' {
  import { endOfHour } from 'date-fns-jalaali/fp'
  export default endOfHour
}

declare module 'date-fns-jalaali/fp/endOfISOWeek/index' {
  import { endOfISOWeek } from 'date-fns-jalaali/fp'
  export default endOfISOWeek
}

declare module 'date-fns-jalaali/fp/endOfISOWeekYear/index' {
  import { endOfISOWeekYear } from 'date-fns-jalaali/fp'
  export default endOfISOWeekYear
}

declare module 'date-fns-jalaali/fp/endOfMinute/index' {
  import { endOfMinute } from 'date-fns-jalaali/fp'
  export default endOfMinute
}

declare module 'date-fns-jalaali/fp/endOfMonth/index' {
  import { endOfMonth } from 'date-fns-jalaali/fp'
  export default endOfMonth
}

declare module 'date-fns-jalaali/fp/endOfQuarter/index' {
  import { endOfQuarter } from 'date-fns-jalaali/fp'
  export default endOfQuarter
}

declare module 'date-fns-jalaali/fp/endOfSecond/index' {
  import { endOfSecond } from 'date-fns-jalaali/fp'
  export default endOfSecond
}

declare module 'date-fns-jalaali/fp/endOfWeek/index' {
  import { endOfWeek } from 'date-fns-jalaali/fp'
  export default endOfWeek
}

declare module 'date-fns-jalaali/fp/endOfWeekWithOptions/index' {
  import { endOfWeekWithOptions } from 'date-fns-jalaali/fp'
  export default endOfWeekWithOptions
}

declare module 'date-fns-jalaali/fp/endOfYear/index' {
  import { endOfYear } from 'date-fns-jalaali/fp'
  export default endOfYear
}

declare module 'date-fns-jalaali/fp/format/index' {
  import { format } from 'date-fns-jalaali/fp'
  export default format
}

declare module 'date-fns-jalaali/fp/formatDistance/index' {
  import { formatDistance } from 'date-fns-jalaali/fp'
  export default formatDistance
}

declare module 'date-fns-jalaali/fp/formatDistanceStrict/index' {
  import { formatDistanceStrict } from 'date-fns-jalaali/fp'
  export default formatDistanceStrict
}

declare module 'date-fns-jalaali/fp/formatDistanceStrictWithOptions/index' {
  import { formatDistanceStrictWithOptions } from 'date-fns-jalaali/fp'
  export default formatDistanceStrictWithOptions
}

declare module 'date-fns-jalaali/fp/formatDistanceWithOptions/index' {
  import { formatDistanceWithOptions } from 'date-fns-jalaali/fp'
  export default formatDistanceWithOptions
}

declare module 'date-fns-jalaali/fp/formatISO/index' {
  import { formatISO } from 'date-fns-jalaali/fp'
  export default formatISO
}

declare module 'date-fns-jalaali/fp/formatISO9075/index' {
  import { formatISO9075 } from 'date-fns-jalaali/fp'
  export default formatISO9075
}

declare module 'date-fns-jalaali/fp/formatISO9075WithOptions/index' {
  import { formatISO9075WithOptions } from 'date-fns-jalaali/fp'
  export default formatISO9075WithOptions
}

declare module 'date-fns-jalaali/fp/formatISODuration/index' {
  import { formatISODuration } from 'date-fns-jalaali/fp'
  export default formatISODuration
}

declare module 'date-fns-jalaali/fp/formatISOWithOptions/index' {
  import { formatISOWithOptions } from 'date-fns-jalaali/fp'
  export default formatISOWithOptions
}

declare module 'date-fns-jalaali/fp/formatRelative/index' {
  import { formatRelative } from 'date-fns-jalaali/fp'
  export default formatRelative
}

declare module 'date-fns-jalaali/fp/formatRelativeWithOptions/index' {
  import { formatRelativeWithOptions } from 'date-fns-jalaali/fp'
  export default formatRelativeWithOptions
}

declare module 'date-fns-jalaali/fp/formatRFC3339/index' {
  import { formatRFC3339 } from 'date-fns-jalaali/fp'
  export default formatRFC3339
}

declare module 'date-fns-jalaali/fp/formatRFC3339WithOptions/index' {
  import { formatRFC3339WithOptions } from 'date-fns-jalaali/fp'
  export default formatRFC3339WithOptions
}

declare module 'date-fns-jalaali/fp/formatRFC7231/index' {
  import { formatRFC7231 } from 'date-fns-jalaali/fp'
  export default formatRFC7231
}

declare module 'date-fns-jalaali/fp/formatWithOptions/index' {
  import { formatWithOptions } from 'date-fns-jalaali/fp'
  export default formatWithOptions
}

declare module 'date-fns-jalaali/fp/fromUnixTime/index' {
  import { fromUnixTime } from 'date-fns-jalaali/fp'
  export default fromUnixTime
}

declare module 'date-fns-jalaali/fp/getDate/index' {
  import { getDate } from 'date-fns-jalaali/fp'
  export default getDate
}

declare module 'date-fns-jalaali/fp/getDay/index' {
  import { getDay } from 'date-fns-jalaali/fp'
  export default getDay
}

declare module 'date-fns-jalaali/fp/getDayOfYear/index' {
  import { getDayOfYear } from 'date-fns-jalaali/fp'
  export default getDayOfYear
}

declare module 'date-fns-jalaali/fp/getDaysInMonth/index' {
  import { getDaysInMonth } from 'date-fns-jalaali/fp'
  export default getDaysInMonth
}

declare module 'date-fns-jalaali/fp/getDaysInYear/index' {
  import { getDaysInYear } from 'date-fns-jalaali/fp'
  export default getDaysInYear
}

declare module 'date-fns-jalaali/fp/getDecade/index' {
  import { getDecade } from 'date-fns-jalaali/fp'
  export default getDecade
}

declare module 'date-fns-jalaali/fp/getHours/index' {
  import { getHours } from 'date-fns-jalaali/fp'
  export default getHours
}

declare module 'date-fns-jalaali/fp/getISODay/index' {
  import { getISODay } from 'date-fns-jalaali/fp'
  export default getISODay
}

declare module 'date-fns-jalaali/fp/getISOWeek/index' {
  import { getISOWeek } from 'date-fns-jalaali/fp'
  export default getISOWeek
}

declare module 'date-fns-jalaali/fp/getISOWeeksInYear/index' {
  import { getISOWeeksInYear } from 'date-fns-jalaali/fp'
  export default getISOWeeksInYear
}

declare module 'date-fns-jalaali/fp/getISOWeekYear/index' {
  import { getISOWeekYear } from 'date-fns-jalaali/fp'
  export default getISOWeekYear
}

declare module 'date-fns-jalaali/fp/getMilliseconds/index' {
  import { getMilliseconds } from 'date-fns-jalaali/fp'
  export default getMilliseconds
}

declare module 'date-fns-jalaali/fp/getMinutes/index' {
  import { getMinutes } from 'date-fns-jalaali/fp'
  export default getMinutes
}

declare module 'date-fns-jalaali/fp/getMonth/index' {
  import { getMonth } from 'date-fns-jalaali/fp'
  export default getMonth
}

declare module 'date-fns-jalaali/fp/getOverlappingDaysInIntervals/index' {
  import { getOverlappingDaysInIntervals } from 'date-fns-jalaali/fp'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns-jalaali/fp/getQuarter/index' {
  import { getQuarter } from 'date-fns-jalaali/fp'
  export default getQuarter
}

declare module 'date-fns-jalaali/fp/getSeconds/index' {
  import { getSeconds } from 'date-fns-jalaali/fp'
  export default getSeconds
}

declare module 'date-fns-jalaali/fp/getTime/index' {
  import { getTime } from 'date-fns-jalaali/fp'
  export default getTime
}

declare module 'date-fns-jalaali/fp/getUnixTime/index' {
  import { getUnixTime } from 'date-fns-jalaali/fp'
  export default getUnixTime
}

declare module 'date-fns-jalaali/fp/getWeek/index' {
  import { getWeek } from 'date-fns-jalaali/fp'
  export default getWeek
}

declare module 'date-fns-jalaali/fp/getWeekOfMonth/index' {
  import { getWeekOfMonth } from 'date-fns-jalaali/fp'
  export default getWeekOfMonth
}

declare module 'date-fns-jalaali/fp/getWeekOfMonthWithOptions/index' {
  import { getWeekOfMonthWithOptions } from 'date-fns-jalaali/fp'
  export default getWeekOfMonthWithOptions
}

declare module 'date-fns-jalaali/fp/getWeeksInMonth/index' {
  import { getWeeksInMonth } from 'date-fns-jalaali/fp'
  export default getWeeksInMonth
}

declare module 'date-fns-jalaali/fp/getWeeksInMonthWithOptions/index' {
  import { getWeeksInMonthWithOptions } from 'date-fns-jalaali/fp'
  export default getWeeksInMonthWithOptions
}

declare module 'date-fns-jalaali/fp/getWeekWithOptions/index' {
  import { getWeekWithOptions } from 'date-fns-jalaali/fp'
  export default getWeekWithOptions
}

declare module 'date-fns-jalaali/fp/getWeekYear/index' {
  import { getWeekYear } from 'date-fns-jalaali/fp'
  export default getWeekYear
}

declare module 'date-fns-jalaali/fp/getWeekYearWithOptions/index' {
  import { getWeekYearWithOptions } from 'date-fns-jalaali/fp'
  export default getWeekYearWithOptions
}

declare module 'date-fns-jalaali/fp/getYear/index' {
  import { getYear } from 'date-fns-jalaali/fp'
  export default getYear
}

declare module 'date-fns-jalaali/fp/intervalToDuration/index' {
  import { intervalToDuration } from 'date-fns-jalaali/fp'
  export default intervalToDuration
}

declare module 'date-fns-jalaali/fp/isAfter/index' {
  import { isAfter } from 'date-fns-jalaali/fp'
  export default isAfter
}

declare module 'date-fns-jalaali/fp/isBefore/index' {
  import { isBefore } from 'date-fns-jalaali/fp'
  export default isBefore
}

declare module 'date-fns-jalaali/fp/isDate/index' {
  import { isDate } from 'date-fns-jalaali/fp'
  export default isDate
}

declare module 'date-fns-jalaali/fp/isEqual/index' {
  import { isEqual } from 'date-fns-jalaali/fp'
  export default isEqual
}

declare module 'date-fns-jalaali/fp/isExists/index' {
  import { isExists } from 'date-fns-jalaali/fp'
  export default isExists
}

declare module 'date-fns-jalaali/fp/isFirstDayOfMonth/index' {
  import { isFirstDayOfMonth } from 'date-fns-jalaali/fp'
  export default isFirstDayOfMonth
}

declare module 'date-fns-jalaali/fp/isFriday/index' {
  import { isFriday } from 'date-fns-jalaali/fp'
  export default isFriday
}

declare module 'date-fns-jalaali/fp/isLastDayOfMonth/index' {
  import { isLastDayOfMonth } from 'date-fns-jalaali/fp'
  export default isLastDayOfMonth
}

declare module 'date-fns-jalaali/fp/isLeapYear/index' {
  import { isLeapYear } from 'date-fns-jalaali/fp'
  export default isLeapYear
}

declare module 'date-fns-jalaali/fp/isMonday/index' {
  import { isMonday } from 'date-fns-jalaali/fp'
  export default isMonday
}

declare module 'date-fns-jalaali/fp/isSameDay/index' {
  import { isSameDay } from 'date-fns-jalaali/fp'
  export default isSameDay
}

declare module 'date-fns-jalaali/fp/isSameHour/index' {
  import { isSameHour } from 'date-fns-jalaali/fp'
  export default isSameHour
}

declare module 'date-fns-jalaali/fp/isSameISOWeek/index' {
  import { isSameISOWeek } from 'date-fns-jalaali/fp'
  export default isSameISOWeek
}

declare module 'date-fns-jalaali/fp/isSameISOWeekYear/index' {
  import { isSameISOWeekYear } from 'date-fns-jalaali/fp'
  export default isSameISOWeekYear
}

declare module 'date-fns-jalaali/fp/isSameMinute/index' {
  import { isSameMinute } from 'date-fns-jalaali/fp'
  export default isSameMinute
}

declare module 'date-fns-jalaali/fp/isSameMonth/index' {
  import { isSameMonth } from 'date-fns-jalaali/fp'
  export default isSameMonth
}

declare module 'date-fns-jalaali/fp/isSameQuarter/index' {
  import { isSameQuarter } from 'date-fns-jalaali/fp'
  export default isSameQuarter
}

declare module 'date-fns-jalaali/fp/isSameSecond/index' {
  import { isSameSecond } from 'date-fns-jalaali/fp'
  export default isSameSecond
}

declare module 'date-fns-jalaali/fp/isSameWeek/index' {
  import { isSameWeek } from 'date-fns-jalaali/fp'
  export default isSameWeek
}

declare module 'date-fns-jalaali/fp/isSameWeekWithOptions/index' {
  import { isSameWeekWithOptions } from 'date-fns-jalaali/fp'
  export default isSameWeekWithOptions
}

declare module 'date-fns-jalaali/fp/isSameYear/index' {
  import { isSameYear } from 'date-fns-jalaali/fp'
  export default isSameYear
}

declare module 'date-fns-jalaali/fp/isSaturday/index' {
  import { isSaturday } from 'date-fns-jalaali/fp'
  export default isSaturday
}

declare module 'date-fns-jalaali/fp/isSunday/index' {
  import { isSunday } from 'date-fns-jalaali/fp'
  export default isSunday
}

declare module 'date-fns-jalaali/fp/isThursday/index' {
  import { isThursday } from 'date-fns-jalaali/fp'
  export default isThursday
}

declare module 'date-fns-jalaali/fp/isTuesday/index' {
  import { isTuesday } from 'date-fns-jalaali/fp'
  export default isTuesday
}

declare module 'date-fns-jalaali/fp/isValid/index' {
  import { isValid } from 'date-fns-jalaali/fp'
  export default isValid
}

declare module 'date-fns-jalaali/fp/isWednesday/index' {
  import { isWednesday } from 'date-fns-jalaali/fp'
  export default isWednesday
}

declare module 'date-fns-jalaali/fp/isWeekend/index' {
  import { isWeekend } from 'date-fns-jalaali/fp'
  export default isWeekend
}

declare module 'date-fns-jalaali/fp/isWithinInterval/index' {
  import { isWithinInterval } from 'date-fns-jalaali/fp'
  export default isWithinInterval
}

declare module 'date-fns-jalaali/fp/lastDayOfDecade/index' {
  import { lastDayOfDecade } from 'date-fns-jalaali/fp'
  export default lastDayOfDecade
}

declare module 'date-fns-jalaali/fp/lastDayOfISOWeek/index' {
  import { lastDayOfISOWeek } from 'date-fns-jalaali/fp'
  export default lastDayOfISOWeek
}

declare module 'date-fns-jalaali/fp/lastDayOfISOWeekYear/index' {
  import { lastDayOfISOWeekYear } from 'date-fns-jalaali/fp'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns-jalaali/fp/lastDayOfMonth/index' {
  import { lastDayOfMonth } from 'date-fns-jalaali/fp'
  export default lastDayOfMonth
}

declare module 'date-fns-jalaali/fp/lastDayOfQuarter/index' {
  import { lastDayOfQuarter } from 'date-fns-jalaali/fp'
  export default lastDayOfQuarter
}

declare module 'date-fns-jalaali/fp/lastDayOfQuarterWithOptions/index' {
  import { lastDayOfQuarterWithOptions } from 'date-fns-jalaali/fp'
  export default lastDayOfQuarterWithOptions
}

declare module 'date-fns-jalaali/fp/lastDayOfWeek/index' {
  import { lastDayOfWeek } from 'date-fns-jalaali/fp'
  export default lastDayOfWeek
}

declare module 'date-fns-jalaali/fp/lastDayOfWeekWithOptions/index' {
  import { lastDayOfWeekWithOptions } from 'date-fns-jalaali/fp'
  export default lastDayOfWeekWithOptions
}

declare module 'date-fns-jalaali/fp/lastDayOfYear/index' {
  import { lastDayOfYear } from 'date-fns-jalaali/fp'
  export default lastDayOfYear
}

declare module 'date-fns-jalaali/fp/lightFormat/index' {
  import { lightFormat } from 'date-fns-jalaali/fp'
  export default lightFormat
}

declare module 'date-fns-jalaali/fp/max/index' {
  import { max } from 'date-fns-jalaali/fp'
  export default max
}

declare module 'date-fns-jalaali/fp/min/index' {
  import { min } from 'date-fns-jalaali/fp'
  export default min
}

declare module 'date-fns-jalaali/fp/parse/index' {
  import { parse } from 'date-fns-jalaali/fp'
  export default parse
}

declare module 'date-fns-jalaali/fp/parseISO/index' {
  import { parseISO } from 'date-fns-jalaali/fp'
  export default parseISO
}

declare module 'date-fns-jalaali/fp/parseISOWithOptions/index' {
  import { parseISOWithOptions } from 'date-fns-jalaali/fp'
  export default parseISOWithOptions
}

declare module 'date-fns-jalaali/fp/parseJSON/index' {
  import { parseJSON } from 'date-fns-jalaali/fp'
  export default parseJSON
}

declare module 'date-fns-jalaali/fp/parseWithOptions/index' {
  import { parseWithOptions } from 'date-fns-jalaali/fp'
  export default parseWithOptions
}

declare module 'date-fns-jalaali/fp/roundToNearestMinutes/index' {
  import { roundToNearestMinutes } from 'date-fns-jalaali/fp'
  export default roundToNearestMinutes
}

declare module 'date-fns-jalaali/fp/roundToNearestMinutesWithOptions/index' {
  import { roundToNearestMinutesWithOptions } from 'date-fns-jalaali/fp'
  export default roundToNearestMinutesWithOptions
}

declare module 'date-fns-jalaali/fp/set/index' {
  import { set } from 'date-fns-jalaali/fp'
  export default set
}

declare module 'date-fns-jalaali/fp/setDate/index' {
  import { setDate } from 'date-fns-jalaali/fp'
  export default setDate
}

declare module 'date-fns-jalaali/fp/setDay/index' {
  import { setDay } from 'date-fns-jalaali/fp'
  export default setDay
}

declare module 'date-fns-jalaali/fp/setDayOfYear/index' {
  import { setDayOfYear } from 'date-fns-jalaali/fp'
  export default setDayOfYear
}

declare module 'date-fns-jalaali/fp/setDayWithOptions/index' {
  import { setDayWithOptions } from 'date-fns-jalaali/fp'
  export default setDayWithOptions
}

declare module 'date-fns-jalaali/fp/setHours/index' {
  import { setHours } from 'date-fns-jalaali/fp'
  export default setHours
}

declare module 'date-fns-jalaali/fp/setISODay/index' {
  import { setISODay } from 'date-fns-jalaali/fp'
  export default setISODay
}

declare module 'date-fns-jalaali/fp/setISOWeek/index' {
  import { setISOWeek } from 'date-fns-jalaali/fp'
  export default setISOWeek
}

declare module 'date-fns-jalaali/fp/setISOWeekYear/index' {
  import { setISOWeekYear } from 'date-fns-jalaali/fp'
  export default setISOWeekYear
}

declare module 'date-fns-jalaali/fp/setMilliseconds/index' {
  import { setMilliseconds } from 'date-fns-jalaali/fp'
  export default setMilliseconds
}

declare module 'date-fns-jalaali/fp/setMinutes/index' {
  import { setMinutes } from 'date-fns-jalaali/fp'
  export default setMinutes
}

declare module 'date-fns-jalaali/fp/setMonth/index' {
  import { setMonth } from 'date-fns-jalaali/fp'
  export default setMonth
}

declare module 'date-fns-jalaali/fp/setQuarter/index' {
  import { setQuarter } from 'date-fns-jalaali/fp'
  export default setQuarter
}

declare module 'date-fns-jalaali/fp/setSeconds/index' {
  import { setSeconds } from 'date-fns-jalaali/fp'
  export default setSeconds
}

declare module 'date-fns-jalaali/fp/setWeek/index' {
  import { setWeek } from 'date-fns-jalaali/fp'
  export default setWeek
}

declare module 'date-fns-jalaali/fp/setWeekWithOptions/index' {
  import { setWeekWithOptions } from 'date-fns-jalaali/fp'
  export default setWeekWithOptions
}

declare module 'date-fns-jalaali/fp/setWeekYear/index' {
  import { setWeekYear } from 'date-fns-jalaali/fp'
  export default setWeekYear
}

declare module 'date-fns-jalaali/fp/setWeekYearWithOptions/index' {
  import { setWeekYearWithOptions } from 'date-fns-jalaali/fp'
  export default setWeekYearWithOptions
}

declare module 'date-fns-jalaali/fp/setYear/index' {
  import { setYear } from 'date-fns-jalaali/fp'
  export default setYear
}

declare module 'date-fns-jalaali/fp/startOfDay/index' {
  import { startOfDay } from 'date-fns-jalaali/fp'
  export default startOfDay
}

declare module 'date-fns-jalaali/fp/startOfDecade/index' {
  import { startOfDecade } from 'date-fns-jalaali/fp'
  export default startOfDecade
}

declare module 'date-fns-jalaali/fp/startOfHour/index' {
  import { startOfHour } from 'date-fns-jalaali/fp'
  export default startOfHour
}

declare module 'date-fns-jalaali/fp/startOfISOWeek/index' {
  import { startOfISOWeek } from 'date-fns-jalaali/fp'
  export default startOfISOWeek
}

declare module 'date-fns-jalaali/fp/startOfISOWeekYear/index' {
  import { startOfISOWeekYear } from 'date-fns-jalaali/fp'
  export default startOfISOWeekYear
}

declare module 'date-fns-jalaali/fp/startOfMinute/index' {
  import { startOfMinute } from 'date-fns-jalaali/fp'
  export default startOfMinute
}

declare module 'date-fns-jalaali/fp/startOfMonth/index' {
  import { startOfMonth } from 'date-fns-jalaali/fp'
  export default startOfMonth
}

declare module 'date-fns-jalaali/fp/startOfQuarter/index' {
  import { startOfQuarter } from 'date-fns-jalaali/fp'
  export default startOfQuarter
}

declare module 'date-fns-jalaali/fp/startOfSecond/index' {
  import { startOfSecond } from 'date-fns-jalaali/fp'
  export default startOfSecond
}

declare module 'date-fns-jalaali/fp/startOfWeek/index' {
  import { startOfWeek } from 'date-fns-jalaali/fp'
  export default startOfWeek
}

declare module 'date-fns-jalaali/fp/startOfWeekWithOptions/index' {
  import { startOfWeekWithOptions } from 'date-fns-jalaali/fp'
  export default startOfWeekWithOptions
}

declare module 'date-fns-jalaali/fp/startOfWeekYear/index' {
  import { startOfWeekYear } from 'date-fns-jalaali/fp'
  export default startOfWeekYear
}

declare module 'date-fns-jalaali/fp/startOfWeekYearWithOptions/index' {
  import { startOfWeekYearWithOptions } from 'date-fns-jalaali/fp'
  export default startOfWeekYearWithOptions
}

declare module 'date-fns-jalaali/fp/startOfYear/index' {
  import { startOfYear } from 'date-fns-jalaali/fp'
  export default startOfYear
}

declare module 'date-fns-jalaali/fp/sub/index' {
  import { sub } from 'date-fns-jalaali/fp'
  export default sub
}

declare module 'date-fns-jalaali/fp/subBusinessDays/index' {
  import { subBusinessDays } from 'date-fns-jalaali/fp'
  export default subBusinessDays
}

declare module 'date-fns-jalaali/fp/subDays/index' {
  import { subDays } from 'date-fns-jalaali/fp'
  export default subDays
}

declare module 'date-fns-jalaali/fp/subHours/index' {
  import { subHours } from 'date-fns-jalaali/fp'
  export default subHours
}

declare module 'date-fns-jalaali/fp/subISOWeekYears/index' {
  import { subISOWeekYears } from 'date-fns-jalaali/fp'
  export default subISOWeekYears
}

declare module 'date-fns-jalaali/fp/subMilliseconds/index' {
  import { subMilliseconds } from 'date-fns-jalaali/fp'
  export default subMilliseconds
}

declare module 'date-fns-jalaali/fp/subMinutes/index' {
  import { subMinutes } from 'date-fns-jalaali/fp'
  export default subMinutes
}

declare module 'date-fns-jalaali/fp/subMonths/index' {
  import { subMonths } from 'date-fns-jalaali/fp'
  export default subMonths
}

declare module 'date-fns-jalaali/fp/subQuarters/index' {
  import { subQuarters } from 'date-fns-jalaali/fp'
  export default subQuarters
}

declare module 'date-fns-jalaali/fp/subSeconds/index' {
  import { subSeconds } from 'date-fns-jalaali/fp'
  export default subSeconds
}

declare module 'date-fns-jalaali/fp/subWeeks/index' {
  import { subWeeks } from 'date-fns-jalaali/fp'
  export default subWeeks
}

declare module 'date-fns-jalaali/fp/subYears/index' {
  import { subYears } from 'date-fns-jalaali/fp'
  export default subYears
}

declare module 'date-fns-jalaali/fp/toDate/index' {
  import { toDate } from 'date-fns-jalaali/fp'
  export default toDate
}

declare module 'date-fns-jalaali/fp/add/index.js' {
  import { add } from 'date-fns-jalaali/fp'
  export default add
}

declare module 'date-fns-jalaali/fp/addBusinessDays/index.js' {
  import { addBusinessDays } from 'date-fns-jalaali/fp'
  export default addBusinessDays
}

declare module 'date-fns-jalaali/fp/addDays/index.js' {
  import { addDays } from 'date-fns-jalaali/fp'
  export default addDays
}

declare module 'date-fns-jalaali/fp/addHours/index.js' {
  import { addHours } from 'date-fns-jalaali/fp'
  export default addHours
}

declare module 'date-fns-jalaali/fp/addISOWeekYears/index.js' {
  import { addISOWeekYears } from 'date-fns-jalaali/fp'
  export default addISOWeekYears
}

declare module 'date-fns-jalaali/fp/addMilliseconds/index.js' {
  import { addMilliseconds } from 'date-fns-jalaali/fp'
  export default addMilliseconds
}

declare module 'date-fns-jalaali/fp/addMinutes/index.js' {
  import { addMinutes } from 'date-fns-jalaali/fp'
  export default addMinutes
}

declare module 'date-fns-jalaali/fp/addMonths/index.js' {
  import { addMonths } from 'date-fns-jalaali/fp'
  export default addMonths
}

declare module 'date-fns-jalaali/fp/addQuarters/index.js' {
  import { addQuarters } from 'date-fns-jalaali/fp'
  export default addQuarters
}

declare module 'date-fns-jalaali/fp/addSeconds/index.js' {
  import { addSeconds } from 'date-fns-jalaali/fp'
  export default addSeconds
}

declare module 'date-fns-jalaali/fp/addWeeks/index.js' {
  import { addWeeks } from 'date-fns-jalaali/fp'
  export default addWeeks
}

declare module 'date-fns-jalaali/fp/addYears/index.js' {
  import { addYears } from 'date-fns-jalaali/fp'
  export default addYears
}

declare module 'date-fns-jalaali/fp/areIntervalsOverlapping/index.js' {
  import { areIntervalsOverlapping } from 'date-fns-jalaali/fp'
  export default areIntervalsOverlapping
}

declare module 'date-fns-jalaali/fp/areIntervalsOverlappingWithOptions/index.js' {
  import { areIntervalsOverlappingWithOptions } from 'date-fns-jalaali/fp'
  export default areIntervalsOverlappingWithOptions
}

declare module 'date-fns-jalaali/fp/closestIndexTo/index.js' {
  import { closestIndexTo } from 'date-fns-jalaali/fp'
  export default closestIndexTo
}

declare module 'date-fns-jalaali/fp/closestTo/index.js' {
  import { closestTo } from 'date-fns-jalaali/fp'
  export default closestTo
}

declare module 'date-fns-jalaali/fp/compareAsc/index.js' {
  import { compareAsc } from 'date-fns-jalaali/fp'
  export default compareAsc
}

declare module 'date-fns-jalaali/fp/compareDesc/index.js' {
  import { compareDesc } from 'date-fns-jalaali/fp'
  export default compareDesc
}

declare module 'date-fns-jalaali/fp/differenceInBusinessDays/index.js' {
  import { differenceInBusinessDays } from 'date-fns-jalaali/fp'
  export default differenceInBusinessDays
}

declare module 'date-fns-jalaali/fp/differenceInCalendarDays/index.js' {
  import { differenceInCalendarDays } from 'date-fns-jalaali/fp'
  export default differenceInCalendarDays
}

declare module 'date-fns-jalaali/fp/differenceInCalendarISOWeeks/index.js' {
  import { differenceInCalendarISOWeeks } from 'date-fns-jalaali/fp'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns-jalaali/fp/differenceInCalendarISOWeekYears/index.js' {
  import { differenceInCalendarISOWeekYears } from 'date-fns-jalaali/fp'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns-jalaali/fp/differenceInCalendarMonths/index.js' {
  import { differenceInCalendarMonths } from 'date-fns-jalaali/fp'
  export default differenceInCalendarMonths
}

declare module 'date-fns-jalaali/fp/differenceInCalendarQuarters/index.js' {
  import { differenceInCalendarQuarters } from 'date-fns-jalaali/fp'
  export default differenceInCalendarQuarters
}

declare module 'date-fns-jalaali/fp/differenceInCalendarWeeks/index.js' {
  import { differenceInCalendarWeeks } from 'date-fns-jalaali/fp'
  export default differenceInCalendarWeeks
}

declare module 'date-fns-jalaali/fp/differenceInCalendarWeeksWithOptions/index.js' {
  import { differenceInCalendarWeeksWithOptions } from 'date-fns-jalaali/fp'
  export default differenceInCalendarWeeksWithOptions
}

declare module 'date-fns-jalaali/fp/differenceInCalendarYears/index.js' {
  import { differenceInCalendarYears } from 'date-fns-jalaali/fp'
  export default differenceInCalendarYears
}

declare module 'date-fns-jalaali/fp/differenceInDays/index.js' {
  import { differenceInDays } from 'date-fns-jalaali/fp'
  export default differenceInDays
}

declare module 'date-fns-jalaali/fp/differenceInHours/index.js' {
  import { differenceInHours } from 'date-fns-jalaali/fp'
  export default differenceInHours
}

declare module 'date-fns-jalaali/fp/differenceInISOWeekYears/index.js' {
  import { differenceInISOWeekYears } from 'date-fns-jalaali/fp'
  export default differenceInISOWeekYears
}

declare module 'date-fns-jalaali/fp/differenceInMilliseconds/index.js' {
  import { differenceInMilliseconds } from 'date-fns-jalaali/fp'
  export default differenceInMilliseconds
}

declare module 'date-fns-jalaali/fp/differenceInMinutes/index.js' {
  import { differenceInMinutes } from 'date-fns-jalaali/fp'
  export default differenceInMinutes
}

declare module 'date-fns-jalaali/fp/differenceInMonths/index.js' {
  import { differenceInMonths } from 'date-fns-jalaali/fp'
  export default differenceInMonths
}

declare module 'date-fns-jalaali/fp/differenceInQuarters/index.js' {
  import { differenceInQuarters } from 'date-fns-jalaali/fp'
  export default differenceInQuarters
}

declare module 'date-fns-jalaali/fp/differenceInSeconds/index.js' {
  import { differenceInSeconds } from 'date-fns-jalaali/fp'
  export default differenceInSeconds
}

declare module 'date-fns-jalaali/fp/differenceInWeeks/index.js' {
  import { differenceInWeeks } from 'date-fns-jalaali/fp'
  export default differenceInWeeks
}

declare module 'date-fns-jalaali/fp/differenceInYears/index.js' {
  import { differenceInYears } from 'date-fns-jalaali/fp'
  export default differenceInYears
}

declare module 'date-fns-jalaali/fp/eachDayOfInterval/index.js' {
  import { eachDayOfInterval } from 'date-fns-jalaali/fp'
  export default eachDayOfInterval
}

declare module 'date-fns-jalaali/fp/eachDayOfIntervalWithOptions/index.js' {
  import { eachDayOfIntervalWithOptions } from 'date-fns-jalaali/fp'
  export default eachDayOfIntervalWithOptions
}

declare module 'date-fns-jalaali/fp/eachMonthOfInterval/index.js' {
  import { eachMonthOfInterval } from 'date-fns-jalaali/fp'
  export default eachMonthOfInterval
}

declare module 'date-fns-jalaali/fp/eachWeekendOfInterval/index.js' {
  import { eachWeekendOfInterval } from 'date-fns-jalaali/fp'
  export default eachWeekendOfInterval
}

declare module 'date-fns-jalaali/fp/eachWeekendOfMonth/index.js' {
  import { eachWeekendOfMonth } from 'date-fns-jalaali/fp'
  export default eachWeekendOfMonth
}

declare module 'date-fns-jalaali/fp/eachWeekendOfYear/index.js' {
  import { eachWeekendOfYear } from 'date-fns-jalaali/fp'
  export default eachWeekendOfYear
}

declare module 'date-fns-jalaali/fp/eachWeekOfInterval/index.js' {
  import { eachWeekOfInterval } from 'date-fns-jalaali/fp'
  export default eachWeekOfInterval
}

declare module 'date-fns-jalaali/fp/eachWeekOfIntervalWithOptions/index.js' {
  import { eachWeekOfIntervalWithOptions } from 'date-fns-jalaali/fp'
  export default eachWeekOfIntervalWithOptions
}

declare module 'date-fns-jalaali/fp/eachYearOfInterval/index.js' {
  import { eachYearOfInterval } from 'date-fns-jalaali/fp'
  export default eachYearOfInterval
}

declare module 'date-fns-jalaali/fp/endOfDay/index.js' {
  import { endOfDay } from 'date-fns-jalaali/fp'
  export default endOfDay
}

declare module 'date-fns-jalaali/fp/endOfDecade/index.js' {
  import { endOfDecade } from 'date-fns-jalaali/fp'
  export default endOfDecade
}

declare module 'date-fns-jalaali/fp/endOfDecadeWithOptions/index.js' {
  import { endOfDecadeWithOptions } from 'date-fns-jalaali/fp'
  export default endOfDecadeWithOptions
}

declare module 'date-fns-jalaali/fp/endOfHour/index.js' {
  import { endOfHour } from 'date-fns-jalaali/fp'
  export default endOfHour
}

declare module 'date-fns-jalaali/fp/endOfISOWeek/index.js' {
  import { endOfISOWeek } from 'date-fns-jalaali/fp'
  export default endOfISOWeek
}

declare module 'date-fns-jalaali/fp/endOfISOWeekYear/index.js' {
  import { endOfISOWeekYear } from 'date-fns-jalaali/fp'
  export default endOfISOWeekYear
}

declare module 'date-fns-jalaali/fp/endOfMinute/index.js' {
  import { endOfMinute } from 'date-fns-jalaali/fp'
  export default endOfMinute
}

declare module 'date-fns-jalaali/fp/endOfMonth/index.js' {
  import { endOfMonth } from 'date-fns-jalaali/fp'
  export default endOfMonth
}

declare module 'date-fns-jalaali/fp/endOfQuarter/index.js' {
  import { endOfQuarter } from 'date-fns-jalaali/fp'
  export default endOfQuarter
}

declare module 'date-fns-jalaali/fp/endOfSecond/index.js' {
  import { endOfSecond } from 'date-fns-jalaali/fp'
  export default endOfSecond
}

declare module 'date-fns-jalaali/fp/endOfWeek/index.js' {
  import { endOfWeek } from 'date-fns-jalaali/fp'
  export default endOfWeek
}

declare module 'date-fns-jalaali/fp/endOfWeekWithOptions/index.js' {
  import { endOfWeekWithOptions } from 'date-fns-jalaali/fp'
  export default endOfWeekWithOptions
}

declare module 'date-fns-jalaali/fp/endOfYear/index.js' {
  import { endOfYear } from 'date-fns-jalaali/fp'
  export default endOfYear
}

declare module 'date-fns-jalaali/fp/format/index.js' {
  import { format } from 'date-fns-jalaali/fp'
  export default format
}

declare module 'date-fns-jalaali/fp/formatDistance/index.js' {
  import { formatDistance } from 'date-fns-jalaali/fp'
  export default formatDistance
}

declare module 'date-fns-jalaali/fp/formatDistanceStrict/index.js' {
  import { formatDistanceStrict } from 'date-fns-jalaali/fp'
  export default formatDistanceStrict
}

declare module 'date-fns-jalaali/fp/formatDistanceStrictWithOptions/index.js' {
  import { formatDistanceStrictWithOptions } from 'date-fns-jalaali/fp'
  export default formatDistanceStrictWithOptions
}

declare module 'date-fns-jalaali/fp/formatDistanceWithOptions/index.js' {
  import { formatDistanceWithOptions } from 'date-fns-jalaali/fp'
  export default formatDistanceWithOptions
}

declare module 'date-fns-jalaali/fp/formatISO/index.js' {
  import { formatISO } from 'date-fns-jalaali/fp'
  export default formatISO
}

declare module 'date-fns-jalaali/fp/formatISO9075/index.js' {
  import { formatISO9075 } from 'date-fns-jalaali/fp'
  export default formatISO9075
}

declare module 'date-fns-jalaali/fp/formatISO9075WithOptions/index.js' {
  import { formatISO9075WithOptions } from 'date-fns-jalaali/fp'
  export default formatISO9075WithOptions
}

declare module 'date-fns-jalaali/fp/formatISODuration/index.js' {
  import { formatISODuration } from 'date-fns-jalaali/fp'
  export default formatISODuration
}

declare module 'date-fns-jalaali/fp/formatISOWithOptions/index.js' {
  import { formatISOWithOptions } from 'date-fns-jalaali/fp'
  export default formatISOWithOptions
}

declare module 'date-fns-jalaali/fp/formatRelative/index.js' {
  import { formatRelative } from 'date-fns-jalaali/fp'
  export default formatRelative
}

declare module 'date-fns-jalaali/fp/formatRelativeWithOptions/index.js' {
  import { formatRelativeWithOptions } from 'date-fns-jalaali/fp'
  export default formatRelativeWithOptions
}

declare module 'date-fns-jalaali/fp/formatRFC3339/index.js' {
  import { formatRFC3339 } from 'date-fns-jalaali/fp'
  export default formatRFC3339
}

declare module 'date-fns-jalaali/fp/formatRFC3339WithOptions/index.js' {
  import { formatRFC3339WithOptions } from 'date-fns-jalaali/fp'
  export default formatRFC3339WithOptions
}

declare module 'date-fns-jalaali/fp/formatRFC7231/index.js' {
  import { formatRFC7231 } from 'date-fns-jalaali/fp'
  export default formatRFC7231
}

declare module 'date-fns-jalaali/fp/formatWithOptions/index.js' {
  import { formatWithOptions } from 'date-fns-jalaali/fp'
  export default formatWithOptions
}

declare module 'date-fns-jalaali/fp/fromUnixTime/index.js' {
  import { fromUnixTime } from 'date-fns-jalaali/fp'
  export default fromUnixTime
}

declare module 'date-fns-jalaali/fp/getDate/index.js' {
  import { getDate } from 'date-fns-jalaali/fp'
  export default getDate
}

declare module 'date-fns-jalaali/fp/getDay/index.js' {
  import { getDay } from 'date-fns-jalaali/fp'
  export default getDay
}

declare module 'date-fns-jalaali/fp/getDayOfYear/index.js' {
  import { getDayOfYear } from 'date-fns-jalaali/fp'
  export default getDayOfYear
}

declare module 'date-fns-jalaali/fp/getDaysInMonth/index.js' {
  import { getDaysInMonth } from 'date-fns-jalaali/fp'
  export default getDaysInMonth
}

declare module 'date-fns-jalaali/fp/getDaysInYear/index.js' {
  import { getDaysInYear } from 'date-fns-jalaali/fp'
  export default getDaysInYear
}

declare module 'date-fns-jalaali/fp/getDecade/index.js' {
  import { getDecade } from 'date-fns-jalaali/fp'
  export default getDecade
}

declare module 'date-fns-jalaali/fp/getHours/index.js' {
  import { getHours } from 'date-fns-jalaali/fp'
  export default getHours
}

declare module 'date-fns-jalaali/fp/getISODay/index.js' {
  import { getISODay } from 'date-fns-jalaali/fp'
  export default getISODay
}

declare module 'date-fns-jalaali/fp/getISOWeek/index.js' {
  import { getISOWeek } from 'date-fns-jalaali/fp'
  export default getISOWeek
}

declare module 'date-fns-jalaali/fp/getISOWeeksInYear/index.js' {
  import { getISOWeeksInYear } from 'date-fns-jalaali/fp'
  export default getISOWeeksInYear
}

declare module 'date-fns-jalaali/fp/getISOWeekYear/index.js' {
  import { getISOWeekYear } from 'date-fns-jalaali/fp'
  export default getISOWeekYear
}

declare module 'date-fns-jalaali/fp/getMilliseconds/index.js' {
  import { getMilliseconds } from 'date-fns-jalaali/fp'
  export default getMilliseconds
}

declare module 'date-fns-jalaali/fp/getMinutes/index.js' {
  import { getMinutes } from 'date-fns-jalaali/fp'
  export default getMinutes
}

declare module 'date-fns-jalaali/fp/getMonth/index.js' {
  import { getMonth } from 'date-fns-jalaali/fp'
  export default getMonth
}

declare module 'date-fns-jalaali/fp/getOverlappingDaysInIntervals/index.js' {
  import { getOverlappingDaysInIntervals } from 'date-fns-jalaali/fp'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns-jalaali/fp/getQuarter/index.js' {
  import { getQuarter } from 'date-fns-jalaali/fp'
  export default getQuarter
}

declare module 'date-fns-jalaali/fp/getSeconds/index.js' {
  import { getSeconds } from 'date-fns-jalaali/fp'
  export default getSeconds
}

declare module 'date-fns-jalaali/fp/getTime/index.js' {
  import { getTime } from 'date-fns-jalaali/fp'
  export default getTime
}

declare module 'date-fns-jalaali/fp/getUnixTime/index.js' {
  import { getUnixTime } from 'date-fns-jalaali/fp'
  export default getUnixTime
}

declare module 'date-fns-jalaali/fp/getWeek/index.js' {
  import { getWeek } from 'date-fns-jalaali/fp'
  export default getWeek
}

declare module 'date-fns-jalaali/fp/getWeekOfMonth/index.js' {
  import { getWeekOfMonth } from 'date-fns-jalaali/fp'
  export default getWeekOfMonth
}

declare module 'date-fns-jalaali/fp/getWeekOfMonthWithOptions/index.js' {
  import { getWeekOfMonthWithOptions } from 'date-fns-jalaali/fp'
  export default getWeekOfMonthWithOptions
}

declare module 'date-fns-jalaali/fp/getWeeksInMonth/index.js' {
  import { getWeeksInMonth } from 'date-fns-jalaali/fp'
  export default getWeeksInMonth
}

declare module 'date-fns-jalaali/fp/getWeeksInMonthWithOptions/index.js' {
  import { getWeeksInMonthWithOptions } from 'date-fns-jalaali/fp'
  export default getWeeksInMonthWithOptions
}

declare module 'date-fns-jalaali/fp/getWeekWithOptions/index.js' {
  import { getWeekWithOptions } from 'date-fns-jalaali/fp'
  export default getWeekWithOptions
}

declare module 'date-fns-jalaali/fp/getWeekYear/index.js' {
  import { getWeekYear } from 'date-fns-jalaali/fp'
  export default getWeekYear
}

declare module 'date-fns-jalaali/fp/getWeekYearWithOptions/index.js' {
  import { getWeekYearWithOptions } from 'date-fns-jalaali/fp'
  export default getWeekYearWithOptions
}

declare module 'date-fns-jalaali/fp/getYear/index.js' {
  import { getYear } from 'date-fns-jalaali/fp'
  export default getYear
}

declare module 'date-fns-jalaali/fp/intervalToDuration/index.js' {
  import { intervalToDuration } from 'date-fns-jalaali/fp'
  export default intervalToDuration
}

declare module 'date-fns-jalaali/fp/isAfter/index.js' {
  import { isAfter } from 'date-fns-jalaali/fp'
  export default isAfter
}

declare module 'date-fns-jalaali/fp/isBefore/index.js' {
  import { isBefore } from 'date-fns-jalaali/fp'
  export default isBefore
}

declare module 'date-fns-jalaali/fp/isDate/index.js' {
  import { isDate } from 'date-fns-jalaali/fp'
  export default isDate
}

declare module 'date-fns-jalaali/fp/isEqual/index.js' {
  import { isEqual } from 'date-fns-jalaali/fp'
  export default isEqual
}

declare module 'date-fns-jalaali/fp/isExists/index.js' {
  import { isExists } from 'date-fns-jalaali/fp'
  export default isExists
}

declare module 'date-fns-jalaali/fp/isFirstDayOfMonth/index.js' {
  import { isFirstDayOfMonth } from 'date-fns-jalaali/fp'
  export default isFirstDayOfMonth
}

declare module 'date-fns-jalaali/fp/isFriday/index.js' {
  import { isFriday } from 'date-fns-jalaali/fp'
  export default isFriday
}

declare module 'date-fns-jalaali/fp/isLastDayOfMonth/index.js' {
  import { isLastDayOfMonth } from 'date-fns-jalaali/fp'
  export default isLastDayOfMonth
}

declare module 'date-fns-jalaali/fp/isLeapYear/index.js' {
  import { isLeapYear } from 'date-fns-jalaali/fp'
  export default isLeapYear
}

declare module 'date-fns-jalaali/fp/isMonday/index.js' {
  import { isMonday } from 'date-fns-jalaali/fp'
  export default isMonday
}

declare module 'date-fns-jalaali/fp/isSameDay/index.js' {
  import { isSameDay } from 'date-fns-jalaali/fp'
  export default isSameDay
}

declare module 'date-fns-jalaali/fp/isSameHour/index.js' {
  import { isSameHour } from 'date-fns-jalaali/fp'
  export default isSameHour
}

declare module 'date-fns-jalaali/fp/isSameISOWeek/index.js' {
  import { isSameISOWeek } from 'date-fns-jalaali/fp'
  export default isSameISOWeek
}

declare module 'date-fns-jalaali/fp/isSameISOWeekYear/index.js' {
  import { isSameISOWeekYear } from 'date-fns-jalaali/fp'
  export default isSameISOWeekYear
}

declare module 'date-fns-jalaali/fp/isSameMinute/index.js' {
  import { isSameMinute } from 'date-fns-jalaali/fp'
  export default isSameMinute
}

declare module 'date-fns-jalaali/fp/isSameMonth/index.js' {
  import { isSameMonth } from 'date-fns-jalaali/fp'
  export default isSameMonth
}

declare module 'date-fns-jalaali/fp/isSameQuarter/index.js' {
  import { isSameQuarter } from 'date-fns-jalaali/fp'
  export default isSameQuarter
}

declare module 'date-fns-jalaali/fp/isSameSecond/index.js' {
  import { isSameSecond } from 'date-fns-jalaali/fp'
  export default isSameSecond
}

declare module 'date-fns-jalaali/fp/isSameWeek/index.js' {
  import { isSameWeek } from 'date-fns-jalaali/fp'
  export default isSameWeek
}

declare module 'date-fns-jalaali/fp/isSameWeekWithOptions/index.js' {
  import { isSameWeekWithOptions } from 'date-fns-jalaali/fp'
  export default isSameWeekWithOptions
}

declare module 'date-fns-jalaali/fp/isSameYear/index.js' {
  import { isSameYear } from 'date-fns-jalaali/fp'
  export default isSameYear
}

declare module 'date-fns-jalaali/fp/isSaturday/index.js' {
  import { isSaturday } from 'date-fns-jalaali/fp'
  export default isSaturday
}

declare module 'date-fns-jalaali/fp/isSunday/index.js' {
  import { isSunday } from 'date-fns-jalaali/fp'
  export default isSunday
}

declare module 'date-fns-jalaali/fp/isThursday/index.js' {
  import { isThursday } from 'date-fns-jalaali/fp'
  export default isThursday
}

declare module 'date-fns-jalaali/fp/isTuesday/index.js' {
  import { isTuesday } from 'date-fns-jalaali/fp'
  export default isTuesday
}

declare module 'date-fns-jalaali/fp/isValid/index.js' {
  import { isValid } from 'date-fns-jalaali/fp'
  export default isValid
}

declare module 'date-fns-jalaali/fp/isWednesday/index.js' {
  import { isWednesday } from 'date-fns-jalaali/fp'
  export default isWednesday
}

declare module 'date-fns-jalaali/fp/isWeekend/index.js' {
  import { isWeekend } from 'date-fns-jalaali/fp'
  export default isWeekend
}

declare module 'date-fns-jalaali/fp/isWithinInterval/index.js' {
  import { isWithinInterval } from 'date-fns-jalaali/fp'
  export default isWithinInterval
}

declare module 'date-fns-jalaali/fp/lastDayOfDecade/index.js' {
  import { lastDayOfDecade } from 'date-fns-jalaali/fp'
  export default lastDayOfDecade
}

declare module 'date-fns-jalaali/fp/lastDayOfISOWeek/index.js' {
  import { lastDayOfISOWeek } from 'date-fns-jalaali/fp'
  export default lastDayOfISOWeek
}

declare module 'date-fns-jalaali/fp/lastDayOfISOWeekYear/index.js' {
  import { lastDayOfISOWeekYear } from 'date-fns-jalaali/fp'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns-jalaali/fp/lastDayOfMonth/index.js' {
  import { lastDayOfMonth } from 'date-fns-jalaali/fp'
  export default lastDayOfMonth
}

declare module 'date-fns-jalaali/fp/lastDayOfQuarter/index.js' {
  import { lastDayOfQuarter } from 'date-fns-jalaali/fp'
  export default lastDayOfQuarter
}

declare module 'date-fns-jalaali/fp/lastDayOfQuarterWithOptions/index.js' {
  import { lastDayOfQuarterWithOptions } from 'date-fns-jalaali/fp'
  export default lastDayOfQuarterWithOptions
}

declare module 'date-fns-jalaali/fp/lastDayOfWeek/index.js' {
  import { lastDayOfWeek } from 'date-fns-jalaali/fp'
  export default lastDayOfWeek
}

declare module 'date-fns-jalaali/fp/lastDayOfWeekWithOptions/index.js' {
  import { lastDayOfWeekWithOptions } from 'date-fns-jalaali/fp'
  export default lastDayOfWeekWithOptions
}

declare module 'date-fns-jalaali/fp/lastDayOfYear/index.js' {
  import { lastDayOfYear } from 'date-fns-jalaali/fp'
  export default lastDayOfYear
}

declare module 'date-fns-jalaali/fp/lightFormat/index.js' {
  import { lightFormat } from 'date-fns-jalaali/fp'
  export default lightFormat
}

declare module 'date-fns-jalaali/fp/max/index.js' {
  import { max } from 'date-fns-jalaali/fp'
  export default max
}

declare module 'date-fns-jalaali/fp/min/index.js' {
  import { min } from 'date-fns-jalaali/fp'
  export default min
}

declare module 'date-fns-jalaali/fp/parse/index.js' {
  import { parse } from 'date-fns-jalaali/fp'
  export default parse
}

declare module 'date-fns-jalaali/fp/parseISO/index.js' {
  import { parseISO } from 'date-fns-jalaali/fp'
  export default parseISO
}

declare module 'date-fns-jalaali/fp/parseISOWithOptions/index.js' {
  import { parseISOWithOptions } from 'date-fns-jalaali/fp'
  export default parseISOWithOptions
}

declare module 'date-fns-jalaali/fp/parseJSON/index.js' {
  import { parseJSON } from 'date-fns-jalaali/fp'
  export default parseJSON
}

declare module 'date-fns-jalaali/fp/parseWithOptions/index.js' {
  import { parseWithOptions } from 'date-fns-jalaali/fp'
  export default parseWithOptions
}

declare module 'date-fns-jalaali/fp/roundToNearestMinutes/index.js' {
  import { roundToNearestMinutes } from 'date-fns-jalaali/fp'
  export default roundToNearestMinutes
}

declare module 'date-fns-jalaali/fp/roundToNearestMinutesWithOptions/index.js' {
  import { roundToNearestMinutesWithOptions } from 'date-fns-jalaali/fp'
  export default roundToNearestMinutesWithOptions
}

declare module 'date-fns-jalaali/fp/set/index.js' {
  import { set } from 'date-fns-jalaali/fp'
  export default set
}

declare module 'date-fns-jalaali/fp/setDate/index.js' {
  import { setDate } from 'date-fns-jalaali/fp'
  export default setDate
}

declare module 'date-fns-jalaali/fp/setDay/index.js' {
  import { setDay } from 'date-fns-jalaali/fp'
  export default setDay
}

declare module 'date-fns-jalaali/fp/setDayOfYear/index.js' {
  import { setDayOfYear } from 'date-fns-jalaali/fp'
  export default setDayOfYear
}

declare module 'date-fns-jalaali/fp/setDayWithOptions/index.js' {
  import { setDayWithOptions } from 'date-fns-jalaali/fp'
  export default setDayWithOptions
}

declare module 'date-fns-jalaali/fp/setHours/index.js' {
  import { setHours } from 'date-fns-jalaali/fp'
  export default setHours
}

declare module 'date-fns-jalaali/fp/setISODay/index.js' {
  import { setISODay } from 'date-fns-jalaali/fp'
  export default setISODay
}

declare module 'date-fns-jalaali/fp/setISOWeek/index.js' {
  import { setISOWeek } from 'date-fns-jalaali/fp'
  export default setISOWeek
}

declare module 'date-fns-jalaali/fp/setISOWeekYear/index.js' {
  import { setISOWeekYear } from 'date-fns-jalaali/fp'
  export default setISOWeekYear
}

declare module 'date-fns-jalaali/fp/setMilliseconds/index.js' {
  import { setMilliseconds } from 'date-fns-jalaali/fp'
  export default setMilliseconds
}

declare module 'date-fns-jalaali/fp/setMinutes/index.js' {
  import { setMinutes } from 'date-fns-jalaali/fp'
  export default setMinutes
}

declare module 'date-fns-jalaali/fp/setMonth/index.js' {
  import { setMonth } from 'date-fns-jalaali/fp'
  export default setMonth
}

declare module 'date-fns-jalaali/fp/setQuarter/index.js' {
  import { setQuarter } from 'date-fns-jalaali/fp'
  export default setQuarter
}

declare module 'date-fns-jalaali/fp/setSeconds/index.js' {
  import { setSeconds } from 'date-fns-jalaali/fp'
  export default setSeconds
}

declare module 'date-fns-jalaali/fp/setWeek/index.js' {
  import { setWeek } from 'date-fns-jalaali/fp'
  export default setWeek
}

declare module 'date-fns-jalaali/fp/setWeekWithOptions/index.js' {
  import { setWeekWithOptions } from 'date-fns-jalaali/fp'
  export default setWeekWithOptions
}

declare module 'date-fns-jalaali/fp/setWeekYear/index.js' {
  import { setWeekYear } from 'date-fns-jalaali/fp'
  export default setWeekYear
}

declare module 'date-fns-jalaali/fp/setWeekYearWithOptions/index.js' {
  import { setWeekYearWithOptions } from 'date-fns-jalaali/fp'
  export default setWeekYearWithOptions
}

declare module 'date-fns-jalaali/fp/setYear/index.js' {
  import { setYear } from 'date-fns-jalaali/fp'
  export default setYear
}

declare module 'date-fns-jalaali/fp/startOfDay/index.js' {
  import { startOfDay } from 'date-fns-jalaali/fp'
  export default startOfDay
}

declare module 'date-fns-jalaali/fp/startOfDecade/index.js' {
  import { startOfDecade } from 'date-fns-jalaali/fp'
  export default startOfDecade
}

declare module 'date-fns-jalaali/fp/startOfHour/index.js' {
  import { startOfHour } from 'date-fns-jalaali/fp'
  export default startOfHour
}

declare module 'date-fns-jalaali/fp/startOfISOWeek/index.js' {
  import { startOfISOWeek } from 'date-fns-jalaali/fp'
  export default startOfISOWeek
}

declare module 'date-fns-jalaali/fp/startOfISOWeekYear/index.js' {
  import { startOfISOWeekYear } from 'date-fns-jalaali/fp'
  export default startOfISOWeekYear
}

declare module 'date-fns-jalaali/fp/startOfMinute/index.js' {
  import { startOfMinute } from 'date-fns-jalaali/fp'
  export default startOfMinute
}

declare module 'date-fns-jalaali/fp/startOfMonth/index.js' {
  import { startOfMonth } from 'date-fns-jalaali/fp'
  export default startOfMonth
}

declare module 'date-fns-jalaali/fp/startOfQuarter/index.js' {
  import { startOfQuarter } from 'date-fns-jalaali/fp'
  export default startOfQuarter
}

declare module 'date-fns-jalaali/fp/startOfSecond/index.js' {
  import { startOfSecond } from 'date-fns-jalaali/fp'
  export default startOfSecond
}

declare module 'date-fns-jalaali/fp/startOfWeek/index.js' {
  import { startOfWeek } from 'date-fns-jalaali/fp'
  export default startOfWeek
}

declare module 'date-fns-jalaali/fp/startOfWeekWithOptions/index.js' {
  import { startOfWeekWithOptions } from 'date-fns-jalaali/fp'
  export default startOfWeekWithOptions
}

declare module 'date-fns-jalaali/fp/startOfWeekYear/index.js' {
  import { startOfWeekYear } from 'date-fns-jalaali/fp'
  export default startOfWeekYear
}

declare module 'date-fns-jalaali/fp/startOfWeekYearWithOptions/index.js' {
  import { startOfWeekYearWithOptions } from 'date-fns-jalaali/fp'
  export default startOfWeekYearWithOptions
}

declare module 'date-fns-jalaali/fp/startOfYear/index.js' {
  import { startOfYear } from 'date-fns-jalaali/fp'
  export default startOfYear
}

declare module 'date-fns-jalaali/fp/sub/index.js' {
  import { sub } from 'date-fns-jalaali/fp'
  export default sub
}

declare module 'date-fns-jalaali/fp/subBusinessDays/index.js' {
  import { subBusinessDays } from 'date-fns-jalaali/fp'
  export default subBusinessDays
}

declare module 'date-fns-jalaali/fp/subDays/index.js' {
  import { subDays } from 'date-fns-jalaali/fp'
  export default subDays
}

declare module 'date-fns-jalaali/fp/subHours/index.js' {
  import { subHours } from 'date-fns-jalaali/fp'
  export default subHours
}

declare module 'date-fns-jalaali/fp/subISOWeekYears/index.js' {
  import { subISOWeekYears } from 'date-fns-jalaali/fp'
  export default subISOWeekYears
}

declare module 'date-fns-jalaali/fp/subMilliseconds/index.js' {
  import { subMilliseconds } from 'date-fns-jalaali/fp'
  export default subMilliseconds
}

declare module 'date-fns-jalaali/fp/subMinutes/index.js' {
  import { subMinutes } from 'date-fns-jalaali/fp'
  export default subMinutes
}

declare module 'date-fns-jalaali/fp/subMonths/index.js' {
  import { subMonths } from 'date-fns-jalaali/fp'
  export default subMonths
}

declare module 'date-fns-jalaali/fp/subQuarters/index.js' {
  import { subQuarters } from 'date-fns-jalaali/fp'
  export default subQuarters
}

declare module 'date-fns-jalaali/fp/subSeconds/index.js' {
  import { subSeconds } from 'date-fns-jalaali/fp'
  export default subSeconds
}

declare module 'date-fns-jalaali/fp/subWeeks/index.js' {
  import { subWeeks } from 'date-fns-jalaali/fp'
  export default subWeeks
}

declare module 'date-fns-jalaali/fp/subYears/index.js' {
  import { subYears } from 'date-fns-jalaali/fp'
  export default subYears
}

declare module 'date-fns-jalaali/fp/toDate/index.js' {
  import { toDate } from 'date-fns-jalaali/fp'
  export default toDate
}

// ECMAScript Module Functions

declare module 'date-fns-jalaali/esm' {
  function add(date: Date | number, duration: Duration): Date
  namespace add {}

  function addBusinessDays(date: Date | number, amount: number): Date
  namespace addBusinessDays {}

  function addDays(date: Date | number, amount: number): Date
  namespace addDays {}

  function addHours(date: Date | number, amount: number): Date
  namespace addHours {}

  function addISOWeekYears(date: Date | number, amount: number): Date
  namespace addISOWeekYears {}

  function addMilliseconds(date: Date | number, amount: number): Date
  namespace addMilliseconds {}

  function addMinutes(date: Date | number, amount: number): Date
  namespace addMinutes {}

  function addMonths(date: Date | number, amount: number): Date
  namespace addMonths {}

  function addQuarters(date: Date | number, amount: number): Date
  namespace addQuarters {}

  function addSeconds(date: Date | number, amount: number): Date
  namespace addSeconds {}

  function addWeeks(date: Date | number, amount: number): Date
  namespace addWeeks {}

  function addYears(date: Date | number, amount: number): Date
  namespace addYears {}

  function areIntervalsOverlapping(
    intervalLeft: Interval,
    intervalRight: Interval,
    options?: {
      inclusive?: boolean
    }
  ): boolean
  namespace areIntervalsOverlapping {}

  function closestIndexTo(
    dateToCompare: Date | number,
    datesArray: (Date | number)[]
  ): number
  namespace closestIndexTo {}

  function closestTo(
    dateToCompare: Date | number,
    datesArray: (Date | number)[]
  ): Date
  namespace closestTo {}

  function compareAsc(dateLeft: Date | number, dateRight: Date | number): number
  namespace compareAsc {}

  function compareDesc(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace compareDesc {}

  function differenceInBusinessDays(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInBusinessDays {}

  function differenceInCalendarDays(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarDays {}

  function differenceInCalendarISOWeeks(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarISOWeeks {}

  function differenceInCalendarISOWeekYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarISOWeekYears {}

  function differenceInCalendarMonths(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarMonths {}

  function differenceInCalendarQuarters(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarQuarters {}

  function differenceInCalendarWeeks(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): number
  namespace differenceInCalendarWeeks {}

  function differenceInCalendarYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarYears {}

  function differenceInDays(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInDays {}

  function differenceInHours(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInHours {}

  function differenceInISOWeekYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInISOWeekYears {}

  function differenceInMilliseconds(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInMilliseconds {}

  function differenceInMinutes(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInMinutes {}

  function differenceInMonths(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInMonths {}

  function differenceInQuarters(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInQuarters {}

  function differenceInSeconds(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInSeconds {}

  function differenceInWeeks(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInWeeks {}

  function differenceInYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInYears {}

  function eachDayOfInterval(
    interval: Interval,
    options?: {
      step?: number
    }
  ): Date[]
  namespace eachDayOfInterval {}

  function eachMonthOfInterval(interval: Interval): Date[]
  namespace eachMonthOfInterval {}

  function eachWeekendOfInterval(interval: Interval): Date[]
  namespace eachWeekendOfInterval {}

  function eachWeekendOfMonth(date: Date | number): Date[]
  namespace eachWeekendOfMonth {}

  function eachWeekendOfYear(date: Date | number): Date[]
  namespace eachWeekendOfYear {}

  function eachWeekOfInterval(
    interval: Interval,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date[]
  namespace eachWeekOfInterval {}

  function eachYearOfInterval(interval: Interval): Date[]
  namespace eachYearOfInterval {}

  function endOfDay(date: Date | number): Date
  namespace endOfDay {}

  function endOfDecade(
    date: Date | number,
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date
  namespace endOfDecade {}

  function endOfHour(date: Date | number): Date
  namespace endOfHour {}

  function endOfISOWeek(date: Date | number): Date
  namespace endOfISOWeek {}

  function endOfISOWeekYear(date: Date | number): Date
  namespace endOfISOWeekYear {}

  function endOfMinute(date: Date | number): Date
  namespace endOfMinute {}

  function endOfMonth(date: Date | number): Date
  namespace endOfMonth {}

  function endOfQuarter(date: Date | number): Date
  namespace endOfQuarter {}

  function endOfSecond(date: Date | number): Date
  namespace endOfSecond {}

  function endOfToday(): Date
  namespace endOfToday {}

  function endOfTomorrow(): Date
  namespace endOfTomorrow {}

  function endOfWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date
  namespace endOfWeek {}

  function endOfYear(date: Date | number): Date
  namespace endOfYear {}

  function endOfYesterday(): Date
  namespace endOfYesterday {}

  function format(
    date: Date | number,
    format: string,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: number
      useAdditionalWeekYearTokens?: boolean
      useAdditionalDayOfYearTokens?: boolean
    }
  ): string
  namespace format {}

  function formatDistance(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      includeSeconds?: boolean
      addSuffix?: boolean
      locale?: Locale
    }
  ): string
  namespace formatDistance {}

  function formatDistanceStrict(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      addSuffix?: boolean
      unit?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'
      roundingMethod?: 'floor' | 'ceil' | 'round'
      locale?: Locale
    }
  ): string
  namespace formatDistanceStrict {}

  function formatDistanceToNow(
    date: Date | number,
    options?: {
      includeSeconds?: boolean
      addSuffix?: boolean
      locale?: Locale
    }
  ): string
  namespace formatDistanceToNow {}

  function formatDistanceToNowStrict(
    date: Date | number,
    options?: {
      addSuffix?: boolean
      unit?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'
      roundingMethod?: 'floor' | 'ceil' | 'round'
      locale?: Locale
    }
  ): string
  namespace formatDistanceToNowStrict {}

  function formatISO(
    date: Date | number,
    options?: {
      format?: 'extended' | 'basic'
      representation?: 'complete' | 'date' | 'time'
    }
  ): string
  namespace formatISO {}

  function formatISO9075(
    date: Date | number,
    options?: {
      format?: 'extended' | 'basic'
      representation?: 'complete' | 'date' | 'time'
    }
  ): string
  namespace formatISO9075 {}

  function formatISODuration(duration: Duration): string
  namespace formatISODuration {}

  function formatRelative(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): string
  namespace formatRelative {}

  function formatRFC3339(
    date: Date | number,
    options?: {
      fractionDigits?: 0 | 1 | 2 | 3
    }
  ): string
  namespace formatRFC3339 {}

  function formatRFC7231(date: Date | number): string
  namespace formatRFC7231 {}

  function fromUnixTime(unixTime: number): Date
  namespace fromUnixTime {}

  function getDate(date: Date | number): number
  namespace getDate {}

  function getDay(date: Date | number): 0 | 1 | 2 | 3 | 4 | 5 | 6
  namespace getDay {}

  function getDayOfYear(date: Date | number): number
  namespace getDayOfYear {}

  function getDaysInMonth(date: Date | number): number
  namespace getDaysInMonth {}

  function getDaysInYear(date: Date | number): number
  namespace getDaysInYear {}

  function getDecade(date: Date | number): number
  namespace getDecade {}

  function getHours(date: Date | number): number
  namespace getHours {}

  function getISODay(date: Date | number): number
  namespace getISODay {}

  function getISOWeek(date: Date | number): number
  namespace getISOWeek {}

  function getISOWeeksInYear(date: Date | number): number
  namespace getISOWeeksInYear {}

  function getISOWeekYear(date: Date | number): number
  namespace getISOWeekYear {}

  function getMilliseconds(date: Date | number): number
  namespace getMilliseconds {}

  function getMinutes(date: Date | number): number
  namespace getMinutes {}

  function getMonth(date: Date | number): number
  namespace getMonth {}

  function getOverlappingDaysInIntervals(
    intervalLeft: Interval,
    intervalRight: Interval
  ): number
  namespace getOverlappingDaysInIntervals {}

  function getQuarter(date: Date | number): number
  namespace getQuarter {}

  function getSeconds(date: Date | number): number
  namespace getSeconds {}

  function getTime(date: Date | number): number
  namespace getTime {}

  function getUnixTime(date: Date | number): number
  namespace getUnixTime {}

  function getWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): number
  namespace getWeek {}

  function getWeekOfMonth(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): number
  namespace getWeekOfMonth {}

  function getWeeksInMonth(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): number
  namespace getWeeksInMonth {}

  function getWeekYear(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): number
  namespace getWeekYear {}

  function getYear(date: Date | number): number
  namespace getYear {}

  function intervalToDuration(interval: Interval): Duration
  namespace intervalToDuration {}

  function isAfter(date: Date | number, dateToCompare: Date | number): boolean
  namespace isAfter {}

  function isBefore(date: Date | number, dateToCompare: Date | number): boolean
  namespace isBefore {}

  function isDate(value: any): boolean
  namespace isDate {}

  function isEqual(dateLeft: Date | number, dateRight: Date | number): boolean
  namespace isEqual {}

  function isExists(year: number, month: number, day: number): boolean
  namespace isExists {}

  function isFirstDayOfMonth(date: Date | number): boolean
  namespace isFirstDayOfMonth {}

  function isFriday(date: Date | number): boolean
  namespace isFriday {}

  function isFuture(date: Date | number): boolean
  namespace isFuture {}

  function isLastDayOfMonth(date: Date | number): boolean
  namespace isLastDayOfMonth {}

  function isLeapYear(date: Date | number): boolean
  namespace isLeapYear {}

  function isMonday(date: Date | number): boolean
  namespace isMonday {}

  function isPast(date: Date | number): boolean
  namespace isPast {}

  function isSameDay(dateLeft: Date | number, dateRight: Date | number): boolean
  namespace isSameDay {}

  function isSameHour(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameHour {}

  function isSameISOWeek(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameISOWeek {}

  function isSameISOWeekYear(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameISOWeekYear {}

  function isSameMinute(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameMinute {}

  function isSameMonth(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameMonth {}

  function isSameQuarter(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameQuarter {}

  function isSameSecond(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameSecond {}

  function isSameWeek(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): boolean
  namespace isSameWeek {}

  function isSameYear(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameYear {}

  function isSaturday(date: Date | number): boolean
  namespace isSaturday {}

  function isSunday(date: Date | number): boolean
  namespace isSunday {}

  function isThisHour(date: Date | number): boolean
  namespace isThisHour {}

  function isThisISOWeek(date: Date | number): boolean
  namespace isThisISOWeek {}

  function isThisMinute(date: Date | number): boolean
  namespace isThisMinute {}

  function isThisMonth(date: Date | number): boolean
  namespace isThisMonth {}

  function isThisQuarter(date: Date | number): boolean
  namespace isThisQuarter {}

  function isThisSecond(date: Date | number): boolean
  namespace isThisSecond {}

  function isThisWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): boolean
  namespace isThisWeek {}

  function isThisYear(date: Date | number): boolean
  namespace isThisYear {}

  function isThursday(date: Date | number): boolean
  namespace isThursday {}

  function isToday(date: Date | number): boolean
  namespace isToday {}

  function isTomorrow(date: Date | number): boolean
  namespace isTomorrow {}

  function isTuesday(date: Date | number): boolean
  namespace isTuesday {}

  function isValid(date: any): boolean
  namespace isValid {}

  function isWednesday(date: Date | number): boolean
  namespace isWednesday {}

  function isWeekend(date: Date | number): boolean
  namespace isWeekend {}

  function isWithinInterval(date: Date | number, interval: Interval): boolean
  namespace isWithinInterval {}

  function isYesterday(date: Date | number): boolean
  namespace isYesterday {}

  function lastDayOfDecade(date: Date | number): Date
  namespace lastDayOfDecade {}

  function lastDayOfISOWeek(date: Date | number): Date
  namespace lastDayOfISOWeek {}

  function lastDayOfISOWeekYear(date: Date | number): Date
  namespace lastDayOfISOWeekYear {}

  function lastDayOfMonth(date: Date | number): Date
  namespace lastDayOfMonth {}

  function lastDayOfQuarter(
    date: Date | number,
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date
  namespace lastDayOfQuarter {}

  function lastDayOfWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date
  namespace lastDayOfWeek {}

  function lastDayOfYear(date: Date | number): Date
  namespace lastDayOfYear {}

  function lightFormat(date: Date | number, format: string): string
  namespace lightFormat {}

  function max(datesArray: (Date | number)[]): Date
  namespace max {}

  function min(datesArray: (Date | number)[]): Date
  namespace min {}

  function parse(
    dateString: string,
    formatString: string,
    referenceDate: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      useAdditionalWeekYearTokens?: boolean
      useAdditionalDayOfYearTokens?: boolean
    }
  ): Date
  namespace parse {}

  function parseISO(
    argument: string,
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date
  namespace parseISO {}

  function parseJSON(argument: string | number | Date): Date
  namespace parseJSON {}

  function roundToNearestMinutes(
    date: Date | number,
    options?: {
      nearestTo?: number
    }
  ): Date
  namespace roundToNearestMinutes {}

  function set(
    date: Date | number,
    values: {
      year?: number
      month?: number
      date?: number
      hours?: number
      minutes?: number
      seconds?: number
      milliseconds?: number
    }
  ): Date
  namespace set {}

  function setDate(date: Date | number, dayOfMonth: number): Date
  namespace setDate {}

  function setDay(
    date: Date | number,
    day: number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date
  namespace setDay {}

  function setDayOfYear(date: Date | number, dayOfYear: number): Date
  namespace setDayOfYear {}

  function setHours(date: Date | number, hours: number): Date
  namespace setHours {}

  function setISODay(date: Date | number, day: number): Date
  namespace setISODay {}

  function setISOWeek(date: Date | number, isoWeek: number): Date
  namespace setISOWeek {}

  function setISOWeekYear(date: Date | number, isoWeekYear: number): Date
  namespace setISOWeekYear {}

  function setMilliseconds(date: Date | number, milliseconds: number): Date
  namespace setMilliseconds {}

  function setMinutes(date: Date | number, minutes: number): Date
  namespace setMinutes {}

  function setMonth(date: Date | number, month: number): Date
  namespace setMonth {}

  function setQuarter(date: Date | number, quarter: number): Date
  namespace setQuarter {}

  function setSeconds(date: Date | number, seconds: number): Date
  namespace setSeconds {}

  function setWeek(
    date: Date | number,
    week: number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): Date
  namespace setWeek {}

  function setWeekYear(
    date: Date | number,
    weekYear: number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): Date
  namespace setWeekYear {}

  function setYear(date: Date | number, year: number): Date
  namespace setYear {}

  function startOfDay(date: Date | number): Date
  namespace startOfDay {}

  function startOfDecade(date: Date | number): Date
  namespace startOfDecade {}

  function startOfHour(date: Date | number): Date
  namespace startOfHour {}

  function startOfISOWeek(date: Date | number): Date
  namespace startOfISOWeek {}

  function startOfISOWeekYear(date: Date | number): Date
  namespace startOfISOWeekYear {}

  function startOfMinute(date: Date | number): Date
  namespace startOfMinute {}

  function startOfMonth(date: Date | number): Date
  namespace startOfMonth {}

  function startOfQuarter(date: Date | number): Date
  namespace startOfQuarter {}

  function startOfSecond(date: Date | number): Date
  namespace startOfSecond {}

  function startOfToday(): Date
  namespace startOfToday {}

  function startOfTomorrow(): Date
  namespace startOfTomorrow {}

  function startOfWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date
  namespace startOfWeek {}

  function startOfWeekYear(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): Date
  namespace startOfWeekYear {}

  function startOfYear(date: Date | number): Date
  namespace startOfYear {}

  function startOfYesterday(): Date
  namespace startOfYesterday {}

  function sub(date: Date | number, duration: Duration): Date
  namespace sub {}

  function subBusinessDays(date: Date | number, amount: number): Date
  namespace subBusinessDays {}

  function subDays(date: Date | number, amount: number): Date
  namespace subDays {}

  function subHours(date: Date | number, amount: number): Date
  namespace subHours {}

  function subISOWeekYears(date: Date | number, amount: number): Date
  namespace subISOWeekYears {}

  function subMilliseconds(date: Date | number, amount: number): Date
  namespace subMilliseconds {}

  function subMinutes(date: Date | number, amount: number): Date
  namespace subMinutes {}

  function subMonths(date: Date | number, amount: number): Date
  namespace subMonths {}

  function subQuarters(date: Date | number, amount: number): Date
  namespace subQuarters {}

  function subSeconds(date: Date | number, amount: number): Date
  namespace subSeconds {}

  function subWeeks(date: Date | number, amount: number): Date
  namespace subWeeks {}

  function subYears(date: Date | number, amount: number): Date
  namespace subYears {}

  function toDate(argument: Date | number): Date
  namespace toDate {}

  const maxTime: number

  const minTime: number
}

declare module 'date-fns-jalaali/esm/add' {
  import { add } from 'date-fns-jalaali/esm'
  export default add
}

declare module 'date-fns-jalaali/esm/addBusinessDays' {
  import { addBusinessDays } from 'date-fns-jalaali/esm'
  export default addBusinessDays
}

declare module 'date-fns-jalaali/esm/addDays' {
  import { addDays } from 'date-fns-jalaali/esm'
  export default addDays
}

declare module 'date-fns-jalaali/esm/addHours' {
  import { addHours } from 'date-fns-jalaali/esm'
  export default addHours
}

declare module 'date-fns-jalaali/esm/addISOWeekYears' {
  import { addISOWeekYears } from 'date-fns-jalaali/esm'
  export default addISOWeekYears
}

declare module 'date-fns-jalaali/esm/addMilliseconds' {
  import { addMilliseconds } from 'date-fns-jalaali/esm'
  export default addMilliseconds
}

declare module 'date-fns-jalaali/esm/addMinutes' {
  import { addMinutes } from 'date-fns-jalaali/esm'
  export default addMinutes
}

declare module 'date-fns-jalaali/esm/addMonths' {
  import { addMonths } from 'date-fns-jalaali/esm'
  export default addMonths
}

declare module 'date-fns-jalaali/esm/addQuarters' {
  import { addQuarters } from 'date-fns-jalaali/esm'
  export default addQuarters
}

declare module 'date-fns-jalaali/esm/addSeconds' {
  import { addSeconds } from 'date-fns-jalaali/esm'
  export default addSeconds
}

declare module 'date-fns-jalaali/esm/addWeeks' {
  import { addWeeks } from 'date-fns-jalaali/esm'
  export default addWeeks
}

declare module 'date-fns-jalaali/esm/addYears' {
  import { addYears } from 'date-fns-jalaali/esm'
  export default addYears
}

declare module 'date-fns-jalaali/esm/areIntervalsOverlapping' {
  import { areIntervalsOverlapping } from 'date-fns-jalaali/esm'
  export default areIntervalsOverlapping
}

declare module 'date-fns-jalaali/esm/closestIndexTo' {
  import { closestIndexTo } from 'date-fns-jalaali/esm'
  export default closestIndexTo
}

declare module 'date-fns-jalaali/esm/closestTo' {
  import { closestTo } from 'date-fns-jalaali/esm'
  export default closestTo
}

declare module 'date-fns-jalaali/esm/compareAsc' {
  import { compareAsc } from 'date-fns-jalaali/esm'
  export default compareAsc
}

declare module 'date-fns-jalaali/esm/compareDesc' {
  import { compareDesc } from 'date-fns-jalaali/esm'
  export default compareDesc
}

declare module 'date-fns-jalaali/esm/differenceInBusinessDays' {
  import { differenceInBusinessDays } from 'date-fns-jalaali/esm'
  export default differenceInBusinessDays
}

declare module 'date-fns-jalaali/esm/differenceInCalendarDays' {
  import { differenceInCalendarDays } from 'date-fns-jalaali/esm'
  export default differenceInCalendarDays
}

declare module 'date-fns-jalaali/esm/differenceInCalendarISOWeeks' {
  import { differenceInCalendarISOWeeks } from 'date-fns-jalaali/esm'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns-jalaali/esm/differenceInCalendarISOWeekYears' {
  import { differenceInCalendarISOWeekYears } from 'date-fns-jalaali/esm'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns-jalaali/esm/differenceInCalendarMonths' {
  import { differenceInCalendarMonths } from 'date-fns-jalaali/esm'
  export default differenceInCalendarMonths
}

declare module 'date-fns-jalaali/esm/differenceInCalendarQuarters' {
  import { differenceInCalendarQuarters } from 'date-fns-jalaali/esm'
  export default differenceInCalendarQuarters
}

declare module 'date-fns-jalaali/esm/differenceInCalendarWeeks' {
  import { differenceInCalendarWeeks } from 'date-fns-jalaali/esm'
  export default differenceInCalendarWeeks
}

declare module 'date-fns-jalaali/esm/differenceInCalendarYears' {
  import { differenceInCalendarYears } from 'date-fns-jalaali/esm'
  export default differenceInCalendarYears
}

declare module 'date-fns-jalaali/esm/differenceInDays' {
  import { differenceInDays } from 'date-fns-jalaali/esm'
  export default differenceInDays
}

declare module 'date-fns-jalaali/esm/differenceInHours' {
  import { differenceInHours } from 'date-fns-jalaali/esm'
  export default differenceInHours
}

declare module 'date-fns-jalaali/esm/differenceInISOWeekYears' {
  import { differenceInISOWeekYears } from 'date-fns-jalaali/esm'
  export default differenceInISOWeekYears
}

declare module 'date-fns-jalaali/esm/differenceInMilliseconds' {
  import { differenceInMilliseconds } from 'date-fns-jalaali/esm'
  export default differenceInMilliseconds
}

declare module 'date-fns-jalaali/esm/differenceInMinutes' {
  import { differenceInMinutes } from 'date-fns-jalaali/esm'
  export default differenceInMinutes
}

declare module 'date-fns-jalaali/esm/differenceInMonths' {
  import { differenceInMonths } from 'date-fns-jalaali/esm'
  export default differenceInMonths
}

declare module 'date-fns-jalaali/esm/differenceInQuarters' {
  import { differenceInQuarters } from 'date-fns-jalaali/esm'
  export default differenceInQuarters
}

declare module 'date-fns-jalaali/esm/differenceInSeconds' {
  import { differenceInSeconds } from 'date-fns-jalaali/esm'
  export default differenceInSeconds
}

declare module 'date-fns-jalaali/esm/differenceInWeeks' {
  import { differenceInWeeks } from 'date-fns-jalaali/esm'
  export default differenceInWeeks
}

declare module 'date-fns-jalaali/esm/differenceInYears' {
  import { differenceInYears } from 'date-fns-jalaali/esm'
  export default differenceInYears
}

declare module 'date-fns-jalaali/esm/eachDayOfInterval' {
  import { eachDayOfInterval } from 'date-fns-jalaali/esm'
  export default eachDayOfInterval
}

declare module 'date-fns-jalaali/esm/eachMonthOfInterval' {
  import { eachMonthOfInterval } from 'date-fns-jalaali/esm'
  export default eachMonthOfInterval
}

declare module 'date-fns-jalaali/esm/eachWeekendOfInterval' {
  import { eachWeekendOfInterval } from 'date-fns-jalaali/esm'
  export default eachWeekendOfInterval
}

declare module 'date-fns-jalaali/esm/eachWeekendOfMonth' {
  import { eachWeekendOfMonth } from 'date-fns-jalaali/esm'
  export default eachWeekendOfMonth
}

declare module 'date-fns-jalaali/esm/eachWeekendOfYear' {
  import { eachWeekendOfYear } from 'date-fns-jalaali/esm'
  export default eachWeekendOfYear
}

declare module 'date-fns-jalaali/esm/eachWeekOfInterval' {
  import { eachWeekOfInterval } from 'date-fns-jalaali/esm'
  export default eachWeekOfInterval
}

declare module 'date-fns-jalaali/esm/eachYearOfInterval' {
  import { eachYearOfInterval } from 'date-fns-jalaali/esm'
  export default eachYearOfInterval
}

declare module 'date-fns-jalaali/esm/endOfDay' {
  import { endOfDay } from 'date-fns-jalaali/esm'
  export default endOfDay
}

declare module 'date-fns-jalaali/esm/endOfDecade' {
  import { endOfDecade } from 'date-fns-jalaali/esm'
  export default endOfDecade
}

declare module 'date-fns-jalaali/esm/endOfHour' {
  import { endOfHour } from 'date-fns-jalaali/esm'
  export default endOfHour
}

declare module 'date-fns-jalaali/esm/endOfISOWeek' {
  import { endOfISOWeek } from 'date-fns-jalaali/esm'
  export default endOfISOWeek
}

declare module 'date-fns-jalaali/esm/endOfISOWeekYear' {
  import { endOfISOWeekYear } from 'date-fns-jalaali/esm'
  export default endOfISOWeekYear
}

declare module 'date-fns-jalaali/esm/endOfMinute' {
  import { endOfMinute } from 'date-fns-jalaali/esm'
  export default endOfMinute
}

declare module 'date-fns-jalaali/esm/endOfMonth' {
  import { endOfMonth } from 'date-fns-jalaali/esm'
  export default endOfMonth
}

declare module 'date-fns-jalaali/esm/endOfQuarter' {
  import { endOfQuarter } from 'date-fns-jalaali/esm'
  export default endOfQuarter
}

declare module 'date-fns-jalaali/esm/endOfSecond' {
  import { endOfSecond } from 'date-fns-jalaali/esm'
  export default endOfSecond
}

declare module 'date-fns-jalaali/esm/endOfToday' {
  import { endOfToday } from 'date-fns-jalaali/esm'
  export default endOfToday
}

declare module 'date-fns-jalaali/esm/endOfTomorrow' {
  import { endOfTomorrow } from 'date-fns-jalaali/esm'
  export default endOfTomorrow
}

declare module 'date-fns-jalaali/esm/endOfWeek' {
  import { endOfWeek } from 'date-fns-jalaali/esm'
  export default endOfWeek
}

declare module 'date-fns-jalaali/esm/endOfYear' {
  import { endOfYear } from 'date-fns-jalaali/esm'
  export default endOfYear
}

declare module 'date-fns-jalaali/esm/endOfYesterday' {
  import { endOfYesterday } from 'date-fns-jalaali/esm'
  export default endOfYesterday
}

declare module 'date-fns-jalaali/esm/format' {
  import { format } from 'date-fns-jalaali/esm'
  export default format
}

declare module 'date-fns-jalaali/esm/formatDistance' {
  import { formatDistance } from 'date-fns-jalaali/esm'
  export default formatDistance
}

declare module 'date-fns-jalaali/esm/formatDistanceStrict' {
  import { formatDistanceStrict } from 'date-fns-jalaali/esm'
  export default formatDistanceStrict
}

declare module 'date-fns-jalaali/esm/formatDistanceToNow' {
  import { formatDistanceToNow } from 'date-fns-jalaali/esm'
  export default formatDistanceToNow
}

declare module 'date-fns-jalaali/esm/formatDistanceToNowStrict' {
  import { formatDistanceToNowStrict } from 'date-fns-jalaali/esm'
  export default formatDistanceToNowStrict
}

declare module 'date-fns-jalaali/esm/formatISO' {
  import { formatISO } from 'date-fns-jalaali/esm'
  export default formatISO
}

declare module 'date-fns-jalaali/esm/formatISO9075' {
  import { formatISO9075 } from 'date-fns-jalaali/esm'
  export default formatISO9075
}

declare module 'date-fns-jalaali/esm/formatISODuration' {
  import { formatISODuration } from 'date-fns-jalaali/esm'
  export default formatISODuration
}

declare module 'date-fns-jalaali/esm/formatRelative' {
  import { formatRelative } from 'date-fns-jalaali/esm'
  export default formatRelative
}

declare module 'date-fns-jalaali/esm/formatRFC3339' {
  import { formatRFC3339 } from 'date-fns-jalaali/esm'
  export default formatRFC3339
}

declare module 'date-fns-jalaali/esm/formatRFC7231' {
  import { formatRFC7231 } from 'date-fns-jalaali/esm'
  export default formatRFC7231
}

declare module 'date-fns-jalaali/esm/fromUnixTime' {
  import { fromUnixTime } from 'date-fns-jalaali/esm'
  export default fromUnixTime
}

declare module 'date-fns-jalaali/esm/getDate' {
  import { getDate } from 'date-fns-jalaali/esm'
  export default getDate
}

declare module 'date-fns-jalaali/esm/getDay' {
  import { getDay } from 'date-fns-jalaali/esm'
  export default getDay
}

declare module 'date-fns-jalaali/esm/getDayOfYear' {
  import { getDayOfYear } from 'date-fns-jalaali/esm'
  export default getDayOfYear
}

declare module 'date-fns-jalaali/esm/getDaysInMonth' {
  import { getDaysInMonth } from 'date-fns-jalaali/esm'
  export default getDaysInMonth
}

declare module 'date-fns-jalaali/esm/getDaysInYear' {
  import { getDaysInYear } from 'date-fns-jalaali/esm'
  export default getDaysInYear
}

declare module 'date-fns-jalaali/esm/getDecade' {
  import { getDecade } from 'date-fns-jalaali/esm'
  export default getDecade
}

declare module 'date-fns-jalaali/esm/getHours' {
  import { getHours } from 'date-fns-jalaali/esm'
  export default getHours
}

declare module 'date-fns-jalaali/esm/getISODay' {
  import { getISODay } from 'date-fns-jalaali/esm'
  export default getISODay
}

declare module 'date-fns-jalaali/esm/getISOWeek' {
  import { getISOWeek } from 'date-fns-jalaali/esm'
  export default getISOWeek
}

declare module 'date-fns-jalaali/esm/getISOWeeksInYear' {
  import { getISOWeeksInYear } from 'date-fns-jalaali/esm'
  export default getISOWeeksInYear
}

declare module 'date-fns-jalaali/esm/getISOWeekYear' {
  import { getISOWeekYear } from 'date-fns-jalaali/esm'
  export default getISOWeekYear
}

declare module 'date-fns-jalaali/esm/getMilliseconds' {
  import { getMilliseconds } from 'date-fns-jalaali/esm'
  export default getMilliseconds
}

declare module 'date-fns-jalaali/esm/getMinutes' {
  import { getMinutes } from 'date-fns-jalaali/esm'
  export default getMinutes
}

declare module 'date-fns-jalaali/esm/getMonth' {
  import { getMonth } from 'date-fns-jalaali/esm'
  export default getMonth
}

declare module 'date-fns-jalaali/esm/getOverlappingDaysInIntervals' {
  import { getOverlappingDaysInIntervals } from 'date-fns-jalaali/esm'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns-jalaali/esm/getQuarter' {
  import { getQuarter } from 'date-fns-jalaali/esm'
  export default getQuarter
}

declare module 'date-fns-jalaali/esm/getSeconds' {
  import { getSeconds } from 'date-fns-jalaali/esm'
  export default getSeconds
}

declare module 'date-fns-jalaali/esm/getTime' {
  import { getTime } from 'date-fns-jalaali/esm'
  export default getTime
}

declare module 'date-fns-jalaali/esm/getUnixTime' {
  import { getUnixTime } from 'date-fns-jalaali/esm'
  export default getUnixTime
}

declare module 'date-fns-jalaali/esm/getWeek' {
  import { getWeek } from 'date-fns-jalaali/esm'
  export default getWeek
}

declare module 'date-fns-jalaali/esm/getWeekOfMonth' {
  import { getWeekOfMonth } from 'date-fns-jalaali/esm'
  export default getWeekOfMonth
}

declare module 'date-fns-jalaali/esm/getWeeksInMonth' {
  import { getWeeksInMonth } from 'date-fns-jalaali/esm'
  export default getWeeksInMonth
}

declare module 'date-fns-jalaali/esm/getWeekYear' {
  import { getWeekYear } from 'date-fns-jalaali/esm'
  export default getWeekYear
}

declare module 'date-fns-jalaali/esm/getYear' {
  import { getYear } from 'date-fns-jalaali/esm'
  export default getYear
}

declare module 'date-fns-jalaali/esm/intervalToDuration' {
  import { intervalToDuration } from 'date-fns-jalaali/esm'
  export default intervalToDuration
}

declare module 'date-fns-jalaali/esm/isAfter' {
  import { isAfter } from 'date-fns-jalaali/esm'
  export default isAfter
}

declare module 'date-fns-jalaali/esm/isBefore' {
  import { isBefore } from 'date-fns-jalaali/esm'
  export default isBefore
}

declare module 'date-fns-jalaali/esm/isDate' {
  import { isDate } from 'date-fns-jalaali/esm'
  export default isDate
}

declare module 'date-fns-jalaali/esm/isEqual' {
  import { isEqual } from 'date-fns-jalaali/esm'
  export default isEqual
}

declare module 'date-fns-jalaali/esm/isExists' {
  import { isExists } from 'date-fns-jalaali/esm'
  export default isExists
}

declare module 'date-fns-jalaali/esm/isFirstDayOfMonth' {
  import { isFirstDayOfMonth } from 'date-fns-jalaali/esm'
  export default isFirstDayOfMonth
}

declare module 'date-fns-jalaali/esm/isFriday' {
  import { isFriday } from 'date-fns-jalaali/esm'
  export default isFriday
}

declare module 'date-fns-jalaali/esm/isFuture' {
  import { isFuture } from 'date-fns-jalaali/esm'
  export default isFuture
}

declare module 'date-fns-jalaali/esm/isLastDayOfMonth' {
  import { isLastDayOfMonth } from 'date-fns-jalaali/esm'
  export default isLastDayOfMonth
}

declare module 'date-fns-jalaali/esm/isLeapYear' {
  import { isLeapYear } from 'date-fns-jalaali/esm'
  export default isLeapYear
}

declare module 'date-fns-jalaali/esm/isMonday' {
  import { isMonday } from 'date-fns-jalaali/esm'
  export default isMonday
}

declare module 'date-fns-jalaali/esm/isPast' {
  import { isPast } from 'date-fns-jalaali/esm'
  export default isPast
}

declare module 'date-fns-jalaali/esm/isSameDay' {
  import { isSameDay } from 'date-fns-jalaali/esm'
  export default isSameDay
}

declare module 'date-fns-jalaali/esm/isSameHour' {
  import { isSameHour } from 'date-fns-jalaali/esm'
  export default isSameHour
}

declare module 'date-fns-jalaali/esm/isSameISOWeek' {
  import { isSameISOWeek } from 'date-fns-jalaali/esm'
  export default isSameISOWeek
}

declare module 'date-fns-jalaali/esm/isSameISOWeekYear' {
  import { isSameISOWeekYear } from 'date-fns-jalaali/esm'
  export default isSameISOWeekYear
}

declare module 'date-fns-jalaali/esm/isSameMinute' {
  import { isSameMinute } from 'date-fns-jalaali/esm'
  export default isSameMinute
}

declare module 'date-fns-jalaali/esm/isSameMonth' {
  import { isSameMonth } from 'date-fns-jalaali/esm'
  export default isSameMonth
}

declare module 'date-fns-jalaali/esm/isSameQuarter' {
  import { isSameQuarter } from 'date-fns-jalaali/esm'
  export default isSameQuarter
}

declare module 'date-fns-jalaali/esm/isSameSecond' {
  import { isSameSecond } from 'date-fns-jalaali/esm'
  export default isSameSecond
}

declare module 'date-fns-jalaali/esm/isSameWeek' {
  import { isSameWeek } from 'date-fns-jalaali/esm'
  export default isSameWeek
}

declare module 'date-fns-jalaali/esm/isSameYear' {
  import { isSameYear } from 'date-fns-jalaali/esm'
  export default isSameYear
}

declare module 'date-fns-jalaali/esm/isSaturday' {
  import { isSaturday } from 'date-fns-jalaali/esm'
  export default isSaturday
}

declare module 'date-fns-jalaali/esm/isSunday' {
  import { isSunday } from 'date-fns-jalaali/esm'
  export default isSunday
}

declare module 'date-fns-jalaali/esm/isThisHour' {
  import { isThisHour } from 'date-fns-jalaali/esm'
  export default isThisHour
}

declare module 'date-fns-jalaali/esm/isThisISOWeek' {
  import { isThisISOWeek } from 'date-fns-jalaali/esm'
  export default isThisISOWeek
}

declare module 'date-fns-jalaali/esm/isThisMinute' {
  import { isThisMinute } from 'date-fns-jalaali/esm'
  export default isThisMinute
}

declare module 'date-fns-jalaali/esm/isThisMonth' {
  import { isThisMonth } from 'date-fns-jalaali/esm'
  export default isThisMonth
}

declare module 'date-fns-jalaali/esm/isThisQuarter' {
  import { isThisQuarter } from 'date-fns-jalaali/esm'
  export default isThisQuarter
}

declare module 'date-fns-jalaali/esm/isThisSecond' {
  import { isThisSecond } from 'date-fns-jalaali/esm'
  export default isThisSecond
}

declare module 'date-fns-jalaali/esm/isThisWeek' {
  import { isThisWeek } from 'date-fns-jalaali/esm'
  export default isThisWeek
}

declare module 'date-fns-jalaali/esm/isThisYear' {
  import { isThisYear } from 'date-fns-jalaali/esm'
  export default isThisYear
}

declare module 'date-fns-jalaali/esm/isThursday' {
  import { isThursday } from 'date-fns-jalaali/esm'
  export default isThursday
}

declare module 'date-fns-jalaali/esm/isToday' {
  import { isToday } from 'date-fns-jalaali/esm'
  export default isToday
}

declare module 'date-fns-jalaali/esm/isTomorrow' {
  import { isTomorrow } from 'date-fns-jalaali/esm'
  export default isTomorrow
}

declare module 'date-fns-jalaali/esm/isTuesday' {
  import { isTuesday } from 'date-fns-jalaali/esm'
  export default isTuesday
}

declare module 'date-fns-jalaali/esm/isValid' {
  import { isValid } from 'date-fns-jalaali/esm'
  export default isValid
}

declare module 'date-fns-jalaali/esm/isWednesday' {
  import { isWednesday } from 'date-fns-jalaali/esm'
  export default isWednesday
}

declare module 'date-fns-jalaali/esm/isWeekend' {
  import { isWeekend } from 'date-fns-jalaali/esm'
  export default isWeekend
}

declare module 'date-fns-jalaali/esm/isWithinInterval' {
  import { isWithinInterval } from 'date-fns-jalaali/esm'
  export default isWithinInterval
}

declare module 'date-fns-jalaali/esm/isYesterday' {
  import { isYesterday } from 'date-fns-jalaali/esm'
  export default isYesterday
}

declare module 'date-fns-jalaali/esm/lastDayOfDecade' {
  import { lastDayOfDecade } from 'date-fns-jalaali/esm'
  export default lastDayOfDecade
}

declare module 'date-fns-jalaali/esm/lastDayOfISOWeek' {
  import { lastDayOfISOWeek } from 'date-fns-jalaali/esm'
  export default lastDayOfISOWeek
}

declare module 'date-fns-jalaali/esm/lastDayOfISOWeekYear' {
  import { lastDayOfISOWeekYear } from 'date-fns-jalaali/esm'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns-jalaali/esm/lastDayOfMonth' {
  import { lastDayOfMonth } from 'date-fns-jalaali/esm'
  export default lastDayOfMonth
}

declare module 'date-fns-jalaali/esm/lastDayOfQuarter' {
  import { lastDayOfQuarter } from 'date-fns-jalaali/esm'
  export default lastDayOfQuarter
}

declare module 'date-fns-jalaali/esm/lastDayOfWeek' {
  import { lastDayOfWeek } from 'date-fns-jalaali/esm'
  export default lastDayOfWeek
}

declare module 'date-fns-jalaali/esm/lastDayOfYear' {
  import { lastDayOfYear } from 'date-fns-jalaali/esm'
  export default lastDayOfYear
}

declare module 'date-fns-jalaali/esm/lightFormat' {
  import { lightFormat } from 'date-fns-jalaali/esm'
  export default lightFormat
}

declare module 'date-fns-jalaali/esm/max' {
  import { max } from 'date-fns-jalaali/esm'
  export default max
}

declare module 'date-fns-jalaali/esm/min' {
  import { min } from 'date-fns-jalaali/esm'
  export default min
}

declare module 'date-fns-jalaali/esm/parse' {
  import { parse } from 'date-fns-jalaali/esm'
  export default parse
}

declare module 'date-fns-jalaali/esm/parseISO' {
  import { parseISO } from 'date-fns-jalaali/esm'
  export default parseISO
}

declare module 'date-fns-jalaali/esm/parseJSON' {
  import { parseJSON } from 'date-fns-jalaali/esm'
  export default parseJSON
}

declare module 'date-fns-jalaali/esm/roundToNearestMinutes' {
  import { roundToNearestMinutes } from 'date-fns-jalaali/esm'
  export default roundToNearestMinutes
}

declare module 'date-fns-jalaali/esm/set' {
  import { set } from 'date-fns-jalaali/esm'
  export default set
}

declare module 'date-fns-jalaali/esm/setDate' {
  import { setDate } from 'date-fns-jalaali/esm'
  export default setDate
}

declare module 'date-fns-jalaali/esm/setDay' {
  import { setDay } from 'date-fns-jalaali/esm'
  export default setDay
}

declare module 'date-fns-jalaali/esm/setDayOfYear' {
  import { setDayOfYear } from 'date-fns-jalaali/esm'
  export default setDayOfYear
}

declare module 'date-fns-jalaali/esm/setHours' {
  import { setHours } from 'date-fns-jalaali/esm'
  export default setHours
}

declare module 'date-fns-jalaali/esm/setISODay' {
  import { setISODay } from 'date-fns-jalaali/esm'
  export default setISODay
}

declare module 'date-fns-jalaali/esm/setISOWeek' {
  import { setISOWeek } from 'date-fns-jalaali/esm'
  export default setISOWeek
}

declare module 'date-fns-jalaali/esm/setISOWeekYear' {
  import { setISOWeekYear } from 'date-fns-jalaali/esm'
  export default setISOWeekYear
}

declare module 'date-fns-jalaali/esm/setMilliseconds' {
  import { setMilliseconds } from 'date-fns-jalaali/esm'
  export default setMilliseconds
}

declare module 'date-fns-jalaali/esm/setMinutes' {
  import { setMinutes } from 'date-fns-jalaali/esm'
  export default setMinutes
}

declare module 'date-fns-jalaali/esm/setMonth' {
  import { setMonth } from 'date-fns-jalaali/esm'
  export default setMonth
}

declare module 'date-fns-jalaali/esm/setQuarter' {
  import { setQuarter } from 'date-fns-jalaali/esm'
  export default setQuarter
}

declare module 'date-fns-jalaali/esm/setSeconds' {
  import { setSeconds } from 'date-fns-jalaali/esm'
  export default setSeconds
}

declare module 'date-fns-jalaali/esm/setWeek' {
  import { setWeek } from 'date-fns-jalaali/esm'
  export default setWeek
}

declare module 'date-fns-jalaali/esm/setWeekYear' {
  import { setWeekYear } from 'date-fns-jalaali/esm'
  export default setWeekYear
}

declare module 'date-fns-jalaali/esm/setYear' {
  import { setYear } from 'date-fns-jalaali/esm'
  export default setYear
}

declare module 'date-fns-jalaali/esm/startOfDay' {
  import { startOfDay } from 'date-fns-jalaali/esm'
  export default startOfDay
}

declare module 'date-fns-jalaali/esm/startOfDecade' {
  import { startOfDecade } from 'date-fns-jalaali/esm'
  export default startOfDecade
}

declare module 'date-fns-jalaali/esm/startOfHour' {
  import { startOfHour } from 'date-fns-jalaali/esm'
  export default startOfHour
}

declare module 'date-fns-jalaali/esm/startOfISOWeek' {
  import { startOfISOWeek } from 'date-fns-jalaali/esm'
  export default startOfISOWeek
}

declare module 'date-fns-jalaali/esm/startOfISOWeekYear' {
  import { startOfISOWeekYear } from 'date-fns-jalaali/esm'
  export default startOfISOWeekYear
}

declare module 'date-fns-jalaali/esm/startOfMinute' {
  import { startOfMinute } from 'date-fns-jalaali/esm'
  export default startOfMinute
}

declare module 'date-fns-jalaali/esm/startOfMonth' {
  import { startOfMonth } from 'date-fns-jalaali/esm'
  export default startOfMonth
}

declare module 'date-fns-jalaali/esm/startOfQuarter' {
  import { startOfQuarter } from 'date-fns-jalaali/esm'
  export default startOfQuarter
}

declare module 'date-fns-jalaali/esm/startOfSecond' {
  import { startOfSecond } from 'date-fns-jalaali/esm'
  export default startOfSecond
}

declare module 'date-fns-jalaali/esm/startOfToday' {
  import { startOfToday } from 'date-fns-jalaali/esm'
  export default startOfToday
}

declare module 'date-fns-jalaali/esm/startOfTomorrow' {
  import { startOfTomorrow } from 'date-fns-jalaali/esm'
  export default startOfTomorrow
}

declare module 'date-fns-jalaali/esm/startOfWeek' {
  import { startOfWeek } from 'date-fns-jalaali/esm'
  export default startOfWeek
}

declare module 'date-fns-jalaali/esm/startOfWeekYear' {
  import { startOfWeekYear } from 'date-fns-jalaali/esm'
  export default startOfWeekYear
}

declare module 'date-fns-jalaali/esm/startOfYear' {
  import { startOfYear } from 'date-fns-jalaali/esm'
  export default startOfYear
}

declare module 'date-fns-jalaali/esm/startOfYesterday' {
  import { startOfYesterday } from 'date-fns-jalaali/esm'
  export default startOfYesterday
}

declare module 'date-fns-jalaali/esm/sub' {
  import { sub } from 'date-fns-jalaali/esm'
  export default sub
}

declare module 'date-fns-jalaali/esm/subBusinessDays' {
  import { subBusinessDays } from 'date-fns-jalaali/esm'
  export default subBusinessDays
}

declare module 'date-fns-jalaali/esm/subDays' {
  import { subDays } from 'date-fns-jalaali/esm'
  export default subDays
}

declare module 'date-fns-jalaali/esm/subHours' {
  import { subHours } from 'date-fns-jalaali/esm'
  export default subHours
}

declare module 'date-fns-jalaali/esm/subISOWeekYears' {
  import { subISOWeekYears } from 'date-fns-jalaali/esm'
  export default subISOWeekYears
}

declare module 'date-fns-jalaali/esm/subMilliseconds' {
  import { subMilliseconds } from 'date-fns-jalaali/esm'
  export default subMilliseconds
}

declare module 'date-fns-jalaali/esm/subMinutes' {
  import { subMinutes } from 'date-fns-jalaali/esm'
  export default subMinutes
}

declare module 'date-fns-jalaali/esm/subMonths' {
  import { subMonths } from 'date-fns-jalaali/esm'
  export default subMonths
}

declare module 'date-fns-jalaali/esm/subQuarters' {
  import { subQuarters } from 'date-fns-jalaali/esm'
  export default subQuarters
}

declare module 'date-fns-jalaali/esm/subSeconds' {
  import { subSeconds } from 'date-fns-jalaali/esm'
  export default subSeconds
}

declare module 'date-fns-jalaali/esm/subWeeks' {
  import { subWeeks } from 'date-fns-jalaali/esm'
  export default subWeeks
}

declare module 'date-fns-jalaali/esm/subYears' {
  import { subYears } from 'date-fns-jalaali/esm'
  export default subYears
}

declare module 'date-fns-jalaali/esm/toDate' {
  import { toDate } from 'date-fns-jalaali/esm'
  export default toDate
}

declare module 'date-fns-jalaali/esm/add/index' {
  import { add } from 'date-fns-jalaali/esm'
  export default add
}

declare module 'date-fns-jalaali/esm/addBusinessDays/index' {
  import { addBusinessDays } from 'date-fns-jalaali/esm'
  export default addBusinessDays
}

declare module 'date-fns-jalaali/esm/addDays/index' {
  import { addDays } from 'date-fns-jalaali/esm'
  export default addDays
}

declare module 'date-fns-jalaali/esm/addHours/index' {
  import { addHours } from 'date-fns-jalaali/esm'
  export default addHours
}

declare module 'date-fns-jalaali/esm/addISOWeekYears/index' {
  import { addISOWeekYears } from 'date-fns-jalaali/esm'
  export default addISOWeekYears
}

declare module 'date-fns-jalaali/esm/addMilliseconds/index' {
  import { addMilliseconds } from 'date-fns-jalaali/esm'
  export default addMilliseconds
}

declare module 'date-fns-jalaali/esm/addMinutes/index' {
  import { addMinutes } from 'date-fns-jalaali/esm'
  export default addMinutes
}

declare module 'date-fns-jalaali/esm/addMonths/index' {
  import { addMonths } from 'date-fns-jalaali/esm'
  export default addMonths
}

declare module 'date-fns-jalaali/esm/addQuarters/index' {
  import { addQuarters } from 'date-fns-jalaali/esm'
  export default addQuarters
}

declare module 'date-fns-jalaali/esm/addSeconds/index' {
  import { addSeconds } from 'date-fns-jalaali/esm'
  export default addSeconds
}

declare module 'date-fns-jalaali/esm/addWeeks/index' {
  import { addWeeks } from 'date-fns-jalaali/esm'
  export default addWeeks
}

declare module 'date-fns-jalaali/esm/addYears/index' {
  import { addYears } from 'date-fns-jalaali/esm'
  export default addYears
}

declare module 'date-fns-jalaali/esm/areIntervalsOverlapping/index' {
  import { areIntervalsOverlapping } from 'date-fns-jalaali/esm'
  export default areIntervalsOverlapping
}

declare module 'date-fns-jalaali/esm/closestIndexTo/index' {
  import { closestIndexTo } from 'date-fns-jalaali/esm'
  export default closestIndexTo
}

declare module 'date-fns-jalaali/esm/closestTo/index' {
  import { closestTo } from 'date-fns-jalaali/esm'
  export default closestTo
}

declare module 'date-fns-jalaali/esm/compareAsc/index' {
  import { compareAsc } from 'date-fns-jalaali/esm'
  export default compareAsc
}

declare module 'date-fns-jalaali/esm/compareDesc/index' {
  import { compareDesc } from 'date-fns-jalaali/esm'
  export default compareDesc
}

declare module 'date-fns-jalaali/esm/differenceInBusinessDays/index' {
  import { differenceInBusinessDays } from 'date-fns-jalaali/esm'
  export default differenceInBusinessDays
}

declare module 'date-fns-jalaali/esm/differenceInCalendarDays/index' {
  import { differenceInCalendarDays } from 'date-fns-jalaali/esm'
  export default differenceInCalendarDays
}

declare module 'date-fns-jalaali/esm/differenceInCalendarISOWeeks/index' {
  import { differenceInCalendarISOWeeks } from 'date-fns-jalaali/esm'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns-jalaali/esm/differenceInCalendarISOWeekYears/index' {
  import { differenceInCalendarISOWeekYears } from 'date-fns-jalaali/esm'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns-jalaali/esm/differenceInCalendarMonths/index' {
  import { differenceInCalendarMonths } from 'date-fns-jalaali/esm'
  export default differenceInCalendarMonths
}

declare module 'date-fns-jalaali/esm/differenceInCalendarQuarters/index' {
  import { differenceInCalendarQuarters } from 'date-fns-jalaali/esm'
  export default differenceInCalendarQuarters
}

declare module 'date-fns-jalaali/esm/differenceInCalendarWeeks/index' {
  import { differenceInCalendarWeeks } from 'date-fns-jalaali/esm'
  export default differenceInCalendarWeeks
}

declare module 'date-fns-jalaali/esm/differenceInCalendarYears/index' {
  import { differenceInCalendarYears } from 'date-fns-jalaali/esm'
  export default differenceInCalendarYears
}

declare module 'date-fns-jalaali/esm/differenceInDays/index' {
  import { differenceInDays } from 'date-fns-jalaali/esm'
  export default differenceInDays
}

declare module 'date-fns-jalaali/esm/differenceInHours/index' {
  import { differenceInHours } from 'date-fns-jalaali/esm'
  export default differenceInHours
}

declare module 'date-fns-jalaali/esm/differenceInISOWeekYears/index' {
  import { differenceInISOWeekYears } from 'date-fns-jalaali/esm'
  export default differenceInISOWeekYears
}

declare module 'date-fns-jalaali/esm/differenceInMilliseconds/index' {
  import { differenceInMilliseconds } from 'date-fns-jalaali/esm'
  export default differenceInMilliseconds
}

declare module 'date-fns-jalaali/esm/differenceInMinutes/index' {
  import { differenceInMinutes } from 'date-fns-jalaali/esm'
  export default differenceInMinutes
}

declare module 'date-fns-jalaali/esm/differenceInMonths/index' {
  import { differenceInMonths } from 'date-fns-jalaali/esm'
  export default differenceInMonths
}

declare module 'date-fns-jalaali/esm/differenceInQuarters/index' {
  import { differenceInQuarters } from 'date-fns-jalaali/esm'
  export default differenceInQuarters
}

declare module 'date-fns-jalaali/esm/differenceInSeconds/index' {
  import { differenceInSeconds } from 'date-fns-jalaali/esm'
  export default differenceInSeconds
}

declare module 'date-fns-jalaali/esm/differenceInWeeks/index' {
  import { differenceInWeeks } from 'date-fns-jalaali/esm'
  export default differenceInWeeks
}

declare module 'date-fns-jalaali/esm/differenceInYears/index' {
  import { differenceInYears } from 'date-fns-jalaali/esm'
  export default differenceInYears
}

declare module 'date-fns-jalaali/esm/eachDayOfInterval/index' {
  import { eachDayOfInterval } from 'date-fns-jalaali/esm'
  export default eachDayOfInterval
}

declare module 'date-fns-jalaali/esm/eachMonthOfInterval/index' {
  import { eachMonthOfInterval } from 'date-fns-jalaali/esm'
  export default eachMonthOfInterval
}

declare module 'date-fns-jalaali/esm/eachWeekendOfInterval/index' {
  import { eachWeekendOfInterval } from 'date-fns-jalaali/esm'
  export default eachWeekendOfInterval
}

declare module 'date-fns-jalaali/esm/eachWeekendOfMonth/index' {
  import { eachWeekendOfMonth } from 'date-fns-jalaali/esm'
  export default eachWeekendOfMonth
}

declare module 'date-fns-jalaali/esm/eachWeekendOfYear/index' {
  import { eachWeekendOfYear } from 'date-fns-jalaali/esm'
  export default eachWeekendOfYear
}

declare module 'date-fns-jalaali/esm/eachWeekOfInterval/index' {
  import { eachWeekOfInterval } from 'date-fns-jalaali/esm'
  export default eachWeekOfInterval
}

declare module 'date-fns-jalaali/esm/eachYearOfInterval/index' {
  import { eachYearOfInterval } from 'date-fns-jalaali/esm'
  export default eachYearOfInterval
}

declare module 'date-fns-jalaali/esm/endOfDay/index' {
  import { endOfDay } from 'date-fns-jalaali/esm'
  export default endOfDay
}

declare module 'date-fns-jalaali/esm/endOfDecade/index' {
  import { endOfDecade } from 'date-fns-jalaali/esm'
  export default endOfDecade
}

declare module 'date-fns-jalaali/esm/endOfHour/index' {
  import { endOfHour } from 'date-fns-jalaali/esm'
  export default endOfHour
}

declare module 'date-fns-jalaali/esm/endOfISOWeek/index' {
  import { endOfISOWeek } from 'date-fns-jalaali/esm'
  export default endOfISOWeek
}

declare module 'date-fns-jalaali/esm/endOfISOWeekYear/index' {
  import { endOfISOWeekYear } from 'date-fns-jalaali/esm'
  export default endOfISOWeekYear
}

declare module 'date-fns-jalaali/esm/endOfMinute/index' {
  import { endOfMinute } from 'date-fns-jalaali/esm'
  export default endOfMinute
}

declare module 'date-fns-jalaali/esm/endOfMonth/index' {
  import { endOfMonth } from 'date-fns-jalaali/esm'
  export default endOfMonth
}

declare module 'date-fns-jalaali/esm/endOfQuarter/index' {
  import { endOfQuarter } from 'date-fns-jalaali/esm'
  export default endOfQuarter
}

declare module 'date-fns-jalaali/esm/endOfSecond/index' {
  import { endOfSecond } from 'date-fns-jalaali/esm'
  export default endOfSecond
}

declare module 'date-fns-jalaali/esm/endOfToday/index' {
  import { endOfToday } from 'date-fns-jalaali/esm'
  export default endOfToday
}

declare module 'date-fns-jalaali/esm/endOfTomorrow/index' {
  import { endOfTomorrow } from 'date-fns-jalaali/esm'
  export default endOfTomorrow
}

declare module 'date-fns-jalaali/esm/endOfWeek/index' {
  import { endOfWeek } from 'date-fns-jalaali/esm'
  export default endOfWeek
}

declare module 'date-fns-jalaali/esm/endOfYear/index' {
  import { endOfYear } from 'date-fns-jalaali/esm'
  export default endOfYear
}

declare module 'date-fns-jalaali/esm/endOfYesterday/index' {
  import { endOfYesterday } from 'date-fns-jalaali/esm'
  export default endOfYesterday
}

declare module 'date-fns-jalaali/esm/format/index' {
  import { format } from 'date-fns-jalaali/esm'
  export default format
}

declare module 'date-fns-jalaali/esm/formatDistance/index' {
  import { formatDistance } from 'date-fns-jalaali/esm'
  export default formatDistance
}

declare module 'date-fns-jalaali/esm/formatDistanceStrict/index' {
  import { formatDistanceStrict } from 'date-fns-jalaali/esm'
  export default formatDistanceStrict
}

declare module 'date-fns-jalaali/esm/formatDistanceToNow/index' {
  import { formatDistanceToNow } from 'date-fns-jalaali/esm'
  export default formatDistanceToNow
}

declare module 'date-fns-jalaali/esm/formatDistanceToNowStrict/index' {
  import { formatDistanceToNowStrict } from 'date-fns-jalaali/esm'
  export default formatDistanceToNowStrict
}

declare module 'date-fns-jalaali/esm/formatISO/index' {
  import { formatISO } from 'date-fns-jalaali/esm'
  export default formatISO
}

declare module 'date-fns-jalaali/esm/formatISO9075/index' {
  import { formatISO9075 } from 'date-fns-jalaali/esm'
  export default formatISO9075
}

declare module 'date-fns-jalaali/esm/formatISODuration/index' {
  import { formatISODuration } from 'date-fns-jalaali/esm'
  export default formatISODuration
}

declare module 'date-fns-jalaali/esm/formatRelative/index' {
  import { formatRelative } from 'date-fns-jalaali/esm'
  export default formatRelative
}

declare module 'date-fns-jalaali/esm/formatRFC3339/index' {
  import { formatRFC3339 } from 'date-fns-jalaali/esm'
  export default formatRFC3339
}

declare module 'date-fns-jalaali/esm/formatRFC7231/index' {
  import { formatRFC7231 } from 'date-fns-jalaali/esm'
  export default formatRFC7231
}

declare module 'date-fns-jalaali/esm/fromUnixTime/index' {
  import { fromUnixTime } from 'date-fns-jalaali/esm'
  export default fromUnixTime
}

declare module 'date-fns-jalaali/esm/getDate/index' {
  import { getDate } from 'date-fns-jalaali/esm'
  export default getDate
}

declare module 'date-fns-jalaali/esm/getDay/index' {
  import { getDay } from 'date-fns-jalaali/esm'
  export default getDay
}

declare module 'date-fns-jalaali/esm/getDayOfYear/index' {
  import { getDayOfYear } from 'date-fns-jalaali/esm'
  export default getDayOfYear
}

declare module 'date-fns-jalaali/esm/getDaysInMonth/index' {
  import { getDaysInMonth } from 'date-fns-jalaali/esm'
  export default getDaysInMonth
}

declare module 'date-fns-jalaali/esm/getDaysInYear/index' {
  import { getDaysInYear } from 'date-fns-jalaali/esm'
  export default getDaysInYear
}

declare module 'date-fns-jalaali/esm/getDecade/index' {
  import { getDecade } from 'date-fns-jalaali/esm'
  export default getDecade
}

declare module 'date-fns-jalaali/esm/getHours/index' {
  import { getHours } from 'date-fns-jalaali/esm'
  export default getHours
}

declare module 'date-fns-jalaali/esm/getISODay/index' {
  import { getISODay } from 'date-fns-jalaali/esm'
  export default getISODay
}

declare module 'date-fns-jalaali/esm/getISOWeek/index' {
  import { getISOWeek } from 'date-fns-jalaali/esm'
  export default getISOWeek
}

declare module 'date-fns-jalaali/esm/getISOWeeksInYear/index' {
  import { getISOWeeksInYear } from 'date-fns-jalaali/esm'
  export default getISOWeeksInYear
}

declare module 'date-fns-jalaali/esm/getISOWeekYear/index' {
  import { getISOWeekYear } from 'date-fns-jalaali/esm'
  export default getISOWeekYear
}

declare module 'date-fns-jalaali/esm/getMilliseconds/index' {
  import { getMilliseconds } from 'date-fns-jalaali/esm'
  export default getMilliseconds
}

declare module 'date-fns-jalaali/esm/getMinutes/index' {
  import { getMinutes } from 'date-fns-jalaali/esm'
  export default getMinutes
}

declare module 'date-fns-jalaali/esm/getMonth/index' {
  import { getMonth } from 'date-fns-jalaali/esm'
  export default getMonth
}

declare module 'date-fns-jalaali/esm/getOverlappingDaysInIntervals/index' {
  import { getOverlappingDaysInIntervals } from 'date-fns-jalaali/esm'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns-jalaali/esm/getQuarter/index' {
  import { getQuarter } from 'date-fns-jalaali/esm'
  export default getQuarter
}

declare module 'date-fns-jalaali/esm/getSeconds/index' {
  import { getSeconds } from 'date-fns-jalaali/esm'
  export default getSeconds
}

declare module 'date-fns-jalaali/esm/getTime/index' {
  import { getTime } from 'date-fns-jalaali/esm'
  export default getTime
}

declare module 'date-fns-jalaali/esm/getUnixTime/index' {
  import { getUnixTime } from 'date-fns-jalaali/esm'
  export default getUnixTime
}

declare module 'date-fns-jalaali/esm/getWeek/index' {
  import { getWeek } from 'date-fns-jalaali/esm'
  export default getWeek
}

declare module 'date-fns-jalaali/esm/getWeekOfMonth/index' {
  import { getWeekOfMonth } from 'date-fns-jalaali/esm'
  export default getWeekOfMonth
}

declare module 'date-fns-jalaali/esm/getWeeksInMonth/index' {
  import { getWeeksInMonth } from 'date-fns-jalaali/esm'
  export default getWeeksInMonth
}

declare module 'date-fns-jalaali/esm/getWeekYear/index' {
  import { getWeekYear } from 'date-fns-jalaali/esm'
  export default getWeekYear
}

declare module 'date-fns-jalaali/esm/getYear/index' {
  import { getYear } from 'date-fns-jalaali/esm'
  export default getYear
}

declare module 'date-fns-jalaali/esm/intervalToDuration/index' {
  import { intervalToDuration } from 'date-fns-jalaali/esm'
  export default intervalToDuration
}

declare module 'date-fns-jalaali/esm/isAfter/index' {
  import { isAfter } from 'date-fns-jalaali/esm'
  export default isAfter
}

declare module 'date-fns-jalaali/esm/isBefore/index' {
  import { isBefore } from 'date-fns-jalaali/esm'
  export default isBefore
}

declare module 'date-fns-jalaali/esm/isDate/index' {
  import { isDate } from 'date-fns-jalaali/esm'
  export default isDate
}

declare module 'date-fns-jalaali/esm/isEqual/index' {
  import { isEqual } from 'date-fns-jalaali/esm'
  export default isEqual
}

declare module 'date-fns-jalaali/esm/isExists/index' {
  import { isExists } from 'date-fns-jalaali/esm'
  export default isExists
}

declare module 'date-fns-jalaali/esm/isFirstDayOfMonth/index' {
  import { isFirstDayOfMonth } from 'date-fns-jalaali/esm'
  export default isFirstDayOfMonth
}

declare module 'date-fns-jalaali/esm/isFriday/index' {
  import { isFriday } from 'date-fns-jalaali/esm'
  export default isFriday
}

declare module 'date-fns-jalaali/esm/isFuture/index' {
  import { isFuture } from 'date-fns-jalaali/esm'
  export default isFuture
}

declare module 'date-fns-jalaali/esm/isLastDayOfMonth/index' {
  import { isLastDayOfMonth } from 'date-fns-jalaali/esm'
  export default isLastDayOfMonth
}

declare module 'date-fns-jalaali/esm/isLeapYear/index' {
  import { isLeapYear } from 'date-fns-jalaali/esm'
  export default isLeapYear
}

declare module 'date-fns-jalaali/esm/isMonday/index' {
  import { isMonday } from 'date-fns-jalaali/esm'
  export default isMonday
}

declare module 'date-fns-jalaali/esm/isPast/index' {
  import { isPast } from 'date-fns-jalaali/esm'
  export default isPast
}

declare module 'date-fns-jalaali/esm/isSameDay/index' {
  import { isSameDay } from 'date-fns-jalaali/esm'
  export default isSameDay
}

declare module 'date-fns-jalaali/esm/isSameHour/index' {
  import { isSameHour } from 'date-fns-jalaali/esm'
  export default isSameHour
}

declare module 'date-fns-jalaali/esm/isSameISOWeek/index' {
  import { isSameISOWeek } from 'date-fns-jalaali/esm'
  export default isSameISOWeek
}

declare module 'date-fns-jalaali/esm/isSameISOWeekYear/index' {
  import { isSameISOWeekYear } from 'date-fns-jalaali/esm'
  export default isSameISOWeekYear
}

declare module 'date-fns-jalaali/esm/isSameMinute/index' {
  import { isSameMinute } from 'date-fns-jalaali/esm'
  export default isSameMinute
}

declare module 'date-fns-jalaali/esm/isSameMonth/index' {
  import { isSameMonth } from 'date-fns-jalaali/esm'
  export default isSameMonth
}

declare module 'date-fns-jalaali/esm/isSameQuarter/index' {
  import { isSameQuarter } from 'date-fns-jalaali/esm'
  export default isSameQuarter
}

declare module 'date-fns-jalaali/esm/isSameSecond/index' {
  import { isSameSecond } from 'date-fns-jalaali/esm'
  export default isSameSecond
}

declare module 'date-fns-jalaali/esm/isSameWeek/index' {
  import { isSameWeek } from 'date-fns-jalaali/esm'
  export default isSameWeek
}

declare module 'date-fns-jalaali/esm/isSameYear/index' {
  import { isSameYear } from 'date-fns-jalaali/esm'
  export default isSameYear
}

declare module 'date-fns-jalaali/esm/isSaturday/index' {
  import { isSaturday } from 'date-fns-jalaali/esm'
  export default isSaturday
}

declare module 'date-fns-jalaali/esm/isSunday/index' {
  import { isSunday } from 'date-fns-jalaali/esm'
  export default isSunday
}

declare module 'date-fns-jalaali/esm/isThisHour/index' {
  import { isThisHour } from 'date-fns-jalaali/esm'
  export default isThisHour
}

declare module 'date-fns-jalaali/esm/isThisISOWeek/index' {
  import { isThisISOWeek } from 'date-fns-jalaali/esm'
  export default isThisISOWeek
}

declare module 'date-fns-jalaali/esm/isThisMinute/index' {
  import { isThisMinute } from 'date-fns-jalaali/esm'
  export default isThisMinute
}

declare module 'date-fns-jalaali/esm/isThisMonth/index' {
  import { isThisMonth } from 'date-fns-jalaali/esm'
  export default isThisMonth
}

declare module 'date-fns-jalaali/esm/isThisQuarter/index' {
  import { isThisQuarter } from 'date-fns-jalaali/esm'
  export default isThisQuarter
}

declare module 'date-fns-jalaali/esm/isThisSecond/index' {
  import { isThisSecond } from 'date-fns-jalaali/esm'
  export default isThisSecond
}

declare module 'date-fns-jalaali/esm/isThisWeek/index' {
  import { isThisWeek } from 'date-fns-jalaali/esm'
  export default isThisWeek
}

declare module 'date-fns-jalaali/esm/isThisYear/index' {
  import { isThisYear } from 'date-fns-jalaali/esm'
  export default isThisYear
}

declare module 'date-fns-jalaali/esm/isThursday/index' {
  import { isThursday } from 'date-fns-jalaali/esm'
  export default isThursday
}

declare module 'date-fns-jalaali/esm/isToday/index' {
  import { isToday } from 'date-fns-jalaali/esm'
  export default isToday
}

declare module 'date-fns-jalaali/esm/isTomorrow/index' {
  import { isTomorrow } from 'date-fns-jalaali/esm'
  export default isTomorrow
}

declare module 'date-fns-jalaali/esm/isTuesday/index' {
  import { isTuesday } from 'date-fns-jalaali/esm'
  export default isTuesday
}

declare module 'date-fns-jalaali/esm/isValid/index' {
  import { isValid } from 'date-fns-jalaali/esm'
  export default isValid
}

declare module 'date-fns-jalaali/esm/isWednesday/index' {
  import { isWednesday } from 'date-fns-jalaali/esm'
  export default isWednesday
}

declare module 'date-fns-jalaali/esm/isWeekend/index' {
  import { isWeekend } from 'date-fns-jalaali/esm'
  export default isWeekend
}

declare module 'date-fns-jalaali/esm/isWithinInterval/index' {
  import { isWithinInterval } from 'date-fns-jalaali/esm'
  export default isWithinInterval
}

declare module 'date-fns-jalaali/esm/isYesterday/index' {
  import { isYesterday } from 'date-fns-jalaali/esm'
  export default isYesterday
}

declare module 'date-fns-jalaali/esm/lastDayOfDecade/index' {
  import { lastDayOfDecade } from 'date-fns-jalaali/esm'
  export default lastDayOfDecade
}

declare module 'date-fns-jalaali/esm/lastDayOfISOWeek/index' {
  import { lastDayOfISOWeek } from 'date-fns-jalaali/esm'
  export default lastDayOfISOWeek
}

declare module 'date-fns-jalaali/esm/lastDayOfISOWeekYear/index' {
  import { lastDayOfISOWeekYear } from 'date-fns-jalaali/esm'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns-jalaali/esm/lastDayOfMonth/index' {
  import { lastDayOfMonth } from 'date-fns-jalaali/esm'
  export default lastDayOfMonth
}

declare module 'date-fns-jalaali/esm/lastDayOfQuarter/index' {
  import { lastDayOfQuarter } from 'date-fns-jalaali/esm'
  export default lastDayOfQuarter
}

declare module 'date-fns-jalaali/esm/lastDayOfWeek/index' {
  import { lastDayOfWeek } from 'date-fns-jalaali/esm'
  export default lastDayOfWeek
}

declare module 'date-fns-jalaali/esm/lastDayOfYear/index' {
  import { lastDayOfYear } from 'date-fns-jalaali/esm'
  export default lastDayOfYear
}

declare module 'date-fns-jalaali/esm/lightFormat/index' {
  import { lightFormat } from 'date-fns-jalaali/esm'
  export default lightFormat
}

declare module 'date-fns-jalaali/esm/max/index' {
  import { max } from 'date-fns-jalaali/esm'
  export default max
}

declare module 'date-fns-jalaali/esm/min/index' {
  import { min } from 'date-fns-jalaali/esm'
  export default min
}

declare module 'date-fns-jalaali/esm/parse/index' {
  import { parse } from 'date-fns-jalaali/esm'
  export default parse
}

declare module 'date-fns-jalaali/esm/parseISO/index' {
  import { parseISO } from 'date-fns-jalaali/esm'
  export default parseISO
}

declare module 'date-fns-jalaali/esm/parseJSON/index' {
  import { parseJSON } from 'date-fns-jalaali/esm'
  export default parseJSON
}

declare module 'date-fns-jalaali/esm/roundToNearestMinutes/index' {
  import { roundToNearestMinutes } from 'date-fns-jalaali/esm'
  export default roundToNearestMinutes
}

declare module 'date-fns-jalaali/esm/set/index' {
  import { set } from 'date-fns-jalaali/esm'
  export default set
}

declare module 'date-fns-jalaali/esm/setDate/index' {
  import { setDate } from 'date-fns-jalaali/esm'
  export default setDate
}

declare module 'date-fns-jalaali/esm/setDay/index' {
  import { setDay } from 'date-fns-jalaali/esm'
  export default setDay
}

declare module 'date-fns-jalaali/esm/setDayOfYear/index' {
  import { setDayOfYear } from 'date-fns-jalaali/esm'
  export default setDayOfYear
}

declare module 'date-fns-jalaali/esm/setHours/index' {
  import { setHours } from 'date-fns-jalaali/esm'
  export default setHours
}

declare module 'date-fns-jalaali/esm/setISODay/index' {
  import { setISODay } from 'date-fns-jalaali/esm'
  export default setISODay
}

declare module 'date-fns-jalaali/esm/setISOWeek/index' {
  import { setISOWeek } from 'date-fns-jalaali/esm'
  export default setISOWeek
}

declare module 'date-fns-jalaali/esm/setISOWeekYear/index' {
  import { setISOWeekYear } from 'date-fns-jalaali/esm'
  export default setISOWeekYear
}

declare module 'date-fns-jalaali/esm/setMilliseconds/index' {
  import { setMilliseconds } from 'date-fns-jalaali/esm'
  export default setMilliseconds
}

declare module 'date-fns-jalaali/esm/setMinutes/index' {
  import { setMinutes } from 'date-fns-jalaali/esm'
  export default setMinutes
}

declare module 'date-fns-jalaali/esm/setMonth/index' {
  import { setMonth } from 'date-fns-jalaali/esm'
  export default setMonth
}

declare module 'date-fns-jalaali/esm/setQuarter/index' {
  import { setQuarter } from 'date-fns-jalaali/esm'
  export default setQuarter
}

declare module 'date-fns-jalaali/esm/setSeconds/index' {
  import { setSeconds } from 'date-fns-jalaali/esm'
  export default setSeconds
}

declare module 'date-fns-jalaali/esm/setWeek/index' {
  import { setWeek } from 'date-fns-jalaali/esm'
  export default setWeek
}

declare module 'date-fns-jalaali/esm/setWeekYear/index' {
  import { setWeekYear } from 'date-fns-jalaali/esm'
  export default setWeekYear
}

declare module 'date-fns-jalaali/esm/setYear/index' {
  import { setYear } from 'date-fns-jalaali/esm'
  export default setYear
}

declare module 'date-fns-jalaali/esm/startOfDay/index' {
  import { startOfDay } from 'date-fns-jalaali/esm'
  export default startOfDay
}

declare module 'date-fns-jalaali/esm/startOfDecade/index' {
  import { startOfDecade } from 'date-fns-jalaali/esm'
  export default startOfDecade
}

declare module 'date-fns-jalaali/esm/startOfHour/index' {
  import { startOfHour } from 'date-fns-jalaali/esm'
  export default startOfHour
}

declare module 'date-fns-jalaali/esm/startOfISOWeek/index' {
  import { startOfISOWeek } from 'date-fns-jalaali/esm'
  export default startOfISOWeek
}

declare module 'date-fns-jalaali/esm/startOfISOWeekYear/index' {
  import { startOfISOWeekYear } from 'date-fns-jalaali/esm'
  export default startOfISOWeekYear
}

declare module 'date-fns-jalaali/esm/startOfMinute/index' {
  import { startOfMinute } from 'date-fns-jalaali/esm'
  export default startOfMinute
}

declare module 'date-fns-jalaali/esm/startOfMonth/index' {
  import { startOfMonth } from 'date-fns-jalaali/esm'
  export default startOfMonth
}

declare module 'date-fns-jalaali/esm/startOfQuarter/index' {
  import { startOfQuarter } from 'date-fns-jalaali/esm'
  export default startOfQuarter
}

declare module 'date-fns-jalaali/esm/startOfSecond/index' {
  import { startOfSecond } from 'date-fns-jalaali/esm'
  export default startOfSecond
}

declare module 'date-fns-jalaali/esm/startOfToday/index' {
  import { startOfToday } from 'date-fns-jalaali/esm'
  export default startOfToday
}

declare module 'date-fns-jalaali/esm/startOfTomorrow/index' {
  import { startOfTomorrow } from 'date-fns-jalaali/esm'
  export default startOfTomorrow
}

declare module 'date-fns-jalaali/esm/startOfWeek/index' {
  import { startOfWeek } from 'date-fns-jalaali/esm'
  export default startOfWeek
}

declare module 'date-fns-jalaali/esm/startOfWeekYear/index' {
  import { startOfWeekYear } from 'date-fns-jalaali/esm'
  export default startOfWeekYear
}

declare module 'date-fns-jalaali/esm/startOfYear/index' {
  import { startOfYear } from 'date-fns-jalaali/esm'
  export default startOfYear
}

declare module 'date-fns-jalaali/esm/startOfYesterday/index' {
  import { startOfYesterday } from 'date-fns-jalaali/esm'
  export default startOfYesterday
}

declare module 'date-fns-jalaali/esm/sub/index' {
  import { sub } from 'date-fns-jalaali/esm'
  export default sub
}

declare module 'date-fns-jalaali/esm/subBusinessDays/index' {
  import { subBusinessDays } from 'date-fns-jalaali/esm'
  export default subBusinessDays
}

declare module 'date-fns-jalaali/esm/subDays/index' {
  import { subDays } from 'date-fns-jalaali/esm'
  export default subDays
}

declare module 'date-fns-jalaali/esm/subHours/index' {
  import { subHours } from 'date-fns-jalaali/esm'
  export default subHours
}

declare module 'date-fns-jalaali/esm/subISOWeekYears/index' {
  import { subISOWeekYears } from 'date-fns-jalaali/esm'
  export default subISOWeekYears
}

declare module 'date-fns-jalaali/esm/subMilliseconds/index' {
  import { subMilliseconds } from 'date-fns-jalaali/esm'
  export default subMilliseconds
}

declare module 'date-fns-jalaali/esm/subMinutes/index' {
  import { subMinutes } from 'date-fns-jalaali/esm'
  export default subMinutes
}

declare module 'date-fns-jalaali/esm/subMonths/index' {
  import { subMonths } from 'date-fns-jalaali/esm'
  export default subMonths
}

declare module 'date-fns-jalaali/esm/subQuarters/index' {
  import { subQuarters } from 'date-fns-jalaali/esm'
  export default subQuarters
}

declare module 'date-fns-jalaali/esm/subSeconds/index' {
  import { subSeconds } from 'date-fns-jalaali/esm'
  export default subSeconds
}

declare module 'date-fns-jalaali/esm/subWeeks/index' {
  import { subWeeks } from 'date-fns-jalaali/esm'
  export default subWeeks
}

declare module 'date-fns-jalaali/esm/subYears/index' {
  import { subYears } from 'date-fns-jalaali/esm'
  export default subYears
}

declare module 'date-fns-jalaali/esm/toDate/index' {
  import { toDate } from 'date-fns-jalaali/esm'
  export default toDate
}

declare module 'date-fns-jalaali/esm/add/index.js' {
  import { add } from 'date-fns-jalaali/esm'
  export default add
}

declare module 'date-fns-jalaali/esm/addBusinessDays/index.js' {
  import { addBusinessDays } from 'date-fns-jalaali/esm'
  export default addBusinessDays
}

declare module 'date-fns-jalaali/esm/addDays/index.js' {
  import { addDays } from 'date-fns-jalaali/esm'
  export default addDays
}

declare module 'date-fns-jalaali/esm/addHours/index.js' {
  import { addHours } from 'date-fns-jalaali/esm'
  export default addHours
}

declare module 'date-fns-jalaali/esm/addISOWeekYears/index.js' {
  import { addISOWeekYears } from 'date-fns-jalaali/esm'
  export default addISOWeekYears
}

declare module 'date-fns-jalaali/esm/addMilliseconds/index.js' {
  import { addMilliseconds } from 'date-fns-jalaali/esm'
  export default addMilliseconds
}

declare module 'date-fns-jalaali/esm/addMinutes/index.js' {
  import { addMinutes } from 'date-fns-jalaali/esm'
  export default addMinutes
}

declare module 'date-fns-jalaali/esm/addMonths/index.js' {
  import { addMonths } from 'date-fns-jalaali/esm'
  export default addMonths
}

declare module 'date-fns-jalaali/esm/addQuarters/index.js' {
  import { addQuarters } from 'date-fns-jalaali/esm'
  export default addQuarters
}

declare module 'date-fns-jalaali/esm/addSeconds/index.js' {
  import { addSeconds } from 'date-fns-jalaali/esm'
  export default addSeconds
}

declare module 'date-fns-jalaali/esm/addWeeks/index.js' {
  import { addWeeks } from 'date-fns-jalaali/esm'
  export default addWeeks
}

declare module 'date-fns-jalaali/esm/addYears/index.js' {
  import { addYears } from 'date-fns-jalaali/esm'
  export default addYears
}

declare module 'date-fns-jalaali/esm/areIntervalsOverlapping/index.js' {
  import { areIntervalsOverlapping } from 'date-fns-jalaali/esm'
  export default areIntervalsOverlapping
}

declare module 'date-fns-jalaali/esm/closestIndexTo/index.js' {
  import { closestIndexTo } from 'date-fns-jalaali/esm'
  export default closestIndexTo
}

declare module 'date-fns-jalaali/esm/closestTo/index.js' {
  import { closestTo } from 'date-fns-jalaali/esm'
  export default closestTo
}

declare module 'date-fns-jalaali/esm/compareAsc/index.js' {
  import { compareAsc } from 'date-fns-jalaali/esm'
  export default compareAsc
}

declare module 'date-fns-jalaali/esm/compareDesc/index.js' {
  import { compareDesc } from 'date-fns-jalaali/esm'
  export default compareDesc
}

declare module 'date-fns-jalaali/esm/differenceInBusinessDays/index.js' {
  import { differenceInBusinessDays } from 'date-fns-jalaali/esm'
  export default differenceInBusinessDays
}

declare module 'date-fns-jalaali/esm/differenceInCalendarDays/index.js' {
  import { differenceInCalendarDays } from 'date-fns-jalaali/esm'
  export default differenceInCalendarDays
}

declare module 'date-fns-jalaali/esm/differenceInCalendarISOWeeks/index.js' {
  import { differenceInCalendarISOWeeks } from 'date-fns-jalaali/esm'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns-jalaali/esm/differenceInCalendarISOWeekYears/index.js' {
  import { differenceInCalendarISOWeekYears } from 'date-fns-jalaali/esm'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns-jalaali/esm/differenceInCalendarMonths/index.js' {
  import { differenceInCalendarMonths } from 'date-fns-jalaali/esm'
  export default differenceInCalendarMonths
}

declare module 'date-fns-jalaali/esm/differenceInCalendarQuarters/index.js' {
  import { differenceInCalendarQuarters } from 'date-fns-jalaali/esm'
  export default differenceInCalendarQuarters
}

declare module 'date-fns-jalaali/esm/differenceInCalendarWeeks/index.js' {
  import { differenceInCalendarWeeks } from 'date-fns-jalaali/esm'
  export default differenceInCalendarWeeks
}

declare module 'date-fns-jalaali/esm/differenceInCalendarYears/index.js' {
  import { differenceInCalendarYears } from 'date-fns-jalaali/esm'
  export default differenceInCalendarYears
}

declare module 'date-fns-jalaali/esm/differenceInDays/index.js' {
  import { differenceInDays } from 'date-fns-jalaali/esm'
  export default differenceInDays
}

declare module 'date-fns-jalaali/esm/differenceInHours/index.js' {
  import { differenceInHours } from 'date-fns-jalaali/esm'
  export default differenceInHours
}

declare module 'date-fns-jalaali/esm/differenceInISOWeekYears/index.js' {
  import { differenceInISOWeekYears } from 'date-fns-jalaali/esm'
  export default differenceInISOWeekYears
}

declare module 'date-fns-jalaali/esm/differenceInMilliseconds/index.js' {
  import { differenceInMilliseconds } from 'date-fns-jalaali/esm'
  export default differenceInMilliseconds
}

declare module 'date-fns-jalaali/esm/differenceInMinutes/index.js' {
  import { differenceInMinutes } from 'date-fns-jalaali/esm'
  export default differenceInMinutes
}

declare module 'date-fns-jalaali/esm/differenceInMonths/index.js' {
  import { differenceInMonths } from 'date-fns-jalaali/esm'
  export default differenceInMonths
}

declare module 'date-fns-jalaali/esm/differenceInQuarters/index.js' {
  import { differenceInQuarters } from 'date-fns-jalaali/esm'
  export default differenceInQuarters
}

declare module 'date-fns-jalaali/esm/differenceInSeconds/index.js' {
  import { differenceInSeconds } from 'date-fns-jalaali/esm'
  export default differenceInSeconds
}

declare module 'date-fns-jalaali/esm/differenceInWeeks/index.js' {
  import { differenceInWeeks } from 'date-fns-jalaali/esm'
  export default differenceInWeeks
}

declare module 'date-fns-jalaali/esm/differenceInYears/index.js' {
  import { differenceInYears } from 'date-fns-jalaali/esm'
  export default differenceInYears
}

declare module 'date-fns-jalaali/esm/eachDayOfInterval/index.js' {
  import { eachDayOfInterval } from 'date-fns-jalaali/esm'
  export default eachDayOfInterval
}

declare module 'date-fns-jalaali/esm/eachMonthOfInterval/index.js' {
  import { eachMonthOfInterval } from 'date-fns-jalaali/esm'
  export default eachMonthOfInterval
}

declare module 'date-fns-jalaali/esm/eachWeekendOfInterval/index.js' {
  import { eachWeekendOfInterval } from 'date-fns-jalaali/esm'
  export default eachWeekendOfInterval
}

declare module 'date-fns-jalaali/esm/eachWeekendOfMonth/index.js' {
  import { eachWeekendOfMonth } from 'date-fns-jalaali/esm'
  export default eachWeekendOfMonth
}

declare module 'date-fns-jalaali/esm/eachWeekendOfYear/index.js' {
  import { eachWeekendOfYear } from 'date-fns-jalaali/esm'
  export default eachWeekendOfYear
}

declare module 'date-fns-jalaali/esm/eachWeekOfInterval/index.js' {
  import { eachWeekOfInterval } from 'date-fns-jalaali/esm'
  export default eachWeekOfInterval
}

declare module 'date-fns-jalaali/esm/eachYearOfInterval/index.js' {
  import { eachYearOfInterval } from 'date-fns-jalaali/esm'
  export default eachYearOfInterval
}

declare module 'date-fns-jalaali/esm/endOfDay/index.js' {
  import { endOfDay } from 'date-fns-jalaali/esm'
  export default endOfDay
}

declare module 'date-fns-jalaali/esm/endOfDecade/index.js' {
  import { endOfDecade } from 'date-fns-jalaali/esm'
  export default endOfDecade
}

declare module 'date-fns-jalaali/esm/endOfHour/index.js' {
  import { endOfHour } from 'date-fns-jalaali/esm'
  export default endOfHour
}

declare module 'date-fns-jalaali/esm/endOfISOWeek/index.js' {
  import { endOfISOWeek } from 'date-fns-jalaali/esm'
  export default endOfISOWeek
}

declare module 'date-fns-jalaali/esm/endOfISOWeekYear/index.js' {
  import { endOfISOWeekYear } from 'date-fns-jalaali/esm'
  export default endOfISOWeekYear
}

declare module 'date-fns-jalaali/esm/endOfMinute/index.js' {
  import { endOfMinute } from 'date-fns-jalaali/esm'
  export default endOfMinute
}

declare module 'date-fns-jalaali/esm/endOfMonth/index.js' {
  import { endOfMonth } from 'date-fns-jalaali/esm'
  export default endOfMonth
}

declare module 'date-fns-jalaali/esm/endOfQuarter/index.js' {
  import { endOfQuarter } from 'date-fns-jalaali/esm'
  export default endOfQuarter
}

declare module 'date-fns-jalaali/esm/endOfSecond/index.js' {
  import { endOfSecond } from 'date-fns-jalaali/esm'
  export default endOfSecond
}

declare module 'date-fns-jalaali/esm/endOfToday/index.js' {
  import { endOfToday } from 'date-fns-jalaali/esm'
  export default endOfToday
}

declare module 'date-fns-jalaali/esm/endOfTomorrow/index.js' {
  import { endOfTomorrow } from 'date-fns-jalaali/esm'
  export default endOfTomorrow
}

declare module 'date-fns-jalaali/esm/endOfWeek/index.js' {
  import { endOfWeek } from 'date-fns-jalaali/esm'
  export default endOfWeek
}

declare module 'date-fns-jalaali/esm/endOfYear/index.js' {
  import { endOfYear } from 'date-fns-jalaali/esm'
  export default endOfYear
}

declare module 'date-fns-jalaali/esm/endOfYesterday/index.js' {
  import { endOfYesterday } from 'date-fns-jalaali/esm'
  export default endOfYesterday
}

declare module 'date-fns-jalaali/esm/format/index.js' {
  import { format } from 'date-fns-jalaali/esm'
  export default format
}

declare module 'date-fns-jalaali/esm/formatDistance/index.js' {
  import { formatDistance } from 'date-fns-jalaali/esm'
  export default formatDistance
}

declare module 'date-fns-jalaali/esm/formatDistanceStrict/index.js' {
  import { formatDistanceStrict } from 'date-fns-jalaali/esm'
  export default formatDistanceStrict
}

declare module 'date-fns-jalaali/esm/formatDistanceToNow/index.js' {
  import { formatDistanceToNow } from 'date-fns-jalaali/esm'
  export default formatDistanceToNow
}

declare module 'date-fns-jalaali/esm/formatDistanceToNowStrict/index.js' {
  import { formatDistanceToNowStrict } from 'date-fns-jalaali/esm'
  export default formatDistanceToNowStrict
}

declare module 'date-fns-jalaali/esm/formatISO/index.js' {
  import { formatISO } from 'date-fns-jalaali/esm'
  export default formatISO
}

declare module 'date-fns-jalaali/esm/formatISO9075/index.js' {
  import { formatISO9075 } from 'date-fns-jalaali/esm'
  export default formatISO9075
}

declare module 'date-fns-jalaali/esm/formatISODuration/index.js' {
  import { formatISODuration } from 'date-fns-jalaali/esm'
  export default formatISODuration
}

declare module 'date-fns-jalaali/esm/formatRelative/index.js' {
  import { formatRelative } from 'date-fns-jalaali/esm'
  export default formatRelative
}

declare module 'date-fns-jalaali/esm/formatRFC3339/index.js' {
  import { formatRFC3339 } from 'date-fns-jalaali/esm'
  export default formatRFC3339
}

declare module 'date-fns-jalaali/esm/formatRFC7231/index.js' {
  import { formatRFC7231 } from 'date-fns-jalaali/esm'
  export default formatRFC7231
}

declare module 'date-fns-jalaali/esm/fromUnixTime/index.js' {
  import { fromUnixTime } from 'date-fns-jalaali/esm'
  export default fromUnixTime
}

declare module 'date-fns-jalaali/esm/getDate/index.js' {
  import { getDate } from 'date-fns-jalaali/esm'
  export default getDate
}

declare module 'date-fns-jalaali/esm/getDay/index.js' {
  import { getDay } from 'date-fns-jalaali/esm'
  export default getDay
}

declare module 'date-fns-jalaali/esm/getDayOfYear/index.js' {
  import { getDayOfYear } from 'date-fns-jalaali/esm'
  export default getDayOfYear
}

declare module 'date-fns-jalaali/esm/getDaysInMonth/index.js' {
  import { getDaysInMonth } from 'date-fns-jalaali/esm'
  export default getDaysInMonth
}

declare module 'date-fns-jalaali/esm/getDaysInYear/index.js' {
  import { getDaysInYear } from 'date-fns-jalaali/esm'
  export default getDaysInYear
}

declare module 'date-fns-jalaali/esm/getDecade/index.js' {
  import { getDecade } from 'date-fns-jalaali/esm'
  export default getDecade
}

declare module 'date-fns-jalaali/esm/getHours/index.js' {
  import { getHours } from 'date-fns-jalaali/esm'
  export default getHours
}

declare module 'date-fns-jalaali/esm/getISODay/index.js' {
  import { getISODay } from 'date-fns-jalaali/esm'
  export default getISODay
}

declare module 'date-fns-jalaali/esm/getISOWeek/index.js' {
  import { getISOWeek } from 'date-fns-jalaali/esm'
  export default getISOWeek
}

declare module 'date-fns-jalaali/esm/getISOWeeksInYear/index.js' {
  import { getISOWeeksInYear } from 'date-fns-jalaali/esm'
  export default getISOWeeksInYear
}

declare module 'date-fns-jalaali/esm/getISOWeekYear/index.js' {
  import { getISOWeekYear } from 'date-fns-jalaali/esm'
  export default getISOWeekYear
}

declare module 'date-fns-jalaali/esm/getMilliseconds/index.js' {
  import { getMilliseconds } from 'date-fns-jalaali/esm'
  export default getMilliseconds
}

declare module 'date-fns-jalaali/esm/getMinutes/index.js' {
  import { getMinutes } from 'date-fns-jalaali/esm'
  export default getMinutes
}

declare module 'date-fns-jalaali/esm/getMonth/index.js' {
  import { getMonth } from 'date-fns-jalaali/esm'
  export default getMonth
}

declare module 'date-fns-jalaali/esm/getOverlappingDaysInIntervals/index.js' {
  import { getOverlappingDaysInIntervals } from 'date-fns-jalaali/esm'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns-jalaali/esm/getQuarter/index.js' {
  import { getQuarter } from 'date-fns-jalaali/esm'
  export default getQuarter
}

declare module 'date-fns-jalaali/esm/getSeconds/index.js' {
  import { getSeconds } from 'date-fns-jalaali/esm'
  export default getSeconds
}

declare module 'date-fns-jalaali/esm/getTime/index.js' {
  import { getTime } from 'date-fns-jalaali/esm'
  export default getTime
}

declare module 'date-fns-jalaali/esm/getUnixTime/index.js' {
  import { getUnixTime } from 'date-fns-jalaali/esm'
  export default getUnixTime
}

declare module 'date-fns-jalaali/esm/getWeek/index.js' {
  import { getWeek } from 'date-fns-jalaali/esm'
  export default getWeek
}

declare module 'date-fns-jalaali/esm/getWeekOfMonth/index.js' {
  import { getWeekOfMonth } from 'date-fns-jalaali/esm'
  export default getWeekOfMonth
}

declare module 'date-fns-jalaali/esm/getWeeksInMonth/index.js' {
  import { getWeeksInMonth } from 'date-fns-jalaali/esm'
  export default getWeeksInMonth
}

declare module 'date-fns-jalaali/esm/getWeekYear/index.js' {
  import { getWeekYear } from 'date-fns-jalaali/esm'
  export default getWeekYear
}

declare module 'date-fns-jalaali/esm/getYear/index.js' {
  import { getYear } from 'date-fns-jalaali/esm'
  export default getYear
}

declare module 'date-fns-jalaali/esm/intervalToDuration/index.js' {
  import { intervalToDuration } from 'date-fns-jalaali/esm'
  export default intervalToDuration
}

declare module 'date-fns-jalaali/esm/isAfter/index.js' {
  import { isAfter } from 'date-fns-jalaali/esm'
  export default isAfter
}

declare module 'date-fns-jalaali/esm/isBefore/index.js' {
  import { isBefore } from 'date-fns-jalaali/esm'
  export default isBefore
}

declare module 'date-fns-jalaali/esm/isDate/index.js' {
  import { isDate } from 'date-fns-jalaali/esm'
  export default isDate
}

declare module 'date-fns-jalaali/esm/isEqual/index.js' {
  import { isEqual } from 'date-fns-jalaali/esm'
  export default isEqual
}

declare module 'date-fns-jalaali/esm/isExists/index.js' {
  import { isExists } from 'date-fns-jalaali/esm'
  export default isExists
}

declare module 'date-fns-jalaali/esm/isFirstDayOfMonth/index.js' {
  import { isFirstDayOfMonth } from 'date-fns-jalaali/esm'
  export default isFirstDayOfMonth
}

declare module 'date-fns-jalaali/esm/isFriday/index.js' {
  import { isFriday } from 'date-fns-jalaali/esm'
  export default isFriday
}

declare module 'date-fns-jalaali/esm/isFuture/index.js' {
  import { isFuture } from 'date-fns-jalaali/esm'
  export default isFuture
}

declare module 'date-fns-jalaali/esm/isLastDayOfMonth/index.js' {
  import { isLastDayOfMonth } from 'date-fns-jalaali/esm'
  export default isLastDayOfMonth
}

declare module 'date-fns-jalaali/esm/isLeapYear/index.js' {
  import { isLeapYear } from 'date-fns-jalaali/esm'
  export default isLeapYear
}

declare module 'date-fns-jalaali/esm/isMonday/index.js' {
  import { isMonday } from 'date-fns-jalaali/esm'
  export default isMonday
}

declare module 'date-fns-jalaali/esm/isPast/index.js' {
  import { isPast } from 'date-fns-jalaali/esm'
  export default isPast
}

declare module 'date-fns-jalaali/esm/isSameDay/index.js' {
  import { isSameDay } from 'date-fns-jalaali/esm'
  export default isSameDay
}

declare module 'date-fns-jalaali/esm/isSameHour/index.js' {
  import { isSameHour } from 'date-fns-jalaali/esm'
  export default isSameHour
}

declare module 'date-fns-jalaali/esm/isSameISOWeek/index.js' {
  import { isSameISOWeek } from 'date-fns-jalaali/esm'
  export default isSameISOWeek
}

declare module 'date-fns-jalaali/esm/isSameISOWeekYear/index.js' {
  import { isSameISOWeekYear } from 'date-fns-jalaali/esm'
  export default isSameISOWeekYear
}

declare module 'date-fns-jalaali/esm/isSameMinute/index.js' {
  import { isSameMinute } from 'date-fns-jalaali/esm'
  export default isSameMinute
}

declare module 'date-fns-jalaali/esm/isSameMonth/index.js' {
  import { isSameMonth } from 'date-fns-jalaali/esm'
  export default isSameMonth
}

declare module 'date-fns-jalaali/esm/isSameQuarter/index.js' {
  import { isSameQuarter } from 'date-fns-jalaali/esm'
  export default isSameQuarter
}

declare module 'date-fns-jalaali/esm/isSameSecond/index.js' {
  import { isSameSecond } from 'date-fns-jalaali/esm'
  export default isSameSecond
}

declare module 'date-fns-jalaali/esm/isSameWeek/index.js' {
  import { isSameWeek } from 'date-fns-jalaali/esm'
  export default isSameWeek
}

declare module 'date-fns-jalaali/esm/isSameYear/index.js' {
  import { isSameYear } from 'date-fns-jalaali/esm'
  export default isSameYear
}

declare module 'date-fns-jalaali/esm/isSaturday/index.js' {
  import { isSaturday } from 'date-fns-jalaali/esm'
  export default isSaturday
}

declare module 'date-fns-jalaali/esm/isSunday/index.js' {
  import { isSunday } from 'date-fns-jalaali/esm'
  export default isSunday
}

declare module 'date-fns-jalaali/esm/isThisHour/index.js' {
  import { isThisHour } from 'date-fns-jalaali/esm'
  export default isThisHour
}

declare module 'date-fns-jalaali/esm/isThisISOWeek/index.js' {
  import { isThisISOWeek } from 'date-fns-jalaali/esm'
  export default isThisISOWeek
}

declare module 'date-fns-jalaali/esm/isThisMinute/index.js' {
  import { isThisMinute } from 'date-fns-jalaali/esm'
  export default isThisMinute
}

declare module 'date-fns-jalaali/esm/isThisMonth/index.js' {
  import { isThisMonth } from 'date-fns-jalaali/esm'
  export default isThisMonth
}

declare module 'date-fns-jalaali/esm/isThisQuarter/index.js' {
  import { isThisQuarter } from 'date-fns-jalaali/esm'
  export default isThisQuarter
}

declare module 'date-fns-jalaali/esm/isThisSecond/index.js' {
  import { isThisSecond } from 'date-fns-jalaali/esm'
  export default isThisSecond
}

declare module 'date-fns-jalaali/esm/isThisWeek/index.js' {
  import { isThisWeek } from 'date-fns-jalaali/esm'
  export default isThisWeek
}

declare module 'date-fns-jalaali/esm/isThisYear/index.js' {
  import { isThisYear } from 'date-fns-jalaali/esm'
  export default isThisYear
}

declare module 'date-fns-jalaali/esm/isThursday/index.js' {
  import { isThursday } from 'date-fns-jalaali/esm'
  export default isThursday
}

declare module 'date-fns-jalaali/esm/isToday/index.js' {
  import { isToday } from 'date-fns-jalaali/esm'
  export default isToday
}

declare module 'date-fns-jalaali/esm/isTomorrow/index.js' {
  import { isTomorrow } from 'date-fns-jalaali/esm'
  export default isTomorrow
}

declare module 'date-fns-jalaali/esm/isTuesday/index.js' {
  import { isTuesday } from 'date-fns-jalaali/esm'
  export default isTuesday
}

declare module 'date-fns-jalaali/esm/isValid/index.js' {
  import { isValid } from 'date-fns-jalaali/esm'
  export default isValid
}

declare module 'date-fns-jalaali/esm/isWednesday/index.js' {
  import { isWednesday } from 'date-fns-jalaali/esm'
  export default isWednesday
}

declare module 'date-fns-jalaali/esm/isWeekend/index.js' {
  import { isWeekend } from 'date-fns-jalaali/esm'
  export default isWeekend
}

declare module 'date-fns-jalaali/esm/isWithinInterval/index.js' {
  import { isWithinInterval } from 'date-fns-jalaali/esm'
  export default isWithinInterval
}

declare module 'date-fns-jalaali/esm/isYesterday/index.js' {
  import { isYesterday } from 'date-fns-jalaali/esm'
  export default isYesterday
}

declare module 'date-fns-jalaali/esm/lastDayOfDecade/index.js' {
  import { lastDayOfDecade } from 'date-fns-jalaali/esm'
  export default lastDayOfDecade
}

declare module 'date-fns-jalaali/esm/lastDayOfISOWeek/index.js' {
  import { lastDayOfISOWeek } from 'date-fns-jalaali/esm'
  export default lastDayOfISOWeek
}

declare module 'date-fns-jalaali/esm/lastDayOfISOWeekYear/index.js' {
  import { lastDayOfISOWeekYear } from 'date-fns-jalaali/esm'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns-jalaali/esm/lastDayOfMonth/index.js' {
  import { lastDayOfMonth } from 'date-fns-jalaali/esm'
  export default lastDayOfMonth
}

declare module 'date-fns-jalaali/esm/lastDayOfQuarter/index.js' {
  import { lastDayOfQuarter } from 'date-fns-jalaali/esm'
  export default lastDayOfQuarter
}

declare module 'date-fns-jalaali/esm/lastDayOfWeek/index.js' {
  import { lastDayOfWeek } from 'date-fns-jalaali/esm'
  export default lastDayOfWeek
}

declare module 'date-fns-jalaali/esm/lastDayOfYear/index.js' {
  import { lastDayOfYear } from 'date-fns-jalaali/esm'
  export default lastDayOfYear
}

declare module 'date-fns-jalaali/esm/lightFormat/index.js' {
  import { lightFormat } from 'date-fns-jalaali/esm'
  export default lightFormat
}

declare module 'date-fns-jalaali/esm/max/index.js' {
  import { max } from 'date-fns-jalaali/esm'
  export default max
}

declare module 'date-fns-jalaali/esm/min/index.js' {
  import { min } from 'date-fns-jalaali/esm'
  export default min
}

declare module 'date-fns-jalaali/esm/parse/index.js' {
  import { parse } from 'date-fns-jalaali/esm'
  export default parse
}

declare module 'date-fns-jalaali/esm/parseISO/index.js' {
  import { parseISO } from 'date-fns-jalaali/esm'
  export default parseISO
}

declare module 'date-fns-jalaali/esm/parseJSON/index.js' {
  import { parseJSON } from 'date-fns-jalaali/esm'
  export default parseJSON
}

declare module 'date-fns-jalaali/esm/roundToNearestMinutes/index.js' {
  import { roundToNearestMinutes } from 'date-fns-jalaali/esm'
  export default roundToNearestMinutes
}

declare module 'date-fns-jalaali/esm/set/index.js' {
  import { set } from 'date-fns-jalaali/esm'
  export default set
}

declare module 'date-fns-jalaali/esm/setDate/index.js' {
  import { setDate } from 'date-fns-jalaali/esm'
  export default setDate
}

declare module 'date-fns-jalaali/esm/setDay/index.js' {
  import { setDay } from 'date-fns-jalaali/esm'
  export default setDay
}

declare module 'date-fns-jalaali/esm/setDayOfYear/index.js' {
  import { setDayOfYear } from 'date-fns-jalaali/esm'
  export default setDayOfYear
}

declare module 'date-fns-jalaali/esm/setHours/index.js' {
  import { setHours } from 'date-fns-jalaali/esm'
  export default setHours
}

declare module 'date-fns-jalaali/esm/setISODay/index.js' {
  import { setISODay } from 'date-fns-jalaali/esm'
  export default setISODay
}

declare module 'date-fns-jalaali/esm/setISOWeek/index.js' {
  import { setISOWeek } from 'date-fns-jalaali/esm'
  export default setISOWeek
}

declare module 'date-fns-jalaali/esm/setISOWeekYear/index.js' {
  import { setISOWeekYear } from 'date-fns-jalaali/esm'
  export default setISOWeekYear
}

declare module 'date-fns-jalaali/esm/setMilliseconds/index.js' {
  import { setMilliseconds } from 'date-fns-jalaali/esm'
  export default setMilliseconds
}

declare module 'date-fns-jalaali/esm/setMinutes/index.js' {
  import { setMinutes } from 'date-fns-jalaali/esm'
  export default setMinutes
}

declare module 'date-fns-jalaali/esm/setMonth/index.js' {
  import { setMonth } from 'date-fns-jalaali/esm'
  export default setMonth
}

declare module 'date-fns-jalaali/esm/setQuarter/index.js' {
  import { setQuarter } from 'date-fns-jalaali/esm'
  export default setQuarter
}

declare module 'date-fns-jalaali/esm/setSeconds/index.js' {
  import { setSeconds } from 'date-fns-jalaali/esm'
  export default setSeconds
}

declare module 'date-fns-jalaali/esm/setWeek/index.js' {
  import { setWeek } from 'date-fns-jalaali/esm'
  export default setWeek
}

declare module 'date-fns-jalaali/esm/setWeekYear/index.js' {
  import { setWeekYear } from 'date-fns-jalaali/esm'
  export default setWeekYear
}

declare module 'date-fns-jalaali/esm/setYear/index.js' {
  import { setYear } from 'date-fns-jalaali/esm'
  export default setYear
}

declare module 'date-fns-jalaali/esm/startOfDay/index.js' {
  import { startOfDay } from 'date-fns-jalaali/esm'
  export default startOfDay
}

declare module 'date-fns-jalaali/esm/startOfDecade/index.js' {
  import { startOfDecade } from 'date-fns-jalaali/esm'
  export default startOfDecade
}

declare module 'date-fns-jalaali/esm/startOfHour/index.js' {
  import { startOfHour } from 'date-fns-jalaali/esm'
  export default startOfHour
}

declare module 'date-fns-jalaali/esm/startOfISOWeek/index.js' {
  import { startOfISOWeek } from 'date-fns-jalaali/esm'
  export default startOfISOWeek
}

declare module 'date-fns-jalaali/esm/startOfISOWeekYear/index.js' {
  import { startOfISOWeekYear } from 'date-fns-jalaali/esm'
  export default startOfISOWeekYear
}

declare module 'date-fns-jalaali/esm/startOfMinute/index.js' {
  import { startOfMinute } from 'date-fns-jalaali/esm'
  export default startOfMinute
}

declare module 'date-fns-jalaali/esm/startOfMonth/index.js' {
  import { startOfMonth } from 'date-fns-jalaali/esm'
  export default startOfMonth
}

declare module 'date-fns-jalaali/esm/startOfQuarter/index.js' {
  import { startOfQuarter } from 'date-fns-jalaali/esm'
  export default startOfQuarter
}

declare module 'date-fns-jalaali/esm/startOfSecond/index.js' {
  import { startOfSecond } from 'date-fns-jalaali/esm'
  export default startOfSecond
}

declare module 'date-fns-jalaali/esm/startOfToday/index.js' {
  import { startOfToday } from 'date-fns-jalaali/esm'
  export default startOfToday
}

declare module 'date-fns-jalaali/esm/startOfTomorrow/index.js' {
  import { startOfTomorrow } from 'date-fns-jalaali/esm'
  export default startOfTomorrow
}

declare module 'date-fns-jalaali/esm/startOfWeek/index.js' {
  import { startOfWeek } from 'date-fns-jalaali/esm'
  export default startOfWeek
}

declare module 'date-fns-jalaali/esm/startOfWeekYear/index.js' {
  import { startOfWeekYear } from 'date-fns-jalaali/esm'
  export default startOfWeekYear
}

declare module 'date-fns-jalaali/esm/startOfYear/index.js' {
  import { startOfYear } from 'date-fns-jalaali/esm'
  export default startOfYear
}

declare module 'date-fns-jalaali/esm/startOfYesterday/index.js' {
  import { startOfYesterday } from 'date-fns-jalaali/esm'
  export default startOfYesterday
}

declare module 'date-fns-jalaali/esm/sub/index.js' {
  import { sub } from 'date-fns-jalaali/esm'
  export default sub
}

declare module 'date-fns-jalaali/esm/subBusinessDays/index.js' {
  import { subBusinessDays } from 'date-fns-jalaali/esm'
  export default subBusinessDays
}

declare module 'date-fns-jalaali/esm/subDays/index.js' {
  import { subDays } from 'date-fns-jalaali/esm'
  export default subDays
}

declare module 'date-fns-jalaali/esm/subHours/index.js' {
  import { subHours } from 'date-fns-jalaali/esm'
  export default subHours
}

declare module 'date-fns-jalaali/esm/subISOWeekYears/index.js' {
  import { subISOWeekYears } from 'date-fns-jalaali/esm'
  export default subISOWeekYears
}

declare module 'date-fns-jalaali/esm/subMilliseconds/index.js' {
  import { subMilliseconds } from 'date-fns-jalaali/esm'
  export default subMilliseconds
}

declare module 'date-fns-jalaali/esm/subMinutes/index.js' {
  import { subMinutes } from 'date-fns-jalaali/esm'
  export default subMinutes
}

declare module 'date-fns-jalaali/esm/subMonths/index.js' {
  import { subMonths } from 'date-fns-jalaali/esm'
  export default subMonths
}

declare module 'date-fns-jalaali/esm/subQuarters/index.js' {
  import { subQuarters } from 'date-fns-jalaali/esm'
  export default subQuarters
}

declare module 'date-fns-jalaali/esm/subSeconds/index.js' {
  import { subSeconds } from 'date-fns-jalaali/esm'
  export default subSeconds
}

declare module 'date-fns-jalaali/esm/subWeeks/index.js' {
  import { subWeeks } from 'date-fns-jalaali/esm'
  export default subWeeks
}

declare module 'date-fns-jalaali/esm/subYears/index.js' {
  import { subYears } from 'date-fns-jalaali/esm'
  export default subYears
}

declare module 'date-fns-jalaali/esm/toDate/index.js' {
  import { toDate } from 'date-fns-jalaali/esm'
  export default toDate
}

// ECMAScript Module FP Functions

declare module 'date-fns-jalaali/esm/fp' {
  const add: CurriedFn2<Duration, Date | number, Date>
  namespace add {}

  const addBusinessDays: CurriedFn2<number, Date | number, Date>
  namespace addBusinessDays {}

  const addDays: CurriedFn2<number, Date | number, Date>
  namespace addDays {}

  const addHours: CurriedFn2<number, Date | number, Date>
  namespace addHours {}

  const addISOWeekYears: CurriedFn2<number, Date | number, Date>
  namespace addISOWeekYears {}

  const addMilliseconds: CurriedFn2<number, Date | number, Date>
  namespace addMilliseconds {}

  const addMinutes: CurriedFn2<number, Date | number, Date>
  namespace addMinutes {}

  const addMonths: CurriedFn2<number, Date | number, Date>
  namespace addMonths {}

  const addQuarters: CurriedFn2<number, Date | number, Date>
  namespace addQuarters {}

  const addSeconds: CurriedFn2<number, Date | number, Date>
  namespace addSeconds {}

  const addWeeks: CurriedFn2<number, Date | number, Date>
  namespace addWeeks {}

  const addYears: CurriedFn2<number, Date | number, Date>
  namespace addYears {}

  const areIntervalsOverlapping: CurriedFn2<Interval, Interval, boolean>
  namespace areIntervalsOverlapping {}

  const areIntervalsOverlappingWithOptions: CurriedFn3<
    {
      inclusive?: boolean
    },
    Interval,
    Interval,
    boolean
  >
  namespace areIntervalsOverlappingWithOptions {}

  const closestIndexTo: CurriedFn2<(Date | number)[], Date | number, number>
  namespace closestIndexTo {}

  const closestTo: CurriedFn2<(Date | number)[], Date | number, Date>
  namespace closestTo {}

  const compareAsc: CurriedFn2<Date | number, Date | number, number>
  namespace compareAsc {}

  const compareDesc: CurriedFn2<Date | number, Date | number, number>
  namespace compareDesc {}

  const differenceInBusinessDays: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInBusinessDays {}

  const differenceInCalendarDays: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarDays {}

  const differenceInCalendarISOWeeks: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarISOWeeks {}

  const differenceInCalendarISOWeekYears: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarISOWeekYears {}

  const differenceInCalendarMonths: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarMonths {}

  const differenceInCalendarQuarters: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarQuarters {}

  const differenceInCalendarWeeks: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarWeeks {}

  const differenceInCalendarWeeksWithOptions: CurriedFn3<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarWeeksWithOptions {}

  const differenceInCalendarYears: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarYears {}

  const differenceInDays: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInDays {}

  const differenceInHours: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInHours {}

  const differenceInISOWeekYears: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInISOWeekYears {}

  const differenceInMilliseconds: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInMilliseconds {}

  const differenceInMinutes: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInMinutes {}

  const differenceInMonths: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInMonths {}

  const differenceInQuarters: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInQuarters {}

  const differenceInSeconds: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInSeconds {}

  const differenceInWeeks: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInWeeks {}

  const differenceInYears: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInYears {}

  const eachDayOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachDayOfInterval {}

  const eachDayOfIntervalWithOptions: CurriedFn2<
    {
      step?: number
    },
    Interval,
    Date[]
  >
  namespace eachDayOfIntervalWithOptions {}

  const eachMonthOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachMonthOfInterval {}

  const eachWeekendOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachWeekendOfInterval {}

  const eachWeekendOfMonth: CurriedFn1<Date | number, Date[]>
  namespace eachWeekendOfMonth {}

  const eachWeekendOfYear: CurriedFn1<Date | number, Date[]>
  namespace eachWeekendOfYear {}

  const eachWeekOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachWeekOfInterval {}

  const eachWeekOfIntervalWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Interval,
    Date[]
  >
  namespace eachWeekOfIntervalWithOptions {}

  const eachYearOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachYearOfInterval {}

  const endOfDay: CurriedFn1<Date | number, Date>
  namespace endOfDay {}

  const endOfDecade: CurriedFn1<Date | number, Date>
  namespace endOfDecade {}

  const endOfDecadeWithOptions: CurriedFn2<
    {
      additionalDigits?: 0 | 1 | 2
    },
    Date | number,
    Date
  >
  namespace endOfDecadeWithOptions {}

  const endOfHour: CurriedFn1<Date | number, Date>
  namespace endOfHour {}

  const endOfISOWeek: CurriedFn1<Date | number, Date>
  namespace endOfISOWeek {}

  const endOfISOWeekYear: CurriedFn1<Date | number, Date>
  namespace endOfISOWeekYear {}

  const endOfMinute: CurriedFn1<Date | number, Date>
  namespace endOfMinute {}

  const endOfMonth: CurriedFn1<Date | number, Date>
  namespace endOfMonth {}

  const endOfQuarter: CurriedFn1<Date | number, Date>
  namespace endOfQuarter {}

  const endOfSecond: CurriedFn1<Date | number, Date>
  namespace endOfSecond {}

  const endOfWeek: CurriedFn1<Date | number, Date>
  namespace endOfWeek {}

  const endOfWeekWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date
  >
  namespace endOfWeekWithOptions {}

  const endOfYear: CurriedFn1<Date | number, Date>
  namespace endOfYear {}

  const format: CurriedFn2<string, Date | number, string>
  namespace format {}

  const formatDistance: CurriedFn2<Date | number, Date | number, string>
  namespace formatDistance {}

  const formatDistanceStrict: CurriedFn2<Date | number, Date | number, string>
  namespace formatDistanceStrict {}

  const formatDistanceStrictWithOptions: CurriedFn3<
    {
      locale?: Locale
      roundingMethod?: 'floor' | 'ceil' | 'round'
      unit?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'
      addSuffix?: boolean
    },
    Date | number,
    Date | number,
    string
  >
  namespace formatDistanceStrictWithOptions {}

  const formatDistanceWithOptions: CurriedFn3<
    {
      locale?: Locale
      addSuffix?: boolean
      includeSeconds?: boolean
    },
    Date | number,
    Date | number,
    string
  >
  namespace formatDistanceWithOptions {}

  const formatISO: CurriedFn1<Date | number, string>
  namespace formatISO {}

  const formatISO9075: CurriedFn1<Date | number, string>
  namespace formatISO9075 {}

  const formatISO9075WithOptions: CurriedFn2<
    {
      representation?: 'complete' | 'date' | 'time'
      format?: 'extended' | 'basic'
    },
    Date | number,
    string
  >
  namespace formatISO9075WithOptions {}

  const formatISODuration: CurriedFn1<Duration, string>
  namespace formatISODuration {}

  const formatISOWithOptions: CurriedFn2<
    {
      representation?: 'complete' | 'date' | 'time'
      format?: 'extended' | 'basic'
    },
    Date | number,
    string
  >
  namespace formatISOWithOptions {}

  const formatRelative: CurriedFn2<Date | number, Date | number, string>
  namespace formatRelative {}

  const formatRelativeWithOptions: CurriedFn3<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date | number,
    string
  >
  namespace formatRelativeWithOptions {}

  const formatRFC3339: CurriedFn1<Date | number, string>
  namespace formatRFC3339 {}

  const formatRFC3339WithOptions: CurriedFn2<
    {
      fractionDigits?: 0 | 1 | 2 | 3
    },
    Date | number,
    string
  >
  namespace formatRFC3339WithOptions {}

  const formatRFC7231: CurriedFn1<Date | number, string>
  namespace formatRFC7231 {}

  const formatWithOptions: CurriedFn3<
    {
      useAdditionalDayOfYearTokens?: boolean
      useAdditionalWeekYearTokens?: boolean
      firstWeekContainsDate?: number
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    string,
    Date | number,
    string
  >
  namespace formatWithOptions {}

  const fromUnixTime: CurriedFn1<number, Date>
  namespace fromUnixTime {}

  const getDate: CurriedFn1<Date | number, number>
  namespace getDate {}

  const getDay: CurriedFn1<Date | number, 0 | 1 | 2 | 3 | 4 | 5 | 6>
  namespace getDay {}

  const getDayOfYear: CurriedFn1<Date | number, number>
  namespace getDayOfYear {}

  const getDaysInMonth: CurriedFn1<Date | number, number>
  namespace getDaysInMonth {}

  const getDaysInYear: CurriedFn1<Date | number, number>
  namespace getDaysInYear {}

  const getDecade: CurriedFn1<Date | number, number>
  namespace getDecade {}

  const getHours: CurriedFn1<Date | number, number>
  namespace getHours {}

  const getISODay: CurriedFn1<Date | number, number>
  namespace getISODay {}

  const getISOWeek: CurriedFn1<Date | number, number>
  namespace getISOWeek {}

  const getISOWeeksInYear: CurriedFn1<Date | number, number>
  namespace getISOWeeksInYear {}

  const getISOWeekYear: CurriedFn1<Date | number, number>
  namespace getISOWeekYear {}

  const getMilliseconds: CurriedFn1<Date | number, number>
  namespace getMilliseconds {}

  const getMinutes: CurriedFn1<Date | number, number>
  namespace getMinutes {}

  const getMonth: CurriedFn1<Date | number, number>
  namespace getMonth {}

  const getOverlappingDaysInIntervals: CurriedFn2<Interval, Interval, number>
  namespace getOverlappingDaysInIntervals {}

  const getQuarter: CurriedFn1<Date | number, number>
  namespace getQuarter {}

  const getSeconds: CurriedFn1<Date | number, number>
  namespace getSeconds {}

  const getTime: CurriedFn1<Date | number, number>
  namespace getTime {}

  const getUnixTime: CurriedFn1<Date | number, number>
  namespace getUnixTime {}

  const getWeek: CurriedFn1<Date | number, number>
  namespace getWeek {}

  const getWeekOfMonth: CurriedFn1<Date | number, number>
  namespace getWeekOfMonth {}

  const getWeekOfMonthWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    number
  >
  namespace getWeekOfMonthWithOptions {}

  const getWeeksInMonth: CurriedFn1<Date | number, number>
  namespace getWeeksInMonth {}

  const getWeeksInMonthWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    number
  >
  namespace getWeeksInMonthWithOptions {}

  const getWeekWithOptions: CurriedFn2<
    {
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    number
  >
  namespace getWeekWithOptions {}

  const getWeekYear: CurriedFn1<Date | number, number>
  namespace getWeekYear {}

  const getWeekYearWithOptions: CurriedFn2<
    {
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    number
  >
  namespace getWeekYearWithOptions {}

  const getYear: CurriedFn1<Date | number, number>
  namespace getYear {}

  const intervalToDuration: CurriedFn1<Interval, Duration>
  namespace intervalToDuration {}

  const isAfter: CurriedFn2<Date | number, Date | number, boolean>
  namespace isAfter {}

  const isBefore: CurriedFn2<Date | number, Date | number, boolean>
  namespace isBefore {}

  const isDate: CurriedFn1<any, boolean>
  namespace isDate {}

  const isEqual: CurriedFn2<Date | number, Date | number, boolean>
  namespace isEqual {}

  const isExists: CurriedFn3<number, number, number, boolean>
  namespace isExists {}

  const isFirstDayOfMonth: CurriedFn1<Date | number, boolean>
  namespace isFirstDayOfMonth {}

  const isFriday: CurriedFn1<Date | number, boolean>
  namespace isFriday {}

  const isLastDayOfMonth: CurriedFn1<Date | number, boolean>
  namespace isLastDayOfMonth {}

  const isLeapYear: CurriedFn1<Date | number, boolean>
  namespace isLeapYear {}

  const isMonday: CurriedFn1<Date | number, boolean>
  namespace isMonday {}

  const isSameDay: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameDay {}

  const isSameHour: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameHour {}

  const isSameISOWeek: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameISOWeek {}

  const isSameISOWeekYear: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameISOWeekYear {}

  const isSameMinute: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameMinute {}

  const isSameMonth: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameMonth {}

  const isSameQuarter: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameQuarter {}

  const isSameSecond: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameSecond {}

  const isSameWeek: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameWeek {}

  const isSameWeekWithOptions: CurriedFn3<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date | number,
    boolean
  >
  namespace isSameWeekWithOptions {}

  const isSameYear: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameYear {}

  const isSaturday: CurriedFn1<Date | number, boolean>
  namespace isSaturday {}

  const isSunday: CurriedFn1<Date | number, boolean>
  namespace isSunday {}

  const isThursday: CurriedFn1<Date | number, boolean>
  namespace isThursday {}

  const isTuesday: CurriedFn1<Date | number, boolean>
  namespace isTuesday {}

  const isValid: CurriedFn1<any, boolean>
  namespace isValid {}

  const isWednesday: CurriedFn1<Date | number, boolean>
  namespace isWednesday {}

  const isWeekend: CurriedFn1<Date | number, boolean>
  namespace isWeekend {}

  const isWithinInterval: CurriedFn2<Interval, Date | number, boolean>
  namespace isWithinInterval {}

  const lastDayOfDecade: CurriedFn1<Date | number, Date>
  namespace lastDayOfDecade {}

  const lastDayOfISOWeek: CurriedFn1<Date | number, Date>
  namespace lastDayOfISOWeek {}

  const lastDayOfISOWeekYear: CurriedFn1<Date | number, Date>
  namespace lastDayOfISOWeekYear {}

  const lastDayOfMonth: CurriedFn1<Date | number, Date>
  namespace lastDayOfMonth {}

  const lastDayOfQuarter: CurriedFn1<Date | number, Date>
  namespace lastDayOfQuarter {}

  const lastDayOfQuarterWithOptions: CurriedFn2<
    {
      additionalDigits?: 0 | 1 | 2
    },
    Date | number,
    Date
  >
  namespace lastDayOfQuarterWithOptions {}

  const lastDayOfWeek: CurriedFn1<Date | number, Date>
  namespace lastDayOfWeek {}

  const lastDayOfWeekWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date
  >
  namespace lastDayOfWeekWithOptions {}

  const lastDayOfYear: CurriedFn1<Date | number, Date>
  namespace lastDayOfYear {}

  const lightFormat: CurriedFn2<string, Date | number, string>
  namespace lightFormat {}

  const max: CurriedFn1<(Date | number)[], Date>
  namespace max {}

  const min: CurriedFn1<(Date | number)[], Date>
  namespace min {}

  const parse: CurriedFn3<Date | number, string, string, Date>
  namespace parse {}

  const parseISO: CurriedFn1<string, Date>
  namespace parseISO {}

  const parseISOWithOptions: CurriedFn2<
    {
      additionalDigits?: 0 | 1 | 2
    },
    string,
    Date
  >
  namespace parseISOWithOptions {}

  const parseJSON: CurriedFn1<string | number | Date, Date>
  namespace parseJSON {}

  const parseWithOptions: CurriedFn4<
    {
      useAdditionalDayOfYearTokens?: boolean
      useAdditionalWeekYearTokens?: boolean
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    string,
    string,
    Date
  >
  namespace parseWithOptions {}

  const roundToNearestMinutes: CurriedFn1<Date | number, Date>
  namespace roundToNearestMinutes {}

  const roundToNearestMinutesWithOptions: CurriedFn2<
    {
      nearestTo?: number
    },
    Date | number,
    Date
  >
  namespace roundToNearestMinutesWithOptions {}

  const set: CurriedFn2<
    {
      milliseconds?: number
      seconds?: number
      minutes?: number
      hours?: number
      date?: number
      month?: number
      year?: number
    },
    Date | number,
    Date
  >
  namespace set {}

  const setDate: CurriedFn2<number, Date | number, Date>
  namespace setDate {}

  const setDay: CurriedFn2<number, Date | number, Date>
  namespace setDay {}

  const setDayOfYear: CurriedFn2<number, Date | number, Date>
  namespace setDayOfYear {}

  const setDayWithOptions: CurriedFn3<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    number,
    Date | number,
    Date
  >
  namespace setDayWithOptions {}

  const setHours: CurriedFn2<number, Date | number, Date>
  namespace setHours {}

  const setISODay: CurriedFn2<number, Date | number, Date>
  namespace setISODay {}

  const setISOWeek: CurriedFn2<number, Date | number, Date>
  namespace setISOWeek {}

  const setISOWeekYear: CurriedFn2<number, Date | number, Date>
  namespace setISOWeekYear {}

  const setMilliseconds: CurriedFn2<number, Date | number, Date>
  namespace setMilliseconds {}

  const setMinutes: CurriedFn2<number, Date | number, Date>
  namespace setMinutes {}

  const setMonth: CurriedFn2<number, Date | number, Date>
  namespace setMonth {}

  const setQuarter: CurriedFn2<number, Date | number, Date>
  namespace setQuarter {}

  const setSeconds: CurriedFn2<number, Date | number, Date>
  namespace setSeconds {}

  const setWeek: CurriedFn2<number, Date | number, Date>
  namespace setWeek {}

  const setWeekWithOptions: CurriedFn3<
    {
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    number,
    Date | number,
    Date
  >
  namespace setWeekWithOptions {}

  const setWeekYear: CurriedFn2<number, Date | number, Date>
  namespace setWeekYear {}

  const setWeekYearWithOptions: CurriedFn3<
    {
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    number,
    Date | number,
    Date
  >
  namespace setWeekYearWithOptions {}

  const setYear: CurriedFn2<number, Date | number, Date>
  namespace setYear {}

  const startOfDay: CurriedFn1<Date | number, Date>
  namespace startOfDay {}

  const startOfDecade: CurriedFn1<Date | number, Date>
  namespace startOfDecade {}

  const startOfHour: CurriedFn1<Date | number, Date>
  namespace startOfHour {}

  const startOfISOWeek: CurriedFn1<Date | number, Date>
  namespace startOfISOWeek {}

  const startOfISOWeekYear: CurriedFn1<Date | number, Date>
  namespace startOfISOWeekYear {}

  const startOfMinute: CurriedFn1<Date | number, Date>
  namespace startOfMinute {}

  const startOfMonth: CurriedFn1<Date | number, Date>
  namespace startOfMonth {}

  const startOfQuarter: CurriedFn1<Date | number, Date>
  namespace startOfQuarter {}

  const startOfSecond: CurriedFn1<Date | number, Date>
  namespace startOfSecond {}

  const startOfWeek: CurriedFn1<Date | number, Date>
  namespace startOfWeek {}

  const startOfWeekWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date
  >
  namespace startOfWeekWithOptions {}

  const startOfWeekYear: CurriedFn1<Date | number, Date>
  namespace startOfWeekYear {}

  const startOfWeekYearWithOptions: CurriedFn2<
    {
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date
  >
  namespace startOfWeekYearWithOptions {}

  const startOfYear: CurriedFn1<Date | number, Date>
  namespace startOfYear {}

  const sub: CurriedFn2<Duration, Date | number, Date>
  namespace sub {}

  const subBusinessDays: CurriedFn2<number, Date | number, Date>
  namespace subBusinessDays {}

  const subDays: CurriedFn2<number, Date | number, Date>
  namespace subDays {}

  const subHours: CurriedFn2<number, Date | number, Date>
  namespace subHours {}

  const subISOWeekYears: CurriedFn2<number, Date | number, Date>
  namespace subISOWeekYears {}

  const subMilliseconds: CurriedFn2<number, Date | number, Date>
  namespace subMilliseconds {}

  const subMinutes: CurriedFn2<number, Date | number, Date>
  namespace subMinutes {}

  const subMonths: CurriedFn2<number, Date | number, Date>
  namespace subMonths {}

  const subQuarters: CurriedFn2<number, Date | number, Date>
  namespace subQuarters {}

  const subSeconds: CurriedFn2<number, Date | number, Date>
  namespace subSeconds {}

  const subWeeks: CurriedFn2<number, Date | number, Date>
  namespace subWeeks {}

  const subYears: CurriedFn2<number, Date | number, Date>
  namespace subYears {}

  const toDate: CurriedFn1<Date | number, Date>
  namespace toDate {}

  const maxTime: number

  const minTime: number
}

declare module 'date-fns-jalaali/esm/fp/add' {
  import { add } from 'date-fns-jalaali/esm/fp'
  export default add
}

declare module 'date-fns-jalaali/esm/fp/addBusinessDays' {
  import { addBusinessDays } from 'date-fns-jalaali/esm/fp'
  export default addBusinessDays
}

declare module 'date-fns-jalaali/esm/fp/addDays' {
  import { addDays } from 'date-fns-jalaali/esm/fp'
  export default addDays
}

declare module 'date-fns-jalaali/esm/fp/addHours' {
  import { addHours } from 'date-fns-jalaali/esm/fp'
  export default addHours
}

declare module 'date-fns-jalaali/esm/fp/addISOWeekYears' {
  import { addISOWeekYears } from 'date-fns-jalaali/esm/fp'
  export default addISOWeekYears
}

declare module 'date-fns-jalaali/esm/fp/addMilliseconds' {
  import { addMilliseconds } from 'date-fns-jalaali/esm/fp'
  export default addMilliseconds
}

declare module 'date-fns-jalaali/esm/fp/addMinutes' {
  import { addMinutes } from 'date-fns-jalaali/esm/fp'
  export default addMinutes
}

declare module 'date-fns-jalaali/esm/fp/addMonths' {
  import { addMonths } from 'date-fns-jalaali/esm/fp'
  export default addMonths
}

declare module 'date-fns-jalaali/esm/fp/addQuarters' {
  import { addQuarters } from 'date-fns-jalaali/esm/fp'
  export default addQuarters
}

declare module 'date-fns-jalaali/esm/fp/addSeconds' {
  import { addSeconds } from 'date-fns-jalaali/esm/fp'
  export default addSeconds
}

declare module 'date-fns-jalaali/esm/fp/addWeeks' {
  import { addWeeks } from 'date-fns-jalaali/esm/fp'
  export default addWeeks
}

declare module 'date-fns-jalaali/esm/fp/addYears' {
  import { addYears } from 'date-fns-jalaali/esm/fp'
  export default addYears
}

declare module 'date-fns-jalaali/esm/fp/areIntervalsOverlapping' {
  import { areIntervalsOverlapping } from 'date-fns-jalaali/esm/fp'
  export default areIntervalsOverlapping
}

declare module 'date-fns-jalaali/esm/fp/areIntervalsOverlappingWithOptions' {
  import { areIntervalsOverlappingWithOptions } from 'date-fns-jalaali/esm/fp'
  export default areIntervalsOverlappingWithOptions
}

declare module 'date-fns-jalaali/esm/fp/closestIndexTo' {
  import { closestIndexTo } from 'date-fns-jalaali/esm/fp'
  export default closestIndexTo
}

declare module 'date-fns-jalaali/esm/fp/closestTo' {
  import { closestTo } from 'date-fns-jalaali/esm/fp'
  export default closestTo
}

declare module 'date-fns-jalaali/esm/fp/compareAsc' {
  import { compareAsc } from 'date-fns-jalaali/esm/fp'
  export default compareAsc
}

declare module 'date-fns-jalaali/esm/fp/compareDesc' {
  import { compareDesc } from 'date-fns-jalaali/esm/fp'
  export default compareDesc
}

declare module 'date-fns-jalaali/esm/fp/differenceInBusinessDays' {
  import { differenceInBusinessDays } from 'date-fns-jalaali/esm/fp'
  export default differenceInBusinessDays
}

declare module 'date-fns-jalaali/esm/fp/differenceInCalendarDays' {
  import { differenceInCalendarDays } from 'date-fns-jalaali/esm/fp'
  export default differenceInCalendarDays
}

declare module 'date-fns-jalaali/esm/fp/differenceInCalendarISOWeeks' {
  import { differenceInCalendarISOWeeks } from 'date-fns-jalaali/esm/fp'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns-jalaali/esm/fp/differenceInCalendarISOWeekYears' {
  import { differenceInCalendarISOWeekYears } from 'date-fns-jalaali/esm/fp'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns-jalaali/esm/fp/differenceInCalendarMonths' {
  import { differenceInCalendarMonths } from 'date-fns-jalaali/esm/fp'
  export default differenceInCalendarMonths
}

declare module 'date-fns-jalaali/esm/fp/differenceInCalendarQuarters' {
  import { differenceInCalendarQuarters } from 'date-fns-jalaali/esm/fp'
  export default differenceInCalendarQuarters
}

declare module 'date-fns-jalaali/esm/fp/differenceInCalendarWeeks' {
  import { differenceInCalendarWeeks } from 'date-fns-jalaali/esm/fp'
  export default differenceInCalendarWeeks
}

declare module 'date-fns-jalaali/esm/fp/differenceInCalendarWeeksWithOptions' {
  import { differenceInCalendarWeeksWithOptions } from 'date-fns-jalaali/esm/fp'
  export default differenceInCalendarWeeksWithOptions
}

declare module 'date-fns-jalaali/esm/fp/differenceInCalendarYears' {
  import { differenceInCalendarYears } from 'date-fns-jalaali/esm/fp'
  export default differenceInCalendarYears
}

declare module 'date-fns-jalaali/esm/fp/differenceInDays' {
  import { differenceInDays } from 'date-fns-jalaali/esm/fp'
  export default differenceInDays
}

declare module 'date-fns-jalaali/esm/fp/differenceInHours' {
  import { differenceInHours } from 'date-fns-jalaali/esm/fp'
  export default differenceInHours
}

declare module 'date-fns-jalaali/esm/fp/differenceInISOWeekYears' {
  import { differenceInISOWeekYears } from 'date-fns-jalaali/esm/fp'
  export default differenceInISOWeekYears
}

declare module 'date-fns-jalaali/esm/fp/differenceInMilliseconds' {
  import { differenceInMilliseconds } from 'date-fns-jalaali/esm/fp'
  export default differenceInMilliseconds
}

declare module 'date-fns-jalaali/esm/fp/differenceInMinutes' {
  import { differenceInMinutes } from 'date-fns-jalaali/esm/fp'
  export default differenceInMinutes
}

declare module 'date-fns-jalaali/esm/fp/differenceInMonths' {
  import { differenceInMonths } from 'date-fns-jalaali/esm/fp'
  export default differenceInMonths
}

declare module 'date-fns-jalaali/esm/fp/differenceInQuarters' {
  import { differenceInQuarters } from 'date-fns-jalaali/esm/fp'
  export default differenceInQuarters
}

declare module 'date-fns-jalaali/esm/fp/differenceInSeconds' {
  import { differenceInSeconds } from 'date-fns-jalaali/esm/fp'
  export default differenceInSeconds
}

declare module 'date-fns-jalaali/esm/fp/differenceInWeeks' {
  import { differenceInWeeks } from 'date-fns-jalaali/esm/fp'
  export default differenceInWeeks
}

declare module 'date-fns-jalaali/esm/fp/differenceInYears' {
  import { differenceInYears } from 'date-fns-jalaali/esm/fp'
  export default differenceInYears
}

declare module 'date-fns-jalaali/esm/fp/eachDayOfInterval' {
  import { eachDayOfInterval } from 'date-fns-jalaali/esm/fp'
  export default eachDayOfInterval
}

declare module 'date-fns-jalaali/esm/fp/eachDayOfIntervalWithOptions' {
  import { eachDayOfIntervalWithOptions } from 'date-fns-jalaali/esm/fp'
  export default eachDayOfIntervalWithOptions
}

declare module 'date-fns-jalaali/esm/fp/eachMonthOfInterval' {
  import { eachMonthOfInterval } from 'date-fns-jalaali/esm/fp'
  export default eachMonthOfInterval
}

declare module 'date-fns-jalaali/esm/fp/eachWeekendOfInterval' {
  import { eachWeekendOfInterval } from 'date-fns-jalaali/esm/fp'
  export default eachWeekendOfInterval
}

declare module 'date-fns-jalaali/esm/fp/eachWeekendOfMonth' {
  import { eachWeekendOfMonth } from 'date-fns-jalaali/esm/fp'
  export default eachWeekendOfMonth
}

declare module 'date-fns-jalaali/esm/fp/eachWeekendOfYear' {
  import { eachWeekendOfYear } from 'date-fns-jalaali/esm/fp'
  export default eachWeekendOfYear
}

declare module 'date-fns-jalaali/esm/fp/eachWeekOfInterval' {
  import { eachWeekOfInterval } from 'date-fns-jalaali/esm/fp'
  export default eachWeekOfInterval
}

declare module 'date-fns-jalaali/esm/fp/eachWeekOfIntervalWithOptions' {
  import { eachWeekOfIntervalWithOptions } from 'date-fns-jalaali/esm/fp'
  export default eachWeekOfIntervalWithOptions
}

declare module 'date-fns-jalaali/esm/fp/eachYearOfInterval' {
  import { eachYearOfInterval } from 'date-fns-jalaali/esm/fp'
  export default eachYearOfInterval
}

declare module 'date-fns-jalaali/esm/fp/endOfDay' {
  import { endOfDay } from 'date-fns-jalaali/esm/fp'
  export default endOfDay
}

declare module 'date-fns-jalaali/esm/fp/endOfDecade' {
  import { endOfDecade } from 'date-fns-jalaali/esm/fp'
  export default endOfDecade
}

declare module 'date-fns-jalaali/esm/fp/endOfDecadeWithOptions' {
  import { endOfDecadeWithOptions } from 'date-fns-jalaali/esm/fp'
  export default endOfDecadeWithOptions
}

declare module 'date-fns-jalaali/esm/fp/endOfHour' {
  import { endOfHour } from 'date-fns-jalaali/esm/fp'
  export default endOfHour
}

declare module 'date-fns-jalaali/esm/fp/endOfISOWeek' {
  import { endOfISOWeek } from 'date-fns-jalaali/esm/fp'
  export default endOfISOWeek
}

declare module 'date-fns-jalaali/esm/fp/endOfISOWeekYear' {
  import { endOfISOWeekYear } from 'date-fns-jalaali/esm/fp'
  export default endOfISOWeekYear
}

declare module 'date-fns-jalaali/esm/fp/endOfMinute' {
  import { endOfMinute } from 'date-fns-jalaali/esm/fp'
  export default endOfMinute
}

declare module 'date-fns-jalaali/esm/fp/endOfMonth' {
  import { endOfMonth } from 'date-fns-jalaali/esm/fp'
  export default endOfMonth
}

declare module 'date-fns-jalaali/esm/fp/endOfQuarter' {
  import { endOfQuarter } from 'date-fns-jalaali/esm/fp'
  export default endOfQuarter
}

declare module 'date-fns-jalaali/esm/fp/endOfSecond' {
  import { endOfSecond } from 'date-fns-jalaali/esm/fp'
  export default endOfSecond
}

declare module 'date-fns-jalaali/esm/fp/endOfWeek' {
  import { endOfWeek } from 'date-fns-jalaali/esm/fp'
  export default endOfWeek
}

declare module 'date-fns-jalaali/esm/fp/endOfWeekWithOptions' {
  import { endOfWeekWithOptions } from 'date-fns-jalaali/esm/fp'
  export default endOfWeekWithOptions
}

declare module 'date-fns-jalaali/esm/fp/endOfYear' {
  import { endOfYear } from 'date-fns-jalaali/esm/fp'
  export default endOfYear
}

declare module 'date-fns-jalaali/esm/fp/format' {
  import { format } from 'date-fns-jalaali/esm/fp'
  export default format
}

declare module 'date-fns-jalaali/esm/fp/formatDistance' {
  import { formatDistance } from 'date-fns-jalaali/esm/fp'
  export default formatDistance
}

declare module 'date-fns-jalaali/esm/fp/formatDistanceStrict' {
  import { formatDistanceStrict } from 'date-fns-jalaali/esm/fp'
  export default formatDistanceStrict
}

declare module 'date-fns-jalaali/esm/fp/formatDistanceStrictWithOptions' {
  import { formatDistanceStrictWithOptions } from 'date-fns-jalaali/esm/fp'
  export default formatDistanceStrictWithOptions
}

declare module 'date-fns-jalaali/esm/fp/formatDistanceWithOptions' {
  import { formatDistanceWithOptions } from 'date-fns-jalaali/esm/fp'
  export default formatDistanceWithOptions
}

declare module 'date-fns-jalaali/esm/fp/formatISO' {
  import { formatISO } from 'date-fns-jalaali/esm/fp'
  export default formatISO
}

declare module 'date-fns-jalaali/esm/fp/formatISO9075' {
  import { formatISO9075 } from 'date-fns-jalaali/esm/fp'
  export default formatISO9075
}

declare module 'date-fns-jalaali/esm/fp/formatISO9075WithOptions' {
  import { formatISO9075WithOptions } from 'date-fns-jalaali/esm/fp'
  export default formatISO9075WithOptions
}

declare module 'date-fns-jalaali/esm/fp/formatISODuration' {
  import { formatISODuration } from 'date-fns-jalaali/esm/fp'
  export default formatISODuration
}

declare module 'date-fns-jalaali/esm/fp/formatISOWithOptions' {
  import { formatISOWithOptions } from 'date-fns-jalaali/esm/fp'
  export default formatISOWithOptions
}

declare module 'date-fns-jalaali/esm/fp/formatRelative' {
  import { formatRelative } from 'date-fns-jalaali/esm/fp'
  export default formatRelative
}

declare module 'date-fns-jalaali/esm/fp/formatRelativeWithOptions' {
  import { formatRelativeWithOptions } from 'date-fns-jalaali/esm/fp'
  export default formatRelativeWithOptions
}

declare module 'date-fns-jalaali/esm/fp/formatRFC3339' {
  import { formatRFC3339 } from 'date-fns-jalaali/esm/fp'
  export default formatRFC3339
}

declare module 'date-fns-jalaali/esm/fp/formatRFC3339WithOptions' {
  import { formatRFC3339WithOptions } from 'date-fns-jalaali/esm/fp'
  export default formatRFC3339WithOptions
}

declare module 'date-fns-jalaali/esm/fp/formatRFC7231' {
  import { formatRFC7231 } from 'date-fns-jalaali/esm/fp'
  export default formatRFC7231
}

declare module 'date-fns-jalaali/esm/fp/formatWithOptions' {
  import { formatWithOptions } from 'date-fns-jalaali/esm/fp'
  export default formatWithOptions
}

declare module 'date-fns-jalaali/esm/fp/fromUnixTime' {
  import { fromUnixTime } from 'date-fns-jalaali/esm/fp'
  export default fromUnixTime
}

declare module 'date-fns-jalaali/esm/fp/getDate' {
  import { getDate } from 'date-fns-jalaali/esm/fp'
  export default getDate
}

declare module 'date-fns-jalaali/esm/fp/getDay' {
  import { getDay } from 'date-fns-jalaali/esm/fp'
  export default getDay
}

declare module 'date-fns-jalaali/esm/fp/getDayOfYear' {
  import { getDayOfYear } from 'date-fns-jalaali/esm/fp'
  export default getDayOfYear
}

declare module 'date-fns-jalaali/esm/fp/getDaysInMonth' {
  import { getDaysInMonth } from 'date-fns-jalaali/esm/fp'
  export default getDaysInMonth
}

declare module 'date-fns-jalaali/esm/fp/getDaysInYear' {
  import { getDaysInYear } from 'date-fns-jalaali/esm/fp'
  export default getDaysInYear
}

declare module 'date-fns-jalaali/esm/fp/getDecade' {
  import { getDecade } from 'date-fns-jalaali/esm/fp'
  export default getDecade
}

declare module 'date-fns-jalaali/esm/fp/getHours' {
  import { getHours } from 'date-fns-jalaali/esm/fp'
  export default getHours
}

declare module 'date-fns-jalaali/esm/fp/getISODay' {
  import { getISODay } from 'date-fns-jalaali/esm/fp'
  export default getISODay
}

declare module 'date-fns-jalaali/esm/fp/getISOWeek' {
  import { getISOWeek } from 'date-fns-jalaali/esm/fp'
  export default getISOWeek
}

declare module 'date-fns-jalaali/esm/fp/getISOWeeksInYear' {
  import { getISOWeeksInYear } from 'date-fns-jalaali/esm/fp'
  export default getISOWeeksInYear
}

declare module 'date-fns-jalaali/esm/fp/getISOWeekYear' {
  import { getISOWeekYear } from 'date-fns-jalaali/esm/fp'
  export default getISOWeekYear
}

declare module 'date-fns-jalaali/esm/fp/getMilliseconds' {
  import { getMilliseconds } from 'date-fns-jalaali/esm/fp'
  export default getMilliseconds
}

declare module 'date-fns-jalaali/esm/fp/getMinutes' {
  import { getMinutes } from 'date-fns-jalaali/esm/fp'
  export default getMinutes
}

declare module 'date-fns-jalaali/esm/fp/getMonth' {
  import { getMonth } from 'date-fns-jalaali/esm/fp'
  export default getMonth
}

declare module 'date-fns-jalaali/esm/fp/getOverlappingDaysInIntervals' {
  import { getOverlappingDaysInIntervals } from 'date-fns-jalaali/esm/fp'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns-jalaali/esm/fp/getQuarter' {
  import { getQuarter } from 'date-fns-jalaali/esm/fp'
  export default getQuarter
}

declare module 'date-fns-jalaali/esm/fp/getSeconds' {
  import { getSeconds } from 'date-fns-jalaali/esm/fp'
  export default getSeconds
}

declare module 'date-fns-jalaali/esm/fp/getTime' {
  import { getTime } from 'date-fns-jalaali/esm/fp'
  export default getTime
}

declare module 'date-fns-jalaali/esm/fp/getUnixTime' {
  import { getUnixTime } from 'date-fns-jalaali/esm/fp'
  export default getUnixTime
}

declare module 'date-fns-jalaali/esm/fp/getWeek' {
  import { getWeek } from 'date-fns-jalaali/esm/fp'
  export default getWeek
}

declare module 'date-fns-jalaali/esm/fp/getWeekOfMonth' {
  import { getWeekOfMonth } from 'date-fns-jalaali/esm/fp'
  export default getWeekOfMonth
}

declare module 'date-fns-jalaali/esm/fp/getWeekOfMonthWithOptions' {
  import { getWeekOfMonthWithOptions } from 'date-fns-jalaali/esm/fp'
  export default getWeekOfMonthWithOptions
}

declare module 'date-fns-jalaali/esm/fp/getWeeksInMonth' {
  import { getWeeksInMonth } from 'date-fns-jalaali/esm/fp'
  export default getWeeksInMonth
}

declare module 'date-fns-jalaali/esm/fp/getWeeksInMonthWithOptions' {
  import { getWeeksInMonthWithOptions } from 'date-fns-jalaali/esm/fp'
  export default getWeeksInMonthWithOptions
}

declare module 'date-fns-jalaali/esm/fp/getWeekWithOptions' {
  import { getWeekWithOptions } from 'date-fns-jalaali/esm/fp'
  export default getWeekWithOptions
}

declare module 'date-fns-jalaali/esm/fp/getWeekYear' {
  import { getWeekYear } from 'date-fns-jalaali/esm/fp'
  export default getWeekYear
}

declare module 'date-fns-jalaali/esm/fp/getWeekYearWithOptions' {
  import { getWeekYearWithOptions } from 'date-fns-jalaali/esm/fp'
  export default getWeekYearWithOptions
}

declare module 'date-fns-jalaali/esm/fp/getYear' {
  import { getYear } from 'date-fns-jalaali/esm/fp'
  export default getYear
}

declare module 'date-fns-jalaali/esm/fp/intervalToDuration' {
  import { intervalToDuration } from 'date-fns-jalaali/esm/fp'
  export default intervalToDuration
}

declare module 'date-fns-jalaali/esm/fp/isAfter' {
  import { isAfter } from 'date-fns-jalaali/esm/fp'
  export default isAfter
}

declare module 'date-fns-jalaali/esm/fp/isBefore' {
  import { isBefore } from 'date-fns-jalaali/esm/fp'
  export default isBefore
}

declare module 'date-fns-jalaali/esm/fp/isDate' {
  import { isDate } from 'date-fns-jalaali/esm/fp'
  export default isDate
}

declare module 'date-fns-jalaali/esm/fp/isEqual' {
  import { isEqual } from 'date-fns-jalaali/esm/fp'
  export default isEqual
}

declare module 'date-fns-jalaali/esm/fp/isExists' {
  import { isExists } from 'date-fns-jalaali/esm/fp'
  export default isExists
}

declare module 'date-fns-jalaali/esm/fp/isFirstDayOfMonth' {
  import { isFirstDayOfMonth } from 'date-fns-jalaali/esm/fp'
  export default isFirstDayOfMonth
}

declare module 'date-fns-jalaali/esm/fp/isFriday' {
  import { isFriday } from 'date-fns-jalaali/esm/fp'
  export default isFriday
}

declare module 'date-fns-jalaali/esm/fp/isLastDayOfMonth' {
  import { isLastDayOfMonth } from 'date-fns-jalaali/esm/fp'
  export default isLastDayOfMonth
}

declare module 'date-fns-jalaali/esm/fp/isLeapYear' {
  import { isLeapYear } from 'date-fns-jalaali/esm/fp'
  export default isLeapYear
}

declare module 'date-fns-jalaali/esm/fp/isMonday' {
  import { isMonday } from 'date-fns-jalaali/esm/fp'
  export default isMonday
}

declare module 'date-fns-jalaali/esm/fp/isSameDay' {
  import { isSameDay } from 'date-fns-jalaali/esm/fp'
  export default isSameDay
}

declare module 'date-fns-jalaali/esm/fp/isSameHour' {
  import { isSameHour } from 'date-fns-jalaali/esm/fp'
  export default isSameHour
}

declare module 'date-fns-jalaali/esm/fp/isSameISOWeek' {
  import { isSameISOWeek } from 'date-fns-jalaali/esm/fp'
  export default isSameISOWeek
}

declare module 'date-fns-jalaali/esm/fp/isSameISOWeekYear' {
  import { isSameISOWeekYear } from 'date-fns-jalaali/esm/fp'
  export default isSameISOWeekYear
}

declare module 'date-fns-jalaali/esm/fp/isSameMinute' {
  import { isSameMinute } from 'date-fns-jalaali/esm/fp'
  export default isSameMinute
}

declare module 'date-fns-jalaali/esm/fp/isSameMonth' {
  import { isSameMonth } from 'date-fns-jalaali/esm/fp'
  export default isSameMonth
}

declare module 'date-fns-jalaali/esm/fp/isSameQuarter' {
  import { isSameQuarter } from 'date-fns-jalaali/esm/fp'
  export default isSameQuarter
}

declare module 'date-fns-jalaali/esm/fp/isSameSecond' {
  import { isSameSecond } from 'date-fns-jalaali/esm/fp'
  export default isSameSecond
}

declare module 'date-fns-jalaali/esm/fp/isSameWeek' {
  import { isSameWeek } from 'date-fns-jalaali/esm/fp'
  export default isSameWeek
}

declare module 'date-fns-jalaali/esm/fp/isSameWeekWithOptions' {
  import { isSameWeekWithOptions } from 'date-fns-jalaali/esm/fp'
  export default isSameWeekWithOptions
}

declare module 'date-fns-jalaali/esm/fp/isSameYear' {
  import { isSameYear } from 'date-fns-jalaali/esm/fp'
  export default isSameYear
}

declare module 'date-fns-jalaali/esm/fp/isSaturday' {
  import { isSaturday } from 'date-fns-jalaali/esm/fp'
  export default isSaturday
}

declare module 'date-fns-jalaali/esm/fp/isSunday' {
  import { isSunday } from 'date-fns-jalaali/esm/fp'
  export default isSunday
}

declare module 'date-fns-jalaali/esm/fp/isThursday' {
  import { isThursday } from 'date-fns-jalaali/esm/fp'
  export default isThursday
}

declare module 'date-fns-jalaali/esm/fp/isTuesday' {
  import { isTuesday } from 'date-fns-jalaali/esm/fp'
  export default isTuesday
}

declare module 'date-fns-jalaali/esm/fp/isValid' {
  import { isValid } from 'date-fns-jalaali/esm/fp'
  export default isValid
}

declare module 'date-fns-jalaali/esm/fp/isWednesday' {
  import { isWednesday } from 'date-fns-jalaali/esm/fp'
  export default isWednesday
}

declare module 'date-fns-jalaali/esm/fp/isWeekend' {
  import { isWeekend } from 'date-fns-jalaali/esm/fp'
  export default isWeekend
}

declare module 'date-fns-jalaali/esm/fp/isWithinInterval' {
  import { isWithinInterval } from 'date-fns-jalaali/esm/fp'
  export default isWithinInterval
}

declare module 'date-fns-jalaali/esm/fp/lastDayOfDecade' {
  import { lastDayOfDecade } from 'date-fns-jalaali/esm/fp'
  export default lastDayOfDecade
}

declare module 'date-fns-jalaali/esm/fp/lastDayOfISOWeek' {
  import { lastDayOfISOWeek } from 'date-fns-jalaali/esm/fp'
  export default lastDayOfISOWeek
}

declare module 'date-fns-jalaali/esm/fp/lastDayOfISOWeekYear' {
  import { lastDayOfISOWeekYear } from 'date-fns-jalaali/esm/fp'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns-jalaali/esm/fp/lastDayOfMonth' {
  import { lastDayOfMonth } from 'date-fns-jalaali/esm/fp'
  export default lastDayOfMonth
}

declare module 'date-fns-jalaali/esm/fp/lastDayOfQuarter' {
  import { lastDayOfQuarter } from 'date-fns-jalaali/esm/fp'
  export default lastDayOfQuarter
}

declare module 'date-fns-jalaali/esm/fp/lastDayOfQuarterWithOptions' {
  import { lastDayOfQuarterWithOptions } from 'date-fns-jalaali/esm/fp'
  export default lastDayOfQuarterWithOptions
}

declare module 'date-fns-jalaali/esm/fp/lastDayOfWeek' {
  import { lastDayOfWeek } from 'date-fns-jalaali/esm/fp'
  export default lastDayOfWeek
}

declare module 'date-fns-jalaali/esm/fp/lastDayOfWeekWithOptions' {
  import { lastDayOfWeekWithOptions } from 'date-fns-jalaali/esm/fp'
  export default lastDayOfWeekWithOptions
}

declare module 'date-fns-jalaali/esm/fp/lastDayOfYear' {
  import { lastDayOfYear } from 'date-fns-jalaali/esm/fp'
  export default lastDayOfYear
}

declare module 'date-fns-jalaali/esm/fp/lightFormat' {
  import { lightFormat } from 'date-fns-jalaali/esm/fp'
  export default lightFormat
}

declare module 'date-fns-jalaali/esm/fp/max' {
  import { max } from 'date-fns-jalaali/esm/fp'
  export default max
}

declare module 'date-fns-jalaali/esm/fp/min' {
  import { min } from 'date-fns-jalaali/esm/fp'
  export default min
}

declare module 'date-fns-jalaali/esm/fp/parse' {
  import { parse } from 'date-fns-jalaali/esm/fp'
  export default parse
}

declare module 'date-fns-jalaali/esm/fp/parseISO' {
  import { parseISO } from 'date-fns-jalaali/esm/fp'
  export default parseISO
}

declare module 'date-fns-jalaali/esm/fp/parseISOWithOptions' {
  import { parseISOWithOptions } from 'date-fns-jalaali/esm/fp'
  export default parseISOWithOptions
}

declare module 'date-fns-jalaali/esm/fp/parseJSON' {
  import { parseJSON } from 'date-fns-jalaali/esm/fp'
  export default parseJSON
}

declare module 'date-fns-jalaali/esm/fp/parseWithOptions' {
  import { parseWithOptions } from 'date-fns-jalaali/esm/fp'
  export default parseWithOptions
}

declare module 'date-fns-jalaali/esm/fp/roundToNearestMinutes' {
  import { roundToNearestMinutes } from 'date-fns-jalaali/esm/fp'
  export default roundToNearestMinutes
}

declare module 'date-fns-jalaali/esm/fp/roundToNearestMinutesWithOptions' {
  import { roundToNearestMinutesWithOptions } from 'date-fns-jalaali/esm/fp'
  export default roundToNearestMinutesWithOptions
}

declare module 'date-fns-jalaali/esm/fp/set' {
  import { set } from 'date-fns-jalaali/esm/fp'
  export default set
}

declare module 'date-fns-jalaali/esm/fp/setDate' {
  import { setDate } from 'date-fns-jalaali/esm/fp'
  export default setDate
}

declare module 'date-fns-jalaali/esm/fp/setDay' {
  import { setDay } from 'date-fns-jalaali/esm/fp'
  export default setDay
}

declare module 'date-fns-jalaali/esm/fp/setDayOfYear' {
  import { setDayOfYear } from 'date-fns-jalaali/esm/fp'
  export default setDayOfYear
}

declare module 'date-fns-jalaali/esm/fp/setDayWithOptions' {
  import { setDayWithOptions } from 'date-fns-jalaali/esm/fp'
  export default setDayWithOptions
}

declare module 'date-fns-jalaali/esm/fp/setHours' {
  import { setHours } from 'date-fns-jalaali/esm/fp'
  export default setHours
}

declare module 'date-fns-jalaali/esm/fp/setISODay' {
  import { setISODay } from 'date-fns-jalaali/esm/fp'
  export default setISODay
}

declare module 'date-fns-jalaali/esm/fp/setISOWeek' {
  import { setISOWeek } from 'date-fns-jalaali/esm/fp'
  export default setISOWeek
}

declare module 'date-fns-jalaali/esm/fp/setISOWeekYear' {
  import { setISOWeekYear } from 'date-fns-jalaali/esm/fp'
  export default setISOWeekYear
}

declare module 'date-fns-jalaali/esm/fp/setMilliseconds' {
  import { setMilliseconds } from 'date-fns-jalaali/esm/fp'
  export default setMilliseconds
}

declare module 'date-fns-jalaali/esm/fp/setMinutes' {
  import { setMinutes } from 'date-fns-jalaali/esm/fp'
  export default setMinutes
}

declare module 'date-fns-jalaali/esm/fp/setMonth' {
  import { setMonth } from 'date-fns-jalaali/esm/fp'
  export default setMonth
}

declare module 'date-fns-jalaali/esm/fp/setQuarter' {
  import { setQuarter } from 'date-fns-jalaali/esm/fp'
  export default setQuarter
}

declare module 'date-fns-jalaali/esm/fp/setSeconds' {
  import { setSeconds } from 'date-fns-jalaali/esm/fp'
  export default setSeconds
}

declare module 'date-fns-jalaali/esm/fp/setWeek' {
  import { setWeek } from 'date-fns-jalaali/esm/fp'
  export default setWeek
}

declare module 'date-fns-jalaali/esm/fp/setWeekWithOptions' {
  import { setWeekWithOptions } from 'date-fns-jalaali/esm/fp'
  export default setWeekWithOptions
}

declare module 'date-fns-jalaali/esm/fp/setWeekYear' {
  import { setWeekYear } from 'date-fns-jalaali/esm/fp'
  export default setWeekYear
}

declare module 'date-fns-jalaali/esm/fp/setWeekYearWithOptions' {
  import { setWeekYearWithOptions } from 'date-fns-jalaali/esm/fp'
  export default setWeekYearWithOptions
}

declare module 'date-fns-jalaali/esm/fp/setYear' {
  import { setYear } from 'date-fns-jalaali/esm/fp'
  export default setYear
}

declare module 'date-fns-jalaali/esm/fp/startOfDay' {
  import { startOfDay } from 'date-fns-jalaali/esm/fp'
  export default startOfDay
}

declare module 'date-fns-jalaali/esm/fp/startOfDecade' {
  import { startOfDecade } from 'date-fns-jalaali/esm/fp'
  export default startOfDecade
}

declare module 'date-fns-jalaali/esm/fp/startOfHour' {
  import { startOfHour } from 'date-fns-jalaali/esm/fp'
  export default startOfHour
}

declare module 'date-fns-jalaali/esm/fp/startOfISOWeek' {
  import { startOfISOWeek } from 'date-fns-jalaali/esm/fp'
  export default startOfISOWeek
}

declare module 'date-fns-jalaali/esm/fp/startOfISOWeekYear' {
  import { startOfISOWeekYear } from 'date-fns-jalaali/esm/fp'
  export default startOfISOWeekYear
}

declare module 'date-fns-jalaali/esm/fp/startOfMinute' {
  import { startOfMinute } from 'date-fns-jalaali/esm/fp'
  export default startOfMinute
}

declare module 'date-fns-jalaali/esm/fp/startOfMonth' {
  import { startOfMonth } from 'date-fns-jalaali/esm/fp'
  export default startOfMonth
}

declare module 'date-fns-jalaali/esm/fp/startOfQuarter' {
  import { startOfQuarter } from 'date-fns-jalaali/esm/fp'
  export default startOfQuarter
}

declare module 'date-fns-jalaali/esm/fp/startOfSecond' {
  import { startOfSecond } from 'date-fns-jalaali/esm/fp'
  export default startOfSecond
}

declare module 'date-fns-jalaali/esm/fp/startOfWeek' {
  import { startOfWeek } from 'date-fns-jalaali/esm/fp'
  export default startOfWeek
}

declare module 'date-fns-jalaali/esm/fp/startOfWeekWithOptions' {
  import { startOfWeekWithOptions } from 'date-fns-jalaali/esm/fp'
  export default startOfWeekWithOptions
}

declare module 'date-fns-jalaali/esm/fp/startOfWeekYear' {
  import { startOfWeekYear } from 'date-fns-jalaali/esm/fp'
  export default startOfWeekYear
}

declare module 'date-fns-jalaali/esm/fp/startOfWeekYearWithOptions' {
  import { startOfWeekYearWithOptions } from 'date-fns-jalaali/esm/fp'
  export default startOfWeekYearWithOptions
}

declare module 'date-fns-jalaali/esm/fp/startOfYear' {
  import { startOfYear } from 'date-fns-jalaali/esm/fp'
  export default startOfYear
}

declare module 'date-fns-jalaali/esm/fp/sub' {
  import { sub } from 'date-fns-jalaali/esm/fp'
  export default sub
}

declare module 'date-fns-jalaali/esm/fp/subBusinessDays' {
  import { subBusinessDays } from 'date-fns-jalaali/esm/fp'
  export default subBusinessDays
}

declare module 'date-fns-jalaali/esm/fp/subDays' {
  import { subDays } from 'date-fns-jalaali/esm/fp'
  export default subDays
}

declare module 'date-fns-jalaali/esm/fp/subHours' {
  import { subHours } from 'date-fns-jalaali/esm/fp'
  export default subHours
}

declare module 'date-fns-jalaali/esm/fp/subISOWeekYears' {
  import { subISOWeekYears } from 'date-fns-jalaali/esm/fp'
  export default subISOWeekYears
}

declare module 'date-fns-jalaali/esm/fp/subMilliseconds' {
  import { subMilliseconds } from 'date-fns-jalaali/esm/fp'
  export default subMilliseconds
}

declare module 'date-fns-jalaali/esm/fp/subMinutes' {
  import { subMinutes } from 'date-fns-jalaali/esm/fp'
  export default subMinutes
}

declare module 'date-fns-jalaali/esm/fp/subMonths' {
  import { subMonths } from 'date-fns-jalaali/esm/fp'
  export default subMonths
}

declare module 'date-fns-jalaali/esm/fp/subQuarters' {
  import { subQuarters } from 'date-fns-jalaali/esm/fp'
  export default subQuarters
}

declare module 'date-fns-jalaali/esm/fp/subSeconds' {
  import { subSeconds } from 'date-fns-jalaali/esm/fp'
  export default subSeconds
}

declare module 'date-fns-jalaali/esm/fp/subWeeks' {
  import { subWeeks } from 'date-fns-jalaali/esm/fp'
  export default subWeeks
}

declare module 'date-fns-jalaali/esm/fp/subYears' {
  import { subYears } from 'date-fns-jalaali/esm/fp'
  export default subYears
}

declare module 'date-fns-jalaali/esm/fp/toDate' {
  import { toDate } from 'date-fns-jalaali/esm/fp'
  export default toDate
}

declare module 'date-fns-jalaali/esm/fp/add/index' {
  import { add } from 'date-fns-jalaali/esm/fp'
  export default add
}

declare module 'date-fns-jalaali/esm/fp/addBusinessDays/index' {
  import { addBusinessDays } from 'date-fns-jalaali/esm/fp'
  export default addBusinessDays
}

declare module 'date-fns-jalaali/esm/fp/addDays/index' {
  import { addDays } from 'date-fns-jalaali/esm/fp'
  export default addDays
}

declare module 'date-fns-jalaali/esm/fp/addHours/index' {
  import { addHours } from 'date-fns-jalaali/esm/fp'
  export default addHours
}

declare module 'date-fns-jalaali/esm/fp/addISOWeekYears/index' {
  import { addISOWeekYears } from 'date-fns-jalaali/esm/fp'
  export default addISOWeekYears
}

declare module 'date-fns-jalaali/esm/fp/addMilliseconds/index' {
  import { addMilliseconds } from 'date-fns-jalaali/esm/fp'
  export default addMilliseconds
}

declare module 'date-fns-jalaali/esm/fp/addMinutes/index' {
  import { addMinutes } from 'date-fns-jalaali/esm/fp'
  export default addMinutes
}

declare module 'date-fns-jalaali/esm/fp/addMonths/index' {
  import { addMonths } from 'date-fns-jalaali/esm/fp'
  export default addMonths
}

declare module 'date-fns-jalaali/esm/fp/addQuarters/index' {
  import { addQuarters } from 'date-fns-jalaali/esm/fp'
  export default addQuarters
}

declare module 'date-fns-jalaali/esm/fp/addSeconds/index' {
  import { addSeconds } from 'date-fns-jalaali/esm/fp'
  export default addSeconds
}

declare module 'date-fns-jalaali/esm/fp/addWeeks/index' {
  import { addWeeks } from 'date-fns-jalaali/esm/fp'
  export default addWeeks
}

declare module 'date-fns-jalaali/esm/fp/addYears/index' {
  import { addYears } from 'date-fns-jalaali/esm/fp'
  export default addYears
}

declare module 'date-fns-jalaali/esm/fp/areIntervalsOverlapping/index' {
  import { areIntervalsOverlapping } from 'date-fns-jalaali/esm/fp'
  export default areIntervalsOverlapping
}

declare module 'date-fns-jalaali/esm/fp/areIntervalsOverlappingWithOptions/index' {
  import { areIntervalsOverlappingWithOptions } from 'date-fns-jalaali/esm/fp'
  export default areIntervalsOverlappingWithOptions
}

declare module 'date-fns-jalaali/esm/fp/closestIndexTo/index' {
  import { closestIndexTo } from 'date-fns-jalaali/esm/fp'
  export default closestIndexTo
}

declare module 'date-fns-jalaali/esm/fp/closestTo/index' {
  import { closestTo } from 'date-fns-jalaali/esm/fp'
  export default closestTo
}

declare module 'date-fns-jalaali/esm/fp/compareAsc/index' {
  import { compareAsc } from 'date-fns-jalaali/esm/fp'
  export default compareAsc
}

declare module 'date-fns-jalaali/esm/fp/compareDesc/index' {
  import { compareDesc } from 'date-fns-jalaali/esm/fp'
  export default compareDesc
}

declare module 'date-fns-jalaali/esm/fp/differenceInBusinessDays/index' {
  import { differenceInBusinessDays } from 'date-fns-jalaali/esm/fp'
  export default differenceInBusinessDays
}

declare module 'date-fns-jalaali/esm/fp/differenceInCalendarDays/index' {
  import { differenceInCalendarDays } from 'date-fns-jalaali/esm/fp'
  export default differenceInCalendarDays
}

declare module 'date-fns-jalaali/esm/fp/differenceInCalendarISOWeeks/index' {
  import { differenceInCalendarISOWeeks } from 'date-fns-jalaali/esm/fp'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns-jalaali/esm/fp/differenceInCalendarISOWeekYears/index' {
  import { differenceInCalendarISOWeekYears } from 'date-fns-jalaali/esm/fp'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns-jalaali/esm/fp/differenceInCalendarMonths/index' {
  import { differenceInCalendarMonths } from 'date-fns-jalaali/esm/fp'
  export default differenceInCalendarMonths
}

declare module 'date-fns-jalaali/esm/fp/differenceInCalendarQuarters/index' {
  import { differenceInCalendarQuarters } from 'date-fns-jalaali/esm/fp'
  export default differenceInCalendarQuarters
}

declare module 'date-fns-jalaali/esm/fp/differenceInCalendarWeeks/index' {
  import { differenceInCalendarWeeks } from 'date-fns-jalaali/esm/fp'
  export default differenceInCalendarWeeks
}

declare module 'date-fns-jalaali/esm/fp/differenceInCalendarWeeksWithOptions/index' {
  import { differenceInCalendarWeeksWithOptions } from 'date-fns-jalaali/esm/fp'
  export default differenceInCalendarWeeksWithOptions
}

declare module 'date-fns-jalaali/esm/fp/differenceInCalendarYears/index' {
  import { differenceInCalendarYears } from 'date-fns-jalaali/esm/fp'
  export default differenceInCalendarYears
}

declare module 'date-fns-jalaali/esm/fp/differenceInDays/index' {
  import { differenceInDays } from 'date-fns-jalaali/esm/fp'
  export default differenceInDays
}

declare module 'date-fns-jalaali/esm/fp/differenceInHours/index' {
  import { differenceInHours } from 'date-fns-jalaali/esm/fp'
  export default differenceInHours
}

declare module 'date-fns-jalaali/esm/fp/differenceInISOWeekYears/index' {
  import { differenceInISOWeekYears } from 'date-fns-jalaali/esm/fp'
  export default differenceInISOWeekYears
}

declare module 'date-fns-jalaali/esm/fp/differenceInMilliseconds/index' {
  import { differenceInMilliseconds } from 'date-fns-jalaali/esm/fp'
  export default differenceInMilliseconds
}

declare module 'date-fns-jalaali/esm/fp/differenceInMinutes/index' {
  import { differenceInMinutes } from 'date-fns-jalaali/esm/fp'
  export default differenceInMinutes
}

declare module 'date-fns-jalaali/esm/fp/differenceInMonths/index' {
  import { differenceInMonths } from 'date-fns-jalaali/esm/fp'
  export default differenceInMonths
}

declare module 'date-fns-jalaali/esm/fp/differenceInQuarters/index' {
  import { differenceInQuarters } from 'date-fns-jalaali/esm/fp'
  export default differenceInQuarters
}

declare module 'date-fns-jalaali/esm/fp/differenceInSeconds/index' {
  import { differenceInSeconds } from 'date-fns-jalaali/esm/fp'
  export default differenceInSeconds
}

declare module 'date-fns-jalaali/esm/fp/differenceInWeeks/index' {
  import { differenceInWeeks } from 'date-fns-jalaali/esm/fp'
  export default differenceInWeeks
}

declare module 'date-fns-jalaali/esm/fp/differenceInYears/index' {
  import { differenceInYears } from 'date-fns-jalaali/esm/fp'
  export default differenceInYears
}

declare module 'date-fns-jalaali/esm/fp/eachDayOfInterval/index' {
  import { eachDayOfInterval } from 'date-fns-jalaali/esm/fp'
  export default eachDayOfInterval
}

declare module 'date-fns-jalaali/esm/fp/eachDayOfIntervalWithOptions/index' {
  import { eachDayOfIntervalWithOptions } from 'date-fns-jalaali/esm/fp'
  export default eachDayOfIntervalWithOptions
}

declare module 'date-fns-jalaali/esm/fp/eachMonthOfInterval/index' {
  import { eachMonthOfInterval } from 'date-fns-jalaali/esm/fp'
  export default eachMonthOfInterval
}

declare module 'date-fns-jalaali/esm/fp/eachWeekendOfInterval/index' {
  import { eachWeekendOfInterval } from 'date-fns-jalaali/esm/fp'
  export default eachWeekendOfInterval
}

declare module 'date-fns-jalaali/esm/fp/eachWeekendOfMonth/index' {
  import { eachWeekendOfMonth } from 'date-fns-jalaali/esm/fp'
  export default eachWeekendOfMonth
}

declare module 'date-fns-jalaali/esm/fp/eachWeekendOfYear/index' {
  import { eachWeekendOfYear } from 'date-fns-jalaali/esm/fp'
  export default eachWeekendOfYear
}

declare module 'date-fns-jalaali/esm/fp/eachWeekOfInterval/index' {
  import { eachWeekOfInterval } from 'date-fns-jalaali/esm/fp'
  export default eachWeekOfInterval
}

declare module 'date-fns-jalaali/esm/fp/eachWeekOfIntervalWithOptions/index' {
  import { eachWeekOfIntervalWithOptions } from 'date-fns-jalaali/esm/fp'
  export default eachWeekOfIntervalWithOptions
}

declare module 'date-fns-jalaali/esm/fp/eachYearOfInterval/index' {
  import { eachYearOfInterval } from 'date-fns-jalaali/esm/fp'
  export default eachYearOfInterval
}

declare module 'date-fns-jalaali/esm/fp/endOfDay/index' {
  import { endOfDay } from 'date-fns-jalaali/esm/fp'
  export default endOfDay
}

declare module 'date-fns-jalaali/esm/fp/endOfDecade/index' {
  import { endOfDecade } from 'date-fns-jalaali/esm/fp'
  export default endOfDecade
}

declare module 'date-fns-jalaali/esm/fp/endOfDecadeWithOptions/index' {
  import { endOfDecadeWithOptions } from 'date-fns-jalaali/esm/fp'
  export default endOfDecadeWithOptions
}

declare module 'date-fns-jalaali/esm/fp/endOfHour/index' {
  import { endOfHour } from 'date-fns-jalaali/esm/fp'
  export default endOfHour
}

declare module 'date-fns-jalaali/esm/fp/endOfISOWeek/index' {
  import { endOfISOWeek } from 'date-fns-jalaali/esm/fp'
  export default endOfISOWeek
}

declare module 'date-fns-jalaali/esm/fp/endOfISOWeekYear/index' {
  import { endOfISOWeekYear } from 'date-fns-jalaali/esm/fp'
  export default endOfISOWeekYear
}

declare module 'date-fns-jalaali/esm/fp/endOfMinute/index' {
  import { endOfMinute } from 'date-fns-jalaali/esm/fp'
  export default endOfMinute
}

declare module 'date-fns-jalaali/esm/fp/endOfMonth/index' {
  import { endOfMonth } from 'date-fns-jalaali/esm/fp'
  export default endOfMonth
}

declare module 'date-fns-jalaali/esm/fp/endOfQuarter/index' {
  import { endOfQuarter } from 'date-fns-jalaali/esm/fp'
  export default endOfQuarter
}

declare module 'date-fns-jalaali/esm/fp/endOfSecond/index' {
  import { endOfSecond } from 'date-fns-jalaali/esm/fp'
  export default endOfSecond
}

declare module 'date-fns-jalaali/esm/fp/endOfWeek/index' {
  import { endOfWeek } from 'date-fns-jalaali/esm/fp'
  export default endOfWeek
}

declare module 'date-fns-jalaali/esm/fp/endOfWeekWithOptions/index' {
  import { endOfWeekWithOptions } from 'date-fns-jalaali/esm/fp'
  export default endOfWeekWithOptions
}

declare module 'date-fns-jalaali/esm/fp/endOfYear/index' {
  import { endOfYear } from 'date-fns-jalaali/esm/fp'
  export default endOfYear
}

declare module 'date-fns-jalaali/esm/fp/format/index' {
  import { format } from 'date-fns-jalaali/esm/fp'
  export default format
}

declare module 'date-fns-jalaali/esm/fp/formatDistance/index' {
  import { formatDistance } from 'date-fns-jalaali/esm/fp'
  export default formatDistance
}

declare module 'date-fns-jalaali/esm/fp/formatDistanceStrict/index' {
  import { formatDistanceStrict } from 'date-fns-jalaali/esm/fp'
  export default formatDistanceStrict
}

declare module 'date-fns-jalaali/esm/fp/formatDistanceStrictWithOptions/index' {
  import { formatDistanceStrictWithOptions } from 'date-fns-jalaali/esm/fp'
  export default formatDistanceStrictWithOptions
}

declare module 'date-fns-jalaali/esm/fp/formatDistanceWithOptions/index' {
  import { formatDistanceWithOptions } from 'date-fns-jalaali/esm/fp'
  export default formatDistanceWithOptions
}

declare module 'date-fns-jalaali/esm/fp/formatISO/index' {
  import { formatISO } from 'date-fns-jalaali/esm/fp'
  export default formatISO
}

declare module 'date-fns-jalaali/esm/fp/formatISO9075/index' {
  import { formatISO9075 } from 'date-fns-jalaali/esm/fp'
  export default formatISO9075
}

declare module 'date-fns-jalaali/esm/fp/formatISO9075WithOptions/index' {
  import { formatISO9075WithOptions } from 'date-fns-jalaali/esm/fp'
  export default formatISO9075WithOptions
}

declare module 'date-fns-jalaali/esm/fp/formatISODuration/index' {
  import { formatISODuration } from 'date-fns-jalaali/esm/fp'
  export default formatISODuration
}

declare module 'date-fns-jalaali/esm/fp/formatISOWithOptions/index' {
  import { formatISOWithOptions } from 'date-fns-jalaali/esm/fp'
  export default formatISOWithOptions
}

declare module 'date-fns-jalaali/esm/fp/formatRelative/index' {
  import { formatRelative } from 'date-fns-jalaali/esm/fp'
  export default formatRelative
}

declare module 'date-fns-jalaali/esm/fp/formatRelativeWithOptions/index' {
  import { formatRelativeWithOptions } from 'date-fns-jalaali/esm/fp'
  export default formatRelativeWithOptions
}

declare module 'date-fns-jalaali/esm/fp/formatRFC3339/index' {
  import { formatRFC3339 } from 'date-fns-jalaali/esm/fp'
  export default formatRFC3339
}

declare module 'date-fns-jalaali/esm/fp/formatRFC3339WithOptions/index' {
  import { formatRFC3339WithOptions } from 'date-fns-jalaali/esm/fp'
  export default formatRFC3339WithOptions
}

declare module 'date-fns-jalaali/esm/fp/formatRFC7231/index' {
  import { formatRFC7231 } from 'date-fns-jalaali/esm/fp'
  export default formatRFC7231
}

declare module 'date-fns-jalaali/esm/fp/formatWithOptions/index' {
  import { formatWithOptions } from 'date-fns-jalaali/esm/fp'
  export default formatWithOptions
}

declare module 'date-fns-jalaali/esm/fp/fromUnixTime/index' {
  import { fromUnixTime } from 'date-fns-jalaali/esm/fp'
  export default fromUnixTime
}

declare module 'date-fns-jalaali/esm/fp/getDate/index' {
  import { getDate } from 'date-fns-jalaali/esm/fp'
  export default getDate
}

declare module 'date-fns-jalaali/esm/fp/getDay/index' {
  import { getDay } from 'date-fns-jalaali/esm/fp'
  export default getDay
}

declare module 'date-fns-jalaali/esm/fp/getDayOfYear/index' {
  import { getDayOfYear } from 'date-fns-jalaali/esm/fp'
  export default getDayOfYear
}

declare module 'date-fns-jalaali/esm/fp/getDaysInMonth/index' {
  import { getDaysInMonth } from 'date-fns-jalaali/esm/fp'
  export default getDaysInMonth
}

declare module 'date-fns-jalaali/esm/fp/getDaysInYear/index' {
  import { getDaysInYear } from 'date-fns-jalaali/esm/fp'
  export default getDaysInYear
}

declare module 'date-fns-jalaali/esm/fp/getDecade/index' {
  import { getDecade } from 'date-fns-jalaali/esm/fp'
  export default getDecade
}

declare module 'date-fns-jalaali/esm/fp/getHours/index' {
  import { getHours } from 'date-fns-jalaali/esm/fp'
  export default getHours
}

declare module 'date-fns-jalaali/esm/fp/getISODay/index' {
  import { getISODay } from 'date-fns-jalaali/esm/fp'
  export default getISODay
}

declare module 'date-fns-jalaali/esm/fp/getISOWeek/index' {
  import { getISOWeek } from 'date-fns-jalaali/esm/fp'
  export default getISOWeek
}

declare module 'date-fns-jalaali/esm/fp/getISOWeeksInYear/index' {
  import { getISOWeeksInYear } from 'date-fns-jalaali/esm/fp'
  export default getISOWeeksInYear
}

declare module 'date-fns-jalaali/esm/fp/getISOWeekYear/index' {
  import { getISOWeekYear } from 'date-fns-jalaali/esm/fp'
  export default getISOWeekYear
}

declare module 'date-fns-jalaali/esm/fp/getMilliseconds/index' {
  import { getMilliseconds } from 'date-fns-jalaali/esm/fp'
  export default getMilliseconds
}

declare module 'date-fns-jalaali/esm/fp/getMinutes/index' {
  import { getMinutes } from 'date-fns-jalaali/esm/fp'
  export default getMinutes
}

declare module 'date-fns-jalaali/esm/fp/getMonth/index' {
  import { getMonth } from 'date-fns-jalaali/esm/fp'
  export default getMonth
}

declare module 'date-fns-jalaali/esm/fp/getOverlappingDaysInIntervals/index' {
  import { getOverlappingDaysInIntervals } from 'date-fns-jalaali/esm/fp'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns-jalaali/esm/fp/getQuarter/index' {
  import { getQuarter } from 'date-fns-jalaali/esm/fp'
  export default getQuarter
}

declare module 'date-fns-jalaali/esm/fp/getSeconds/index' {
  import { getSeconds } from 'date-fns-jalaali/esm/fp'
  export default getSeconds
}

declare module 'date-fns-jalaali/esm/fp/getTime/index' {
  import { getTime } from 'date-fns-jalaali/esm/fp'
  export default getTime
}

declare module 'date-fns-jalaali/esm/fp/getUnixTime/index' {
  import { getUnixTime } from 'date-fns-jalaali/esm/fp'
  export default getUnixTime
}

declare module 'date-fns-jalaali/esm/fp/getWeek/index' {
  import { getWeek } from 'date-fns-jalaali/esm/fp'
  export default getWeek
}

declare module 'date-fns-jalaali/esm/fp/getWeekOfMonth/index' {
  import { getWeekOfMonth } from 'date-fns-jalaali/esm/fp'
  export default getWeekOfMonth
}

declare module 'date-fns-jalaali/esm/fp/getWeekOfMonthWithOptions/index' {
  import { getWeekOfMonthWithOptions } from 'date-fns-jalaali/esm/fp'
  export default getWeekOfMonthWithOptions
}

declare module 'date-fns-jalaali/esm/fp/getWeeksInMonth/index' {
  import { getWeeksInMonth } from 'date-fns-jalaali/esm/fp'
  export default getWeeksInMonth
}

declare module 'date-fns-jalaali/esm/fp/getWeeksInMonthWithOptions/index' {
  import { getWeeksInMonthWithOptions } from 'date-fns-jalaali/esm/fp'
  export default getWeeksInMonthWithOptions
}

declare module 'date-fns-jalaali/esm/fp/getWeekWithOptions/index' {
  import { getWeekWithOptions } from 'date-fns-jalaali/esm/fp'
  export default getWeekWithOptions
}

declare module 'date-fns-jalaali/esm/fp/getWeekYear/index' {
  import { getWeekYear } from 'date-fns-jalaali/esm/fp'
  export default getWeekYear
}

declare module 'date-fns-jalaali/esm/fp/getWeekYearWithOptions/index' {
  import { getWeekYearWithOptions } from 'date-fns-jalaali/esm/fp'
  export default getWeekYearWithOptions
}

declare module 'date-fns-jalaali/esm/fp/getYear/index' {
  import { getYear } from 'date-fns-jalaali/esm/fp'
  export default getYear
}

declare module 'date-fns-jalaali/esm/fp/intervalToDuration/index' {
  import { intervalToDuration } from 'date-fns-jalaali/esm/fp'
  export default intervalToDuration
}

declare module 'date-fns-jalaali/esm/fp/isAfter/index' {
  import { isAfter } from 'date-fns-jalaali/esm/fp'
  export default isAfter
}

declare module 'date-fns-jalaali/esm/fp/isBefore/index' {
  import { isBefore } from 'date-fns-jalaali/esm/fp'
  export default isBefore
}

declare module 'date-fns-jalaali/esm/fp/isDate/index' {
  import { isDate } from 'date-fns-jalaali/esm/fp'
  export default isDate
}

declare module 'date-fns-jalaali/esm/fp/isEqual/index' {
  import { isEqual } from 'date-fns-jalaali/esm/fp'
  export default isEqual
}

declare module 'date-fns-jalaali/esm/fp/isExists/index' {
  import { isExists } from 'date-fns-jalaali/esm/fp'
  export default isExists
}

declare module 'date-fns-jalaali/esm/fp/isFirstDayOfMonth/index' {
  import { isFirstDayOfMonth } from 'date-fns-jalaali/esm/fp'
  export default isFirstDayOfMonth
}

declare module 'date-fns-jalaali/esm/fp/isFriday/index' {
  import { isFriday } from 'date-fns-jalaali/esm/fp'
  export default isFriday
}

declare module 'date-fns-jalaali/esm/fp/isLastDayOfMonth/index' {
  import { isLastDayOfMonth } from 'date-fns-jalaali/esm/fp'
  export default isLastDayOfMonth
}

declare module 'date-fns-jalaali/esm/fp/isLeapYear/index' {
  import { isLeapYear } from 'date-fns-jalaali/esm/fp'
  export default isLeapYear
}

declare module 'date-fns-jalaali/esm/fp/isMonday/index' {
  import { isMonday } from 'date-fns-jalaali/esm/fp'
  export default isMonday
}

declare module 'date-fns-jalaali/esm/fp/isSameDay/index' {
  import { isSameDay } from 'date-fns-jalaali/esm/fp'
  export default isSameDay
}

declare module 'date-fns-jalaali/esm/fp/isSameHour/index' {
  import { isSameHour } from 'date-fns-jalaali/esm/fp'
  export default isSameHour
}

declare module 'date-fns-jalaali/esm/fp/isSameISOWeek/index' {
  import { isSameISOWeek } from 'date-fns-jalaali/esm/fp'
  export default isSameISOWeek
}

declare module 'date-fns-jalaali/esm/fp/isSameISOWeekYear/index' {
  import { isSameISOWeekYear } from 'date-fns-jalaali/esm/fp'
  export default isSameISOWeekYear
}

declare module 'date-fns-jalaali/esm/fp/isSameMinute/index' {
  import { isSameMinute } from 'date-fns-jalaali/esm/fp'
  export default isSameMinute
}

declare module 'date-fns-jalaali/esm/fp/isSameMonth/index' {
  import { isSameMonth } from 'date-fns-jalaali/esm/fp'
  export default isSameMonth
}

declare module 'date-fns-jalaali/esm/fp/isSameQuarter/index' {
  import { isSameQuarter } from 'date-fns-jalaali/esm/fp'
  export default isSameQuarter
}

declare module 'date-fns-jalaali/esm/fp/isSameSecond/index' {
  import { isSameSecond } from 'date-fns-jalaali/esm/fp'
  export default isSameSecond
}

declare module 'date-fns-jalaali/esm/fp/isSameWeek/index' {
  import { isSameWeek } from 'date-fns-jalaali/esm/fp'
  export default isSameWeek
}

declare module 'date-fns-jalaali/esm/fp/isSameWeekWithOptions/index' {
  import { isSameWeekWithOptions } from 'date-fns-jalaali/esm/fp'
  export default isSameWeekWithOptions
}

declare module 'date-fns-jalaali/esm/fp/isSameYear/index' {
  import { isSameYear } from 'date-fns-jalaali/esm/fp'
  export default isSameYear
}

declare module 'date-fns-jalaali/esm/fp/isSaturday/index' {
  import { isSaturday } from 'date-fns-jalaali/esm/fp'
  export default isSaturday
}

declare module 'date-fns-jalaali/esm/fp/isSunday/index' {
  import { isSunday } from 'date-fns-jalaali/esm/fp'
  export default isSunday
}

declare module 'date-fns-jalaali/esm/fp/isThursday/index' {
  import { isThursday } from 'date-fns-jalaali/esm/fp'
  export default isThursday
}

declare module 'date-fns-jalaali/esm/fp/isTuesday/index' {
  import { isTuesday } from 'date-fns-jalaali/esm/fp'
  export default isTuesday
}

declare module 'date-fns-jalaali/esm/fp/isValid/index' {
  import { isValid } from 'date-fns-jalaali/esm/fp'
  export default isValid
}

declare module 'date-fns-jalaali/esm/fp/isWednesday/index' {
  import { isWednesday } from 'date-fns-jalaali/esm/fp'
  export default isWednesday
}

declare module 'date-fns-jalaali/esm/fp/isWeekend/index' {
  import { isWeekend } from 'date-fns-jalaali/esm/fp'
  export default isWeekend
}

declare module 'date-fns-jalaali/esm/fp/isWithinInterval/index' {
  import { isWithinInterval } from 'date-fns-jalaali/esm/fp'
  export default isWithinInterval
}

declare module 'date-fns-jalaali/esm/fp/lastDayOfDecade/index' {
  import { lastDayOfDecade } from 'date-fns-jalaali/esm/fp'
  export default lastDayOfDecade
}

declare module 'date-fns-jalaali/esm/fp/lastDayOfISOWeek/index' {
  import { lastDayOfISOWeek } from 'date-fns-jalaali/esm/fp'
  export default lastDayOfISOWeek
}

declare module 'date-fns-jalaali/esm/fp/lastDayOfISOWeekYear/index' {
  import { lastDayOfISOWeekYear } from 'date-fns-jalaali/esm/fp'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns-jalaali/esm/fp/lastDayOfMonth/index' {
  import { lastDayOfMonth } from 'date-fns-jalaali/esm/fp'
  export default lastDayOfMonth
}

declare module 'date-fns-jalaali/esm/fp/lastDayOfQuarter/index' {
  import { lastDayOfQuarter } from 'date-fns-jalaali/esm/fp'
  export default lastDayOfQuarter
}

declare module 'date-fns-jalaali/esm/fp/lastDayOfQuarterWithOptions/index' {
  import { lastDayOfQuarterWithOptions } from 'date-fns-jalaali/esm/fp'
  export default lastDayOfQuarterWithOptions
}

declare module 'date-fns-jalaali/esm/fp/lastDayOfWeek/index' {
  import { lastDayOfWeek } from 'date-fns-jalaali/esm/fp'
  export default lastDayOfWeek
}

declare module 'date-fns-jalaali/esm/fp/lastDayOfWeekWithOptions/index' {
  import { lastDayOfWeekWithOptions } from 'date-fns-jalaali/esm/fp'
  export default lastDayOfWeekWithOptions
}

declare module 'date-fns-jalaali/esm/fp/lastDayOfYear/index' {
  import { lastDayOfYear } from 'date-fns-jalaali/esm/fp'
  export default lastDayOfYear
}

declare module 'date-fns-jalaali/esm/fp/lightFormat/index' {
  import { lightFormat } from 'date-fns-jalaali/esm/fp'
  export default lightFormat
}

declare module 'date-fns-jalaali/esm/fp/max/index' {
  import { max } from 'date-fns-jalaali/esm/fp'
  export default max
}

declare module 'date-fns-jalaali/esm/fp/min/index' {
  import { min } from 'date-fns-jalaali/esm/fp'
  export default min
}

declare module 'date-fns-jalaali/esm/fp/parse/index' {
  import { parse } from 'date-fns-jalaali/esm/fp'
  export default parse
}

declare module 'date-fns-jalaali/esm/fp/parseISO/index' {
  import { parseISO } from 'date-fns-jalaali/esm/fp'
  export default parseISO
}

declare module 'date-fns-jalaali/esm/fp/parseISOWithOptions/index' {
  import { parseISOWithOptions } from 'date-fns-jalaali/esm/fp'
  export default parseISOWithOptions
}

declare module 'date-fns-jalaali/esm/fp/parseJSON/index' {
  import { parseJSON } from 'date-fns-jalaali/esm/fp'
  export default parseJSON
}

declare module 'date-fns-jalaali/esm/fp/parseWithOptions/index' {
  import { parseWithOptions } from 'date-fns-jalaali/esm/fp'
  export default parseWithOptions
}

declare module 'date-fns-jalaali/esm/fp/roundToNearestMinutes/index' {
  import { roundToNearestMinutes } from 'date-fns-jalaali/esm/fp'
  export default roundToNearestMinutes
}

declare module 'date-fns-jalaali/esm/fp/roundToNearestMinutesWithOptions/index' {
  import { roundToNearestMinutesWithOptions } from 'date-fns-jalaali/esm/fp'
  export default roundToNearestMinutesWithOptions
}

declare module 'date-fns-jalaali/esm/fp/set/index' {
  import { set } from 'date-fns-jalaali/esm/fp'
  export default set
}

declare module 'date-fns-jalaali/esm/fp/setDate/index' {
  import { setDate } from 'date-fns-jalaali/esm/fp'
  export default setDate
}

declare module 'date-fns-jalaali/esm/fp/setDay/index' {
  import { setDay } from 'date-fns-jalaali/esm/fp'
  export default setDay
}

declare module 'date-fns-jalaali/esm/fp/setDayOfYear/index' {
  import { setDayOfYear } from 'date-fns-jalaali/esm/fp'
  export default setDayOfYear
}

declare module 'date-fns-jalaali/esm/fp/setDayWithOptions/index' {
  import { setDayWithOptions } from 'date-fns-jalaali/esm/fp'
  export default setDayWithOptions
}

declare module 'date-fns-jalaali/esm/fp/setHours/index' {
  import { setHours } from 'date-fns-jalaali/esm/fp'
  export default setHours
}

declare module 'date-fns-jalaali/esm/fp/setISODay/index' {
  import { setISODay } from 'date-fns-jalaali/esm/fp'
  export default setISODay
}

declare module 'date-fns-jalaali/esm/fp/setISOWeek/index' {
  import { setISOWeek } from 'date-fns-jalaali/esm/fp'
  export default setISOWeek
}

declare module 'date-fns-jalaali/esm/fp/setISOWeekYear/index' {
  import { setISOWeekYear } from 'date-fns-jalaali/esm/fp'
  export default setISOWeekYear
}

declare module 'date-fns-jalaali/esm/fp/setMilliseconds/index' {
  import { setMilliseconds } from 'date-fns-jalaali/esm/fp'
  export default setMilliseconds
}

declare module 'date-fns-jalaali/esm/fp/setMinutes/index' {
  import { setMinutes } from 'date-fns-jalaali/esm/fp'
  export default setMinutes
}

declare module 'date-fns-jalaali/esm/fp/setMonth/index' {
  import { setMonth } from 'date-fns-jalaali/esm/fp'
  export default setMonth
}

declare module 'date-fns-jalaali/esm/fp/setQuarter/index' {
  import { setQuarter } from 'date-fns-jalaali/esm/fp'
  export default setQuarter
}

declare module 'date-fns-jalaali/esm/fp/setSeconds/index' {
  import { setSeconds } from 'date-fns-jalaali/esm/fp'
  export default setSeconds
}

declare module 'date-fns-jalaali/esm/fp/setWeek/index' {
  import { setWeek } from 'date-fns-jalaali/esm/fp'
  export default setWeek
}

declare module 'date-fns-jalaali/esm/fp/setWeekWithOptions/index' {
  import { setWeekWithOptions } from 'date-fns-jalaali/esm/fp'
  export default setWeekWithOptions
}

declare module 'date-fns-jalaali/esm/fp/setWeekYear/index' {
  import { setWeekYear } from 'date-fns-jalaali/esm/fp'
  export default setWeekYear
}

declare module 'date-fns-jalaali/esm/fp/setWeekYearWithOptions/index' {
  import { setWeekYearWithOptions } from 'date-fns-jalaali/esm/fp'
  export default setWeekYearWithOptions
}

declare module 'date-fns-jalaali/esm/fp/setYear/index' {
  import { setYear } from 'date-fns-jalaali/esm/fp'
  export default setYear
}

declare module 'date-fns-jalaali/esm/fp/startOfDay/index' {
  import { startOfDay } from 'date-fns-jalaali/esm/fp'
  export default startOfDay
}

declare module 'date-fns-jalaali/esm/fp/startOfDecade/index' {
  import { startOfDecade } from 'date-fns-jalaali/esm/fp'
  export default startOfDecade
}

declare module 'date-fns-jalaali/esm/fp/startOfHour/index' {
  import { startOfHour } from 'date-fns-jalaali/esm/fp'
  export default startOfHour
}

declare module 'date-fns-jalaali/esm/fp/startOfISOWeek/index' {
  import { startOfISOWeek } from 'date-fns-jalaali/esm/fp'
  export default startOfISOWeek
}

declare module 'date-fns-jalaali/esm/fp/startOfISOWeekYear/index' {
  import { startOfISOWeekYear } from 'date-fns-jalaali/esm/fp'
  export default startOfISOWeekYear
}

declare module 'date-fns-jalaali/esm/fp/startOfMinute/index' {
  import { startOfMinute } from 'date-fns-jalaali/esm/fp'
  export default startOfMinute
}

declare module 'date-fns-jalaali/esm/fp/startOfMonth/index' {
  import { startOfMonth } from 'date-fns-jalaali/esm/fp'
  export default startOfMonth
}

declare module 'date-fns-jalaali/esm/fp/startOfQuarter/index' {
  import { startOfQuarter } from 'date-fns-jalaali/esm/fp'
  export default startOfQuarter
}

declare module 'date-fns-jalaali/esm/fp/startOfSecond/index' {
  import { startOfSecond } from 'date-fns-jalaali/esm/fp'
  export default startOfSecond
}

declare module 'date-fns-jalaali/esm/fp/startOfWeek/index' {
  import { startOfWeek } from 'date-fns-jalaali/esm/fp'
  export default startOfWeek
}

declare module 'date-fns-jalaali/esm/fp/startOfWeekWithOptions/index' {
  import { startOfWeekWithOptions } from 'date-fns-jalaali/esm/fp'
  export default startOfWeekWithOptions
}

declare module 'date-fns-jalaali/esm/fp/startOfWeekYear/index' {
  import { startOfWeekYear } from 'date-fns-jalaali/esm/fp'
  export default startOfWeekYear
}

declare module 'date-fns-jalaali/esm/fp/startOfWeekYearWithOptions/index' {
  import { startOfWeekYearWithOptions } from 'date-fns-jalaali/esm/fp'
  export default startOfWeekYearWithOptions
}

declare module 'date-fns-jalaali/esm/fp/startOfYear/index' {
  import { startOfYear } from 'date-fns-jalaali/esm/fp'
  export default startOfYear
}

declare module 'date-fns-jalaali/esm/fp/sub/index' {
  import { sub } from 'date-fns-jalaali/esm/fp'
  export default sub
}

declare module 'date-fns-jalaali/esm/fp/subBusinessDays/index' {
  import { subBusinessDays } from 'date-fns-jalaali/esm/fp'
  export default subBusinessDays
}

declare module 'date-fns-jalaali/esm/fp/subDays/index' {
  import { subDays } from 'date-fns-jalaali/esm/fp'
  export default subDays
}

declare module 'date-fns-jalaali/esm/fp/subHours/index' {
  import { subHours } from 'date-fns-jalaali/esm/fp'
  export default subHours
}

declare module 'date-fns-jalaali/esm/fp/subISOWeekYears/index' {
  import { subISOWeekYears } from 'date-fns-jalaali/esm/fp'
  export default subISOWeekYears
}

declare module 'date-fns-jalaali/esm/fp/subMilliseconds/index' {
  import { subMilliseconds } from 'date-fns-jalaali/esm/fp'
  export default subMilliseconds
}

declare module 'date-fns-jalaali/esm/fp/subMinutes/index' {
  import { subMinutes } from 'date-fns-jalaali/esm/fp'
  export default subMinutes
}

declare module 'date-fns-jalaali/esm/fp/subMonths/index' {
  import { subMonths } from 'date-fns-jalaali/esm/fp'
  export default subMonths
}

declare module 'date-fns-jalaali/esm/fp/subQuarters/index' {
  import { subQuarters } from 'date-fns-jalaali/esm/fp'
  export default subQuarters
}

declare module 'date-fns-jalaali/esm/fp/subSeconds/index' {
  import { subSeconds } from 'date-fns-jalaali/esm/fp'
  export default subSeconds
}

declare module 'date-fns-jalaali/esm/fp/subWeeks/index' {
  import { subWeeks } from 'date-fns-jalaali/esm/fp'
  export default subWeeks
}

declare module 'date-fns-jalaali/esm/fp/subYears/index' {
  import { subYears } from 'date-fns-jalaali/esm/fp'
  export default subYears
}

declare module 'date-fns-jalaali/esm/fp/toDate/index' {
  import { toDate } from 'date-fns-jalaali/esm/fp'
  export default toDate
}

declare module 'date-fns-jalaali/esm/fp/add/index.js' {
  import { add } from 'date-fns-jalaali/esm/fp'
  export default add
}

declare module 'date-fns-jalaali/esm/fp/addBusinessDays/index.js' {
  import { addBusinessDays } from 'date-fns-jalaali/esm/fp'
  export default addBusinessDays
}

declare module 'date-fns-jalaali/esm/fp/addDays/index.js' {
  import { addDays } from 'date-fns-jalaali/esm/fp'
  export default addDays
}

declare module 'date-fns-jalaali/esm/fp/addHours/index.js' {
  import { addHours } from 'date-fns-jalaali/esm/fp'
  export default addHours
}

declare module 'date-fns-jalaali/esm/fp/addISOWeekYears/index.js' {
  import { addISOWeekYears } from 'date-fns-jalaali/esm/fp'
  export default addISOWeekYears
}

declare module 'date-fns-jalaali/esm/fp/addMilliseconds/index.js' {
  import { addMilliseconds } from 'date-fns-jalaali/esm/fp'
  export default addMilliseconds
}

declare module 'date-fns-jalaali/esm/fp/addMinutes/index.js' {
  import { addMinutes } from 'date-fns-jalaali/esm/fp'
  export default addMinutes
}

declare module 'date-fns-jalaali/esm/fp/addMonths/index.js' {
  import { addMonths } from 'date-fns-jalaali/esm/fp'
  export default addMonths
}

declare module 'date-fns-jalaali/esm/fp/addQuarters/index.js' {
  import { addQuarters } from 'date-fns-jalaali/esm/fp'
  export default addQuarters
}

declare module 'date-fns-jalaali/esm/fp/addSeconds/index.js' {
  import { addSeconds } from 'date-fns-jalaali/esm/fp'
  export default addSeconds
}

declare module 'date-fns-jalaali/esm/fp/addWeeks/index.js' {
  import { addWeeks } from 'date-fns-jalaali/esm/fp'
  export default addWeeks
}

declare module 'date-fns-jalaali/esm/fp/addYears/index.js' {
  import { addYears } from 'date-fns-jalaali/esm/fp'
  export default addYears
}

declare module 'date-fns-jalaali/esm/fp/areIntervalsOverlapping/index.js' {
  import { areIntervalsOverlapping } from 'date-fns-jalaali/esm/fp'
  export default areIntervalsOverlapping
}

declare module 'date-fns-jalaali/esm/fp/areIntervalsOverlappingWithOptions/index.js' {
  import { areIntervalsOverlappingWithOptions } from 'date-fns-jalaali/esm/fp'
  export default areIntervalsOverlappingWithOptions
}

declare module 'date-fns-jalaali/esm/fp/closestIndexTo/index.js' {
  import { closestIndexTo } from 'date-fns-jalaali/esm/fp'
  export default closestIndexTo
}

declare module 'date-fns-jalaali/esm/fp/closestTo/index.js' {
  import { closestTo } from 'date-fns-jalaali/esm/fp'
  export default closestTo
}

declare module 'date-fns-jalaali/esm/fp/compareAsc/index.js' {
  import { compareAsc } from 'date-fns-jalaali/esm/fp'
  export default compareAsc
}

declare module 'date-fns-jalaali/esm/fp/compareDesc/index.js' {
  import { compareDesc } from 'date-fns-jalaali/esm/fp'
  export default compareDesc
}

declare module 'date-fns-jalaali/esm/fp/differenceInBusinessDays/index.js' {
  import { differenceInBusinessDays } from 'date-fns-jalaali/esm/fp'
  export default differenceInBusinessDays
}

declare module 'date-fns-jalaali/esm/fp/differenceInCalendarDays/index.js' {
  import { differenceInCalendarDays } from 'date-fns-jalaali/esm/fp'
  export default differenceInCalendarDays
}

declare module 'date-fns-jalaali/esm/fp/differenceInCalendarISOWeeks/index.js' {
  import { differenceInCalendarISOWeeks } from 'date-fns-jalaali/esm/fp'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns-jalaali/esm/fp/differenceInCalendarISOWeekYears/index.js' {
  import { differenceInCalendarISOWeekYears } from 'date-fns-jalaali/esm/fp'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns-jalaali/esm/fp/differenceInCalendarMonths/index.js' {
  import { differenceInCalendarMonths } from 'date-fns-jalaali/esm/fp'
  export default differenceInCalendarMonths
}

declare module 'date-fns-jalaali/esm/fp/differenceInCalendarQuarters/index.js' {
  import { differenceInCalendarQuarters } from 'date-fns-jalaali/esm/fp'
  export default differenceInCalendarQuarters
}

declare module 'date-fns-jalaali/esm/fp/differenceInCalendarWeeks/index.js' {
  import { differenceInCalendarWeeks } from 'date-fns-jalaali/esm/fp'
  export default differenceInCalendarWeeks
}

declare module 'date-fns-jalaali/esm/fp/differenceInCalendarWeeksWithOptions/index.js' {
  import { differenceInCalendarWeeksWithOptions } from 'date-fns-jalaali/esm/fp'
  export default differenceInCalendarWeeksWithOptions
}

declare module 'date-fns-jalaali/esm/fp/differenceInCalendarYears/index.js' {
  import { differenceInCalendarYears } from 'date-fns-jalaali/esm/fp'
  export default differenceInCalendarYears
}

declare module 'date-fns-jalaali/esm/fp/differenceInDays/index.js' {
  import { differenceInDays } from 'date-fns-jalaali/esm/fp'
  export default differenceInDays
}

declare module 'date-fns-jalaali/esm/fp/differenceInHours/index.js' {
  import { differenceInHours } from 'date-fns-jalaali/esm/fp'
  export default differenceInHours
}

declare module 'date-fns-jalaali/esm/fp/differenceInISOWeekYears/index.js' {
  import { differenceInISOWeekYears } from 'date-fns-jalaali/esm/fp'
  export default differenceInISOWeekYears
}

declare module 'date-fns-jalaali/esm/fp/differenceInMilliseconds/index.js' {
  import { differenceInMilliseconds } from 'date-fns-jalaali/esm/fp'
  export default differenceInMilliseconds
}

declare module 'date-fns-jalaali/esm/fp/differenceInMinutes/index.js' {
  import { differenceInMinutes } from 'date-fns-jalaali/esm/fp'
  export default differenceInMinutes
}

declare module 'date-fns-jalaali/esm/fp/differenceInMonths/index.js' {
  import { differenceInMonths } from 'date-fns-jalaali/esm/fp'
  export default differenceInMonths
}

declare module 'date-fns-jalaali/esm/fp/differenceInQuarters/index.js' {
  import { differenceInQuarters } from 'date-fns-jalaali/esm/fp'
  export default differenceInQuarters
}

declare module 'date-fns-jalaali/esm/fp/differenceInSeconds/index.js' {
  import { differenceInSeconds } from 'date-fns-jalaali/esm/fp'
  export default differenceInSeconds
}

declare module 'date-fns-jalaali/esm/fp/differenceInWeeks/index.js' {
  import { differenceInWeeks } from 'date-fns-jalaali/esm/fp'
  export default differenceInWeeks
}

declare module 'date-fns-jalaali/esm/fp/differenceInYears/index.js' {
  import { differenceInYears } from 'date-fns-jalaali/esm/fp'
  export default differenceInYears
}

declare module 'date-fns-jalaali/esm/fp/eachDayOfInterval/index.js' {
  import { eachDayOfInterval } from 'date-fns-jalaali/esm/fp'
  export default eachDayOfInterval
}

declare module 'date-fns-jalaali/esm/fp/eachDayOfIntervalWithOptions/index.js' {
  import { eachDayOfIntervalWithOptions } from 'date-fns-jalaali/esm/fp'
  export default eachDayOfIntervalWithOptions
}

declare module 'date-fns-jalaali/esm/fp/eachMonthOfInterval/index.js' {
  import { eachMonthOfInterval } from 'date-fns-jalaali/esm/fp'
  export default eachMonthOfInterval
}

declare module 'date-fns-jalaali/esm/fp/eachWeekendOfInterval/index.js' {
  import { eachWeekendOfInterval } from 'date-fns-jalaali/esm/fp'
  export default eachWeekendOfInterval
}

declare module 'date-fns-jalaali/esm/fp/eachWeekendOfMonth/index.js' {
  import { eachWeekendOfMonth } from 'date-fns-jalaali/esm/fp'
  export default eachWeekendOfMonth
}

declare module 'date-fns-jalaali/esm/fp/eachWeekendOfYear/index.js' {
  import { eachWeekendOfYear } from 'date-fns-jalaali/esm/fp'
  export default eachWeekendOfYear
}

declare module 'date-fns-jalaali/esm/fp/eachWeekOfInterval/index.js' {
  import { eachWeekOfInterval } from 'date-fns-jalaali/esm/fp'
  export default eachWeekOfInterval
}

declare module 'date-fns-jalaali/esm/fp/eachWeekOfIntervalWithOptions/index.js' {
  import { eachWeekOfIntervalWithOptions } from 'date-fns-jalaali/esm/fp'
  export default eachWeekOfIntervalWithOptions
}

declare module 'date-fns-jalaali/esm/fp/eachYearOfInterval/index.js' {
  import { eachYearOfInterval } from 'date-fns-jalaali/esm/fp'
  export default eachYearOfInterval
}

declare module 'date-fns-jalaali/esm/fp/endOfDay/index.js' {
  import { endOfDay } from 'date-fns-jalaali/esm/fp'
  export default endOfDay
}

declare module 'date-fns-jalaali/esm/fp/endOfDecade/index.js' {
  import { endOfDecade } from 'date-fns-jalaali/esm/fp'
  export default endOfDecade
}

declare module 'date-fns-jalaali/esm/fp/endOfDecadeWithOptions/index.js' {
  import { endOfDecadeWithOptions } from 'date-fns-jalaali/esm/fp'
  export default endOfDecadeWithOptions
}

declare module 'date-fns-jalaali/esm/fp/endOfHour/index.js' {
  import { endOfHour } from 'date-fns-jalaali/esm/fp'
  export default endOfHour
}

declare module 'date-fns-jalaali/esm/fp/endOfISOWeek/index.js' {
  import { endOfISOWeek } from 'date-fns-jalaali/esm/fp'
  export default endOfISOWeek
}

declare module 'date-fns-jalaali/esm/fp/endOfISOWeekYear/index.js' {
  import { endOfISOWeekYear } from 'date-fns-jalaali/esm/fp'
  export default endOfISOWeekYear
}

declare module 'date-fns-jalaali/esm/fp/endOfMinute/index.js' {
  import { endOfMinute } from 'date-fns-jalaali/esm/fp'
  export default endOfMinute
}

declare module 'date-fns-jalaali/esm/fp/endOfMonth/index.js' {
  import { endOfMonth } from 'date-fns-jalaali/esm/fp'
  export default endOfMonth
}

declare module 'date-fns-jalaali/esm/fp/endOfQuarter/index.js' {
  import { endOfQuarter } from 'date-fns-jalaali/esm/fp'
  export default endOfQuarter
}

declare module 'date-fns-jalaali/esm/fp/endOfSecond/index.js' {
  import { endOfSecond } from 'date-fns-jalaali/esm/fp'
  export default endOfSecond
}

declare module 'date-fns-jalaali/esm/fp/endOfWeek/index.js' {
  import { endOfWeek } from 'date-fns-jalaali/esm/fp'
  export default endOfWeek
}

declare module 'date-fns-jalaali/esm/fp/endOfWeekWithOptions/index.js' {
  import { endOfWeekWithOptions } from 'date-fns-jalaali/esm/fp'
  export default endOfWeekWithOptions
}

declare module 'date-fns-jalaali/esm/fp/endOfYear/index.js' {
  import { endOfYear } from 'date-fns-jalaali/esm/fp'
  export default endOfYear
}

declare module 'date-fns-jalaali/esm/fp/format/index.js' {
  import { format } from 'date-fns-jalaali/esm/fp'
  export default format
}

declare module 'date-fns-jalaali/esm/fp/formatDistance/index.js' {
  import { formatDistance } from 'date-fns-jalaali/esm/fp'
  export default formatDistance
}

declare module 'date-fns-jalaali/esm/fp/formatDistanceStrict/index.js' {
  import { formatDistanceStrict } from 'date-fns-jalaali/esm/fp'
  export default formatDistanceStrict
}

declare module 'date-fns-jalaali/esm/fp/formatDistanceStrictWithOptions/index.js' {
  import { formatDistanceStrictWithOptions } from 'date-fns-jalaali/esm/fp'
  export default formatDistanceStrictWithOptions
}

declare module 'date-fns-jalaali/esm/fp/formatDistanceWithOptions/index.js' {
  import { formatDistanceWithOptions } from 'date-fns-jalaali/esm/fp'
  export default formatDistanceWithOptions
}

declare module 'date-fns-jalaali/esm/fp/formatISO/index.js' {
  import { formatISO } from 'date-fns-jalaali/esm/fp'
  export default formatISO
}

declare module 'date-fns-jalaali/esm/fp/formatISO9075/index.js' {
  import { formatISO9075 } from 'date-fns-jalaali/esm/fp'
  export default formatISO9075
}

declare module 'date-fns-jalaali/esm/fp/formatISO9075WithOptions/index.js' {
  import { formatISO9075WithOptions } from 'date-fns-jalaali/esm/fp'
  export default formatISO9075WithOptions
}

declare module 'date-fns-jalaali/esm/fp/formatISODuration/index.js' {
  import { formatISODuration } from 'date-fns-jalaali/esm/fp'
  export default formatISODuration
}

declare module 'date-fns-jalaali/esm/fp/formatISOWithOptions/index.js' {
  import { formatISOWithOptions } from 'date-fns-jalaali/esm/fp'
  export default formatISOWithOptions
}

declare module 'date-fns-jalaali/esm/fp/formatRelative/index.js' {
  import { formatRelative } from 'date-fns-jalaali/esm/fp'
  export default formatRelative
}

declare module 'date-fns-jalaali/esm/fp/formatRelativeWithOptions/index.js' {
  import { formatRelativeWithOptions } from 'date-fns-jalaali/esm/fp'
  export default formatRelativeWithOptions
}

declare module 'date-fns-jalaali/esm/fp/formatRFC3339/index.js' {
  import { formatRFC3339 } from 'date-fns-jalaali/esm/fp'
  export default formatRFC3339
}

declare module 'date-fns-jalaali/esm/fp/formatRFC3339WithOptions/index.js' {
  import { formatRFC3339WithOptions } from 'date-fns-jalaali/esm/fp'
  export default formatRFC3339WithOptions
}

declare module 'date-fns-jalaali/esm/fp/formatRFC7231/index.js' {
  import { formatRFC7231 } from 'date-fns-jalaali/esm/fp'
  export default formatRFC7231
}

declare module 'date-fns-jalaali/esm/fp/formatWithOptions/index.js' {
  import { formatWithOptions } from 'date-fns-jalaali/esm/fp'
  export default formatWithOptions
}

declare module 'date-fns-jalaali/esm/fp/fromUnixTime/index.js' {
  import { fromUnixTime } from 'date-fns-jalaali/esm/fp'
  export default fromUnixTime
}

declare module 'date-fns-jalaali/esm/fp/getDate/index.js' {
  import { getDate } from 'date-fns-jalaali/esm/fp'
  export default getDate
}

declare module 'date-fns-jalaali/esm/fp/getDay/index.js' {
  import { getDay } from 'date-fns-jalaali/esm/fp'
  export default getDay
}

declare module 'date-fns-jalaali/esm/fp/getDayOfYear/index.js' {
  import { getDayOfYear } from 'date-fns-jalaali/esm/fp'
  export default getDayOfYear
}

declare module 'date-fns-jalaali/esm/fp/getDaysInMonth/index.js' {
  import { getDaysInMonth } from 'date-fns-jalaali/esm/fp'
  export default getDaysInMonth
}

declare module 'date-fns-jalaali/esm/fp/getDaysInYear/index.js' {
  import { getDaysInYear } from 'date-fns-jalaali/esm/fp'
  export default getDaysInYear
}

declare module 'date-fns-jalaali/esm/fp/getDecade/index.js' {
  import { getDecade } from 'date-fns-jalaali/esm/fp'
  export default getDecade
}

declare module 'date-fns-jalaali/esm/fp/getHours/index.js' {
  import { getHours } from 'date-fns-jalaali/esm/fp'
  export default getHours
}

declare module 'date-fns-jalaali/esm/fp/getISODay/index.js' {
  import { getISODay } from 'date-fns-jalaali/esm/fp'
  export default getISODay
}

declare module 'date-fns-jalaali/esm/fp/getISOWeek/index.js' {
  import { getISOWeek } from 'date-fns-jalaali/esm/fp'
  export default getISOWeek
}

declare module 'date-fns-jalaali/esm/fp/getISOWeeksInYear/index.js' {
  import { getISOWeeksInYear } from 'date-fns-jalaali/esm/fp'
  export default getISOWeeksInYear
}

declare module 'date-fns-jalaali/esm/fp/getISOWeekYear/index.js' {
  import { getISOWeekYear } from 'date-fns-jalaali/esm/fp'
  export default getISOWeekYear
}

declare module 'date-fns-jalaali/esm/fp/getMilliseconds/index.js' {
  import { getMilliseconds } from 'date-fns-jalaali/esm/fp'
  export default getMilliseconds
}

declare module 'date-fns-jalaali/esm/fp/getMinutes/index.js' {
  import { getMinutes } from 'date-fns-jalaali/esm/fp'
  export default getMinutes
}

declare module 'date-fns-jalaali/esm/fp/getMonth/index.js' {
  import { getMonth } from 'date-fns-jalaali/esm/fp'
  export default getMonth
}

declare module 'date-fns-jalaali/esm/fp/getOverlappingDaysInIntervals/index.js' {
  import { getOverlappingDaysInIntervals } from 'date-fns-jalaali/esm/fp'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns-jalaali/esm/fp/getQuarter/index.js' {
  import { getQuarter } from 'date-fns-jalaali/esm/fp'
  export default getQuarter
}

declare module 'date-fns-jalaali/esm/fp/getSeconds/index.js' {
  import { getSeconds } from 'date-fns-jalaali/esm/fp'
  export default getSeconds
}

declare module 'date-fns-jalaali/esm/fp/getTime/index.js' {
  import { getTime } from 'date-fns-jalaali/esm/fp'
  export default getTime
}

declare module 'date-fns-jalaali/esm/fp/getUnixTime/index.js' {
  import { getUnixTime } from 'date-fns-jalaali/esm/fp'
  export default getUnixTime
}

declare module 'date-fns-jalaali/esm/fp/getWeek/index.js' {
  import { getWeek } from 'date-fns-jalaali/esm/fp'
  export default getWeek
}

declare module 'date-fns-jalaali/esm/fp/getWeekOfMonth/index.js' {
  import { getWeekOfMonth } from 'date-fns-jalaali/esm/fp'
  export default getWeekOfMonth
}

declare module 'date-fns-jalaali/esm/fp/getWeekOfMonthWithOptions/index.js' {
  import { getWeekOfMonthWithOptions } from 'date-fns-jalaali/esm/fp'
  export default getWeekOfMonthWithOptions
}

declare module 'date-fns-jalaali/esm/fp/getWeeksInMonth/index.js' {
  import { getWeeksInMonth } from 'date-fns-jalaali/esm/fp'
  export default getWeeksInMonth
}

declare module 'date-fns-jalaali/esm/fp/getWeeksInMonthWithOptions/index.js' {
  import { getWeeksInMonthWithOptions } from 'date-fns-jalaali/esm/fp'
  export default getWeeksInMonthWithOptions
}

declare module 'date-fns-jalaali/esm/fp/getWeekWithOptions/index.js' {
  import { getWeekWithOptions } from 'date-fns-jalaali/esm/fp'
  export default getWeekWithOptions
}

declare module 'date-fns-jalaali/esm/fp/getWeekYear/index.js' {
  import { getWeekYear } from 'date-fns-jalaali/esm/fp'
  export default getWeekYear
}

declare module 'date-fns-jalaali/esm/fp/getWeekYearWithOptions/index.js' {
  import { getWeekYearWithOptions } from 'date-fns-jalaali/esm/fp'
  export default getWeekYearWithOptions
}

declare module 'date-fns-jalaali/esm/fp/getYear/index.js' {
  import { getYear } from 'date-fns-jalaali/esm/fp'
  export default getYear
}

declare module 'date-fns-jalaali/esm/fp/intervalToDuration/index.js' {
  import { intervalToDuration } from 'date-fns-jalaali/esm/fp'
  export default intervalToDuration
}

declare module 'date-fns-jalaali/esm/fp/isAfter/index.js' {
  import { isAfter } from 'date-fns-jalaali/esm/fp'
  export default isAfter
}

declare module 'date-fns-jalaali/esm/fp/isBefore/index.js' {
  import { isBefore } from 'date-fns-jalaali/esm/fp'
  export default isBefore
}

declare module 'date-fns-jalaali/esm/fp/isDate/index.js' {
  import { isDate } from 'date-fns-jalaali/esm/fp'
  export default isDate
}

declare module 'date-fns-jalaali/esm/fp/isEqual/index.js' {
  import { isEqual } from 'date-fns-jalaali/esm/fp'
  export default isEqual
}

declare module 'date-fns-jalaali/esm/fp/isExists/index.js' {
  import { isExists } from 'date-fns-jalaali/esm/fp'
  export default isExists
}

declare module 'date-fns-jalaali/esm/fp/isFirstDayOfMonth/index.js' {
  import { isFirstDayOfMonth } from 'date-fns-jalaali/esm/fp'
  export default isFirstDayOfMonth
}

declare module 'date-fns-jalaali/esm/fp/isFriday/index.js' {
  import { isFriday } from 'date-fns-jalaali/esm/fp'
  export default isFriday
}

declare module 'date-fns-jalaali/esm/fp/isLastDayOfMonth/index.js' {
  import { isLastDayOfMonth } from 'date-fns-jalaali/esm/fp'
  export default isLastDayOfMonth
}

declare module 'date-fns-jalaali/esm/fp/isLeapYear/index.js' {
  import { isLeapYear } from 'date-fns-jalaali/esm/fp'
  export default isLeapYear
}

declare module 'date-fns-jalaali/esm/fp/isMonday/index.js' {
  import { isMonday } from 'date-fns-jalaali/esm/fp'
  export default isMonday
}

declare module 'date-fns-jalaali/esm/fp/isSameDay/index.js' {
  import { isSameDay } from 'date-fns-jalaali/esm/fp'
  export default isSameDay
}

declare module 'date-fns-jalaali/esm/fp/isSameHour/index.js' {
  import { isSameHour } from 'date-fns-jalaali/esm/fp'
  export default isSameHour
}

declare module 'date-fns-jalaali/esm/fp/isSameISOWeek/index.js' {
  import { isSameISOWeek } from 'date-fns-jalaali/esm/fp'
  export default isSameISOWeek
}

declare module 'date-fns-jalaali/esm/fp/isSameISOWeekYear/index.js' {
  import { isSameISOWeekYear } from 'date-fns-jalaali/esm/fp'
  export default isSameISOWeekYear
}

declare module 'date-fns-jalaali/esm/fp/isSameMinute/index.js' {
  import { isSameMinute } from 'date-fns-jalaali/esm/fp'
  export default isSameMinute
}

declare module 'date-fns-jalaali/esm/fp/isSameMonth/index.js' {
  import { isSameMonth } from 'date-fns-jalaali/esm/fp'
  export default isSameMonth
}

declare module 'date-fns-jalaali/esm/fp/isSameQuarter/index.js' {
  import { isSameQuarter } from 'date-fns-jalaali/esm/fp'
  export default isSameQuarter
}

declare module 'date-fns-jalaali/esm/fp/isSameSecond/index.js' {
  import { isSameSecond } from 'date-fns-jalaali/esm/fp'
  export default isSameSecond
}

declare module 'date-fns-jalaali/esm/fp/isSameWeek/index.js' {
  import { isSameWeek } from 'date-fns-jalaali/esm/fp'
  export default isSameWeek
}

declare module 'date-fns-jalaali/esm/fp/isSameWeekWithOptions/index.js' {
  import { isSameWeekWithOptions } from 'date-fns-jalaali/esm/fp'
  export default isSameWeekWithOptions
}

declare module 'date-fns-jalaali/esm/fp/isSameYear/index.js' {
  import { isSameYear } from 'date-fns-jalaali/esm/fp'
  export default isSameYear
}

declare module 'date-fns-jalaali/esm/fp/isSaturday/index.js' {
  import { isSaturday } from 'date-fns-jalaali/esm/fp'
  export default isSaturday
}

declare module 'date-fns-jalaali/esm/fp/isSunday/index.js' {
  import { isSunday } from 'date-fns-jalaali/esm/fp'
  export default isSunday
}

declare module 'date-fns-jalaali/esm/fp/isThursday/index.js' {
  import { isThursday } from 'date-fns-jalaali/esm/fp'
  export default isThursday
}

declare module 'date-fns-jalaali/esm/fp/isTuesday/index.js' {
  import { isTuesday } from 'date-fns-jalaali/esm/fp'
  export default isTuesday
}

declare module 'date-fns-jalaali/esm/fp/isValid/index.js' {
  import { isValid } from 'date-fns-jalaali/esm/fp'
  export default isValid
}

declare module 'date-fns-jalaali/esm/fp/isWednesday/index.js' {
  import { isWednesday } from 'date-fns-jalaali/esm/fp'
  export default isWednesday
}

declare module 'date-fns-jalaali/esm/fp/isWeekend/index.js' {
  import { isWeekend } from 'date-fns-jalaali/esm/fp'
  export default isWeekend
}

declare module 'date-fns-jalaali/esm/fp/isWithinInterval/index.js' {
  import { isWithinInterval } from 'date-fns-jalaali/esm/fp'
  export default isWithinInterval
}

declare module 'date-fns-jalaali/esm/fp/lastDayOfDecade/index.js' {
  import { lastDayOfDecade } from 'date-fns-jalaali/esm/fp'
  export default lastDayOfDecade
}

declare module 'date-fns-jalaali/esm/fp/lastDayOfISOWeek/index.js' {
  import { lastDayOfISOWeek } from 'date-fns-jalaali/esm/fp'
  export default lastDayOfISOWeek
}

declare module 'date-fns-jalaali/esm/fp/lastDayOfISOWeekYear/index.js' {
  import { lastDayOfISOWeekYear } from 'date-fns-jalaali/esm/fp'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns-jalaali/esm/fp/lastDayOfMonth/index.js' {
  import { lastDayOfMonth } from 'date-fns-jalaali/esm/fp'
  export default lastDayOfMonth
}

declare module 'date-fns-jalaali/esm/fp/lastDayOfQuarter/index.js' {
  import { lastDayOfQuarter } from 'date-fns-jalaali/esm/fp'
  export default lastDayOfQuarter
}

declare module 'date-fns-jalaali/esm/fp/lastDayOfQuarterWithOptions/index.js' {
  import { lastDayOfQuarterWithOptions } from 'date-fns-jalaali/esm/fp'
  export default lastDayOfQuarterWithOptions
}

declare module 'date-fns-jalaali/esm/fp/lastDayOfWeek/index.js' {
  import { lastDayOfWeek } from 'date-fns-jalaali/esm/fp'
  export default lastDayOfWeek
}

declare module 'date-fns-jalaali/esm/fp/lastDayOfWeekWithOptions/index.js' {
  import { lastDayOfWeekWithOptions } from 'date-fns-jalaali/esm/fp'
  export default lastDayOfWeekWithOptions
}

declare module 'date-fns-jalaali/esm/fp/lastDayOfYear/index.js' {
  import { lastDayOfYear } from 'date-fns-jalaali/esm/fp'
  export default lastDayOfYear
}

declare module 'date-fns-jalaali/esm/fp/lightFormat/index.js' {
  import { lightFormat } from 'date-fns-jalaali/esm/fp'
  export default lightFormat
}

declare module 'date-fns-jalaali/esm/fp/max/index.js' {
  import { max } from 'date-fns-jalaali/esm/fp'
  export default max
}

declare module 'date-fns-jalaali/esm/fp/min/index.js' {
  import { min } from 'date-fns-jalaali/esm/fp'
  export default min
}

declare module 'date-fns-jalaali/esm/fp/parse/index.js' {
  import { parse } from 'date-fns-jalaali/esm/fp'
  export default parse
}

declare module 'date-fns-jalaali/esm/fp/parseISO/index.js' {
  import { parseISO } from 'date-fns-jalaali/esm/fp'
  export default parseISO
}

declare module 'date-fns-jalaali/esm/fp/parseISOWithOptions/index.js' {
  import { parseISOWithOptions } from 'date-fns-jalaali/esm/fp'
  export default parseISOWithOptions
}

declare module 'date-fns-jalaali/esm/fp/parseJSON/index.js' {
  import { parseJSON } from 'date-fns-jalaali/esm/fp'
  export default parseJSON
}

declare module 'date-fns-jalaali/esm/fp/parseWithOptions/index.js' {
  import { parseWithOptions } from 'date-fns-jalaali/esm/fp'
  export default parseWithOptions
}

declare module 'date-fns-jalaali/esm/fp/roundToNearestMinutes/index.js' {
  import { roundToNearestMinutes } from 'date-fns-jalaali/esm/fp'
  export default roundToNearestMinutes
}

declare module 'date-fns-jalaali/esm/fp/roundToNearestMinutesWithOptions/index.js' {
  import { roundToNearestMinutesWithOptions } from 'date-fns-jalaali/esm/fp'
  export default roundToNearestMinutesWithOptions
}

declare module 'date-fns-jalaali/esm/fp/set/index.js' {
  import { set } from 'date-fns-jalaali/esm/fp'
  export default set
}

declare module 'date-fns-jalaali/esm/fp/setDate/index.js' {
  import { setDate } from 'date-fns-jalaali/esm/fp'
  export default setDate
}

declare module 'date-fns-jalaali/esm/fp/setDay/index.js' {
  import { setDay } from 'date-fns-jalaali/esm/fp'
  export default setDay
}

declare module 'date-fns-jalaali/esm/fp/setDayOfYear/index.js' {
  import { setDayOfYear } from 'date-fns-jalaali/esm/fp'
  export default setDayOfYear
}

declare module 'date-fns-jalaali/esm/fp/setDayWithOptions/index.js' {
  import { setDayWithOptions } from 'date-fns-jalaali/esm/fp'
  export default setDayWithOptions
}

declare module 'date-fns-jalaali/esm/fp/setHours/index.js' {
  import { setHours } from 'date-fns-jalaali/esm/fp'
  export default setHours
}

declare module 'date-fns-jalaali/esm/fp/setISODay/index.js' {
  import { setISODay } from 'date-fns-jalaali/esm/fp'
  export default setISODay
}

declare module 'date-fns-jalaali/esm/fp/setISOWeek/index.js' {
  import { setISOWeek } from 'date-fns-jalaali/esm/fp'
  export default setISOWeek
}

declare module 'date-fns-jalaali/esm/fp/setISOWeekYear/index.js' {
  import { setISOWeekYear } from 'date-fns-jalaali/esm/fp'
  export default setISOWeekYear
}

declare module 'date-fns-jalaali/esm/fp/setMilliseconds/index.js' {
  import { setMilliseconds } from 'date-fns-jalaali/esm/fp'
  export default setMilliseconds
}

declare module 'date-fns-jalaali/esm/fp/setMinutes/index.js' {
  import { setMinutes } from 'date-fns-jalaali/esm/fp'
  export default setMinutes
}

declare module 'date-fns-jalaali/esm/fp/setMonth/index.js' {
  import { setMonth } from 'date-fns-jalaali/esm/fp'
  export default setMonth
}

declare module 'date-fns-jalaali/esm/fp/setQuarter/index.js' {
  import { setQuarter } from 'date-fns-jalaali/esm/fp'
  export default setQuarter
}

declare module 'date-fns-jalaali/esm/fp/setSeconds/index.js' {
  import { setSeconds } from 'date-fns-jalaali/esm/fp'
  export default setSeconds
}

declare module 'date-fns-jalaali/esm/fp/setWeek/index.js' {
  import { setWeek } from 'date-fns-jalaali/esm/fp'
  export default setWeek
}

declare module 'date-fns-jalaali/esm/fp/setWeekWithOptions/index.js' {
  import { setWeekWithOptions } from 'date-fns-jalaali/esm/fp'
  export default setWeekWithOptions
}

declare module 'date-fns-jalaali/esm/fp/setWeekYear/index.js' {
  import { setWeekYear } from 'date-fns-jalaali/esm/fp'
  export default setWeekYear
}

declare module 'date-fns-jalaali/esm/fp/setWeekYearWithOptions/index.js' {
  import { setWeekYearWithOptions } from 'date-fns-jalaali/esm/fp'
  export default setWeekYearWithOptions
}

declare module 'date-fns-jalaali/esm/fp/setYear/index.js' {
  import { setYear } from 'date-fns-jalaali/esm/fp'
  export default setYear
}

declare module 'date-fns-jalaali/esm/fp/startOfDay/index.js' {
  import { startOfDay } from 'date-fns-jalaali/esm/fp'
  export default startOfDay
}

declare module 'date-fns-jalaali/esm/fp/startOfDecade/index.js' {
  import { startOfDecade } from 'date-fns-jalaali/esm/fp'
  export default startOfDecade
}

declare module 'date-fns-jalaali/esm/fp/startOfHour/index.js' {
  import { startOfHour } from 'date-fns-jalaali/esm/fp'
  export default startOfHour
}

declare module 'date-fns-jalaali/esm/fp/startOfISOWeek/index.js' {
  import { startOfISOWeek } from 'date-fns-jalaali/esm/fp'
  export default startOfISOWeek
}

declare module 'date-fns-jalaali/esm/fp/startOfISOWeekYear/index.js' {
  import { startOfISOWeekYear } from 'date-fns-jalaali/esm/fp'
  export default startOfISOWeekYear
}

declare module 'date-fns-jalaali/esm/fp/startOfMinute/index.js' {
  import { startOfMinute } from 'date-fns-jalaali/esm/fp'
  export default startOfMinute
}

declare module 'date-fns-jalaali/esm/fp/startOfMonth/index.js' {
  import { startOfMonth } from 'date-fns-jalaali/esm/fp'
  export default startOfMonth
}

declare module 'date-fns-jalaali/esm/fp/startOfQuarter/index.js' {
  import { startOfQuarter } from 'date-fns-jalaali/esm/fp'
  export default startOfQuarter
}

declare module 'date-fns-jalaali/esm/fp/startOfSecond/index.js' {
  import { startOfSecond } from 'date-fns-jalaali/esm/fp'
  export default startOfSecond
}

declare module 'date-fns-jalaali/esm/fp/startOfWeek/index.js' {
  import { startOfWeek } from 'date-fns-jalaali/esm/fp'
  export default startOfWeek
}

declare module 'date-fns-jalaali/esm/fp/startOfWeekWithOptions/index.js' {
  import { startOfWeekWithOptions } from 'date-fns-jalaali/esm/fp'
  export default startOfWeekWithOptions
}

declare module 'date-fns-jalaali/esm/fp/startOfWeekYear/index.js' {
  import { startOfWeekYear } from 'date-fns-jalaali/esm/fp'
  export default startOfWeekYear
}

declare module 'date-fns-jalaali/esm/fp/startOfWeekYearWithOptions/index.js' {
  import { startOfWeekYearWithOptions } from 'date-fns-jalaali/esm/fp'
  export default startOfWeekYearWithOptions
}

declare module 'date-fns-jalaali/esm/fp/startOfYear/index.js' {
  import { startOfYear } from 'date-fns-jalaali/esm/fp'
  export default startOfYear
}

declare module 'date-fns-jalaali/esm/fp/sub/index.js' {
  import { sub } from 'date-fns-jalaali/esm/fp'
  export default sub
}

declare module 'date-fns-jalaali/esm/fp/subBusinessDays/index.js' {
  import { subBusinessDays } from 'date-fns-jalaali/esm/fp'
  export default subBusinessDays
}

declare module 'date-fns-jalaali/esm/fp/subDays/index.js' {
  import { subDays } from 'date-fns-jalaali/esm/fp'
  export default subDays
}

declare module 'date-fns-jalaali/esm/fp/subHours/index.js' {
  import { subHours } from 'date-fns-jalaali/esm/fp'
  export default subHours
}

declare module 'date-fns-jalaali/esm/fp/subISOWeekYears/index.js' {
  import { subISOWeekYears } from 'date-fns-jalaali/esm/fp'
  export default subISOWeekYears
}

declare module 'date-fns-jalaali/esm/fp/subMilliseconds/index.js' {
  import { subMilliseconds } from 'date-fns-jalaali/esm/fp'
  export default subMilliseconds
}

declare module 'date-fns-jalaali/esm/fp/subMinutes/index.js' {
  import { subMinutes } from 'date-fns-jalaali/esm/fp'
  export default subMinutes
}

declare module 'date-fns-jalaali/esm/fp/subMonths/index.js' {
  import { subMonths } from 'date-fns-jalaali/esm/fp'
  export default subMonths
}

declare module 'date-fns-jalaali/esm/fp/subQuarters/index.js' {
  import { subQuarters } from 'date-fns-jalaali/esm/fp'
  export default subQuarters
}

declare module 'date-fns-jalaali/esm/fp/subSeconds/index.js' {
  import { subSeconds } from 'date-fns-jalaali/esm/fp'
  export default subSeconds
}

declare module 'date-fns-jalaali/esm/fp/subWeeks/index.js' {
  import { subWeeks } from 'date-fns-jalaali/esm/fp'
  export default subWeeks
}

declare module 'date-fns-jalaali/esm/fp/subYears/index.js' {
  import { subYears } from 'date-fns-jalaali/esm/fp'
  export default subYears
}

declare module 'date-fns-jalaali/esm/fp/toDate/index.js' {
  import { toDate } from 'date-fns-jalaali/esm/fp'
  export default toDate
}

// Regular Locales

declare module 'date-fns-jalaali/locale' {
  const af: Locale
  namespace af {}

  const ar: Locale
  namespace ar {}

  const arDZ: Locale
  namespace arDZ {}

  const arMA: Locale
  namespace arMA {}

  const arSA: Locale
  namespace arSA {}

  const az: Locale
  namespace az {}

  const be: Locale
  namespace be {}

  const bg: Locale
  namespace bg {}

  const bn: Locale
  namespace bn {}

  const ca: Locale
  namespace ca {}

  const cs: Locale
  namespace cs {}

  const cy: Locale
  namespace cy {}

  const da: Locale
  namespace da {}

  const de: Locale
  namespace de {}

  const el: Locale
  namespace el {}

  const enAU: Locale
  namespace enAU {}

  const enCA: Locale
  namespace enCA {}

  const enGB: Locale
  namespace enGB {}

  const enUS: Locale
  namespace enUS {}

  const eo: Locale
  namespace eo {}

  const es: Locale
  namespace es {}

  const et: Locale
  namespace et {}

  const faIR: Locale
  namespace faIR {}

  const fajalaaliIR: Locale
  namespace fajalaaliIR {}

  const fi: Locale
  namespace fi {}

  const fil: Locale
  namespace fil {}

  const fr: Locale
  namespace fr {}

  const frCA: Locale
  namespace frCA {}

  const frCH: Locale
  namespace frCH {}

  const gl: Locale
  namespace gl {}

  const gu: Locale
  namespace gu {}

  const he: Locale
  namespace he {}

  const hi: Locale
  namespace hi {}

  const hr: Locale
  namespace hr {}

  const hu: Locale
  namespace hu {}

  const hy: Locale
  namespace hy {}

  const id: Locale
  namespace id {}

  const is: Locale
  namespace is {}

  const it: Locale
  namespace it {}

  const ja: Locale
  namespace ja {}

  const ka: Locale
  namespace ka {}

  const kk: Locale
  namespace kk {}

  const kn: Locale
  namespace kn {}

  const ko: Locale
  namespace ko {}

  const lt: Locale
  namespace lt {}

  const lv: Locale
  namespace lv {}

  const mk: Locale
  namespace mk {}

  const ms: Locale
  namespace ms {}

  const mt: Locale
  namespace mt {}

  const nb: Locale
  namespace nb {}

  const nl: Locale
  namespace nl {}

  const nlBE: Locale
  namespace nlBE {}

  const nn: Locale
  namespace nn {}

  const pl: Locale
  namespace pl {}

  const pt: Locale
  namespace pt {}

  const ptBR: Locale
  namespace ptBR {}

  const ro: Locale
  namespace ro {}

  const ru: Locale
  namespace ru {}

  const sk: Locale
  namespace sk {}

  const sl: Locale
  namespace sl {}

  const sr: Locale
  namespace sr {}

  const srLatn: Locale
  namespace srLatn {}

  const sv: Locale
  namespace sv {}

  const ta: Locale
  namespace ta {}

  const te: Locale
  namespace te {}

  const th: Locale
  namespace th {}

  const tr: Locale
  namespace tr {}

  const ug: Locale
  namespace ug {}

  const uk: Locale
  namespace uk {}

  const uz: Locale
  namespace uz {}

  const vi: Locale
  namespace vi {}

  const zhCN: Locale
  namespace zhCN {}

  const zhTW: Locale
  namespace zhTW {}
}

declare module 'date-fns-jalaali/locale/af' {
  import { af } from 'date-fns-jalaali/locale'
  export default af
}

declare module 'date-fns-jalaali/locale/ar' {
  import { ar } from 'date-fns-jalaali/locale'
  export default ar
}

declare module 'date-fns-jalaali/locale/ar-DZ' {
  import { arDZ } from 'date-fns-jalaali/locale'
  export default arDZ
}

declare module 'date-fns-jalaali/locale/ar-MA' {
  import { arMA } from 'date-fns-jalaali/locale'
  export default arMA
}

declare module 'date-fns-jalaali/locale/ar-SA' {
  import { arSA } from 'date-fns-jalaali/locale'
  export default arSA
}

declare module 'date-fns-jalaali/locale/az' {
  import { az } from 'date-fns-jalaali/locale'
  export default az
}

declare module 'date-fns-jalaali/locale/be' {
  import { be } from 'date-fns-jalaali/locale'
  export default be
}

declare module 'date-fns-jalaali/locale/bg' {
  import { bg } from 'date-fns-jalaali/locale'
  export default bg
}

declare module 'date-fns-jalaali/locale/bn' {
  import { bn } from 'date-fns-jalaali/locale'
  export default bn
}

declare module 'date-fns-jalaali/locale/ca' {
  import { ca } from 'date-fns-jalaali/locale'
  export default ca
}

declare module 'date-fns-jalaali/locale/cs' {
  import { cs } from 'date-fns-jalaali/locale'
  export default cs
}

declare module 'date-fns-jalaali/locale/cy' {
  import { cy } from 'date-fns-jalaali/locale'
  export default cy
}

declare module 'date-fns-jalaali/locale/da' {
  import { da } from 'date-fns-jalaali/locale'
  export default da
}

declare module 'date-fns-jalaali/locale/de' {
  import { de } from 'date-fns-jalaali/locale'
  export default de
}

declare module 'date-fns-jalaali/locale/el' {
  import { el } from 'date-fns-jalaali/locale'
  export default el
}

declare module 'date-fns-jalaali/locale/en-AU' {
  import { enAU } from 'date-fns-jalaali/locale'
  export default enAU
}

declare module 'date-fns-jalaali/locale/en-CA' {
  import { enCA } from 'date-fns-jalaali/locale'
  export default enCA
}

declare module 'date-fns-jalaali/locale/en-GB' {
  import { enGB } from 'date-fns-jalaali/locale'
  export default enGB
}

declare module 'date-fns-jalaali/locale/en-US' {
  import { enUS } from 'date-fns-jalaali/locale'
  export default enUS
}

declare module 'date-fns-jalaali/locale/eo' {
  import { eo } from 'date-fns-jalaali/locale'
  export default eo
}

declare module 'date-fns-jalaali/locale/es' {
  import { es } from 'date-fns-jalaali/locale'
  export default es
}

declare module 'date-fns-jalaali/locale/et' {
  import { et } from 'date-fns-jalaali/locale'
  export default et
}

declare module 'date-fns-jalaali/locale/fa-IR' {
  import { faIR } from 'date-fns-jalaali/locale'
  export default faIR
}

declare module 'date-fns-jalaali/locale/fa-jalaali-IR' {
  import { fajalaaliIR } from 'date-fns-jalaali/locale'
  export default fajalaaliIR
}

declare module 'date-fns-jalaali/locale/fi' {
  import { fi } from 'date-fns-jalaali/locale'
  export default fi
}

declare module 'date-fns-jalaali/locale/fil' {
  import { fil } from 'date-fns-jalaali/locale'
  export default fil
}

declare module 'date-fns-jalaali/locale/fr' {
  import { fr } from 'date-fns-jalaali/locale'
  export default fr
}

declare module 'date-fns-jalaali/locale/fr-CA' {
  import { frCA } from 'date-fns-jalaali/locale'
  export default frCA
}

declare module 'date-fns-jalaali/locale/fr-CH' {
  import { frCH } from 'date-fns-jalaali/locale'
  export default frCH
}

declare module 'date-fns-jalaali/locale/gl' {
  import { gl } from 'date-fns-jalaali/locale'
  export default gl
}

declare module 'date-fns-jalaali/locale/gu' {
  import { gu } from 'date-fns-jalaali/locale'
  export default gu
}

declare module 'date-fns-jalaali/locale/he' {
  import { he } from 'date-fns-jalaali/locale'
  export default he
}

declare module 'date-fns-jalaali/locale/hi' {
  import { hi } from 'date-fns-jalaali/locale'
  export default hi
}

declare module 'date-fns-jalaali/locale/hr' {
  import { hr } from 'date-fns-jalaali/locale'
  export default hr
}

declare module 'date-fns-jalaali/locale/hu' {
  import { hu } from 'date-fns-jalaali/locale'
  export default hu
}

declare module 'date-fns-jalaali/locale/hy' {
  import { hy } from 'date-fns-jalaali/locale'
  export default hy
}

declare module 'date-fns-jalaali/locale/id' {
  import { id } from 'date-fns-jalaali/locale'
  export default id
}

declare module 'date-fns-jalaali/locale/is' {
  import { is } from 'date-fns-jalaali/locale'
  export default is
}

declare module 'date-fns-jalaali/locale/it' {
  import { it } from 'date-fns-jalaali/locale'
  export default it
}

declare module 'date-fns-jalaali/locale/ja' {
  import { ja } from 'date-fns-jalaali/locale'
  export default ja
}

declare module 'date-fns-jalaali/locale/ka' {
  import { ka } from 'date-fns-jalaali/locale'
  export default ka
}

declare module 'date-fns-jalaali/locale/kk' {
  import { kk } from 'date-fns-jalaali/locale'
  export default kk
}

declare module 'date-fns-jalaali/locale/kn' {
  import { kn } from 'date-fns-jalaali/locale'
  export default kn
}

declare module 'date-fns-jalaali/locale/ko' {
  import { ko } from 'date-fns-jalaali/locale'
  export default ko
}

declare module 'date-fns-jalaali/locale/lt' {
  import { lt } from 'date-fns-jalaali/locale'
  export default lt
}

declare module 'date-fns-jalaali/locale/lv' {
  import { lv } from 'date-fns-jalaali/locale'
  export default lv
}

declare module 'date-fns-jalaali/locale/mk' {
  import { mk } from 'date-fns-jalaali/locale'
  export default mk
}

declare module 'date-fns-jalaali/locale/ms' {
  import { ms } from 'date-fns-jalaali/locale'
  export default ms
}

declare module 'date-fns-jalaali/locale/mt' {
  import { mt } from 'date-fns-jalaali/locale'
  export default mt
}

declare module 'date-fns-jalaali/locale/nb' {
  import { nb } from 'date-fns-jalaali/locale'
  export default nb
}

declare module 'date-fns-jalaali/locale/nl' {
  import { nl } from 'date-fns-jalaali/locale'
  export default nl
}

declare module 'date-fns-jalaali/locale/nl-BE' {
  import { nlBE } from 'date-fns-jalaali/locale'
  export default nlBE
}

declare module 'date-fns-jalaali/locale/nn' {
  import { nn } from 'date-fns-jalaali/locale'
  export default nn
}

declare module 'date-fns-jalaali/locale/pl' {
  import { pl } from 'date-fns-jalaali/locale'
  export default pl
}

declare module 'date-fns-jalaali/locale/pt' {
  import { pt } from 'date-fns-jalaali/locale'
  export default pt
}

declare module 'date-fns-jalaali/locale/pt-BR' {
  import { ptBR } from 'date-fns-jalaali/locale'
  export default ptBR
}

declare module 'date-fns-jalaali/locale/ro' {
  import { ro } from 'date-fns-jalaali/locale'
  export default ro
}

declare module 'date-fns-jalaali/locale/ru' {
  import { ru } from 'date-fns-jalaali/locale'
  export default ru
}

declare module 'date-fns-jalaali/locale/sk' {
  import { sk } from 'date-fns-jalaali/locale'
  export default sk
}

declare module 'date-fns-jalaali/locale/sl' {
  import { sl } from 'date-fns-jalaali/locale'
  export default sl
}

declare module 'date-fns-jalaali/locale/sr' {
  import { sr } from 'date-fns-jalaali/locale'
  export default sr
}

declare module 'date-fns-jalaali/locale/sr-Latn' {
  import { srLatn } from 'date-fns-jalaali/locale'
  export default srLatn
}

declare module 'date-fns-jalaali/locale/sv' {
  import { sv } from 'date-fns-jalaali/locale'
  export default sv
}

declare module 'date-fns-jalaali/locale/ta' {
  import { ta } from 'date-fns-jalaali/locale'
  export default ta
}

declare module 'date-fns-jalaali/locale/te' {
  import { te } from 'date-fns-jalaali/locale'
  export default te
}

declare module 'date-fns-jalaali/locale/th' {
  import { th } from 'date-fns-jalaali/locale'
  export default th
}

declare module 'date-fns-jalaali/locale/tr' {
  import { tr } from 'date-fns-jalaali/locale'
  export default tr
}

declare module 'date-fns-jalaali/locale/ug' {
  import { ug } from 'date-fns-jalaali/locale'
  export default ug
}

declare module 'date-fns-jalaali/locale/uk' {
  import { uk } from 'date-fns-jalaali/locale'
  export default uk
}

declare module 'date-fns-jalaali/locale/uz' {
  import { uz } from 'date-fns-jalaali/locale'
  export default uz
}

declare module 'date-fns-jalaali/locale/vi' {
  import { vi } from 'date-fns-jalaali/locale'
  export default vi
}

declare module 'date-fns-jalaali/locale/zh-CN' {
  import { zhCN } from 'date-fns-jalaali/locale'
  export default zhCN
}

declare module 'date-fns-jalaali/locale/zh-TW' {
  import { zhTW } from 'date-fns-jalaali/locale'
  export default zhTW
}

declare module 'date-fns-jalaali/locale/af/index' {
  import { af } from 'date-fns-jalaali/locale'
  export default af
}

declare module 'date-fns-jalaali/locale/ar/index' {
  import { ar } from 'date-fns-jalaali/locale'
  export default ar
}

declare module 'date-fns-jalaali/locale/ar-DZ/index' {
  import { arDZ } from 'date-fns-jalaali/locale'
  export default arDZ
}

declare module 'date-fns-jalaali/locale/ar-MA/index' {
  import { arMA } from 'date-fns-jalaali/locale'
  export default arMA
}

declare module 'date-fns-jalaali/locale/ar-SA/index' {
  import { arSA } from 'date-fns-jalaali/locale'
  export default arSA
}

declare module 'date-fns-jalaali/locale/az/index' {
  import { az } from 'date-fns-jalaali/locale'
  export default az
}

declare module 'date-fns-jalaali/locale/be/index' {
  import { be } from 'date-fns-jalaali/locale'
  export default be
}

declare module 'date-fns-jalaali/locale/bg/index' {
  import { bg } from 'date-fns-jalaali/locale'
  export default bg
}

declare module 'date-fns-jalaali/locale/bn/index' {
  import { bn } from 'date-fns-jalaali/locale'
  export default bn
}

declare module 'date-fns-jalaali/locale/ca/index' {
  import { ca } from 'date-fns-jalaali/locale'
  export default ca
}

declare module 'date-fns-jalaali/locale/cs/index' {
  import { cs } from 'date-fns-jalaali/locale'
  export default cs
}

declare module 'date-fns-jalaali/locale/cy/index' {
  import { cy } from 'date-fns-jalaali/locale'
  export default cy
}

declare module 'date-fns-jalaali/locale/da/index' {
  import { da } from 'date-fns-jalaali/locale'
  export default da
}

declare module 'date-fns-jalaali/locale/de/index' {
  import { de } from 'date-fns-jalaali/locale'
  export default de
}

declare module 'date-fns-jalaali/locale/el/index' {
  import { el } from 'date-fns-jalaali/locale'
  export default el
}

declare module 'date-fns-jalaali/locale/en-AU/index' {
  import { enAU } from 'date-fns-jalaali/locale'
  export default enAU
}

declare module 'date-fns-jalaali/locale/en-CA/index' {
  import { enCA } from 'date-fns-jalaali/locale'
  export default enCA
}

declare module 'date-fns-jalaali/locale/en-GB/index' {
  import { enGB } from 'date-fns-jalaali/locale'
  export default enGB
}

declare module 'date-fns-jalaali/locale/en-US/index' {
  import { enUS } from 'date-fns-jalaali/locale'
  export default enUS
}

declare module 'date-fns-jalaali/locale/eo/index' {
  import { eo } from 'date-fns-jalaali/locale'
  export default eo
}

declare module 'date-fns-jalaali/locale/es/index' {
  import { es } from 'date-fns-jalaali/locale'
  export default es
}

declare module 'date-fns-jalaali/locale/et/index' {
  import { et } from 'date-fns-jalaali/locale'
  export default et
}

declare module 'date-fns-jalaali/locale/fa-IR/index' {
  import { faIR } from 'date-fns-jalaali/locale'
  export default faIR
}

declare module 'date-fns-jalaali/locale/fa-jalaali-IR/index' {
  import { fajalaaliIR } from 'date-fns-jalaali/locale'
  export default fajalaaliIR
}

declare module 'date-fns-jalaali/locale/fi/index' {
  import { fi } from 'date-fns-jalaali/locale'
  export default fi
}

declare module 'date-fns-jalaali/locale/fil/index' {
  import { fil } from 'date-fns-jalaali/locale'
  export default fil
}

declare module 'date-fns-jalaali/locale/fr/index' {
  import { fr } from 'date-fns-jalaali/locale'
  export default fr
}

declare module 'date-fns-jalaali/locale/fr-CA/index' {
  import { frCA } from 'date-fns-jalaali/locale'
  export default frCA
}

declare module 'date-fns-jalaali/locale/fr-CH/index' {
  import { frCH } from 'date-fns-jalaali/locale'
  export default frCH
}

declare module 'date-fns-jalaali/locale/gl/index' {
  import { gl } from 'date-fns-jalaali/locale'
  export default gl
}

declare module 'date-fns-jalaali/locale/gu/index' {
  import { gu } from 'date-fns-jalaali/locale'
  export default gu
}

declare module 'date-fns-jalaali/locale/he/index' {
  import { he } from 'date-fns-jalaali/locale'
  export default he
}

declare module 'date-fns-jalaali/locale/hi/index' {
  import { hi } from 'date-fns-jalaali/locale'
  export default hi
}

declare module 'date-fns-jalaali/locale/hr/index' {
  import { hr } from 'date-fns-jalaali/locale'
  export default hr
}

declare module 'date-fns-jalaali/locale/hu/index' {
  import { hu } from 'date-fns-jalaali/locale'
  export default hu
}

declare module 'date-fns-jalaali/locale/hy/index' {
  import { hy } from 'date-fns-jalaali/locale'
  export default hy
}

declare module 'date-fns-jalaali/locale/id/index' {
  import { id } from 'date-fns-jalaali/locale'
  export default id
}

declare module 'date-fns-jalaali/locale/is/index' {
  import { is } from 'date-fns-jalaali/locale'
  export default is
}

declare module 'date-fns-jalaali/locale/it/index' {
  import { it } from 'date-fns-jalaali/locale'
  export default it
}

declare module 'date-fns-jalaali/locale/ja/index' {
  import { ja } from 'date-fns-jalaali/locale'
  export default ja
}

declare module 'date-fns-jalaali/locale/ka/index' {
  import { ka } from 'date-fns-jalaali/locale'
  export default ka
}

declare module 'date-fns-jalaali/locale/kk/index' {
  import { kk } from 'date-fns-jalaali/locale'
  export default kk
}

declare module 'date-fns-jalaali/locale/kn/index' {
  import { kn } from 'date-fns-jalaali/locale'
  export default kn
}

declare module 'date-fns-jalaali/locale/ko/index' {
  import { ko } from 'date-fns-jalaali/locale'
  export default ko
}

declare module 'date-fns-jalaali/locale/lt/index' {
  import { lt } from 'date-fns-jalaali/locale'
  export default lt
}

declare module 'date-fns-jalaali/locale/lv/index' {
  import { lv } from 'date-fns-jalaali/locale'
  export default lv
}

declare module 'date-fns-jalaali/locale/mk/index' {
  import { mk } from 'date-fns-jalaali/locale'
  export default mk
}

declare module 'date-fns-jalaali/locale/ms/index' {
  import { ms } from 'date-fns-jalaali/locale'
  export default ms
}

declare module 'date-fns-jalaali/locale/mt/index' {
  import { mt } from 'date-fns-jalaali/locale'
  export default mt
}

declare module 'date-fns-jalaali/locale/nb/index' {
  import { nb } from 'date-fns-jalaali/locale'
  export default nb
}

declare module 'date-fns-jalaali/locale/nl/index' {
  import { nl } from 'date-fns-jalaali/locale'
  export default nl
}

declare module 'date-fns-jalaali/locale/nl-BE/index' {
  import { nlBE } from 'date-fns-jalaali/locale'
  export default nlBE
}

declare module 'date-fns-jalaali/locale/nn/index' {
  import { nn } from 'date-fns-jalaali/locale'
  export default nn
}

declare module 'date-fns-jalaali/locale/pl/index' {
  import { pl } from 'date-fns-jalaali/locale'
  export default pl
}

declare module 'date-fns-jalaali/locale/pt/index' {
  import { pt } from 'date-fns-jalaali/locale'
  export default pt
}

declare module 'date-fns-jalaali/locale/pt-BR/index' {
  import { ptBR } from 'date-fns-jalaali/locale'
  export default ptBR
}

declare module 'date-fns-jalaali/locale/ro/index' {
  import { ro } from 'date-fns-jalaali/locale'
  export default ro
}

declare module 'date-fns-jalaali/locale/ru/index' {
  import { ru } from 'date-fns-jalaali/locale'
  export default ru
}

declare module 'date-fns-jalaali/locale/sk/index' {
  import { sk } from 'date-fns-jalaali/locale'
  export default sk
}

declare module 'date-fns-jalaali/locale/sl/index' {
  import { sl } from 'date-fns-jalaali/locale'
  export default sl
}

declare module 'date-fns-jalaali/locale/sr/index' {
  import { sr } from 'date-fns-jalaali/locale'
  export default sr
}

declare module 'date-fns-jalaali/locale/sr-Latn/index' {
  import { srLatn } from 'date-fns-jalaali/locale'
  export default srLatn
}

declare module 'date-fns-jalaali/locale/sv/index' {
  import { sv } from 'date-fns-jalaali/locale'
  export default sv
}

declare module 'date-fns-jalaali/locale/ta/index' {
  import { ta } from 'date-fns-jalaali/locale'
  export default ta
}

declare module 'date-fns-jalaali/locale/te/index' {
  import { te } from 'date-fns-jalaali/locale'
  export default te
}

declare module 'date-fns-jalaali/locale/th/index' {
  import { th } from 'date-fns-jalaali/locale'
  export default th
}

declare module 'date-fns-jalaali/locale/tr/index' {
  import { tr } from 'date-fns-jalaali/locale'
  export default tr
}

declare module 'date-fns-jalaali/locale/ug/index' {
  import { ug } from 'date-fns-jalaali/locale'
  export default ug
}

declare module 'date-fns-jalaali/locale/uk/index' {
  import { uk } from 'date-fns-jalaali/locale'
  export default uk
}

declare module 'date-fns-jalaali/locale/uz/index' {
  import { uz } from 'date-fns-jalaali/locale'
  export default uz
}

declare module 'date-fns-jalaali/locale/vi/index' {
  import { vi } from 'date-fns-jalaali/locale'
  export default vi
}

declare module 'date-fns-jalaali/locale/zh-CN/index' {
  import { zhCN } from 'date-fns-jalaali/locale'
  export default zhCN
}

declare module 'date-fns-jalaali/locale/zh-TW/index' {
  import { zhTW } from 'date-fns-jalaali/locale'
  export default zhTW
}

declare module 'date-fns-jalaali/locale/af/index.js' {
  import { af } from 'date-fns-jalaali/locale'
  export default af
}

declare module 'date-fns-jalaali/locale/ar/index.js' {
  import { ar } from 'date-fns-jalaali/locale'
  export default ar
}

declare module 'date-fns-jalaali/locale/ar-DZ/index.js' {
  import { arDZ } from 'date-fns-jalaali/locale'
  export default arDZ
}

declare module 'date-fns-jalaali/locale/ar-MA/index.js' {
  import { arMA } from 'date-fns-jalaali/locale'
  export default arMA
}

declare module 'date-fns-jalaali/locale/ar-SA/index.js' {
  import { arSA } from 'date-fns-jalaali/locale'
  export default arSA
}

declare module 'date-fns-jalaali/locale/az/index.js' {
  import { az } from 'date-fns-jalaali/locale'
  export default az
}

declare module 'date-fns-jalaali/locale/be/index.js' {
  import { be } from 'date-fns-jalaali/locale'
  export default be
}

declare module 'date-fns-jalaali/locale/bg/index.js' {
  import { bg } from 'date-fns-jalaali/locale'
  export default bg
}

declare module 'date-fns-jalaali/locale/bn/index.js' {
  import { bn } from 'date-fns-jalaali/locale'
  export default bn
}

declare module 'date-fns-jalaali/locale/ca/index.js' {
  import { ca } from 'date-fns-jalaali/locale'
  export default ca
}

declare module 'date-fns-jalaali/locale/cs/index.js' {
  import { cs } from 'date-fns-jalaali/locale'
  export default cs
}

declare module 'date-fns-jalaali/locale/cy/index.js' {
  import { cy } from 'date-fns-jalaali/locale'
  export default cy
}

declare module 'date-fns-jalaali/locale/da/index.js' {
  import { da } from 'date-fns-jalaali/locale'
  export default da
}

declare module 'date-fns-jalaali/locale/de/index.js' {
  import { de } from 'date-fns-jalaali/locale'
  export default de
}

declare module 'date-fns-jalaali/locale/el/index.js' {
  import { el } from 'date-fns-jalaali/locale'
  export default el
}

declare module 'date-fns-jalaali/locale/en-AU/index.js' {
  import { enAU } from 'date-fns-jalaali/locale'
  export default enAU
}

declare module 'date-fns-jalaali/locale/en-CA/index.js' {
  import { enCA } from 'date-fns-jalaali/locale'
  export default enCA
}

declare module 'date-fns-jalaali/locale/en-GB/index.js' {
  import { enGB } from 'date-fns-jalaali/locale'
  export default enGB
}

declare module 'date-fns-jalaali/locale/en-US/index.js' {
  import { enUS } from 'date-fns-jalaali/locale'
  export default enUS
}

declare module 'date-fns-jalaali/locale/eo/index.js' {
  import { eo } from 'date-fns-jalaali/locale'
  export default eo
}

declare module 'date-fns-jalaali/locale/es/index.js' {
  import { es } from 'date-fns-jalaali/locale'
  export default es
}

declare module 'date-fns-jalaali/locale/et/index.js' {
  import { et } from 'date-fns-jalaali/locale'
  export default et
}

declare module 'date-fns-jalaali/locale/fa-IR/index.js' {
  import { faIR } from 'date-fns-jalaali/locale'
  export default faIR
}

declare module 'date-fns-jalaali/locale/fa-jalaali-IR/index.js' {
  import { fajalaaliIR } from 'date-fns-jalaali/locale'
  export default fajalaaliIR
}

declare module 'date-fns-jalaali/locale/fi/index.js' {
  import { fi } from 'date-fns-jalaali/locale'
  export default fi
}

declare module 'date-fns-jalaali/locale/fil/index.js' {
  import { fil } from 'date-fns-jalaali/locale'
  export default fil
}

declare module 'date-fns-jalaali/locale/fr/index.js' {
  import { fr } from 'date-fns-jalaali/locale'
  export default fr
}

declare module 'date-fns-jalaali/locale/fr-CA/index.js' {
  import { frCA } from 'date-fns-jalaali/locale'
  export default frCA
}

declare module 'date-fns-jalaali/locale/fr-CH/index.js' {
  import { frCH } from 'date-fns-jalaali/locale'
  export default frCH
}

declare module 'date-fns-jalaali/locale/gl/index.js' {
  import { gl } from 'date-fns-jalaali/locale'
  export default gl
}

declare module 'date-fns-jalaali/locale/gu/index.js' {
  import { gu } from 'date-fns-jalaali/locale'
  export default gu
}

declare module 'date-fns-jalaali/locale/he/index.js' {
  import { he } from 'date-fns-jalaali/locale'
  export default he
}

declare module 'date-fns-jalaali/locale/hi/index.js' {
  import { hi } from 'date-fns-jalaali/locale'
  export default hi
}

declare module 'date-fns-jalaali/locale/hr/index.js' {
  import { hr } from 'date-fns-jalaali/locale'
  export default hr
}

declare module 'date-fns-jalaali/locale/hu/index.js' {
  import { hu } from 'date-fns-jalaali/locale'
  export default hu
}

declare module 'date-fns-jalaali/locale/hy/index.js' {
  import { hy } from 'date-fns-jalaali/locale'
  export default hy
}

declare module 'date-fns-jalaali/locale/id/index.js' {
  import { id } from 'date-fns-jalaali/locale'
  export default id
}

declare module 'date-fns-jalaali/locale/is/index.js' {
  import { is } from 'date-fns-jalaali/locale'
  export default is
}

declare module 'date-fns-jalaali/locale/it/index.js' {
  import { it } from 'date-fns-jalaali/locale'
  export default it
}

declare module 'date-fns-jalaali/locale/ja/index.js' {
  import { ja } from 'date-fns-jalaali/locale'
  export default ja
}

declare module 'date-fns-jalaali/locale/ka/index.js' {
  import { ka } from 'date-fns-jalaali/locale'
  export default ka
}

declare module 'date-fns-jalaali/locale/kk/index.js' {
  import { kk } from 'date-fns-jalaali/locale'
  export default kk
}

declare module 'date-fns-jalaali/locale/kn/index.js' {
  import { kn } from 'date-fns-jalaali/locale'
  export default kn
}

declare module 'date-fns-jalaali/locale/ko/index.js' {
  import { ko } from 'date-fns-jalaali/locale'
  export default ko
}

declare module 'date-fns-jalaali/locale/lt/index.js' {
  import { lt } from 'date-fns-jalaali/locale'
  export default lt
}

declare module 'date-fns-jalaali/locale/lv/index.js' {
  import { lv } from 'date-fns-jalaali/locale'
  export default lv
}

declare module 'date-fns-jalaali/locale/mk/index.js' {
  import { mk } from 'date-fns-jalaali/locale'
  export default mk
}

declare module 'date-fns-jalaali/locale/ms/index.js' {
  import { ms } from 'date-fns-jalaali/locale'
  export default ms
}

declare module 'date-fns-jalaali/locale/mt/index.js' {
  import { mt } from 'date-fns-jalaali/locale'
  export default mt
}

declare module 'date-fns-jalaali/locale/nb/index.js' {
  import { nb } from 'date-fns-jalaali/locale'
  export default nb
}

declare module 'date-fns-jalaali/locale/nl/index.js' {
  import { nl } from 'date-fns-jalaali/locale'
  export default nl
}

declare module 'date-fns-jalaali/locale/nl-BE/index.js' {
  import { nlBE } from 'date-fns-jalaali/locale'
  export default nlBE
}

declare module 'date-fns-jalaali/locale/nn/index.js' {
  import { nn } from 'date-fns-jalaali/locale'
  export default nn
}

declare module 'date-fns-jalaali/locale/pl/index.js' {
  import { pl } from 'date-fns-jalaali/locale'
  export default pl
}

declare module 'date-fns-jalaali/locale/pt/index.js' {
  import { pt } from 'date-fns-jalaali/locale'
  export default pt
}

declare module 'date-fns-jalaali/locale/pt-BR/index.js' {
  import { ptBR } from 'date-fns-jalaali/locale'
  export default ptBR
}

declare module 'date-fns-jalaali/locale/ro/index.js' {
  import { ro } from 'date-fns-jalaali/locale'
  export default ro
}

declare module 'date-fns-jalaali/locale/ru/index.js' {
  import { ru } from 'date-fns-jalaali/locale'
  export default ru
}

declare module 'date-fns-jalaali/locale/sk/index.js' {
  import { sk } from 'date-fns-jalaali/locale'
  export default sk
}

declare module 'date-fns-jalaali/locale/sl/index.js' {
  import { sl } from 'date-fns-jalaali/locale'
  export default sl
}

declare module 'date-fns-jalaali/locale/sr/index.js' {
  import { sr } from 'date-fns-jalaali/locale'
  export default sr
}

declare module 'date-fns-jalaali/locale/sr-Latn/index.js' {
  import { srLatn } from 'date-fns-jalaali/locale'
  export default srLatn
}

declare module 'date-fns-jalaali/locale/sv/index.js' {
  import { sv } from 'date-fns-jalaali/locale'
  export default sv
}

declare module 'date-fns-jalaali/locale/ta/index.js' {
  import { ta } from 'date-fns-jalaali/locale'
  export default ta
}

declare module 'date-fns-jalaali/locale/te/index.js' {
  import { te } from 'date-fns-jalaali/locale'
  export default te
}

declare module 'date-fns-jalaali/locale/th/index.js' {
  import { th } from 'date-fns-jalaali/locale'
  export default th
}

declare module 'date-fns-jalaali/locale/tr/index.js' {
  import { tr } from 'date-fns-jalaali/locale'
  export default tr
}

declare module 'date-fns-jalaali/locale/ug/index.js' {
  import { ug } from 'date-fns-jalaali/locale'
  export default ug
}

declare module 'date-fns-jalaali/locale/uk/index.js' {
  import { uk } from 'date-fns-jalaali/locale'
  export default uk
}

declare module 'date-fns-jalaali/locale/uz/index.js' {
  import { uz } from 'date-fns-jalaali/locale'
  export default uz
}

declare module 'date-fns-jalaali/locale/vi/index.js' {
  import { vi } from 'date-fns-jalaali/locale'
  export default vi
}

declare module 'date-fns-jalaali/locale/zh-CN/index.js' {
  import { zhCN } from 'date-fns-jalaali/locale'
  export default zhCN
}

declare module 'date-fns-jalaali/locale/zh-TW/index.js' {
  import { zhTW } from 'date-fns-jalaali/locale'
  export default zhTW
}

// ECMAScript Module Locales

declare module 'date-fns-jalaali/esm/locale' {
  const af: Locale
  namespace af {}

  const ar: Locale
  namespace ar {}

  const arDZ: Locale
  namespace arDZ {}

  const arMA: Locale
  namespace arMA {}

  const arSA: Locale
  namespace arSA {}

  const az: Locale
  namespace az {}

  const be: Locale
  namespace be {}

  const bg: Locale
  namespace bg {}

  const bn: Locale
  namespace bn {}

  const ca: Locale
  namespace ca {}

  const cs: Locale
  namespace cs {}

  const cy: Locale
  namespace cy {}

  const da: Locale
  namespace da {}

  const de: Locale
  namespace de {}

  const el: Locale
  namespace el {}

  const enAU: Locale
  namespace enAU {}

  const enCA: Locale
  namespace enCA {}

  const enGB: Locale
  namespace enGB {}

  const enUS: Locale
  namespace enUS {}

  const eo: Locale
  namespace eo {}

  const es: Locale
  namespace es {}

  const et: Locale
  namespace et {}

  const faIR: Locale
  namespace faIR {}

  const fajalaaliIR: Locale
  namespace fajalaaliIR {}

  const fi: Locale
  namespace fi {}

  const fil: Locale
  namespace fil {}

  const fr: Locale
  namespace fr {}

  const frCA: Locale
  namespace frCA {}

  const frCH: Locale
  namespace frCH {}

  const gl: Locale
  namespace gl {}

  const gu: Locale
  namespace gu {}

  const he: Locale
  namespace he {}

  const hi: Locale
  namespace hi {}

  const hr: Locale
  namespace hr {}

  const hu: Locale
  namespace hu {}

  const hy: Locale
  namespace hy {}

  const id: Locale
  namespace id {}

  const is: Locale
  namespace is {}

  const it: Locale
  namespace it {}

  const ja: Locale
  namespace ja {}

  const ka: Locale
  namespace ka {}

  const kk: Locale
  namespace kk {}

  const kn: Locale
  namespace kn {}

  const ko: Locale
  namespace ko {}

  const lt: Locale
  namespace lt {}

  const lv: Locale
  namespace lv {}

  const mk: Locale
  namespace mk {}

  const ms: Locale
  namespace ms {}

  const mt: Locale
  namespace mt {}

  const nb: Locale
  namespace nb {}

  const nl: Locale
  namespace nl {}

  const nlBE: Locale
  namespace nlBE {}

  const nn: Locale
  namespace nn {}

  const pl: Locale
  namespace pl {}

  const pt: Locale
  namespace pt {}

  const ptBR: Locale
  namespace ptBR {}

  const ro: Locale
  namespace ro {}

  const ru: Locale
  namespace ru {}

  const sk: Locale
  namespace sk {}

  const sl: Locale
  namespace sl {}

  const sr: Locale
  namespace sr {}

  const srLatn: Locale
  namespace srLatn {}

  const sv: Locale
  namespace sv {}

  const ta: Locale
  namespace ta {}

  const te: Locale
  namespace te {}

  const th: Locale
  namespace th {}

  const tr: Locale
  namespace tr {}

  const ug: Locale
  namespace ug {}

  const uk: Locale
  namespace uk {}

  const uz: Locale
  namespace uz {}

  const vi: Locale
  namespace vi {}

  const zhCN: Locale
  namespace zhCN {}

  const zhTW: Locale
  namespace zhTW {}
}

declare module 'date-fns-jalaali/esm/locale/af' {
  import { af } from 'date-fns-jalaali/esm/locale'
  export default af
}

declare module 'date-fns-jalaali/esm/locale/ar' {
  import { ar } from 'date-fns-jalaali/esm/locale'
  export default ar
}

declare module 'date-fns-jalaali/esm/locale/ar-DZ' {
  import { arDZ } from 'date-fns-jalaali/esm/locale'
  export default arDZ
}

declare module 'date-fns-jalaali/esm/locale/ar-MA' {
  import { arMA } from 'date-fns-jalaali/esm/locale'
  export default arMA
}

declare module 'date-fns-jalaali/esm/locale/ar-SA' {
  import { arSA } from 'date-fns-jalaali/esm/locale'
  export default arSA
}

declare module 'date-fns-jalaali/esm/locale/az' {
  import { az } from 'date-fns-jalaali/esm/locale'
  export default az
}

declare module 'date-fns-jalaali/esm/locale/be' {
  import { be } from 'date-fns-jalaali/esm/locale'
  export default be
}

declare module 'date-fns-jalaali/esm/locale/bg' {
  import { bg } from 'date-fns-jalaali/esm/locale'
  export default bg
}

declare module 'date-fns-jalaali/esm/locale/bn' {
  import { bn } from 'date-fns-jalaali/esm/locale'
  export default bn
}

declare module 'date-fns-jalaali/esm/locale/ca' {
  import { ca } from 'date-fns-jalaali/esm/locale'
  export default ca
}

declare module 'date-fns-jalaali/esm/locale/cs' {
  import { cs } from 'date-fns-jalaali/esm/locale'
  export default cs
}

declare module 'date-fns-jalaali/esm/locale/cy' {
  import { cy } from 'date-fns-jalaali/esm/locale'
  export default cy
}

declare module 'date-fns-jalaali/esm/locale/da' {
  import { da } from 'date-fns-jalaali/esm/locale'
  export default da
}

declare module 'date-fns-jalaali/esm/locale/de' {
  import { de } from 'date-fns-jalaali/esm/locale'
  export default de
}

declare module 'date-fns-jalaali/esm/locale/el' {
  import { el } from 'date-fns-jalaali/esm/locale'
  export default el
}

declare module 'date-fns-jalaali/esm/locale/en-AU' {
  import { enAU } from 'date-fns-jalaali/esm/locale'
  export default enAU
}

declare module 'date-fns-jalaali/esm/locale/en-CA' {
  import { enCA } from 'date-fns-jalaali/esm/locale'
  export default enCA
}

declare module 'date-fns-jalaali/esm/locale/en-GB' {
  import { enGB } from 'date-fns-jalaali/esm/locale'
  export default enGB
}

declare module 'date-fns-jalaali/esm/locale/en-US' {
  import { enUS } from 'date-fns-jalaali/esm/locale'
  export default enUS
}

declare module 'date-fns-jalaali/esm/locale/eo' {
  import { eo } from 'date-fns-jalaali/esm/locale'
  export default eo
}

declare module 'date-fns-jalaali/esm/locale/es' {
  import { es } from 'date-fns-jalaali/esm/locale'
  export default es
}

declare module 'date-fns-jalaali/esm/locale/et' {
  import { et } from 'date-fns-jalaali/esm/locale'
  export default et
}

declare module 'date-fns-jalaali/esm/locale/fa-IR' {
  import { faIR } from 'date-fns-jalaali/esm/locale'
  export default faIR
}

declare module 'date-fns-jalaali/esm/locale/fa-jalaali-IR' {
  import { fajalaaliIR } from 'date-fns-jalaali/esm/locale'
  export default fajalaaliIR
}

declare module 'date-fns-jalaali/esm/locale/fi' {
  import { fi } from 'date-fns-jalaali/esm/locale'
  export default fi
}

declare module 'date-fns-jalaali/esm/locale/fil' {
  import { fil } from 'date-fns-jalaali/esm/locale'
  export default fil
}

declare module 'date-fns-jalaali/esm/locale/fr' {
  import { fr } from 'date-fns-jalaali/esm/locale'
  export default fr
}

declare module 'date-fns-jalaali/esm/locale/fr-CA' {
  import { frCA } from 'date-fns-jalaali/esm/locale'
  export default frCA
}

declare module 'date-fns-jalaali/esm/locale/fr-CH' {
  import { frCH } from 'date-fns-jalaali/esm/locale'
  export default frCH
}

declare module 'date-fns-jalaali/esm/locale/gl' {
  import { gl } from 'date-fns-jalaali/esm/locale'
  export default gl
}

declare module 'date-fns-jalaali/esm/locale/gu' {
  import { gu } from 'date-fns-jalaali/esm/locale'
  export default gu
}

declare module 'date-fns-jalaali/esm/locale/he' {
  import { he } from 'date-fns-jalaali/esm/locale'
  export default he
}

declare module 'date-fns-jalaali/esm/locale/hi' {
  import { hi } from 'date-fns-jalaali/esm/locale'
  export default hi
}

declare module 'date-fns-jalaali/esm/locale/hr' {
  import { hr } from 'date-fns-jalaali/esm/locale'
  export default hr
}

declare module 'date-fns-jalaali/esm/locale/hu' {
  import { hu } from 'date-fns-jalaali/esm/locale'
  export default hu
}

declare module 'date-fns-jalaali/esm/locale/hy' {
  import { hy } from 'date-fns-jalaali/esm/locale'
  export default hy
}

declare module 'date-fns-jalaali/esm/locale/id' {
  import { id } from 'date-fns-jalaali/esm/locale'
  export default id
}

declare module 'date-fns-jalaali/esm/locale/is' {
  import { is } from 'date-fns-jalaali/esm/locale'
  export default is
}

declare module 'date-fns-jalaali/esm/locale/it' {
  import { it } from 'date-fns-jalaali/esm/locale'
  export default it
}

declare module 'date-fns-jalaali/esm/locale/ja' {
  import { ja } from 'date-fns-jalaali/esm/locale'
  export default ja
}

declare module 'date-fns-jalaali/esm/locale/ka' {
  import { ka } from 'date-fns-jalaali/esm/locale'
  export default ka
}

declare module 'date-fns-jalaali/esm/locale/kk' {
  import { kk } from 'date-fns-jalaali/esm/locale'
  export default kk
}

declare module 'date-fns-jalaali/esm/locale/kn' {
  import { kn } from 'date-fns-jalaali/esm/locale'
  export default kn
}

declare module 'date-fns-jalaali/esm/locale/ko' {
  import { ko } from 'date-fns-jalaali/esm/locale'
  export default ko
}

declare module 'date-fns-jalaali/esm/locale/lt' {
  import { lt } from 'date-fns-jalaali/esm/locale'
  export default lt
}

declare module 'date-fns-jalaali/esm/locale/lv' {
  import { lv } from 'date-fns-jalaali/esm/locale'
  export default lv
}

declare module 'date-fns-jalaali/esm/locale/mk' {
  import { mk } from 'date-fns-jalaali/esm/locale'
  export default mk
}

declare module 'date-fns-jalaali/esm/locale/ms' {
  import { ms } from 'date-fns-jalaali/esm/locale'
  export default ms
}

declare module 'date-fns-jalaali/esm/locale/mt' {
  import { mt } from 'date-fns-jalaali/esm/locale'
  export default mt
}

declare module 'date-fns-jalaali/esm/locale/nb' {
  import { nb } from 'date-fns-jalaali/esm/locale'
  export default nb
}

declare module 'date-fns-jalaali/esm/locale/nl' {
  import { nl } from 'date-fns-jalaali/esm/locale'
  export default nl
}

declare module 'date-fns-jalaali/esm/locale/nl-BE' {
  import { nlBE } from 'date-fns-jalaali/esm/locale'
  export default nlBE
}

declare module 'date-fns-jalaali/esm/locale/nn' {
  import { nn } from 'date-fns-jalaali/esm/locale'
  export default nn
}

declare module 'date-fns-jalaali/esm/locale/pl' {
  import { pl } from 'date-fns-jalaali/esm/locale'
  export default pl
}

declare module 'date-fns-jalaali/esm/locale/pt' {
  import { pt } from 'date-fns-jalaali/esm/locale'
  export default pt
}

declare module 'date-fns-jalaali/esm/locale/pt-BR' {
  import { ptBR } from 'date-fns-jalaali/esm/locale'
  export default ptBR
}

declare module 'date-fns-jalaali/esm/locale/ro' {
  import { ro } from 'date-fns-jalaali/esm/locale'
  export default ro
}

declare module 'date-fns-jalaali/esm/locale/ru' {
  import { ru } from 'date-fns-jalaali/esm/locale'
  export default ru
}

declare module 'date-fns-jalaali/esm/locale/sk' {
  import { sk } from 'date-fns-jalaali/esm/locale'
  export default sk
}

declare module 'date-fns-jalaali/esm/locale/sl' {
  import { sl } from 'date-fns-jalaali/esm/locale'
  export default sl
}

declare module 'date-fns-jalaali/esm/locale/sr' {
  import { sr } from 'date-fns-jalaali/esm/locale'
  export default sr
}

declare module 'date-fns-jalaali/esm/locale/sr-Latn' {
  import { srLatn } from 'date-fns-jalaali/esm/locale'
  export default srLatn
}

declare module 'date-fns-jalaali/esm/locale/sv' {
  import { sv } from 'date-fns-jalaali/esm/locale'
  export default sv
}

declare module 'date-fns-jalaali/esm/locale/ta' {
  import { ta } from 'date-fns-jalaali/esm/locale'
  export default ta
}

declare module 'date-fns-jalaali/esm/locale/te' {
  import { te } from 'date-fns-jalaali/esm/locale'
  export default te
}

declare module 'date-fns-jalaali/esm/locale/th' {
  import { th } from 'date-fns-jalaali/esm/locale'
  export default th
}

declare module 'date-fns-jalaali/esm/locale/tr' {
  import { tr } from 'date-fns-jalaali/esm/locale'
  export default tr
}

declare module 'date-fns-jalaali/esm/locale/ug' {
  import { ug } from 'date-fns-jalaali/esm/locale'
  export default ug
}

declare module 'date-fns-jalaali/esm/locale/uk' {
  import { uk } from 'date-fns-jalaali/esm/locale'
  export default uk
}

declare module 'date-fns-jalaali/esm/locale/uz' {
  import { uz } from 'date-fns-jalaali/esm/locale'
  export default uz
}

declare module 'date-fns-jalaali/esm/locale/vi' {
  import { vi } from 'date-fns-jalaali/esm/locale'
  export default vi
}

declare module 'date-fns-jalaali/esm/locale/zh-CN' {
  import { zhCN } from 'date-fns-jalaali/esm/locale'
  export default zhCN
}

declare module 'date-fns-jalaali/esm/locale/zh-TW' {
  import { zhTW } from 'date-fns-jalaali/esm/locale'
  export default zhTW
}

declare module 'date-fns-jalaali/esm/locale/af/index' {
  import { af } from 'date-fns-jalaali/esm/locale'
  export default af
}

declare module 'date-fns-jalaali/esm/locale/ar/index' {
  import { ar } from 'date-fns-jalaali/esm/locale'
  export default ar
}

declare module 'date-fns-jalaali/esm/locale/ar-DZ/index' {
  import { arDZ } from 'date-fns-jalaali/esm/locale'
  export default arDZ
}

declare module 'date-fns-jalaali/esm/locale/ar-MA/index' {
  import { arMA } from 'date-fns-jalaali/esm/locale'
  export default arMA
}

declare module 'date-fns-jalaali/esm/locale/ar-SA/index' {
  import { arSA } from 'date-fns-jalaali/esm/locale'
  export default arSA
}

declare module 'date-fns-jalaali/esm/locale/az/index' {
  import { az } from 'date-fns-jalaali/esm/locale'
  export default az
}

declare module 'date-fns-jalaali/esm/locale/be/index' {
  import { be } from 'date-fns-jalaali/esm/locale'
  export default be
}

declare module 'date-fns-jalaali/esm/locale/bg/index' {
  import { bg } from 'date-fns-jalaali/esm/locale'
  export default bg
}

declare module 'date-fns-jalaali/esm/locale/bn/index' {
  import { bn } from 'date-fns-jalaali/esm/locale'
  export default bn
}

declare module 'date-fns-jalaali/esm/locale/ca/index' {
  import { ca } from 'date-fns-jalaali/esm/locale'
  export default ca
}

declare module 'date-fns-jalaali/esm/locale/cs/index' {
  import { cs } from 'date-fns-jalaali/esm/locale'
  export default cs
}

declare module 'date-fns-jalaali/esm/locale/cy/index' {
  import { cy } from 'date-fns-jalaali/esm/locale'
  export default cy
}

declare module 'date-fns-jalaali/esm/locale/da/index' {
  import { da } from 'date-fns-jalaali/esm/locale'
  export default da
}

declare module 'date-fns-jalaali/esm/locale/de/index' {
  import { de } from 'date-fns-jalaali/esm/locale'
  export default de
}

declare module 'date-fns-jalaali/esm/locale/el/index' {
  import { el } from 'date-fns-jalaali/esm/locale'
  export default el
}

declare module 'date-fns-jalaali/esm/locale/en-AU/index' {
  import { enAU } from 'date-fns-jalaali/esm/locale'
  export default enAU
}

declare module 'date-fns-jalaali/esm/locale/en-CA/index' {
  import { enCA } from 'date-fns-jalaali/esm/locale'
  export default enCA
}

declare module 'date-fns-jalaali/esm/locale/en-GB/index' {
  import { enGB } from 'date-fns-jalaali/esm/locale'
  export default enGB
}

declare module 'date-fns-jalaali/esm/locale/en-US/index' {
  import { enUS } from 'date-fns-jalaali/esm/locale'
  export default enUS
}

declare module 'date-fns-jalaali/esm/locale/eo/index' {
  import { eo } from 'date-fns-jalaali/esm/locale'
  export default eo
}

declare module 'date-fns-jalaali/esm/locale/es/index' {
  import { es } from 'date-fns-jalaali/esm/locale'
  export default es
}

declare module 'date-fns-jalaali/esm/locale/et/index' {
  import { et } from 'date-fns-jalaali/esm/locale'
  export default et
}

declare module 'date-fns-jalaali/esm/locale/fa-IR/index' {
  import { faIR } from 'date-fns-jalaali/esm/locale'
  export default faIR
}

declare module 'date-fns-jalaali/esm/locale/fa-jalaali-IR/index' {
  import { fajalaaliIR } from 'date-fns-jalaali/esm/locale'
  export default fajalaaliIR
}

declare module 'date-fns-jalaali/esm/locale/fi/index' {
  import { fi } from 'date-fns-jalaali/esm/locale'
  export default fi
}

declare module 'date-fns-jalaali/esm/locale/fil/index' {
  import { fil } from 'date-fns-jalaali/esm/locale'
  export default fil
}

declare module 'date-fns-jalaali/esm/locale/fr/index' {
  import { fr } from 'date-fns-jalaali/esm/locale'
  export default fr
}

declare module 'date-fns-jalaali/esm/locale/fr-CA/index' {
  import { frCA } from 'date-fns-jalaali/esm/locale'
  export default frCA
}

declare module 'date-fns-jalaali/esm/locale/fr-CH/index' {
  import { frCH } from 'date-fns-jalaali/esm/locale'
  export default frCH
}

declare module 'date-fns-jalaali/esm/locale/gl/index' {
  import { gl } from 'date-fns-jalaali/esm/locale'
  export default gl
}

declare module 'date-fns-jalaali/esm/locale/gu/index' {
  import { gu } from 'date-fns-jalaali/esm/locale'
  export default gu
}

declare module 'date-fns-jalaali/esm/locale/he/index' {
  import { he } from 'date-fns-jalaali/esm/locale'
  export default he
}

declare module 'date-fns-jalaali/esm/locale/hi/index' {
  import { hi } from 'date-fns-jalaali/esm/locale'
  export default hi
}

declare module 'date-fns-jalaali/esm/locale/hr/index' {
  import { hr } from 'date-fns-jalaali/esm/locale'
  export default hr
}

declare module 'date-fns-jalaali/esm/locale/hu/index' {
  import { hu } from 'date-fns-jalaali/esm/locale'
  export default hu
}

declare module 'date-fns-jalaali/esm/locale/hy/index' {
  import { hy } from 'date-fns-jalaali/esm/locale'
  export default hy
}

declare module 'date-fns-jalaali/esm/locale/id/index' {
  import { id } from 'date-fns-jalaali/esm/locale'
  export default id
}

declare module 'date-fns-jalaali/esm/locale/is/index' {
  import { is } from 'date-fns-jalaali/esm/locale'
  export default is
}

declare module 'date-fns-jalaali/esm/locale/it/index' {
  import { it } from 'date-fns-jalaali/esm/locale'
  export default it
}

declare module 'date-fns-jalaali/esm/locale/ja/index' {
  import { ja } from 'date-fns-jalaali/esm/locale'
  export default ja
}

declare module 'date-fns-jalaali/esm/locale/ka/index' {
  import { ka } from 'date-fns-jalaali/esm/locale'
  export default ka
}

declare module 'date-fns-jalaali/esm/locale/kk/index' {
  import { kk } from 'date-fns-jalaali/esm/locale'
  export default kk
}

declare module 'date-fns-jalaali/esm/locale/kn/index' {
  import { kn } from 'date-fns-jalaali/esm/locale'
  export default kn
}

declare module 'date-fns-jalaali/esm/locale/ko/index' {
  import { ko } from 'date-fns-jalaali/esm/locale'
  export default ko
}

declare module 'date-fns-jalaali/esm/locale/lt/index' {
  import { lt } from 'date-fns-jalaali/esm/locale'
  export default lt
}

declare module 'date-fns-jalaali/esm/locale/lv/index' {
  import { lv } from 'date-fns-jalaali/esm/locale'
  export default lv
}

declare module 'date-fns-jalaali/esm/locale/mk/index' {
  import { mk } from 'date-fns-jalaali/esm/locale'
  export default mk
}

declare module 'date-fns-jalaali/esm/locale/ms/index' {
  import { ms } from 'date-fns-jalaali/esm/locale'
  export default ms
}

declare module 'date-fns-jalaali/esm/locale/mt/index' {
  import { mt } from 'date-fns-jalaali/esm/locale'
  export default mt
}

declare module 'date-fns-jalaali/esm/locale/nb/index' {
  import { nb } from 'date-fns-jalaali/esm/locale'
  export default nb
}

declare module 'date-fns-jalaali/esm/locale/nl/index' {
  import { nl } from 'date-fns-jalaali/esm/locale'
  export default nl
}

declare module 'date-fns-jalaali/esm/locale/nl-BE/index' {
  import { nlBE } from 'date-fns-jalaali/esm/locale'
  export default nlBE
}

declare module 'date-fns-jalaali/esm/locale/nn/index' {
  import { nn } from 'date-fns-jalaali/esm/locale'
  export default nn
}

declare module 'date-fns-jalaali/esm/locale/pl/index' {
  import { pl } from 'date-fns-jalaali/esm/locale'
  export default pl
}

declare module 'date-fns-jalaali/esm/locale/pt/index' {
  import { pt } from 'date-fns-jalaali/esm/locale'
  export default pt
}

declare module 'date-fns-jalaali/esm/locale/pt-BR/index' {
  import { ptBR } from 'date-fns-jalaali/esm/locale'
  export default ptBR
}

declare module 'date-fns-jalaali/esm/locale/ro/index' {
  import { ro } from 'date-fns-jalaali/esm/locale'
  export default ro
}

declare module 'date-fns-jalaali/esm/locale/ru/index' {
  import { ru } from 'date-fns-jalaali/esm/locale'
  export default ru
}

declare module 'date-fns-jalaali/esm/locale/sk/index' {
  import { sk } from 'date-fns-jalaali/esm/locale'
  export default sk
}

declare module 'date-fns-jalaali/esm/locale/sl/index' {
  import { sl } from 'date-fns-jalaali/esm/locale'
  export default sl
}

declare module 'date-fns-jalaali/esm/locale/sr/index' {
  import { sr } from 'date-fns-jalaali/esm/locale'
  export default sr
}

declare module 'date-fns-jalaali/esm/locale/sr-Latn/index' {
  import { srLatn } from 'date-fns-jalaali/esm/locale'
  export default srLatn
}

declare module 'date-fns-jalaali/esm/locale/sv/index' {
  import { sv } from 'date-fns-jalaali/esm/locale'
  export default sv
}

declare module 'date-fns-jalaali/esm/locale/ta/index' {
  import { ta } from 'date-fns-jalaali/esm/locale'
  export default ta
}

declare module 'date-fns-jalaali/esm/locale/te/index' {
  import { te } from 'date-fns-jalaali/esm/locale'
  export default te
}

declare module 'date-fns-jalaali/esm/locale/th/index' {
  import { th } from 'date-fns-jalaali/esm/locale'
  export default th
}

declare module 'date-fns-jalaali/esm/locale/tr/index' {
  import { tr } from 'date-fns-jalaali/esm/locale'
  export default tr
}

declare module 'date-fns-jalaali/esm/locale/ug/index' {
  import { ug } from 'date-fns-jalaali/esm/locale'
  export default ug
}

declare module 'date-fns-jalaali/esm/locale/uk/index' {
  import { uk } from 'date-fns-jalaali/esm/locale'
  export default uk
}

declare module 'date-fns-jalaali/esm/locale/uz/index' {
  import { uz } from 'date-fns-jalaali/esm/locale'
  export default uz
}

declare module 'date-fns-jalaali/esm/locale/vi/index' {
  import { vi } from 'date-fns-jalaali/esm/locale'
  export default vi
}

declare module 'date-fns-jalaali/esm/locale/zh-CN/index' {
  import { zhCN } from 'date-fns-jalaali/esm/locale'
  export default zhCN
}

declare module 'date-fns-jalaali/esm/locale/zh-TW/index' {
  import { zhTW } from 'date-fns-jalaali/esm/locale'
  export default zhTW
}

declare module 'date-fns-jalaali/esm/locale/af/index.js' {
  import { af } from 'date-fns-jalaali/esm/locale'
  export default af
}

declare module 'date-fns-jalaali/esm/locale/ar/index.js' {
  import { ar } from 'date-fns-jalaali/esm/locale'
  export default ar
}

declare module 'date-fns-jalaali/esm/locale/ar-DZ/index.js' {
  import { arDZ } from 'date-fns-jalaali/esm/locale'
  export default arDZ
}

declare module 'date-fns-jalaali/esm/locale/ar-MA/index.js' {
  import { arMA } from 'date-fns-jalaali/esm/locale'
  export default arMA
}

declare module 'date-fns-jalaali/esm/locale/ar-SA/index.js' {
  import { arSA } from 'date-fns-jalaali/esm/locale'
  export default arSA
}

declare module 'date-fns-jalaali/esm/locale/az/index.js' {
  import { az } from 'date-fns-jalaali/esm/locale'
  export default az
}

declare module 'date-fns-jalaali/esm/locale/be/index.js' {
  import { be } from 'date-fns-jalaali/esm/locale'
  export default be
}

declare module 'date-fns-jalaali/esm/locale/bg/index.js' {
  import { bg } from 'date-fns-jalaali/esm/locale'
  export default bg
}

declare module 'date-fns-jalaali/esm/locale/bn/index.js' {
  import { bn } from 'date-fns-jalaali/esm/locale'
  export default bn
}

declare module 'date-fns-jalaali/esm/locale/ca/index.js' {
  import { ca } from 'date-fns-jalaali/esm/locale'
  export default ca
}

declare module 'date-fns-jalaali/esm/locale/cs/index.js' {
  import { cs } from 'date-fns-jalaali/esm/locale'
  export default cs
}

declare module 'date-fns-jalaali/esm/locale/cy/index.js' {
  import { cy } from 'date-fns-jalaali/esm/locale'
  export default cy
}

declare module 'date-fns-jalaali/esm/locale/da/index.js' {
  import { da } from 'date-fns-jalaali/esm/locale'
  export default da
}

declare module 'date-fns-jalaali/esm/locale/de/index.js' {
  import { de } from 'date-fns-jalaali/esm/locale'
  export default de
}

declare module 'date-fns-jalaali/esm/locale/el/index.js' {
  import { el } from 'date-fns-jalaali/esm/locale'
  export default el
}

declare module 'date-fns-jalaali/esm/locale/en-AU/index.js' {
  import { enAU } from 'date-fns-jalaali/esm/locale'
  export default enAU
}

declare module 'date-fns-jalaali/esm/locale/en-CA/index.js' {
  import { enCA } from 'date-fns-jalaali/esm/locale'
  export default enCA
}

declare module 'date-fns-jalaali/esm/locale/en-GB/index.js' {
  import { enGB } from 'date-fns-jalaali/esm/locale'
  export default enGB
}

declare module 'date-fns-jalaali/esm/locale/en-US/index.js' {
  import { enUS } from 'date-fns-jalaali/esm/locale'
  export default enUS
}

declare module 'date-fns-jalaali/esm/locale/eo/index.js' {
  import { eo } from 'date-fns-jalaali/esm/locale'
  export default eo
}

declare module 'date-fns-jalaali/esm/locale/es/index.js' {
  import { es } from 'date-fns-jalaali/esm/locale'
  export default es
}

declare module 'date-fns-jalaali/esm/locale/et/index.js' {
  import { et } from 'date-fns-jalaali/esm/locale'
  export default et
}

declare module 'date-fns-jalaali/esm/locale/fa-IR/index.js' {
  import { faIR } from 'date-fns-jalaali/esm/locale'
  export default faIR
}

declare module 'date-fns-jalaali/esm/locale/fa-jalaali-IR/index.js' {
  import { fajalaaliIR } from 'date-fns-jalaali/esm/locale'
  export default fajalaaliIR
}

declare module 'date-fns-jalaali/esm/locale/fi/index.js' {
  import { fi } from 'date-fns-jalaali/esm/locale'
  export default fi
}

declare module 'date-fns-jalaali/esm/locale/fil/index.js' {
  import { fil } from 'date-fns-jalaali/esm/locale'
  export default fil
}

declare module 'date-fns-jalaali/esm/locale/fr/index.js' {
  import { fr } from 'date-fns-jalaali/esm/locale'
  export default fr
}

declare module 'date-fns-jalaali/esm/locale/fr-CA/index.js' {
  import { frCA } from 'date-fns-jalaali/esm/locale'
  export default frCA
}

declare module 'date-fns-jalaali/esm/locale/fr-CH/index.js' {
  import { frCH } from 'date-fns-jalaali/esm/locale'
  export default frCH
}

declare module 'date-fns-jalaali/esm/locale/gl/index.js' {
  import { gl } from 'date-fns-jalaali/esm/locale'
  export default gl
}

declare module 'date-fns-jalaali/esm/locale/gu/index.js' {
  import { gu } from 'date-fns-jalaali/esm/locale'
  export default gu
}

declare module 'date-fns-jalaali/esm/locale/he/index.js' {
  import { he } from 'date-fns-jalaali/esm/locale'
  export default he
}

declare module 'date-fns-jalaali/esm/locale/hi/index.js' {
  import { hi } from 'date-fns-jalaali/esm/locale'
  export default hi
}

declare module 'date-fns-jalaali/esm/locale/hr/index.js' {
  import { hr } from 'date-fns-jalaali/esm/locale'
  export default hr
}

declare module 'date-fns-jalaali/esm/locale/hu/index.js' {
  import { hu } from 'date-fns-jalaali/esm/locale'
  export default hu
}

declare module 'date-fns-jalaali/esm/locale/hy/index.js' {
  import { hy } from 'date-fns-jalaali/esm/locale'
  export default hy
}

declare module 'date-fns-jalaali/esm/locale/id/index.js' {
  import { id } from 'date-fns-jalaali/esm/locale'
  export default id
}

declare module 'date-fns-jalaali/esm/locale/is/index.js' {
  import { is } from 'date-fns-jalaali/esm/locale'
  export default is
}

declare module 'date-fns-jalaali/esm/locale/it/index.js' {
  import { it } from 'date-fns-jalaali/esm/locale'
  export default it
}

declare module 'date-fns-jalaali/esm/locale/ja/index.js' {
  import { ja } from 'date-fns-jalaali/esm/locale'
  export default ja
}

declare module 'date-fns-jalaali/esm/locale/ka/index.js' {
  import { ka } from 'date-fns-jalaali/esm/locale'
  export default ka
}

declare module 'date-fns-jalaali/esm/locale/kk/index.js' {
  import { kk } from 'date-fns-jalaali/esm/locale'
  export default kk
}

declare module 'date-fns-jalaali/esm/locale/kn/index.js' {
  import { kn } from 'date-fns-jalaali/esm/locale'
  export default kn
}

declare module 'date-fns-jalaali/esm/locale/ko/index.js' {
  import { ko } from 'date-fns-jalaali/esm/locale'
  export default ko
}

declare module 'date-fns-jalaali/esm/locale/lt/index.js' {
  import { lt } from 'date-fns-jalaali/esm/locale'
  export default lt
}

declare module 'date-fns-jalaali/esm/locale/lv/index.js' {
  import { lv } from 'date-fns-jalaali/esm/locale'
  export default lv
}

declare module 'date-fns-jalaali/esm/locale/mk/index.js' {
  import { mk } from 'date-fns-jalaali/esm/locale'
  export default mk
}

declare module 'date-fns-jalaali/esm/locale/ms/index.js' {
  import { ms } from 'date-fns-jalaali/esm/locale'
  export default ms
}

declare module 'date-fns-jalaali/esm/locale/mt/index.js' {
  import { mt } from 'date-fns-jalaali/esm/locale'
  export default mt
}

declare module 'date-fns-jalaali/esm/locale/nb/index.js' {
  import { nb } from 'date-fns-jalaali/esm/locale'
  export default nb
}

declare module 'date-fns-jalaali/esm/locale/nl/index.js' {
  import { nl } from 'date-fns-jalaali/esm/locale'
  export default nl
}

declare module 'date-fns-jalaali/esm/locale/nl-BE/index.js' {
  import { nlBE } from 'date-fns-jalaali/esm/locale'
  export default nlBE
}

declare module 'date-fns-jalaali/esm/locale/nn/index.js' {
  import { nn } from 'date-fns-jalaali/esm/locale'
  export default nn
}

declare module 'date-fns-jalaali/esm/locale/pl/index.js' {
  import { pl } from 'date-fns-jalaali/esm/locale'
  export default pl
}

declare module 'date-fns-jalaali/esm/locale/pt/index.js' {
  import { pt } from 'date-fns-jalaali/esm/locale'
  export default pt
}

declare module 'date-fns-jalaali/esm/locale/pt-BR/index.js' {
  import { ptBR } from 'date-fns-jalaali/esm/locale'
  export default ptBR
}

declare module 'date-fns-jalaali/esm/locale/ro/index.js' {
  import { ro } from 'date-fns-jalaali/esm/locale'
  export default ro
}

declare module 'date-fns-jalaali/esm/locale/ru/index.js' {
  import { ru } from 'date-fns-jalaali/esm/locale'
  export default ru
}

declare module 'date-fns-jalaali/esm/locale/sk/index.js' {
  import { sk } from 'date-fns-jalaali/esm/locale'
  export default sk
}

declare module 'date-fns-jalaali/esm/locale/sl/index.js' {
  import { sl } from 'date-fns-jalaali/esm/locale'
  export default sl
}

declare module 'date-fns-jalaali/esm/locale/sr/index.js' {
  import { sr } from 'date-fns-jalaali/esm/locale'
  export default sr
}

declare module 'date-fns-jalaali/esm/locale/sr-Latn/index.js' {
  import { srLatn } from 'date-fns-jalaali/esm/locale'
  export default srLatn
}

declare module 'date-fns-jalaali/esm/locale/sv/index.js' {
  import { sv } from 'date-fns-jalaali/esm/locale'
  export default sv
}

declare module 'date-fns-jalaali/esm/locale/ta/index.js' {
  import { ta } from 'date-fns-jalaali/esm/locale'
  export default ta
}

declare module 'date-fns-jalaali/esm/locale/te/index.js' {
  import { te } from 'date-fns-jalaali/esm/locale'
  export default te
}

declare module 'date-fns-jalaali/esm/locale/th/index.js' {
  import { th } from 'date-fns-jalaali/esm/locale'
  export default th
}

declare module 'date-fns-jalaali/esm/locale/tr/index.js' {
  import { tr } from 'date-fns-jalaali/esm/locale'
  export default tr
}

declare module 'date-fns-jalaali/esm/locale/ug/index.js' {
  import { ug } from 'date-fns-jalaali/esm/locale'
  export default ug
}

declare module 'date-fns-jalaali/esm/locale/uk/index.js' {
  import { uk } from 'date-fns-jalaali/esm/locale'
  export default uk
}

declare module 'date-fns-jalaali/esm/locale/uz/index.js' {
  import { uz } from 'date-fns-jalaali/esm/locale'
  export default uz
}

declare module 'date-fns-jalaali/esm/locale/vi/index.js' {
  import { vi } from 'date-fns-jalaali/esm/locale'
  export default vi
}

declare module 'date-fns-jalaali/esm/locale/zh-CN/index.js' {
  import { zhCN } from 'date-fns-jalaali/esm/locale'
  export default zhCN
}

declare module 'date-fns-jalaali/esm/locale/zh-TW/index.js' {
  import { zhTW } from 'date-fns-jalaali/esm/locale'
  export default zhTW
}

// dateFns Global Interface

interface dateFns {
  add(date: Date | number, duration: Duration): Date

  addBusinessDays(date: Date | number, amount: number): Date

  addDays(date: Date | number, amount: number): Date

  addHours(date: Date | number, amount: number): Date

  addISOWeekYears(date: Date | number, amount: number): Date

  addMilliseconds(date: Date | number, amount: number): Date

  addMinutes(date: Date | number, amount: number): Date

  addMonths(date: Date | number, amount: number): Date

  addQuarters(date: Date | number, amount: number): Date

  addSeconds(date: Date | number, amount: number): Date

  addWeeks(date: Date | number, amount: number): Date

  addYears(date: Date | number, amount: number): Date

  areIntervalsOverlapping(
    intervalLeft: Interval,
    intervalRight: Interval,
    options?: {
      inclusive?: boolean
    }
  ): boolean

  closestIndexTo(
    dateToCompare: Date | number,
    datesArray: (Date | number)[]
  ): number

  closestTo(dateToCompare: Date | number, datesArray: (Date | number)[]): Date

  compareAsc(dateLeft: Date | number, dateRight: Date | number): number

  compareDesc(dateLeft: Date | number, dateRight: Date | number): number

  differenceInBusinessDays(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number

  differenceInCalendarDays(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number

  differenceInCalendarISOWeeks(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number

  differenceInCalendarISOWeekYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number

  differenceInCalendarMonths(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number

  differenceInCalendarQuarters(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number

  differenceInCalendarWeeks(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): number

  differenceInCalendarYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number

  differenceInDays(dateLeft: Date | number, dateRight: Date | number): number

  differenceInHours(dateLeft: Date | number, dateRight: Date | number): number

  differenceInISOWeekYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number

  differenceInMilliseconds(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number

  differenceInMinutes(dateLeft: Date | number, dateRight: Date | number): number

  differenceInMonths(dateLeft: Date | number, dateRight: Date | number): number

  differenceInQuarters(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number

  differenceInSeconds(dateLeft: Date | number, dateRight: Date | number): number

  differenceInWeeks(dateLeft: Date | number, dateRight: Date | number): number

  differenceInYears(dateLeft: Date | number, dateRight: Date | number): number

  eachDayOfInterval(
    interval: Interval,
    options?: {
      step?: number
    }
  ): Date[]

  eachMonthOfInterval(interval: Interval): Date[]

  eachWeekendOfInterval(interval: Interval): Date[]

  eachWeekendOfMonth(date: Date | number): Date[]

  eachWeekendOfYear(date: Date | number): Date[]

  eachWeekOfInterval(
    interval: Interval,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date[]

  eachYearOfInterval(interval: Interval): Date[]

  endOfDay(date: Date | number): Date

  endOfDecade(
    date: Date | number,
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date

  endOfHour(date: Date | number): Date

  endOfISOWeek(date: Date | number): Date

  endOfISOWeekYear(date: Date | number): Date

  endOfMinute(date: Date | number): Date

  endOfMonth(date: Date | number): Date

  endOfQuarter(date: Date | number): Date

  endOfSecond(date: Date | number): Date

  endOfToday(): Date

  endOfTomorrow(): Date

  endOfWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date

  endOfYear(date: Date | number): Date

  endOfYesterday(): Date

  format(
    date: Date | number,
    format: string,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: number
      useAdditionalWeekYearTokens?: boolean
      useAdditionalDayOfYearTokens?: boolean
    }
  ): string

  formatDistance(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      includeSeconds?: boolean
      addSuffix?: boolean
      locale?: Locale
    }
  ): string

  formatDistanceStrict(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      addSuffix?: boolean
      unit?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'
      roundingMethod?: 'floor' | 'ceil' | 'round'
      locale?: Locale
    }
  ): string

  formatDistanceToNow(
    date: Date | number,
    options?: {
      includeSeconds?: boolean
      addSuffix?: boolean
      locale?: Locale
    }
  ): string

  formatDistanceToNowStrict(
    date: Date | number,
    options?: {
      addSuffix?: boolean
      unit?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'
      roundingMethod?: 'floor' | 'ceil' | 'round'
      locale?: Locale
    }
  ): string

  formatISO(
    date: Date | number,
    options?: {
      format?: 'extended' | 'basic'
      representation?: 'complete' | 'date' | 'time'
    }
  ): string

  formatISO9075(
    date: Date | number,
    options?: {
      format?: 'extended' | 'basic'
      representation?: 'complete' | 'date' | 'time'
    }
  ): string

  formatISODuration(duration: Duration): string

  formatRelative(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): string

  formatRFC3339(
    date: Date | number,
    options?: {
      fractionDigits?: 0 | 1 | 2 | 3
    }
  ): string

  formatRFC7231(date: Date | number): string

  fromUnixTime(unixTime: number): Date

  getDate(date: Date | number): number

  getDay(date: Date | number): 0 | 1 | 2 | 3 | 4 | 5 | 6

  getDayOfYear(date: Date | number): number

  getDaysInMonth(date: Date | number): number

  getDaysInYear(date: Date | number): number

  getDecade(date: Date | number): number

  getHours(date: Date | number): number

  getISODay(date: Date | number): number

  getISOWeek(date: Date | number): number

  getISOWeeksInYear(date: Date | number): number

  getISOWeekYear(date: Date | number): number

  getMilliseconds(date: Date | number): number

  getMinutes(date: Date | number): number

  getMonth(date: Date | number): number

  getOverlappingDaysInIntervals(
    intervalLeft: Interval,
    intervalRight: Interval
  ): number

  getQuarter(date: Date | number): number

  getSeconds(date: Date | number): number

  getTime(date: Date | number): number

  getUnixTime(date: Date | number): number

  getWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): number

  getWeekOfMonth(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): number

  getWeeksInMonth(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): number

  getWeekYear(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): number

  getYear(date: Date | number): number

  intervalToDuration(interval: Interval): Duration

  isAfter(date: Date | number, dateToCompare: Date | number): boolean

  isBefore(date: Date | number, dateToCompare: Date | number): boolean

  isDate(value: any): boolean

  isEqual(dateLeft: Date | number, dateRight: Date | number): boolean

  isExists(year: number, month: number, day: number): boolean

  isFirstDayOfMonth(date: Date | number): boolean

  isFriday(date: Date | number): boolean

  isFuture(date: Date | number): boolean

  isLastDayOfMonth(date: Date | number): boolean

  isLeapYear(date: Date | number): boolean

  isMonday(date: Date | number): boolean

  isPast(date: Date | number): boolean

  isSameDay(dateLeft: Date | number, dateRight: Date | number): boolean

  isSameHour(dateLeft: Date | number, dateRight: Date | number): boolean

  isSameISOWeek(dateLeft: Date | number, dateRight: Date | number): boolean

  isSameISOWeekYear(dateLeft: Date | number, dateRight: Date | number): boolean

  isSameMinute(dateLeft: Date | number, dateRight: Date | number): boolean

  isSameMonth(dateLeft: Date | number, dateRight: Date | number): boolean

  isSameQuarter(dateLeft: Date | number, dateRight: Date | number): boolean

  isSameSecond(dateLeft: Date | number, dateRight: Date | number): boolean

  isSameWeek(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): boolean

  isSameYear(dateLeft: Date | number, dateRight: Date | number): boolean

  isSaturday(date: Date | number): boolean

  isSunday(date: Date | number): boolean

  isThisHour(date: Date | number): boolean

  isThisISOWeek(date: Date | number): boolean

  isThisMinute(date: Date | number): boolean

  isThisMonth(date: Date | number): boolean

  isThisQuarter(date: Date | number): boolean

  isThisSecond(date: Date | number): boolean

  isThisWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): boolean

  isThisYear(date: Date | number): boolean

  isThursday(date: Date | number): boolean

  isToday(date: Date | number): boolean

  isTomorrow(date: Date | number): boolean

  isTuesday(date: Date | number): boolean

  isValid(date: any): boolean

  isWednesday(date: Date | number): boolean

  isWeekend(date: Date | number): boolean

  isWithinInterval(date: Date | number, interval: Interval): boolean

  isYesterday(date: Date | number): boolean

  lastDayOfDecade(date: Date | number): Date

  lastDayOfISOWeek(date: Date | number): Date

  lastDayOfISOWeekYear(date: Date | number): Date

  lastDayOfMonth(date: Date | number): Date

  lastDayOfQuarter(
    date: Date | number,
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date

  lastDayOfWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date

  lastDayOfYear(date: Date | number): Date

  lightFormat(date: Date | number, format: string): string

  max(datesArray: (Date | number)[]): Date

  min(datesArray: (Date | number)[]): Date

  parse(
    dateString: string,
    formatString: string,
    referenceDate: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      useAdditionalWeekYearTokens?: boolean
      useAdditionalDayOfYearTokens?: boolean
    }
  ): Date

  parseISO(
    argument: string,
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date

  parseJSON(argument: string | number | Date): Date

  roundToNearestMinutes(
    date: Date | number,
    options?: {
      nearestTo?: number
    }
  ): Date

  set(
    date: Date | number,
    values: {
      year?: number
      month?: number
      date?: number
      hours?: number
      minutes?: number
      seconds?: number
      milliseconds?: number
    }
  ): Date

  setDate(date: Date | number, dayOfMonth: number): Date

  setDay(
    date: Date | number,
    day: number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date

  setDayOfYear(date: Date | number, dayOfYear: number): Date

  setHours(date: Date | number, hours: number): Date

  setISODay(date: Date | number, day: number): Date

  setISOWeek(date: Date | number, isoWeek: number): Date

  setISOWeekYear(date: Date | number, isoWeekYear: number): Date

  setMilliseconds(date: Date | number, milliseconds: number): Date

  setMinutes(date: Date | number, minutes: number): Date

  setMonth(date: Date | number, month: number): Date

  setQuarter(date: Date | number, quarter: number): Date

  setSeconds(date: Date | number, seconds: number): Date

  setWeek(
    date: Date | number,
    week: number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): Date

  setWeekYear(
    date: Date | number,
    weekYear: number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): Date

  setYear(date: Date | number, year: number): Date

  startOfDay(date: Date | number): Date

  startOfDecade(date: Date | number): Date

  startOfHour(date: Date | number): Date

  startOfISOWeek(date: Date | number): Date

  startOfISOWeekYear(date: Date | number): Date

  startOfMinute(date: Date | number): Date

  startOfMonth(date: Date | number): Date

  startOfQuarter(date: Date | number): Date

  startOfSecond(date: Date | number): Date

  startOfToday(): Date

  startOfTomorrow(): Date

  startOfWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date

  startOfWeekYear(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): Date

  startOfYear(date: Date | number): Date

  startOfYesterday(): Date

  sub(date: Date | number, duration: Duration): Date

  subBusinessDays(date: Date | number, amount: number): Date

  subDays(date: Date | number, amount: number): Date

  subHours(date: Date | number, amount: number): Date

  subISOWeekYears(date: Date | number, amount: number): Date

  subMilliseconds(date: Date | number, amount: number): Date

  subMinutes(date: Date | number, amount: number): Date

  subMonths(date: Date | number, amount: number): Date

  subQuarters(date: Date | number, amount: number): Date

  subSeconds(date: Date | number, amount: number): Date

  subWeeks(date: Date | number, amount: number): Date

  subYears(date: Date | number, amount: number): Date

  toDate(argument: Date | number): Date

  maxTime: number

  minTime: number
}
