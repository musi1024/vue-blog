import request from '@/helpers/request'

const Url = {
    Register: '/auth/register',
    Login: '/auth/login',
    Logout: '/auth/logout',
    GetInfo: '/auth',
}

export default {
    register({username, password}) {
        return request(Url.Register, 'POST', {username, password})
    },
    login({username, password}) {
        return request(Url.Login, 'POST', {username, password})
    },
    logout() {
        return request(Url.Logout)
    },  
    getInfo() {
        return request(Url.GetInfo)
    }       
}