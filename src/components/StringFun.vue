<template>
  <div class="string-fun">
       <div>
       		<h2>通过控制台查看 -- 字符串方法</h2>
       		<p>1. str.charCodeAt(1)) ---- 查看unicode编码</p>
       		<p>2. 通过fromCharCode查看和\u4e00 - \u9fa5可以查看浏览器识别的汉字有多少</p>
		  	<p>3. inStr.includes("e",2) ---- 通过includes判断是否包含字符串第二个参数是从第几位开始判断,从1开始算</p>
		  	<p>4. startStr.startsWith("el",1) ---- startsWith 起始,第一个参数是以什么开始，第二个参数是从第几位开始，从下标0开始</p>
		  	<p>5. endsWith ---- 以什么结束  写了第二个参数只能识别一个字符  是第几个  从0开始</p>
		  	<p>6. div.repeat(3) ---- repeat 重复 第一参数是重复几次</p>
       </div>
  </div>
</template>

<script>
export default {
  name: 'string-fun',
  data () {
    return {
      msg: "welcome to webpack's es6",
      haveFontsAmounts: ""
    }
  },
  mounted(){
  	const str = "abcd";
  	console.log(str.charCodeAt(1));// 查看unicode编码
  	const str1 = 97;
  	console.log(String.fromCharCode(str1));

  	// 通过fromCharCode查看和\u4e00 - \u9fa5可以查看浏览器识别的汉字有多少
  	let fonts = [];
  	for(let i = 0x4e00; i <= 0x9fa5; i++) {
  		fonts.push(String.fromCharCode(i));
  	}
  	console.log(fonts.length);
  	this.haveFontsAmounts = fonts.join(" ");

  	// 通过includes判断是否包含字符串
  	// 第二个参数是从第几位开始判断,从1开始算
  	var inStr = "hello Vue";
  	console.log(inStr.includes("h"));
  	console.log(inStr.includes("e",2))

  	// startsWith 起始,第一个参数是以什么开始，第二个参数是从第几位开始，从下标0开始
  	var startStr = "hello";
  	console.info(startStr.startsWith("hee"));
  	console.info(startStr.startsWith("el",1));

  	// endsWith 以什么结束  写了第二个参数只能识别一个字符  是第几个  从0开始
  	var endsWith = "hello";  
  	console.info("endsWith",endsWith.endsWith("lo"));
  	console.info("endsWith",endsWith.endsWith("o",5));

  	// repeat 重复 第一参数是重复几次
  	var div = "<div></div>";
  	console.log(div.repeat(3));
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
	margin: 15px 0;
}
p{
	height: 30px;
	line-height: 30px;
}
</style>
