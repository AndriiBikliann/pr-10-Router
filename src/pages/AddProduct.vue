<template>
     
   <div>
     <div> Add product </div>
     
     <label>
       Title <input type="text" v-model="title"/>
     </label>
    <br/>
     <label>
       Price <input type="text" v-model.number="price"/>
     </label>
    <br/>

    <button @click ="onAdd"> Add </button>
    </div>

</template>

<script>
import store from "@/store";
export default {
name:"AddProduct",
  data() {
    return{
      title:null,
      price:null
  }
},
methods: {
      onAdd () {
          store.addProduct (this.title, this.price);
          this.$router.push({ name: 'products'})
      }
   },
 }

</script>

<style lang="scss" scoped></style>