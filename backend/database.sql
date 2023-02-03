USE `biblioMimosa`;

DROP TABLE IF EXISTS `biblioMimosa`.`emprunts`;

DROP TABLE IF EXISTS `biblioMimosa`.`livres`;

DROP TABLE IF EXISTS `biblioMimosa`.`connexion`;

CREATE TABLE IF NOT EXISTS `biblioMimosa`.`connexion` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `login` VARCHAR(255) UNIQUE NOT NULL,
  `hashedPassword` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

INSERT INTO
  `connexion`(`login`, `hashedPassword`)
VALUES
  (
    "aoudia-A-06",
    "$argon2id$v=19$m=65536,t=5,p=1$sj20Lm+kmiLupV2JWfUIvw$YYGSaZTCIts1PzQMUoO5XUO4QRjDzqUjubRj4Ya5Pu0"
  ),
  (
    "lemoine-B-23",
    "$argon2id$v=19$m=65536,t=5,p=1$/Moi1qkuBZNx65qyH2yUBA$mE5lclcP1sIqNZJZEZs6ozZHdOh/xcPWNcxjbtPlUWw"
  ),
  (
    "petaccia-C-52",
    "$argon2id$v=19$m=65536,t=5,p=1$FLL5q+TLsug00NENsu8HEw$rZC/6yI1Qie0/+HTN9qTu0QfGXlmrkZHAF/vTVQmcDo"
  ),
  (
    "rouxel-C-45",
    "$argon2id$v=19$m=65536,t=5,p=1$JODvCFJprCRlftuAJmv+AA$7dx0liPTeHRgTOAbFjY18eUD8W5o8O1ZATZ+oY3+Z8g"
  ),
  (
    "viot-B-36",
    "$argon2id$v=19$m=65536,t=5,p=1$JODvCFJprCRlftuAJmv+AA$7dx0liPTeHRgTOAbFjY18eUD8W5o8O1ZATZ+oY3+Z8g"
  ),
  (
    "tormo-A-12",
    "$argon2id$v=19$m=65536,t=5,p=1$JODvCFJprCRlftuAJmv+AA$7dx0liPTeHRgTOAbFjY18eUD8W5o8O1ZATZ+oY3+Z8g"
  ),
  (
    "vaxelaire-A-02",
    "$argon2id$v=19$m=65536,t=5,p=1$l9ImORgMWzsZX62OfruNcQ$SVeV7nVqKl6yVMIGqaQquAphhn/mhrKdvzLKX+Urd54"
  );

CREATE TABLE IF NOT EXISTS `biblioMimosa`.`livres` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titre` VARCHAR(50) NOT NULL,
  `auteur` VARCHAR(50) NOT NULL,
  `resume` Varchar(200),
  `disponible` BOOLEAN NOT NULL DEFAULT TRUE,
  `connexion_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_livres_connexion` FOREIGN KEY (`connexion_id`) REFERENCES `biblioMimosa`.`connexion` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `biblioMimosa`.`emprunts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `livres_id` INT NOT NULL,
  `connexion_id` INT NOT NULL,
  `dateEmprunt` date,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_emprunts_connexion` FOREIGN KEY (`connexion_id`) REFERENCES `biblioMimosa`.`connexion` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_emprunts_livres` FOREIGN KEY (`livres_id`) REFERENCES `biblioMimosa`.`livres` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;