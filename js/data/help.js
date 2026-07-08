(function () {
  window.MoodleDecisionHelp = {
    autoStart: true,
    items: {
      header: {
        title: 'Vue d’ensemble de l’outil',
        target: '.app-header',
        body: 'L’assistant aide à partir d’un besoin pédagogique pour arriver à un choix d’activité Moodle pertinente, puis à des conseils de paramétrage adaptés.',
        expectation: 'Utilisez-le comme un guide de raisonnement : il ne remplace pas votre scénario, mais il explicite les choix à vérifier.'
      },
      activitiesScope: {
        title: 'Activités prises en compte',
        target: '#activities-card',
        body: 'Seules les activités listées ici sont utilisées dans les recommandations.',
        expectation: 'Les autres activités possibles dans Moodle (paquetage SCORM, outils de visio, outils d’administration, etc.) et plugins tiers ne sont volontairement pas proposés.'
      },
      questionPanel: {
        title: 'Question en cours',
        target: '#question-panel',
        body: 'Cette zone affiche la question active du parcours. Chaque réponse précise progressivement le besoin, l’action étudiante, la trace attendue ou les contraintes de paramétrage.',
        expectation: 'Répondez dans l’ordre proposé. Le parcours s’adapte ensuite aux réponses déjà données. Plus vous répondez aux questions, plus la recommandation s’affine.'
      },
      optionCards: {
        title: 'Choix proposés',
        target: '#question-options',
        body: 'Chaque option de réponse présente un choix possible, une courte description et ce que ce choix implique pour la suite du raisonnement.',
        expectation: 'Sélectionnez l’option la plus proche de votre intention. Il sera toujours possible de revenir en arrière.'
      },
      questionNavigation: {
        title: 'Navigation dans le parcours',
        target: '#question-navigation',
        body: 'Ces boutons permettent de revenir à l’étape précédente ou de recommencer le parcours depuis le début.',
        expectation: 'Utilisez-les pour tester plusieurs scénarios sans perdre la lisibilité du raisonnement.'
      },
      reasoningPanel: {
        title: 'Raisonnement en cours',
        target: '#reasoning-panel',
        body: 'Cette zone reformule au fur et à mesure les réponses sous forme de phrases courtes pour rendre visible le fil de votre raisonnement pédagogique.',
        expectation: 'Survolez une phrase pour voir la question à laquelle elle répond. Vous pouvez cliquer sur une phrase pour revenir à l’étape concernée et modifier votre réponse.'
      },
      resultsPanel: {
        title: 'Activités recommandées',
        target: '#result-panel',
        body: 'Cette zone affiche au fur et à mesure les activités obtenant le meilleur score à partir de vos réponses. La première est la recommandation principale provisoire. Plus vous répondez aux questions, plus cette recommandation s’affine',
        expectation: 'Les autres activités sont des alternatives à considérer si une contrainte ou une intention devient prioritaire.'
      },
      settingsPanel: {
        title: 'Conseils de paramétrage',
        target: '#settings-panel',
        body: 'Cette zone relie l’activité recommandée à des conseils de paramétrage adaptés à la fonction dominante : diagnostique, formative ou sommative.',
        expectation: 'Ces conseils servent de pistes de paramétrage et de points de vigilance avant la création effective dans Moodle.'
      },
      completionBox: {
        title: 'Recommandation finale',
        target: '#completion-box',
        body: 'Cette zone apparaît lorsque le parcours est suffisamment renseigné. Elle synthétise l’intention reconstituée, l’activité la mieux pondérée et les premiers conseils de paramétrage.',
        expectation: 'Le bouton “Voir le détail et les alternatives” ouvre une synthèse détaillée, et le recommandations alternatives accompagnées leurs propres conseils de paramétrage.'
      }
    },
    tour: [
      'header',
      'activitiesScope',
      'questionPanel',
      'optionCards',
      'questionNavigation',
      'reasoningPanel',
      'resultsPanel',
      'settingsPanel'
    ]
  };
})();
