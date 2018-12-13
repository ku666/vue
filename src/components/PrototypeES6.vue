<template>
	<div class="prototype-es6">
		<h2>通过控制台查看 ---- ES6类 ---- 继承</h2>
		<p>1. class 名称{constructor(name){}} constructor是第一个执行的函数</p>
		<p>2. new 名称() ---- 通过这个来声明对象</p>
		<p>3. class son extends father { construcor(){super()} }</p>
		<p>4.  通过extends 和 super来扩展 用super继承需要传递constructor的参数 创建一个新的对象先执行construcor里面的内容</p>
		<h2>通过class tab来创建选项卡</h2>
		<div id="box">
			<button  class="active">1</button>
			<button>2</button>
			<button>3</button>
			<div>this is one</div>
			<div>this is two</div>
			<div>this is three</div>
		</div>
		<div id="container">
			<button  class="active">1</button>
			<button>2</button>
			<button>3</button>
			<button>4</button>
			<div>this is one</div>
			<div>this is two</div>
			<div>this is three</div>
			<div>this is four</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:"prototype-es6",
		data(){
			return {
				msg: "welcome ES6's prototype"
			}
		},
		mounted(){
			class person {
				constructor(name="anonym"){
					this.play = "I can play";// 私有属性
					this.say = "I want to say";
					/*console.log("person-play:",this.play);
					console.log("person-say:",this.say);*/
					console.log("My name is " + name);
				}
				sit(age){
					console.log("My age is old, I want to sit sleep!")
				}
			}
			// new person("hello");

			// 通过extends 和 super来扩展 用super继承需要传递constructor的参数 创建一个新的对象先执行construcor里面的内容
			class dog extends person {
				constructor(name){
					super(name)
				}
			}

			// new dog("hf","hf").sit();


			// 选项卡
			class tab{
				constructor(id){
					this.id = document.getElementById(id.substring(1));
					this.btns = this.id.getElementsByTagName("button");
					this.divs = this.id.getElementsByTagName("div");
					this.num = 0;
					//console.log(this.id,this.btns,this.divs);
				}
				addClick(){
					//console.log(this.btns);
					[...this.btns].find((val,index)=>{
						val["onclick"] = () => {
							//console.log(index);
							this.hide();
							val.classList.add("active");
							[...this.divs][index].style.display = "block";
						}
					})
				}
				hide(){
					[...this.btns].find((val,index)=>{
						val.classList.remove("active");
						[...this.divs][index].style.display = "none";
					})
				}
			}

			new tab("#box").addClick();


			// 继承 上个选项卡  增加自动播放功能
			class tabPlay extends tab{
				constructor(id){
					super(id)
				}
				autoplay(){
					setInterval(()=>{
						this.num++;
						//console.log(this.divs.length);
						this.divs.length == this.num && (this.num = 0);
						this.hide();
						[...this.btns][this.num].classList.add("active");
						[...this.divs][this.num].style.display = "block";
					},2000)
				}
			}

			new tabPlay("#container").autoplay();
		}
	}
</script>
<style type="text/css" scoped="scoped">
	#box {
		float: left;
	}
	#box div{
		width: 200px;
		height: 200px;
		background-color: lightgreen;
		display: none;
	}
	#box div:first-of-type{
		display: block;
	}
	#box button {
		width: 65px;
		height: 25px;
		line-height: 25px;
	}
	#box button.active {
		background-color: red;
	}

	#container {
		float: left;
		margin-left: 50px;
	}
	#container div{
		width: 260px;
		height: 200px;
		background-color: lightgreen;
		display: none;
	}
	#container div:first-of-type{
		display: block;
	}
	#container button {
		width: 65px;
		height: 25px;
		line-height: 25px;
	}
	#container button.active {
		background-color: red;
	}
</style>