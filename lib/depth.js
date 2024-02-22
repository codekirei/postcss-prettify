export default function getDepth(node) {
  let depth = 0
  let parent = node.parent
  while (parent.type !== 'root') {
    depth += 1
    parent = parent.parent
  }
  return depth
}
