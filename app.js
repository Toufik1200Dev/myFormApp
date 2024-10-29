const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const data = require('./data.js');
const EmployeeDetails = require('./models/employeeSchema.js')

const app = express();
const PORT = process.env.PORT || 4160;
const MONGO = process.env.MONGODB_URI || 'mongodb://localhost:27017/employeeDB';

app.set('view engine', "ejs");
app.use(express.static('public'))
app.use(express.urlencoded({extended : true}))
app.use(bodyParser.urlencoded({extended:true})) 

mongoose.connect(MONGO).then(()=>{
    console.log('DB connected ');
    
}).catch(err=>console.log(err));


/////


app.get('/', async (req,res)=>{
    
    try{ 
        const employees = await EmployeeDetails.find();
        res.render("form", {data: data, employees}) 
        
    }catch (err) {
        res.status(500).send('Error fetching employee data');}
    
});
app.post('/add-employee', async (req,res)=>{
    console.log(req.body);
    try{
        const UserExist = await EmployeeDetails.findOne({
            EmployeesNames : req.body.Employe,
            formattedDate : data.formattedDate 
        });
        if(!UserExist){      
            const newEmployee =new EmployeeDetails({
                EmployeesNames : req.body.Employe,
                Presence: req.body.presence,
                clientDuMatin : req.body.clientDuMatin,
                clientApresMidi : req.body.clientApresMidi,
                activity : req.body.activity,
                ProblèmeRencontré : req.body.Probleme,
                statut : req.body.statut,
                Fournisseur : req.body.Fournisseur,
                formattedDate : data.formattedDate,
                Opportunité : req.body.Opportunité,
                opportunityDetails: req.body.opportunityDetails,
                PresenceEnMatine : req.body.PresenceEnMatine,
                PresenceEnAprèsMidi : req.body.PresenceEnAprèsMidi,
                comment : req.body.comment
            })
    
            await newEmployee.save();
            res.redirect('/');
            console.log(req.body)
        }else{
            res.redirect("/")
            res.send("Vous avez déjà soumis ce formulaire aujourd'hui")
        }    
    }catch (error) {
        console.log('Error saving employee data:', error);
        res.status(500).send('Error saving employee data.');
    }   
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on: http://localhost:${PORT}/`);
  });