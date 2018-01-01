const express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    compression = require('compression'),

    Project = require('./models/project'),
    User = require('./models/user'),
    Diff = require('./models/diff'),
    Allotment = require('./models/allotment');

console.log('connecting to MongoDB');
var db_uri = process.env.MONGOLAB_URI || process.env.MONGODB_URI || 'localhost';
mongoose.connect(db_uri);

var app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());

app.get('/projects', (req, res) => {
  Project.find({}, (err, projects) => {
    return res.json(projects);
  });
});

app.post('/projects', (req, res) => {
  let p = new Project({
    name: req.body.name,
    user: 'test',
    html: '<h1>Hello World</h1>',
    js: 'function e() { }',
    css: 'h1 { }',
    editable: true,
    created: new Date(),
    updated: new Date()
  });
  p.save((err) => {
    return res.json(p);
  });
});

app.listen(process.env.PORT || 8080, () => {
  console.log('ready to go');
});
