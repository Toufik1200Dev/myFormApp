const EmployeesNames = [
    "Amine",'Bader' ,'Béatrice' ,'Fodé' ,'Fortuney' ,
    'Hichem','Laurent','Masika', 'Najm',   
    'Sonia' ,'Patrice' ,'william',"Adam","Nadège"
];

const Presence = [
    "présent(e)", "absent(e)", "en congés", "malade",
    "a l'école", "drive"
];

const client = [
    "Bouygues Telecom", "Free mobile", "Orange france", 
    "LillyBelle", "Ericsson", "Sofrecom", "Orange Sonatel", 
    "Orange Mali", "Gendarmerie", "AFD Tech", "ARCEP",
    "MWINGZ","Togocom","TechMahindra", "SFR","QOSI","Proximus",
    "Talent Group","Telecom Cameroun", "Mozark","Monaco Telecom",
    "IMT Atlantique","Expresso Telecom","Accenture"
];

const activity = [
    "Test reseau","Test logiciel", "Test Materiel",
    "Développement(Dev)","Support client", "Drive",
    "Préparation des slides","Redaction des rapport","Redaction des ModOp", 
    "Analyse des resultats", "Reunion interne", "Cordination avec fournisseur",
    "Planification des tests", "Maintenance", "Formation", "Veille technologique",
    "Audit interne/externe", 
];

const ProblèmeRencontré = [
    "Pas de problème","Manque de ressource","Manque d'information",
    "retard de livraison", "repture de stock", "problème de materiel/logiciel",
    "problème de configuration réseau","Delai de reponse  fournisseur",
    "incompatibilite logicielle", 'problème de sécurité', "interruption de service",
    "problème de communication interne", "Erreurs de donnees",
    "problèmes d'intégration  systeme", "problème de cordination avec l'équipe technique"
];

const statut = [
    "fait", "En cours", "Non démarré", "En attente de validation ", "Reporté", "Annulé"
];


const  Fournisseur = [
    "accuver","ericsson","amdocs", "narda", "pctel", "alpha wave","pas de fournisseur"
];

const today = new Date();
const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

const Opportunité = ["pas d'opportunités","Opportunité"]


const data = {
    EmployeesNames,
    Presence,
    client,
    activity,
    ProblèmeRencontré,
    statut,
    Fournisseur,
    formattedDate,
    Opportunité
};

module.exports = data;