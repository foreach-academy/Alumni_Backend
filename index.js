const express = require ("express");
const cors = require ("cors");
const app = express();
const AuthenticateRoutes = require('./Routes/AuthenticateRoute');
const AuthenticateController = require('./Controllers/AuthenticateControllers');

require('./Config/Associations');
app.use(cors());
app.use(express.json());
app.use('/authenticate', AuthenticateRoutes)

const accountRoutes = require('./Routes/CompteRoute');
const profilRoutes = require('./Routes/ProfilRoute');
const utilisateurRoutes = require('./Routes/UtilisateurRoute');

app.use('/account', accountRoutes);
app.use('/profil', AuthenticateController.authenticateToken, profilRoutes);
app.use('/utilisateur', AuthenticateController.authenticateToken, utilisateurRoutes);
app.use('/authenticate', AuthenticateRoutes);

module.exports = app;