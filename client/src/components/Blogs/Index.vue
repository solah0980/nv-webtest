<template>
    <div>
        <h1>Get All Blog</h1>
        <h4>จำนวนBLOG {{ blogs.length }}</h4>
        <div v-for="blog in blogs" v-bind:key="blog.id">
            <p>id: {{ blog.id }}</p>
            <p>title: {{ blog.title }}</p>
            <p>content: {{ blog.content }}</p>
            <p>category: {{ blog.category }}</p>
            <p>status: {{ blog.status }}</p>
            <button v-on:click="Navegate('/blog/'+blog.id)">ดูข้อมูล</button>
            <button v-on:click="Navegate('/blog/edit/'+blog.id)">แก้ไขข้อมูล</button>
            <button v-on:click="deleteBlog(blog)">ลบข้อมูล</button>
            <hr>
        </div>
    </div>
</template>
<script>
import BlogService from '@/services/BlogServices'
export default {
    data(){
        return{
            blogs: []
        }
    },

    async created(){
            this.blogs = (await BlogService.index()).data
        },

    methods:{
        Navegate(route){
            this.$router.push(route)
        },

     async deleteBlog(blog){
        let result = confirm("ยืนยันลบข้อมูล")
         if(result){
            try{
                await BlogService.delete(blog)
                this.refreshData()
            }catch (err){
                console.log(err)
            }
         }
     },
      async refreshData(){
          this.blogs = (await BlogService.index()).data
      }
    },

    
 } 

</script>
<style scoped>

</style>
