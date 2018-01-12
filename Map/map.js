class Map{
    // 私有属性 一个对象
    constructor(){
        this.map = {};
    }
    // has 方法 判断是否存在某个值
    has(key){
        // in 操作符可以验证给定值是否是this.map对象中的属性
        return key in this.map;
    }
    // 直接将value 设置为对象map 的 key属性 的值
    set(key,value){
        this.map[key] = value;
    }
    // 移除某个属性？先遍历找到该属性 再删除
    remove(key){
        if(this.has(key)){
            delete this.map[key];
            return true;
        }else{
            return false;
        }
    }
    get(value){
        // 判断是否存在这个值 如果存在就返回 如果不存在就 返回undefined
        return this.has[key] ? this.map[key]:undefined;
    }
    // 返回值的 方法
    values(){
        let values = [] ;
        for(let k in this.map){
            // 对象原型也会包含对象的其他属性 所以我们只需要存在于map里面的属性
            if(this.has(k)){
                // 对象没有push 方法？
                values.push(this.map[k]);
            }
        }
        return values;
    }
    // 返回值的方法
    keys(){
        let keys =[];
        for(let k in this.map){
            if(this.has(k)){
                keys.push(k)
            }
        }
        return keys;
    }

    getMap(){
        return this.map;
    }

}

// 下面是实现一个 map;
var  myMap = new Map();
myMap.set('name','黄佩华');
myMap.set('age','99');
myMap.set('class','信管1163');
myMap.set('skill','前端');

console.log(myMap.getMap())
console.log(myMap.values())
console.log(myMap.keys())

