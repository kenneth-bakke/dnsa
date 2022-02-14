const Tree = function(v, l, r) {
  this.val = (v ? v : undefined);
  this.left = (l ? l : undefined);
  this.right = (r ? r : undefined);
}

// short solution
var maxDepth = function(root) {
  if (!root) {
    return 0;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

// starting solution
// var maxDepth = function(root, depth) {
//   depth = depth || 1;

//   if (root.left) {
//       depth = maxDepth(root.left, depth + 1);
//   }

//   if (root.right) {
//       let tDepth = maxDepth(root.right, depth + 1);
//       if (tDepth > depth) {
//           depth = tDepth
//       }
//   }

//   return depth;
// };

let tree =
new Tree(3,
  new Tree(9, null, null),
  new Tree(20,
    new Tree(15, null, null),
    new Tree(7, null, null),
    ),
  )

console.log(maxDepth(tree));