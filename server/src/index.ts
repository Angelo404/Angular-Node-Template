import * as express from 'express';

const app: express.Application = express();
const port: number = 3000;

// Welcome
app.get('/', function (req, res) {
    res.send('Back-end works');
});


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});