<script setup>

import {ref} from 'vue'

// const cardBgImg = ref('https://cdn.pixabay.com/photo/2017/08/30/01/55/eclipse-2695630_1280.jpg')
const cardBgImg = ref('../src/assets/sol.jpg')

</script>


<template>
  <v-container>
      <v-card class="mt-16" :image="cardBgImg" height="704">
          <v-card-item>
              <v-card-title class="font-weight-bold text-grey-lighten-5">
                  <h1 class="mt-4">반갑습니다!</h1>
              </v-card-title>
              <v-card-subtitle></v-card-subtitle>
          </v-card-item>
      </v-card>
  </v-container>
</template>

<style scoped>

</style>