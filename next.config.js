const { i18n } = require('./next-i18next.config')
const withImages = require('next-images')
module.exports = {
  i18n,
  ...withImages(),
}
