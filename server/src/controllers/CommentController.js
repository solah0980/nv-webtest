const {Comment} = require('../models')

module.exports = {
    async index (req, res){
        try{
            const comments = await Comment.findAll(req.body)
            res.send(comments)
        }catch (err){
            res.status(500).send({
                error: 'The infomation was incorrect'
            })
        }
    },

    async create (req, res){
        try{
            const comment = await Comment.create(req.body)
            res.send(comment.toJSON())
        }catch (err){
            req.status(500).send({
                error: 'The infomation was incorrect'
            })
        }
    },

    async put (req, res){
        try{
            const comment = await Comment.update(req.body, {
                where:{
                    id: req.params.commentId
                }
            })
            res.send(req.body)
        }catch (err){
            req.status(500).send({
                error: 'Update comment incorrect'
            })
        }
    },

    async remove (req, res){
        try{
            const comment = await Comment.findOne({
                where:{
                    id: req.params.commentId
                }
            })

            if(!comment){
                req.status(403).send({
                    error: 'The comment infomation incorrect'
                })
            }

            await comment.destroy()
            res.send(comment)
        }catch (err){
            req.status(500).send({
                error: 'the comment infomation was incorrect'
            })
        }
    },

    async show (req, res){
        try{
            const comment = await Comment.findById(req.params.commentId)
            res.send(comment)
        }catch (err){
            req.status(500).send({
                error: 'The comment infomation was incorrect'
            })
        }
    }

}