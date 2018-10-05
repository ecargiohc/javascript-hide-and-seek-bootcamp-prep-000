function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget() {
  return document.querySelector('.target');
}
function increaseRankBy(n) {
  var list = document.querySelectorAll('.ranked-list');
  for (let i =0; i < list.length; i++) {
   var list2 = list[i].children;
   for (let i = 0; i < list2.length; i++) {
    list2[i].innerHTML = parseInt(list2[i].innerHTML) + n;
   }
  }
}
function deepestChild() {
<<<<<<< HEAD
  var node = document.querySelector('div#grand-node');
  var child = node.children[0]
  
  while(child) {
    node = child 
    child = node.children[0]
  }
  
  return node
=======
  var child = document.querySelector('div#grand-node');
  for (let i=0; i < child.length; i++) {
   child[i].innerHTML = document.querySelectorAll(child); 
  }
>>>>>>> 9d900724c0612ade945e6fb188a653f4dc76b7d6
}