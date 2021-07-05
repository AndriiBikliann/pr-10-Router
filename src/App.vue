<template>
  <div id="app">

   <h1> Мій сайт</h1>
   <div>
     <router-link to ="/" class = "menu"> Home </router-link>
     <router-link to ="/about" class = "menu"> About </router-link>
     <router-link to ="/list" class = "menu"> Products </router-link>
     <router-link to ="/add" class = "menu"> Add new product </router-link>
   </div>
   
   <router-view> </router-view>
    
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>








<style>
.menu {
  float:left;
  border:2px solid black;
} 

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
