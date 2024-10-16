const dotenv = require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const data = require('./data.js');
const EmployeeDetails = require('./models/employeeSchema.js')

const app = express();
const PORT = process.env.PORT || 3100;
const MONGO_URL = process.env.MONGO;

app.set('view engine', "ejs");
app.use(express.static('public'))
app.use(express.urlencoded({extended : true}))
app.use(bodyParser.urlencoded({extended:true}))


mongoose.connect(MONGO_URL).then(()=>{
    console.log('DB connected ');
    
}).catch(err=>console.log(err));

/////
app.get('/', async (req,res)=>{
    try{
        const employees = await EmployeeDetails.find();
        res.render("form", {data: data, employees})
    }catch (err) {
        res.status(500).send('Error fetching employee data');
    }
});
app.post('/app.js', async (req,res)=>{
    try{
        const newEmployee =new EmployeeDetails({
            EmployeesNames : req.body.Employe,
            Presence: req.body.presence,
            client : req.body.client,
            activity : req.body.activity,
            ProblèmeRencontré : req.body.Probleme,
            statut : req.body.statut,
            Fournisseur : req.body.Fournisseur,
            formattedDate : data.formattedDate,
            Opportunité : req.body.Opportunité,
            opportunityDetails: req.body.opportunityDetails,
            PresenceEnJourne : req.body.PresenceEnJourne,
        }) 
        await newEmployee.save();
        res.render("successPage")
        console.log(req.body)
    }catch (error) {
        console.log('Error saving employee data:', error);
        res.status(500).send('Error saving employee data.');
    }   
});

app.listen(PORT,()=>{
    console.log(`server running on : http://localhost:${PORT}/`);
})

