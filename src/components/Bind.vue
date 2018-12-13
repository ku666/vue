<template>
	<div class="bind">
		<h2>bind 和 call 绑定 --- 继承</h2>
		<p>1. bind 第一个参数是传递给调用的函数的this指向,第二个参数是传递过去的参数值,bind需要再调用下</p>
		<p>2. call 与bind不一样的地方是不需要再次调用了 ---- show.call(this, 4, 5)</p>
		<p>3. apply与call不一样的地方是传参的时候传递多个参数使用数组 ---- show.apply(this, [4, 5]);</p>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: "bind",
		data(){
			return {
				msg: "this is bind"
			}
		},
		mounted(){
			function show(a,b){
				console.log(this);
				console.log("a:",a,"b:",b)
			}
			//show.bind(window)(); // 通过bind进行绑定
			//show.call(this);	 // 通过call进行绑定
			//show.call(this, 4, 5);	 // 通过call进行绑定
			show.apply(this, [4, 5]);	 // 通过call进行绑定

			console.info(Object.prototype.toString.call([]));// 通过调用Object中的原型来使用
		}
	}
</script>
<style type="text/css">
	
</style>