import { defineStore } from "pinia";
import router from '../../components/router';

export const userInfo = defineStore("user", {
    state: () => ({
        user: JSON.parse(localStorage.getItem('user') || ''),
        returnUrl: null
    }),
    actions: {
        login(user: any) {
            this.user = user;
            localStorage.setItem('user', JSON.stringify(user));
            router.push(this.returnUrl || '/');
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            router.push('/login');
        }
    }
});
