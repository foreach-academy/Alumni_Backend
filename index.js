const express = require ("express");
const cors = require ("cors");

require('./Config/Associations');
app.use(cors());
app.use(express.json());

const accountRoutes = require('./Routes/CompteRoute');
const profilRoutes = require('./Routes/ProfilRoute');
const utilisateurRoutes = require('./Routes/UtilisateurRoute');
const authenticateRoutes = require('./Routes/AuthenticateRoute');

app.use('/account', accountRoutes);
app.use('/profil', profilRoutes);
app.use('/utilisateur', utilisateurRoutes);
app.use('/authenticate', authenticateRoutes);

module.exports = app ;