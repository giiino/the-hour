const formatNewsData = (target, category) => {
  const addtime = Date.now()
  const manangerData = {
    category,
    addtime,
    like: 0,
    comment: JSON.stringify([])
  }
  return {
    ...target,
    ...manangerData,
    source: target.source ? JSON.stringify(target.source) : null
  }
}

const formatSourceList = (target, category) => {
  return target.map((item) => {
    return formatNewsData(item, category)
  })
}

module.exports = {
  formatNewsData,
  formatSourceList
}
