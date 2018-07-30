// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  // your code here
  var elementsWithClassName = [];
  var node = node || document.body;
  
  if (node.classList.contains(className)){
    elementsWithClassName.push(node);
  }
  
  if (node.children.length > 0) {
    for (var i = 0; i < node.children.length; i++) {
        var add = getElementsByClassName(className , node.children[i]);
        console.log(add);
        elementsWithClassName = elementsWithClassName.concat(add);
    }
  }
 return elementsWithClassName;

};
