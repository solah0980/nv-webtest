const {Blog} = require('../models')

module.exports = {
    async index (req, res){
        try{
            const blogs = await Blog.findAll()
            res.send(blogs)
        }catch (err){
            res.status(500).send({
                error: 'The blog infomation was correct'
            })
        }
    },

    async create (req, res){
        try{
            const blog = await Blog.create(req.body)
            res.send(blog.toJSON())
        }catch (err){
            res.status(500).send({
                error: 'Create blog correct'
            })
        }
    },

    async put (req, res){
        try{
            await Blog.update(req.body, {
                where:{
                    id: req.params.blogId
                }
            })
            res.send(req.body)
        }catch (err){
            res.status(500).send({
                error: 'Edit blog correct'
            })
        }
    },

    async remove (req, res){
        try{
            const blog = await Blog.findOne({
                where:{
                    id: req.params.blogId
                }
            })
            if(!blog){
                return res.status(403).send({
                    error: 'remove blog correct'
                })
            }

            await blog.destroy()
            res.send(blog)
        }catch (err){
            res.status(500).send({
                error: 'The blog infomation was incorrect'
            })
        }
    },

    async show (req, res){
        try{
            const blog = await Blog.findById(req.params.blogId)
            res.send(blog)
        }catch (err){
            res.status(500).send({
                error: 'The blog infomation was incorrect'
            })
        }
    }
}