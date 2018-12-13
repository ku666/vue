<template>
  <div class="tpl">
      <h2>通过控制台查看 -- es6模板方法</h2>
      <div v-html="element">{{ element }}</div>
      {{ element }}
      <p class="one">1. ``模板符号，更加方便字符串拼接可以换行</p>
      <p>2. `${obj.div + obj.span}` ---- 可以用${}来拼接字符串和计算</p>
      <p>3. show`` ---- 可以用来调用函数</p>
  </div>
</template>

<script>
export default {
  name: 'tpl',
  data () {
    return {
      msg: "welcome to webpack's es6",
      element: ""

    }
  },
  mounted(){
   let obj = {
      div: "<div>添加div<div>",
      span: "<span>添加span</span>",
      p: "<p>添加p</P>",
      a: 10,
      b: 20
   }

   let tpls = `<div>爱的国家的发啥</div>
                ${obj.div + obj.span}`;
   this.element = tpls;
   console.log(tpls)

   let tpls1 = `${obj.a + obj.b}` ;
   console.log(tpls1);

   function show(){
      console.log("this is show, It's amazing");
   }

   show``;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p.one { 
  margin-top: 10px;
}
</style>
