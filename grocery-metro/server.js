if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const path = require('path');
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const users = require('./json/users.json')
const fs = require('fs')
// var users = require('./json/users.json');
var allItems = require('./json/items.json')

// console.log(users)
const initPassport = require('./passport-config')
initPassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)
// const users = []
const viewsPath = path.join(__dirname, './views')

 const loadJson = (dataPath) => {
  const rawdata = fs.readFileSync(dataPath);
  return JSON.parse(rawdata);
  }
// const users = []
app.use(express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: false }))
app.set('views', viewsPath);

app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

app.get('/index', checkAuthenticated, (req, res) => {
  res.render('index.html', { name: req.user.name })
})

app.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login.html')
})

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/index',
  failureRedirect: '/login',
  failureFlash: true
}))

app.get('/register', checkNotAuthenticated, (req, res) => {
  res.render('register.html')
})

// app.get('/index', (req, res) => {
//   res.render('index.html')
// })
app.get('/addItem', (req, res) => {
  res.render('addItem.html')
})


app.post('/register', checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    console.log(users)
    let user = {
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    }
      credentials = loadJson('./json/users.json');
      credentials.push(user)
    //  userData = JSON.stringify(user)
    // users.push(userData)
    console.log(users);
    //  users = JSON.stringify(users);
    //  userData = JSON.stringify(user)
    //  console.log(users);
    fs.writeFileSync('./json/users.json', JSON.stringify(credentials))
    res.redirect('/login')
  } catch {
    res.redirect('/register')
  }
})

app.delete('/logout', (req, res) => {
  req.logOut()
  res.redirect('/login')
})

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }

  res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }
  next()
}

app.get('/getAllItems', (req, res) => {
  res.json({ allItems });
});

app.post('/upload', (req, res) => {
  console.log(req.body)
    if (req.files) {
      const file = req.files.file
      const fileName = file.name
      file.mv(`${__dirname}/public/img/${fileName}`, err => {
        if (err) {
          console.log(err)
          res.send('There is error')
        } else {
          res.json({ "result": "true" })
          res.redirect('/addItem')
        }
      })
    } else {
      res.send('There are no files')
    }
})

app.listen(3000)