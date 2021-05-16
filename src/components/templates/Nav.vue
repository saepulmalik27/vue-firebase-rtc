<template>
  <nav>
    <h1><strong class="text-primary">Vue</strong> Chat App</h1>
    <div v-if="isLogin" class="login">
      <Avatar :src="user.photoURL" width="20px" height="20px" />
      <Button class="btn-transparent" @click="signOut" >Sign Out </Button>
    </div>
    <Button class="btn-primary" v-else @click="signIn"  >Sign In</Button>
  </nav>
</template>

<script>
import Avatar from "@templates/Avatar";
import Button from "@atoms/Button";
import { useAuth } from "@/firebase";
export default {
  components: { Avatar, Button },
  setup() {
    const { user, isLogin, signOut, signIn } = useAuth();
    return { user, isLogin, signOut, signIn };
  },
};
</script>

<style  scoped>
* {
  box-sizing: border-box;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  box-shadow: 0px 2px 24px rgba(158, 158, 158, 0.3);
}

.text-primary {
  color: #42f58a;
}

.login {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 25px;
  background-color: #42f58a;
  padding: 0.4em 1em;
  color: white;
  cursor: pointer;
}
</style>

