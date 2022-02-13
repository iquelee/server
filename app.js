const express = require('express')
const app = express()
const path = require('path')

//解决跨域
app.use(require('cors')())

app.get('/api/age', (req,res) => {
  res.sendFile(path.join(__dirname, '/public/data/age.json'))
})

app.get('/api/trend', (req,res) => {
  res.sendFile(path.join(__dirname, '/public/data/trend.json'))
})

app.get('/api/hZone', (req,res) => {
  res.sendFile(path.join(__dirname, '/public/data/hZone.json'))
})

app.listen(8111)