window.MoodleDecisionData = window.MoodleDecisionData || {};

window.MoodleDecisionData.activities = {
  atelier: {
    id: 'atelier',
    name: 'Atelier',
    evaluable: true,
    summary: "Faire remettre une production puis organiser une évaluation par les pairs à partir de critères définis.",
    traces: ['Production remise', 'Évaluations de pairs', 'Commentaires', 'Notes de production', 'Notes d’évaluation'],
    strengths: ['Évaluation par les pairs', 'Appropriation des critères', 'Comparaison de productions', 'Activité en plusieurs phases'],
    cautions: ['Paramétrage plus exigeant', 'Critères nécessaires', 'Temps de déroulement à prévoir'],
    profiles: {
      diagnostic: {
        title: 'Usage diagnostique possible mais secondaire',
        bullets: ['À utiliser seulement si l’on veut observer une première capacité à juger une production.', 'Prévoir une activité simple, sans enjeu certificatif.', 'Privilégier des critères courts et explicites.'],
        warning: "L’Atelier est rarement le meilleur choix pour un diagnostic rapide. Un Feedback, un Sondage, un Forum ou un Test court seront souvent plus légers."
      },
      formative: {
        title: 'Profil formatif conseillé',
        bullets: ['Faire déposer une version intermédiaire.', 'Utiliser une grille de critères compréhensible.', 'Prévoir une phase d’évaluation par les pairs.', 'Exploiter les retours pour améliorer la production avant une version finale.'],
        warning: 'Le temps de formation aux critères doit être prévu, sinon les retours de pairs peuvent être peu exploitables.'
      },
      summative: {
        title: 'Profil sommatif possible',
        bullets: ['Stabiliser les critères avant l’ouverture.', 'Expliciter ce qui est noté : production, qualité de l’évaluation, ou les deux.', 'Prévoir les phases de dépôt, d’évaluation et de fermeture.', 'Vérifier la lisibilité des notes dans le carnet de notes.'],
        warning: 'Une évaluation par les pairs sommative doit être très cadrée et transparente pour les étudiants.'
      }
    }
  },

  base_de_donnees: {
    id: 'base_de_donnees',
    name: 'Base de données',
    evaluable: true,
    summary: 'Faire créer, afficher, rechercher, commenter ou évaluer des fiches structurées.',
    traces: ['Fiches', 'Champs structurés', 'Fichiers ou images', 'Commentaires', 'Évaluations éventuelles'],
    strengths: ['Mutualisation structurée', 'Collection consultable', 'Fiches comparables', 'Commentaires possibles'],
    cautions: ['Moins adaptée aux productions privées', 'Structure des champs à concevoir', 'Peut être lourde pour une réponse simple'],
    profiles: {
      diagnostic: {
        title: 'Profil diagnostique',
        bullets: ['Faire renseigner une fiche courte de positionnement ou d’exemple initial.', 'Limiter les champs au strict nécessaire.', 'Utiliser les fiches pour repérer des représentations, besoins ou niveaux de départ.'],
        warning: 'Ne pas surstructurer un diagnostic simple : un Feedback ou un Sondage suffit si aucune collection n’est utile.'
      },
      formative: {
        title: 'Profil formatif conseillé',
        bullets: ['Créer des champs correspondant aux critères d’analyse.', 'Autoriser les commentaires si l’échange autour des fiches est utile.', 'Prévoir une consigne de consultation des fiches produites par les pairs.', 'Éventuellement utiliser les évaluations pour valoriser la participation.'],
        warning: 'La valeur pédagogique vient de la structure des fiches et de leur réutilisation, pas seulement du dépôt.'
      },
      summative: {
        title: 'Profil sommatif possible',
        bullets: ['Définir une structure de fiche alignée avec les critères d’évaluation.', 'Annoncer les critères et le statut de la note.', 'Choisir une méthode d’évaluation adaptée.', 'Vérifier si les fiches doivent être visibles avant ou après l’évaluation.'],
        warning: 'Si la production doit rester strictement privée, un Devoir est généralement plus adapté.'
      }
    }
  },

  devoir: {
    id: 'devoir',
    name: 'Devoir',
    evaluable: true,
    summary: 'Recueillir une production individuelle ou de groupe, puis donner un feedback et éventuellement une note.',
    traces: ['Fichier remis', 'Texte en ligne', 'Date de remise', 'Statut de remise', 'Feedback', 'Note', 'Grille ou barème'],
    strengths: ['Dépôt privé', 'Feedback enseignant', 'Travail de groupe possible', 'Grille/barème', 'Centralisation des remises'],
    cautions: ['Peu adapté aux échanges collectifs', 'Pas de correction automatique', 'Moins adapté à la mutualisation visible'],
    profiles: {
      diagnostic: {
        title: 'Profil diagnostique',
        bullets: ['Demander une production courte ou un état initial.', 'Désactiver la note ou la rendre sans enjeu.', 'Prévoir un retour global plutôt qu’une correction détaillée si le volume est important.', 'Utiliser la trace pour adapter la suite.'],
        warning: 'Un Devoir diagnostique est pertinent surtout si l’on a besoin d’une production ouverte, pas d’un simple positionnement.'
      },
      formative: {
        title: 'Profil formatif conseillé',
        bullets: ['Créer un dépôt intermédiaire ou une version de travail.', 'Activer le feedback par commentaires, fichier annoté ou commentaire en ligne selon le type de remise.', 'Autoriser plusieurs tentatives ou la réouverture si une amélioration est attendue.', 'Préciser comment le retour sera utilisé avant la version finale.'],
        warning: 'Si le dépôt est fortement noté, les étudiants peuvent le percevoir comme sommatif même si l’intention est formative.'
      },
      summative: {
        title: 'Profil sommatif conseillé',
        bullets: ['Définir une date limite et éventuellement une date butoir.', 'Limiter les types de remise attendus.', 'Utiliser une grille, un barème ou une méthode avancée si les critères sont multiples.', 'Clarifier les règles de retard, de groupe, de fichier et de notation.'],
        warning: 'La consigne, les critères et les conditions de remise doivent être explicités avant l’ouverture.'
      }
    }
  },

  feedback: {
    id: 'feedback',
    name: 'Feedback',
    evaluable: false,
    summary: 'Collecter des informations au moyen d’un questionnaire, éventuellement anonyme.',
    traces: ['Réponses à questionnaire', 'Réponses anonymes possibles', 'Résultats de groupe'],
    strengths: ['Diagnostic', 'Régulation', 'Anonymat possible', 'Plusieurs questions', 'Retour sur le cours'],
    cautions: ['Non noté', 'Pas conçu pour vérifier finement une maîtrise disciplinaire', 'Pas de production complexe'],
    profiles: {
      diagnostic: {
        title: 'Profil diagnostique conseillé',
        bullets: ['Utiliser des questions courtes sur les prérequis, besoins ou représentations.', 'Activer l’anonymat si l’on cherche des réponses sincères sur des difficultés.', 'Prévoir une restitution ou une adaptation visible pour donner du sens à la collecte.'],
        warning: 'Ne pas présenter cette activité comme une évaluation notée : elle sert à recueillir des informations.'
      },
      formative: {
        title: 'Profil de régulation formative',
        bullets: ['Collecter des retours pendant la séquence.', 'Demander ce qui aide, bloque ou doit être clarifié.', 'Exploiter les réponses pour ajuster la suite ou reprendre un point en séance.'],
        warning: 'Le feedback devient formateur seulement si les réponses sont réellement exploitées.'
      },
      summative: {
        title: 'Usage sommatif non conseillé',
        bullets: ['Ne pas utiliser comme activité sommative directe.', 'Préférer Devoir, Test, Atelier ou une activité évaluable si une note est attendue.'],
        warning: 'Feedback n’est pas évaluable dans Moodle dans le référentiel utilisé.'
      }
    }
  },

  forum: {
    id: 'forum',
    name: 'Forum',
    evaluable: true,
    summary: 'Organiser des échanges asynchrones, des questions, des discussions ou des contributions argumentées.',
    traces: ['Messages', 'Réponses', 'Fils de discussion', 'Pièces jointes', 'Évaluations éventuelles'],
    strengths: ['Échanges', 'Mutualisation', 'Questions-réponses', 'Argumentation', 'Participation visible'],
    cautions: ['Critères nécessaires si noté', 'Moins adapté aux remises privées', 'Peut demander une animation'],
    profiles: {
      diagnostic: {
        title: 'Profil diagnostique',
        bullets: ['Utiliser une question ouverte pour faire émerger des représentations ou difficultés.', 'Choisir un forum Q/R si l’on veut que chacun réponde avant de voir les autres.', 'Prévoir une synthèse collective des réponses.'],
        warning: 'Le diagnostic par forum demande une lecture qualitative, moins rapide qu’un Sondage ou un Feedback.'
      },
      formative: {
        title: 'Profil formatif conseillé',
        bullets: ['Donner une consigne de contribution précise.', 'Demander éventuellement une réponse à un pair.', 'Utiliser le forum pour centraliser les questions ou difficultés.', 'Prévoir une synthèse ou une relance de l’enseignant.'],
        warning: 'Sans animation ou consigne claire, le forum peut rester vide ou devenir dispersé.'
      },
      summative: {
        title: 'Profil sommatif possible',
        bullets: ['Annoncer explicitement les critères de contribution.', 'Choisir le type de forum cohérent avec la tâche.', 'Utiliser l’évaluation ou les notes seulement si les attentes sont observables.', 'Limiter le risque de survaloriser la quantité de messages plutôt que leur qualité.'],
        warning: 'Noter un forum exige des critères transparents, sinon la note peut sembler arbitraire.'
      }
    }
  },

  glossaire: {
    id: 'glossaire',
    name: 'Glossaire',
    evaluable: true,
    summary: 'Faire créer une banque de définitions, notions, ressources ou exemples organisés.',
    traces: ['Articles', 'Définitions', 'Fichiers joints', 'Commentaires', 'Évaluations éventuelles'],
    strengths: ['Vocabulaire commun', 'Notions techniques', 'Ressource réutilisable', 'Commentaires possibles'],
    cautions: ['Moins adapté aux productions longues', 'Peu adapté à une discussion complexe', 'Risque d’accumulation sans validation'],
    profiles: {
      diagnostic: {
        title: 'Profil diagnostique',
        bullets: ['Demander une définition initiale d’un terme clé.', 'Comparer les définitions avant/après apprentissage.', 'Utiliser les erreurs comme point d’entrée pour la séance.'],
        warning: 'Ne pas confondre dictionnaire collaboratif et évaluation fine de compétence.'
      },
      formative: {
        title: 'Profil formatif conseillé',
        bullets: ['Faire construire progressivement les notions du cours.', 'Activer l’approbation si l’enseignant veut valider avant publication.', 'Autoriser les commentaires si la discussion des définitions est utile.', 'Prévoir une reprise ou une amélioration des articles.'],
        warning: 'Une banque de définitions n’a de valeur que si elle est consultée et réutilisée.'
      },
      summative: {
        title: 'Profil sommatif possible',
        bullets: ['Définir des critères : exactitude, clarté, exemple, source, reformulation.', 'Limiter le nombre d’articles à produire.', 'Annoncer le mode d’évaluation.', 'Vérifier que les contributions individuelles sont identifiables.'],
        warning: 'Le Glossaire évalue surtout une capacité de formalisation courte, pas une production complexe.'
      }
    }
  },

  h5p: {
    id: 'h5p',
    name: 'H5P',
    evaluable: true,
    summary: 'Proposer une interaction intégrée à un contenu ou à un exercice, souvent avec correction automatique.',
    traces: ['Réponses', 'Score', 'Progression', 'Erreurs ou réussites selon le contenu'],
    strengths: ['Interactivité', 'Feedback immédiat', 'Auto-évaluation', 'Vidéo ou ressource active'],
    cautions: ['Peu adapté aux productions complexes', 'Risque d’interactivité décorative', 'Dépend du type H5P créé'],
    profiles: {
      diagnostic: {
        title: 'Profil diagnostique',
        bullets: ['Utiliser quelques interactions ciblées sur les prérequis.', 'Prévoir une exploitation rapide des résultats.', 'Éviter une note à fort enjeu.', 'Utiliser le score comme indication plutôt que preuve complète.'],
        warning: 'Un H5P diagnostique doit rester court et directement relié à la décision pédagogique à prendre.'
      },
      formative: {
        title: 'Profil formatif conseillé',
        bullets: ['Choisir un type H5P qui donne un feedback immédiat.', 'Intégrer l’activité au bon moment dans la ressource.', 'Autoriser l’entraînement et la reprise si le type d’activité le permet.', 'Formuler une consigne qui précise ce que l’étudiant doit apprendre de l’erreur.'],
        warning: 'L’interactivité doit soutenir la compréhension, pas seulement rendre le contenu plus animé.'
      },
      summative: {
        title: 'Profil sommatif léger possible',
        bullets: ['Réserver aux connaissances ou procédures vérifiables automatiquement.', 'Clarifier la valeur de la note.', 'Vérifier la remontée de note dans Moodle.', 'Préférer Test si l’évaluation doit être plus cadrée.'],
        warning: 'Pour une évaluation sommative structurée, Test est souvent plus robuste que H5P.'
      }
    }
  },

  lecon: {
    id: 'lecon',
    name: 'Leçon',
    evaluable: true,
    summary: 'Créer un parcours autonome, linéaire ou ramifié, combinant contenus et questions.',
    traces: ['Pages consultées', 'Réponses', 'Chemin suivi', 'Progression', 'Score éventuel'],
    strengths: ['Parcours autonome', 'Embranchements', 'Différenciation', 'Révision guidée', 'Simulation'],
    cautions: ['Temps de conception', 'Pas nécessaire pour une simple page', 'Ramification à scénariser'],
    profiles: {
      diagnostic: {
        title: 'Profil diagnostique',
        bullets: ['Commencer par des questions d’orientation.', 'Diriger vers des pages différentes selon les réponses.', 'Utiliser le parcours pour recommander des révisions.'],
        warning: 'Si aucune différenciation n’est utile, un Test ou un Feedback sera plus simple.'
      },
      formative: {
        title: 'Profil formatif conseillé',
        bullets: ['Combiner apports courts et questions.', 'Utiliser les embranchements pour guider selon les erreurs.', 'Afficher une progression si cela aide l’étudiant.', 'Privilégier la révision, l’entraînement ou la prise de décision.'],
        warning: 'La Leçon demande une scénarisation pédagogique précise des chemins possibles.'
      },
      summative: {
        title: 'Profil sommatif possible',
        bullets: ['Limiter l’usage sommatif à des parcours bien cadrés.', 'Clarifier si la Leçon est notée ou seulement d’entraînement.', 'Vérifier le réglage de note et de progression.', 'Préférer Test pour une évaluation certificative classique.'],
        warning: 'Une Leçon notée peut être pertinente, mais elle n’est pas toujours le format le plus lisible pour certifier.'
      }
    }
  },

  sondage: {
    id: 'sondage',
    name: 'Sondage',
    evaluable: false,
    summary: 'Poser une question unique et faire choisir une réponse parmi des options.',
    traces: ['Choix', 'Répartition des réponses', 'Résultats éventuellement visibles'],
    strengths: ['Positionnement rapide', 'Décision collective', 'Question unique', 'Régulation immédiate'],
    cautions: ['Non noté', 'Une seule question', 'Pas de justification développée'],
    profiles: {
      diagnostic: {
        title: 'Profil diagnostique conseillé',
        bullets: ['Poser une question simple de positionnement ou de représentation.', 'Choisir si les résultats sont affichés au groupe.', 'Exploiter la répartition pour lancer une discussion ou adapter la séance.'],
        warning: 'Le Sondage ne permet pas d’expliquer les raisons du choix, sauf si une autre activité complète la démarche.'
      },
      formative: {
        title: 'Profil de régulation formative',
        bullets: ['Utiliser le sondage pour orienter un choix de séance.', 'Faire réagir le groupe à partir des résultats.', 'Choisir une option quand une décision collective est attendue.'],
        warning: 'Le Sondage sert surtout à orienter et réguler, pas à évaluer finement.'
      },
      summative: {
        title: 'Usage sommatif non conseillé',
        bullets: ['Ne pas utiliser comme activité sommative.', 'Choisir une activité évaluable si une note ou une preuve d’apprentissage est attendue.'],
        warning: 'Sondage n’est pas évaluable dans Moodle dans le référentiel utilisé.'
      }
    }
  },

  test: {
    id: 'test',
    name: 'Test',
    evaluable: true,
    summary: 'Créer une évaluation par questions, avec score, tentatives, feedbacks et réglages de relecture.',
    traces: ['Réponses', 'Score', 'Tentatives', 'Temps', 'Feedbacks', 'Note'],
    strengths: ['Correction automatique', 'Feedback', 'Tentatives multiples', 'Banque de questions', 'Temps limité possible'],
    cautions: ['Moins adapté aux productions complexes', 'Risque de réduire l’objectif à ce qui est facilement corrigeable', 'Paramétrage à aligner avec la fonction'],
    profiles: {
      diagnostic: {
        title: 'Profil diagnostique conseillé',
        bullets: ['Questions courtes sur les prérequis ou représentations.', 'Faible enjeu ou note non utilisée dans la moyenne.', 'Feedback visible rapidement.', 'Temps non strict sauf besoin particulier.', 'Exploitation des résultats par l’enseignant pour ajuster la suite.'],
        warning: 'Un test diagnostique sert à situer, pas à sanctionner.'
      },
      formative: {
        title: 'Profil formatif conseillé',
        bullets: ['Autoriser plusieurs tentatives.', 'Choisir une méthode de note cohérente avec l’entraînement, par exemple meilleure tentative.', 'Afficher feedbacks, erreurs et éventuellement bonnes réponses selon le scénario.', 'Utiliser un comportement de question qui soutient le feedback immédiat ou les essais multiples.', 'Prévoir un délai entre tentatives si l’on veut encourager la révision.'],
        warning: 'Plus la note compte fortement, plus l’activité sera perçue comme sommative.'
      },
      summative: {
        title: 'Profil sommatif conseillé',
        bullets: ['Définir ouverture, fermeture et éventuellement limite de temps.', 'Limiter le nombre de tentatives.', 'Retarder la relecture détaillée si les questions doivent rester protégées.', 'Mélanger les questions ou réponses si cela soutient l’équité.', 'Clarifier consignes, durée, nombre de tentatives et valeur de la note.'],
        warning: 'Le paramétrage de relecture doit être cohérent avec la confidentialité des réponses et le statut certificatif du test.'
      }
    }
  },

  wiki: {
    id: 'wiki',
    name: 'Wiki',
    evaluable: false,
    summary: 'Faire produire et modifier une collection de pages web, individuellement ou collectivement, avec historique.',
    traces: ['Pages', 'Historique des versions', 'Contributions', 'Modifications successives'],
    strengths: ['Co-écriture', 'Production évolutive', 'Historique', 'Notes de lecture ou révision'],
    cautions: ['Non noté directement', 'Demande une organisation de la co-écriture', 'Moins adapté à une remise finale privée'],
    profiles: {
      diagnostic: {
        title: 'Profil diagnostique possible',
        bullets: ['Observer l’état initial d’une production ou d’une compréhension.', 'Demander une première rédaction courte.', 'Utiliser l’historique pour voir les ajustements.'],
        warning: 'Pour un diagnostic rapide, un outil de questionnement est plus simple.'
      },
      formative: {
        title: 'Profil formatif conseillé',
        bullets: ['Utiliser le wiki pour une production évolutive.', 'Clarifier les rôles de contribution.', 'Prévoir des jalons de relecture.', 'Exploiter l’historique pour accompagner la progression.'],
        warning: 'Le wiki fonctionne bien si la tâche de co-écriture est réellement scénarisée.'
      },
      summative: {
        title: 'Usage sommatif indirect',
        bullets: ['Évaluer avec une grille externe ou une autre modalité si nécessaire.', 'Stabiliser une date de version finale.', 'Clarifier les critères de contribution et de qualité du document.'],
        warning: 'Wiki n’est pas directement évaluable dans Moodle dans le référentiel utilisé.'
      }
    }
  }
};
