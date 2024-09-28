// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// Create a comment list
const comments = [
  { username: 'Tom', content: 'I commented on this post.' }
];
// Use body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Set the template engine
app.set('view engine', 'ejs');
// Set the template directory
app.set('views', './views');
// Set the static file directory
app.use(express.static('public'));
// Display the comment list
app.get('/comments', (req, res) => {
  res.render('comments', { comments });
});
// Add a comment
app.post('/comments', (req, res) => {
  comments.push(req
    .body);
    res.redirect('/comments');
}
);
// Start the server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
