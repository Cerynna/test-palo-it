
# TEST PALO-IT

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)

Projet test pour Palo-IT


## Explication

Au niveau de l'architecture j'ai pris pour abitude de séparé le frontend et le backend dans deux dossiers séparé.
J'ai une command sur ma machine qui me permet de crée un nouveau projet NodeJS / React déjà pret et configuré avec mes préférence. (J'ai ajouter un copie du script dans le dossiers scripts).
J'ai donc commencer l'exercice 1 avec cette architecture.

**Exercie 1:**
Exercice de front, je decide de ne pas utilisé de framework de front pour eviter de chargé le projet inutilement et donc de faire l'intégralité du front en scss.


**Exercie 2:**
J'ai pris la decision de faire une base de donnée en [SQLite](https://www.sqlite.org/index.html) et d'utilisé la librairie [Keyv](https://www.npmjs.com/package/keyv) pour intérargir avec.
*L'avantage de cette methode ca permet d'avoir une table qui evolue facilement.*
Dans le backend, j'ai crée un model Product.js lier a une table product.sqlite et de crée la route product.js
J'en profite aussi pour crée un systeme de seeder en prévision de l'exercice suivant.

**Exercie 3:**
J'intègre en front ce qui a été mis en place a l'exercice précédent.

*Je me rend compte que pour filtré les recherche j'aurais du utilisé Sequelize pour intéragir avec le DB pour pouvoir executé directement du SQL pour filtré ce qui serais plus simple surtout avec une plus de data. Avec Sequelize j'aurais crée un model Tag et fait une lisaison en Many-to-many se qui aurais encore plus facilité le filtrage.*

**Exercie 4:**
Intégration du CRUD en Front


### Installation

Executez la commande `yarn install` ou `npm run install` pour installer les `node_modules` et les seeders.

Puis executez la command `yarn dev` ou `npm run dev` pour executé l'application en Dévellopement.

Ou executez la command `yarn start` ou `npm run start` pour executé l'application en Production.

La command `yarn build` ou `npm run build` permet de build l'app pour la version Production.


## Auteurs

- **Martin Jérémy**  _alias_  [@cerynna](https://github.com/cerynna)
