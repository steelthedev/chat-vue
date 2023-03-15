<template>
    <section class="main-chat bg-white h-100 overflow-hidden p-relative">
        <div class="profile-heading d-flex pa-5">
            <div class="d-flex">
                <div class="img">
                <img src="../assets/images/users/avatar-2.jpg" class="rounded-circle" alt="">
            </div>

            <div class="profile-title ma-2 ml-6">
                <div class="name">
                    <h6 class="text-word text-subtitle-1 font-weight-medium">Iyanu Akinwumi</h6>
                </div>
            </div>
            </div>
            <v-spacer></v-spacer>
         <div class="icons ma-2 mr-10 ">
            <v-icon icon="mdi-magnify" class="ma-3" color="word"></v-icon>
            <v-icon icon="mdi-account" class="ma-3" color="word"></v-icon>
            <v-menu location="bottom">
                <template v-slot:activator="{ props}">
                <v-icon icon="mdi-dots-vertical" class="ma-3"  v-bind="props" color="word"></v-icon>
                </template>

                <v-list class="pa-4">
                    <v-list-item>
                        Archive
                    </v-list-item>

                    <v-list-item>
                        Block
                    </v-list-item>

                    <v-list-item>
                        Delete
                    </v-list-item>
                </v-list>
            </v-menu>
         </div>
        </div>

        <v-divider></v-divider>

        <div class="chat-div pa-4">
            
            <div class="chat-single mb-16  pa-5">
                <div class="chat-content reciever d-flex">
                    <div class="profile-img">
                        <img src="../assets/images/users/avatar-3.jpg" class="rounded-circle" alt="">
                    </div>
                    <div class="chat-message ml-4 bg-primary rounded pa-2">
                        <p>Hello, there Iyanu</p>
                        
                        <p class="float-right text-caption mt-2">05:00</p>
                    </div>
                     
                </div>

                <div class="chat-content sender mt-8 mb-5 d-flex">
                    <div class="profile-img">
                        <img src="../assets/images/users/avatar-4.jpg" class="rounded-circle" alt="">
                    </div>
                    <div class="chat-message ml-4 bg-primary rounded pa-2">
                        <p>Hello, there Iyanu</p>
                        
                        <p class="float-right text-caption mt-2">05:00</p>
                    </div>
                     
                </div>
            </div>

            <div class="chat-single mb-16  pa-5">
                <div class="chat-content reciever d-flex">
                    <div class="profile-img">
                        <img src="../assets/images/users/avatar-3.jpg" class="rounded-circle" alt="">
                    </div>
                    <div class="chat-message ml-4 bg-primary rounded pa-2">
                        <p>Hello, there Iyanu</p>
                        
                        <p class="float-right text-caption mt-2">05:00</p>
                    </div>
                     
                </div>

                <div class="chat-content sender mt-8 mb-5 d-flex">
                    <div class="profile-img">
                        <img src="../assets/images/users/avatar-4.jpg" class="rounded-circle" alt="">
                    </div>
                    <div class="chat-message ml-4 bg-primary rounded pa-2">
                        <p>Hello, there Iyanu I will be back before you know it. Keep calm. Is that clear? Or are you still in need of a solution?</p>
                        
                        <p class="float-right text-caption mt-2">05:00</p>
                    </div>
                     
                </div>
            </div>

            

  

 
            
        </div>
      
          <v-container class="input-wrapper">
            <v-row no-gutters>
                <v-col cols="6">
                    <v-text-field variant="none" class="bg-mygrey send-input"></v-text-field>
                </v-col>
                <v-col cols="4">
                    <v-icon icon="mdi-emoticon-happy" color="primary" class="mx-5"></v-icon>
                    <v-icon icon="mdi-attachment" color="primary" class="mx-5"></v-icon>
                    <v-btn class="bg-primary pa-6 align-content-center mx-5">
                        <v-icon icon="mdi-send"></v-icon>
                    </v-btn>
                </v-col>
            </v-row>
          </v-container>
          
    </section>
</template>
<script>
export default {
    setup() {
        
    },
}
</script>
<style scoped>
.main-chat{
    width: 100%;
}

.profile-heading img,.profile-img img{
    width: 50px;
}

.sender{
    float: right;
    margin-right: 30px;
}

.chat-message{
    max-width: 400px;
}



.container {
  position: relative;
  height: 100%;
}
.input-wrapper {
  position: fixed;
  bottom: 0 !important;
  width: 100%;

}
.input-wrapper .input{
    width: 50px !important;
}

.send-input{
    height: 50px;
    border-radius: 7px;
}
</style>