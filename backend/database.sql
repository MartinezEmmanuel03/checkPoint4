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