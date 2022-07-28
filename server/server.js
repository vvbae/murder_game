const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT ||3080;

const DbMgmt = require('./readDB');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// user page
app.get('/api/dbs/:dbName', (req, res) => {
    DbMgmt.readDbData(req.params.dbName)
    .then(data => res.send(data));
});

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/index.html'));
// });

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'build')));
      
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
}
  
app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})