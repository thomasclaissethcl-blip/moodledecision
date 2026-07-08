window.MoodleDecisionData = window.MoodleDecisionData || {};

window.MoodleDecisionData.questions = [
  {
    "id": "moment",
    "title": "À quel moment du parcours souhaitez-vous recueillir une trace ?",
    "help": "Le moment aide à distinguer une logique de diagnostic, d’accompagnement ou d’attestation.",
    "options": [
      {
        "value": "avant",
        "label": "Avant l’apprentissage",
        "description": "Vous voulez situer les étudiants avant de commencer ou avant une nouvelle étape.",
        "implication": "Oriente vers une fonction diagnostique.",
        "scores": {
          "feedback": 3,
          "sondage": 3,
          "test": 2,
          "h5p": 1,
          "forum": 1,
          "glossaire": 1
        },
        "function": {
          "diagnostic": 4
        },
        "reasoning": "La trace sera recueillie avant l’apprentissage pour situer les étudiants avant une nouvelle étape."
      },
      {
        "value": "pendant",
        "label": "Pendant l’apprentissage",
        "description": "Vous voulez accompagner la progression, entraîner, réguler ou donner du feedback.",
        "implication": "Oriente vers une fonction formative.",
        "scores": {
          "devoir": 2,
          "test": 2,
          "forum": 2,
          "h5p": 2,
          "lecon": 2,
          "atelier": 1,
          "base_de_donnees": 1,
          "wiki": 1,
          "glossaire": 1
        },
        "function": {
          "formative": 4
        },
        "reasoning": "La trace sera recueillie pendant l’apprentissage pour accompagner la progression et réguler le travail."
      },
      {
        "value": "apres",
        "label": "Après l’apprentissage",
        "description": "Vous voulez vérifier ce qui est atteint, attribuer une note ou conserver une preuve.",
        "implication": "Oriente vers une fonction sommative.",
        "scores": {
          "devoir": 3,
          "test": 3,
          "atelier": 2,
          "base_de_donnees": 1,
          "forum": 1,
          "glossaire": 1,
          "h5p": 1,
          "lecon": 1
        },
        "function": {
          "summative": 4
        },
        "reasoning": "La trace sera recueillie après l’apprentissage pour vérifier ce qui est atteint et garder une preuve exploitable."
      },
      {
        "value": "plusieurs",
        "label": "À plusieurs moments",
        "description": "Vous voulez articuler diagnostic, entraînement, feedback et éventuellement validation.",
        "implication": "L’outil proposera plutôt une combinaison ou une activité paramétrable.",
        "scores": {
          "test": 2,
          "devoir": 2,
          "lecon": 2,
          "h5p": 1,
          "atelier": 1,
          "forum": 1,
          "feedback": 1
        },
        "function": {
          "diagnostic": 1,
          "formative": 2,
          "summative": 1
        },
        "reasoning": "Le besoin concerne plusieurs moments du parcours ; la solution devra articuler diagnostic, entraînement et éventuelle validation."
      }
    ]
  },
  {
    "id": "primaryNeed",
    "title": "À quoi la trace doit-elle principalement servir ?",
    "help": "Cette question précise la décision pédagogique que vous voulez pouvoir prendre grâce à la trace.",
    "options": [
      {
        "value": "situer",
        "label": "Situer les étudiants",
        "description": "Repérer prérequis, représentations, attentes, besoins ou difficultés initiales.",
        "implication": "La trace sert à adapter la suite plutôt qu’à noter.",
        "scores": {
          "feedback": 3,
          "sondage": 3,
          "test": 2,
          "forum": 1,
          "h5p": 1,
          "glossaire": 1
        },
        "function": {
          "diagnostic": 4
        },
        "reasoning": "La trace servira d’abord à repérer les acquis, besoins ou difficultés avant de poursuivre."
      },
      {
        "value": "entrainer",
        "label": "Entraîner et faire progresser",
        "description": "Donner aux étudiants l’occasion de s’exercer et d’apprendre de leurs erreurs.",
        "implication": "Le feedback et le droit à l’essai deviennent centraux.",
        "scores": {
          "test": 3,
          "h5p": 3,
          "lecon": 2,
          "devoir": 1,
          "forum": 1,
          "wiki": 1
        },
        "function": {
          "formative": 4
        },
        "reasoning": "La trace servira à soutenir l’entraînement et à permettre aux étudiants d’apprendre de leurs erreurs."
      },
      {
        "value": "accompagner_production",
        "label": "Accompagner une production",
        "description": "Recueillir une version de travail, la commenter, puis soutenir l’amélioration.",
        "implication": "Oriente vers une activité de dépôt, de feedback ou de pairs.",
        "scores": {
          "devoir": 4,
          "atelier": 3,
          "base_de_donnees": 2,
          "forum": 1,
          "wiki": 1
        },
        "function": {
          "formative": 4
        },
        "reasoning": "La trace correspondra à une production de travail destinée à recevoir un retour avant amélioration."
      },
      {
        "value": "mutualiser",
        "label": "Mutualiser des productions ou ressources",
        "description": "Créer une collection visible et exploitable par le groupe.",
        "implication": "La visibilité et la structure des contributions seront déterminantes.",
        "scores": {
          "base_de_donnees": 4,
          "glossaire": 3,
          "forum": 2,
          "wiki": 2
        },
        "function": {
          "formative": 3,
          "diagnostic": 1
        },
        "reasoning": "La trace devra être mutualisée pour constituer une ressource ou une collection utile au groupe."
      },
      {
        "value": "attester",
        "label": "Attester un niveau atteint",
        "description": "Vérifier, noter ou valider une production, une compréhension ou une performance.",
        "implication": "Les critères, les règles et les conditions de passation doivent être explicites.",
        "scores": {
          "devoir": 4,
          "test": 4,
          "atelier": 2,
          "base_de_donnees": 1,
          "forum": 1,
          "glossaire": 1
        },
        "function": {
          "summative": 5
        },
        "reasoning": "La trace servira à attester un niveau atteint ; les critères et règles devront être explicites."
      },
      {
        "value": "reguler_cours",
        "label": "Réguler le cours ou la séance",
        "description": "Collecter des retours pour adapter l’organisation, le rythme ou les explications.",
        "implication": "Oriente vers enquête, sondage ou espace d’expression.",
        "scores": {
          "feedback": 4,
          "sondage": 3,
          "forum": 2
        },
        "function": {
          "diagnostic": 2,
          "formative": 2
        },
        "reasoning": "La trace servira à ajuster le cours, le rythme ou les explications à partir des retours recueillis."
      }
    ]
  },
  {
    "id": "studentAction",
    "title": "Que doivent faire les étudiants ?",
    "help": "L’activité Moodle doit être choisie à partir de l’action attendue, pas à partir du nom de l’outil.",
    "options": [
      {
        "value": "choisir",
        "label": "Choisir ou se positionner rapidement",
        "description": "Sélectionner une option parmi plusieurs possibilités.",
        "implication": "Ouvre une branche Sondage / Feedback / Test court.",
        "scores": {
          "sondage": 4,
          "feedback": 2,
          "test": 1
        },
        "function": {
          "diagnostic": 2,
          "formative": 1
        },
        "reasoning": "Les étudiants devront se positionner rapidement en sélectionnant une option parmi plusieurs choix."
      },
      {
        "value": "repondre_questionnaire",
        "label": "Répondre à plusieurs questions",
        "description": "Répondre à un questionnaire, une enquête ou une série de questions.",
        "implication": "La suite distinguera enquête, auto-correction et évaluation notée.",
        "scores": {
          "feedback": 3,
          "test": 3,
          "h5p": 2,
          "lecon": 1
        },
        "function": {
          "diagnostic": 2,
          "formative": 1
        },
        "reasoning": "Les étudiants devront répondre à plusieurs questions pour produire des données exploitables."
      },
      {
        "value": "produire_deposer",
        "label": "Produire et déposer un travail",
        "description": "Remettre un fichier, un texte ou une production identifiable.",
        "implication": "Ouvre une branche Devoir / Atelier / Base de données / Forum / Wiki.",
        "scores": {
          "devoir": 4,
          "atelier": 2,
          "base_de_donnees": 1,
          "forum": 1,
          "wiki": 1
        },
        "function": {
          "formative": 2,
          "summative": 2
        },
        "reasoning": "Les étudiants devront produire un travail identifiable et le remettre dans Moodle."
      },
      {
        "value": "echanger_argumenter",
        "label": "Échanger, questionner ou argumenter",
        "description": "Publier un message, répondre, discuter, commenter ou demander de l’aide.",
        "implication": "Ouvre une branche Forum, avec alternatives selon structure et évaluation.",
        "scores": {
          "forum": 4,
          "base_de_donnees": 1,
          "glossaire": 1,
          "wiki": 1
        },
        "function": {
          "diagnostic": 1,
          "formative": 3
        },
        "reasoning": "Les étudiants devront publier, répondre ou argumenter dans un espace d’échange asynchrone."
      },
      {
        "value": "contribuer_collection",
        "label": "Contribuer à une collection commune",
        "description": "Ajouter une fiche, une définition, une ressource, un exemple ou une page.",
        "implication": "Ouvre une branche Base de données / Glossaire / Wiki.",
        "scores": {
          "base_de_donnees": 4,
          "glossaire": 3,
          "wiki": 2,
          "forum": 1
        },
        "function": {
          "formative": 3
        },
        "reasoning": "Les étudiants devront alimenter une collection commune par des fiches, notions, ressources ou pages."
      },
      {
        "value": "evaluer_pairs",
        "label": "Évaluer ou commenter des pairs",
        "description": "Analyser des productions d’autres étudiants à partir de critères.",
        "implication": "Ouvre une branche Atelier, avec alternatives Forum ou Base de données.",
        "scores": {
          "atelier": 5,
          "base_de_donnees": 2,
          "forum": 2,
          "glossaire": 1
        },
        "function": {
          "formative": 3,
          "summative": 1
        },
        "reasoning": "Les étudiants devront analyser des productions de pairs à partir de critères explicites."
      },
      {
        "value": "parcours_autonome",
        "label": "Suivre un parcours autonome",
        "description": "Avancer dans un contenu guidé, éventuellement avec embranchements ou interactions.",
        "implication": "Ouvre une branche Leçon / H5P / Test.",
        "scores": {
          "lecon": 4,
          "h5p": 3,
          "test": 2
        },
        "function": {
          "formative": 3,
          "diagnostic": 1
        },
        "reasoning": "Les étudiants devront suivre un parcours autonome combinant contenus, questions ou embranchements."
      }
    ]
  },
  {
    "id": "traceType",
    "title": "Quelle trace voulez-vous obtenir ?",
    "help": "La trace attendue est le lien entre l’action étudiante et l’exploitation pédagogique.",
    "options": [
      {
        "value": "score",
        "label": "Un score ou des réponses corrigibles",
        "description": "Réponses fermées, calculées ou auto-corrigées.",
        "implication": "Favorise Test, H5P ou Leçon.",
        "scores": {
          "test": 4,
          "h5p": 3,
          "lecon": 2
        },
        "function": {
          "diagnostic": 1,
          "formative": 1,
          "summative": 1
        },
        "reasoning": "La trace attendue est un score ou une réponse pouvant être corrigée automatiquement."
      },
      {
        "value": "reponses_enquete",
        "label": "Des réponses d’enquête ou de positionnement",
        "description": "Réponses sur des besoins, perceptions, attentes ou choix.",
        "implication": "Favorise Feedback ou Sondage.",
        "scores": {
          "feedback": 4,
          "sondage": 3,
          "forum": 1
        },
        "function": {
          "diagnostic": 2,
          "formative": 1
        },
        "reasoning": "La trace attendue est un ensemble de réponses de positionnement, d’enquête ou de perception."
      },
      {
        "value": "fichier_texte",
        "label": "Un fichier ou un texte remis",
        "description": "Production stable à lire, annoter ou noter.",
        "implication": "Favorise Devoir ou Atelier.",
        "scores": {
          "devoir": 5,
          "atelier": 2
        },
        "function": {
          "formative": 2,
          "summative": 2
        },
        "reasoning": "La trace attendue est une production stable, sous forme de fichier ou de texte remis."
      },
      {
        "value": "message",
        "label": "Des messages ou discussions",
        "description": "Contributions visibles dans un fil d’échange.",
        "implication": "Favorise Forum.",
        "scores": {
          "forum": 5
        },
        "function": {
          "diagnostic": 1,
          "formative": 3
        },
        "reasoning": "La trace attendue est une contribution dans une discussion visible et réutilisable."
      },
      {
        "value": "fiche",
        "label": "Des fiches structurées",
        "description": "Contributions comparables avec champs communs.",
        "implication": "Favorise Base de données ou Glossaire.",
        "scores": {
          "base_de_donnees": 5,
          "glossaire": 3
        },
        "function": {
          "formative": 3
        },
        "reasoning": "La trace attendue est une fiche structurée, comparable aux autres contributions."
      },
      {
        "value": "page_evolutive",
        "label": "Une page ou production évolutive",
        "description": "Contenu modifié progressivement, avec historique.",
        "implication": "Favorise Wiki.",
        "scores": {
          "wiki": 5
        },
        "function": {
          "formative": 3
        },
        "reasoning": "La trace attendue est une production évolutive, modifiée progressivement dans le temps."
      },
      {
        "value": "evaluation_pairs",
        "label": "Des évaluations par les pairs",
        "description": "Retours ou notes produits par les étudiants sur les productions d’autres étudiants.",
        "implication": "Favorise Atelier.",
        "scores": {
          "atelier": 5,
          "forum": 1,
          "base_de_donnees": 1
        },
        "function": {
          "formative": 2,
          "summative": 1
        },
        "reasoning": "La trace attendue inclut des évaluations ou commentaires produits par les pairs."
      }
    ]
  },
  {
    "id": "surveyScope",
    "title": "Votre recueil porte-t-il sur une seule question ou sur plusieurs questions ?",
    "help": "Cette question permet de distinguer Sondage, Feedback et Test court.",
    "showIf": {
      "anyAnswer": [
        {
          "id": "studentAction",
          "values": [
            "choisir",
            "repondre_questionnaire"
          ]
        },
        {
          "id": "traceType",
          "values": [
            "reponses_enquete"
          ]
        }
      ]
    },
    "options": [
      {
        "value": "single",
        "label": "Une seule question suffit",
        "description": "Vous voulez une prise de position rapide.",
        "implication": "Favorise Sondage.",
        "scores": {
          "sondage": 5,
          "feedback": 1
        },
        "function": {
          "diagnostic": 1,
          "formative": 1
        },
        "reasoning": "Une question unique suffit ; l’outil peut privilégier un dispositif léger de positionnement."
      },
      {
        "value": "multiple_enquete",
        "label": "Plusieurs questions d’enquête",
        "description": "Vous voulez recueillir plusieurs informations ou perceptions.",
        "implication": "Favorise Feedback.",
        "scores": {
          "feedback": 5,
          "sondage": -2
        },
        "function": {
          "diagnostic": 2,
          "formative": 1
        },
        "reasoning": "Plusieurs questions d’enquête sont nécessaires pour recueillir des informations plus nuancées."
      },
      {
        "value": "multiple_corrigees",
        "label": "Plusieurs questions avec bonnes réponses",
        "description": "Vous voulez vérifier une compréhension ou des prérequis.",
        "implication": "Favorise Test ou H5P.",
        "scores": {
          "test": 5,
          "h5p": 3,
          "feedback": -2,
          "sondage": -2
        },
        "function": {
          "diagnostic": 1,
          "formative": 2,
          "summative": 1
        },
        "reasoning": "Les questions appellent des réponses justes ou fausses ; une correction structurée devient pertinente."
      }
    ]
  },
  {
    "id": "anonymity",
    "title": "Les réponses doivent-elles pouvoir être anonymes ?",
    "help": "L’anonymat est pertinent pour recueillir des perceptions, difficultés ou retours sensibles.",
    "showIf": {
      "anyAnswer": [
        {
          "id": "surveyScope",
          "values": [
            "single",
            "multiple_enquete"
          ]
        },
        {
          "id": "primaryNeed",
          "values": [
            "reguler_cours"
          ]
        }
      ]
    },
    "options": [
      {
        "value": "anonymous",
        "label": "Oui, l’anonymat est souhaitable",
        "description": "Vous cherchez des réponses sincères sur des besoins, difficultés ou perceptions.",
        "implication": "Favorise Feedback ; Sondage peut convenir pour une question unique selon paramétrage.",
        "scores": {
          "feedback": 3,
          "sondage": 2,
          "test": -2
        },
        "function": {
          "diagnostic": 1,
          "formative": 1
        },
        "reasoning": "L’anonymat est souhaité pour favoriser des réponses sincères sur les besoins, difficultés ou perceptions."
      },
      {
        "value": "identified",
        "label": "Non, je dois identifier les répondants",
        "description": "Vous avez besoin de relier les réponses à chaque étudiant.",
        "implication": "Permet Test, Feedback nominatif, Forum ou Devoir selon la trace.",
        "scores": {
          "test": 2,
          "feedback": 1,
          "devoir": 1,
          "forum": 1
        },
        "function": {
          "diagnostic": 1,
          "formative": 1,
          "summative": 1
        },
        "reasoning": "Les réponses doivent rester reliées aux étudiants pour permettre un suivi individualisé."
      }
    ]
  },
  {
    "id": "autoFeedback",
    "title": "Les étudiants doivent-ils recevoir un feedback automatique ou immédiat ?",
    "help": "Le feedback automatique est particulièrement utile pour l’entraînement, l’auto-évaluation et certains diagnostics.",
    "showIf": {
      "anyAnswer": [
        {
          "id": "traceType",
          "values": [
            "score"
          ]
        },
        {
          "id": "surveyScope",
          "values": [
            "multiple_corrigees"
          ]
        },
        {
          "id": "studentAction",
          "values": [
            "parcours_autonome"
          ]
        }
      ]
    },
    "options": [
      {
        "value": "immediate",
        "label": "Oui, feedback immédiat",
        "description": "L’étudiant doit comprendre rapidement ce qui est correct ou à revoir.",
        "implication": "Favorise Test formatif, H5P ou Leçon.",
        "scores": {
          "test": 3,
          "h5p": 3,
          "lecon": 2
        },
        "function": {
          "formative": 3,
          "diagnostic": 1
        },
        "reasoning": "Le feedback doit être immédiat pour soutenir l’apprentissage pendant ou juste après la réponse."
      },
      {
        "value": "deferred",
        "label": "Oui, mais après la tentative ou la fermeture",
        "description": "Le retour ne doit pas apparaître pendant l’activité.",
        "implication": "Favorise un Test cadré, notamment sommatif.",
        "scores": {
          "test": 3,
          "h5p": 1,
          "lecon": 1
        },
        "function": {
          "summative": 2,
          "formative": 1
        },
        "reasoning": "Le feedback doit être différé afin de préserver le cadre de passation ou l’exploitation ultérieure."
      },
      {
        "value": "teacher_feedback",
        "label": "Non, le retour sera fait par l’enseignant",
        "description": "L’interprétation doit être qualitative ou contextualisée.",
        "implication": "Favorise Devoir, Forum ou Atelier selon la tâche.",
        "scores": {
          "devoir": 3,
          "forum": 2,
          "atelier": 2,
          "test": -1,
          "h5p": -1
        },
        "function": {
          "formative": 2,
          "summative": 1
        },
        "reasoning": "Le retour sera principalement assuré par l’enseignant, car la trace demande une interprétation qualitative."
      }
    ]
  },
  {
    "id": "attempts",
    "title": "Combien de tentatives voulez-vous autoriser ?",
    "help": "Le nombre de tentatives change fortement la fonction d’un Test, d’un H5P ou d’une Leçon.",
    "showIf": {
      "anyAnswer": [
        {
          "id": "traceType",
          "values": [
            "score"
          ]
        },
        {
          "id": "surveyScope",
          "values": [
            "multiple_corrigees"
          ]
        },
        {
          "id": "autoFeedback",
          "values": [
            "immediate",
            "deferred"
          ]
        }
      ]
    },
    "options": [
      {
        "value": "multiple",
        "label": "Plusieurs tentatives",
        "description": "Les étudiants peuvent recommencer pour progresser.",
        "implication": "Renforce la fonction formative.",
        "scores": {
          "test": 3,
          "h5p": 2,
          "lecon": 1
        },
        "function": {
          "formative": 4
        },
        "reasoning": "Plusieurs tentatives sont prévues ; l’activité prend une orientation d’entraînement et de progression."
      },
      {
        "value": "single",
        "label": "Une seule tentative",
        "description": "La tentative sert plutôt à mesurer un état ou attester un niveau.",
        "implication": "Renforce la fonction diagnostique ou sommative selon le moment.",
        "scores": {
          "test": 3
        },
        "function": {
          "diagnostic": 1,
          "summative": 3
        },
        "reasoning": "Une seule tentative est prévue ; la trace mesure un état à un moment donné."
      },
      {
        "value": "not_relevant",
        "label": "Ce n’est pas déterminant",
        "description": "Le nombre de tentatives n’est pas un critère central pour votre usage.",
        "implication": "L’outil gardera plusieurs options ouvertes.",
        "scores": {
          "test": 1,
          "h5p": 1,
          "lecon": 1
        },
        "function": {
          "formative": 1
        },
        "reasoning": "Le nombre de tentatives n’est pas un critère central dans ce scénario."
      }
    ]
  },
  {
    "id": "productionVisibility",
    "title": "La production doit-elle rester privée ou être visible par le groupe ?",
    "help": "La visibilité de la trace distingue fortement Devoir, Forum, Base de données, Glossaire et Wiki.",
    "showIf": {
      "anyAnswer": [
        {
          "id": "studentAction",
          "values": [
            "produire_deposer",
            "contribuer_collection",
            "echanger_argumenter"
          ]
        },
        {
          "id": "traceType",
          "values": [
            "fichier_texte",
            "message",
            "fiche",
            "page_evolutive"
          ]
        }
      ]
    },
    "options": [
      {
        "value": "private",
        "label": "Privée entre étudiant/groupe et enseignant",
        "description": "Le travail doit être consulté et commenté par l’enseignant seulement.",
        "implication": "Favorise Devoir.",
        "scores": {
          "devoir": 5,
          "atelier": 1,
          "forum": -3,
          "base_de_donnees": -2,
          "glossaire": -2,
          "wiki": -1
        },
        "function": {
          "formative": 1,
          "summative": 1
        },
        "reasoning": "La production doit rester privée entre l’étudiant ou le groupe et l’enseignant."
      },
      {
        "value": "visible_group",
        "label": "Visible par les autres étudiants",
        "description": "La production doit être consultée, discutée ou réutilisée par le groupe.",
        "implication": "Favorise Forum, Base de données, Glossaire ou Wiki.",
        "scores": {
          "forum": 3,
          "base_de_donnees": 3,
          "glossaire": 2,
          "wiki": 2,
          "devoir": -2
        },
        "function": {
          "formative": 2
        },
        "reasoning": "La production doit être visible par les autres étudiants pour permettre consultation, échange ou réutilisation."
      },
      {
        "value": "visible_after",
        "label": "Visible après dépôt ou validation",
        "description": "La production peut devenir visible après une première étape de dépôt ou de validation.",
        "implication": "Favorise Base de données, Glossaire ou Atelier selon les règles.",
        "scores": {
          "base_de_donnees": 3,
          "glossaire": 2,
          "atelier": 2,
          "forum": 1
        },
        "function": {
          "formative": 2,
          "summative": 1
        },
        "reasoning": "La production pourra devenir visible après un dépôt, une validation ou une première phase de contrôle."
      }
    ]
  },
  {
    "id": "workMode",
    "title": "L’activité est-elle individuelle ou en groupe ?",
    "help": "Le mode de travail influence surtout Devoir, Atelier, Forum, Wiki et Base de données.",
    "showIf": {
      "anyAnswer": [
        {
          "id": "studentAction",
          "values": [
            "produire_deposer",
            "contribuer_collection",
            "evaluer_pairs"
          ]
        },
        {
          "id": "traceType",
          "values": [
            "fichier_texte",
            "fiche",
            "page_evolutive",
            "evaluation_pairs"
          ]
        }
      ]
    },
    "options": [
      {
        "value": "individual",
        "label": "Individuelle",
        "description": "Chaque étudiant produit ou répond pour lui-même.",
        "implication": "Toutes les activités restent possibles selon la trace.",
        "scores": {
          "devoir": 1,
          "test": 1,
          "feedback": 1,
          "forum": 1,
          "glossaire": 1
        },
        "function": {},
        "reasoning": "La trace sera produite individuellement par chaque étudiant."
      },
      {
        "value": "group",
        "label": "En groupe",
        "description": "Une équipe produit, dépose ou construit une trace commune.",
        "implication": "Favorise Devoir en groupe, Wiki, Forum, Base de données ou Atelier selon le scénario.",
        "scores": {
          "devoir": 2,
          "wiki": 2,
          "forum": 1,
          "base_de_donnees": 1,
          "atelier": 1
        },
        "function": {
          "formative": 1,
          "summative": 1
        },
        "reasoning": "La trace sera produite par une équipe ou un groupe d’étudiants."
      },
      {
        "value": "collective",
        "label": "Collective pour toute la promotion",
        "description": "Le groupe entier construit ou alimente une ressource commune.",
        "implication": "Favorise Wiki, Glossaire ou Base de données.",
        "scores": {
          "wiki": 3,
          "glossaire": 3,
          "base_de_donnees": 3,
          "forum": 1,
          "devoir": -2
        },
        "function": {
          "formative": 2
        },
        "reasoning": "La trace sera construite collectivement à l’échelle de la promotion ou du groupe classe."
      }
    ]
  },
  {
    "id": "feedbackSource",
    "title": "Qui doit exploiter la trace ou produire le feedback ?",
    "help": "L’exploitation de la trace est ce qui donne sa fonction évaluative à l’activité.",
    "showIf": {
      "anyAnswer": [
        {
          "id": "studentAction",
          "values": [
            "produire_deposer",
            "evaluer_pairs",
            "echanger_argumenter",
            "contribuer_collection"
          ]
        },
        {
          "id": "traceType",
          "values": [
            "fichier_texte",
            "message",
            "fiche",
            "page_evolutive",
            "evaluation_pairs"
          ]
        }
      ]
    },
    "options": [
      {
        "value": "teacher",
        "label": "L’enseignant",
        "description": "L’enseignant lit, commente, annote, évalue ou reprend collectivement.",
        "implication": "Favorise Devoir, Forum, Base de données ou Glossaire selon la trace.",
        "scores": {
          "devoir": 3,
          "forum": 1,
          "base_de_donnees": 1,
          "glossaire": 1
        },
        "function": {
          "formative": 2,
          "summative": 1
        },
        "reasoning": "Le feedback viendra surtout de l’enseignant, par commentaire, annotation, reprise ou évaluation."
      },
      {
        "value": "peers",
        "label": "Les pairs",
        "description": "Les étudiants commentent ou évaluent les productions d’autres étudiants.",
        "implication": "Favorise Atelier, Forum ou Base de données.",
        "scores": {
          "atelier": 5,
          "forum": 2,
          "base_de_donnees": 2,
          "glossaire": 1
        },
        "function": {
          "formative": 3
        },
        "reasoning": "Le feedback viendra des pairs ; les étudiants devront donc disposer de repères pour commenter ou évaluer."
      },
      {
        "value": "self",
        "label": "L’étudiant lui-même",
        "description": "La trace sert à se situer ou à s’auto-évaluer.",
        "implication": "Favorise Test, H5P, Leçon, Feedback ou Wiki individuel selon le cas.",
        "scores": {
          "test": 2,
          "h5p": 2,
          "lecon": 2,
          "feedback": 1,
          "wiki": 1
        },
        "function": {
          "diagnostic": 1,
          "formative": 2
        },
        "reasoning": "La trace servira à l’étudiant lui-même pour se situer, s’auto-évaluer ou ajuster son travail."
      },
      {
        "value": "group",
        "label": "Le collectif",
        "description": "La trace sert à mutualiser, comparer ou construire une compréhension commune.",
        "implication": "Favorise Forum, Base de données, Glossaire ou Wiki.",
        "scores": {
          "forum": 3,
          "base_de_donnees": 3,
          "glossaire": 2,
          "wiki": 2
        },
        "function": {
          "formative": 2
        },
        "reasoning": "La trace servira au collectif pour comparer, mutualiser ou construire une compréhension commune."
      }
    ]
  },
  {
    "id": "peerCriteria",
    "title": "Les critères d’évaluation par les pairs sont-ils prêts ou faciles à expliciter ?",
    "help": "L’évaluation par les pairs exige des critères lisibles et un temps d’appropriation.",
    "showIf": {
      "anyAnswer": [
        {
          "id": "studentAction",
          "values": [
            "evaluer_pairs"
          ]
        },
        {
          "id": "traceType",
          "values": [
            "evaluation_pairs"
          ]
        },
        {
          "id": "feedbackSource",
          "values": [
            "peers"
          ]
        }
      ]
    },
    "options": [
      {
        "value": "criteria_ready",
        "label": "Oui, les critères sont prêts",
        "description": "Les étudiants pourront s’appuyer sur une grille ou un formulaire.",
        "implication": "Favorise Atelier.",
        "scores": {
          "atelier": 5
        },
        "function": {
          "formative": 2,
          "summative": 1
        },
        "reasoning": "Les critères sont prêts ; l’évaluation par les pairs peut être cadrée de manière structurée."
      },
      {
        "value": "criteria_to_build",
        "label": "Ils sont à construire avec les étudiants",
        "description": "L’activité peut aussi servir à s’approprier les critères.",
        "implication": "Favorise Atelier formatif ou Forum préparatoire.",
        "scores": {
          "atelier": 3,
          "forum": 2
        },
        "function": {
          "formative": 3
        },
        "reasoning": "Les critères restent à construire ; l’activité peut servir à les expliciter avec les étudiants."
      },
      {
        "value": "criteria_not_ready",
        "label": "Non, les critères ne sont pas stabilisés",
        "description": "L’évaluation par les pairs risque d’être fragile.",
        "implication": "Défavorise Atelier en version notée ; préférer Forum ou Devoir avec retour enseignant.",
        "scores": {
          "atelier": -3,
          "forum": 2,
          "devoir": 2
        },
        "function": {
          "formative": 1
        },
        "reasoning": "Les critères ne sont pas stabilisés ; une évaluation par les pairs notée serait fragile."
      }
    ]
  },
  {
    "id": "collectionStructure",
    "title": "Les contributions doivent-elles suivre une structure commune ?",
    "help": "Cette question distingue Forum, Base de données, Glossaire et Wiki.",
    "showIf": {
      "anyAnswer": [
        {
          "id": "studentAction",
          "values": [
            "contribuer_collection"
          ]
        },
        {
          "id": "traceType",
          "values": [
            "fiche",
            "page_evolutive"
          ]
        },
        {
          "id": "primaryNeed",
          "values": [
            "mutualiser"
          ]
        }
      ]
    },
    "options": [
      {
        "value": "structured_fields",
        "label": "Oui, avec plusieurs champs",
        "description": "Chaque contribution doit suivre le même modèle : titre, description, URL, fichier, catégorie, etc.",
        "implication": "Favorise Base de données.",
        "scores": {
          "base_de_donnees": 5,
          "glossaire": 1,
          "forum": -1
        },
        "function": {
          "formative": 2
        },
        "reasoning": "Les contributions doivent suivre un modèle commun composé de plusieurs champs structurés."
      },
      {
        "value": "terms_definitions",
        "label": "Oui, autour de notions ou définitions",
        "description": "La collection sert surtout à construire un vocabulaire ou une banque de termes.",
        "implication": "Favorise Glossaire.",
        "scores": {
          "glossaire": 5,
          "base_de_donnees": 1,
          "wiki": 1
        },
        "function": {
          "formative": 2
        },
        "reasoning": "La collection porte surtout sur des notions, termes ou définitions à stabiliser."
      },
      {
        "value": "free_discussion",
        "label": "Non, les contributions peuvent être libres",
        "description": "L’important est l’échange, pas une structure de fiche.",
        "implication": "Favorise Forum.",
        "scores": {
          "forum": 4,
          "base_de_donnees": -2,
          "glossaire": -1
        },
        "function": {
          "formative": 2
        },
        "reasoning": "Les contributions peuvent rester libres ; l’échange compte davantage qu’une structure de fiche."
      },
      {
        "value": "co_written_pages",
        "label": "Oui, sous forme de pages évolutives",
        "description": "Les étudiants rédigent et modifient un contenu commun.",
        "implication": "Favorise Wiki.",
        "scores": {
          "wiki": 5,
          "base_de_donnees": 1
        },
        "function": {
          "formative": 2
        },
        "reasoning": "La production prendra la forme de pages évolutives rédigées ou modifiées collectivement."
      }
    ]
  },
  {
    "id": "gradeStatus",
    "title": "Quel statut aura la trace dans l’évaluation ?",
    "help": "Le statut donné à la trace peut confirmer ou contredire l’intention initiale.",
    "options": [
      {
        "value": "not_graded",
        "label": "Non notée",
        "description": "La trace sert à comprendre, réguler ou accompagner.",
        "implication": "Renforce diagnostic ou formatif.",
        "scores": {
          "feedback": 2,
          "sondage": 2,
          "forum": 1,
          "h5p": 1,
          "test": 1
        },
        "function": {
          "diagnostic": 2,
          "formative": 2
        },
        "reasoning": "La trace ne sera pas notée ; elle servira à comprendre, réguler ou accompagner."
      },
      {
        "value": "low_stakes",
        "label": "Faible enjeu",
        "description": "La trace peut compter légèrement, mais l’objectif reste l’entraînement ou la participation.",
        "implication": "Renforce formatif avec vigilance.",
        "scores": {
          "test": 2,
          "h5p": 1,
          "forum": 1,
          "glossaire": 1,
          "base_de_donnees": 1,
          "devoir": 1
        },
        "function": {
          "formative": 3
        },
        "reasoning": "La trace aura un faible enjeu ; l’activité reste surtout orientée vers l’entraînement ou la participation."
      },
      {
        "value": "graded",
        "label": "Notée et intégrée au carnet de notes",
        "description": "La trace contribue à une note ou à une validation.",
        "implication": "Renforce les activités évaluables et la fonction sommative.",
        "scores": {
          "devoir": 3,
          "test": 3,
          "atelier": 2,
          "base_de_donnees": 1,
          "forum": 1,
          "glossaire": 1,
          "h5p": 1,
          "lecon": 1,
          "feedback": -4,
          "sondage": -4,
          "wiki": -3
        },
        "function": {
          "summative": 4
        },
        "reasoning": "La trace sera notée et intégrée au carnet de notes ; la fonction sommative devient plus marquée."
      },
      {
        "value": "proof",
        "label": "Conservée comme preuve, sans forcément être notée",
        "description": "La trace doit rester consultable pour suivre ou attester le travail réalisé.",
        "implication": "Favorise Devoir, Test, Atelier, Base de données ou Wiki selon la trace.",
        "scores": {
          "devoir": 3,
          "test": 2,
          "atelier": 2,
          "base_de_donnees": 2,
          "wiki": 1
        },
        "function": {
          "formative": 1,
          "summative": 2
        },
        "reasoning": "La trace devra être conservée comme preuve, même si elle n’est pas forcément notée."
      }
    ]
  },
  {
    "id": "practicalConstraint",
    "title": "Quelle contrainte pratique pèse le plus sur votre choix ?",
    "help": "La meilleure activité pédagogique doit rester réaliste à créer, expliquer, suivre et corriger.",
    "options": [
      {
        "value": "simple_fast",
        "label": "Faire simple et rapide",
        "description": "L’activité doit être facile à créer et à comprendre.",
        "implication": "Favorise Sondage, Feedback, Devoir simple, Forum simple ou Test court.",
        "scores": {
          "sondage": 3,
          "feedback": 2,
          "devoir": 2,
          "forum": 1,
          "test": 1,
          "atelier": -3,
          "lecon": -2,
          "base_de_donnees": -1
        },
        "function": {},
        "reasoning": "La solution doit rester simple à créer, à expliquer et à utiliser par les étudiants."
      },
      {
        "value": "feedback_quality",
        "label": "Donner un retour de qualité",
        "description": "Le feedback est plus important que la rapidité.",
        "implication": "Favorise Devoir, Atelier, Forum ou Test formatif.",
        "scores": {
          "devoir": 3,
          "atelier": 2,
          "forum": 2,
          "test": 2,
          "h5p": 1
        },
        "function": {
          "formative": 2
        },
        "reasoning": "La qualité du retour prime sur la rapidité de mise en œuvre ou de correction."
      },
      {
        "value": "automation",
        "label": "Automatiser une partie du retour",
        "description": "La correction ou le feedback doit être automatisé autant que possible.",
        "implication": "Favorise Test ou H5P.",
        "scores": {
          "test": 4,
          "h5p": 3,
          "lecon": 1,
          "devoir": -2,
          "forum": -2
        },
        "function": {
          "formative": 1,
          "summative": 1
        },
        "reasoning": "Une partie de la correction ou du feedback doit être automatisée pour alléger le suivi."
      },
      {
        "value": "collaboration",
        "label": "Soutenir la collaboration",
        "description": "L’activité doit faire travailler le groupe, mutualiser ou co-construire.",
        "implication": "Favorise Forum, Wiki, Base de données, Glossaire ou Atelier.",
        "scores": {
          "forum": 3,
          "wiki": 3,
          "base_de_donnees": 2,
          "glossaire": 2,
          "atelier": 2,
          "devoir": 1
        },
        "function": {
          "formative": 2
        },
        "reasoning": "La solution doit soutenir la collaboration, la mutualisation ou la co-construction."
      },
      {
        "value": "certification_control",
        "label": "Cadrer fortement l’évaluation",
        "description": "Il faut des règles claires, des conditions de remise ou de passation, et une note exploitable.",
        "implication": "Favorise Devoir ou Test sommatif.",
        "scores": {
          "devoir": 4,
          "test": 4,
          "atelier": 1,
          "feedback": -4,
          "sondage": -4,
          "wiki": -2
        },
        "function": {
          "summative": 3
        },
        "reasoning": "L’évaluation doit être fortement cadrée par des règles, échéances et conditions explicites."
      }
    ]
  }
];
