(function () {
  const data = window.MoodleDecisionData;
  const engine = window.MoodleDecisionEngine;

  const state = {
    answers: {},
    manualIndex: null,
    showFinal: false
  };

  const el = {
    questionPanel: document.getElementById('question-panel'),
    stepLabel: document.getElementById('step-label'),
    questionTitle: document.getElementById('question-title'),
    questionHelp: document.getElementById('question-help'),
    options: document.getElementById('question-options'),
    reasoningList: document.getElementById('reasoning-list'),
    resultList: document.getElementById('result-list'),
    functionBadge: document.getElementById('function-badge'),
    settingsAdvice: document.getElementById('settings-advice'),
    completionBox: document.getElementById('completion-box'),
    completionRecommendation: document.getElementById('completion-recommendation'),
    resetButton: document.getElementById('reset-button'),
    backButton: document.getElementById('back-button'),
    openRecommendationButton: document.getElementById('open-recommendation-button'),
    modal: document.getElementById('recommendation-modal'),
    modalContent: document.getElementById('modal-recommendation-content'),
    closeRecommendationButton: document.getElementById('close-recommendation-button')
  };

  const functionLabels = {
    diagnostic: 'Fonction dominante : diagnostique',
    formative: 'Fonction dominante : formative',
    summative: 'Fonction dominante : sommative'
  };

  const functionShortLabels = {
    diagnostic: 'diagnostique',
    formative: 'formative',
    summative: 'sommative'
  };

  const activityIcons = {
    atelier: 'assets/icons/Atelier.svg',
    base_de_donnees: 'assets/icons/BDD.svg',
    devoir: 'assets/icons/Devoir.svg',
    feedback: 'assets/icons/Feedback.svg',
    forum: 'assets/icons/Forum.svg',
    glossaire: 'assets/icons/Glossaire.svg',
    h5p: 'assets/icons/H5P.svg',
    lecon: 'assets/icons/Lecon.svg',
    sondage: 'assets/icons/Sondage.svg',
    test: 'assets/icons/Test.svg',
    wiki: 'assets/icons/Wiki.svg'
  };

  function activityIconMarkup(activity) {
    const icon = activity && (activity.icon || activityIcons[activity.id]);
    if (!icon) return '';
    return `<img class="activity-icon" src="${escapeHtml(icon)}" alt="" aria-hidden="true" loading="lazy">`;
  }

  function activityHeading(activity, level = 'h3', rightHtml = '') {
    const allowedLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    const tag = allowedLevels.includes(level) ? level : 'h3';
    return `<${tag} class="activity-heading">${activityIconMarkup(activity)}<span class="activity-heading-name">${escapeHtml(activity.name)}</span>${rightHtml}</${tag}>`;
  }

  function activityInlineLabel(activity) {
    return `<span class="activity-inline-label">${activityIconMarkup(activity)}<span>${escapeHtml(activity.name)}</span></span>`;
  }


  const intentionFragments = {
    moment: {
      avant: 'Avant l’apprentissage',
      pendant: 'Pendant l’apprentissage',
      apres: 'Après l’apprentissage',
      plusieurs: 'À plusieurs moments du parcours'
    },
    primaryNeed: {
      situer: 'situer les étudiants',
      entrainer: 'entraîner les étudiants et soutenir leur progression',
      accompagner_production: 'accompagner l’amélioration d’une production',
      mutualiser: 'mutualiser des productions ou des ressources',
      attester: 'attester un niveau atteint',
      reguler_cours: 'réguler le cours ou la séance'
    },
    studentAction: {
      choisir: 'en leur demandant de se positionner rapidement',
      repondre_questionnaire: 'en leur demandant de répondre à plusieurs questions',
      produire_deposer: 'en leur demandant de produire et remettre un travail',
      echanger_argumenter: 'en leur demandant d’échanger, de questionner ou d’argumenter',
      contribuer_collection: 'en leur demandant de contribuer à une collection commune',
      evaluer_pairs: 'en leur demandant d’évaluer ou commenter des productions de pairs',
      parcours_autonome: 'en leur demandant de suivre un parcours autonome'
    },
    traceType: {
      score: 'afin d’obtenir un score ou des réponses corrigibles automatiquement',
      reponses_enquete: 'afin d’obtenir des réponses d’enquête ou de positionnement',
      fichier_texte: 'afin de recueillir un fichier ou un texte remis',
      message: 'afin de conserver des messages ou discussions exploitables',
      fiche: 'afin de constituer des fiches structurées et comparables',
      page_evolutive: 'afin de suivre une production évolutive dans le temps',
      evaluation_pairs: 'afin de recueillir des évaluations ou commentaires de pairs'
    }
  };

  const intentionDetails = {
    surveyScope: {
      single: 'Le recueil repose sur une question unique.',
      multiple_enquete: 'Plusieurs questions d’enquête sont nécessaires pour obtenir une lecture plus nuancée.',
      multiple_corrigees: 'Les réponses appellent une correction structurée.'
    },
    anonymity: {
      anonymous: 'L’anonymat est souhaité pour favoriser des réponses sincères.',
      identified: 'Les réponses doivent rester associées aux étudiants pour permettre un suivi individualisé.'
    },
    autoFeedback: {
      immediate: 'Le feedback doit être immédiat pour soutenir l’apprentissage au moment de l’activité.',
      deferred: 'Le feedback doit être différé pour préserver le cadre de passation ou l’exploitation ultérieure.',
      teacher_feedback: 'Le retour sera principalement assuré par l’enseignant.'
    },
    attempts: {
      multiple: 'Plusieurs tentatives sont prévues pour soutenir l’entraînement et la progression.',
      single: 'Une seule tentative est prévue pour mesurer un état à un moment donné.',
      not_relevant: 'Le nombre de tentatives n’est pas un critère déterminant dans ce scénario.'
    },
    productionVisibility: {
      private: 'La production restera privée entre les étudiants concernés et l’enseignant.',
      visible_group: 'La production sera visible par les autres étudiants pour permettre consultation, échange ou réutilisation.',
      visible_after: 'La production pourra devenir visible après dépôt, validation ou première phase de contrôle.'
    },
    workMode: {
      individual: 'La trace sera produite individuellement par chaque étudiant.',
      group: 'La trace sera produite par une équipe ou un groupe d’étudiants.',
      collective: 'La trace sera construite collectivement à l’échelle du groupe classe.'
    },
    feedbackSource: {
      teacher: 'Le feedback viendra principalement de l’enseignant.',
      peers: 'Le feedback viendra des pairs, avec des repères à fournir pour commenter ou évaluer.',
      self: 'La trace servira d’abord à l’étudiant pour se situer ou s’auto-évaluer.',
      group: 'La trace servira au collectif pour comparer, mutualiser ou construire une compréhension commune.'
    },
    peerCriteria: {
      criteria_ready: 'Les critères sont prêts pour cadrer l’évaluation par les pairs.',
      criteria_to_build: 'Les critères devront être construits ou explicités avec les étudiants.',
      criteria_not_ready: 'Les critères ne sont pas stabilisés ; une évaluation par les pairs notée serait fragile.'
    },
    collectionStructure: {
      structured_fields: 'Les contributions devront suivre un modèle commun avec plusieurs champs.',
      terms_definitions: 'La collection portera surtout sur des notions, termes ou définitions.',
      free_discussion: 'Les contributions pourront rester libres ; l’échange compte davantage que la structure.',
      co_written_pages: 'La production prendra la forme de pages évolutives rédigées ou modifiées collectivement.'
    },
    gradeStatus: {
      not_graded: 'La trace ne sera pas notée.',
      low_stakes: 'La trace aura un faible enjeu évaluatif.',
      graded: 'La trace sera notée et intégrée au carnet de notes.',
      proof: 'La trace devra être conservée comme preuve, sans être nécessairement notée.'
    },
    practicalConstraint: {
      simple_fast: 'La solution doit rester simple à créer, à expliquer et à utiliser.',
      feedback_quality: 'La qualité du retour est prioritaire.',
      automation: 'Une partie de la correction ou du feedback doit être automatisée.',
      collaboration: 'La solution doit soutenir la collaboration, la mutualisation ou la co-construction.',
      certification_control: 'L’évaluation doit être fortement cadrée par des règles, échéances et conditions explicites.'
    }
  };

  function getCurrent() {
    engine.pruneAnswers(data.questions, state.answers);
    const completion = engine.completionState(data.questions, state.answers);
    const visible = completion.visible;

    let index = completion.currentIndex;
    if (state.manualIndex !== null && state.manualIndex >= 0 && state.manualIndex < visible.length) {
      index = state.manualIndex;
    } else {
      state.manualIndex = null;
    }

    return { ...completion, visible, index, question: visible[index] };
  }

  function renderQuestion() {
    const current = getCurrent();
    const q = current.question;
    const showFinalRecommendation = Boolean(current.completed && state.showFinal);

    el.questionPanel.classList.toggle('completed-view', showFinalRecommendation);

    if (!q) {
      el.stepLabel.textContent = 'Aucune question';
      el.questionTitle.textContent = 'Le parcours ne contient aucune question.';
      el.questionHelp.textContent = '';
      el.options.innerHTML = '';
      el.backButton.disabled = true;
      el.completionBox.classList.add('hidden');
      return;
    }

    if (showFinalRecommendation) {
      el.stepLabel.textContent = 'Parcours terminé';
      el.questionTitle.textContent = 'Recommandation finale';
      el.questionHelp.textContent = '';
      el.options.innerHTML = '';
      el.backButton.disabled = current.visible.length <= 1;
      el.completionBox.classList.remove('hidden');
      return;
    }

    el.stepLabel.textContent = `Étape ${current.index + 1} sur ${current.visible.length}`;
    el.questionTitle.textContent = q.title;
    el.questionHelp.textContent = q.help || '';
    el.options.innerHTML = '';

    q.options.forEach(option => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'option-card';
      if (state.answers[q.id] && state.answers[q.id].value === option.value) {
        button.classList.add('selected');
      }
      button.innerHTML = `
        <span class="option-title">${escapeHtml(option.label)}</span>
        <span class="option-description">${escapeHtml(option.description || '')}</span>
        <span class="option-implication">${escapeHtml(option.implication || '')}</span>
      `;
      button.addEventListener('click', () => selectAnswer(q, option));
      el.options.appendChild(button);
    });

    el.backButton.disabled = current.index === 0;
    el.completionBox.classList.add('hidden');
  }

  function selectAnswer(question, option) {
    const currentVisible = engine.visibleQuestions(data.questions, state.answers);
    const currentIndex = currentVisible.findIndex(q => q.id === question.id);

    if (currentIndex !== -1) {
      currentVisible.slice(currentIndex + 1).forEach(q => {
        delete state.answers[q.id];
      });
    }

    state.answers[question.id] = option;
    engine.pruneAnswers(data.questions, state.answers);
    const completion = engine.completionState(data.questions, state.answers);

    if (completion.firstUnansweredIndex === -1) {
      state.manualIndex = completion.visible.length - 1;
      state.showFinal = true;
    } else {
      state.manualIndex = completion.firstUnansweredIndex;
      state.showFinal = false;
    }

    render();
    scrollToActiveDecisionArea();
  }

  function renderReasoning() {
    el.reasoningList.innerHTML = '';
    const visible = engine.visibleQuestions(data.questions, state.answers);
    const answeredVisible = visible.filter(q => state.answers[q.id]);

    if (!answeredVisible.length) {
      const li = document.createElement('li');
      li.innerHTML = '<span>Aucune réponse pour le moment.</span>';
      el.reasoningList.appendChild(li);
      return;
    }

    answeredVisible.forEach(q => {
      const a = state.answers[q.id];
      const li = document.createElement('li');
      const sentence = a.reasoning || `${a.label}. ${a.implication || ''}`;
      li.innerHTML = `<span class="reasoning-sentence">${escapeHtml(sentence)}</span>`;
      li.title = `${q.title} Cliquer pour revenir à cette étape`;
      li.addEventListener('click', () => {
        const index = visible.findIndex(item => item.id === q.id);
        state.manualIndex = index;
        state.showFinal = false;
        render();
      });
      el.reasoningList.appendChild(li);
    });
  }

  function renderResults() {
    const recs = engine.recommendations(data.activities, state.answers);
    el.functionBadge.textContent = functionLabels[recs.functionId] || 'Fonction à préciser';
    el.resultList.innerHTML = '';

    renderCompletionPreview(recs);

    if (!recs.ranked.length) {
      el.resultList.innerHTML = '<p class="muted">Répondez aux premières questions pour faire apparaître une recommandation.</p>';
      el.settingsAdvice.innerHTML = '<p class="muted">Aucun conseil de paramétrage à ce stade.</p>';
      return;
    }

    recs.ranked.slice(0, 4).forEach((activity, index) => {
      const div = document.createElement('article');
      div.className = `result-card ${index === 0 ? 'primary' : ''}`;
      const tags = [activity.evaluable ? 'Évaluable' : 'Non évaluable', ...activity.strengths.slice(0, 3)];
      div.innerHTML = `
        <div class="result-kicker">${index === 0 ? 'Activité principale' : 'Suggestion alternative'}</div>
        ${activityHeading(activity, 'h3', `<span class="score">${activity.score} pts</span>`)}
        <p>${escapeHtml(activity.summary)}</p>
        <div class="tags">${tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}</div>
      `;
      el.resultList.appendChild(div);
    });

    renderSettingsAdvice(recs);
  }

  function renderSettingsAdvice(recs) {
    el.settingsAdvice.innerHTML = '';
    const top = recs.ranked.slice(0, 3);

    top.forEach((activity, index) => {
      const profile = getProfile(activity, recs.functionId);
      const article = document.createElement('article');
      article.className = `setting-card ${index === 0 ? 'primary-setting' : ''}`;
      article.innerHTML = `
        <div class="result-kicker">${index === 0 ? 'Conseil principal' : 'Alternative'}</div>
        ${activityHeading(activity, 'h3')}
        <p><strong>${escapeHtml(profile.title)}</strong></p>
        <ul>${profile.bullets.map(bullet => `<li>${escapeHtml(bullet)}</li>`).join('')}</ul>
        ${profile.warning ? `<div class="vigilance"><strong>Point de vigilance :</strong> ${escapeHtml(profile.warning)}</div>` : ''}
      `;
      el.settingsAdvice.appendChild(article);
    });
  }


  function getAnswerValue(id) {
    return state.answers[id] ? state.answers[id].value : null;
  }

  function buildIntention() {
    const moment = intentionFragments.moment[getAnswerValue('moment')] || 'Dans ce scénario';
    const need = intentionFragments.primaryNeed[getAnswerValue('primaryNeed')] || 'clarifier une intention pédagogique';
    const action = intentionFragments.studentAction[getAnswerValue('studentAction')];
    const trace = intentionFragments.traceType[getAnswerValue('traceType')];

    const parts = [`${moment}, vous souhaitez ${need}`];
    if (action) parts.push(action);
    if (trace) parts.push(trace);

    const sentence = `${parts.join(' ')}.`.replace(/\s+/g, ' ');
    const detailOrder = [
      'surveyScope',
      'anonymity',
      'autoFeedback',
      'attempts',
      'productionVisibility',
      'workMode',
      'feedbackSource',
      'peerCriteria',
      'collectionStructure',
      'gradeStatus',
      'practicalConstraint'
    ];

    const details = detailOrder
      .map(id => {
        const value = getAnswerValue(id);
        return value && intentionDetails[id] ? intentionDetails[id][value] : null;
      })
      .filter(Boolean);

    return { sentence, details };
  }

  function intentionBlock(options = {}) {
    const { compact = false } = options;
    const intention = buildIntention();
    const details = compact ? intention.details.slice(0, 4) : intention.details;

    return `
      <section class="intention-card${compact ? ' compact' : ''}">
        <div class="result-kicker">Intention reconstituée</div>
        <p class="intention-sentence">${escapeHtml(intention.sentence)}</p>
        ${details.length ? `
          <div class="intention-details">
            <strong>Précisions du scénario</strong>
            <ul>${details.map(detail => `<li>${escapeHtml(detail)}</li>`).join('')}</ul>
          </div>
        ` : ''}
      </section>
    `;
  }

  function renderCompletionPreview(recs) {
    if (!el.completionRecommendation) return;

    if (!recs.ranked.length) {
      el.completionRecommendation.innerHTML = '<p class="muted">Aucune activité ne ressort encore nettement.</p>';
      if (el.openRecommendationButton) el.openRecommendationButton.disabled = true;
      return;
    }

    const top = recs.ranked[0];
    const profile = getProfile(top, recs.functionId);
    const alternatives = recs.ranked.slice(1, 4);

    el.completionRecommendation.innerHTML = `
      <article class="completion-primary-card">
        ${intentionBlock({ compact: true })}
        <div class="result-kicker">Activité recommandée</div>
        ${activityHeading(top, 'h3', `<span class="score">${top.score} pts</span>`)}
        <p>${escapeHtml(top.summary)}</p>
        <div class="mini-advice">
          <strong>${escapeHtml(profile.title)}</strong>
          <ul>${profile.bullets.map(bullet => `<li>${escapeHtml(bullet)}</li>`).join('')}</ul>
          ${profile.warning ? `<div class="vigilance"><strong>Point de vigilance :</strong> ${escapeHtml(profile.warning)}</div>` : ''}
        </div>
        ${alternatives.length ? `<p class="muted alternatives-inline"><strong>Suggestions alternatives :</strong> ${alternatives.map(item => escapeHtml(item.name)).join(', ')}.</p>` : ''}
      </article>
    `;

    if (el.openRecommendationButton) el.openRecommendationButton.disabled = false;
  }

  function openRecommendationModal() {
    const recs = engine.recommendations(data.activities, state.answers);
    if (!recs.ranked.length) return;

    el.modalContent.innerHTML = buildRecommendationModalHtml(recs);
    bindAlternativeAccordions();
    el.modal.classList.remove('hidden');
    document.body.classList.add('modal-open');
    el.closeRecommendationButton.focus();
  }

  function closeRecommendationModal() {
    el.modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
    if (el.openRecommendationButton) el.openRecommendationButton.focus();
  }

  function buildRecommendationModalHtml(recs) {
    const primary = recs.ranked[0];
    const alternatives = recs.ranked.slice(1, 4);
    const functionLabel = functionShortLabels[recs.functionId] || recs.functionId;

    return `
      <section class="modal-section">
        ${intentionBlock()}
      </section>

      <section class="modal-section">
        <div class="modal-main-recommendation">
          <div class="result-kicker">Recommandation principale</div>
          ${activityHeading(primary, 'h3', `<span class="score">${primary.score} pts</span>`)}
          <p class="modal-summary">${escapeHtml(primary.summary)}</p>
          <div class="tags">
            <span class="tag">Fonction ${escapeHtml(functionLabel)}</span>
            <span class="tag">${primary.evaluable ? 'Évaluable' : 'Non évaluable'}</span>
            ${primary.strengths.slice(0, 4).map(strength => `<span class="tag">${escapeHtml(strength)}</span>`).join('')}
          </div>
        </div>
      </section>

      <section class="modal-section two-column-modal">
        ${activityDescriptionBlock(primary)}
        ${profileAdviceBlock(primary, recs.functionId)}
      </section>

      ${reasoningBlock()}

      ${alternatives.length ? `
        <section class="modal-section">
          <h3>Suggestions alternatives</h3>
          <p class="muted">Ces activités sont moins pondérées que la recommandation principale, mais peuvent rester pertinentes si une contrainte pédagogique ou pratique devient prioritaire.</p>
          <div class="accordion-list">
            ${alternatives.map((activity, index) => alternativeAccordion(activity, recs.functionId, index)).join('')}
          </div>
        </section>
      ` : ''}
    `;
  }

  function activityDescriptionBlock(activity) {
    const traces = activity.traces || [];
    const cautions = activity.cautions || [];

    return `
      <article class="modal-info-card">
        <h4>Description de l’activité</h4>
        <p>${escapeHtml(activity.summary)}</p>
        ${traces.length ? `<p><strong>Traces exploitables :</strong> ${traces.map(escapeHtml).join(', ')}.</p>` : ''}
        ${activity.strengths && activity.strengths.length ? `
          <p><strong>Ce que cette activité permet bien :</strong> ${activity.strengths.slice(0, 4).map(escapeHtml).join(', ')}.</p>
        ` : ''}
        ${cautions.length ? `
          <div class="vigilance"><strong>Points de vigilance :</strong> ${cautions.map(escapeHtml).join(' ; ')}.</div>
        ` : ''}
      </article>
    `;
  }

  function profileAdviceBlock(activity, functionId) {
    const profile = getProfile(activity, functionId);
    return `
      <article class="modal-info-card advice-card">
        <h4>Conseils de paramétrage pour ce cas</h4>
        <p><strong>${escapeHtml(profile.title)}</strong></p>
        <ul>${profile.bullets.map(bullet => `<li>${escapeHtml(bullet)}</li>`).join('')}</ul>
        ${profile.warning ? `<div class="vigilance"><strong>Point de vigilance :</strong> ${escapeHtml(profile.warning)}</div>` : ''}
      </article>
    `;
  }

  function reasoningBlock() {
    const visible = engine.visibleQuestions(data.questions, state.answers);
    const lines = visible
      .filter(q => state.answers[q.id])
      .map(q => {
        const answer = state.answers[q.id];
        return answer.reasoning || `${answer.label}. ${answer.implication || ''}`;
      });

    if (!lines.length) return '';

    return `
      <section class="modal-section reasoning-summary-box">
        <h3>Raisonnement retenu</h3>
        <ol>${lines.map(line => `<li>${escapeHtml(line)}</li>`).join('')}</ol>
      </section>
    `;
  }

  function alternativeAccordion(activity, functionId, index) {
    return `
      <details class="alternative-accordion">
        <summary>
          ${activityInlineLabel(activity)}
          <span class="score">${activity.score} pts</span>
        </summary>
        <div class="accordion-body">
          ${activityDescriptionBlock(activity)}
          ${profileAdviceBlock(activity, functionId)}
        </div>
      </details>
    `;
  }

  function bindAlternativeAccordions() {
    const accordions = Array.from(el.modalContent.querySelectorAll('.alternative-accordion'));

    accordions.forEach(accordion => {
      accordion.addEventListener('toggle', () => {
        if (!accordion.open) return;

        accordions.forEach(other => {
          if (other !== accordion && other.open) {
            other.open = false;
          }
        });

        requestAnimationFrame(() => {
          accordion.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        });
      });
    });
  }

  function getProfile(activity, functionId) {
    if (!activity.profiles) return { title: 'Paramétrage à préciser', bullets: [], warning: '' };
    return activity.profiles[functionId] || activity.profiles.formative || Object.values(activity.profiles)[0];
  }

  function reset() {
    state.answers = {};
    state.manualIndex = null;
    state.showFinal = false;
    render();
  }

  function goBack() {
    const current = getCurrent();
    if (current.index > 0) {
      state.manualIndex = current.index - 1;
      state.showFinal = false;
      render();
      scrollToActiveDecisionArea();
    }
  }

  function scrollToActiveDecisionArea() {
    requestAnimationFrame(() => {
      const target = state.showFinal ? el.completionBox : el.questionTitle;
      if (!target) return;
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function render() {
    renderQuestion();
    renderReasoning();
    renderResults();
  }

  el.resetButton.addEventListener('click', reset);
  el.backButton.addEventListener('click', goBack);
  el.openRecommendationButton.addEventListener('click', openRecommendationModal);
  el.closeRecommendationButton.addEventListener('click', closeRecommendationModal);
  el.modal.addEventListener('click', event => {
    if (event.target === el.modal) closeRecommendationModal();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !el.modal.classList.contains('hidden')) {
      closeRecommendationModal();
    }
  });

  render();
})();
