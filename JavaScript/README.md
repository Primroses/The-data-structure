# JavaScript

## 变量
变量保存的数据在需要时设置，更新或提取。赋值给变量的值都有对应的类型。
>JavaScript的数据类型有 **数字** **字符串** **布尔值** **函数和对象** **undefined和null**

### 举个例子
```
**全部是用var声明**
var num = 1 ; // {1}
// 声明了 num =1 ;(数字类型)

num = 3; // {2}
// 更新了已有的变量 JavaScript**不是强类型的语言，这意味着你可以声明一个变量并初始
化成一个数字类型的值，然后把它更新成字符串或者其他类型的值**

var price = 1.5;//{3}
// 声明了一个数字类型的变量 十进制的浮点型

var name = "Tom"// {4}
//声明一个字符串

var trueValue = "true" //{5}
// 声明一个布尔值

var nullVar = null // {6}
// 声明一个null

var und ; {7}
// 声明一个undefined 变量 **undefind是表示变量已被声明但尚未赋值，null是表示没有值**
```

## 变量和作用域
> 作用域指在编写的算法函数中，我们能访问的变量(在使用时，函数作用域也可以是一个函数) 有本地变量和全局变量两种

## 真值和假值
> JavaScript 中true和false有些复杂。如**Tom**这样的字符串，也可以看做true
```
undefined  ---  false
null       ---  false 
布尔值      ---  true or false
数字        ---  +0 /-0 和NaN 都是false 其他都是true
字符串      ---  字符串是空 就是false 其他都是true
对象        ---  true  
```

## 面向对象编程
>JavaScript里的对象就是普通的名值对的集合，创建一个普通对象有两种方式。
- ```var obj = new Object()```
- ```var obj = { } ```

>在面向对象编程(OOP)中，对象是类的实例。一个类定义了对象的特征。
```
function Book(title,pages,isbn){
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    // 在这个类中 定义函数
    this.printIsbn = function(){
        console.log(this.isbn)
    }
}
// 在Book类的原型上添加了 printTitle 方法
Book.prototype.printTitle = function(){
    console.log(this.title);
}

// 实例化这个类
var book = new Book('title','page','isbn');
```
**使用原型方法可以节约内存和降低实例化的开销** printTitle 只会创建一次，在Book类实例中共享这个方法
**如果是在类的内部结构声明，每个类都会有一份该方法的副本**
- 公共方法采用基于原型的方法
- 私有方法定义在内部声明方式