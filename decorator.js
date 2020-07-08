// @testable
// class MyTestableClass {
//   // ...
// }

// function testable(target) {
//   target.isTestable = true;
// }

// MyTestableClass.isTestable // true

var _class;

let MyTestableClass = testable(_class = class MyTestableClass {
  // ...
}) || _class;

function testable(target) {
  target.isTestable = true;
}
console.log(MyTestableClass.isTestable)