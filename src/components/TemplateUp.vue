<template>
	<div class="template-up">	
		 <h2>通过控制台查看 -- 数组map -- 模板高级用法</h2>
		 <p>1. map方法相对于find，findIndex有一个数组的返回值----放到控制台上看比较明显</p>
		 <p>2. find返回是满足条件的值第一个，findIndex返回是有没有这个值的下标，无返回-1</p>
		 <p>3. 通过 map返回的数组来进行添加元素</p>
		 <div id="createEle">

		 </div>
		  <h2>通过控制台查看 -- 取消转义 -- 2进制</h2>
		  <p>1. 0b会将二进制转化成10进制</p>
		  <p>2. String.raw`hello\nhaha` ---- 取消转义</p>
		  <p>3. Number.isInteger(1.0001) ---- 判断谁不是整数</p>
		  <p>4. Math.pow(3,4) 几次幂 ---- 3*3*3*3</p>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: "template-up",
		data(){
			return {
				msg: "welcome to es6's template upgrage",
				arr: ["hello Ello","hello Kiti","hello Miss"]
			}
		},
		mounted(){
			var arr = [11,12,13,14];
			var arr1 = arr.map(function(val,index,arr){
				console.log(val);
				return val > 12;
			})
			var arr2 = arr.find(function(val,index,arr){
				console.log(val);
				return val > 12;
			})
			var arr3 = arr.findIndex(function(val,index,arr){
				console.log(val);
				return val > 12;
			})

			var eles = `
				<div>
					${arr.map((val,index,arr)=>{
						return `<p>${val}</p>`
					}).join("")}
				</div>
			`
			createEle.innerHTML = eles;

			// map返回的数组来进行添加元素

			// 3<<5 2的5次方*3
			// (1e2<<3)+0b11001000   2的3次方
			// 0b回将二进制转化成10进制
			// 1e2 10的平方
			console.log((1e2<<3)+0b11001000)

			// 取消转义字符
			var str = "hello\nhaha";
			console.log(str);
			console.log(String.raw`hello\nhaha`);


			// 判断是不是整数
			console.info(Number.isInteger(1.0001));
			console.info(Number.isInteger(1.00000));

			// isNaN parseInt parseFloat  在ES6中成为Number方法了，因为每次使用window的时候占用资源，window的方法太多

			// Number.isNaN 将ES5中isNaN将字符串NaN强制转化成数字类型校验 成为true Number.isNaN纠正了

			console.info("Number's isNaN",Number.isNaN("isNaN"));
			console.info("windwo's isNaN",isNaN(isNaN));

			// Math.pow(4,4) 几次幂


		}
	}
</script>
<style scoped="scoped">
	
</style>