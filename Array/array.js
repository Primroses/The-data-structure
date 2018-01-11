// 求斐波那契数列的前20个数字

var fib = [];
fib[1] = 1;
fib[2] = 2;
for(var i=3; i<20;i++){
    fib[i] = fib[i-1] + fib[i-2];
}
for(var i=1;i<fib.length;i++){
    console.log(fib[i])
}


// // 在数组的最后一位直接加上值
var number = [1,2,3];
number[number.length]= 4;
console.log(number)
// 还可以push (在最后面添加上)
number.push(5)
console.log(number);
number.shift()
console.log(number);
number.unshift(0)
console.log(number);
number.splice(1,2)
console.log(number);

// 二维数组例子
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




//  在1-15中找到整除2 然后输出true 如果不是就输入false
function isEven(x){
    console.log(x);
    if(x%2==0){
        console.log(true)
    }else{
        console.log(false)
    }
}

for(i=1;i<16;i++){
    isEven(i);
    console.log("--------------")
}

var isEven = function(x){
    console.log(x);
    return x%2==0?true:false;
}
var number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// every 是每一项是true 才是true 有一项不是 就返回false
number.every(isEven);

// some 直到有一个返回true 就可以返回对应值
number.some(isEven);

// 遍历了整个数组
number.forEach(function(x){
    console.log("--------------")
    console.log(x%2==0)
})

// map 和 filter 两个方法(返回新数组的遍历方法)


var Mymap = number.map(isEven)
for(var i =0;i<Mymap.length;i++){
    console.log(Mymap[i])
}
// map 返回运行函数之后的数组
// [true,false,true,false,true,false,true.....]

var Myfilter = number.filter(isEven);
Myfilter.forEach(function(x){
    console.log(x);
})
// [2,4,6,8,10,12,14]
// 过滤不满足的 返回满足function条件的
// filter 返回 运行后返回true元素的数组