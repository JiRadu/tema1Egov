const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const js2xmlparser = require("js2xmlparser");
const fs = require('fs');
const mongoose = require('mongoose');
const { connection } = mongoose;
const FormSchema = mongoose.Schema({
    cifPrestator: String,
    numePrestator: String,
    numarUnicPrestator: String,
    ibanPrestator: String,
    bancaPrestator: String,
    cifBeneficiar: String,
    numeBeneficiar: String,
    numarUnicBeneficiar: String,
    ibanBeneficiar: String,
    bancaBeneficiar: String,
});
const FormModel = mongoose.model('form', FormSchema);

(async function init(){
    mongoose.connect('mongodb://localhost:27017/facturi');
    connection.on('connected', () => console.log('avem BD'));
})();

app.use(express.static('dist'));
app.use(bodyParser.json());
app.post('/form', async (req, res) => {
    await FormModel.create(req.body);
    // console.log(await FormModel.findOne());
    fs.writeFile('./document.xml', js2xmlparser.parse("form", req.body), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    
    res.send();
})
app.listen(3000);
