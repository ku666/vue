<template>
  <div class="anonymous">
      <h2>通过控制台查看 -- 箭头函数 ---- 延展参数</h2>
      <p>1. let x = x => x; ---- 一个参数</p>
      <p>2. let y = (c = 10,b = 6,a = 5) =>{return {a: a,b: b,c: c}} ---- 又返回值的多个参数 </p>
      <h2>扩展运算符</h2>
      <p>1. spread = (y,...x)=> {} spread(1,2,34,5) ---- ...将传递的arguments转化成数组</p>
      <p>2. [...arr, ...arr1, ...arr2]; ---- ...扩展运算符可以拼接数组</p>
      <h2>生成器函数</h2>
      <p>1. function* 函数名(){} ---- function后面加*</p>
      <p>2. 函数名.next(); ---- 进行调用，加.value获取里面的值 ---- 要是想连续调用需要给函数命名</p>
  </div>
</template>

<script>
export default {
  name: 'anonymous',
  data () {
    return {
      msg: "welcome to webpack's es6"

    }
  },
  mounted(){
   	let x = x => x;
   	console.log(x);

   	let y = (c = 10,b = 6,a = 5) =>{
   		return {
   			a: a,
   			b: b,
   			c: c
   		}
   	}

   	console.log(y());

	let fun = (a,b,c) =>{
		console.log("1111111");
   	}
   	fun();
   	// 等价于：
   	let fun1 = function(x){
		return x;
	};

	console.log("------------- 扩展运算符 ------------");

	// 1. ...将传递的arguments转化成数组
	let spread = (y,...x)=> {
		console.log(Object.prototype.toString.call(x));
		console.log(x,y);
	}
	spread(1,2,3,4,5);

	// 2. ...扩展运算符可以拼接数组
	let arr = [1,.2,3,4];
	let arr1 = [2,3,4,5];
	let arr2 = ["haha","xixi"];
	let newArr = [...arr, ...arr1,...arr2];
	console.log(newArr);

	console.log("---------- 生成器函数 -----------");

	function* create() {
		yield "hello this is 生成器函数";
		yield function(){
			console.log("this is child yield");
		}
	}
	var cr = create();
	console.log(cr.next().value);
	console.log(cr.next());
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
