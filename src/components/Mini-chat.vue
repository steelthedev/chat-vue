<template>
    <section class="mini ml-11">
        <v-container>
            <div class="profile-heading d-flex ">
                <h6 class="text-h6 text-word">My Profile</h6>
               <v-spacer></v-spacer>
               <v-menu location="start">
                <template v-slot:activator="{ props}">
                <v-icon icon="mdi-dots-vertical"  v-bind="props" class="mt-1 text-word"></v-icon>
                </template>

                <v-list>
                    <v-list-item>
                        Edit
                    </v-list-item>

                    <v-list-item>
                        Action
                    </v-list-item>

                    <v-divider></v-divider>
                    <v-list-item>
                        Possible action
                    </v-list-item>
                </v-list>
            </v-menu>
            </div>

            <div class="profile-pics text-center mt-10">
                <div class="picture">
                    <img src="../assets/images/users/avatar-1.jpg" class="rounded-circle" alt="">
                </div>

                <div class="picture-words">
                    <div class="name">
                        <h6 class="text-h6 text-word mt-3">Iyanu Akinwumi</h6>
                    
                    </div>
                </div>
            </div>

            <v-divider></v-divider>
            
        </v-container>
     
    </section>
    
</template>
<script>
export default{
    setup(){

    }
}
</script>
<style scoped>
.mini{
    width: 400px;
}


.picture img{
    width: 100px;
    border: 3px #fff solid;
}
</style>