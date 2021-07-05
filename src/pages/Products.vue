<template>
    <div>

      <table v-if = "productsList.length" :key="updateKey">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
         <tr v-for ="product in productsList" :key="product.id">
           <td> {{product.title}} </td>
           <td> {{product.price}} </td>
           <td> 
             <button @click="onEdit(product.id)">Edit</button> 
             <button @click="onDelete(product.id)">Delete</button> 
           </td>
         </tr>
        </tbody>
       </table>

       <div v-else> No products </div>
    </div>
</template>

 <script>

import store from "@/store";
export default {
name:"Products",
data(){ 
    return {
        productsList:[],
        updateKey:0
    }
},
methods: {
    onDelete(id) {
        store.deleteProduct(id)
        this.productsList = store.getProductsList()
        this.updateKey++
      },
      onEdit(id){
        this.$router.push({
          name: 'edit',
          params: {product_id: id}})
      }
    },
    mounted () {
      this.productsList = store.getProductsList()
    }
}

</script>

<style lang="scss" scoped> </style>