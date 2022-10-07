CREATE TABLE service(
   service_id INT AUTO_INCREMENT,
   service_nom VARCHAR(50),
   PRIMARY KEY(service_id)
);

CREATE TABLE organisateur(
   organisteur_id INT AUTO_INCREMENT,
   organisateur_login VARCHAR(50),
   organisateur_password VARCHAR(50),
   PRIMARY KEY(organisteur_id)
);

CREATE TABLE client(
   client_id INT AUTO_INCREMENT,
   client_prenom VARCHAR(50),
   client_nom VARCHAR(50),
   client_mail VARCHAR(50),
   client_password VARCHAR(50),
   PRIMARY KEY(client_id)
);

CREATE TABLE activite(
   activite_id INT AUTO_INCREMENT,
   activite_nom VARCHAR(50),
   activite_heure_debut TIME,
   activite_heure_fin TIME,
   PRIMARY KEY(activite_id)
);

CREATE TABLE spectacle(
   spectacle_id INT AUTO_INCREMENT,
   spectacle_nom VARCHAR(50),
   spectacle_heure_debut TIME,
   spectacle_heure_fin TIME,
   PRIMARY KEY(spectacle_id)
);

CREATE TABLE prestataire(
   prestataire_id INT AUTO_INCREMENT,
   prestataire_nom VARCHAR(50),
   prestataire_metier VARCHAR(50),
   prestataire_mail VARCHAR(50),
   prestatire_login VARCHAR(50),
   prestatire_password VARCHAR(50),
   prestaire_description VARCHAR(500),
   prestataire_besoin_logistique VARCHAR(500),
   spectacle_id INT NOT NULL,
   activite_id INT NOT NULL,
   service_id INT NOT NULL,
   PRIMARY KEY(prestataire_id),
   FOREIGN KEY(spectacle_id) REFERENCES spectacle(spectacle_id),
   FOREIGN KEY(activite_id) REFERENCES activite(activite_id),
   FOREIGN KEY(service_id) REFERENCES service(service_id)
);

CREATE TABLE reservation(
   reservation_id INT AUTO_INCREMENT,
   reservation_prix DECIMAL(5,2),
   client_id INT NOT NULL,
   prestataire_id INT NOT NULL,
   PRIMARY KEY(reservation_id),
   FOREIGN KEY(client_id) REFERENCES client(client_id),
   FOREIGN KEY(prestataire_id) REFERENCES prestataire(prestataire_id)
);

CREATE TABLE achat(
   achat_id INT AUTO_INCREMENT,
   achat_prix DECIMAL(5,2),
   client_id INT NOT NULL,
   prestataire_id INT NOT NULL,
   PRIMARY KEY(achat_id),
   FOREIGN KEY(client_id) REFERENCES client(client_id),
   FOREIGN KEY(prestataire_id) REFERENCES prestataire(prestataire_id)
);
