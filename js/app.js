// ============================================================
//  BacPrep 2026 – APPLICATION LOGIC
// ============================================================

// ─── State Management ────────────────────────────────────────
const STATE = {
  currentPage: 'dashboard',
  currentSubject: null,
  currentLesson: null,
  currentFlashcardIndex: 0,
  flashcardFlipped: false,
  quizState: {
    active: false,
    subject: null,
    questions: [],
    current: 0,
    score: 0,
    answers: [],
    timeLeft: 0,
    timer: null,
    answered: false,
    completed: false
  },
  theme: 'dark'
};

// ─── Storage ─────────────────────────────────────────────────
const Storage = {
  get(key, def = null) {
    try { return JSON.parse(localStorage.getItem(key)) ?? def; } catch { return def; }
  },
  set(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
  },
  getProgress() {
    return this.get('bp2026_progress', {
      français: { completed: [], quizScores: [], flashcardsMastered: [] },
      arabe: { completed: [], quizScores: [], flashcardsMastered: [] },
      islamiques: { completed: [], quizScores: [], flashcardsMastered: [] },
      hg: { completed: [], quizScores: [], flashcardsMastered: [] }
    });
  },
  setProgress(progress) {
    this.set('bp2026_progress', progress);
  },
  getStreak() {
    return this.get('bp2026_streak', { count: 0, lastDate: null });
  },
  updateStreak() {
    const today = new Date().toDateString();
    const streak = this.getStreak();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (streak.lastDate === today) return streak;
    if (streak.lastDate === yesterday) {
      streak.count += 1;
    } else if (streak.lastDate !== today) {
      streak.count = 1;
    }
    streak.lastDate = today;
    this.set('bp2026_streak', streak);
    return streak;
  },
  getPlanning() {
    return this.get('bp2026_planning', {});
  },
  setPlanning(data) { this.set('bp2026_planning', data); }
};

// ─── Theme ───────────────────────────────────────────────────
function initTheme() {
  const saved = Storage.get('bp2026_theme', 'dark');
  STATE.theme = saved;
  applyTheme(saved);
}

function applyTheme(theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
  STATE.theme = STATE.theme === 'dark' ? 'light' : 'dark';
  Storage.set('bp2026_theme', STATE.theme);
  applyTheme(STATE.theme);
}

// ─── Navigation ──────────────────────────────────────────────
function navigate(page, subject = null, extra = null) {
  STATE.currentPage = page;
  STATE.currentSubject = subject;
  STATE.currentLesson = extra;

  // Update bottom nav
  ['dashboard', 'lessons', 'flashcards', 'quiz', 'planning'].forEach(p => {
    const btn = document.getElementById(`nav-${p}`);
    if (btn) {
      btn.classList.toggle('nav-active', p === page && !subject);
    }
  });

  // Render
  const main = document.getElementById('main-content');
  main.classList.add('page-exit');
  setTimeout(() => {
    main.classList.remove('page-exit');
    main.classList.add('page-enter');
    renderPage(page, subject, extra);
    setTimeout(() => main.classList.remove('page-enter'), 300);
  }, 100);
}

function renderPage(page, subject, extra) {
  const main = document.getElementById('main-content');
  switch (page) {
    case 'dashboard': main.innerHTML = renderDashboard(); bindDashboard(); break;
    case 'lessons':
      if (!subject) { main.innerHTML = renderSubjectList('lessons'); bindSubjectList('lessons'); }
      else if (!extra) { main.innerHTML = renderLessonList(subject); bindLessonList(subject); }
      else { main.innerHTML = renderLessonContent(subject, extra); bindLessonContent(subject, extra); }
      break;
    case 'flashcards':
      if (!subject) { main.innerHTML = renderSubjectList('flashcards'); bindSubjectList('flashcards'); }
      else { main.innerHTML = renderFlashcards(subject); bindFlashcards(subject); }
      break;
    case 'quiz':
      if (!subject) { main.innerHTML = renderSubjectList('quiz'); bindSubjectList('quiz'); }
      else if (!STATE.quizState.active && !STATE.quizState.completed) {
        main.innerHTML = renderQuizSetup(subject); bindQuizSetup(subject);
      } else if (STATE.quizState.completed) {
        main.innerHTML = renderQuizResults(); bindQuizResults();
      } else {
        main.innerHTML = renderQuizQuestion(); bindQuizQuestion();
      }
      break;
    case 'planning': main.innerHTML = renderPlanning(); bindPlanning(); break;
    default: main.innerHTML = renderDashboard(); bindDashboard();
  }
}

// ─── Dashboard ───────────────────────────────────────────────
function renderDashboard() {
  const progress = Storage.getProgress();
  const streak = Storage.getStreak();
  const subjects = getAllSubjects();
  const today = new Date();
  const examDate = new Date('2026-06-01');
  const daysLeft = Math.ceil((examDate - today) / (1000 * 60 * 60 * 24));

  const subjectCards = subjects.map(s => {
    const p = progress[s.id] || { completed: [], quizScores: [] };
    const lessonCount = s.lessons.length;
    const completed = p.completed.length;
    const pct = lessonCount ? Math.round((completed / lessonCount) * 100) : 0;
    const avgScore = p.quizScores.length
      ? Math.round(p.quizScores.reduce((a, b) => a + b, 0) / p.quizScores.length)
      : null;

    return `
      <div class="card-glass group cursor-pointer hover:scale-[1.02] transition-transform duration-200"
           onclick="navigate('lessons','${s.id}')">
        <div class="flex items-start justify-between mb-3">
          <div class="flex items-center gap-3">
            <div class="subject-icon bg-gradient-to-br ${s.gradient} rounded-xl p-2.5 text-2xl shadow-lg">${s.icon}</div>
            <div>
              <h3 class="font-bold text-base leading-tight">${s.name}</h3>
              <p class="text-xs text-slate-400">${s.nameAr}</p>
            </div>
          </div>
          <span class="text-xs font-semibold px-2 py-1 rounded-full ${pct === 100 ? 'bg-green-500/20 text-green-400' : 'bg-slate-700 text-slate-400'}">${pct}%</span>
        </div>
        <div class="progress-bar-bg mb-2">
          <div class="progress-bar-fill bg-gradient-to-r ${s.gradient}" style="width:${pct}%"></div>
        </div>
        <div class="flex justify-between text-xs text-slate-400 mt-2">
          <span>${completed}/${lessonCount} leçons</span>
          ${avgScore !== null ? `<span>Quiz: ${avgScore}%</span>` : `<span>Aucun quiz</span>`}
        </div>
        <div class="flex gap-2 mt-3">
          <button class="action-btn-xs bg-blue-600/20 text-blue-400 hover:bg-blue-600/40"
                  onclick="event.stopPropagation();navigate('flashcards','${s.id}')">
            🃏 Fiches
          </button>
          <button class="action-btn-xs bg-purple-600/20 text-purple-400 hover:bg-purple-600/40"
                  onclick="event.stopPropagation();startQuiz('${s.id}')">
            ⚡ Quiz
          </button>
        </div>
      </div>`;
  }).join('');

  const totalLessons = subjects.reduce((a, s) => a + s.lessons.length, 0);
  const totalCompleted = subjects.reduce((a, s) => a + (progress[s.id]?.completed?.length || 0), 0);
  const globalPct = Math.round((totalCompleted / totalLessons) * 100);

  return `
    <div class="px-4 pb-24 pt-4 max-w-2xl mx-auto">
      <!-- Hero Banner -->
      <div class="hero-banner mb-6">
        <div class="flex items-center justify-between mb-2">
          <div>
            <h1 class="text-xl font-black text-white">BacPrep 2026 🎓</h1>
            <p class="text-slate-300 text-sm">Sciences Expérimentales</p>
          </div>
          <div class="text-right">
            <p class="text-3xl font-black text-white">${daysLeft}</p>
            <p class="text-xs text-slate-300">jours restants</p>
          </div>
        </div>
        <div class="mt-3">
          <div class="flex justify-between text-xs text-slate-300 mb-1.5">
            <span>Progression globale</span>
            <span>${globalPct}%</span>
          </div>
          <div class="h-2.5 bg-white/20 rounded-full overflow-hidden">
            <div class="h-full bg-white rounded-full transition-all duration-1000" style="width:${globalPct}%"></div>
          </div>
        </div>
      </div>

      <!-- Stats Row -->
      <div class="grid grid-cols-3 gap-3 mb-6">
        <div class="stat-card">
          <p class="text-2xl font-black text-orange-400">🔥 ${streak.count}</p>
          <p class="text-xs text-slate-400 mt-0.5">Jours consécutifs</p>
        </div>
        <div class="stat-card">
          <p class="text-2xl font-black text-blue-400">${totalCompleted}</p>
          <p class="text-xs text-slate-400 mt-0.5">Leçons vues</p>
        </div>
        <div class="stat-card">
          <p class="text-2xl font-black text-green-400">${subjects.reduce((a,s)=>(progress[s.id]?.quizScores?.length||0)+a,0)}</p>
          <p class="text-xs text-slate-400 mt-0.5">Quiz réalisés</p>
        </div>
      </div>

      <!-- Subjects Grid -->
      <h2 class="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Matières</h2>
      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
        ${subjectCards}
      </div>

      <!-- Exam Countdown -->
      <div class="mt-6 card-glass border border-red-500/20 bg-red-500/5">
        <div class="flex items-center gap-3">
          <span class="text-2xl">📅</span>
          <div>
            <p class="font-bold text-sm">Examen Régional 2026</p>
            <p class="text-xs text-slate-400">Début : 1er Juin 2026 — <span class="text-red-400 font-semibold">${daysLeft} jours</span></p>
          </div>
          <button class="ml-auto text-xs bg-red-500/20 text-red-400 px-3 py-1.5 rounded-lg hover:bg-red-500/30 transition-colors"
                  onclick="navigate('planning')">
            Planning →
          </button>
        </div>
      </div>
    </div>`;
}

function bindDashboard() {
  Storage.updateStreak();
}

function startQuiz(subjectId) {
  STATE.quizState = {
    active: false, subject: subjectId, questions: [], current: 0,
    score: 0, answers: [], timeLeft: 0, timer: null, answered: false, completed: false
  };
  navigate('quiz', subjectId);
}

// ─── Subject List ─────────────────────────────────────────────
function renderSubjectList(mode) {
  const subjects = getAllSubjects();
  const titles = { lessons: '📚 Choisir une matière', flashcards: '🃏 Fiches de révision', quiz: '⚡ Choisir une matière' };
  const descs = {
    lessons: 'Sélectionne une matière pour accéder aux cours.',
    flashcards: 'Active recall — teste ta mémoire !',
    quiz: 'QCM chronométré — 40 secs/question.'
  };

  return `
    <div class="px-4 pb-24 pt-4 max-w-2xl mx-auto">
      <div class="mb-5">
        <h1 class="text-xl font-black">${titles[mode]}</h1>
        <p class="text-sm text-slate-400 mt-1">${descs[mode]}</p>
      </div>
      <div class="flex flex-col gap-3">
        ${subjects.map(s => `
          <div class="card-glass group cursor-pointer hover:scale-[1.01] transition-all"
               onclick="navigate('${mode}','${s.id}')">
            <div class="flex items-center gap-4">
              <div class="text-4xl">${s.icon}</div>
              <div class="flex-1">
                <h3 class="font-bold">${s.name}</h3>
                <p class="text-xs text-slate-400">${s.nameAr}</p>
                <p class="text-xs text-slate-500 mt-0.5">${mode === 'flashcards' ? s.flashcards.length + ' fiches' : mode === 'quiz' ? s.quiz.length + ' questions' : s.lessons.length + ' leçons'}</p>
              </div>
              <div class="text-slate-500 group-hover:text-white transition-colors text-xl">→</div>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
}

function bindSubjectList(mode) {}

// ─── Lessons ──────────────────────────────────────────────────
function renderLessonList(subjectId) {
  const s = getSubjectById(subjectId);
  const progress = Storage.getProgress();
  const completed = progress[subjectId]?.completed || [];

  return `
    <div class="px-4 pb-24 pt-4 max-w-2xl mx-auto">
      <div class="flex items-center gap-3 mb-5">
        <button onclick="navigate('lessons')" class="back-btn">←</button>
        <div>
          <h1 class="text-xl font-black">${s.icon} ${s.name}</h1>
          <p class="text-xs text-slate-400">${s.nameAr} — ${s.lessons.length} leçons</p>
        </div>
      </div>
      <div class="flex flex-col gap-2.5">
        ${s.lessons.map((l, i) => {
          const done = completed.includes(l.id);
          return `
            <div class="card-glass group cursor-pointer hover:scale-[1.01] transition-all ${done ? 'border-green-500/30' : ''}"
                 onclick="navigate('lessons','${subjectId}','${l.id}')">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${done ? 'bg-green-500 text-white' : 'bg-slate-700 text-slate-400'}">
                  ${done ? '✓' : (i + 1)}
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="font-semibold text-sm leading-tight">${l.title}</h3>
                  <p class="text-xs text-slate-400 mt-0.5">${l.oeuvre} · ${l.duration}</p>
                </div>
                <span class="text-slate-500 text-sm">→</span>
              </div>
            </div>`;
        }).join('')}
      </div>
    </div>`;
}

function bindLessonList() {}

function renderLessonContent(subjectId, lessonId) {
  const s = getSubjectById(subjectId);
  const lesson = getLessonById(subjectId, lessonId);
  const progress = Storage.getProgress();
  const completed = progress[subjectId]?.completed || [];
  const isDone = completed.includes(lessonId);
  const idx = s.lessons.findIndex(l => l.id === lessonId);
  const prev = idx > 0 ? s.lessons[idx - 1] : null;
  const next = idx < s.lessons.length - 1 ? s.lessons[idx + 1] : null;

  return `
    <div class="pb-28 pt-4 max-w-2xl mx-auto">
      <div class="flex items-center gap-3 mb-4 px-4">
        <button onclick="navigate('lessons','${subjectId}')" class="back-btn">←</button>
        <div class="flex-1">
          <h1 class="text-base font-bold leading-tight">${lesson.title}</h1>
          <p class="text-xs text-slate-400">${lesson.oeuvre} · ${lesson.duration}</p>
        </div>
        ${isDone ? '<span class="text-green-400 text-lg">✓</span>' : ''}
      </div>

      <div class="lesson-content px-4" id="lesson-body">
        ${markdownToHtml(lesson.content)}
      </div>

      <div class="px-4 mt-6 flex flex-col gap-3">
        ${!isDone ? `
          <button id="mark-done-btn" onclick="markLessonDone('${subjectId}','${lessonId}')"
                  class="btn-primary w-full">
            ✅ Marquer comme appris
          </button>` : `
          <div class="flex items-center gap-2 text-green-400 text-sm font-semibold justify-center">
            ✅ Leçon complétée !
          </div>`}

        <div class="flex gap-2">
          ${prev ? `<button onclick="navigate('lessons','${subjectId}','${prev.id}')"
                    class="btn-secondary flex-1 text-sm">← Précédent</button>` : '<div class="flex-1"></div>'}
          ${next ? `<button onclick="navigate('lessons','${subjectId}','${next.id}')"
                    class="btn-secondary flex-1 text-sm">Suivant →</button>` : '<div class="flex-1"></div>'}
        </div>

        <button onclick="navigate('flashcards','${subjectId}')"
                class="btn-secondary text-sm">
          🃏 Réviser avec les fiches de ${s.name}
        </button>
      </div>
    </div>`;
}

function bindLessonContent() {}

function markLessonDone(subjectId, lessonId) {
  const progress = Storage.getProgress();
  if (!progress[subjectId].completed.includes(lessonId)) {
    progress[subjectId].completed.push(lessonId);
    Storage.setProgress(progress);
  }
  const btn = document.getElementById('mark-done-btn');
  if (btn) {
    btn.outerHTML = `<div class="flex items-center gap-2 text-green-400 text-sm font-semibold justify-center">✅ Leçon complétée !</div>`;
  }
  showToast('✅ Leçon marquée comme apprise !', 'success');
}

// ─── Markdown renderer (simple) ──────────────────────────────
function markdownToHtml(md) {
  return md
    .replace(/^## (.+)$/gm, '<h2 class="text-xl font-black mt-6 mb-3 text-white">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="text-base font-bold mt-5 mb-2 text-blue-300">$1</h3>')
    .replace(/^#### (.+)$/gm, '<h4 class="text-sm font-bold mt-4 mb-2 text-slate-300">$1</h4>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-white">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em class="italic text-slate-300">$1</em>')
    .replace(/`(.+?)`/g, '<code class="bg-slate-700 text-blue-300 px-1 py-0.5 rounded text-xs font-mono">$1</code>')
    .replace(/﴿(.+?)﴾/g, '<span class="quran-text">﴿$1﴾</span>')
    .replace(/^> (.+)$/gm, '<blockquote class="border-l-4 border-blue-500 pl-4 py-1 my-3 text-slate-300 italic bg-blue-500/5 rounded-r">$1</blockquote>')
    .replace(/^---$/gm, '<hr class="border-slate-700 my-4">')
    .replace(/^\|(.+)\|$/gm, (match) => {
      const cells = match.split('|').filter(c => c.trim() !== '');
      if (cells.every(c => /^[-:\s]+$/.test(c))) return '';
      return '<tr>' + cells.map(c => `<td class="px-3 py-2 border-b border-slate-700/50 text-sm">${c.trim()}</td>`).join('') + '</tr>';
    })
    .replace(/(<tr>.*<\/tr>\s*)+/gs, (match) => `<div class="overflow-x-auto my-4"><table class="w-full border-collapse text-left"><tbody class="text-slate-300">${match}</tbody></table></div>`)
    .replace(/^- (.+)$/gm, '<li class="flex items-start gap-2 text-sm text-slate-300 mb-1"><span class="text-blue-400 mt-0.5">•</span><span>$1</span></li>')
    .replace(/^(\d+)\. (.+)$/gm, '<li class="flex items-start gap-2 text-sm text-slate-300 mb-1"><span class="text-blue-400 font-bold min-w-[1rem]">$1.</span><span>$2</span></li>')
    .replace(/(<li.*<\/li>\s*)+/gs, match => `<ul class="list-none my-2">${match}</ul>`)
    .replace(/^(?!<[h|t|u|b|d|l])(.+)$/gm, (line) => {
      if (!line.trim()) return '<div class="mb-1"></div>';
      if (line.startsWith('<')) return line;
      return `<p class="text-sm text-slate-300 leading-relaxed mb-2">${line}</p>`;
    });
}

// ─── Flashcards ───────────────────────────────────────────────
function renderFlashcards(subjectId) {
  const s = getSubjectById(subjectId);
  const cards = s.flashcards;
  STATE.currentFlashcardIndex = 0;
  STATE.flashcardFlipped = false;

  return `
    <div class="px-4 pb-24 pt-4 max-w-2xl mx-auto">
      <div class="flex items-center gap-3 mb-5">
        <button onclick="navigate('flashcards')" class="back-btn">←</button>
        <div>
          <h1 class="text-xl font-black">${s.icon} Fiches ${s.name}</h1>
          <p class="text-xs text-slate-400">Clique sur la carte pour révéler la réponse</p>
        </div>
      </div>

      <!-- Progress -->
      <div class="flex items-center justify-between text-xs text-slate-400 mb-3">
        <span id="card-counter">1 / ${cards.length}</span>
        <span id="card-category" class="px-2 py-0.5 bg-slate-700 rounded-full">${cards[0]?.category}</span>
        <span id="card-difficulty" class="px-2 py-0.5 rounded-full difficulty-${cards[0]?.difficulty}">${difficultyLabel(cards[0]?.difficulty)}</span>
      </div>
      <div class="progress-bar-bg mb-4">
        <div id="fc-progress" class="progress-bar-fill bg-gradient-to-r ${s.gradient}" style="width:${100/cards.length}%"></div>
      </div>

      <!-- Card -->
      <div id="flashcard-container" class="flashcard-wrapper" onclick="flipCard()">
        <div id="flashcard" class="flashcard">
          <div class="flashcard-front">
            <div class="fc-label">❓ Question</div>
            <p id="fc-question" class="fc-text">${cards[0]?.question}</p>
            <p class="fc-hint">Tap pour révéler</p>
          </div>
          <div class="flashcard-back">
            <div class="fc-label">✅ Réponse</div>
            <p id="fc-answer" class="fc-text">${cards[0]?.answer}</p>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <div class="flex gap-3 mt-5">
        <button onclick="prevCard()" id="fc-prev" class="btn-secondary flex-1 disabled:opacity-30" ${STATE.currentFlashcardIndex === 0 ? 'disabled' : ''}>← Préc.</button>
        <button onclick="flipCard()" class="btn-primary flex-1">
          <span id="flip-label">Révéler 👁️</span>
        </button>
        <button onclick="nextCard('${subjectId}')" id="fc-next" class="btn-secondary flex-1">Suiv. →</button>
      </div>

      <!-- Know it / Don't know it buttons (shown after flip) -->
      <div id="fc-rating" class="hidden mt-4 flex gap-3">
        <button onclick="rateCard('${subjectId}','no')" class="flex-1 py-3 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500/30 font-semibold transition-colors">
          ❌ À revoir
        </button>
        <button onclick="rateCard('${subjectId}','yes')" class="flex-1 py-3 rounded-xl bg-green-500/20 text-green-400 hover:bg-green-500/30 font-semibold transition-colors">
          ✅ Maîtrisé !
        </button>
      </div>
    </div>`;
}

function bindFlashcards(subjectId) {
  window.currentFlashcardSubject = subjectId;
}

function flipCard() {
  const card = document.getElementById('flashcard');
  STATE.flashcardFlipped = !STATE.flashcardFlipped;
  card.classList.toggle('flipped', STATE.flashcardFlipped);
  const label = document.getElementById('flip-label');
  if (label) label.textContent = STATE.flashcardFlipped ? 'Retourner 🔄' : 'Révéler 👁️';
  const rating = document.getElementById('fc-rating');
  if (rating) rating.classList.toggle('hidden', !STATE.flashcardFlipped);
}

function nextCard(subjectId) {
  const s = getSubjectById(subjectId);
  const cards = s.flashcards;
  if (STATE.currentFlashcardIndex < cards.length - 1) {
    STATE.currentFlashcardIndex++;
    updateFlashcard(subjectId);
  } else {
    showToast('🎉 Toutes les fiches complétées !', 'success');
  }
}

function prevCard() {
  if (STATE.currentFlashcardIndex > 0) {
    STATE.currentFlashcardIndex--;
    updateFlashcard(window.currentFlashcardSubject);
  }
}

function rateCard(subjectId, rating) {
  const s = getSubjectById(subjectId);
  const cards = s.flashcards;
  const card = cards[STATE.currentFlashcardIndex];

  if (rating === 'yes') {
    const progress = Storage.getProgress();
    if (!progress[subjectId].flashcardsMastered) progress[subjectId].flashcardsMastered = [];
    if (!progress[subjectId].flashcardsMastered.includes(card.id)) {
      progress[subjectId].flashcardsMastered.push(card.id);
      Storage.setProgress(progress);
    }
    showToast('⭐ Fiche maîtrisée !', 'success');
  }

  if (STATE.currentFlashcardIndex < cards.length - 1) {
    STATE.currentFlashcardIndex++;
    updateFlashcard(subjectId);
  } else {
    showToast('🎊 Session terminée !', 'success');
    setTimeout(() => navigate('flashcards'), 1500);
  }
}

function updateFlashcard(subjectId) {
  const s = getSubjectById(subjectId);
  const cards = s.flashcards;
  const idx = STATE.currentFlashcardIndex;
  const card = cards[idx];

  STATE.flashcardFlipped = false;
  const fc = document.getElementById('flashcard');
  if (fc) fc.classList.remove('flipped');

  document.getElementById('fc-question').textContent = card.question;
  document.getElementById('fc-answer').textContent = card.answer;
  document.getElementById('card-counter').textContent = `${idx + 1} / ${cards.length}`;
  document.getElementById('card-category').textContent = card.category;
  document.getElementById('card-difficulty').className = `px-2 py-0.5 rounded-full difficulty-${card.difficulty}`;
  document.getElementById('card-difficulty').textContent = difficultyLabel(card.difficulty);
  document.getElementById('fc-progress').style.width = `${((idx + 1) / cards.length) * 100}%`;
  document.getElementById('flip-label').textContent = 'Révéler 👁️';
  document.getElementById('fc-rating').classList.add('hidden');
  document.getElementById('fc-prev').disabled = idx === 0;
}

function difficultyLabel(d) {
  return { easy: '⭐ Facile', medium: '⭐⭐ Moyen', hard: '⭐⭐⭐ Difficile' }[d] || d;
}

// ─── Quiz ─────────────────────────────────────────────────────
function renderQuizSetup(subjectId) {
  const s = getSubjectById(subjectId);
  const totalQ = s.quiz.length;

  return `
    <div class="px-4 pb-24 pt-4 max-w-2xl mx-auto">
      <div class="flex items-center gap-3 mb-6">
        <button onclick="navigate('quiz')" class="back-btn">←</button>
        <h1 class="text-xl font-black">⚡ Quiz — ${s.name}</h1>
      </div>

      <div class="card-glass mb-4">
        <div class="text-4xl text-center mb-3">${s.icon}</div>
        <h2 class="text-center font-bold text-lg mb-1">${s.name}</h2>
        <p class="text-center text-slate-400 text-sm mb-4">${s.nameAr}</p>
        <div class="grid grid-cols-2 gap-3 mb-4">
          <div class="stat-card text-center">
            <p class="text-xl font-black text-blue-400">${totalQ}</p>
            <p class="text-xs text-slate-400">Questions</p>
          </div>
          <div class="stat-card text-center">
            <p class="text-xl font-black text-orange-400">40s</p>
            <p class="text-xs text-slate-400">Par question</p>
          </div>
        </div>
        <div class="text-xs text-slate-400 space-y-1 mb-4">
          <p>• 4 choix de réponse par question</p>
          <p>• Minuterie de 40 secondes par question</p>
          <p>• Explication après chaque réponse</p>
          <p>• Score sauvegardé dans ta progression</p>
        </div>
        <button onclick="launchQuiz('${subjectId}')" class="btn-primary w-full text-base py-4">
          🚀 Démarrer le Quiz
        </button>
      </div>
    </div>`;
}

function bindQuizSetup() {}

function launchQuiz(subjectId) {
  const s = getSubjectById(subjectId);
  const shuffled = [...s.quiz].sort(() => Math.random() - 0.5);

  STATE.quizState = {
    active: true, completed: false,
    subject: subjectId,
    questions: shuffled,
    current: 0,
    score: 0,
    answers: [],
    timeLeft: 40,
    timer: null,
    answered: false
  };

  navigate('quiz', subjectId, 'active');
  renderPage('quiz', subjectId, 'active');
  startTimer();
}

function startTimer() {
  if (STATE.quizState.timer) clearInterval(STATE.quizState.timer);
  STATE.quizState.timeLeft = 40;
  STATE.quizState.timer = setInterval(() => {
    STATE.quizState.timeLeft--;
    const el = document.getElementById('quiz-timer');
    const ring = document.getElementById('timer-ring');
    if (el) {
      el.textContent = STATE.quizState.timeLeft;
      el.className = STATE.quizState.timeLeft <= 10 ? 'text-red-400 font-black text-xl' : 'text-slate-300 font-black text-xl';
    }
    if (ring) {
      const pct = (STATE.quizState.timeLeft / 40) * 100;
      const color = STATE.quizState.timeLeft <= 10 ? '#ef4444' : '#6366f1';
      ring.style.background = `conic-gradient(${color} ${pct}%, transparent ${pct}%)`;
    }
    if (STATE.quizState.timeLeft <= 0) {
      clearInterval(STATE.quizState.timer);
      if (!STATE.quizState.answered) timeUp();
    }
  }, 1000);
}

function renderQuizQuestion() {
  const qs = STATE.quizState;
  const q = qs.questions[qs.current];
  const total = qs.questions.length;

  return `
    <div class="px-4 pb-24 pt-4 max-w-2xl mx-auto">
      <!-- Header -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-2">
          <span class="text-sm font-bold text-slate-400">${qs.current + 1} / ${total}</span>
          <span class="text-xs px-2 py-0.5 bg-slate-700 rounded-full text-slate-400">${q.category || ''}</span>
        </div>
        <div class="timer-ring" id="timer-ring">
          <div class="timer-face">
            <span id="quiz-timer">40</span>
          </div>
        </div>
      </div>

      <!-- Progress bar -->
      <div class="progress-bar-bg mb-4">
        <div class="progress-bar-fill bg-indigo-500" style="width:${((qs.current) / total) * 100}%"></div>
      </div>

      <!-- Question -->
      <div class="card-glass mb-4 min-h-[120px] flex items-center">
        <p class="text-base font-semibold leading-relaxed text-center w-full">${q.question}</p>
      </div>

      <!-- Options -->
      <div class="grid grid-cols-1 gap-2.5" id="options-container">
        ${q.options.map((opt, i) => `
          <button id="opt-${i}" onclick="answerQuiz(${i})"
                  class="quiz-option text-left px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-700 hover:border-indigo-500 transition-all text-sm font-medium">
            <span class="option-letter">${'ABCD'[i]}.</span> ${opt}
          </button>`).join('')}
      </div>

      <!-- Score -->
      <div class="flex justify-between items-center mt-4 text-xs text-slate-400">
        <span>Score: <strong class="text-white">${qs.score}</strong></span>
        <button onclick="quitQuiz()" class="text-red-400 hover:text-red-300">Quitter</button>
      </div>
    </div>`;
}

function bindQuizQuestion() {}

function answerQuiz(selectedIdx) {
  if (STATE.quizState.answered) return;
  STATE.quizState.answered = true;
  clearInterval(STATE.quizState.timer);

  const qs = STATE.quizState;
  const q = qs.questions[qs.current];
  const correct = q.correct;
  const isCorrect = selectedIdx === correct;

  if (isCorrect) qs.score++;
  qs.answers.push({ question: q.question, selected: selectedIdx, correct, isCorrect });

  // Visual feedback
  for (let i = 0; i < q.options.length; i++) {
    const btn = document.getElementById(`opt-${i}`);
    if (!btn) continue;
    if (i === correct) {
      btn.className = 'quiz-option text-left px-4 py-3 rounded-xl border-2 border-green-500 bg-green-500/20 text-sm font-medium';
    } else if (i === selectedIdx && !isCorrect) {
      btn.className = 'quiz-option text-left px-4 py-3 rounded-xl border-2 border-red-500 bg-red-500/20 text-sm font-medium';
    } else {
      btn.className = 'quiz-option text-left px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/50 opacity-50 text-sm font-medium';
    }
    btn.disabled = true;
  }

  // Show explanation
  const opts = document.getElementById('options-container');
  if (opts) {
    const exp = document.createElement('div');
    exp.className = `mt-3 p-3 rounded-xl text-xs ${isCorrect ? 'bg-green-500/10 border border-green-500/30 text-green-300' : 'bg-red-500/10 border border-red-500/30 text-red-300'}`;
    exp.innerHTML = `<strong>${isCorrect ? '✅ Correct !' : '❌ Incorrect'}</strong><br>${q.explanation}`;
    opts.appendChild(exp);
  }

  // Auto next
  setTimeout(() => {
    if (qs.current < qs.questions.length - 1) {
      qs.current++;
      qs.answered = false;
      renderPage('quiz', qs.subject, 'active');
      startTimer();
    } else {
      finishQuiz();
    }
  }, 2500);
}

function timeUp() {
  showToast('⏰ Temps écoulé !', 'warning');
  const qs = STATE.quizState;
  qs.answers.push({ question: qs.questions[qs.current].question, selected: -1, correct: qs.questions[qs.current].correct, isCorrect: false });
  qs.answered = true;

  setTimeout(() => {
    if (qs.current < qs.questions.length - 1) {
      qs.current++;
      qs.answered = false;
      renderPage('quiz', qs.subject, 'active');
      startTimer();
    } else {
      finishQuiz();
    }
  }, 1500);
}

function finishQuiz() {
  const qs = STATE.quizState;
  if (qs.timer) clearInterval(qs.timer);
  qs.active = false;
  qs.completed = true;

  const total = qs.questions.length;
  const pct = Math.round((qs.score / total) * 100);

  // Save score
  const progress = Storage.getProgress();
  if (!progress[qs.subject].quizScores) progress[qs.subject].quizScores = [];
  progress[qs.subject].quizScores.push(pct);
  Storage.setProgress(progress);

  renderPage('quiz', qs.subject, 'results');
}

function renderQuizResults() {
  const qs = STATE.quizState;
  const total = qs.questions.length;
  const pct = Math.round((qs.score / total) * 100);
  const s = getSubjectById(qs.subject);

  const grade = pct >= 80 ? { label: 'Excellent ! 🏆', color: 'text-green-400' }
    : pct >= 60 ? { label: 'Bien ! 👍', color: 'text-blue-400' }
    : pct >= 40 ? { label: 'Passable 😐', color: 'text-yellow-400' }
    : { label: 'À revoir 📚', color: 'text-red-400' };

  return `
    <div class="px-4 pb-24 pt-4 max-w-2xl mx-auto">
      <div class="text-center mb-6">
        <div class="text-6xl mb-3">${pct >= 80 ? '🏆' : pct >= 60 ? '👍' : pct >= 40 ? '😐' : '📚'}</div>
        <h1 class="text-2xl font-black mb-1">Quiz terminé !</h1>
        <p class="${grade.color} text-lg font-bold">${grade.label}</p>
      </div>

      <!-- Score Circle -->
      <div class="flex justify-center mb-6">
        <div class="score-circle">
          <span class="text-4xl font-black ${grade.color}">${pct}%</span>
          <span class="text-sm text-slate-400">${qs.score}/${total}</span>
        </div>
      </div>

      <!-- Answer Review -->
      <h3 class="font-bold text-sm text-slate-400 uppercase tracking-wider mb-3">Révision des réponses</h3>
      <div class="flex flex-col gap-2 mb-6">
        ${qs.answers.map((a, i) => `
          <div class="p-3 rounded-xl border ${a.isCorrect ? 'border-green-500/30 bg-green-500/5' : 'border-red-500/30 bg-red-500/5'}">
            <div class="flex items-start gap-2">
              <span>${a.isCorrect ? '✅' : '❌'}</span>
              <div>
                <p class="text-xs text-slate-300 font-medium">${a.question}</p>
                ${!a.isCorrect ? `<p class="text-xs text-green-400 mt-1">✓ ${qs.questions[i]?.options[a.correct]}</p>` : ''}
              </div>
            </div>
          </div>`).join('')}
      </div>

      <div class="flex flex-col gap-3">
        <button onclick="launchQuiz('${qs.subject}')" class="btn-primary w-full">🔄 Recommencer</button>
        <button onclick="STATE.quizState={active:false,completed:false};navigate('quiz')" class="btn-secondary w-full">← Autres matières</button>
        <button onclick="navigate('dashboard')" class="btn-secondary w-full">🏠 Dashboard</button>
      </div>
    </div>`;
}

function bindQuizResults() {}

function quitQuiz() {
  if (STATE.quizState.timer) clearInterval(STATE.quizState.timer);
  STATE.quizState = { active: false, completed: false };
  navigate('quiz');
}

// ─── Planning ─────────────────────────────────────────────────
function renderPlanning() {
  const today = new Date();
  const examDate = new Date('2026-06-01');
  const planning = Storage.getPlanning();

  // Build calendar (April 6 → June 1, 2026)
  const startDate = new Date(today);
  startDate.setHours(0, 0, 0, 0);
  const days = [];
  const curr = new Date(startDate);
  while (curr <= examDate) {
    days.push(new Date(curr));
    curr.setDate(curr.getDate() + 1);
  }

  // Group by week
  const weeks = [];
  let week = [];
  // Pad first week
  const firstDay = days[0].getDay();
  for (let i = 0; i < firstDay; i++) week.push(null);
  days.forEach(d => {
    week.push(d);
    if (d.getDay() === 6) { weeks.push(week); week = []; }
  });
  if (week.length) { while (week.length < 7) week.push(null); weeks.push(week); }

  const dayNames = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
  const monthNames = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun'];

  const subjects = getAllSubjects();

  // Study plan suggestions
  const studyPlan = [
    { date: '2026-04-07', subject: 'français', task: 'Boîte à Merveilles – Chapitres 1-5' },
    { date: '2026-04-08', subject: 'arabe', task: 'البلاغة – التشبيه والاستعارة' },
    { date: '2026-04-09', subject: 'islamiques', task: 'Module 1 – القرآن وعلومه' },
    { date: '2026-04-10', subject: 'hg', task: 'Première Guerre mondiale' },
    { date: '2026-04-11', subject: 'français', task: 'Antigone – Lecture et analyse' },
    { date: '2026-04-12', subject: 'arabe', task: 'النحو – الجملة الاسمية والفعلية' },
    { date: '2026-04-14', subject: 'islamiques', task: 'Module 2 – السيرة النبوية' },
    { date: '2026-04-15', subject: 'hg', task: 'L\'Entre-deux-guerres' },
    { date: '2026-04-16', subject: 'français', task: 'Le Dernier Jour – Lecture' },
    { date: '2026-04-17', subject: 'arabe', task: 'الصور البيانية – التدريب' },
    { date: '2026-04-18', subject: 'islamiques', task: 'Module 3 – العقيدة' },
    { date: '2026-04-19', subject: 'hg', task: 'Deuxième Guerre mondiale' },
    { date: '2026-04-21', subject: 'français', task: 'Révision œuvres + Quiz' },
    { date: '2026-04-22', subject: 'arabe', task: 'أعلام الأدب + Quiz' },
    { date: '2026-04-23', subject: 'islamiques', task: 'Module 4 – الفقه' },
    { date: '2026-04-24', subject: 'hg', task: 'Guerre froide + Maroc' },
    { date: '2026-04-25', subject: 'islamiques', task: 'سورة يوسف – التحليل' },
    { date: '2026-04-28', subject: 'français', task: 'Fiches de révision toutes œuvres' },
    { date: '2026-04-29', subject: 'arabe', task: 'مراجعة شاملة + Flashcards' },
    { date: '2026-04-30', subject: 'islamiques', task: 'Module 5 – الأخلاق + Quiz général' },
    { date: '2026-05-01', subject: 'hg', task: 'Géographie – Afrique + ressources' },
    { date: '2026-05-05', subject: 'français', task: 'Blanc : dissertation + commentaire' },
    { date: '2026-05-06', subject: 'arabe', task: 'تعبير كتابي + مراجعة' },
    { date: '2026-05-07', subject: 'islamiques', task: 'Quiz général toutes matières' },
    { date: '2026-05-12', subject: 'hg', task: 'Révision chronologies histoire' },
    { date: '2026-05-14', subject: 'français', task: '⭐ RÉVISION GÉNÉRALE FRANÇAIS' },
    { date: '2026-05-19', subject: 'arabe', task: '⭐ RÉVISION GÉNÉRALE ARABE' },
    { date: '2026-05-22', subject: 'islamiques', task: '⭐ RÉVISION GÉNÉRALE ISLAMIQUES' },
    { date: '2026-05-26', subject: 'hg', task: '⭐ RÉVISION GÉNÉRALE HG' },
    { date: '2026-05-28', subject: 'français', task: '🔥 DERNIER SPRINT – Toutes matières' },
    { date: '2026-05-29', subject: 'arabe', task: '🔥 DERNIER SPRINT – Toutes matières' },
    { date: '2026-05-31', subject: 'hg', task: '😴 Repose-toi, tu es prêt(e) !' }
  ];

  const planMap = {};
  studyPlan.forEach(p => { planMap[p.date] = p; });

  const colorMap = { français: 'bg-blue-500', arabe: 'bg-green-500', islamiques: 'bg-emerald-500', hg: 'bg-orange-500' };
  const todayStr = today.toISOString().split('T')[0];

  return `
    <div class="px-4 pb-24 pt-4 max-w-2xl mx-auto">
      <div class="mb-5">
        <h1 class="text-xl font-black">📅 Planning de révision</h1>
        <p class="text-sm text-slate-400 mt-1">Du ${today.toLocaleDateString('fr-FR')} au 1er juin 2026</p>
      </div>

      <!-- Subject legend -->
      <div class="flex flex-wrap gap-2 mb-4">
        ${subjects.map(s => `
          <span class="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-slate-800">
            <span class="w-2 h-2 rounded-full ${colorMap[s.id]}"></span>${s.icon} ${s.name}
          </span>`).join('')}
      </div>

      <!-- Calendar -->
      <div class="card-glass p-3 mb-5">
        <!-- Day headers -->
        <div class="grid grid-cols-7 mb-1">
          ${dayNames.map(d => `<div class="text-center text-xs text-slate-500 font-bold py-1">${d}</div>`).join('')}
        </div>
        <!-- Weeks -->
        ${weeks.map(w => `
          <div class="grid grid-cols-7 mb-1">
            ${w.map(d => {
              if (!d) return '<div></div>';
              const dStr = d.toISOString().split('T')[0];
              const plan = planMap[dStr];
              const isToday = dStr === todayStr;
              const isExam = dStr === '2026-06-01';
              const isPast = d < today;
              const dot = plan ? `<div class="w-1.5 h-1.5 rounded-full ${colorMap[plan.subject]} mx-auto mt-0.5"></div>` : '';
              return `
                <div class="cal-day ${isToday ? 'cal-today' : ''} ${isExam ? 'cal-exam' : ''} ${isPast ? 'cal-past' : ''}"
                     onclick="showDayDetail('${dStr}')" title="${plan ? plan.task : ''}">
                  <span class="text-xs font-semibold">${d.getDate()}</span>
                  ${dot}
                  ${isExam ? '<span class="text-red-400 text-[8px] font-bold leading-none">BAC</span>' : ''}
                </div>`;
            }).join('')}
          </div>`).join('')}
      </div>

      <!-- Day Detail Popup -->
      <div id="day-detail" class="hidden"></div>

      <!-- Upcoming tasks -->
      <h2 class="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Tâches à venir</h2>
      <div class="flex flex-col gap-2">
        ${studyPlan.filter(p => p.date >= todayStr).slice(0, 10).map(p => {
          const s = getSubjectById(p.subject);
          const d = new Date(p.date);
          return `
            <div class="flex items-center gap-3 card-glass py-2.5 px-3">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${colorMap[p.subject]} bg-opacity-20 flex-shrink-0">
                ${s.icon}
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-xs font-semibold text-white truncate">${p.task}</p>
                <p class="text-xs text-slate-400">${d.toLocaleDateString('fr-FR', {weekday:'short', day:'numeric', month:'short'})}</p>
              </div>
            </div>`;
        }).join('')}
      </div>
    </div>`;
}

function bindPlanning() {}

function showDayDetail(dateStr) {
  const studyPlan = [
    { date: '2026-04-07', subject: 'français', task: 'Boîte à Merveilles – Chapitres 1-5' },
    { date: '2026-04-08', subject: 'arabe', task: 'البلاغة – التشبيه والاستعارة' },
    { date: '2026-04-09', subject: 'islamiques', task: 'Module 1 – القرآن وعلومه' },
    { date: '2026-04-10', subject: 'hg', task: 'Première Guerre mondiale' },
    { date: '2026-04-11', subject: 'français', task: 'Antigone – Lecture et analyse' },
    { date: '2026-04-12', subject: 'arabe', task: 'النحو – الجملة الاسمية والفعلية' },
    { date: '2026-05-26', subject: 'hg', task: '⭐ RÉVISION GÉNÉRALE HG' },
    { date: '2026-05-31', subject: 'hg', task: '😴 Repose-toi, tu es prêt(e) !' }
  ];
  const plan = studyPlan.find(p => p.date === dateStr);
  const el = document.getElementById('day-detail');
  if (!plan) { el.classList.add('hidden'); return; }
  const s = getSubjectById(plan.subject);
  const d = new Date(dateStr);
  el.className = 'card-glass border border-indigo-500/30 mb-4';
  el.innerHTML = `
    <div class="flex items-center gap-3">
      <span class="text-2xl">${s.icon}</span>
      <div>
        <p class="font-bold text-sm">${d.toLocaleDateString('fr-FR', {weekday:'long', day:'numeric', month:'long'})}</p>
        <p class="text-sm text-slate-300">${plan.task}</p>
      </div>
      <button onclick="document.getElementById('day-detail').classList.add('hidden')" class="ml-auto text-slate-500 hover:text-white">✕</button>
    </div>`;
}

// ─── Toast ───────────────────────────────────────────────────
function showToast(msg, type = 'info') {
  const existing = document.getElementById('toast');
  if (existing) existing.remove();
  const colors = { success: 'bg-green-500', warning: 'bg-yellow-500', error: 'bg-red-500', info: 'bg-indigo-500' };
  const toast = document.createElement('div');
  toast.id = 'toast';
  toast.className = `fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-xl text-white text-sm font-semibold shadow-xl ${colors[type]} transition-all duration-300`;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 2500);
}

// ─── Bottom Nav ───────────────────────────────────────────────
function initNav() {
  const nav = document.getElementById('bottom-nav');
  nav.innerHTML = `
    <div class="nav-inner">
      <button id="nav-dashboard" class="nav-btn nav-active" onclick="navigate('dashboard')">
        <span class="nav-icon">🏠</span>
        <span class="nav-label">Accueil</span>
      </button>
      <button id="nav-lessons" class="nav-btn" onclick="navigate('lessons')">
        <span class="nav-icon">📚</span>
        <span class="nav-label">Cours</span>
      </button>
      <button id="nav-flashcards" class="nav-btn" onclick="navigate('flashcards')">
        <span class="nav-icon">🃏</span>
        <span class="nav-label">Fiches</span>
      </button>
      <button id="nav-quiz" class="nav-btn" onclick="navigate('quiz')">
        <span class="nav-icon">⚡</span>
        <span class="nav-label">Quiz</span>
      </button>
      <button id="nav-planning" class="nav-btn" onclick="navigate('planning')">
        <span class="nav-icon">📅</span>
        <span class="nav-label">Planning</span>
      </button>
    </div>`;
}

// ─── Header ───────────────────────────────────────────────────
function initHeader() {
  const header = document.getElementById('top-header');
  header.innerHTML = `
    <div class="header-inner">
      <div class="flex items-center gap-2">
        <span class="text-lg font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">BacPrep</span>
        <span class="text-xs px-1.5 py-0.5 bg-indigo-500/20 text-indigo-400 rounded font-bold">2026</span>
      </div>
      <div class="flex items-center gap-2">
        <button id="theme-toggle" onclick="toggleTheme()"
                class="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-lg transition-colors">
          🌙
        </button>
      </div>
    </div>`;
}

// ─── Init ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initHeader();
  initNav();
  navigate('dashboard');
  applyTheme(STATE.theme);
});
