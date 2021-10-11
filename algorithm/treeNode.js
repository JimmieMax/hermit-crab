class TreeNode {
  constructor(val) {
    this.val = val;
    //左孩子
    this.left = null;
    //右孩子
    this.right = null;
  }
}

function maxDepth(node) {
  if (node === null) {
    return 0;
  }
  const left = maxDepth(node.left);
  const right = maxDepth(node.right);
  return Math.max(left, right) + 1;
}

function minDepth(root) {
  if (root === null) {
    return 0;
  }
  if (root.left === null && root.right === null) {
    return 1;
  }
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
}

function numOfTreeNode(root) {
  if (root === null) {
    return 0;
  }
  return numOfTreeNode(root.left) + numOfTreeNode(root.right) + 1;
}

function numsOfTreeNodeLeaf(root) {
  if (root === null) {
    return 0;
  }
  if (root.left === null && root.right === null) {
    return 1;
  }
  return numsOfTreeNodeLeaf(root.left) + numsOfTreeNodeLeaf(root.right);
}

function numsOfkLevelTreeNode(root, k) {
  if (root === null || k < 1) {
    return 0;
  }
  if (k === 1) {
    return 1;
  }
  return (
    numsOfkLevelTreeNode(root.left, k - 1) +
    numsOfkLevelTreeNode(root.right, k - 1)
  );
}

function maxDepth2(node) {
  if (node === null) {
    return 0;
  }
  let left = maxDepth2(node.left);
  let right = maxDepth2(node.right);
  if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
    return -1;
  }
  return Math.max(left, right) + 1;
}

function isBalanced(node) {
  return maxDepth2(node) !== -1;
}

let aTree = new TreeNode("A");
aTree.left = new TreeNode("B");
// aTree.right = new TreeNode("C");
// aTree.right.left = new TreeNode("E");

console.log("aTree", aTree);

console.log("maxDeath", maxDepth(aTree));
console.log("minDeath", minDepth(aTree));
console.log("numOfTreeNode", numOfTreeNode(aTree));
console.log("numsOfTreeNodeLeaf", numsOfTreeNodeLeaf(aTree));
console.log("numsOfkLevelTreeNode", numsOfkLevelTreeNode(aTree, 3));
console.log("isBalanced", isBalanced(aTree));
