import atrule from './atrule.js'
import comment from './comment.js'
import decl from './decl.js'
import rule from './rule.js'

export default function format(node) {
  return { atrule, comment, decl, rule }[node.type](node)
}
