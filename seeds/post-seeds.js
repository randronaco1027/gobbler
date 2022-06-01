const { Post } = require('../models')

const postData = [
    {
        title: 'Avocado Bread',
        post_url: 'https://www.foodnetwork.com/fn-dish/news/how-to-make-retro-vintage-avocado-bread-recipe-tiktok',
        recipe_text: 'Cut out the middle man! Make the bread with avocados!',
        user_id: 1
    },
    {
        title: 'Tomato Soup Cake',
        post_url: 'https://www.tasteofhome.com/article/campbells-tomato-soup-cake/',
        recipe_text: "If you're running short on time, combine this classic soup with some cake!",
        user_id: 2
    },
    {
        title: 'Emergency War Cake from the 1940s',
        post_url: 'https://www.rockrecipes.com/war-cake-a-k-a-poor-mans-cake/',
        recipe_text: 'Trying to make a cake but have none of the standard ingredients?',
        user_id: 3
    },
    {
        title: 'Tuna Salad Jello',
        post_url: 'https://www.justapinch.com/recipes/side/other-side-dish/ring-around-the-tuna-salad.html',
        recipe_text: "I can't even lie, this one is nasty",
        user_id: 4
    },
]

const seedPosts = () => Post.bulkCreate(postData)

module.exports = seedPosts