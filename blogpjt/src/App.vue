<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer">
            <v-list-item
                prepend-avatar="https://cdn.pixabay.com/photo/2017/08/30/01/55/eclipse-2695630_1280.jpg"
                title="By Isaac Giwook Shin"
            ></v-list-item>

            <v-divider></v-divider>

            <v-list density="compact" nav>
                <v-list-item prepend-icon="mdi-dev-to" title="HOW I WORK" value="HOW I WORK" @click="toWork"></v-list-item>
                <v-list-item prepend-icon="mdi-notebook" title="TODAY'S LOG" value="TODAY'S LOG" @click="toLog"></v-list-item>
                <v-list-item prepend-icon="mdi-card-account-phone-outline" title="CONTACT ME" value="CONTACT ME" @click="toContact"></v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
            app

        >
            <v-app-bar-nav-icon @click="drawer = !drawer" append-icon>
                <v-icon  icon="mdi-microsoft-xbox-controller-menu"></v-icon>
            </v-app-bar-nav-icon>

            <v-toolbar-title>이클립스 중독</v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn icon @click="toggleTheme">
                <v-icon>mdi-theme-light-dark</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-github</v-icon>
            </v-btn>


        </v-app-bar>

        <v-main>
            <router-view v-slot="{ Component }">
                <transition name="slide-left">
                    <component :is="Component" />
                </transition>
            </router-view>
        </v-main>

    </v-app>
</template>

<script>
import { useTheme } from 'vuetify'
import {ref} from 'vue'
import {router} from './router'
export default {
    setup () {
        const theme = useTheme()
        const drawer = ref(false)

        return {
            drawer,
            theme,
            toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark',
            toWork: () => router.push({name: 'works'}),
            toLog: () => router.push({name: 'log'}),
            toContact: () => router.push({name: 'contact'})

        }
    },
}
</script>

