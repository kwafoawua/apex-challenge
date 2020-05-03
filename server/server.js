const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 3000;
const url = 'https://www.naranja.com/comercios-amigos';
const tenMinutes = 600000;

app.use(cors());

const fetchNaranjaSite = async () =>{
    try{
        const html = await axios.get(url);
        return cheerio.load(html.data);
    } catch(error){
        res.status(error.response.status).send('Error al acceder al site de Naranja');
    }
};

/**
 * results: []; array con cada una de las preguntas y respuestas
 */

const getFaqSection = async () => {
    const $ = await fetchNaranjaSite();
    const results = [];
    $('app-faq-question').each((index, el) => {
        const question = $(el).find('div.faq-title_question').text();
        const answer = $(el).find('dd.faq-text > div').html();

        results.push({ index: question, value: answer });
    });

    return results;
};

/**
 * Crea un json con los resultados y su hora de guardado y lo guarda localmente.
 */
const saveJSON = async () => {
    const results = await getFaqSection();
    const updated = new Date().toLocaleString();;
    const faqJSON = { results, updated };
    fs.writeFileSync('faq.json', JSON.stringify(faqJSON, null, 2), 'utf-8');

    return true;
};

/**
 * Cada 10 minutos vuelve a guardar el Json con la información actualizada.
 */
setInterval(() => saveJSON(), tenMinutes);

/**
 * Filtra las requests al path /faqs y devuelve el json.
 */
app.get('/faqs', async (req, res, next) => {
    if(!fs.existsSync('faq.json')) {
        await saveJSON();
        const json = fs.readFileSync('faq.json');
        res.status(200).send(JSON.parse(json));
    } else {
        const json = fs.readFileSync('faq.json');
        res.status(200).send(JSON.parse(json));
    }
    
});

app.listen(port, () => console.log(`Server running at port ${port}`));