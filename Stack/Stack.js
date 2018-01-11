// 从 零封装一个栈类
function Stack(){
    // 初始化 一个数组来存放 栈中的数据 
    // 栈 是从下面开始往上数
    var stack = [];
    // push 方法 是用来 向栈中 添加一个数据
    this.push = function(e){
        stack.push(e);
    }
    // 将栈的第一个 移除并返回
    this.pop = function(e){
        return stack.pop();
    }
    // 返回栈的第一个数据
    this.peek = function(){
        return stack[length-1];
    }
    // 判断是否为空
    this.isEmpty = function(){
        // 返回类型是 boolean? 返回 是否等于 0
        return stack.length==0;
    }
    // 返回 栈的长度
    this.size = function(){
        return stack.length;
    }
    //  清空数组
    this.clear = function(){
        stack = [ ];
    }
    // 打印栈
    this.print = function(){
        console.log(stack.toString());
    }
}

var stack = new Stack();
// 先判断一下 栈是否为空
console.log(stack.isEmpty());