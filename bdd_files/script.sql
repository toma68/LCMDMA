DROP TABLE IF EXISTS organisateur, achat, reservation, prestataire, spectacle, activite, service, users, token, livre_or;

CREATE TABLE IF NOT EXISTS livre_or(
   id_commentaire INT AUTO_INCREMENT NOT NULL,
   texte_commentaire VARCHAR(500),
   date_commentaire DATE,
   PRIMARY KEY(id_commentaire)
);
CREATE TABLE IF NOT EXISTS users(
   users_id INT AUTO_INCREMENT,
   users_login VARCHAR(255),
   users_password VARCHAR(255),
   users_role INT,
   PRIMARY KEY(users_id)
);

CREATE TABLE IF NOT EXISTS token(
   token VARCHAR(256),
   ip VARCHAR(256),
   date_creation DATE,
   date_peremption DATE,
   users_id INT NOT NULL,
   PRIMARY KEY(token),
   FOREIGN KEY(users_id) REFERENCES users(users_id)
);

CREATE TABLE IF NOT EXISTS service(
   service_id INT AUTO_INCREMENT NOT NULL,
   service_nom VARCHAR(50),
   id_commentaire INT NOT NULL,
   PRIMARY KEY(service_id),
   FOREIGN KEY(id_commentaire) REFERENCES livre_or(id_commentaire)
);

CREATE TABLE IF NOT EXISTS activite(
   activite_id INT AUTO_INCREMENT NOT NULL,
   activite_nom VARCHAR(50),
   activite_heure_debut TIME,
   activite_heure_fin TIME,
   activite_description VARCHAR(250),
   users_id INT NOT NULL,
   PRIMARY KEY(activite_id),
   FOREIGN KEY(users_id) REFERENCES users(users_id)
);

CREATE TABLE IF NOT EXISTS spectacle(
   spectacle_id INT AUTO_INCREMENT NOT NULL,
   spectacle_heure_debut TIME,
   spectacle_nom VARCHAR(50),
   spectacle_heure_fin TIME,
   spectacle_description VARCHAR(250),
   users_id INT NOT NULL,
   PRIMARY KEY(spectacle_id),
   FOREIGN KEY(users_id) REFERENCES users(users_id)
);

CREATE TABLE IF NOT EXISTS prestataire(
   prestataire_id INT AUTO_INCREMENT NOT NULL,
   prestataire_metier VARCHAR(50),
   prestataire_nom VARCHAR(50),
   prestataire_mail VARCHAR(50),
   prestataire_description VARCHAR(500),
   prestataire_besoin_logistique VARCHAR(500),
   users_id INT NOT NULL,
   service_id INT NOT NULL,
   PRIMARY KEY(prestataire_id),
   FOREIGN KEY(users_id) REFERENCES users(users_id),
   FOREIGN KEY(service_id) REFERENCES service(service_id)
);

CREATE TABLE IF NOT EXISTS reservation(
   reservation_id INT AUTO_INCREMENT NOT NULL,
   reservation_prix DECIMAL(5,2),
   prestataire_id INT NOT NULL,
   PRIMARY KEY(reservation_id),
   FOREIGN KEY(prestataire_id) REFERENCES prestataire(prestataire_id)
);

CREATE TABLE IF NOT EXISTS achat(
   achat_id INT AUTO_INCREMENT NOT NULL,
   achat_prix DECIMAL(5,2),
   prestataire_id INT NOT NULL,
   PRIMARY KEY(achat_id),
   FOREIGN KEY(prestataire_id) REFERENCES prestataire(prestataire_id)
);

INSERT INTO livre_or(texte_commentaire, date_commentaire) VALUES('commentaire1', '2019-01-01');
INSERT INTO livre_or(texte_commentaire, date_commentaire) VALUES('commentaire2', '2019-01-02');
INSERT INTO livre_or(texte_commentaire, date_commentaire) VALUES('commentaire3', '2019-01-03');
INSERT INTO livre_or(texte_commentaire, date_commentaire) VALUES('commentaire4', '2019-01-04');

INSERT INTO users(users_login, users_password, users_role) VALUES('admin1', 'admin1', 2);
INSERT INTO users(users_login, users_password, users_role) VALUES('admin2', 'admin2', 2);
INSERT INTO users(users_login, users_password, users_role) VALUES('prestataire1', 'prestataire1', 1);
INSERT INTO users(users_login, users_password, users_role) VALUES('prestataire2', 'prestataire2', 1);
INSERT INTO users(users_login, users_password, users_role) VALUES('prestataire3', 'prestataire3', 0);

INSERT INTO token(token, ip, date_creation, date_peremption, users_id) VALUES('token1', '127.0.0.1', '2019-01-01', '2019-01-02', 1);
INSERT INTO token(token, ip, date_creation, date_peremption, users_id) VALUES('token2', '127.0.0.2', '2019-01-01', '2019-01-02', 2);
INSERT INTO token(token, ip, date_creation, date_peremption, users_id) VALUES('token3', '127.0.0.3', '2019-01-01', '2019-01-02', 3);
INSERT INTO token(token, ip, date_creation, date_peremption, users_id) VALUES('token4', '127.0.0.4', '2019-01-01', '2019-01-02', 4);
INSERT INTO token(token, ip, date_creation, date_peremption, users_id) VALUES('token5', '127.0.0.5', '2019-01-01', '2019-01-02', 5);

INSERT INTO service(service_nom, id_commentaire) VALUES('service1', 1);
INSERT INTO service(service_nom, id_commentaire) VALUES('service2', 2);
INSERT INTO service(service_nom, id_commentaire) VALUES('service3', 3);
INSERT INTO service(service_nom, id_commentaire) VALUES('service4', 4);

INSERT INTO activite(activite_nom, activite_heure_debut, activite_heure_fin, activite_description, users_id) VALUES('activite1', '10:00:00', '11:00:00', 'description1', 1);
INSERT INTO activite(activite_nom, activite_heure_debut, activite_heure_fin, activite_description, users_id) VALUES('activite2', '10:00:00', '11:00:00', 'description2', 1);
INSERT INTO activite(activite_nom, activite_heure_debut, activite_heure_fin, activite_description, users_id) VALUES('activite3', '10:00:00', '11:00:00', 'description3', 1);
INSERT INTO activite(activite_nom, activite_heure_debut, activite_heure_fin, activite_description, users_id) VALUES('activite4', '10:00:00', '11:00:00', 'description4', 1);

INSERT INTO spectacle(spectacle_nom, spectacle_heure_debut, spectacle_heure_fin, spectacle_description, users_id) VALUES('spectacle1', '10:00:00', '11:00:00', 'description1', 1);
INSERT INTO spectacle(spectacle_nom, spectacle_heure_debut, spectacle_heure_fin, spectacle_description, users_id) VALUES('spectacle2', '10:00:00', '11:00:00', 'description2', 1);
INSERT INTO spectacle(spectacle_nom, spectacle_heure_debut, spectacle_heure_fin, spectacle_description, users_id) VALUES('spectacle3', '10:00:00', '11:00:00', 'description3', 1);
INSERT INTO spectacle(spectacle_nom, spectacle_heure_debut, spectacle_heure_fin, spectacle_description, users_id) VALUES('spectacle4', '10:00:00', '11:00:00', 'description4', 1);

INSERT INTO prestataire(prestataire_metier, prestataire_nom, prestataire_mail, prestataire_description, prestataire_besoin_logistique, users_id, service_id) VALUES('metier1', 'nom1', 'mail1@gmail.com', 'description1', 'besoin1', 3, 2);
INSERT INTO prestataire(prestataire_metier, prestataire_nom, prestataire_mail, prestataire_description, prestataire_besoin_logistique, users_id, service_id) VALUES('metier2', 'nom2', 'mail2@gmail.com', 'description2', 'besoin2', 4, 3);
INSERT INTO prestataire(prestataire_metier, prestataire_nom, prestataire_mail, prestataire_description, prestataire_besoin_logistique, users_id, service_id) VALUES('metier3', 'nom3', 'mail3@gmail.com', 'description3', 'besoin3', 5, 4);

INSERT INTO reservation(reservation_prix, prestataire_id) VALUES(10.00, 1);
INSERT INTO reservation(reservation_prix, prestataire_id) VALUES(20.00, 2);
INSERT INTO reservation(reservation_prix, prestataire_id) VALUES(30.00, 3);

INSERT INTO achat(achat_prix, prestataire_id) VALUES(10.00, 1);
INSERT INTO achat(achat_prix, prestataire_id) VALUES(20.00, 2);
INSERT INTO achat(achat_prix, prestataire_id) VALUES(30.00, 3);

SELECT * FROM livre_or;
SELECT * FROM users;
SELECT * FROM token;
SELECT * FROM service;
SELECT * FROM activite;
SELECT * FROM spectacle;
SELECT * FROM prestataire;
SELECT * FROM reservation;
SELECT * FROM achat;