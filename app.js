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
    front.value = card.front; back.value = card.back;
    if (card.imageDataUrl) { preview.src = card.imageDataUrl; preview.classList.remove("hidden"); uploader.removeAttribute("data-empty"); }
    function onFile(file) {
      if (!file || !file.type.startsWith("image/")) return;
      const reader = new FileReader();
      reader.onload = () => { card.imageDataUrl = reader.result; preview.src = card.imageDataUrl; preview.classList.remove("hidden"); uploader.removeAttribute("data-empty"); save(); };
      reader.readAsDataURL(file);
    }
    uploader.onclick = () => fileInput.click();
    fileInput.onchange = e => onFile(e.target.files[0]);
    front.oninput = () => { card.front = front.value; save(); };
    back.oninput = () => { card.back = back.value; save(); };
    node.querySelector(".delete").onclick = () => { deck.cards = deck.cards.filter(c => c.id !== card.id); save(); updateView(); };
    list.appendChild(node);
  });
}
function updateView() { renderDeckList(); renderDeckEditor(); $("#studyView").classList.add("hidden"); }
function addDeck() { const d = { id: uid(), name: "New Deck", cards: [] }; state.decks.push(d); state.selectedDeckId = d.id; save(); updateView(); }
function addCard() { const deck = getSelectedDeck(); deck.cards.push({ id: uid(), front: "", back: "", imageDataUrl: "" }); save(); updateView(); }
function deleteDeck() { const deck = getSelectedDeck(); if (!deck) return; state.decks = state.decks.filter(d => d.id !== deck.id); state.selectedDeckId = state.decks[0]?.id || null; save(); updateView(); }

// Study mode
function startStudy() {
  const deck = getSelectedDeck(); if (!deck || deck.cards.length === 0) return;
  session.order = deck.cards.map((c,i)=>i); session.index=0; session.showBack=false; session.known=0; session.unknown=0;
  $("#deckEditor").classList.add("hidden"); $("#studyView").classList.remove("hidden"); renderStudyCard();
}
function renderStudyCard() {
  const deck = getSelectedDeck(); const card = deck.cards[session.order[session.index]];
  $("#studyFront").textContent = card.front; $("#studyBack").textContent = card.back;
  const img = $("#studyImage"); if (card.imageDataUrl) { img.src = card.imageDataUrl; img.style.display="block"; } else { img.style.display="none"; }
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
