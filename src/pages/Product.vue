<template>
    <div>
        Edit Product
         <div>
            <label>
                Title
                <input type="text" v-model="title">
            </label>
        </div>
        <div>
            <label>
                Price
                <input type="text" v-model.number="price">
            </label>
        </div>
        <div>
            <button @click="onSave">Save</button>
        </div>
    </div>
</template>

<script>
import store from "@/store";
    export default {
        name:'Product',
        data() {
            return {
                title: null,
                price: null,
                id:null
            }
        },
        computed: {
            productId() {
                return this.$route.params.product_id 
            },
        },
        methods: {
            onSave() {
    
               store.updateProduct({
                   id:this.id,
                   title:this.title,
                   price:this.price
               }) 
               this.$router.push({name:'products'})
            }
        },
        mounted () {
    
            let product=store.getProductById(this.productId)
    
            this.title=product.title
            this.price=product.price,
            this.id=product.id
        },
    }
</script>

<style lang="scss" scoped>

</style>