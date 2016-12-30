import path from 'path'
import express from 'express'
import React from 'react'
import App from './app'
import routes from './routes'
import { renderToString } from 'react-dom/server'
import serveStatic from 'serve-static';
import { RouterContext, match } from 'react-router'


const argv = require('optimist').argv;

 let app = express();
// let React = require('react')
// let renderToString = require('react-dom/server');
// let App = require('./app.jsx')

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Methods", "OPTIONS, HEAD, GET, PUT, DELETE, POST")
//   next();
// })
app.use(serveStatic(path.join(process.cwd(), 'views')));
if(argv.c) {
  app.use((req, res) => {
     res.send(renderFullPage('')); 
  })
}
else {
  app.use(handleRender)
}




function handleRender(req, res) {
  let html = '';
  if(req.url.match('favicon')) {
    return res.send('')
  }
 
   match({
    routes: routes,
    location: req.url,
  }, (err, redirect, props) => {
    if (redirect) {
      res.redirect(301, redirect.pathname + redirect.search);
    } else if (err) {
      console.log(err);
      next(err);
      // res.send(500, error.message);
    } else if (props === null) {
      res.status(404)
      html = 'Not found';
      res.send(html)
    } else {
      html = renderToString(<RouterContext {...props}/>);
      res.send(renderFullPage(html))
    }
  });


  // Send the rendered page back to the client
}

function renderFullPage(html) {
  return `<!doctype html>
<html>
  <head>
    <title>Redux Universal Example</title>
  </head>
  <body>
    <div id="root">${html}</div>
    <script src="/js/dist/bundle.js"></script>
  </body>
</html>`
}

// app.use(require('cookie-parser')(credentials.cookieSecret));

// app.use(expressSession({
// 	secret: credentials.cookieSecret,
// 	resave: false,
// 	saveUninitialized: false
// }))
// app.use(require('body-parser').urlencoded({ extended: true }));
// // Установка механизма представления handlebars
// let handlebars = require('express-handlebars')
// 	.create({ defaultLayout:'main' });
// app.engine('handlebars', handlebars.engine);
// app.set('view engine', 'handlebars');


// app.use(expressValidator());

// app.use(express.static(__dirname + '/public'));

 app.set('port', process.env.PORT || 3000);


// app.get('/', (req, res) =>{
//   const html = renderToString(
//     <App />
//   )
// 	res.send(html)
// }) 

// пользовательская страница 404
app.use(function(req, res){
res.type('text/plain');
res.status(404);
res.send(404);
});
// пользовательская страница 500
app.use(function(err, req, res, next){
console.error(err.stack);
res.type('text/plain');
res.status(500);
res.send(500);
});

app.listen(app.get('port'), function(){
console.log( 'Express запущен на http://localhost:' +
app.get('port') + '; нажмите Ctrl+C для завершения.' );
});




