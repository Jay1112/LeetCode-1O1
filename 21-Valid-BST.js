// TC : O(N)
// SC : O(H)

function checkBstRange(node, min, max) {
  if (!node) {
    return true;
  }
  if (min > node.data || node.data > max) {
    return false;
  }

  let left = checkBstRange(node.left, min, node.data - 1);
  let right = checkBstRange(node.right, node.data + 1, max);

  return left && right;
}

module.exports = {
  isValidBST: function (A) {
    return checkBstRange(A, 0, Infinity) ? 1 : 0;
  },
};
