const express = require('express');
const mongoose = require('mongoose');
// const Query = mongoose.model('queryDB')

const app = express();
const port = 3000
 
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('home')
})
app.get('/contact', (req, res) => {
  res.render('contact')
})
app.get('/events', (req, res) => {
  res.render('events')
})
app.get('/gallery', (req, res) => {
  res.render('gallery')
})
app.get('/about', (req, res) => {
  res.render('about')
})
app.get('/images', (req, res) => {
  res.render('images')
})
app.get('/register', (req, res) => {
  res.render('register')
})
app.post('/submitQuery', (req, res) => {
  console.log('Hey')
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})