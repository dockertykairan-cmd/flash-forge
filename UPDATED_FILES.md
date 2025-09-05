# Updated Files for GitHub Repository

## package.json
```json
{
  "name": "flashcard-app",
  "version": "1.0.0",
  "description": "A modern flashcard application with image support",
  "main": "app.js",
  "scripts": {
    "dev": "http-server . -p 3000 -o",
    "start": "http-server . -p 3000"
  },
  "devDependencies": {
    "http-server": "^14.1.1"
  },
  "keywords": ["flashcards", "study", "education"],
  "author": "",
  "license": "MIT"
}
```

## style.css
```css
/* Modern Flashcard App - Enhanced UI */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --primary: #6366f1;
  --primary-hover: #5855eb;
  --primary-light: #e0e7ff;
  --secondary: #f1f5f9;
  --success: #10b981;
  --warning: #f59e0b;
  --danger: #ef4444;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --text-muted: #94a3b8;
  --border: #e2e8f0;
  --border-light: #f1f5f9;
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: var(--text-primary);
  line-height: 1.6;
}

/* Header */
.topbar {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: var(--shadow-sm);
}

.topbar h1 {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 8px;
}

.toolbar {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* Layout */
.container {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 24px;
  padding: 24px;
  max-width: 1400px;
  margin: 0 auto;
  min-height: calc(100vh - 80px);
}

/* Sidebar */
.sidebar {
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: 24px;
  box-shadow: var(--shadow-lg);
  height: fit-content;
  position: sticky;
  top: 104px;
}

.sidebar h2 {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.deck-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.deck-list li {
  padding: 12px 16px;
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
  color: var(--text-secondary);
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

.deck-list li:hover {
  background: var(--secondary);
  color: var(--text-primary);
  transform: translateX(4px);
}

.deck-list li.active {
  background: var(--primary-light);
  color: var(--primary);
  border-color: var(--primary);
  font-weight: 600;
}

.deck-list li.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--primary);
}

/* Content Area */
.content {
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: 32px;
  box-shadow: var(--shadow-lg);
  min-height: 600px;
}

.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  color: var(--text-muted);
  font-size: 18px;
  gap: 16px;
}

.empty::before {
  content: '📚';
  font-size: 64px;
  opacity: 0.5;
}

/* Deck Editor */
.deck-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 2px solid var(--border-light);
}

.deck-name {
  font-size: 24px;
  font-weight: 700;
  border: none;
  background: transparent;
  color: var(--text-primary);
  padding: 8px 0;
  border-bottom: 2px solid transparent;
  transition: border-color 0.2s ease;
  min-width: 300px;
}

.deck-name:focus {
  outline: none;
  border-bottom-color: var(--primary);
}

.deck-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* Buttons */
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  background: var(--bg-secondary);
  color: var(--text-secondary);
  box-shadow: var(--shadow-sm);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn:active {
  transform: translateY(0);
}

.btn.primary {
  background: var(--primary);
  color: white;
}

.btn.primary:hover {
  background: var(--primary-hover);
}

.btn.success {
  background: var(--success);
  color: white;
}

.btn.warning {
  background: var(--warning);
  color: white;
}

.btn.danger {
  background: var(--danger);
  color: white;
}

.btn.fab {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  padding: 0;
  justify-content: center;
  font-size: 20px;
  box-shadow: var(--shadow-lg);
}

.btn.small {
  padding: 6px 12px;
  font-size: 12px;
  border-radius: var(--radius-sm);
}

.file-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: var(--bg-secondary);
  color: var(--text-secondary);
  border-radius: var(--radius-md);
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.2s ease;
  box-shadow: var(--shadow-sm);
}

.file-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

/* Cards */
.card-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 24px;
}

.card {
  background: var(--bg-secondary);
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: var(--shadow-md);
  transition: all 0.2s ease;
  border: 2px solid transparent;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: var(--primary-light);
}

.card-fields {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 20px;
}

.input {
  padding: 12px 16px;
  border: 2px solid var(--border);
  border-radius: var(--radius-md);
  font-size: 14px;
  transition: all 0.2s ease;
  background: var(--bg-primary);
  color: var(--text-primary);
  font-family: inherit;
}

.input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.input.back {
  min-height: 80px;
  resize: vertical;
}

/* Image Uploader */
.image-uploader {
  border: 2px dashed var(--border);
  border-radius: var(--radius-lg);
  padding: 24px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  background: var(--bg-primary);
  position: relative;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.image-uploader:hover {
  border-color: var(--primary);
  background: var(--primary-light);
}

.image-uploader[data-empty]::before {
  content: '📷';
  font-size: 32px;
  opacity: 0.5;
}

.image-uploader[data-empty]::after {
  content: attr(data-empty);
  color: var(--text-muted);
  font-size: 14px;
  font-weight: 500;
}

.file-input {
  display: none;
}

.preview {
  max-width: 100%;
  max-height: 200px;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
}

.image-actions {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}

.card-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--border-light);
}

/* Study Mode */
.study {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.study-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 2px solid var(--border-light);
}

.study-controls {
  display: flex;
  align-items: center;
  gap: 16px;
}

.study-card {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
  margin-bottom: 32px;
}

.study-inner {
  width: 100%;
  max-width: 600px;
  height: 400px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.study-card.flipped .study-inner {
  transform: rotateY(180deg);
}

.study-front,
.study-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  background: var(--bg-primary);
  border: 2px solid var(--border-light);
  gap: 24px;
}

.study-back {
  transform: rotateY(180deg);
  background: var(--primary-light);
  border-color: var(--primary);
}

.study-face {
  font-size: 20px;
  text-align: center;
  line-height: 1.5;
  color: var(--text-primary);
  font-weight: 500;
}

.study-image-wrap {
  max-height: 200px;
  max-width: 100%;
  overflow: hidden;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.study-image-wrap img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.study-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

#progress {
  font-weight: 600;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  padding: 8px 16px;
  border-radius: var(--radius-md);
  font-size: 14px;
}

.muted {
  color: var(--text-muted);
  font-size: 14px;
  text-align: center;
}

.hidden {
  display: none !important;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .container {
    grid-template-columns: 280px 1fr;
    gap: 20px;
    padding: 20px;
  }
  
  .card-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 16px;
  }
  
  .sidebar {
    position: static;
    margin-bottom: 16px;
  }
  
  .topbar {
    padding: 12px 16px;
  }
  
  .topbar h1 {
    font-size: 20px;
  }
  
  .toolbar {
    gap: 8px;
  }
  
  .deck-header {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
  }
  
  .deck-actions {
    justify-content: center;
  }
  
  .study-inner {
    height: 300px;
  }
  
  .study-front,
  .study-back {
    padding: 24px;
  }
  
  .study-actions {
    gap: 8px;
  }
  
  .btn {
    padding: 8px 16px;
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .card-list {
    grid-template-columns: 1fr;
  }
  
  .card {
    padding: 16px;
  }
  
  .content {
    padding: 20px;
  }
  
  .study-actions {
    flex-direction: column;
    align-items: stretch;
  }
  
  .study-actions .btn {
    justify-content: center;
  }
}

/* Animations */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  animation: slideIn 0.3s ease-out;
}

/* Focus styles for accessibility */
.btn:focus-visible,
.input:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

/* Loading states */
.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
}

/* Smooth transitions */
* {
  transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
}
```

## index.html
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Flashcards + Images</title>
  <link rel="stylesheet" href="style.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
  <header class="topbar">
    <h1>
      <span>📚</span>
      Flashcards
    </h1>
    <div class="toolbar">
      <button id="newDeckBtn" class="btn fab">＋</button>
      <button id="exportBtn" class="btn">Export</button>
      <label class="file-btn">
        Import
        <input type="file" id="importInput" accept="application/json" hidden />
      </label>
    </div>
  </header>

  <main class="container">
    <aside class="sidebar">
      <h2>
        <span>📂</span>
        My Decks
      </h2>
      <ul id="deckList" class="deck-list"></ul>
    </aside>

    <section class="content">
      <div id="emptyState" class="empty">
        <div>Create your first deck to get started</div>
        <p>Organize your study materials with custom flashcards</p>
      </div>

      <div id="deckEditor" class="deck-editor hidden">
        <div class="deck-header">
          <input id="deckName" class="input deck-name" placeholder="Deck name" />
          <div class="deck-actions">
            <button id="addCardBtn" class="btn fab small">＋</button>
            <button id="studyBtn" class="btn primary">
              <span>▶️</span>
              Study
            </button>
            <button id="deleteDeckBtn" class="btn danger">
              <span>🗑️</span>
              Delete
            </button>
          </div>
        </div>
        <div id="cardList" class="card-list"></div>
      </div>

      <div id="studyView" class="study hidden">
        <div class="study-header">
          <button id="exitStudyBtn" class="btn">
            <span>←</span>
            Back to Editor
          </button>
          <div class="study-controls">
            <button id="shuffleBtn" class="btn">
              <span>🔀</span>
              Shuffle
            </button>
            <span id="progress" class="muted"></span>
          </div>
        </div>

        <div id="studyCard" class="study-card flip" tabindex="0">
          <div class="study-inner">
            <div class="study-front">
              <div class="study-image-wrap"><img id="studyImage" alt="" /></div>
              <div id="studyFront" class="study-face"></div>
            </div>
            <div class="study-back">
              <div id="studyBack" class="study-face"></div>
            </div>
          </div>
        </div>

        <div class="study-actions">
          <button id="prevBtn" class="btn">
            <span>←</span>
            Previous
          </button>
          <button id="flipBtn" class="btn primary">
            <span>🔄</span>
            Flip Card
          </button>
          <button id="nextBtn" class="btn">
            <span>→</span>
            Next
          </button>
          <button id="knownBtn" class="btn success">
            <span>✅</span>
            I Know This
          </button>
          <button id="unknownBtn" class="btn warning">
            <span>❓</span>
            Need Practice
          </button>
        </div>

        <div id="sessionStats" class="muted"></div>
      </div>
    </section>
  </main>

  <template id="cardTemplate">
    <div class="card">
      <div class="card-fields">
        <input class="input front" placeholder="Front (question/prompt)" />
        <textarea class="input back" placeholder="Back (answer/details)"></textarea>
        <div class="image-uploader" data-empty="Drop image here or click">
          <input type="file" accept="image/*" class="file-input" />
          <img class="preview hidden" alt="" />
          <div class="image-actions hidden">
            <button class="btn small replace">Replace</button>
            <button class="btn small danger remove">Remove Image</button>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="btn small danger delete">
          <span>🗑️</span>
          Delete Card
        </button>
      </div>
    </div>
  </template>

  <script src="app.js"></script>
</body>
</html>
```

## app.js
```javascript
// Flashcard App with Image Support (modern UI)
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

const STORAGE_KEY = "flashcard_app_v2";

let state = { decks: [], selectedDeckId: null };
let session = { order: [], index: 0, showBack: false, known: 0, unknown: 0 };

function uid() { return Math.random().toString(36).slice(2, 10); }
function save() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function load() { const raw = localStorage.getItem(STORAGE_KEY); if (raw) state = JSON.parse(raw); }
function ensureSampleData() {
  if (state.decks.length === 0) {
    const d = { id: uid(), name: "Sample Deck", cards: [
      { id: uid(), front: "Capital of France?", back: "Paris", imageDataUrl: "" }
    ]};
    state.decks.push(d); state.selectedDeckId = d.id; save();
  }
}

function getSelectedDeck() { return state.decks.find(d => d.id === state.selectedDeckId); }
function renderDeckList() {
  const ul = $("#deckList"); ul.innerHTML = "";
  state.decks.forEach(d => {
    const li = document.createElement("li");
    li.className = d.id === state.selectedDeckId ? "active" : "";
    li.textContent = d.name;
    li.onclick = () => { state.selectedDeckId = d.id; save(); updateView(); };
    ul.appendChild(li);
  });
}
function renderDeckEditor() {
  const deck = getSelectedDeck();
  if (!deck) { $("#deckEditor").classList.add("hidden"); $("#emptyState").classList.remove("hidden"); return; }
  $("#emptyState").classList.add("hidden"); $("#deckEditor").classList.remove("hidden");
  $("#deckName").value = deck.name;
  const list = $("#cardList"); list.innerHTML = "";
  deck.cards.forEach(card => {
    const tpl = document.querySelector("#cardTemplate");
    const node = tpl.content.firstElementChild.cloneNode(true);
    const front = node.querySelector(".front");
    const back = node.querySelector(".back");
    const uploader = node.querySelector(".image-uploader");
    const fileInput = node.querySelector(".file-input");
    const preview = node.querySelector("img.preview");
    const imageActions = node.querySelector(".image-actions");
    
    front.value = card.front; back.value = card.back;
    
    if (card.imageDataUrl) { 
      preview.src = card.imageDataUrl; 
      preview.classList.remove("hidden"); 
      imageActions.classList.remove("hidden");
      uploader.removeAttribute("data-empty"); 
    }
    
    function onFile(file) {
      if (!file || !file.type.startsWith("image/")) return;
      const reader = new FileReader();
      reader.onload = () => { 
        card.imageDataUrl = reader.result; 
        preview.src = card.imageDataUrl; 
        preview.classList.remove("hidden"); 
        imageActions.classList.remove("hidden");
        uploader.removeAttribute("data-empty"); 
        save(); 
      };
      reader.readAsDataURL(file);
    }
    
    uploader.onclick = () => fileInput.click();
    fileInput.onchange = e => onFile(e.target.files[0]);
    node.querySelector(".replace").onclick = (e) => {
      e.stopPropagation();
      fileInput.click();
    };
    node.querySelector(".remove").onclick = () => {
      card.imageDataUrl = "";
      preview.src = "";
      preview.classList.add("hidden");
      imageActions.classList.add("hidden");
      uploader.setAttribute("data-empty", "Drop image here or click");
      save();
    };
    
    front.oninput = () => { card.front = front.value; save(); };
    back.oninput = () => { card.back = back.value; save(); };
    node.querySelector(".delete").onclick = () => { 
      if (confirm('Are you sure you want to delete this card?')) {
        deck.cards = deck.cards.filter(c => c.id !== card.id); 
        save(); 
        updateView(); 
      }
    };
    
    list.appendChild(node);
  });
}
function updateView() { renderDeckList(); renderDeckEditor(); $("#studyView").classList.add("hidden"); }
function addDeck() { const d = { id: uid(), name: "New Deck", cards: [] }; state.decks.push(d); state.selectedDeckId = d.id; save(); updateView(); }
function addCard() { 
  const deck = getSelectedDeck(); 
  if (!deck) return;
  deck.cards.push({ id: uid(), front: "", back: "", imageDataUrl: "" }); 
  save(); 
  updateView(); 
}
function deleteDeck() { 
  const deck = getSelectedDeck(); 
  if (!deck) return; 
  if (!confirm('Are you sure you want to delete this deck?')) return;
  state.decks = state.decks.filter(d => d.id !== deck.id); 
  state.selectedDeckId = state.decks[0]?.id || null; 
  save(); 
  updateView(); 
}

// Study mode
function startStudy() {
  const deck = getSelectedDeck(); if (!deck || deck.cards.length === 0) return;
  session.order = deck.cards.map((c,i)=>i); session.index=0; session.showBack=false; session.known=0; session.unknown=0;
  $("#deckEditor").classList.add("hidden"); $("#studyView").classList.remove("hidden"); renderStudyCard();
}
function renderStudyCard() {
  const deck = getSelectedDeck(); const card = deck.cards[session.order[session.index]];
  $("#studyFront").textContent = card.front; $("#studyBack").textContent = card.back;
  const img = $("#studyImage"); 
  const imgWrap = img.parentElement;
  if (card.imageDataUrl) { 
    img.src = card.imageDataUrl; 
    imgWrap.style.display="block"; 
  } else { 
    imgWrap.style.display="none"; 
  }
  $("#studyCard").classList.toggle("flipped", session.showBack);
  $("#progress").textContent = `Card ${session.index+1}/${session.order.length}`;
}
function flipCard() { session.showBack=!session.showBack; $("#studyCard").classList.toggle("flipped", session.showBack); }
function nextCard() { if (session.index<session.order.length-1){session.index++; session.showBack=false; renderStudyCard();} }
function prevCard() { if (session.index>0){session.index--; session.showBack=false; renderStudyCard();} }
function markKnown(){session.known++;nextCard();}
function markUnknown(){session.unknown++;nextCard();}

// Events
$("#newDeckBtn").onclick = addDeck;
$("#addCardBtn").onclick = addCard;
$("#deleteDeckBtn").onclick = deleteDeck;
$("#studyBtn").onclick = startStudy;
$("#exitStudyBtn").onclick = ()=>{$("#studyView").classList.add("hidden"); $("#deckEditor").classList.remove("hidden");};
$("#flipBtn").onclick = flipCard;
$("#nextBtn").onclick = nextCard;
$("#prevBtn").onclick = prevCard;
$("#knownBtn").onclick = markKnown;
$("#unknownBtn").onclick = markUnknown;
$("#deckName").oninput = e=>{const d=getSelectedDeck(); if(d){d.name=e.target.value; save(); renderDeckList();}};

// Init
load(); ensureSampleData(); updateView();
```

## Files to keep unchanged:
- `style-fullscreen.css` (alternative style, keep as backup)
- `.gitignore` (if it exists)
- `package-lock.json` (will be generated when you run npm install)

## Installation Instructions:
After updating your GitHub repository with these files, run:
```bash
npm install
npm run dev
```

This will install the http-server dependency and start the development server on port 3000.