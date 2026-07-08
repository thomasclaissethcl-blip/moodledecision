(function () {
  const help = window.MoodleDecisionHelp;
  if (!help) return;

  const TOUR_DESKTOP_QUERY = '(min-width: 921px)';
  const desktopQuery = window.matchMedia ? window.matchMedia(TOUR_DESKTOP_QUERY) : null;

  const state = {
    active: false,
    index: 0,
    steps: []
  };

  const el = {
    startButton: document.getElementById('start-tour-button'),
    overlay: null,
    spotlight: null,
    popover: null,
    helpModal: document.getElementById('help-modal'),
    helpModalTitle: document.getElementById('help-modal-title'),
    helpModalBody: document.getElementById('help-modal-body'),
    closeHelpButton: document.getElementById('close-help-button')
  };

  function isTourAvailable() {
    return !desktopQuery || desktopQuery.matches;
  }

  function syncTourAvailability() {
    const available = isTourAvailable();
    if (el.startButton) {
      el.startButton.hidden = !available;
      el.startButton.setAttribute('aria-hidden', String(!available));
      el.startButton.tabIndex = available ? 0 : -1;
    }
    if (!available && state.active) {
      closeTour({ restoreFocus: false });
    }
  }

  function visibleTarget(item) {
    const target = document.querySelector(item.target);
    if (!target) return null;
    const rect = target.getBoundingClientRect();
    const style = window.getComputedStyle(target);
    if (style.display === 'none' || style.visibility === 'hidden' || rect.width <= 0 || rect.height <= 0) return null;
    return target;
  }

  function getAvailableSteps() {
    return (help.tour || [])
      .map(key => ({ key, item: help.items[key] }))
      .filter(entry => entry.item && visibleTarget(entry.item));
  }

  function createTourDom() {
    if (el.overlay) return;

    el.overlay = document.createElement('div');
    el.overlay.className = 'tour-overlay hidden';
    el.overlay.setAttribute('aria-hidden', 'true');

    el.spotlight = document.createElement('div');
    el.spotlight.className = 'tour-spotlight hidden';
    el.spotlight.setAttribute('aria-hidden', 'true');

    el.popover = document.createElement('div');
    el.popover.className = 'tour-popover hidden';
    el.popover.setAttribute('role', 'dialog');
    el.popover.setAttribute('aria-live', 'polite');
    el.popover.setAttribute('aria-modal', 'true');

    document.body.append(el.overlay, el.spotlight, el.popover);
  }

  function startTour() {
    if (!isTourAvailable()) return;
    createTourDom();
    state.steps = getAvailableSteps();
    if (!state.steps.length) return;
    state.active = true;
    state.index = 0;
    document.body.classList.add('tour-active');
    el.overlay.classList.remove('hidden');
    el.spotlight.classList.remove('hidden');
    el.popover.classList.remove('hidden');
    renderTourStep();
  }

  function closeTour(options = {}) {
    const { restoreFocus = true } = options;
    state.active = false;
    document.body.classList.remove('tour-active');
    clearActiveTargets();
    if (el.overlay) el.overlay.classList.add('hidden');
    if (el.spotlight) el.spotlight.classList.add('hidden');
    if (el.popover) el.popover.classList.add('hidden');
    if (restoreFocus && el.startButton && !el.startButton.hidden) el.startButton.focus();
  }

  function clearActiveTargets() {
    document.querySelectorAll('.tour-target-active').forEach(target => target.classList.remove('tour-target-active'));
  }

  function renderTourStep() {
    if (!isTourAvailable()) {
      closeTour({ restoreFocus: false });
      return;
    }

    const step = state.steps[state.index];
    if (!step) {
      closeTour();
      return;
    }

    const target = visibleTarget(step.item);
    if (!target) {
      state.steps = getAvailableSteps();
      if (state.index >= state.steps.length) state.index = state.steps.length - 1;
      renderTourStep();
      return;
    }

    clearActiveTargets();
    target.classList.add('tour-target-active');
    target.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });

    const updatePosition = () => {
      if (!state.active) return;
      positionSpotlight(target);
      renderPopover(step.item, target);
    };

    requestAnimationFrame(updatePosition);
    window.setTimeout(updatePosition, 220);
  }

  function positionSpotlight(target) {
    const rect = target.getBoundingClientRect();
    const padding = 8;
    el.spotlight.style.left = `${Math.max(8, rect.left - padding)}px`;
    el.spotlight.style.top = `${Math.max(8, rect.top - padding)}px`;
    el.spotlight.style.width = `${Math.min(window.innerWidth - 16, rect.width + padding * 2)}px`;
    el.spotlight.style.height = `${Math.min(window.innerHeight - 16, rect.height + padding * 2)}px`;
  }

  function renderPopover(item, target) {
    const total = state.steps.length;
    const isLast = state.index === total - 1;

    el.popover.innerHTML = `
      <p class="tour-step-count">Visite guidée - étape ${state.index + 1} sur ${total}</p>
      <h2>${escapeHtml(item.title)}</h2>
      <p>${escapeHtml(item.body)}</p>
      <p class="tour-expectation">${escapeHtml(item.expectation)}</p>
      <div class="tour-actions">
        <button class="button button-secondary" type="button" data-tour-close>Fermer</button>
        <button class="button" type="button" data-tour-next>${isLast ? 'Terminer' : 'Suivant'}</button>
      </div>
    `;

    const rect = target.getBoundingClientRect();
    const popRect = el.popover.getBoundingClientRect();
    const margin = 14;
    const viewportPadding = 14;

    let left = rect.right + margin;
    let top = rect.top;

    if (left + popRect.width > window.innerWidth - viewportPadding) {
      left = rect.left - popRect.width - margin;
    }

    if (left < viewportPadding) {
      left = Math.min(Math.max(viewportPadding, rect.left), window.innerWidth - popRect.width - viewportPadding);
      top = rect.bottom + margin;
    }

    if (top + popRect.height > window.innerHeight - viewportPadding) {
      top = window.innerHeight - popRect.height - viewportPadding;
    }

    if (top < viewportPadding) top = viewportPadding;

    el.popover.style.left = `${left}px`;
    el.popover.style.top = `${top}px`;

    const nextButton = el.popover.querySelector('[data-tour-next]');
    const closeButton = el.popover.querySelector('[data-tour-close]');
    nextButton.addEventListener('click', nextTourStep);
    closeButton.addEventListener('click', closeTour);
    nextButton.focus();
  }

  function nextTourStep() {
    if (state.index >= state.steps.length - 1) {
      closeTour();
      return;
    }
    state.index += 1;
    renderTourStep();
  }

  function openHelpModal(key) {
    const item = help.items[key];
    if (!item || !el.helpModal || !el.helpModalTitle || !el.helpModalBody) return;

    el.helpModalTitle.textContent = item.title;
    el.helpModalBody.innerHTML = `
      <p>${escapeHtml(item.body)}</p>
      <div class="help-modal-note"><strong>Ce que vous pouvez en attendre :</strong> ${escapeHtml(item.expectation)}</div>
    `;
    el.helpModal.classList.remove('hidden');
    document.body.classList.add('modal-open');
    if (el.closeHelpButton) el.closeHelpButton.focus();
  }

  function closeHelpModal() {
    if (!el.helpModal) return;
    el.helpModal.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function trapTourFocus(event) {
    if (!state.active || event.key !== 'Tab' || !el.popover) return;
    const focusable = Array.from(el.popover.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))
      .filter(node => !node.disabled && node.offsetParent !== null);
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
      return;
    }

    if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
      return;
    }

    if (!el.popover.contains(active)) {
      event.preventDefault();
      first.focus();
    }
  }

  document.addEventListener('click', event => {
    const helpButton = event.target.closest('[data-help-key]');
    if (!helpButton) return;
    openHelpModal(helpButton.dataset.helpKey);
  });

  document.addEventListener('click', event => {
    if (!state.active || !el.popover) return;
    if (el.popover.contains(event.target)) return;
    event.preventDefault();
    event.stopPropagation();
  }, true);

  if (el.startButton) el.startButton.addEventListener('click', startTour);
  if (el.closeHelpButton) el.closeHelpButton.addEventListener('click', closeHelpModal);
  if (el.helpModal) {
    el.helpModal.addEventListener('click', event => {
      if (event.target === el.helpModal) closeHelpModal();
    });
  }

  window.addEventListener('resize', () => {
    syncTourAvailability();
    if (state.active) renderTourStep();
  });

  if (desktopQuery) {
    const onDesktopChange = () => syncTourAvailability();
    if (desktopQuery.addEventListener) desktopQuery.addEventListener('change', onDesktopChange);
    else if (desktopQuery.addListener) desktopQuery.addListener(onDesktopChange);
  }

  window.addEventListener('scroll', () => {
    if (!state.active) return;
    const step = state.steps[state.index];
    const target = step ? visibleTarget(step.item) : null;
    if (!target) return;
    positionSpotlight(target);
    renderPopover(step.item, target);
  }, { passive: true });

  document.addEventListener('keydown', event => {
    if (state.active) {
      trapTourFocus(event);
    }

    if (event.key !== 'Escape') return;
    if (state.active) {
      closeTour();
      return;
    }
    if (el.helpModal && !el.helpModal.classList.contains('hidden')) {
      closeHelpModal();
    }
  });

  syncTourAvailability();

  window.addEventListener('load', () => {
    if (help.autoStart && isTourAvailable()) {
      window.setTimeout(startTour, 450);
    }
  });
})();
