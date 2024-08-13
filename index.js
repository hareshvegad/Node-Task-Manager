const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    fs.readdir(`./files`, function(err, files){
        res.render('index.ejs', {files: files})
    })
})

app.post('/create', function (req, res) {
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err){
        res.redirect('/')
    })
    // console.log(req.body)
})

app.get('/file/:filename', function (req, res) {
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function(err, filedata){
        res.render('show.ejs', { filename: req.params.filename, filedata: filedata})
        // console.log(filedata)
    })
})

app.get('/edit/:filename', function (req, res) {
    res.render('edit.ejs',{filename: req.params.filename})
})

app.post('/edit', function (req, res) {
    fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new}`, function(err){
        res.redirect('/')
    })
    // console.log(req.body)
})

app.listen(3000, function(){
    console.log("listen at localhost:3000")
})