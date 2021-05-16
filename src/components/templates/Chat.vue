<template>
<div class="chat">
 <div class="chat-container">
 
    <Message
      v-for="{ id, text, userPhotoURL, userName, userId } in messages"
      :key="id"
      :name="userName"
      :photo-url="userPhotoURL"
      :sender="userId === user?.uid"
    >
      {{ text }}
    </Message>
  </div>
  <div ref="bottom" />
  
      <form v-if="isLogin" @submit.prevent="send" class="chat-form">
          <BaseInput v-model="message" placeholder="type your message" type="text" required class="chat-form--input"/>
          <Button type="submit" class="btn-primary" > Send</Button>
       </form>
 
</div>
 


</template>
<script>
import { ref, watch, nextTick } from "vue";
import { useAuth, useChat } from "@/firebase";
import BaseInput from '@atoms/BaseInput';
import Button from '@atoms/Button'; 

import Message from "./Message";
export default {
  components: { Message, BaseInput, Button },
  setup() {
    const { messages, sendMessage } = useChat();

    const message = ref("");
    const bottom = ref(null);
    watch(
      messages,
      () => {
        nextTick(() => {
          bottom.value?.scrollIntoView({ behavior: "smooth" });
        });
      },
      { deep: true }
    );

    const send = () => {
        
        if (message.value) {
        sendMessage(message.value);
        message.value = ''    
        }else{
            console.log(message, 'empty');
        }
        
    };
    const { user, isLogin } = useAuth();
    return { user, isLogin, messages, message, send };
  },
};
</script>
<style scoped>
.chat{
    margin: 1em;
    position: relative;
}
.chat-container {
  padding: 1rem;
  border-radius: 8px;
  background-color: #fff;
   box-shadow: 0px 2px 24px rgba(158, 158, 158, 0.3);
}
.chat-form{
    width: 100%;
    position: sticky;
    bottom: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.chat-form--input{
    width: 80%;
}
</style>