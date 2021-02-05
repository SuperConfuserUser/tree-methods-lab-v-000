function inOrder(node) {
  if (node.left) {
    inOrder(node.left)
  }
  console.log(node.data);
  if (node.right) {
    inOrder(node.right);
  }
}

function findOrAdd(root, node) {
  if (node.data < root.data) {
    if (root.left) {
      findOrAdd(root.left, node)
    } else {
      root.left = node;
    }
  } else if (node.data > root.data) {
    if (root.right) {
      findOrAdd(root.right, node);
    } else {
      root.right = node;
    }
  }
  return true;
}

function order(currentNode, ordered) {
  if (currentNode.left) {
    order(currentNode.left);
  }
  order.push(currentNode);
  if (currentNode.right) {
    order(currentNode.right);
  } else {
    return ordered;
  }
}
  
function max(node) {

  ordered(node, []);
  
  return { data: ordered(node, []) };
}