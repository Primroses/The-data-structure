class Set{
    constructor(){
        this.set = {};
    }
    // 返回 更好的实现方式
    has(value){
        // 判断value 在集合中是否存在
        return value in set;
    }
    add(value){
        // 如果不存在就插入
        if(!this.has(value)){
            set[value] = value;
            return value;
        }
        // 存在就返回false
        return false;
    }   
    remove(value){
        if(this.has(value)){
            delete set[value];
            return true;
        }
        return false;
    }
    clear(){
        this.set = { };
    }
    size(){
        // 浏览器兼容性问题
        return Object.keys(set).length;
    }
    values(){
        return Object.keys(set);
    }

    union(otherset){
        let unionSet = new Set();
        let values = this.values();
        for(let i = 0;i<values.length;i++){
            // add 方法已经判断了如果里面没有的才加 有的话就不加
            unionSet.add(values[i]);
        }
        values = otherset.values();
        for(var i=0;i<values.length;i++){
            unionSet.add(values[i]);
        }
        return unionSet;
    }
}

var set = new Set();
set.add(1);
set.add(2); 
// set 的数据结构 是 键值对 键等于值的
console.log(set) 
// 集合的操作
var set1 = new Set();
set1.add(1);
set1.add(2);
set1.add(3);
var set2 = new Set();
set1.add(2);
set1.add(3);
set1.add(4);
var set12 = set1.union(set2);
console.log(set12.values());