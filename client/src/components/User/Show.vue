<template>
<div>
    <div v-if = "user!==null">
    <h1>SHOW USER ID {{ user.id }}</h1>
    <p>ชื่อ-สกุล : {{ user.name }} - {{ user.lastname }}</p>
    <p>email : {{ user.email }}</p>
    <p>password : {{ user.password }}</p>
    </div>
</div>
</template>
<script>
import UserServices from '@/services/UsersServices'
export default {
    data(){
        return{
            user: null
        }
    },

    async created(){
        let userId = this.$route.params.userId
        this.user = (await UserServices.show(userId)).data
    }
}
</script>
<style scoped>

</style>