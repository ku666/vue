<template>
  <div class="anonymous">
      <h2>Tab选项卡---es6</h2>
      <button v-for="item in btns" class="btn-tab">
      	{{ item }}
      </button>
      <div v-for="item in divs" class="div-tab" style="display: none;"> 
      	{{ item }} 
      </div>
  </div>
</template>

<script>
export default {
  name: 'tab',
  data () {
    return {
      msg: "welcome to webpack's es6's tab",
      btns: ["one","two","three"],
      divs: ["this is div1", "this is div2", "this is div3"]
    }
  },
  mounted(){
  	// 通过元素获取的方式来实现es6的tab，不使用
  	/*let btns = document.querySelectorAll(".btn-tab");
  	let divs = document.querySelectorAll(".div-tab");
  	btns[0].className = "btn-tab active";
  	divs[0].style.display = "block";
  	for(let i = 0, len = btns.length; i < len; i++) {
  		btns[i].onclick = () => {
  			for(let j = 0, len = btns.length; j < len; j++){
	  			btns[j].className = "btn-tab";
	  			divs[j].style.display = "none";
  			}
  			btns[i].className = "btn-tab active";
  			divs[i].style.display = "block";
  		}
  	}*/

  	// 结合find和扩展运算符使用
  	[...document.querySelectorAll(".btn-tab")].find((btn,index,arr)=>{
  		btn["onclick"] = ()=>{
  			[...document.querySelectorAll(".btn-tab")].find((x,y)=>{
  				x.className = "btn-tab";
  			});
  			[...document.querySelectorAll(".div-tab")].find((x,y)=>{
  				x.style.display = "none";
  			});
  			// 增加效果
  			[...document.querySelectorAll(".div-tab")][index].style.display = "block";
  			btn.className = "btn-tab active";
  		}
  	})
  }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
	width: 80px;
	height: 25px;
	line-height: 25px;
	background-color: #eee;
}
button.active {
	background-color: red;
}
div.div-tab{
	width: 200px;
	height: 200px;
	background-color: lightyellow;
	text-align: center;
	line-height: 200px;
	font-size: 20px;
	margin-top: 20px;
}
</style>
