# 链表
- 单链表
- 双链表
- 循环链表

**重点说一下单链表**
```
class LinkedList{
    // 属性全部写在constructor 中
    constructor(){
        this.length =0;
        this.head =null;
    }
    // 是 LinkedList类中的一个方法
    append(e){
        let node = new Node(e),current;
        // 如果 头结点为空 就是列表中没有节点 所以 添加的节点是第一个节点
        if(this.head === null){
            this.head = node;
        }else{
            // 如果头结点不为空 (1)current是LinkedList列表中的第一项 
            // 只要current.next()不为空 就还有东西在 为空就证明是最后一个了 然后再插进去
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.length ++ ;
    }
    // LinkedList 的移除(第几个)方法 
    // (1)首先要判断是否会越界
    // (2)删除前先保存 然后再删除
    removeAt(position){  // 返回移除的元素
        //检查越界值
        if(position>-1&&position<this.length){ 
            let current = this.head;
            let previous , index =0;
            // head - > current -> current.next
            // 移除第一项
            if(position===0){
                this.head = current.next;
            }else{
                // 循环遍历的意思吗
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                // 关键就是要 previous.next = current.next 中间的current 断开 返回 current的值
                previous.next = current.next;
            }
            // 移除了就长度减少
            this.length --;
            // 返回了删除的元素的值
            return current.element;
        }else{
            // 越界直接返回空 就是不删除了
            return null;
        }
    }

    // 在任意位置插入一个元素
    insert(position,element){ // 返回的是boolean 判断是否插入成功
        // 判断是否越界
        if(position >=0 && position <=this.length){
            let node = new Node(element);
            let current = this.head;
            let previous, index = 0;
            //位置 为0 的地方插入
            if(position===0){
                node.next = current;
                this.head = node ;
            }else{
                // 循环访问列表 找到位置position
                while(index++<position){
                    previous = current;
                    current = current.next;
                }
                // 找到该位置了 就中间的previous current 先断开然后 把node 插进去 
                node.next = current;
                previous.next = node;
            }
            // 插入 以后 长度就会增加
            this.length++;
            return true;
        }else{
            return false;
        }
    }
    toString(){
        // 把元素都打印出来
        let current = this.head;
        let string = ' ';
        while(current){
            string += current.element + " ";
            current = current.next;
        }
        return string;
    }
    indexOf(element){// 返回元素的位置
        let current = this.head;
        let index = 0;
        while(current){
            if(element === current.element){
                return index;
            }
            index ++;
            current = current.next;
        }
        return -1;
    }
}
class Node {
    constructor(e){
        this.element = e;
        this.next = null;
    }
}
```

