class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  buildTree(array) {
    // Remove duplicates and sort the array
    const uniqueSortedArray = [...new Set(array)].sort((a, b) => a - b);
    return this.createBalancedTree(uniqueSortedArray);
  }

  createBalancedTree(array) {
    if (array.length === 0) return null;
    const mid = Math.floor(array.length / 2);
    const node = new Node(array[mid]);
    node.left = this.createBalancedTree(array.slice(0, mid));
    node.right = this.createBalancedTree(array.slice(mid + 1));
    return node;
  }

  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  insertNode(node, value) {
    if (!node) return new Node(value);
    if (value < node.data) {
      node.left = this.insertNode(node.left, value);
    } else {
      node.right = this.insertNode(node.right, value);
    }
    return node;
  }

  deleteItem(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(node, value) {
    if (!node) return null;
    if (value < node.data) {
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.data) {
      node.right = this.deleteNode(node.right, value);
    } else {
      // Node with one child or no child
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      // Node with two children
      let minLargerNode = this.findMin(node.right);
      node.data = minLargerNode.data;
      node.right = this.deleteNode(node.right, minLargerNode.data);
    }
    return node;
  }

  findMin(node) {
    while (node.left) node = node.left;
    return node;
  }

  find(value) {
    return this.findNode(this.root, value);
  }

  findNode(node, value) {
    if (!node || node.data === value) return node;
    return value < node.data
      ? this.findNode(node.left, value)
      : this.findNode(node.right, value);
  }

  levelOrder(callback) {
    if (!callback) throw new Error("Callback is required");
    const queue = [];
    queue.push(this.root);

    while (queue.length) {
      const currentNode = queue.shift();
      callback(currentNode);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }

  inOrder(callback) {
    if (!callback) throw new Error("Callback is required");
    this.inOrderTraversal(this.root, callback);
  }

  inOrderTraversal(node, callback) {
    if (node) {
      this.inOrderTraversal(node.left, callback);
      callback(node);
      this.inOrderTraversal(node.right, callback);
    }
  }

  preOrder(callback) {
    if (!callback) throw new Error("Callback is required");
    this.preOrderTraversal(this.root, callback);
  }

  preOrderTraversal(node, callback) {
    if (node) {
      callback(node);
      this.preOrderTraversal(node.left, callback);
      this.preOrderTraversal(node.right, callback);
    }
  }

  postOrder(callback) {
    if (!callback) throw new Error("Callback is required");
    this.postOrderTraversal(this.root, callback);
  }

  postOrderTraversal(node, callback) {
    if (node) {
      this.postOrderTraversal(node.left, callback);
      this.postOrderTraversal(node.right, callback);
      callback(node);
    }
  }

  height(node) {
    if (!node) return -1;
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  depth(node) {
    let current = this.root;
    let depth = 0;
    while (current && current !== node) {
      depth++;
      current = node.data < current.data ? current.left : current.right;
    }
    return depth;
  }

  isBalanced() {
    return this.checkBalance(this.root) !== -1;
  }

  checkBalance(node) {
    if (!node) return 0;
    const leftHeight = this.checkBalance(node.left);
    const rightHeight = this.checkBalance(node.right);

    if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
      return -1;
    }
    return Math.max(leftHeight, rightHeight) + 1;
  }

  rebalance() {
    const nodes = [];
    this.inOrder(node => nodes.push(node.data));
    this.root = this.buildTree(nodes);
  }
}
class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  buildTree(array) {
    // Remove duplicates and sort the array
    const uniqueSortedArray = [...new Set(array)].sort((a, b) => a - b);
    return this.createBalancedTree(uniqueSortedArray);
  }

  createBalancedTree(array) {
    if (array.length === 0) return null;
    const mid = Math.floor(array.length / 2);
    const node = new Node(array[mid]);
    node.left = this.createBalancedTree(array.slice(0, mid));
    node.right = this.createBalancedTree(array.slice(mid + 1));
    return node;
  }

  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  insertNode(node, value) {
    if (!node) return new Node(value);
    if (value < node.data) {
      node.left = this.insertNode(node.left, value);
    } else {
      node.right = this.insertNode(node.right, value);
    }
    return node;
  }

  deleteItem(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(node, value) {
    if (!node) return null;
    if (value < node.data) {
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.data) {
      node.right = this.deleteNode(node.right, value);
    } else {
      // Node with one child or no child
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      // Node with two children
      let minLargerNode = this.findMin(node.right);
      node.data = minLargerNode.data;
      node.right = this.deleteNode(node.right, minLargerNode.data);
    }
    return node;
  }

  findMin(node) {
    while (node.left) node = node.left;
    return node;
  }

  find(value) {
    return this.findNode(this.root, value);
  }

  findNode(node, value) {
    if (!node || node.data === value) return node;
    return value < node.data
      ? this.findNode(node.left, value)
      : this.findNode(node.right, value);
  }

  levelOrder(callback) {
    if (!callback) throw new Error("Callback is required");
    const queue = [];
    queue.push(this.root);

    while (queue.length) {
      const currentNode = queue.shift();
      callback(currentNode);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }

  inOrder(callback) {
    if (!callback) throw new Error("Callback is required");
    this.inOrderTraversal(this.root, callback);
  }

  inOrderTraversal(node, callback) {
    if (node) {
      this.inOrderTraversal(node.left, callback);
      callback(node);
      this.inOrderTraversal(node.right, callback);
    }
  }

  preOrder(callback) {
    if (!callback) throw new Error("Callback is required");
    this.preOrderTraversal(this.root, callback);
  }

  preOrderTraversal(node, callback) {
    if (node) {
      callback(node);
      this.preOrderTraversal(node.left, callback);
      this.preOrderTraversal(node.right, callback);
    }
  }

  postOrder(callback) {
    if (!callback) throw new Error("Callback is required");
    this.postOrderTraversal(this.root, callback);
  }

  postOrderTraversal(node, callback) {
    if (node) {
      this.postOrderTraversal(node.left, callback);
      this.postOrderTraversal(node.right, callback);
      callback(node);
    }
  }

  height(node) {
    if (!node) return -1;
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  depth(node) {
    let current = this.root;
    let depth = 0;
    while (current && current !== node) {
      depth++;
      current = node.data < current.data ? current.left : current.right;
    }
    return depth;
  }

  isBalanced() {
    return this.checkBalance(this.root) !== -1;
  }

  checkBalance(node) {
    if (!node) return 0;
    const leftHeight = this.checkBalance(node.left);
    const rightHeight = this.checkBalance(node.right);

    if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
      return -1;
    }
    return Math.max(leftHeight, rightHeight) + 1;
  }

  rebalance() {
    const nodes = [];
    this.inOrder(node => nodes.push(node.data));
    this.root = this.buildTree(nodes);
  }
}
const getRandomArray = (length) => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
};

// Create a binary search tree
const array = getRandomArray(10);
const bst = new Tree(array);
console.log("Initial array:", array);

// Check if the tree is balanced
console.log("Is the tree balanced?", bst.isBalanced());

// Print tree traversals
console.log("Level Order:");
bst.levelOrder(node => console.log(node.data));
console.log("In Order:");
bst.inOrder(node => console.log(node.data));
console.log("Pre Order:");
bst.preOrder(node => console.log(node.data));
console.log("Post Order:");
bst.postOrder(node => console.log(node.data));

// Unbalance the tree
const unbalanceValues = [101, 102, 103, 104, 105];
unbalanceValues.forEach(value => bst.insert(value));
console.log("Inserted values to unbalance the tree.");

// Check if the tree is unbalanced
console.log("Is the tree balanced after unbalancing?", bst.isBalanced());

// Rebalance the tree
bst.rebalance();
console.log("Rebalanced the tree.");

// Check if the tree is balanced again
console.log("Is the tree balanced after rebalancing?", bst.isBalanced());

// Print tree traversals after rebalancing
console.log("Level Order after rebalancing:");
bst.levelOrder(node => console.log(node.data));
console.log("In Order after rebalancing:");
bst.inOrder(node => console.log(node.data));
console.log("Pre Order after rebalancing:");
bst.preOrder(node => console.log(node.data));
console.log("Post Order after rebalancing:");
bst.postOrder(node => console.log(node.data));
