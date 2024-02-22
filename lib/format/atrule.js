import depth from '../depth.js'
import doubleSpace from '../double-space.js'
import indent from '../indent.js'

/**
 * Append space to colon if necessary. See at-rule-spacing-colon test case.
 */
const params = {
  match: /(\(.*)(:)([^\s])(.*\))/g,
  replace: '$1$2 $3$4',
}

export default function atrule(node) {
  const nodeDepth = depth(node)
  indent(node, nodeDepth)(['before', 'after'])
  node.raws.between = node.nodes ? ' ' : ''
  if (node.params) {
    node.raws.afterName = ' '
    node.params = node.params.replace(params.match, params.replace)
  }
  if (nodeDepth === 0) doubleSpace(node)
}
