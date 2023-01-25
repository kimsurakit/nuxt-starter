<template>
    <!-- you will need to handle a loading state -->
    <div v-if="pending">
        Loading ...
    </div>
    <div v-else>
        <div>
           {{ product }}
        </div>
    </div>
</template>
<script setup>
const route = useRoute()
// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)
const { pending, data: product } = useLazyFetch(`https://fakestoreapi.com/products/${route.params.id}`)

</script>