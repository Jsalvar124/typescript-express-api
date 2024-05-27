import express from 'express'
import diartyRouter from './routes/diaries'
const app = express()
app.use(express.json()) // Req.body => json

const PORT = 3000


app.get('/ping', (_req, res)=>{
    console.log('PING!')
    res.send('PONG')
})

app.use('/api/diaries', diartyRouter)


app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
})