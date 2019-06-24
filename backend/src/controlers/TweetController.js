const Tweet = require('../models/Tweet')

module.exports = {
    async index(req,res) // lista os tweets
    {
        const tweets = await Tweet.find({}).sort('-createdAt') // orderna do mais recente pro mais antigo
        return res.json(tweets)
    },
    async store(req,res) // salva os tweets
    {
        const tweet = await Tweet.create(req.body)
        req.io.emit('tweet', tweet)
        return res.json(tweet)
    }
}