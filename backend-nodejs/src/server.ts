import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.send('Olá NLW 05');
})

app.listen(3333, () => console.log('Serve is runing 3333'));