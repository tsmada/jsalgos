// Binary Trees and Tree Traversal

// Binary trees are trees whose nodes can only have up to two children
// 
createNode = (key) => {
  const children = []

  return {
    key,
    children,
    addChild(childKey) {
      const childNode = createNode(childKey)
      children.push(childNode)
      return childNode
    }
  }
}

createTree = (rootKey) => {
  const root = createNode(rootKey)

  return {
    root,
    print() {
      let result = ''

      function traverse(node, visitFn, depth) {
        visitFn(node, depth)

        if (node.children.length) {
          node.children.forEach(n => traverse(n, visitFn, depth + 1))
        }
      }

      function addKeyToResult(node, depth) {
        result +=
          result.length === 0
            ? node.key
            : `\n${' '.repeat(depth * 2)}${node.key}`
      }

      traverse(root, addKeyToResult, 0)

      return result
    }
  }
}

const dom = createTree('html')
const head = dom.root.addChild('head')
const body = dom.root.addChild('body')
const title = head.addChild('title - egghead Tree Lesson')
const header = body.addChild('header')
const main = body.addChild('main')
const footer = body.addChild('footer')
const h1 = header.addChild('h1 - Tree Lesson')
const p = main.addChild('p - Learn about trees!')
const copyright = footer.addChild(`Copyright ${new Date().getFullYear()}`)

console.log(dom.print())

exports.createNode = createNode
exports.createTree = createTree

createBinaryNode = (key) => {
  return {
    key,
    left: null,
    right: null,
    addLeft(leftKey) {
      const newLeft = createBinaryNode(leftKey)
      this.left = newLeft
      return newLeft
    },
    addRight(rightKey) {
      const newRight = createBinaryNode(rightKey)
      this.right = newRight
      return newRight
    }
  }
}

const TRAVERSALS = {
  IN_ORDER: (node, visitFn) => {
    if (node !== null) {
      TRAVERSALS.IN_ORDER(node.left, visitFn)
      visitFn(node)
      TRAVERSALS.IN_ORDER(node.right, visitFn)
    }
  },
  PRE_ORDER: (node, visitFn) => {
    if (node !== null) {
      visitFn(node)
      TRAVERSALS.PRE_ORDER(node.left, visitFn)
      TRAVERSALS.PRE_ORDER(node.right, visitFn)
    }
  },
  POST_ORDER: (node, visitFn) => {
    if (node !== null) {
      TRAVERSALS.POST_ORDER(node.left, visitFn)
      TRAVERSALS.POST_ORDER(node.right, visitFn)
      visitFn(node)
    }
  }
}

createBinaryTree = (rootKey) => {
  const root = createBinaryNode(rootKey)

  return {
    root,
    print(traversalType = 'IN_ORDER') {
      let result = ''

      const visit = node => {
        result += result.length === 0 ? node.key : ` => ${node.key}`
      }

      TRAVERSALS[traversalType](this.root, visit)

      return result
    }
  }
}

const tree = createBinaryTree('a')
const b = tree.root.addLeft('b')
const c = tree.root.addRight('c')
const d = b.addLeft('d')
const e = b.addRight('e')
const f = c.addLeft('f')
const g = c.addRight('g')
const h = d.addLeft('h')
const i = d.addRight('i')

console.log('IN_ORDER: ', tree.print())

console.log('PRE_ORDER: ', tree.print('PRE_ORDER'))

console.log('POST_ORDER: ', tree.print('POST_ORDER'))

exports.createBinaryNode = createBinaryNode
exports.createBinaryTree = createBinaryTree
