var Stack = require("./Stack.js")
// 导入 类 实例化一个栈
var stack = new Stack.Stack();

// 实现十进制到二进制
function div2(decNumber){
    var stack = new Stack.Stack(),rem,bs = '';
    while(decNumber>0){
        rem.parseInt(decNumber,2);
        stack.push(rem);
    }
    while(!stack.isEmpty()){
        bs+=stack.pop.toString();
    }
    return bs;
}
console.log(div2(10));