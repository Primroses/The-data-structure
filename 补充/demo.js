// 最少硬币找零问题
function MinCoinChange(coins){
    // 接受 coins 的参数
    var coins = coins;
    // 用来缓存 不用重复计算值
    var cache = {};

    this.makeChange = function(amount){
        var me = this;
        // 不为正 就返回空数组
        if(!amount){
            return [];
        }
        if(cache[amount]){
            // 这里是缓存
            return cache[amount];
        }
        var min = [], newMin,newAmount;
        for(var i =0;i<coins.length;i++){
            var coin = coins[i];
            newAmount = amount - coin;
            if(newAmount >= 0){
                newMin = me.makeChange(newAmount);
            }
            if(
                newAmount >=0 && 
                (newMin.length < min.length-1|| !min.length)&&
                (newMin.length || !newAmount)
            ){
                min = [coin].concat(newMin);
                console.log(`new Min ${min} for ${amount}`);
            }
        }
        return (cache[amount] = min);
    };
}
// var minCoinChange = new MinCoinChange([1,5,10,25]);
// console.log(minCoinChange.makeChange(36)) ;

//贪心算法 (并不是所有都可以作为最优解的)
// 局部最优 来推算 全局最优
function MinCoinChangeA(coins){
    var coins = coins;
    this.makeChangeA = function(amount){
        var change = [],
        total=0;
        for(var i=coins.length;i>=0;i--){
            var coin = coins[i];
            while(total + coin <= amount){
                change.push(coin);
                total += coin;
            }
        }
        return change;
    }
}
var minCoinChangeA = new MinCoinChangeA([1,5,10,25]);
console.log(minCoinChangeA.makeChangeA(36)) ;