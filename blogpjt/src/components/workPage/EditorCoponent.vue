<script setup>
import Editor from '@tinymce/tinymce-vue'
import {ref, onBeforeMount} from 'vue'
import axios from "axios";

const contents = ref('')
const title = ref('')
const API_KEY = ref('')

onBeforeMount(()=>{
    API_KEY.value = import.meta.env.VITE_API_KEY
})

const save = () => {
    axios({
        method: "POST",
        url: "http://127.0.0.1:8000/work/",
        headers:{
            Authorization: `Token ${localStorage.getItem('access_token')}`},
        data: {
            title: title.value,
            contents: contents.value
        }
    }).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    }).catch((err) => {
        console.log(err)
    })
}
</script>

<template>
            <v-row>
                <v-col cols="12" class="mt-4">
                    <v-text-field v-model="title" label="제목"></v-text-field>
                </v-col>
                <v-col>
                    <Editor
                        style="height: 700px"
                        v-model="contents"
                        :api-key="API_KEY"
                        :init="{
   plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
      toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
      tinycomments_mode: 'embedded',
      tinycomments_author: 'Author name',
      mergetags_list: [
        { value: 'First.Name', title: 'First Name' },
        { value: 'Email', title: 'Email' },
      ]
      }"
                    />
                </v-col>
                <v-col cols="12" class="mb-3">
                    <v-btn class="mx-2" @click="save">저장</v-btn>
                    <v-btn class="mx-2">취소</v-btn>

                </v-col>
            </v-row>
</template>

<style scoped>
.logo {
    display: block;
    margin: 0 auto 2rem;
}


</style>