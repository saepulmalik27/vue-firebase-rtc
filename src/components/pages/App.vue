<template>
  <Nav/>
  <Chat/>
</template>

<script>
import Nav from '@templates/Nav';
import Chat from '@templates/Chat'
export default {
  name: 'App',
  components: {
    Nav, Chat
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
