import axios from "axios";
import { defineStore } from "pinia";
import {useRouter} from 'vue-router'

export const useUserStore = defineStore('userStore', {
    state: () => {
        const user = JSON.parse(localStorage.getItem('user')) || null;
        const token = localStorage.getItem('token') || null;
        const isLoggedIn = !!user && !!token;
        return {
            user,
            token,
            isLoggedIn,
        }
    },
    actions: {
        async login(item) {
            const router = useRouter();
            await axios.post(`${import.meta.env.VITE_API_URL}/user/login`, {
                username: item.email,
                password: item.password
            }).then(response => {
                this.user = response.data;
                this.isLoggedIn = true;
                localStorage.setItem('user', JSON.stringify(response.data));
                localStorage.setItem('token', response.data.token);

                // redirect to home page
                router.push('/');
            }).catch(error => {
                console.error('Login error:', error);
            });
        },
        logout() {
            this.user = null;
            this.token = null;
            this.isLoggedIn = false;
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        },
        checkLogin() {
            const user = localStorage.getItem('user');
            const token = localStorage.getItem('token');
            if (user && token) {
                this.user = JSON.parse(user);
                this.token = token;
                this.isLoggedIn = true;
            }
        }
    },
    getters: {
        getState: (state) => {
            return state.user;
        },
        getUser: (state) => {
            return localStorage.getItem('user');
        },
        getToken: (state) => {
            return localStorage.getItem('token');
        },
        isUserLoggedIn: (state) => state.isLoggedIn,
    }
})