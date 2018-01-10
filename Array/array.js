// 求斐波那契数列的前20个数字


// var fib = [];
// fib[1] = 1;
// fib[2] = 2;
// for(var i=3; i<20;i++){
//     fib[i] = fib[i-1] + fib[i-2];
// }
// for(var i=1;i<fib.length;i++){
//     console.log(fib[i])
// }


// // 在数组的最后一位直接加上值
// var number = [1,2,3];
// number[number.length]= 4;
// console.log(number)
// // 还可以push (在最后面添加上)
// number.push(5)
// console.log(number);
// number.shift()
// console.log(number);
// number.unshift(0)
// console.log(number);
// number.splice(1,2)
// console.log(number);

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
