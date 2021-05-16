<template>
    <button v-bind="$attrs" class="btn" >
        <Icon/> 
        <slot/>
    </button>
</template>
<script>
import Icon from '@atoms/Icon'
export default {
    components : { Icon},
    props:{
        icon : {
            type :String,
            default : ''
        }
    }
}
</script>

<style scoped>
.btn {
  border: 1px solid transparent;
  border-radius: 25px;
  padding: 0.8em 1em;
  text-transform: capitalize;
  cursor: pointer;
  font-weight: 600;
}
.btn-primary {
  background-color: #42f58a;
  font-weight: 600;
  color: white;
}
.btn-transparent{
    padding: 0;
    background-color: transparent;
    color: currentColor;
}
</style>