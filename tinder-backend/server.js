
import express from 'express';
import mongoose from 'mongoose';
import dbCards from './dbCards';

// App Config
const app = express();
const port = process.env.port || 8001;
const connection_url = `mongodb+srv://saidamir:Svo6x1D60SJGLZ2f@cluster0.i97l6.mongodb.net/tinderdb?retryWrites=true&w=majority`;

// Middlewares
app.use(express.json())
// Db config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,   
});
// API endpoints
app.get('/', (req, res) => res.status(200).send('Hello'));

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    dbCards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
});

app.get('/tinder/cards', (req, res) => {
    dbCards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
});
// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));