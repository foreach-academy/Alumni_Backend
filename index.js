const express = require ("express");
const cors = require ("cors");
const app = express()

require('./Config/Associations');
app.use(cors());
app.use(express.json());

const accountRoutes = require('./Routes/CompteRoute');
const profilRoutes = require('./Routes/ProfilRoute');
const utilisateurRoutes = require('./Routes/UtilisateurRoute');
const authenticateRoutes = require('./Routes/AuthenticateRoute');
const FormationRoutes = require('./Routes/FormationRoute');

app.use('/account', accountRoutes);
app.use('/profil', profilRoutes);
app.use('/utilisateur', utilisateurRoutes);
app.use('/authenticate', authenticateRoutes);
app.use('/formation', FormationRoutes);

module.exports = app;