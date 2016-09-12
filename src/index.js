import postcss from 'postcss'

import format from './format'

const prettify = postcss.plugin('postcss-prettify', () => css => {
  css.walk(format)
  if (css.first && css.first.raws) css.first.raws.before = ''
})

export default prettify
