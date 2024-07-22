const express = require ("express");
const cors = require ("cors");

const app = express();
// const PORT = process.env.PORT || "";

require('./Config/Associations');
app.use(cors());
app.use(express.json());

const accountRoutes = require('./Routes/CompteRoute');
const profilRoutes = require('./Routes/ProfilRoute');
const utilisateurRoutes = require('./Routes/UtilisateurRoute');

app.use('/account', accountRoutes);
app.use('/profil', profilRoutes);
app.use('/utilisateur', utilisateurRoutes);

module.exports = app ;