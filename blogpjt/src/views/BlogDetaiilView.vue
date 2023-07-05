<script setup>
import {  onMounted, ref, onBeforeMount} from 'vue'
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-css.min.js';
// import 'prismjs/themes/prism.css'
// import 'prismjs/themes/prism.min.css'
// import 'prismjs/themes/prism-dark.css'
// import 'prismjs/themes/prism-dark.min.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/themes/prism-tomorrow.min.css'
import axios from "axios";
import { useRoute } from 'vue-router'

// console.warn = console.error = () => {};
console.error = () => {};
console.warn = () => {};
console.log = () => {};

const detail = ref(null);
// const contentRef = ref(null);
// const router = useRouter()
const route = useRoute()
const id = route.params.id

onBeforeMount(() => {
    axios.get(`http://127.0.0.1:8000/work/${id}/` ).then((response) => {
        detail.value = response.data
    }   ).catch((error) => {
        console.log(error)
    } )
}),

onMounted(() => {
    Prism.highlightAll(); // 코드 하이라이트
    //  본문 이미지 태그를 동적으로 불러와, 이미지의 크기를 반응형으로 조정합니다.
    const imgTag = document.querySelectorAll('.detailContent img');
    imgTag.forEach((img) => {
        img.style.width = '100%';
        img.style.height = 'auto';
    });

});
</script>

<template>
    <div id="app" class="dark-mode">
        <h1 class="mainTitle">{{ detail?.title }}</h1>
        <div class="divider"></div>
            <div

                v-html="detail?.contents"
                class="detailContent"
                :key="detail.id"
            ></div>
    </div>
</template>

<style scoped>
/* Your existing styles */
#app{
    margin: 0 auto;
    width: 70%;
    padding: 20px;
}
 /*media query for mobile*/
@media (max-width: 768px) {
    #app{
        width: 100%;
    }
}

.mainTitle{
    text-align: center;
    margin-bottom: 25px;
}
.divider{
    border-bottom: 3px solid #e0e0e0;
    margin-bottom: 25px;
}
.detailContent {
    overflow: scroll !important;
}
</style>
