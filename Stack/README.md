# 栈
> 栈是一种遵从先进先出(LILO)原则的有序集合。新添加的或等待删除的元素都保存在栈的末尾，称为栈顶，另一端叫做栈底，在栈里，新元素都靠近栈顶，旧元素都靠近栈底

## 栈的声明
**我们将创建一个类来表示栈**

```
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
        return stack.length==0?true:false;
    }
    // 返回 栈的长度
    this.size = function(){
        return stack.length;
    }
    //  清空栈
    this.clear = function(){
        stack = [ ];
    }
    // 打印栈
    this.print = function(){
        console.log(stack.toString());
    }
}

```

