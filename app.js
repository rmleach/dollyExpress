const express = require('express')
const app = express()
const port = 3003
const cors = require('cors')

const data = require('./data.json')

app.use(express.static('public'))

app.use(cors())


app.get('/data', (req, res, next) => {
    res.status(200).send({
      "message": "nailed it",
      "data": data
      })
})

app.get('/:tag', (req, res, next) => {
  const tag = req.params.tag
  if(!data.tags.includes(tag)){
    res.status(404).send('SHAME! That tag does not exist')
  } else {
    const matching = data.songs.filter(song => song.tags.includes(tag))
    res.status(200).send(req.params.tag)}
})

app.use((req, res, next) => {
  res.status(404).send('Ya blew it')
})

app.listen(port, () => console.log(`Potty on port ${port}`))