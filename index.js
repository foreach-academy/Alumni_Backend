const express = require ("express");
const cors = require ("cors");
const app = express();
const AuthenticateRoutes = require('./Routes/AuthenticateRoute');
const AuthenticateController = require('./Controllers/AuthenticateControllers');
const profilRoute = require('./Routes/ProfilRoute');
const path = require("path");

require('./Config/Associations');

app.use(cors());
app.use(express.json());
app.use('/authenticate', AuthenticateRoutes)

const accountRoutes = require('./Routes/CompteRoute');
const profilRoutes = require('./Routes/ProfilRoute');
const utilisateurRoutes = require('./Routes/UtilisateurRoute');
// const authenticateRoutes = require('./Routes/AuthenticateRoute');
const PromotionRoutes = require('./Routes/PromotionRoute');
const FormationRoutes = require('./Routes/FormationRoute');
const RoleRoutes = require('./Routes/RoleRoute');
const TypeAideRoutes = require('./Routes/TypeAideRoute');
const TypeCompetenceRoutes = require('./Routes/TypeCompetenceRoute');
const uploadRoutes = require('./Routes/uploadRoutes');
const liensRoutes = require('./Routes/LiensRoutes');
const ProfilAideRoutes = require('./Routes/ProfilAideRoutes');
const ProfilCompetenceRoutes = require('./Routes/ProfilCompetenceRoutes');
const CompetenceRoutes = require('./Routes/CompetenceRoutes');
const ParcoursRoutes = require('./Routes/ParcoursRoutes');


app.use('/account', accountRoutes);
app.use('/profil', profilRoutes);
app.use('/utilisateur', utilisateurRoutes);
app.use('/authenticate', AuthenticateRoutes);
app.use('/promotion', PromotionRoutes);
app.use('/formation', FormationRoutes);
app.use('/role', RoleRoutes)
app.use('/profils', profilRoute);
app.use('/type_aide', TypeAideRoutes);
app.use('/type_competence', TypeCompetenceRoutes);
app.use('/uploads', express.static('uploads'));
app.use('/api', uploadRoutes);
app.use('/', liensRoutes);
app.use('/', ProfilAideRoutes);
app.use('/', ProfilCompetenceRoutes);
app.use('/competence', CompetenceRoutes);
app.use('/', ParcoursRoutes);


module.exports = app;