<template>
<Sidebar />

<div class="mini-side ml-md-16">
    <Profile />
</div>
</template>
<script>
import Profile from '../../components/Profile.vue';
import Sidebar from '../../components/Sidebar.vue';
export default{
    components:{
        Profile,
        Sidebar
    },
    setup(){

    }
}
</script>