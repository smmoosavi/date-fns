const { toJalaali } = require('../../src/_jalaali/index')

export function isUTCDate(node) {
  return (
    node.type === 'CallExpression' &&
    node.callee.type === 'MemberExpression' &&
    node.callee.object.type === 'Identifier' &&
    node.callee.object.name === 'Date' &&
    node.callee.property.type === 'Identifier' &&
    node.callee.property.name === 'UTC'
  )
}

export function generateDateCommentText(node) {
  let allIsNumber = true
  let args = node.arguments.map(arg => {
    if (arg.type === 'Literal') {
      return arg.value
    }
    if (
      arg.type === 'UnaryExpression' &&
      arg.operator === '-' &&
      arg.argument.type === 'Literal'
    ) {
      return -arg.argument.value
    }
    allIsNumber = false
    return null
  })
  if (!allIsNumber) {
    return null
  }
  const [y, m, d = 1] = args
  const jd = toJalaali(y, m + 1, d)
  const ja = [jd.jy, jd.jm, jd.jd]
  return ja.join('/')
}
