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

module.exports = {
  formatNewsData
}
