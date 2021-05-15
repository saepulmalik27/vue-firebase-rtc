<template>
    <i :class="`fa ${name}`" v-if="name"></i>
    <i v-else-if="url" :src="url"></i>
</template>
<script>
export default {
    props :{
        name : {
            type : String,
            default : ''
        },
        url : {
            type : String,
            default : ''
        },
    }
}
</script>