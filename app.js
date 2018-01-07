const express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    compression = require('compression'),
    cors = require('cors'),
    helmet = require('helmet'),

    Project = require('./models/project'),
    User = require('./models/user'),
    Diff = require('./models/diff'),
    Allotment = require('./models/allotment');

console.log('connecting to MongoDB');
var db_uri = process.env.MONGOLAB_URI || process.env.MONGODB_URI || 'localhost';
mongoose.connect(db_uri);

var app = express();

app.use(helmet());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.use(cors());

app.get('/projects', (req, res) => {
  Project.find({}).select('_id name user description').exec((err, projects) => {
    return res.json(projects);
  });
});

app.get('/projects/:id', (req, res) => {
  Project.findById(req.params.id).select('name user html css js').exec((err, project) => {
    return res.json(project);
  });
});

app.post('/projects', (req, res) => {
  let p = new Project({
    name: req.body.name,
    description: req.body.description,
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
