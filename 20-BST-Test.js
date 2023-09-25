const {obj} = require('./BinarySearchTree');

obj.insert(20);
obj.insert(10);
obj.insert(30);
obj.insert(15);
obj.insert(25);
obj.insert(50);
obj.insert(22);
obj.insert(40);
obj.insert(60);

obj.print();

obj.delete(20);

const res = obj.getRootData();
console.log(res);

obj.print();