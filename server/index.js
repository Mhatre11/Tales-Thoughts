import express from 'express';

const app = express();
const port = 3000 | process.env.PORT;


app.get('/', (request , response)=>{
    response.send('Hello World!');
})

app.listen(port , ()=>{
    console.log(`App is listening on port ${port}`);
})