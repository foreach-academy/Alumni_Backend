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
const PromotionRoutes = require('./Routes/PromotionRoute');
const FormationRoutes = require('./Routes/FormationRoute');
const RoleRoutes = require('./Routes/RoleRoute');

app.use('/account', accountRoutes);
app.use('/profil', AuthenticateController.authenticateToken, profilRoutes);
app.use('/utilisateur', AuthenticateController.authenticateToken, utilisateurRoutes);
app.use('/authenticate', AuthenticateRoutes);
app.use('/promotion', PromotionRoutes);
app.use('/formation', FormationRoutes);
app.use('/role', RoleRoutes)

module.exports = app;