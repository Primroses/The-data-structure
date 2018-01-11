var Queue = require('./Queue');

function QueueElement(element,priority){
    this.element = element;
    this.priority = priority;
}

function PriorityQueue(){
    var queue = [ ];

    this.print = function(){
        console.log(queue.toString());
    }

    this.enqueue = function(element,priority){
        var qe = new QueueElement(element,priority);
        if(queue.length){
            queue.push(qe);
        }else{
            var added = false;
            for(var i =0;i<queue.length;i++){
                if(qe.priority<queue[i].priority){
                    qe.splice(i,0,qe);
                    added = true;
                    break;
                }
            }
            if(!added){
                queue.push(qe);
            }
        }
    }
}

var pq = new PriorityQueue();
pq.enqueue("John",2);
pq.enqueue("Jack",1);
pq.enqueue("Camila",1);
// console.log(pq.toString());