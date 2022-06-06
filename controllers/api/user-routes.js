const {User} = require ("../../models");
const router = require ('express').Router();

router.post('/', function (req, res) {
    User.create(req.body).then(function (user) {
        res.json(user);
    }).catch(function (err) {
        res.json(err);
    })
    
})
module.exports = router;