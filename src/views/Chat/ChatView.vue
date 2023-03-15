<template>
<Sidebar />

<div class="mini-side ml-16">
    <MiniChat />
</div>
</template>
<script>
import Sidebar from '../../components/Sidebar.vue';
import MiniChat from '../../components/Mini-chat.vue';
export default{
    components:{Sidebar,MiniChat},
    setup(){

    }
}
</script>