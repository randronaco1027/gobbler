const router = require('express').Router()
const { Post, User } = require('../../models')

router.get('/', (req, res) => {
    Post.findAll({
        include: {
            model: User,
            attributes: ['id', 'username']
        }
    })
        .then(postData => res.json(postData))
        .catch(err => {
            console.log(err)
            res.status.apply(500).json(err)
        })
})

router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        include: {
            model: User,
            attributes: ['id', 'username']
        }
    })
        .then(postData => res.json(postData))
        .catch(err => {
            console.log(err)
            res.status.apply(500).json(err)
        })
})

router.post('/', (req, res) => {
    Post.create({
        title: req.body.title,
        post_url: req.body.post_url,
        recipe_text: req.body.recipe_text,
        user_id: req.body.user_id
    })
        .then(postData => res.json(postData))
        .catch(err => {
            console.log(err)
            res.status.apply(500).json(err)
        })
})

module.exports = router