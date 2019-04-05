import Api from './Api'

export default {
    index (search){
        return Api().get('blogs')
    },
    create (blog){
        return Api().post('blog', blog)
    },
    show (blogId){
        return Api().get('blog/'+blogId)
    },
    put (blog){
        return Api().put('blog/'+blog.id, blog)
    },
    delete (blog){
        return Api().delete('blog/'+blog.id, blog)
    }
}