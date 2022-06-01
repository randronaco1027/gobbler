const { User } = require('../models')

const userData = [
    {
        username: 'Betty Crocker',
        password: 'thecrockster123'
    },
    {
        username: 'Colonel Sanders',
        password: 'fingerlickinggood'
    },
    {
        username: 'Julia Child',
        password: 'mastertheart'
    },
    {
        username: 'Chef Boyardee',
        password: 'spaghettios'
    }
]

const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers