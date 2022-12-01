DROP TABLE reserve, achete, organise, Achat, activite, Token, info_prestataire, users, Role, Stand, Tarif, Type_activite;

CREATE TABLE Type_activite(
   id SERIAL,
   libelle TEXT,
   PRIMARY KEY(id)
);

CREATE TABLE Tarif(
   id SERIAL,
   libelle TEXT,
   prix DECIMAL(7,3),
   PRIMARY KEY(id)
);

CREATE TABLE Stand(
   id SERIAL,
   surface DECIMAL(7,3),
   logistique TEXT,
   PRIMARY KEY(id)
);

CREATE TABLE Role(
   id INT,
   libelle TEXT,
   PRIMARY KEY(id)
);

CREATE TABLE users(
   id SERIAL,
   nom TEXT,
   prenom TEXT,
   login TEXT,
   password TEXT,
   mail TEXT,
   id_1 INTEGER NOT NULL,
   PRIMARY KEY(id),
   FOREIGN KEY(id_1) REFERENCES Role(id)
);

CREATE TABLE info_prestataire(
   numero_siret INTEGER,
   contenu_page TEXT,
   page_masquee BOOLEAN,
   nom_entreprise TEXT,
   categorie_prestataire TEXT,
   id INTEGER NOT NULL,
   PRIMARY KEY(numero_siret),
   UNIQUE(id),
   FOREIGN KEY(id) REFERENCES users(id)
);

CREATE TABLE Token(
   token TEXT,
   ip TEXT,
   date_creation DATE,
   date_peremption DATE,
   id INTEGER NOT NULL,
   PRIMARY KEY(token),
   FOREIGN KEY(id) REFERENCES users(id)
);

CREATE TABLE activite(
   id SERIAL,
   nom TEXT,
   heure_debut TIME,
   heure_fin TIME,
   description TEXT,
   id_1 INTEGER NOT NULL,
   id_2 INTEGER NOT NULL,
   PRIMARY KEY(id),
   FOREIGN KEY(id_1) REFERENCES Stand(id),
   FOREIGN KEY(id_2) REFERENCES Type_activite(id)
);

CREATE TABLE Achat(
   id SERIAL,
   date_achat DATE,
   qrcode TEXT,
   id_1 INTEGER NOT NULL,
   PRIMARY KEY(id),
   FOREIGN KEY(id_1) REFERENCES Tarif(id)
);

CREATE TABLE organise(
   numero_siret INTEGER,
   id SERIAL,
   PRIMARY KEY(numero_siret, id),
   FOREIGN KEY(numero_siret) REFERENCES info_prestataire(numero_siret),
   FOREIGN KEY(id) REFERENCES activite(id)
);

CREATE TABLE achete(
   id INTEGER,
   id_1 INTEGER,
   PRIMARY KEY(id, id_1),
   FOREIGN KEY(id) REFERENCES users(id),
   FOREIGN KEY(id_1) REFERENCES Achat(id)
);

CREATE TABLE reserve(
   id INTEGER,
   id_1 INTEGER,
   PRIMARY KEY(id, id_1),
   FOREIGN KEY(id) REFERENCES users(id),
   FOREIGN KEY(id_1) REFERENCES activite(id)
);
