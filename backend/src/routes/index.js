const {Router} = require('express')
const router = Router()
const Article = require('../models/Article')
const faker = require('faker')

router.get('/',(req,res)=>{
    res.send('ok desde index router')
})
router.get('/create',async (req,res)=>{
    // for(let i = 0;i < 100;i++){
    //     await Article.create({
    //         num:i+1,
    //         title: faker.name.title(),
    //         imageURL: faker.image.imageUrl(),
    //         description: faker.lorem.paragraph()
    //     })
    // }
    res.send('ok 100 elementos creados')
})
router.get('/articles',async(req,res)=>{
    const articles = await Article.find()
    res.json(articles)
})

module.exports = router