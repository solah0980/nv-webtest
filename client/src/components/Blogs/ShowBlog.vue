<template>
    <div>
        <div v-if= "blog!==null"> 
        <h1>Show Blog ID : {{ blog.id }}</h1>
        <p>title: {{ blog.title }}</p>
        <p>thumbnail: {{ blog.thumbnail }}</p>
        <p>content: {{ blog.content }}</p>
        <p>category: {{ blog.category }}</p>
        <p><button v-on:click="NavigateTo('/blog/edit/'+ blog.id)">แก้ไขข้อมูล</button></p>
        <p><button v-on:click="backHome('/blogs')">กลับ</button></p>
        </div>
    </div>
</template>
<script>
import BlogServices from '@/services/BlogServices'
export default {
    data(){
        return{
            blog: null
        }
    },

    async created(){
        let blogId = this.$route.params.blogId
        this.blog = (await BlogServices.show(blogId)).data
    },

    methods:{
        NavigateTo(route){
            this.$router.push(route)
        },

        backHome(route){
            this.$router.push(route)
        }
    }
}
</script>
<style scoped>

</style>
