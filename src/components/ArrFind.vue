<template>
  <div class="find">
      <h2>通过控制台查看 -- 数组find方法</h2>
      <p>arr.find((val,index,arr)=>{}) --- 第一个参数是数值，第二个参数是下标，第三个参数是原数组</p>
  </div>
</template>

<script>
export default {
  name: 'arr-find',
  data () {
    return {
      msg: "welcome to webpack's es6"

    }
  },
  mounted(){
    let arr = [2,3,4,5,6];
    arr.find((val,index,arr)=>{
      console.log(val);
      console.log(index);
      console.log(arr);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
