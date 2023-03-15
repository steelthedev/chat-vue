<template>
    <Sidebar />
    <v-container fluid class="ml-md-16 content" mt="-64" >  
        <!-- Content -->
          <v-row no-gutters>
            <!-- First content item -->
            <v-col cols="12" md="4" lg="4">
              <MiniChat />
            </v-col>
  
            <!-- Second content item -->
            <v-col cols="8" class="d-none  d-sm-none d-md-flex main-chat">
              <MainChat />
            </v-col>
          </v-row>
      
   
    </v-container>
  </template>
<script>
import Sidebar from '../../components/Sidebar.vue'
import MainChat from '../../components/MainChat.vue';
import MiniChat from '../../components/MiniChat.vue';
export default {
    components:{
        Sidebar,
        MainChat,
        MiniChat
    },
    setup() {
        
    },
}
</script>  
<style scoped>
.content{
    position:fixed;
    margin-top: -15px;
}

.main-chat{
    height: 100vh !important;

}
</style>