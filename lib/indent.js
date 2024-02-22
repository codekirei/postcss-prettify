import defined from 'defined'

export default function indent(node, depth) {
  const indentStr = '  '.repeat(depth)
  return ar => ar.forEach(key => {
    node.raws[key] = defined(node.raws[key], '').trim().concat(`\n${indentStr}`)
  })
}
