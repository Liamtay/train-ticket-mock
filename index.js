const express = require('express');
const { response } = require('express');

const app = express();

app.get('/', (request, response) => {
    response.status(200);
    response.send('hello express');
    response.end();
});

app.get('/rest',(request,response)=>{
  response.json({
      name:'liam',
      age:'26'
  })
});

app.listen(4000);