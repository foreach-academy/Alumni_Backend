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
const authenticateRoutes = require('./Routes/AuthenticateRoute');
const FormationRoutes = require('./Routes/FormationRoute');

app.use('/account', accountRoutes);
app.use('/profil', AuthenticateController.authenticateToken, profilRoutes);
app.use('/utilisateur', utilisateurRoutes);
app.use('/authenticate', AuthenticateRoutes);
app.use('/formation', FormationRoutes);

module.exports = app;