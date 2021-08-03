const express=require('express');
const cookieParser = require('cookie-parser');
const app=express();
const port=8000;
const expressLayouts = require('express-ejs-layouts');
const db= require('./config/mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoDbStore = require('connect-mongo');
const initialize  = require('passport');
const sassMiddleware = require('node-sass-middleware');
const flash = require('connect-flash');
const customMware = require('./config/middleware');

app.use(sassMiddleware({
        src: './assets/scss',
        dest: './assets/css',
        debug:true,
        outputStyle: 'extended',
        prefix: '/css'
}));
app.use(express.urlencoded());


app.use(cookieParser());
app.use(expressLayouts);
//extract style and script from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.use(express.static('./assets'));

//use express router before server start

 //anything after localhost routes will be called

//setup the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//mongo store
app.use(session({
     name: 'codeial',
     //change the secret before deployment in production
     secret: 'blasomething',
     saveUninitialized: false,
     resave: false,
     cookie: {
         maxAge:(1000*60*100)
     },
        
    //  store: new MongoStore(
    //         {
    //         mongooseConnection: db,
    //         autoRemove: 'disabled'
    //         },
    //     function(err){
    //         console.log(err || 'connect -mongodb setup ok');
    //     }
        
    //     )
    store: MongoDbStore.create({
        mongoUrl: 'mongodb://localhost/codeial_development'
    })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use(flash());
app.use(customMware.setFlash);
app.use('/',require('./routes'));//before start the server we have use this middle ware app.use(route)



app.listen(port, function(err){
    if(err){
        console.log('error', err);
        console.log(`error in running server : ${err}`);
    }

    console.log(`server is up and running on port  : ${port}` );
})