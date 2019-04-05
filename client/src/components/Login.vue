<template>
    <div>
        <h1>User Login</h1>
        <form v-on:submit.prevent="onLogin">
            <p>username : <input type="text" v-model="email"/></p>
            <p>password : <input type="password" v-model="password"/></p>
            <p><button type="submit">Login</button></p>
            <div class="error" v-if="error">ล็อกอินไม่ผ่าน</div>
        </form>
    </div>
</template>
<script>
import AuthenServices from '@/services/AuthenServices'
export default {
    data(){
        return{
            email: '',
            password: '',
            error: null
        }
    },

    methods:{
        async onLogin () {
            try {
                const response = await AuthenServices.login({
                email: this.email,
                password: this.password
             })
        
                this.$store.dispatch('setToken', response.data.token)
                this.$store.dispatch('setUser', response.data.user)

                this.$router.push({
                     name: 'users'
                })
        }catch (err){
            this.error = err.response.data.error
            this.email = ''
            this.password = ''
        }
    }
}

}

</script>
<style scoped>
.error{
    color: red
}
</style>
