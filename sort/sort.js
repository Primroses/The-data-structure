function ArrayList(){
    var array = [];
    this.insert = function(item){
        this.array.push(item)
    }
    this.toString = function(){
        return array.join();
    }
    this.bubbleSort =function(){
        var length = this.array.length();
        // 外层虚幻控制多少轮
        for(var i=0;i<length;i++){
            // 内存循环控制每次两个对比后的 移动关系
            for(var j=0;j<length-1;j++){
                if(this.array[j]>this.array[j+1]){
                    swap(j,j+1);
                }
            }

        }
    }

    // 改进后的冒泡排序
    this.modidfiedBubbleSort = function(){
        var length = array.length;
        for(var i=0;i<array.length;i++){
            for(var j=0;j<length-1-i;j++){
                if(array[j]>array[j+1]){
                    swap(j,j+1);
                }
            }
        }
    }

    // 选择排序
    // 找到数据结构中最小值并放在第一位，接着找到第二小的值并将其放在第二位。
    this.selectionSort = function(){
        var length = array.length,indexMin;
        for(var i=0;i<length-1;i++){
            indexMin = i;
            for(var j=0;j<length;j++){
                if(array[indexMin] > array[j]){
                    indexMin = j;
                }
            }
            if(i!= indexMin){
                swap(i,indexMin);
            }
        }
    }
    // 插入排序
    // 默认已经有了第一项，然后和第二项比较，然后比较后应该放前就放前 放后就放后
    this.insertionSort = function(){
        var length = array.length,temp,j;
        for(var i=1;i<length ;i++){
            j = i;
            temp = array[i];
            while(j>0&&array[j-1]){
                array[j] = array[j-1];
                j--;
            }
            array[j]= temp;
        }
    }//比选择排序和冒泡排序性能要好
    var swap = function(a,b){
        var aux = this.array[a];
        this.array[a] = this.array[b];
        this.array[b] = aux;
    }
    // 归并排序 原始数组切分成比较小的数组，然后每个小数组只有一个位置。然后小数组归并成大的
    // 还是要递归
    this,mergeSort = function(){
        // 递归
        array = mergerSortRec(array);
    }
    // 类中私有函数
    var mergerSortRec = function(array){
        var length = array.length;
        if(length == 1) {
            return array;
        }
        var mid = Math.floor(length/2),
        left = array.splic(0,mid);
        right = array.splice(mid,length);
        return merge(mergerSortRec(left),mergerSortRec(right));
    }
    this.bs = function(item){
        var low=0,high = this.array.length-1,mid;
        while(low <= high){
            // 取中间数值
            mid = Math.floor((low+high)/2);
            // 数组中间的值
            var element = this.array[mid];
            if(element  < item ){
                high = mid -1;
            }else if(element  > item ){
                low = mid + 1;
            }else{
                return mid;
            }
        }
        // 没有找到就返回-1;
        return -1;
    }
}

var arr = new Array();
// arr.insert(1);
// arr.insert(8);
// arr.insert(4);
// arr.insert(6);
// arr.insert(2);
// arr.insert(9);
// arr.insert(7);
// arr.insert(5);
console.log(typeof arr)
console.log(arr.toString());
// arr.bubbleSort();
console.log(arr.toString());
