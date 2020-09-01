const express = require('express');
const { response } = require('express');

const app = express();

app.get('/', (request, response) => {
  response.status(200);
  response.send('hello express');
  response.end();
});

app.get('/rest', (request, response) => {
  response.json({
    name: 'liam',
    age: '26'
  })
});

app.get('/rest/cities', (request, response) => {
  response.json({
    cityList: [
      { citys: [{ name: '鹌鹑' }, { name: '嗷嗷' }], title: 'A' },
      { citys: [{ name: '宝宝' }, { name: '拜拜' }], title: 'B' },
      { citys: [{ name: '宝宝' }, { name: '拜拜' },{ name: '宝宝' }, { name: '拜拜' },{ name: '宝宝' }, { name: '拜拜' },{ name: '宝宝' }, { name: '拜拜' },{ name: '宝宝' }, { name: '拜拜' },{ name: '宝宝' }, { name: '拜拜' },], title: 'C' },
      { citys: [{ name: '南京' }], title: 'N' },
      { citys: [{ name: '厦门' }], title: 'X' },
    ]
  })
});

app.listen(5000);