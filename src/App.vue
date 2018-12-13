<template>
  <div id="app">
    <Top></Top>
    <ul>
      <li v-for="item in links">
        <router-link :to="item">{{ item }}</router-link>
      </li>
    </ul>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Top from './components/Header.vue'
export default {
  name: 'App',
  data() {
    return {
      link: "arrFind",
      links: ["stringFun", "arrFind", "tpl", "anonymous", "tab", "bind", "prototypeES5", "prototypeES6", "Jquery", "TemplateUp", "ForOfSetMap", "Promise"]
    }
  },
  components: {
    Top
  }
}
</script>

<style>
* {
  padding: 0px;
  margin: 0; 
  list-style: none;
}
body {
  background-color: #ccc;
  padding: 8px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 /* text-align: center;*/
  color: #2c3e50;
}
.top {
  margin-bottom: 20px;
}
ul {
  float: left;
}
ul li {
  width: 120px;
  height: 30px;
  line-height: 30px;
}
.content {
  float: left;
  width: 1000px;
  height: 500px;
  border: 1px solid black;
  box-shadow: 0 0 10px black;
  margin-left: 30px;
  padding: 10px;
}
.router-link-exact-active {
  font-size: 20px;
  color: orange;
}
h2 {
  margin: 15px 0;
}
p {
  height: 30px;
  line-height: 30px;
}
a {
  text-decoration: none;
  font-size: 18px;
}
</style>
