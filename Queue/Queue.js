// 使用数组实现 Queue类
function Queue(){
    var queue = [ ];

    // 进入队列
    this.enterQueue = function(e){
        queue.push(e);
    }

    // 出队列 返回最先出队列的元素
    this.dequeue = function(){
        return queue.pop();
    }

    // 返回最后一个进队列的元素
    this.front = function(){
        return queue[0];
    }
    this.isEmpty = function(){
        // 返回的boolean类型的
        return queue.length ==0;
    }

    this.clear = function(){
        queue = [ ]
    }

    this.size = function(){
        return queue.length;
    }

    this.print = function(){
        console.log(queue.toString());
    }
}
exports.Queue = Queue;