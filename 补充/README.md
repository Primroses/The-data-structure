# 时间复杂度
> 描述算法的性能和复杂程度
```
    O(1)        ---  常数
    O(log(n))   ---  对数
    O(log(n)c)  ---  对数多项式
    O(n)        ---  线性的
    O(n²)       ---  二次的
    O(nⁿ)       ---  多项式的
    O(cⁿ)       ---  指数
```

- 一、O(1)
```
function increment(num){
    return ++num;
}
```
假设运行 increament函数 执行时间是X，参数换了但是执行的时间还是X与参数无关，所以increment函数的性能都是一样的。所以这样的函数的时间复杂度是O(1);
- 二、O(n)
```
// 顺序搜索的实现
function Search(array,item){
    for(var i=0;i<array.length;i++){
        if(item === array[i]){
            return i;
        }
    }
    return -1;
}
```
**假设数组为[0,1,2,3,4,...10]**
- (1)如果搜索元素是1,那么第一次就能搜索，开销就是1
- (2)如果搜索元素是11，遍历所有都无法找到所以找不到返回-1如果执行(1)开销是1，那么10次就是10，10倍是相对的
- (3)所以上面函数的时间复杂度是O(n) n是输入数组的大小

- 三、O(n²)
```
function swap(array,index1,index2){
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
}

function bubbleSort(array){
    var length = array.length;
    for(var i=0;i<length;i++){
        for(var j=0;j<length-1;j++){
            if(array[j] > array[j+1]){
                swap(array,j,j+1);
            }
        }
    }
}
```
**时间复杂度O(n)只有一层循环，而O(n²)有双层嵌套循环。如果有三层遍历数组的嵌套循环，它的时间复杂度很可能就是O(n³)**

