# 数组
> 数组是存储一系列同一种数据结构类型的值。但在JavaScript里，也可以在数组存放不同类型的值。(但是一般实践都不建议)

## 创建和初始化数组
```
- var arr = new Array();
// 用new 关键字 声明并初始化一个Array(数组)
- var arr = new Array(7);
// 还可以声明指定长度的
- var arr = new Array('1','2','3','4','5','6','7');
// 还可以把指定参数传递给构造器中
```
**其实用new 创建数组并不是最好的方式。在JavaScript中只需要[]就可以了**
- var arr = [];


## 添加和删除元素
```
(1)在数组的最后一位中直接添加
var number = [1,2,3];
number[number.length]= 4;
// [1,2,3,4]
(2)push的方法 直接是在最后一位中添加
number.push(5)
// [1,2,3,4,5]
```
- unshift 方法
可以直接把数值插入数组的首位
- shift 方法
把数组第一位删除的了

我们可以使用splice方法，简单的通过指定位置/索引，就可以删除对应位置和数量的元素。删除以后可以再插入
```
number.splice(1,2) 
// [1,4,5]

number.splice(1,2,6,7)
// [1,6,7,4,5]
```

## 二维和多维数组
**JavaScript 只支持一维数组，并不支持矩阵**
- 举个二维数组的例子
```
var arr = [];
 arr[0] = [];
arr[0][0] = 1;
arr[0][1] = 2;
 arr[1] = [];
arr[1][0] = 3;
arr[1][1] = 4;

 for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr[i].length;j++){
        console.log(arr[i][j]);
    }    
}
// 1 2 3 4
``` 