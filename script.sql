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
   activite_description VARCHAR(250),
   PRIMARY KEY(activite_id)
);

CREATE TABLE spectacle(
   spectacle_id INT AUTO_INCREMENT,
   spectacle_nom VARCHAR(50),
   spectacle_heure_debut TIME,
   spectacle_heure_fin TIME,
   spectacle_description VARCHAR(250),
   PRIMARY KEY(spectacle_id)
);

CREATE TABLE livre_or(
   id_commentaire INT AUTO_INCREMENT,
   texte_commentaire VARCHAR(500),
   date_commentaire DATE,
   PRIMARY KEY(id_commentaire)
);

CREATE TABLE service(
   service_id INT AUTO_INCREMENT,
   service_nom VARCHAR(50),
   id_commentaire INT NOT NULL,
   PRIMARY KEY(service_id),
   FOREIGN KEY(id_commentaire) REFERENCES livre_or(id_commentaire)
);

CREATE TABLE organisateur(
   organisteur_id INT AUTO_INCREMENT,
   organisateur_login VARCHAR(50),
   organisateur_password VARCHAR(50),
   spectacle_id INT NOT NULL,
   activite_id INT NOT NULL,
   PRIMARY KEY(organisteur_id),
   FOREIGN KEY(spectacle_id) REFERENCES spectacle(spectacle_id),
   FOREIGN KEY(activite_id) REFERENCES activite(activite_id)
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

INSERT INTO client(client_prenom, client_nom, client_mail, client_password) VALUES (
('prenom1', 'nom1', 'prenom1.nom1@client.fr', 'password1'),
('prenom2', 'nom2', 'prenom2.nom2@client.fr', 'password2'),
('prenom3', 'nom3', 'prenom3.nom3@client.fr', 'password3'),
('prenom4', 'nom4', 'prenom4.nom4@client.fr', 'password4')
);

INSERT INTO activite(activite_nom, activite_heure_debut, activite_heure_fin, activite_description) VALUES(
('activite1', '10:00:00', '11:00:00', 'description activite 1'),
('activite2', '11:00:00', '12:00:00', 'description activite 2'),
('activite3', '12:00:00', '13:00:00', 'description activite3'),
('activite4', '13:00:00', '14:00:00', 'description activite4')
);

INSERT INTO spectacle(spectacle_nom, spectacle_heure_debut, spectacle_heure_fin, spectacle_description) VALUES(
('spectacle1', '10:00:00', '11:00:00', 'description spectacle 1'),
('spectacle2', '11:00:00', '12:00:00', 'description spectacle 2'),
('spectacle3', '12:00:00', '13:00:00', 'description spectacle 3'),
('spectacle4', '13:00:00', '14:00:00', 'description spectacle 4')
);

INSERT INTO livre_or(texte_commentaire, date_commentaire) VALUES(
('commentaire1', '2019-01-01'),
('commentaire2', '2019-01-02'),
('commentaire3', '2019-01-03'),
('commentaire4', '2019-01-04')
);