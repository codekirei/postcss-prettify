import depth from '../depth'
import doubleSpace from '../double-space'
import indent from '../indent'

export default function rule(node) {
  const nodeDepth = depth(node)
  const indentStr = '  '.repeat(nodeDepth)
  indent(node, nodeDepth)(['before', 'after'])
  node.raws.between = ' '
  node.raws.semicolon = true
  node.selector = node.selector.replace(/\s*,\s*/g, `,\n${indentStr}`)
  if (nodeDepth === 0) doubleSpace(node)
}
