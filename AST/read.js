const recast = require('recast')

recast.run( function(ast, printSource){
    printSource(ast)
})

recast.run(function(ast, printSource) {
  recast.visit(ast, {
      visitExpressionStatement: function({node}) {
        console.log(node)
        return false
      }
    });
});

const TNT = recast.types.namedTypes

recast.run(function(ast, printSource) {
  recast.visit(ast, {
      visitExpressionStatement: function(path) {
        const node = path.value
        // 判断是否为ExpressionStatement，正确则输出一行字。
        if(TNT.ExpressionStatement.check(node)){
          console.log('这是一个ExpressionStatement')
        }
        this.traverse(path);
      }
    });
});

recast.run(function(ast, printSource) {
    recast.visit(ast, {
        visitExpressionStatement: function(path) {
          const node = path.node
          // 判断是否为ExpressionStatement，正确不输出，错误则全局报错
          TNT.ExpressionStatement.assert(node)
          this.traverse(path);
        }
      });
  });