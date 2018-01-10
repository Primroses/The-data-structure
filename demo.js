for(var i = 1;i<10;i++){
	// console.log("Hello World"+i);
}

function fun(val){
	if(val==1){
		// 递归最后还是要变成1 不然就不能成功了
		return 0;
	}else {
		return val*fun(val-1);
	}
}
console.log(fun(10))