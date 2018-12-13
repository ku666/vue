<template>
  <div class="top">
       <img src="./../assets/1.jpg" class="logo">
     <!--   <div class="test-img"></div> -->
      <h1 class="header">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      msg: "welcome to webpack's es6"

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.top {
  height: 80px;
}
.header {
  float: left;
  margin-top: 20px;
  margin-left: 30%;
}
.logo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  float: left;
}
/*.test-img {
  width: 200px;
  height: 200px;
  background-image: url("../assets/1.jpg");
}*/
</style>
