class HashTable{
    //私有属性
    constructor(){
        this.table = [];
    }
    // 散列表的私有方法 散列函数
    loseHashCode(key){
        var hash = 0;
        for(var i=0;i<key.length;i++){
            hash +=key.charCodeAt(i);
        }
        return hash%37;
    }

    put(key,value){
        let position = this.loseHashCode(key);
        // console.log(position+' -- '+key);
        // this.table[position] =value;
        if(this.table[position] == undefined){
            this.table[position] = new LinkedList();
        }
        this.table[position].append(new ValuePair(key.value));
    }

    get(key){
        // return this.table[this.loseHashCode(key)];
        let position = loseHashCode(key);
        if(this.table[position]!== undefined){
            let current = this.table[position].getHead();
            // 遍历链表来寻找键/值
            while(current.next){
                if(current.element.key===key){
                    return current.element.value;
                }
                current = current.next;
            }
            // 检查元素在链表的第一个或者是最后一个情况 不用进入循环中
            if(current.element.key === key){
                return current.element.value;
            }
        }
        return undefined;
    }

    remove(key){
        // this.table[this.loseHashCode(key)] = undefined;
        let position = loseHashCode(key);
        if(this.table[position] !== undefined){
            // 拿到头结点？
            let current = this.table[position].getHead();
            while(current.next){
                // 循环遍历
                if(current.element.key===key){
                    this.table[position].remove(current.element);
                    if(this.table[position].isEmpty()){
                        this.table[position] = undefined;
                    }
                    return true;
                }
                current = current.next;
            }
            // 检查是否是最后一个或者是第一个元素
            if(current.element.key===key){
                this.table[position].remove(current.element);
                if(this.table[position].isEmpty()){
                    table[position] = undefined;
                }
            }
        }
        return false;
    }

    print(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]!==undefined){
                console.log(i+"---"+this.table[i]);
            }
        }
    }

    // 解决冲突的三种方法:(1)分离连接 (2)线性探测 (3)双散列法
    //(1)
    ValuePair(key,value){
        this.key = key;
        this.value = value;
        this.toString=function(){
            return `${this.key} - ${this.value}`;
        }
    }

    // 比较好的散列函数
    djb2HashCode(key){
        var hash = 5381;
        for(let i=0;i<key.length;i++){
            hash = hash *33 +key.charCodeAt(i);
        }
        return hash%1013;
    }
}

var hash = new HashTable();

hash.print();
// console.log(hash)