<template>
    <div class="container">
        <Message v-for="{id, text, userPhotoUrl, userName, userId} in messages" :key="id" :name="userName" :photo-url="userPhotoUrl" :sender="userId === user?.uid">
        {{text}}
        </Message>
    </div>
</template>
<script>
import {ref, watch, nextTick} from 'vue';
import {useAuth, useChat} from '@/firebase';

import Message from "./Message";
import SendIcon from "@moleculs/sendIcon";
export default {
    components : {Message},
    setup(){
        const {messages} = useChat()

        const message = ref('')
        const send = () => {}
        const {user, isLogin} = useAuth
        return {user, isLogin, messages, message, send}
    }

}
</script>
<style scoped>
    .container{
        padding: 1rem;
    }
</style>