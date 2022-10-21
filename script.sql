DROP TABLE IF EXISTS achat, reservation, prestataire, organisateur, service, token, livre_or, spectacle, activite;

CREATE TABLE IF NOT EXISTS activite(
   activite_id INT AUTO_INCREMENT,
   activite_nom VARCHAR(50),
   activite_heure_debut TIME,
   activite_heure_fin TIME,
   activite_description VARCHAR(250),
   PRIMARY KEY(activite_id)
);

CREATE TABLE IF NOT EXISTS spectacle(
   spectacle_id INT AUTO_INCREMENT,
   spectacle_nom VARCHAR(50),
   spectacle_heure_debut TIME,
   spectacle_heure_fin TIME,
   spectacle_description VARCHAR(250),
   PRIMARY KEY(spectacle_id)
);

CREATE TABLE IF NOT EXISTS livre_or(
   id_commentaire INT AUTO_INCREMENT,
   texte_commentaire VARCHAR(500),
   date_commentaire DATE,
   PRIMARY KEY(id_commentaire)
);

CREATE TABLE IF NOT EXISTS token(
   token VARCHAR(256),
   user_id INT,
   ip VARCHAR(256),
   date_creation DATE,
   date_peremption DATE,
   PRIMARY KEY(token)
);

CREATE TABLE IF NOT EXISTS service(
   service_id INT AUTO_INCREMENT,
   service_nom VARCHAR(50),
   id_commentaire INT NOT NULL,
   PRIMARY KEY(service_id),
   FOREIGN KEY(id_commentaire) REFERENCES livre_or(id_commentaire)
);

CREATE TABLE IF NOT EXISTS organisateur(
   organisateur_id INT AUTO_INCREMENT,
   organisateur_login VARCHAR(50),
   organisateur_password VARCHAR(50),
   spectacle_id INT NOT NULL,
   activite_id INT NOT NULL,
   PRIMARY KEY(organisateur_id),
   FOREIGN KEY(spectacle_id) REFERENCES spectacle(spectacle_id),
   FOREIGN KEY(activite_id) REFERENCES activite(activite_id)
);

CREATE TABLE IF NOT EXISTS prestataire(
   prestataire_id INT AUTO_INCREMENT,
   prestataire_metier VARCHAR(50),
   prestataire_nom VARCHAR(50),
   prestataire_mail VARCHAR(50),
   prestataire_login VARCHAR(50),
   prestataire_password VARCHAR(50),
   prestataire_description VARCHAR(500),
   prestataire_besoin_logistique VARCHAR(500),
   token VARCHAR(256) NOT NULL,
   spectacle_id INT NOT NULL,
   activite_id INT NOT NULL,
   service_id INT NOT NULL,
   PRIMARY KEY(prestataire_id),
   FOREIGN KEY(token) REFERENCES token(token),
   FOREIGN KEY(spectacle_id) REFERENCES spectacle(spectacle_id),
   FOREIGN KEY(activite_id) REFERENCES activite(activite_id),
   FOREIGN KEY(service_id) REFERENCES service(service_id)
);

CREATE TABLE IF NOT EXISTS reservation(
   reservation_id INT AUTO_INCREMENT,
   reservation_prix DECIMAL(5,2),
   prestataire_id INT NOT NULL,
   PRIMARY KEY(reservation_id),
   FOREIGN KEY(prestataire_id) REFERENCES prestataire(prestataire_id)
);

CREATE TABLE IF NOT EXISTS achat(
   achat_id INT AUTO_INCREMENT,
   achat_prix DECIMAL(5,2),
   prestataire_id INT NOT NULL,
   PRIMARY KEY(achat_id),
   FOREIGN KEY(prestataire_id) REFERENCES prestataire(prestataire_id)
);



INSERT INTO activite(activite_nom, activite_heure_debut, activite_heure_fin, activite_description) VALUES('activite1', '10:00:00', '11:00:00', 'description activite 1');
INSERT INTO activite(activite_nom, activite_heure_debut, activite_heure_fin, activite_description) VALUES('activite2', '11:00:00', '12:00:00', 'description activite 2');
INSERT INTO activite(activite_nom, activite_heure_debut, activite_heure_fin, activite_description) VALUES('activite3', '12:00:00', '13:00:00', 'description activite3');
INSERT INTO activite(activite_nom, activite_heure_debut, activite_heure_fin, activite_description) VALUES('activite4', '13:00:00', '14:00:00', 'description activite4');

INSERT INTO spectacle(spectacle_nom, spectacle_heure_debut, spectacle_heure_fin, spectacle_description) VALUES('spectacle1', '10:00:00', '11:00:00', 'description spectacle 1');
INSERT INTO spectacle(spectacle_nom, spectacle_heure_debut, spectacle_heure_fin, spectacle_description) VALUES('spectacle2', '11:00:00', '12:00:00', 'description spectacle 2');
INSERT INTO spectacle(spectacle_nom, spectacle_heure_debut, spectacle_heure_fin, spectacle_description) VALUES('spectacle3', '12:00:00', '13:00:00', 'description spectacle 3');
INSERT INTO spectacle(spectacle_nom, spectacle_heure_debut, spectacle_heure_fin, spectacle_description) VALUES('spectacle4', '13:00:00', '14:00:00', 'description spectacle 4');

INSERT INTO livre_or(texte_commentaire, date_commentaire) VALUES('commentaire1', '2019-01-01');
INSERT INTO livre_or(texte_commentaire, date_commentaire) VALUES('commentaire2', '2019-01-02');
INSERT INTO livre_or(texte_commentaire, date_commentaire) VALUES('commentaire3', '2019-01-03');
INSERT INTO livre_or(texte_commentaire, date_commentaire) VALUES('commentaire4', '2019-01-04');

INSERT INTO token(token, user_id, ip, date_creation, date_peremption) VALUES('token1', 1, '127.0.0.1', '2019-01-01', '2019-01-02');
INSERT INTO token(token, user_id, ip, date_creation, date_peremption) VALUES('token2', 2, '127.0.0.2', '2019-01-02', '2019-01-03');
INSERT INTO token(token, user_id, ip, date_creation, date_peremption) VALUES('token3', 3, '127.0.0.3', '2019-01-03', '2019-01-04');
INSERT INTO token(token, user_id, ip, date_creation, date_peremption) VALUES('token4', 4, '127.0.0.4', '2019-01-04', '2019-01-05');

INSERT INTO service(service_nom, id_commentaire) VALUES('service1', 1);
INSERT INTO service(service_nom, id_commentaire) VALUES('service2', 2);
INSERT INTO service(service_nom, id_commentaire) VALUES('service3', 3);
INSERT INTO service(service_nom, id_commentaire) VALUES('service4', 4);

INSERT INTO organisateur(organisateur_login, organisateur_password, spectacle_id, activite_id) VALUES('organisateur1', 'password1', 1, 1);
INSERT INTO organisateur(organisateur_login, organisateur_password, spectacle_id, activite_id) VALUES('organisateur2', 'password2', 2, 2);
INSERT INTO organisateur(organisateur_login, organisateur_password, spectacle_id, activite_id) VALUES('organisateur3', 'password3', 3, 3);
INSERT INTO organisateur(organisateur_login, organisateur_password, spectacle_id, activite_id) VALUES('organisateur4', 'password4', 4, 4);

INSERT INTO prestataire(prestataire_nom, prestataire_metier, prestataire_mail, prestataire_login, prestataire_password, prestataire_description, prestataire_besoin_logistique, token, spectacle_id, activite_id, service_id) VALUES('prestataire1', 'metier1', 'prestataire1@gmail.com', 'prestataire1', 'password1', 'description prestataire 1', 'besoin logistique prestataire 1','token1', 1, 1, 1);
INSERT INTO prestataire(prestataire_nom, prestataire_metier, prestataire_mail, prestataire_login, prestataire_password, prestataire_description, prestataire_besoin_logistique, token, spectacle_id, activite_id, service_id) VALUES('prestataire2', 'metier2', 'prestataire2@gmail.com', 'prestataire2', 'password2', 'description prestataire 2', 'besoin logistique prestataire 2','token2', 2, 2, 2);
INSERT INTO prestataire(prestataire_nom, prestataire_metier, prestataire_mail, prestataire_login, prestataire_password, prestataire_description, prestataire_besoin_logistique, token, spectacle_id, activite_id, service_id) VALUES('prestataire3', 'metier3', 'prestataire3@gmail.com', 'prestataire3', 'password3', 'description prestataire 3', 'besoin logistique prestataire 3','token3', 3, 3, 3);
INSERT INTO prestataire(prestataire_nom, prestataire_metier, prestataire_mail, prestataire_login, prestataire_password, prestataire_description, prestataire_besoin_logistique, token, spectacle_id, activite_id, service_id) VALUES('prestataire4', 'metier4', 'prestataire4@gmail.com', 'prestataire4', 'password4', 'description prestataire 4', 'besoin logistique prestataire 4','token4', 4, 4, 4);

INSERT INTO reservation(reservation_prix, prestataire_id) VALUES(10.00, 1);
INSERT INTO reservation(reservation_prix, prestataire_id) VALUES(20.00, 2);
INSERT INTO reservation(reservation_prix, prestataire_id) VALUES(30.00, 3);
INSERT INTO reservation(reservation_prix, prestataire_id) VALUES(40.00, 4);

INSERT INTO achat(achat_prix, prestataire_id) VALUES(10.00, 1);
INSERT INTO achat(achat_prix, prestataire_id) VALUES(20.00, 2);
INSERT INTO achat(achat_prix, prestataire_id) VALUES(30.00, 3);
INSERT INTO achat(achat_prix, prestataire_id) VALUES(40.00, 4);

SELECT * FROM activite;
SELECT * FROM spectacle;
SELECT * FROM livre_or;
SELECT * FROM service;
SELECT * FROM organisateur;
SELECT * FROM prestataire;
SELECT * FROM reservation;
SELECT * FROM achat;