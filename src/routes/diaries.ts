import express from 'express'

const router = express.Router()

router.get('/',(_,res)=>{
    res.send('Fetching Routes')
})


router.post('/',(_,res)=>{
    res.send('Posting Routes')
})

export default router