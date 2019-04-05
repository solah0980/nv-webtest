<template>
    <div>
        <h1>Edit Blog Id {{ blog.id }}</h1>
        <form v-on:submit.prevent="EditBlog">
        <p>title : <input type="text" v-model="blog.title"></p>
        <p><strong>content : </strong></p>
        <p><vue-ckeditor v-model.lazy="blog.content" :config="config" @blur="onBlur($event)" @focus="onFocus($event)" /></p>
        <p>category : <input type="text" v-model="blog.category"></p>
        <p>status : <input type="text" v-model="blog.status"></p>
        <p><button type="submit">แก้ไขข้อมูล</button></p>
        </form>
    </div>
</template>
<script>
import BlogServices from '@/services/BlogServices'
import VueCkeditor from 'vue-ckeditor2'
export default {
  data(){
      return{
          blog:{
              title: '',
              thumbnail: 'null',
              picture: 'null',
              content: '',
              category: '',
              status: ''
          },

          config:{
              toolbar:[
                  ["Bold", "Italic", "Underline", "Strike", "Subscript", "Superscript"] ],
                  heigth:300
          }
          
      }
  },
  
  methods:{
      async EditBlog(){
          try{
              await BlogServices.put(this.blog)
              this.$router.push({
                  name: 'blogs'
              })
          }catch (err){
              console.log(err)
          }
      },
      onBlur (editor) {
            console.log(editor);
        },
        onFocus (editor) {
            console.log(editor);
        },
  },
  components:{
      VueCkeditor
  },
  async created(){
      let blogId = this.$route.params.blogId
      this.blog = (await BlogServices.show(blogId)).data
  },
  
}
</script>
<style scoped>

</style>
