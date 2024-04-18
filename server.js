const express = require('express')
const app = express()
const path = require('path')

const api_routes =  require('./routes/api_routes') // load api routes

const PORT = 3333 //PORT can be any number

app.use(express.static('./public')) //Middlewear to make get routes for public static files

app.use(express.json()) //allow json to be sent through routes

app.use('/api', api_routes) //Load api routes

app.get('*', (req,res) => { //catch-all routes
    res.sendFile(path.join(__dirname,'public','index.html'))
})

app.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname,'public','notes.html'))
})

app.listen(PORT, () => {
    console.log('Server running on port', PORT)
})