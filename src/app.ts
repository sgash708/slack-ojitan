import express from 'express';

const app: express.Express = express();
const port: string = process.env.PORT || '3000';

app.get('/', (req, res) => res.send('Hello world!!'));
app.listen(port, () => console.log(`listening on port ${port}!`));