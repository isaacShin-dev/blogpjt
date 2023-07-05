<script setup>
import axios from "axios";
import {router} from '../router/index';
import {ref, onMounted} from 'vue'
  const board_list = ref([
  ])


const detail = (id) => {
  //router push
  router.push({name: 'detail', params: {id: id}})
}

onMounted(async () => {
    try {
        // axios 요청 등을 이용하여 데이터를 가져오는 로직을 작성합니다.
        const response = await axios.get('http://127.0.0.1:8000/work/');
        board_list.value = response.data.results;
        // 가져온 데이터를 board_list에 할당합니다.
    } catch (error) {
        console.error(error);
    }
});

</script>

<template>
<v-container fluid>
    <v-row dense >
        <v-col v-for="(board, idx) in board_list" :key="idx" sm="6" md="6" lg="3" xl="2" xxl="3">
            <v-card class="mx-auto" max-width="344" outlined>
<!--                <v-img :src="board.src" height="200px">-->
<!--                    <v-card-title class="bg-blue-lighten-5">{{board.title}}</v-card-title>-->
<!--                </v-img>-->
                <v-card-text>
                    <span class="text--primary">{{board.title}}</span>
                </v-card-text>
                <v-card-actions>
                    <v-btn text>Share</v-btn>
                    <v-btn text @click="detail(board.id)">Read More</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
    <v-btn icon class="addBtn" position="fixed" location="right top" @click="router.push({name: 'create'})">
        <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-container>
</template>

<style scoped>
.addBtn{
    margin-right: 15px;
margin-top: 80px;
}
.detailModal{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index : 9999;
    background-color: rgba(0,0,0,0.5);
}
</style>