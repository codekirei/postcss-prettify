import postcss from 'postcss'
import format from './lib/format/index.js'

function prettify() {
  return {
    postcssPlugin: 'postcss-prettify',
    Once(root) {
      root.walk(format)
    }
  }
}

prettify.postcss = true
export default prettify
