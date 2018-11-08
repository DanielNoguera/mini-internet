//Daniel Noguera
//this requires express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.get('/make/:location/:content', function(req, res){
if(req.params.locations != "" && req.params.locations != "/" && req.params.locations != "/make" && req.params.locations != "/info" ) {
  makecon(req.params.location, req.params.content)
   res.send('The page you created is ' + req.params.location + ' with the content of ' + req.params.content);
   }else{
   res.send('that page is used for other things');
   }
});
app.get('/', function(req, res) {
res.redirect('/info');
})

app.get('/make', function(req, res) {
res.redirect('/info');
})

app.get('/info', function(req, res) {
res.send('<h1>Welcome to the mini internet!</h1>To visit a site, simply type a slash and where you want to go.  Is there nothing there? Then make something!  To create a new mini-webpage type in the search bar the name of this website, then /make  then type the address of your new page.  then type / then the content of your new page (html, css, and javascript compatible!)');
})
function makecon(location, content) {
  app.get(`/${location}`, function(req, res){
     res.send(content)  });
}
app.listen(3000);
