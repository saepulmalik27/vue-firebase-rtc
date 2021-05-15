<template>
    <div class="message">
        <span v-if="!sender">{{name}}</span>
        <div>
            <Avatar :src="photoUrl">
            <div>
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
    }
}
</script>