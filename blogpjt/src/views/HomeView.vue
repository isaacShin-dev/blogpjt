<template>
  <v-container  fluid>
      <div class="wrapper mx-5">


      <v-row justify="center">
          <v-col>

              <p class="smallText">Eclipse Addict.</p>
              <p class="smallText">WELCOME.</p>
          </v-col>

          <v-col cols="12" class="justify-center">

              <p class="text-decoration-none small-menu" v-for="(menu, idx) in menu_list" :key="idx" style="z-index: 0">
          <span :class="{menuHover : menu.isHover}" @click="todestination(menu.to)">
              <span style="cursor:pointer;" @mouseover="menuMouseOver(idx)" @mouseleave="menuMouseLeave(idx)">{{menu.text}}</span>
          </span>
              </p>
            <v-img :src="img_url" :class="{dark_img: isDark}" class="mainImg small-img" style="z-index: 0" @click="checkTheme" >


            </v-img>


          </v-col>
      </v-row>
      </div>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';
import { ref, watch } from 'vue';
import {router} from '../router'
import { useTheme } from 'vuetify';

const img_url = ref('../src/assets/kitten-1556444_1920-cutout.png')
const isDark = ref(false)
const menu_list = ref([
    {text: 'HOW I WORK.', isHover: false, to: 'works'},
    {text: 'TODAY\'S LOGS.', isHover: false, to: 'log'},
    {text: 'CONTACT ME.', isHover: false, to: 'contact'}])
// Components
export default defineComponent({
  name: 'HomeView',

  components: {
  },
    setup(){
        const theme = useTheme()

        watch(theme.global.current, (newVal) => {
            if(newVal.dark){
                isDark.value = true
            }else{
                isDark.value = false
            }
        })
        return {
            theme: theme,
            img_url,
            menu_list,
            isDark,
            menuMouseOver: (idx) =>{
                menu_list.value[idx].isHover = true},
            menuMouseLeave: (idx) =>{
                menu_list.value[idx].isHover = false},
            //Routers
            todestination: (to) => router.push({name: to}),

            checkTheme: () => {
                if(theme.global.current.value.dark){
                    isDark.value = true
                }else{
                    isDark.value = false
                }
            },
        }
    },


});


</script>
<style scoped>

.wrapper{
    //background-color: #AECDC8;
    height: 600px;
    margin-top: 80px;
    border-radius: 19px;
}
.mainImg{
    border-radius: 15px;
    margin-top: 22px;
    border-radius: 22px !important;
    z-index: 1;
    height: 400px;

}
.dark_img{
    filter: invert(100%);
}
.mainText{
    color: white;
    font-size: 60px;
    font-weight: bold;
    margin-left: 250px;
    font-family: 'Nanum Myeongjo', serif;
}
.homeMenu{
    margin-top: 79px;
    font-size: 33px;

    text-align: center;
    font-family: 'Cormorant', serif;
    list-style-type: none;
    letter-spacing: 10px;
    opacity: 0.7;
    color: black;
    //color: #FCFEFD;
}

@media (max-width: 800px) {
    .small-menu {
        font-size : 23px;
        margin-top:65px;
    }
}
@media(max-width: 500px){
    .small-menu{
        font-size: 13px;
        margin-top: 65px;
        letter-spacing: 1px;
        color: black ;
    }
    .small-img{
        height: 300px;
    }
}
.menuHover{
    opacity: 0.9;
    color: black;
    letter-spacing: 15px;
}
.smallText{
    font-family: 'DM Serif Display', serif;

    font-weight: bolder;
    letter-spacing: 8px;
    margin-left: 10px;
    margin-top: 5px;
}
</style>
