<template>
  <div class="Jquery">
      <h2>通过控制台查看 -- 类 -- 对jquery的一些方法封装重现</h2>
      {{ msg }}
      <div id="box">
        <div class="container"></div>
        <div class="container"></div>
        <div class="container"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Jquery',
  data () {
    return {
      msg: "welcome to webpack's es6's Jquery"

    }
  },
  mounted(){
  	class Jquery {
      constructor(ele){
        this.argums = [];
        switch(ele.substring(0,1)) {
          case "#":
            this.argums = document.querySelector(ele);
            break;
          case ".":
            this.argums = document.querySelectorAll(ele);
            break;
        }
      }
      addClass(cls){
        [...this.argums].find((val,index)=>{
          val.classList.add(cls);
        })
      }
      removeClass(cls){
        [...this.argums].find((val,index)=>{
          val.classList.remove(cls);
        })
      }
    }

    function $(ele){
      return new Jquery(ele);
    }

    console.info($(".container"));
    $(".container").addClass("active");
    $(".container").removeClass("active");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active {
  background-color: lightyellow;
  width: 100%;
  height: 30px;
  margin-top: 20px;
}
</style>
