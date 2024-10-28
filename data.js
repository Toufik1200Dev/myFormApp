const EmployeesNames = [
    "Adam", "Amine", "Bader", "Béatrice", "Fodé", "Fortuney", 
    "Hichem", "Laurent", "Masika", "Najm", "Nadège", 
    "Patrice", "Sonia", "William"
];

const Presence = [
    "a l'école", "absent(e)", "drive", "en congés", 
    "malade", "présent(e)"
];

const client = [
    "AFD Tech", "Accenture", "ARCEP france", "ARCEP togo", 
    "Bouygues Telecom", "DGA", "Ericsson", "Expresso Telecom", 
    "Free mobile", "Gendarmerie", "IMT Atlantique", 
    "LillyBelle", "Monaco Telecom", "Mozark", "MWINGZ", 
    "Orange france", "Orange Mali", "Orange Sonatel", 
    "Proximus", "QOSI", "SFR", "Sofrecom", 
    "Talent Group", "TechMahindra", "Telecom Cameroun", 
    "Togocom", "autre"
];

const activity = [
    "Analyse des resultats", "Audit interne/externe", "Cordination avec fournisseur", 
    "Développement(Dev)", "Drive", "Formation", 
    "inventaire", "livraison", "Maintenance", 
    "Planification des tests", "Préparation des slides", 
    "Réunion interne", "Rédaction des ModOps", "Rédaction des rapports", 
    "Suivi driver", "Support client", "Test logiciel", 
    "Test Matériel", "Test réseau", "Veille technologique"
];

const ProblèmeRencontré = [
    "Délai de réponse fournisseur", "Erreurs de donnees", 
    "Incompatibilite logicielle", "Interruption de service", 
    "Manque d'information", "Manque de ressource", "Pas de problème", 
    "Problème de communication interne", "Problème de configuration réseau", 
    "Problème de cordination avec l'équipe technique", 
    "Problème de materiel/logiciel", "Problème de sécurité", 
    "Problèmes d'intégration systeme", "Repture de stock", 
    "Retard de livraison"
];

const statut = [
    "Annulé", "En attente de validation", "En cours", 
    "Fait", "Non démarré", "Reporté"
];

const Fournisseur = [
    "Accuver", "Alpha wave", "Amdocs", "Ericsson", "Narda", "Pctel", "Pas de fournisseur"
];

const today = new Date();
const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

const Opportunité = ["Opportunité", "pas d'opportunités"];

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