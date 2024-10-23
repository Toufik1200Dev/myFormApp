const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    EmployeesNames : String,
    Presence: String,
    clientDuMatin :String,
    clientApresMidi : String,
    activity : String,
    ProblèmeRencontré : String,
    statut : String,
    Fournisseur : String,
    formattedDate : String,
    Opportunité : String,
    opportunityDetails: String,
    PresenceEnMatine : Number,
    PresenceEnAprèsMidi : Number,
    comment: String
});

const EmployeeDetails = mongoose.model("Employee",EmployeeSchema);
module.exports = EmployeeDetails;