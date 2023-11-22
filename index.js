const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

// Rota 1
app.get('/menu1', async (req, res) => {
  try {
    const response1 = await axios.get('https://tax.adventistas.org/pt/wp-json/wp/v2/menus/global-footer-1');
    const menu1 = response1.data;
    res.json(menu1);
  } catch (error) {
    console.error('Ocorreu um erro:', error.message);
    res.status(500).json({ error: 'Ocorreu um erro' });
  }
});


// Rota 2
app.get('/menu2', async (req, res) => {
  try {
    const response2 = await axios.get('https://tax.adventistas.org/pt/wp-json/wp/v2/menus/global-footer-2');
    const menu2 = response2.data;
    res.json(menu2);
  } catch (error) {
    console.error('Ocorreu um erro:', error.message);
    res.status(500).json({ error: 'Ocorreu um erro' });
  }
});


// Rota 3
app.get('/menu3', async (req, res) => {
  try {
    const response3 = await axios.get('https://tax.adventistas.org/pt/wp-json/wp/v2/menus/global-footer-3');
    const menu3 = response3.data;
    res.json(menu3);
  } catch (error) {
    console.error('Ocorreu um erro:', error.message);
    res.status(500).json({ error: 'Ocorreu um erro' });
  }
});


// Rota 4
app.get('/menu4', async (req, res) => {
  try {
    const response1 = await axios.get('https://tax.adventistas.org/pt/wp-json/wp/v2/menus/global-footer-1');
    const menu1 = response1.data;

    const response2 = await axios.get('https://tax.adventistas.org/pt/wp-json/wp/v2/menus/global-footer-2');
    const menu2 = response2.data;
    
    const response3 = await axios.get('https://tax.adventistas.org/pt/wp-json/wp/v2/menus/global-footer-3');
    const menu3 = response3.data;

      const combinacao = {
      dataFromEndpoint1: menu1,
      dataFromEndpoint1: menu2,
      dataFromEndpoint3: menu3
    };

    res.json(combinacao);
  } catch (error) {
    console.error('Ocorreu um erro:', error.message);
    res.status(500).json({ error: 'Ocorreu um erro' });
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log('Sucesso! Acessar http://localhost:3000/menu1, menu2, menu3 ou menu4');
});
