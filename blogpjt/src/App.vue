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
            <v-btn icon @click="toGit">
                <v-icon>mdi-github</v-icon>
            </v-btn>
<!--            <v-btn @click="loginModal" v-if="!loginStatus">-->
<!--                <v-icon >mdi-login</v-icon>-->

<!--            </v-btn>-->
<!--                <v-btn v-else @click="showUserModal">hello {{id}}</v-btn>-->
        </v-app-bar>

        <v-main>
            <router-view v-slot="{ Component }">
                <transition name="slide-left">
                    <component :is="Component" />
                </transition>
            </router-view>
        </v-main>
        <div class="modal-wrapper" v-show="showModal">
            <div class="modal-area">
                <v-card height="390" elevation="10" rounded>
                    <v-card-title >로그인</v-card-title>
                    <v-divider></v-divider>
                    <v-card-subtitle>

                    </v-card-subtitle>
                    <v-card-text class="mt-4">
                        <v-text-field label="아이디" v-model="id"></v-text-field>
                        <v-text-field label="비밀번호" type="password" v-model="password"></v-text-field>
                        <v-checkbox label="아이디 기억하기" v-model="rememberMe"></v-checkbox>

                    </v-card-text>
                    <v-card-actions>
                        <v-btn @click="loginRequest">로그인</v-btn>
                        <v-btn disabled>회원가입</v-btn>
                    </v-card-actions>
                </v-card>

            </div>
        </div>

        <div v-show="userModal" class="userModal">
            <v-card>
                <v-card-actions>
                    <v-btn @click="logout" width="100%">
                        <span class="mr-2">로그아웃</span>
                        <v-icon>mdi-logout</v-icon>
                    </v-btn>
                </v-card-actions>
                <v-card-actions>
                    <v-btn width="100%" plain @click="userModal =false">
                        <v-icon>mdi-chevron-up</v-icon>
                    </v-btn>

                </v-card-actions>
            </v-card>
        </div>

    </v-app>
</template>

<script>
import { useTheme } from 'vuetify';
import {ref, watch} from 'vue';
import {router} from './router';
import {useUserStore} from "@/stores/UserStore";



export default {
    setup () {
        const theme = useTheme()
        const drawer = ref(false)
        const showModal = ref(false)
        const id = ref(localStorage.getItem('id') ? localStorage.getItem('id') : '')
        const password = ref()
        const rememberMe = ref(false)
        const userModal = ref(false)
        const userStore = useUserStore()

        const loginStatus = ref(localStorage.getItem('access_token')? true : false)


        watch(showModal, (newVal) => {
            if (newVal) {
               localStorage.getItem('id') ? id.value = localStorage.getItem('id') : id.value = ''
            }
        })

        return {
            drawer,
            showModal,
            userModal,
            theme,
            userStore,
            id,
            password,
            rememberMe,
            loginStatus,

            toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark',
            toWork: () => router.push({name: 'works'}),
            toLog: () => router.push({name: 'log'}),
            toContact: () => {

                router.push({name: 'contact'})
            },
            toGit: () => window.open('https://github.com/isaacShin-dev'),
            loginModal:() => {

                showModal.value = !showModal.value
            },
            showUserModal: () => {userModal.value = !userModal.value},

            // log in and out
            loginRequest:() => {
                userStore.login(id.value, password.value, rememberMe.value);
                showModal.value = false;
                loginStatus.value = true
            },
            logout: () => {
                userStore.logout();
                userModal.value = false;
                loginStatus.value = false
            },


        }
    },
}
</script>

<style scoped>
    .modal-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        background-color: rgba(0,0,0,0.5);
        /*display: none;*/
    }
    .modal-area{
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 400px;
        height: 450px;
        background-color: #fff;
        border-radius: 10px;
        padding: 20px;
        box-sizing: border-box;
        box-shadow: 0 0 20px rgba(0,0,0,0.5);
    }

    .userModal{
        position: fixed;
        top: 60px;
        right: 0;
        z-index: 999;
        width: 15%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        /*background-color: rgba(0,0,0,0.5);*/
    }

    @keyframes slideIn {
        0% {
            transform: translateY(-20%);
        }
        100% {
            transform: translateY(0);
        }
    }

    .userModal {
        /* 기존 스타일 속성들 */
        animation: slideIn 0.01s ease-in-out;
    }

</style>

