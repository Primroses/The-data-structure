# 集合
**自己封装一个**
```
class Set{
    constructor(){
        this.set = {};
    }
    // 返回 更好的实现方式
    has(value){
        // 判断value 在集合中是否存在
        return value in this.set;
    }
    add(value){
        // 如果不存在就插入
        if(!this.has(value)){
            this.set[value] = value;
            return value;
        }
        // 存在就返回false
        return false;
    }   
    remove(value){
        if(this.has(value)){
            delete this.set[value];
            return true;
        }
        return false;
    }
    clear(){
        this.set = { };
    }
    size(){
        // 浏览器兼容性问题
        return Object.keys(this.set).length;
    }
    values(){
        // 提取所有的set 中的属性(就是属性值) ，并以数组的形式返回
        return Object.keys(this.set);
    }

    // 可以兼容其他浏览器
    valuesLegacy(){
        let keys = [];
        for(let key in this.set){
            keys.push(key);
        }
        return keys;
    }
    // 集合的基本操作
    // 并集
    union(otherset){
        let unionSet = new Set();
        let values = this.values();
        for(let i = 0;i<values.length;i++){
            // add 方法已经判断了如果里面没有的才加 有的话就不加
            unionSet.add(values[i]);
        }
        // 只需要将两个集合的值插入 如果 有就不用插  add方法帮我们解决了这个问题
        values = otherset.values();
        for(var i=0;i<values.length;i++){
            unionSet.add(values[i]);
        }
        return unionSet;
    }
    // 交集
    intersection(otherSet){
        let intersectionSet = new Set();
        // 调用这个方法的对象 就是this
        let values = this.values();
        for(let i=0;i<values.length;i++){
            // 如果有就添加
            if(otherSet.has(values[i])){
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    }
    // 差集
    difference(otherSet){
        var differenceSet = new Set();
        let values = this.values();
        for(let i =0;i<values.length;i++){
            if(!otherSet.has(values[i])){
                differenceSet.add(values[i])
            }
        }
        return differenceSet;
    }
    // 子集(判断是不是子集)
    subet(otherset){
        if(this.size() > otherset.size()){
            return false;
        }else{
            var values = this.values();
            for(let i=0;i<values.length;i++){
                if(!otherset.has(values[i])){
                    return false
                }
            }
            return true;
        }
    }
}

```