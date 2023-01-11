INSERT INTO "typeActivites" VALUES
(default, 'Spectacles'),
(default, 'Animations'),
(default, 'Demonstrations');


INSERT INTO tarifs VALUES
(default, '1 adulte 1 jour', 6.0),
(default, '1 adulte 2 jour', 10.0),
(default, 'Enfant 10-17 1 jour', 2.0),
(default, 'Enfant 10-17 2 jour', 3.0),
(default, 'Enfant -10', 0.0),
(default, 'Pass Clan (2 adultes, 2 enfants) 1 jour', 12.0),
(default, 'Pass Clan (2 adultes, 2 enfants) 2 jour', 20.0);



INSERT INTO stands VALUES
(default, 45.0, 'Acces eau et "four"'), --Forgerons
(default, 45.0, 'Pas de besoins logistiques particulier'), --Menuisier / Ebeniste / Luttiere
(default, 50.0, 'Acces eau et electricite'), --Taverne
(default, 25.0, 'Acces "four"'), --Vitraillsite
(default, 20.0, 'Acces eau'), --Poterie
(default, 20.0, 'Pas de besoins logistiques particulier'), --Cordonnier
(default, 40.0, 'Acces eau'), --Ecurie
(default, 40.0, 'Pas de besoins logistiques particulier'), --Stand de torture
(default, 15.0, 'Pas de besoins logistiques particulier'), --Voyante
(default, 20.0, 'Acces eau'), --Remede et plantes
(default, 50.0, 'Pas de besoins logistiques particulier'), --Arme de siege
(default, 30.0, 'Acces eau et "four"'), --Boulangerie
(default, 70.0, 'Acces electricite'), --Scene 1
(default, 80.0, 'Acces electricite'), --Scene 2
(default, 100.0, 'Pas de besoins logistiques particulier'), --Terrain de combat de joûte
(default, 70.0, 'Pas de besoins logistiques particulier'), --Stand de tir a l'arc
(default, 2.0, 'Acces eau'); --Toilettes

INSERT INTO "roles" VALUES
(default, 'User'),
(default, 'Prestataire'),
(default, 'Administrateur');

INSERT INTO users VALUES
(default, 'Becher', 'Thomas', 'thomas', '$2b$10$iDd2D0alqATR2i4S5a9hQeBp/n1PsHONzhhB2VGk5raqUi5368zou', 'thomas@gmail.com', 3),
(default, 'Dal Gobbo', 'Theo', 'theo', 'theo', 'theo@gmail.com', 3),
(default, 'Fridelance', 'Raphael', 'raphael', 'raphael', 'raphael@gmail.com', 3),
(default, 'Kohler', 'Jarod', 'jarod', 'jarod', 'jarod@gmail.com', 3),
(default, 'Meister', 'Nicolas', 'nicolas', 'nicolas', 'nicolas@gmail.com', 3),
(default, 'Du Lac', 'Lancelot', 'lancelot', 'lancelot', 'lancelot@gmail.com', 2), --Forgeron1 (épée / couteaux)
(default, 'Myé', 'Alain', 'alain', 'alain', 'alain@gmail.com', 2), --Forgeron2 (outils)
(default, 'Trefle', 'Clotilde', 'clotilde', 'clotilde', 'clotilde@gmail.com', 2), --Forgeron3 (Marechal ferrant)
(default, 'Passier', 'Francois', 'francois', 'francois', 'francois@gmail.com', 2), --Menuisier / Ebeniste
(default, 'Seraph', 'Eulalie', 'eulalie', 'eulalie', 'eulalie@gmail.com', 2), --Luttière
(default, 'Reymond', 'Calixte', 'calixte', '$2b$10$iDd2D0alqATR2i4S5a9hQeBp/n1PsHONzhhB2VGk5raqUi5368zou', 'calixte@gmail.com', 2), --Tavernier
(default, 'Sand', 'Isaac', 'isaac', 'isaac', 'isaac@gmail.com', 2), --Vitrailliste
(default, 'Dawn', 'Aurore', 'aurore', 'aurore', 'aurore@gmail.com', 2), --Poterie
(default, 'Baudouin', 'Louis', 'louis', 'louis', 'louis@gmail.com', 2), --Cordonnier
(default, 'Lechaud', 'Conrad', 'conrad', 'conrad', 'conrad@gmail.com', 2), --Gerant de l'écurie locale
(default, 'Orti', 'Childeric', 'childeric', 'childeric', 'childeric@gmail.com', 2), --Stand de torture
(default, 'Toumi', 'Irma', 'irma', 'irma', 'irma@gmail.com', 2), --Voyante
(default, 'De Bouillon', 'Agathe', 'agathe', 'agathe', 'agathe@gmail.com', 2), --Remede et plante
(default, 'Rock', 'Hildebert', 'hildebert', 'hildebert', 'hildebert@gmail.com', 2), --Armes de siège
(default, 'Blanche', 'Constance', 'constance', 'constance', 'constance@gmail.com', 2), --Boulangère
(default, 'Domas', 'Stephane', 'stephane', 'stephane', 'stephane@gmail.com', 2), --Presentateur / commentateur / animateur des scènes
(default, 'De La Tour', 'Aimée', 'aimée', 'aimée', 'aimée@gmail.com', 2); --Gerant de l'association de tir à l'arc


INSERT INTO "infoPrestataires" VALUES
('87080662337635', 'Forgeron d armes de père en fils depuis 5 génération', false, 'Nidavallir', 'Forgeron', '/image_presta/forgeron_armes.jpg', 6),
('95048096745763', NULL, false, 'Forgeciel', 'Forgeron', '/image_presta/forgeron_outils.jpg', 7),
('97080662337635', NULL, false, 'Gaston Deffere', 'Forgeron', '/image_presta/forgeron_marechal_ferrant.jpg', 8),
('62059248221134', 'Travailleur du bois, je créer vos demandes', false, 'Wodan&Cie', 'Menuisier', '/image_presta/ebeniste.jpg', 9),
('27522326133922', NULL, false, 'Scie-Physis', 'Luttière', '/image_presta/luthier.jpg', 10),
('82059704500021', NULL, false, 'ABII', 'Tavernier', '/image_presta/taverne.jpg', 11),
('70192293194212', NULL, false, 'Claudus Vitrail', 'Vitrailliste', '/image_presta/vitrailliste.jpg', 12),
('32121568188127', NULL, false, 'Pot ofeu', 'Poterie', '/image_presta/potier.jpg', 13),
('28233418929499', NULL, false, 'Chaussures au moines', 'Cordonnier', '/image_presta/cordonnier.jpg', 14),
('17277788681573', NULL, false, 'Ecurie Addada', 'Ecurie', '/image_presta/ecurie.jpg', 15),
('50335216387331', 'Vous aimez la torture ? Passez à notre stand, vous pourriez essayer', false, 'Aux petits plaisirs', 'Torture', '/image_presta/torture.jpg', 16),
('39628881709477', 'Que vous réserve l avenir ? venez le découvrir dans notre stand', false, 'Dubiff', 'Voyante', '/image_presta/voyante.jpg', 17),
('33733448737176', NULL, false, 'Aux herbes du seigneur', 'Remede et plante', '/image_presta/herboriste.jpg', 18),
('40727170487273', NULL, false, 'Bosiege', 'Armes de siège', '/image_presta/trebuchet.jpg', 19),
('84174659147008', 'Artisan Boulanger réputé', false, 'Boulan-gégé', 'Boulangère', '/image_presta/boulanger.jpg', 20),
('70584918093208', NULL, false, 'Spam Bow', 'Stand de tir à l arc', '/image_presta/stand_de_tir.jpg', 22);

INSERT INTO "infoPrestataires" VALUES ('60732143167747', 'Messire Domas et Monsigneur Ambert sont heureux de vous présenter les spectacles de cette convention', false, 'La compagnie excalibur', 'Presentateur et chevaliers', NULL, 21);


INSERT INTO activites VALUES
--Samedi
(default, 'Lancer de nains', '20230708 14:00:00', '20230708 14:30:00', 'SUS AUX ENNEMIS !! Invasion de nains chez nos ennemis !', 11, 1, '40727170487273'),
(default, 'Tir à l arc', '20230708 15:00:00', '20230708 15:30:00', 'Initiation au tir à l arc pour tous', 16, 2, '70584918093208'),
(default, 'Tir à l arc', '20230708 12:00:00', '20230708 12:30:00', 'Initiation au tir à l arc pour tous', 16, 2, '70584918093208'),
(default, 'Création d une épée', '20230708 14:00:00', '20230708 16:00:00', 'Venez apprendre a créer une épée dans le respect des traditions médiévales', 1, 3, '87080662337635'),
(default, 'Voyante Irma', '20230708 10:00:00', '20230708 18:00:00', 'Madame Irma vous lis votre avenir', 9, 2, '39628881709477'),
(default, 'Animation Torture', '20230708 11:00:00', '20230708 11:30:00', 'Animations sur différentes méthodes de torture', 8, 2, '50335216387331'),
(default, 'Combat de joûte', '20230708 16:00:00', '20230708 17:00:00', 'Combat entre 2 chevalier', 15, 1, '60732143167747'),
-- Dimanche
(default, 'Concours de la plus belle armure', '20230709 17:00:00', '20230709 18:00:00', 'Venez déguisez avec votre plus belle armure médiévale', 14, 2, '60732143167747'),
(default, 'Tir à l arc', '20230709 12:00:00', '20230709 12:30:00', 'Initiation au tir à l arc pour tous', 16, 2, '70584918093208'),
(default, 'Tir à l arc', '20230709 14:00:00', '20230709 14:30:00', 'Initiation au tir à l arc pour tous', 16, 2, '70584918093208'),
(default, 'Voyante Irma', '20230709 10:00:00', '20230709 18:00:00', 'Madame Irma vous lis votre avenir', 9, 2, '39628881709477'),
(default, 'Balade en poney ou cheval', '20230709 11:00:00', '20230709 11:30:00', 'Balade en poney ou cheval', 7, 2, '17277788681573'),
(default, 'Balade en poney ou cheval', '20230709 16:00:00', '20230709 16:30:00', 'Balade en poney ou cheval', 7, 2, '17277788681573'),
(default, 'Combat de joûte', '20230709 15:00:00', '20230709 16:00:00', 'Combat entre 2 chevalier', 15, 1, '60732143167747'),
(default, 'Creation d une statue en bois', '20230709 13:00:00', '20230709 15:00:00', 'Venez apprendre a créer une statue en bois dans le respect des traditions médiévales', 4, 3, '62059248221134');

