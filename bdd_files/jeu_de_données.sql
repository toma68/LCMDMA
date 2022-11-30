INSERT INTO Type_activite VALUES
(default, "Spectacles"),
(default, "Animations"),
(default, "Presentations");

INSERT INTO Tarif VALUES
(default, "1 adulte 1 jour", 6.0),
(default, "1 adulte 2 jour", 10.0),
(default, "Enfant 10-17 1 jour", 2.0),
(default, "Enfant 10-17 2 jour", 3.0),
(default, "Enfant -10", 0.0),
(default, "Pass Clan (2 adultes, 2 enfants) 1 jour", 12.0),
(default, "Pass Clan (2 adultes, 2 enfants) 2 jour", 20.0);

INSERT INTO Stand VALUES
(default, 20.0, "Acces electricite"),
(default, 35.0, "Acces eau et feu"),
(default, 25.0, "Acces eau et electricite"),
(default, 20.0, "Pas de besoins logistiques particulier"),
(default, 25.0, "Pas de besoins logistiques particulier"),
(default, 15.0, "Acces eau"),
(default, 40.0, "Pas de besoins logistiques particulier"),
(default, 30.0, "Pas de besoins logistiques particulier"),
(default, 60.0, "Pas de besoins logistiques particulier");

INSERT INTO Role VALUES
(1, "Visiteur"),
(2, "Prestataire"),
(3, "Admin");

INSERT INTO users VALUES
();

INSERT INTO info_prestataire VALUES
();

INSERT INTO Token VALUES
();

INSERT INTO activite VALUES
();

INSERT INTO Achat VALUES
();

INSERT INTO organise VALUES
();

INSERT INTO achete VALUES
();

INSERT INTO reserve VALUES
();
