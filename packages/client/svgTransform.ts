module.exports = {
  process() {
    return { code: 'module.exports = {};' }
  },
  getCacheKey() {
    return { code: 'module.exports = svgTransform;' }
  },
}
