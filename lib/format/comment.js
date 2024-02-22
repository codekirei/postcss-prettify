import depth from '../depth.js'
import doubleSpace from '../double-space.js'

export default function comment(node) {
  if (depth(node) === 0) doubleSpace(node)
}
