import Api from './Api'

export default  {
    index (){
        return Api().get('comments')
    },
    show (commentId){
        return Api().get('comment/'+commentId)
    },
    post (comment){
        return Api().post('comment')
    },
    put (commentId){
        return Api().put('comment/edit/'+comment.id, comment)
    },
    delete (comment){
        return Api().delete('comment/'+comment.id, comment)
    },
}