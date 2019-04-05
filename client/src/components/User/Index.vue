<template>
<div>
    <h1>GET ALL USER</h1>
    <div v-if ="users.length">
        <h2>จำนวนผู้ใช้งาน : {{ users.length }}</h2>
        <p><button  v-on:click="Navigate('/user/create')">สร้างผู้ใช้งาน</button></p>
    <div v-for = "user in users" v-bind:key="user.id">
        <div>id : {{ user.id }}</div>
        <div>ชื่อ-สกุล : {{ user.name }}  {{ user.lastname }}</div>
        <div>email : {{ user.email }}</div>
        <div>password : {{ user.password }}</div>
        <button v-on:click="Navigate('/user/'+user.id)">ดูข้อมูลผู้ใช้</button>
        <button v-on:click="Navigate('/user/edit/'+user.id)">แก้ไขข้อมูลผู้ใช้</button>
        <button v-on:click="DeleteUser(user)">ลบข้อมูลผู้ใช้</button><hr>
    </div>
   
    </div>
    
</div>
</template>
<script>
import UserService from '@/services/UsersServices'
export default {
    data(){
        return{
            users: []
        }
    },
    
    async created(){
        this.users = (await UserService.index()).data
    },

    methods:{
        Navigate(route){
            this.$router.push(route)
        },
     async DeleteUser(user){
            let result = confirm('ยืนยันลบข้อมูลผู้ใช้')
            try{
                if(result){
                    await UserService.delete(user)
                this.refreshData()
                }
            }catch (err){
                console.log(err)
            }
        },

        async refreshData(){
            this.users = (await UserService.index()).data
        },

    }
}
</script>
<style scoped>

</style>
