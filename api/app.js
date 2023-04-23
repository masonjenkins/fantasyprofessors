const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const articlesRoutes = require('./routes/articlesRoutes');
const usersRoutes = require('./routes/usersRoutes');
const secrets = require('./environment')
const HttpError = require('./models/httpError')
const app = express();

app.use(bodyParser.json());

app.use('/api/articles', articlesRoutes);
app.use('/api/users', usersRoutes);

app.use((req, res, next) => {
    return new HttpError('Route not found.', 404)
});

app.use((error, req, res, next) => {
    if(res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({
        status: error.code || 500, 
        message: error.message || "An unknown error occurred."
    })
})

mongoose
    .connect(`mongodb+srv://${secrets.mongoUser}:${secrets.mongoPassword}@cluster0.shqmdcm.mongodb.net/fantasyprofessors?retryWrites=true&w=majority`)
    .then(() => {app.listen(3000)})
    .catch(e => {console.log(e)})
