import { defineStore} from "pinia";
import axios from "axios";
export const useUserStore = defineStore('UserStore', {
    //state
    state: () => {
        return{
            token : '',

        };
    },

    //actions
    actions:{
         async login(id, password, rememberMe){
             const response = await axios.post('http://localhost:8000/accounts/login/', {id, password})

                // this.state.token = response.data.Token;
                this.token = response.data.Token;
                localStorage.setItem('access_token', response.data.Token);
                if (rememberMe) {
                    localStorage.setItem('id', id);

                }



        },
        logout(){
            this.token = '';
            localStorage.removeItem('access_token');

        }
    }

    //getters
})