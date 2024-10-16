const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    EmployeesNames : String,
    Presence: String,
    client :String,
    activity : String,
    ProblèmeRencontré : String,
    statut : String,
    Fournisseur : String,
    formattedDate : String,
    Opportunité : String,
    opportunityDetails: String,
    PresenceEnJourne : Number,
});

const EmployeeDetails = mongoose.model("Employee",EmployeeSchema);
module.exports = EmployeeDetails;