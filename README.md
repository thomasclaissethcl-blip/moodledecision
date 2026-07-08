# Assistant de choix d’activité Moodle

Prototype HTML/CSS/JS statique pour guider le choix d’une activité Moodle à partir d’un besoin pédagogique, d’une action étudiante, d’une trace attendue et d’une fonction d’évaluation.

## Arborescence

```text
moodle-decision-tool/
├── index.html
├── assets/
│   └── icons/
│       ├── Atelier.svg
│       ├── BDD.svg
│       ├── Devoir.svg
│       └── ...
├── css/
│   └── styles.css
└── js/
    ├── app.js
    ├── engine.js
    └── data/
        ├── activities.js
        └── questions.js
```

## Modifier les activités

Les fiches activités se trouvent dans `js/data/activities.js`.

Chaque activité contient :

- son nom ;
- son statut évaluable ou non ;
- un résumé ;
- les traces produites ;
- ses forces ;
- ses points de vigilance ;
- ses profils de paramétrage diagnostique, formatif et sommatif.

## Modifier les questions

Le parcours se trouve dans `js/data/questions.js`.

Chaque question contient :

- un identifiant `id` ;
- un titre ;
- une aide ;
- des options ;
- éventuellement une condition `showIf` pour l’affichage conditionnel.

Chaque option peut attribuer des points aux activités via `scores` et aux fonctions via `function`. Elle peut aussi contenir une phrase `reasoning`, affichée dans la zone « Raisonnement en cours » et dans la recommandation détaillée.

Exemple :

```js
scores: { devoir: 3, test: -1 }
function: { formative: 2 }
reasoning: "La trace servira à soutenir l’entraînement et à permettre aux étudiants d’apprendre de leurs erreurs."
```

## Modifier la logique de décision

Le moteur de pondération est dans `js/engine.js`.

Il gère :

- les questions visibles selon les réponses précédentes ;
- la suppression des réponses devenues non pertinentes ;
- le calcul des scores ;
- la fonction dominante ;
- la synthèse exploitable dans la recommandation détaillée.

## Lancer le prototype

Ouvrir `index.html` dans un navigateur récent. Aucun serveur ni dépendance externe n’est nécessaire.


## Restitution finale

Une fois toutes les questions visibles traitées, le bloc `Recommandation provisoire` affiche :

- l’intention reconstituée à partir des réponses sélectionnées ;
- l’activité la mieux pondérée ;
- sa description courte ;
- les conseils de paramétrage associés à la fonction dominante détectée ;
- les principales suggestions alternatives.

Le bouton `Voir la recommandation` ouvre un modal contenant :

- l’intention reconstituée et les précisions du scénario ;
- la recommandation principale ;
- les traces exploitables et points de vigilance ;
- les conseils de paramétrage adaptés au cas ;
- le raisonnement complet ;
- les recommandations alternatives dans des accordéons, avec leurs propres conseils de paramétrage.

Les accordéons alternatifs sont fermés par défaut. L’ouverture d’un accordéon ferme automatiquement les autres et replace le défilement du modal au niveau de l’accordéon ouvert.


## Modifier l’intention reconstituée

La génération de l’intention finale se trouve dans `js/app.js`, dans les objets `intentionFragments` et `intentionDetails`.

- `intentionFragments` sert à composer la phrase principale : moment, besoin, action étudiante et trace attendue.
- `intentionDetails` sert à produire les phrases courtes de précision : anonymat, feedback, tentatives, visibilité, mode de travail, statut de la trace et contrainte pratique.

Ce choix évite de rédiger manuellement tous les parcours possibles. L’intention est générée dynamiquement à partir des réponses réellement sélectionnées.

## Modifier les icônes d’activités

Les icônes SVG sont rangées dans `assets/icons/`.

La correspondance entre les activités et les icônes est définie dans `js/app.js`, dans l’objet `activityIcons`.

Les icônes sont affichées automatiquement à gauche du nom de l’activité lorsque celui-ci est rendu comme titre d’activité dans les recommandations. Elles sont également reprises dans les en-têtes des accordéons de recommandations alternatives.

## Aide intégrée et visite guidée

Cette version ajoute une couche d’aide sans modifier le moteur de décision.

- `js/data/help.js` contient les textes de la visite guidée et des aides contextuelles.
- `js/help-tour.js` gère l’affichage de la visite, l’assombrissement de l’écran, la mise en évidence de la zone active et les modals d’aide.
- Les boutons `?` sont placés dans les en-têtes des cartes principales afin de conserver l’alignement visuel.
- Le bouton `Visite guidée`, placé dans le header, permet de relancer la visite à tout moment sur desktop.
- La visite guidée et son bouton sont masqués en affichage mobile, à partir du breakpoint `max-width: 920px`.
- Pendant la visite guidée, les interactions avec le reste de l’outil sont bloquées : seuls les boutons de la bulle de visite restent utilisables.

Pour modifier un texte d’aide, éditer uniquement `js/data/help.js`. Pour ajouter une étape à la visite, ajouter une entrée dans `items`, puis son identifiant dans le tableau `tour`.


## Derniers ajustements d’interface

- En fin de parcours, la zone de questions est masquée et laisse la place à la recommandation finale.
- En revenant à une étape précédente, la recommandation finale est masquée et la zone de questions réapparaît.
- Après le choix d’une proposition, l’interface remonte automatiquement vers le texte de la question suivante, ou vers la recommandation finale si le parcours est terminé.
