function Graph(){
    // 存放所有节点的名字
    let vertices = [];
    // 存放邻接表
    let adjList = new Map();

    this.addVertex = function(v){
        // 顶点V 作为键
        vertices.push(v);
        adjList.set(v,[]);
    }

    this.addEdge = function(v,w){
        // 实现有向图 
        adjList.get(v).push(w);
        adjList.get(w).push(v);
        // 两个就实现无向图
    }

    this.toString= function(){
        let s = '';
        for(let i=0;i<vertices.length;i++){
            s +=vertices[i] + '->';
            let neighbors = adjList.get(vertices[i]);
            for(let j=0;j<neighbors.length;j++){
                s +=neighbors[j]+ '';
            }
            s +='\n';
        }
        return s;
    }
}

let graph = new Graph();
let myVertices = ['A','B','C','E','F','G','H','I'];
for(let i=0;i<myVertices.length;i++){
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('A','D');
graph.addEdge('C','D');
graph.addEdge('C','G');
graph.addEdge('D','G');
graph.addEdge('D','H');
graph.addEdge('B','E');
graph.addEdge('B','F');
graph.addEdge('E','I');

console.log(graph.toString())