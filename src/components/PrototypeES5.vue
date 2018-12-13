<template>
  <div class="prototype-es5">
      <h2>通过控制台查看 -- 类 -- 原型 -- 原型链</h2>
      <p>1. 类  指的是一类，像object -- array string boolen , 在es5中constructor指向它的类，[].__proto__的constructor指向Array</p>
      <p>2. 原型  类拥有的方法 公用的方法可以放到原型中 每个对象都有一个原型 占有的一片空间可以把方法放到原型上进行节约资源</p>
      <p>在实际运用中可以对原型方法进行改造满足一些功能 例如数组的forEach方法不兼容ie8,</p>
      <p>可以对Array.prototype.forEach方法进行补充,再例如数组的indexOf不兼容ie8，通过Array.prototype.indexOf进行补充</p>
      <p>3. 原型链 __proto__  通过原型链链接原型里面的方法，__proto__是类里面的方法,通过创建出来的对象可以通过__proto__获取父级的原型方法属性</p>
     
  </div>
</template>

<script>
export default {
  name: 'prototypeEs5',
  data () {
    return {
      msg: "welcome to webpack's es5's prototype"

    }
  },
  mounted(){
  	// 类  指的是一类，像object -- array string boolen , 在es5中constructor指向它的类，[].__proto__的constructor指向Array
  	// 原型  类拥有的方法 公用的方法可以放到原型中 每个对象都有一个原型 占有的一片空间可以把方法放到原型上进行节约资源 在实际运用中可以对原型方法进行改造满足一些功能 例如数组的forEach方法不兼容ie8，可以对Array.prototype.forEach方法进行补充,再例如数组的indexOf不兼容ie8，通过Array.prototype.indexOf进行补充
  	// 原型链 __proto__  通过原型链链接原型里面的方法，__proto__是类里面的方法,通过创建出来的对象可以通过__proto__获取父级的原型方法属性
 
  	function show(){
  		console.log(1111);
  	}
  	show.prototype.go = "gogogo";

  	var sh = new show();
  	console.log(sh.go);
  	console.log(sh.prototype);
  	console.log(sh.__proto__);
  	console.log(show.prototype);

  	console.log(this);
  	/*setInterval(()=>{
  		console.log(this);
  	},100000)*/
  	// 箭头函数指向调用的函数
  	// 普通函数指向window
  	setTimeout(function(){
  		console.log(this);
  	},100)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
