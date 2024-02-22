import depth from '../depth.js'
import indent from '../indent.js'

export default function decl(node) {
  indent(node, depth(node))(['before'])
  node.raws.between = ': '
}
