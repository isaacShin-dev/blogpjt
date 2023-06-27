<script setup>
import {ref} from 'vue'
  const board_list = ref([{ title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
      { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},
      { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
      { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
      { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
      { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
      { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
      { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
      { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
  ])


</script>

<template>
<v-container fluid>
    <v-row dense >
        <v-col v-for="(board, idx) in board_list" :key="idx" xl="2" sm="12" md="4">
            <v-card class="mx-auto" max-width="344" outlined>
                <v-img :src="board.src" height="200px">
                    <v-card-title class="bg-blue-lighten-5">{{board.title}}</v-card-title>
                </v-img>
                <v-card-text>
                    <span class="text--primary">{{board.title}}</span>
                </v-card-text>
                <v-card-actions>
                    <v-btn text>Share</v-btn>
                    <v-btn text>Explore</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>

  </v-container>
</template>

<style scoped>

</style>