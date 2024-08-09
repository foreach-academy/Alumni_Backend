const nodemailer = require('nodemailer');
const { RoleApprenant, RoleAncienApprenant, RoleEntreprise } = require('./RoleConstant');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465, // Utilisation du port 465 pour une connexion sécurisée
  secure: true, // Utilisation de la connexion sécurisée
  auth: {
    user: 'test.foreach59@gmail.com',
    pass: 'gqan xszm akbl bwlr',
  },
});

const sendDemandeInscription = async (userDetails) => {
  const { id_role, pr_prenom, pr_nom, ut_email, type_formation, nom_promotion, en_nom_contact, en_fonction_contact } = userDetails;

  let textMail = `
    <p>Une nouvelle demande d'inscription a été envoyée sur le site ForEach Alumni. Voici les informations du compte :</p>
    <ul>
      <li>Rôle demandé: ${Roles[id_role].libelle}</li> <!-- Utilisation du libellé de l'énumération -->
      <li>Nom: ${pr_nom}</li>
      <li>Prénom: ${pr_prenom}</li>
      <li>Adresse email: ${ut_email}</li>
  `;

  if (id_role === RoleApprenant.id || id_role === RoleAncienApprenant.id) {
    textMail += `
      <li>Formation: ${type_formation}</li>
      <li>Promotion: ${nom_promotion}</li>
    `;
  } else if (id_role === RoleEntreprise.id) {
    textMail += `
      <li>Nom de l'entreprise: ${en_nom_contact}</li>
      <li>Fonction de la personne: ${en_fonction_contact}</li>
    `;
  }

  textMail += `
    </ul>
    <p>Vous pouvez étudier la demande sur ce lien : <a href="http://lien-vers-la-page-de-validation">lien vers la page de validation d'utilisateurs</a></p>
  `;

  const mailOptions = {
    from: '"ForEach Alumni Admin" <test.foreach59@gmail.com>',
    to: 'test.foreach59@gmail.com',
    subject: "Nouvelle demande d'inscription",
    html: textMail,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email de demande d'inscription envoyé avec succès !");
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email de demande d'inscription :", error);
  }
};

const sendInscriptionValide = async () => {
  const textMail = `
    <p>Votre demande d'inscription sur le site ForEach Alumni a bien été acceptée. Bienvenue parmi les Alumni !</p>
    <p>Vous pouvez vous connecter sur ce lien : <a href="http://lien-de-connexion">lien de connexion</a></p>
  `;

  const mailOptions = {
    from: '"ForEach Alumni Admin" <test.foreach59@gmail.com>',
    to: "test.foreach59@gmail.com",
    subject: "Acceptation de votre demande d'inscription",
    html: textMail,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email d'acceptation envoyé avec succès !");
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email d'acceptation :", error);
  }
};

const sendInscriptionRefus = async (raisonRefus) => {
  const textMail = `
    <p>Votre demande d'inscription sur le site ForEach Alumni n'a pas été acceptée pour la raison suivante :</p>
    <p>${raisonRefus}</p> <!-- Utilisation de la raison de refus -->
    <p>Vous pouvez contacter l'équipe de ForEach Academy pour en savoir plus.</p>
  `;

  const mailOptions = {
    from: '"ForEach Alumni Admin" <test.foreach59@gmail.com>',
    to: "test.foreach59@gmail.com",
    subject: "Refus de votre demande d'inscription",
    html: textMail,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email de refus envoyé avec succès !");
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email de refus :", error);
  }
};

module.exports = {
  sendDemandeInscription,
  sendInscriptionValide,
  sendInscriptionRefus
};
