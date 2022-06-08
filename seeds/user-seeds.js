const { User } = require('../models')

const userData = [
    {
        username: 'Betty Crocker',
        email: 'crocker12@aol.com',
        password: 'thecrockster123'
    },
    {
        username: 'Colonel Sanders',
        email: 'kfc1952@yahoo.com',
        password: 'fingerlickinggood'
    },
    {
        username: 'Julia Child',
        email: 'jchild1@gmail.com',
        password: 'mastertheart'
    },
    {
        username: 'Chef Boyardee',
        email: 'pastaman@aol.com',
        password: 'spaghettios'
    }
]

const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers