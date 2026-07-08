window.MoodleDecisionEngine = (function () {
  function canShow(question, answers) {
    if (!question.showIf) return true;
    const condition = question.showIf;

    if (condition.anyAnswer) {
      return condition.anyAnswer.some(rule => {
        const answer = answers[rule.id];
        return answer && rule.values.includes(answer.value);
      });
    }

    if (condition.allAnswers) {
      return condition.allAnswers.every(rule => {
        const answer = answers[rule.id];
        return answer && rule.values.includes(answer.value);
      });
    }

    return true;
  }

  function visibleQuestions(questions, answers) {
    return questions.filter(q => canShow(q, answers));
  }

  function pruneAnswers(questions, answers) {
    const visibleIds = new Set(visibleQuestions(questions, answers).map(q => q.id));
    Object.keys(answers).forEach(id => {
      if (!visibleIds.has(id)) delete answers[id];
    });
    return answers;
  }

  function scores(activities, answers) {
    const activityScores = {};
    const functionScores = { diagnostic: 0, formative: 0, summative: 0 };

    Object.keys(activities).forEach(id => { activityScores[id] = 0; });

    Object.values(answers).forEach(answer => {
      if (answer.scores) {
        Object.entries(answer.scores).forEach(([activityId, value]) => {
          if (activityScores[activityId] !== undefined) {
            activityScores[activityId] += value;
          }
        });
      }

      if (answer.function) {
        Object.entries(answer.function).forEach(([functionId, value]) => {
          if (functionScores[functionId] !== undefined) {
            functionScores[functionId] += value;
          }
        });
      }
    });

    return { activityScores, functionScores };
  }

  function dominantFunction(functionScores) {
    const sorted = Object.entries(functionScores).sort((a, b) => b[1] - a[1]);
    if (!sorted.length || sorted[0][1] <= 0) return 'formative';
    return sorted[0][0];
  }

  function recommendations(activities, answers) {
    const result = scores(activities, answers);
    const ranked = Object.values(activities)
      .map(activity => ({ ...activity, score: result.activityScores[activity.id] || 0 }))
      .filter(activity => activity.score > 0)
      .sort((a, b) => b.score - a.score);

    return {
      ranked,
      activityScores: result.activityScores,
      functionScores: result.functionScores,
      functionId: dominantFunction(result.functionScores)
    };
  }

  function completionState(questions, answers) {
    const visible = visibleQuestions(questions, answers);
    const firstUnansweredIndex = visible.findIndex(q => !answers[q.id]);
    return {
      visible,
      firstUnansweredIndex,
      completed: visible.length > 0 && firstUnansweredIndex === -1,
      currentQuestion: firstUnansweredIndex === -1 ? visible[visible.length - 1] : visible[firstUnansweredIndex],
      currentIndex: firstUnansweredIndex === -1 ? visible.length - 1 : firstUnansweredIndex
    };
  }

  function buildSummary(questions, answers, recs) {
    const labels = {
      diagnostic: 'diagnostique',
      formative: 'formative',
      summative: 'sommative'
    };
    const lines = [];
    lines.push('Synthèse du raisonnement');
    lines.push('');
    visibleQuestions(questions, answers).forEach(q => {
      if (answers[q.id]) {
        const answer = answers[q.id];
        const sentence = answer.reasoning || `${answer.label}. ${answer.implication || ''}`;
        lines.push(`- ${sentence}`);
      }
    });
    lines.push('');
    lines.push(`Fonction dominante estimée : ${labels[recs.functionId] || recs.functionId}`);
    lines.push('');
    lines.push('Activités recommandées :');
    recs.ranked.slice(0, 3).forEach((activity, index) => {
      lines.push(`${index + 1}. ${activity.name} — score ${activity.score}`);
      lines.push(`   ${activity.summary}`);
      const profile = activity.profiles[recs.functionId] || activity.profiles.formative;
      if (profile) {
        lines.push(`   Paramétrage : ${profile.title}`);
        profile.bullets.forEach(bullet => lines.push(`   - ${bullet}`));
        if (profile.warning) lines.push(`   Vigilance : ${profile.warning}`);
      }
    });
    return lines.join('\n');
  }

  return {
    visibleQuestions,
    pruneAnswers,
    recommendations,
    completionState,
    buildSummary
  };
})();
