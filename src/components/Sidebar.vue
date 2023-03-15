<template>
    <section class="sidebar bg-white elevation-2 d-sm-none d-md-flex d-none">
        <v-container>
            <div class="chat-bar ">
                <div class="chat-logo text-center text-h5">
                <v-icon class="logo" color="primary" icon="mdi-chat"></v-icon>
                </div>
            </div>

            <div class="side-links mt-15">
                <v-list class="text-center ">
                    <v-list-item class="text-center mb-10 text-h6" v-for="link in links" :key="link.title">
                        <v-icon :icon="link.icon" color="primary"  >
                            
                        </v-icon>
                        <v-tooltip  activator="parent" location="top">
                                {{ link.title }}
                        </v-tooltip>
                    </v-list-item>
                </v-list>
            </div>
        </v-container>
        
    </section>
    <section class="nav-bar d-sm-flex d-md-none">
        <v-app-bar class="d-flex text-center pa-3" flat location="bottom">
           
                
        <v-list-item class="text-center ma-3 text-subtitle-1 text-center" v-for="link in links" :key="link.title">
            <v-icon :icon="link.icon" color="primary"></v-icon>
            <v-tooltip  activator="parent" location="top">
                    {{ link.title }}
            </v-tooltip>
        </v-list-item>
                
            
        </v-app-bar>
    </section>
</template>
<script>
import {ref} from 'vue'
export default{
    setup(){
        const links = ref([
            {title:'Profile',link:'/',icon:'mdi-account'},
            {title:'Chat',link:'/',icon:'mdi-message'},
            {title:'Friends',link:'/',icon:'mdi-account-group'},
            {title:'Settings',link:'/',icon:'mdi-cog'},
        ])
    return {links}
    
    }
}
</script>
<style scoped>
.sidebar{
    background: #fff;
    width: 100px;
    position:absolute;
    height: 100vh;
 
}



</style>