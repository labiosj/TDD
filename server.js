const express = require('express');
const path = require('path');

const app = express();

const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets our server to use the public directory for static assets
app.use(express.static(path.join(__dirname, "./app/public")));

// Routes
// -----------------
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);
  
  app.listen(PORT, function(){
    console.log(`App is now listening on PORT ${PORT}`);
  })