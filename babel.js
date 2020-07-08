// babel.transform(require('./decorator'), {
//     plugins: ["transform-decorators"]
// })

const babel = require('babel-core')
// const t = require('babel-types')

const code = `@testable
class MyTestableClass {
  // ...
}

function testable(target) {
  target.isTestable = true;
}

MyTestableClass.isTestable // true`;

// const visitor = {
//     BinaryExpression(path) {
//         if (path.node.operator === '>') {
//             path.replaceWith(
//                 t.binaryExpression(
//                     '<=',
//                     path.node.left,
//                     path.node.right
//                 )
//             );
//         }
//     }
// }

const result = babel.transform(code, {
    plugins: ["transform-decorators-legacy"]
})

console.log(result.code)