<template>
    <div>
    <h1>EDIT USER {{ user.id }}</h1>
    <form v-on:submit.prevent='EditUser'>
        <p>ชื่อ : <input type="text" v-model="user.name"></p>
        <p>สกุล : <input type="text" v-model="user.lastname"></p>
        <p>email : <input type="text" v-model="user.email"></p>
        <p>password : <input type="text" v-model="user.password"></p>
        <p><button type="submit">แก้ไขข้อมูล</button></p>
    </form>
    </div>
</template>
<script>
import UserServices from '@/services/UsersServices'
export default {
    data(){
        return{
            user:{
                name:'',
                lastname:'',
                email:'',
                password:'',
                status:'active',
            }
        }
    },

    methods:{
        async EditUser(){
            try{
                await UserServices.put(this.user)
                this.$router.push({
                    name:'users'
                })
            }catch (err){
                console.log(err)
            }
        }
    },
    
    
    async created(){
        try{
            let userId = this.$route.params.userId
            this.user = (await UserServices.show(userId)).data
        } catch(err){
          console.log(err)
      }
    }
}
</script>
<style scoped>

</style>