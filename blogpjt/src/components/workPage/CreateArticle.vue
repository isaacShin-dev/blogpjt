<template>
    <v-container id="app" class="mt-2">
        <v-card class="px-4 " elevation="8" height="900">
        <Editor />
        </v-card>
    </v-container>
</template>

<script>
import Editor from '@/components/workPage/EditorCoponent.vue'

export default {
    name: 'App',
    components: {
        Editor
    }
}
</script>