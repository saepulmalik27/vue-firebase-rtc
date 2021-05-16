<template>
    <div class="message">
        <div :class="`message-content ${sender ? 'active-sender' : ''} `">
            <Avatar width="40px" height="40px" :src="photoUrl"/>
            <div :class="`message-content-text ${sender ? 'active-sender' : ''} `">
                 <span class="message-sender" v-if="!sender">{{name}}</span>
                 <span class="message-sender active-sender" v-else>Anda</span>
                <slot/>
            </div>
        </div>
    </div>
   
</template>

<script>
import Avatar from "@templates/Avatar";
export default {
    components : {Avatar},
    props: {
        name : {type : String, default : ''},
        photoUrl : {type : String, default : ''},
        sender : {type : Boolean, default : false}
    },
    setup(props){
        console.log(props.name, props.sender, 'ini');
    }
}
</script>

<style scoped>
.message-sender{
    font-size: 0.75em;
    color: dimgray;
    text-transform: capitalize;
}
.message-sender.active-sender{
    color: darkmagenta;
}
.message-content{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.message-content.active-sender{
    flex-direction: row-reverse;
}
.message-content-text{
    padding: 1em 0.75em;
    background-color: #fff;
    box-shadow: 0px 2px 5px rgba(158, 158, 158, 0.3);
    margin: 5px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 80%;
}
.message-content--text.active-sender{
    align-items: flex-end;
}
</style>