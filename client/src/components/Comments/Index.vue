<template>
    <div>
        <h1>Get All comment</h1>
        <h4>จำนวน Comment {{ comments.length }}</h4>
        <div v-for="comment in comments" v-bind:key="comment.id">
            <p>id: {{ comment.id }}</p>
            <p>BlogId: {{ comment.blogId }}</p>
            <p>comment: {{ comment.comment }}</p>
            <button v-on:click="NavigareTo()">ดูข้อมูล</button>
            <button v-on:click="DeleteComment(comment)">ลบข้อมูล</button><hr>
        </div>
    </div>
</template>
<script>
import CommentServices from '@/services/CommentServices'
export default {
    data(){
        return{
            comments: []
        }
    },

    async created(){
        this.comments = (await CommentServices.index()).data
    },

    methods:{
        NavigareTo(route){
            this.$router.push(route)
        },

        async DeleteComment(comment){
            try{
                await CommentServices.delete(comment)
                this.Refresh()
            }catch (err){
                console.log(err)
            }
        },

        async Refresh(){
            this.comments = (await CommentServices.index()).data
        }
    }
}
</script>
<style scoped>

</style>
