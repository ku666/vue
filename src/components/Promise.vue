<template>
	<div class="promise">
		<h2>详细代码请到控制台查看</h2>
		<p>1. new Promise().then().catch()</p>
		<p>2. Promise.race([new Promise(),new Promise()]).then().catch --- 竞速谁快执行谁</p>
		<p>3. Promise.all([new Promise(),new Promise()]).then().catch --- 要不就是全部成功  要不就是失败 同步运行到最后一个一起出来</p>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				msg: "welcome to vue's es6"
			}
		},
		mounted(){
			// 1. promise基础使用
			// 方法一
			new Promise((resove,reject)=>{
			//	resove("Success");
				reject("Error");
			}).then((query)=>{
				console.log(query);
			}).catch((error)=>{
				console.error(error);
				console.warn(error);
			})

			// promise 只会执行一次
			// 方法二  
			function pro(){
				return new Promise((res,rej)=>{
					res("成功");
					rej("失败");
				}).then((data)=>{
					console.log(data);
				},(data)=>{
					console.log(data);
				})
			}
			pro();

			// 无限次循环下去
			new Promise((resove,reject)=>{
				// resove("15");
				reject("失败了");
			}).then((query)=>{
				query = query + 1;
				return query;
			}).then((query)=>{
				query = query + 1;
				return query;
			}).then((query)=>{
				query = query + 1;
				return query;
			}).then((query)=>{
				console.log(query);
			}).catch((x)=>{
				console.log(x);
			})


			// 竞速  会选择最先调用的来执行
			Promise.race([new Promise((res,rej)=>{
				setTimeout(()=>res("111111"),3000);
			}),new Promise((res,rej)=>{
				setTimeout(()=>rej("2222222"),2000);
			})]).then((x)=>{
				console.log(x);
			}).catch(x=>{
				console.log(x);
			})

			// 要不就是全部成功  要不就是失败 同步运行到最后一个一起出来
			Promise.all([new Promise((resove,resject)=>{
				setTimeout(()=>resove("5555555"), 3000);
			}),new Promise((resove,resject)=>{
				setTimeout(()=>resove("66666666"), 2000);
			})]).then(data=>{
				console.log(data);
			}).catch(data=>{
				console.log(data);
			})

			// 直接写成功和失败
			Promise.resolve("hahaha").then(x=>{
				console.log(x);
			})

			Promise.reject("xixixi").catch(x=>{
				console.log(x);
			})
		}
	}
</script>
<style scoped="scoped">

</style>