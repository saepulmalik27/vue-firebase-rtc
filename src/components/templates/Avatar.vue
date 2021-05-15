<template>
    <div class="avatar" :style="{'--width' : width, '--height' : height}">
        <img :src="src" alt="avatar">
    </div>
</template>

<script>
export default {
    props :{
         src : {
             type : String
         }, width : {
             type : String,
             default : '40px'
         },
         height : {
             type : String,
             default : '40px'
         }
    }
}
</script>
<style scoped>
.avatar{
    width: var(--width);
    height: var(--height);
    border: 1px solid transparent;
    border-radius: 50%;
}
img{
    width: 100%;
    height: auto;
}
</style>