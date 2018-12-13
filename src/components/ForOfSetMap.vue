<template>
	<div class="for-of-set-map">
		 <h2>通过控制台查看 -- es6模板方法</h2>

	</div>
</template>
<script>
	export default {
		data(){
			return {
				msg: "welcome to es6's for of , map, set"
			}
		},
		mounted(){
			// for of是直接将value的值显示出来
			// for in是将key值显示出来，也可以显示键值
			let arr = [10,11,12,13];
			let obj = {
				name: "fly",
				age: 18
			}

			// 对于数组而言in是下标
			for(let i in arr) {
				console.log(i);
			}
			// 对于数组而言of是值
			for(let i of arr) {
				console.log(i);
			}
			// for of 是取得key值
			for(let i in obj) {
				console.log(i);
			}
			// for of 对于对象是不能使用的
			/*for(let i of obj) {
				console.log(i);
			}*/

			/* ---- Set ----*/
			// 和数组的关系比较密切  不能有重复的数据
			var setArr = new Set([15,20,15,30,11]);
			console.log(setArr);
			// set会去掉数组重复的数据
			var arr1 = [...setArr]; // 可以去重和复制一个数组
			arr1[0] = 26; 
			console.log(arr1);

			for (let i of setArr) {
				console.log(...setArr);// 获取到set里面的value
			}

			/* ---- Map ----*/
			// 和对象的关系比较密切
			var mapObj = new Map();
			mapObj.set("name","fly");
			mapObj.set("age",18);
			console.log(mapObj);
			for(let [i,val] of mapObj) {
				console.log(i,val);
			}
			// for of [i,val]读取到

		}
	}
</script>
<style></style>