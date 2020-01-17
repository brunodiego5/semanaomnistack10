const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// mongodb (nao relacional)
mongoose.connect('mongodb+srv://brunodiego5:brunodiego5@cluster0-fwtlo.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json()); //use todos os tipo de http, express.json deve vir antes do routes
app.use(routes);

app.listen(3333);