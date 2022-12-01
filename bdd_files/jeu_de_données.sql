INSERT INTO Type_activite VALUES
(default, 'Spectacles'),
(default, 'Animations'),
(default, 'Demonstrations');


INSERT INTO Tarif VALUES
(default, '1 adulte 1 jour', 6.0),
(default, '1 adulte 2 jour', 10.0),
(default, 'Enfant 10-17 1 jour', 2.0),
(default, 'Enfant 10-17 2 jour', 3.0),
(default, 'Enfant -10', 0.0),
(default, 'Pass Clan (2 adultes, 2 enfants) 1 jour', 12.0),
(default, 'Pass Clan (2 adultes, 2 enfants) 2 jour', 20.0);


INSERT INTO Stand VALUES
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


INSERT INTO Role VALUES
(1, 'Visiteur'),
(2, 'Prestataire'),
(3, 'Admin');


INSERT INTO users VALUES
(default, 'Becher', 'Thomas', 'thomas', 'thomas', 'thomas@gmail.com', 3),
(default, 'Dal Gobbo', 'Theo', 'theo', 'theo', 'theo@gmail.com', 3),
(default, 'Fridelance', 'Raphael', 'raphael', 'raphael', 'raphael@gmail.com', 3),
(default, 'Kohler', 'Jarod', 'jarod', 'jarod', 'jarod@gmail.com', 3),
(default, 'Meister', 'Nicolas', 'nicolas', 'nicolas', 'nicolas@gmail.com', 3),
(default, 'Du Lac', 'Lancelot', 'lancelot', 'lancelot', 'lancelot@gmail.com', 2), --Forgeron1 (épée / couteaux)
(default, 'Myé', 'Alain', 'alain', 'alain', 'alain@gmail.com', 2), --Forgeron2 (outils)
(default, 'Trefle', 'Clotilde', 'clotilde', 'clotilde', 'clotilde@gmail.com', 2), --Forgeron3 (Marechal ferrant)
(default, 'Passier', 'Francois', 'francois', 'francois', 'francois@gmail.com', 2), --Menuisier / Ebeniste
(default, 'Seraph', 'Eulalie', 'eulalie', 'eulalie', 'eulalie@gmail.com', 2), --Luttière
(default, 'Reymond', 'Calixte', 'calixte', 'calixte', 'calixte@gmail.com', 2), --Tavernier
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


INSERT INTO info_prestataire VALUES
(87080662337635, '', 0, 'Nidavallir', 'Forgeron', 1),
(95048096745763, '', 0, 'Forgeciel', 'Forgeron', 2),
(97080662337635, '', 0, 'Gaston Deffere', 'Forgeron', 3),
(62059248221134, '', 0, 'Wodan&Cie', 'Menuisier', 4),
(27522326133922, '', 0, 'Scie-Physis', 'Luttière', 5),
(82059704500021, '', 0, 'ABII', 'Tavernier', 6),
(70192293194212, '', 0, 'Claudus Vitrail', 'Vitrailliste', 7),
(32121568188127, '', 0, 'Pot ofeu', 'Poterie', 8),
(28233418929499, '', 0, 'Chaussures au moines', 'Cordonnier', 9),
(17277788681573, '', 0, 'Ecurie Addada', 'Ecurie', 10),
(50335216387331, '', 0, 'Aux petits plaisirs', 'Torture', 11),
(39628881709477, '', 0, 'Dubiff', 'Voyante', 12),
(33733448737176, '', 0, 'Aux herbes du seigneur', 'Remede et plante', 13),
(40727170487273, '', 0, 'Bosiege', 'Armes de siège', 14),
(84174659147008, '', 0, 'Boulan-gégé', 'Boulangère', 15),
(60732143167747, '', 0, 'La compagnie excalibur', 'Presentateur / commentateur / animateur', 16),
(70584918093208, '', 0, 'Spam Bow', 'Stand de tir à l arc', 17);


INSERT INTO activite VALUES
(default, 'Lancer de nains', '20230708 14:00:00', '20230708 14:30:00', 'SUS AUX ENNEMIS !! Invasion de nains chez nos ennemis !', 11, 1),
(default, 'Tir à l arc', '20230708 15:00:00', '20230708 15:30:00', 'Initiation au tir à l arc pour tous', 16, 2),
(default, 'Création d une épée', '20230708 14:00:00', '20230708 16:00:00', 'Venez apprendre a créer une épée dans le respect des traditions médiévales', 1, 3),
(default, 'Voyante Irma', '20230708 10:00:00', '20230708 18:00:00', 'Madame Irma vous lis votre avenir', 9, 2),
(default, 'Animation Torture', '20230708 11:00:00', '20230708 11:30:00', 'Animations sur différentes méthodes de torture', 8, 2),
(default, 'Combat de joûte', '20230708 16:00:00', '20230708 17:00:00', '', 15, 1),
(default, 'Concours de la plus belle armure', '20230709 17:00:00', '20230709 18:00:00', 'Venez déguisez avec votre plus belle armure médiévale', 14, 2);
