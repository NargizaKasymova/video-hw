const Router = require('express')
const router = new Router()

router.post('/posts',  async (req, res) => {
    try {
    const {author, title, content, picture} = req.body
    const post = await Post.create({author, title, content, picture})
    console.log(req.body)
    res.json(post)
    // res.status(200).json('Сервер работает 123')
} catch(e) {
    res.status(500).json(e)
}
})
router.get('/posts')
router.get('/posts/:id')
router.put('/posts')
router.delete('/posts/:id')

export default router