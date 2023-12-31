import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_API
})

export const useApi = () => ({
    validateToken: async (token: string) => {
        return {
            user: { id: 3, name: 'Eduardo', email: 'eduardocastroemp@gmail.com' }
        } // usado somente para testes
        const response = await api.post('/validate', { token });
        return response.data
    },
    signin: async (email: string, password: string) => {
        return {
            user: { id: 3, name: 'Eduardo', email: 'eduardocastroemp@gmail.com' },
            token: '123456789'
        } // usado somente para testes
        const response = await api.post('/signin', { email, password });
        return response.data;
    },
    logout: async () => {
        return { status: true }
        const response = await api.post('/logout');
        return response.data
    }
})