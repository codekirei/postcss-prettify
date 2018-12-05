import depth from '../depth'
import doubleSpace from '../double-space'
import indent from '../indent'

export default function comment(node) {
  const nodeDepth = depth(node)
  indent(node, nodeDepth)(['before', 'after'])
  if (nodeDepth === 0) doubleSpace(node)
}
