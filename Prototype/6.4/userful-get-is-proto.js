const obj = new Array();

console.log(Object.getPrototypeOf(obj) === Array.prototype);
console.log(Array.prototype.isPrototypeOf(obj)); // obj instanceof Array
console.log(obj instanceof Array);
