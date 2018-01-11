// 数组的排序
var numbers = [1,2,3,4,10,11,12,13,14];
// 反过来排序
// numbers.reverse();
// numbers.forEach(function(x){
//     console.log(x)
// })
// [14,13,12,11,10,4,3,2,1]

console.log("--------------")
// sort (默认成字符串来比较)
numbers.sort();
// numbers.forEach(function(x){
//     console.log(x)
// })
// [1,10,11,12,13,14,2,3,4]

// 可以传入一个 比较函数
numbers.sort(function(a,b){
    return b-a;
})
numbers.forEach(function(x){
    console.log(x)
})

// 自定义排序(排序对象中的属性)
var friends = [
    {name : 'A',  age:20},
    {name : 'B' , age:25},
    {name : 'C' , age:15}
]
function compare(a,b){
    return a.age>b.age?1:-1
}
console.log(friends.sort(compare))
