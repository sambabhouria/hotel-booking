# Mettre en place un projet Node avec Typescript
https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript-fr
Voici quelques avantages de l’utilisation de TypeScript :
    1. Typage statique optionnel.
    2. Inférence de type.
    3. Capacité à utiliser des interfaces.

# Étape 1 - Initialisation d’un projet npm
Pour commencer, créez un nouveau dossier nommé node_project et accédez à ce répertoire.
     1. mkdir node_project
     2. cd node_project
Ensuite, initialisez-le en tant que projet npm :
    npm init ou npm init -y 
Si vous préférez laisser le npm prendre des valeurs par défaut raisonnables, vous pouvez ajouter le drapeau y pour ignorer les invites d’informations supplémentaires :)

# Étape 2 — Installer des dépendances
Avec un projet npm nu initialisé, l’étape suivante consiste à installer les dépendances nécessaires au lancement de TypeScript.
Exécutez les commandes suivantes depuis le répertoire de votre projet pour installer les dépendances :
    1.  npm install -D typescript@3.3.3
    2.  npm install -D tslint@5.12.1
    3.  npm install -S express@4.16.4
    4.  npm install -D @types/express@4.16.1
# Étape 3 - Configurer TypeScript
Dans cette section, vous allez paramétrer TypeScript et configurer le linting pour TypeScript. TypeScript utilise un fichier appelé tsconfig.json pour configurer les options du compilateur pour un projet. Créez un fichier tsconfig.json dans le root du répertoire du projet et collez-le dans le snippet suivant :

=======tsconfig.json========

{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist"
  },
  "lib": ["es2015"]
}

Passons en revue certaines des clés du snippet JSON ci-dessus :

1. module : Spécifie la méthode de génération du code du module. Node utilise commonjs.
2. target: Spécifie le niveau du langage de sortie.
3.moduleResolution: Cela aide le compilateur à déterminer à quoi se réfère une importation. La valeur
                    node imite le mécanisme de résolution des modules de Node.
4. outDir : Il s’agit de l’emplacement où les fichiers .js sont produits après la transpilation.  Dans ce tutoriel,
             vous le sauvegarderez sous dist.
Une alternative à la création et au remplissage manuels du fichier tsconfig.json consiste à exécuter la commande suivante : tsc --init
Cette commande va générer un fichier tsconfig.json bien commenté pour en savoir plus :
        https://www.typescriptlang.org/docs/handbook/compiler-options.html

# Étape 5 - Créer et faire fonctionner un serveur Express de base

Maintenant que TypeScript et son linter sont configurés, il est temps de construire un serveur Node Express.
Tout d’abord, créez un dossier src dans le root du répertoire de votre projet :
    mkdir src
    Créez ensuite un fichier nommé app.ts dans celui-ci :
    À ce stade, la structure du dossier devrait ressembler à ceci :

    ├── node_modules/
    ├── src/
        ├── app.ts
    ├── package-lock.json
    ├── package.json
    ├── tsconfig.json
    ├── tslint.json
Ouvrez le fichier app.ts avec un éditeur de texte de votre choix et collez le code suivant :

import express from 'express';

const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});

Le code ci-dessus crée un serveur Node qui écoute les requêtes sur le port 3000.  Lancez l’application en utilisant la commande suivante :

npm start

Ouvrez le fichier dist/app.js et vous trouverez la version transposée du code TypeScript :

dist/app.js
"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
app.get('/', (req, res) => {
    res.send('The sedulous hyena ate the antelope!');
});
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});

//# sourceMappingURL=app.js.map
