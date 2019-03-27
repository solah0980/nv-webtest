<template>
    <div>
    <h1>CREATE USER</h1>
    <form v-on:submit.prevent= "createUser">
        <p>name <input type='text' v-model="user.name"></p>
        <p>lastname <input type='text' v-model="user.lastname"></p>
        <p>email <input type='text' v-model="user.email"></p>
        <p>password <input type='text' v-model="user.password"></p>
        <p><button type="submit">สร้างผู้ใช้</button></p><hr>
    </form>
        <div>
            <p>name : {{ user.name }}</p>
            <p>lastname : {{ user.lastname }}</p>
            <p>email : {{ user.email }}</p>
            <p>password : {{ user.password }}</p>
        </div>
    </div>
</template>
<script>
import UserService from '@/services/UsersServices'
export default {
    data(){
        return{
            user:{
                name: '',
                lastname: '',
                email: '',
                password: '',
                status: 'active',
            }
    }
    },

    methods:{
        async createUser(){
        try{
            await UserService.post(this.user)
            this.$router.push({
                name: 'users'
            })
        } catch (err){
            cansole.log(err)
        }
    }
  }
}
</script>
<style scoped>

</style>