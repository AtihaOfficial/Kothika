/* Kothika – From Words to Conversation. Vanilla JS, no backend. */

// ---------- 1. DATA ----------
// w=word, p=pronunciation, pos=part of speech, bn=Bangla, d=definition, syn=synonyms,
// ex=examples, c=conversation {t:situation, l:[[speaker, line]]}, u=Use It In Your Life prompt
const WORDS = [
 {w:"Amicable",p:"/ˈæmɪkəbəl/",pos:"adjective",bn:"বন্ধুত্বপূর্ণ",d:"Friendly and peaceful, especially when people disagree.",syn:["friendly","cordial","peaceful"],
  ex:["They reached an amicable agreement.","The two neighbours have an amicable relationship."],
  c:{t:"Sharing a room with a new roommate",l:[["Rafi","Do you mind if I keep the window open at night?"],["Tania","Not at all. Let's make an amicable schedule for the AC and the window."],["Rafi","Great, I'd like to keep things amicable between us."]]},
  u:"Think of a disagreement you had recently. How could you have made it more amicable?"},
 {w:"Magnanimous",p:"/mæɡˈnænɪməs/",pos:"adjective",bn:"উদারচিত্ত",d:"Generous and forgiving, especially towards a rival or someone less powerful.",syn:["generous","big-hearted","noble"],
  ex:["He was magnanimous in victory.","She made a magnanimous offer to pay for everyone."],
  c:{t:"After a football match",l:[["Sakib","We lost, but you played really well."],["Imran","Thanks! You were magnanimous to share the credit with the whole team."],["Sakib","Winning is nicer when you stay magnanimous."]]},
  u:"Describe a time someone was magnanimous to you. Can you be magnanimous this week?"},
 {w:"Resilient",p:"/rɪˈzɪliənt/",pos:"adjective",bn:"দ্রুত ঘুরে দাঁড়াতে সক্ষম",d:"Able to recover quickly after difficulties or to return to shape.",syn:["tough","adaptable","strong"],
  ex:["Children are often very resilient.","The resilient farmers replanted after the flood."],
  c:{t:"Talking after a bad exam result",l:[["Nila","I failed the physics test. I feel terrible."],["Hasan","You are resilient. Last year you bounced back from a worse result."],["Nila","True. I'll try to be resilient and study differently."]]},
  u:"Name one setback you recovered from. What made you resilient?"},
 {w:"Reluctant",p:"/rɪˈlʌktənt/",pos:"adjective",bn:"অনিচ্ছুক",d:"Unwilling and slow to do something.",syn:["unwilling","hesitant","loath"],
  ex:["She was reluctant to speak in class.","He gave a reluctant smile."],
  c:{t:"Inviting a friend to a presentation",l:[["Mim","Will you present first tomorrow?"],["Arif","I'm reluctant, honestly. I get nervous."],["Mim","Don't be reluctant. I'll practise with you tonight."]]},
  u:"What are you reluctant to do right now? Write one small step to start."},
 {w:"Meticulous",p:"/məˈtɪkjələs/",pos:"adjective",bn:"অতি সতর্ক ও খুঁটিনাটিতে মনোযোগী",d:"Showing great attention to detail; very careful and precise.",syn:["careful","thorough","precise"],
  ex:["He is meticulous about his notes.","The tailor did meticulous work."],
  c:{t:"Checking a group assignment",l:[["Dip","Did you check every reference?"],["Sara","Yes, I'm meticulous about citations."],["Dip","That's why our reports are so good. Thanks for being meticulous."]]},
  u:"Which task in your life deserves a meticulous approach this week?"},
 {w:"Empathetic",p:"/ˌempəˈθetɪk/",pos:"adjective",bn:"সহমর্মী",d:"Able to understand and share another person's feelings.",syn:["understanding","sensitive","caring"],
  ex:["An empathetic teacher listens first.","She gave an empathetic reply."],
  c:{t:"A friend misses home",l:[["Riya","I miss my family so much in the hostel."],["Tuhin","I understand. I felt the same in my first month."],["Riya","Thanks for being so empathetic."]]},
  u:"Next time a friend is upset, try one empathetic sentence before giving advice."},
 {w:"Versatile",p:"/ˈvɜːrsətaɪl/",pos:"adjective",bn:"বহুমুখী",d:"Able to adapt to many different functions or activities.",syn:["flexible","adaptable","all-round"],
  ex:["A phone is a versatile tool.","He is a versatile actor."],
  c:{t:"Buying a bag",l:[["Shop","This bag works for college and travel."],["Anika","It looks versatile. Can it fit a laptop too?"],["Shop","Yes, that's why it's our most versatile bag."]]},
  u:"What is the most versatile thing you own? Explain its uses to a friend."},
 {w:"Inevitable",p:"/ɪnˈevɪtəbəl/",pos:"adjective",bn:"অনিবার্য",d:"Certain to happen; unable to be avoided.",syn:["unavoidable","certain","inescapable"],
  ex:["Change is inevitable.","With so much traffic, delays were inevitable."],
  c:{t:"Planning for the monsoon",l:[["Babu","The road will flood again, won't it?"],["Mina","It's inevitable every July. Let's leave early."],["Babu","Good idea. Some delays are inevitable."]]},
  u:"What is one inevitable change coming in your life? How can you prepare?"},
 {w:"Ambiguous",p:"/æmˈbɪɡjuəs/",pos:"adjective",bn:"দ্ব্যর্থক বা অস্পষ্ট",d:"Having more than one possible meaning; unclear.",syn:["unclear","vague","uncertain"],
  ex:["The instructions were ambiguous.","Her ambiguous reply confused us."],
  c:{t:"Reading the exam question",l:[["Joy","What does question 3 mean? It seems ambiguous."],["Teacher","Which part is unclear?"],["Joy","The word 'discuss' is ambiguous. Do you want pros and cons?"]]},
  u:"Rewrite one ambiguous message you sent recently so it is clear."},
 {w:"Grateful",p:"/ˈɡreɪtfəl/",pos:"adjective",bn:"কৃতজ্ঞ",d:"Feeling or showing thanks for something received.",syn:["thankful","appreciative","obliged"],
  ex:["I'm grateful for your help.","She was grateful for the scholarship."],
  c:{t:"Thanking a senior",l:[["Naim","Here are the notes you asked for."],["Lima","Thank you so much! I'm really grateful."],["Naim","Anytime. I'm grateful you helped me last term too."]]},
  u:"Tell someone today that you are grateful for them, and why."},
 {w:"Assertive",p:"/əˈsɜːrtɪv/",pos:"adjective",bn:"দৃঢ়প্রত্যয়ী",d:"Confident and clear in stating your needs or opinions, without being aggressive.",syn:["confident","firm","self-assured"],
  ex:["Be assertive, not rude.","He is assertive in meetings."],
  c:{t:"Group project workload",l:[["Pia","I did most of the work last time."],["Zim","Then be assertive and tell the group."],["Pia","You're right. I'll politely but assertively ask for a fair split."]]},
  u:"Practise one assertive sentence to politely say no to something this week."},
 {w:"Genuine",p:"/ˈdʒenjuɪn/",pos:"adjective",bn:"খাঁটি বা আন্তরিক",d:"Real, honest and sincere; not fake.",syn:["authentic","sincere","real"],
  ex:["She showed genuine interest.","Is this a genuine leather wallet?"],
  c:{t:"Compliments between friends",l:[["Ema","Your presentation was fantastic!"],["Rony","Was that genuine, or are you just being nice?"],["Ema","Totally genuine. I learned a lot."]]},
  u:"Give one genuine compliment today and notice the reaction."},
 {w:"Hesitant",p:"/ˈhezɪtənt/",pos:"adjective",bn:"দ্বিধাগ্রস্ত",d:"Slow to act or speak because you are unsure.",syn:["uncertain","unsure","doubtful"],
  ex:["He was hesitant to ask for help.","She gave a hesitant answer."],
  c:{t:"Applying for an internship",l:[["Kabir","Are you going to apply?"],["Shuvo","I'm hesitant. My CV is not strong yet."],["Kabir","Don't be hesitant. Apply, and we'll improve it together."]]},
  u:"What decision are you hesitant about? List one risk and one benefit."},
 {w:"Compassionate",p:"/kəmˈpæʃənət/",pos:"adjective",bn:"সহানুভূতিশীল ও দয়ালু",d:"Feeling concern for others' suffering and wanting to help.",syn:["kind","caring","merciful"],
  ex:["A compassionate nurse comforted him.","She is compassionate towards animals."],
  c:{t:"Helping a classmate who lost a family member",l:[["Eva","Should I call her today?"],["Omi","Yes. A compassionate message can mean a lot."],["Eva","I'll be compassionate and just listen."]]},
  u:"Do one compassionate act today, however small."},
 {w:"Accomplish",p:"/əˈkɑːmplɪʃ/",pos:"verb",bn:"সম্পন্ন করা বা অর্জন করা",d:"To succeed in finishing or achieving something.",syn:["achieve","complete","fulfil"],
  ex:["She accomplished her goal.","What do you hope to accomplish today?"],
  c:{t:"Planning a study day",l:[["Rimi","What do you want to accomplish today?"],["Fuad","Finish two chapters and revise notes."],["Rimi","Nice. If we accomplish that, we deserve tea."]]},
  u:"Write three things you want to accomplish tomorrow."}
];
// Second conversation for each word. Used in the quiz so you meet the word in a NEW situation.
const CONVOS2 = {
  Amicable:{t:"Settling a group-project disagreement",l:[["Lina","We disagree on the topic, but let's keep this amicable."],["Sumon","Agreed. Shall we vote and move on?"],["Lina","Yes, an amicable vote is fair."]]},
  Magnanimous:{t:"After a debate competition",l:[["Opu","You argued better than me today."],["Dina","That's magnanimous of you to say so."],["Opu","I'd rather be magnanimous than bitter."]]},
  Resilient:{t:"After an internship rejection",l:[["Sajid","I didn't get the internship."],["Mou","You're resilient. You'll find another one."],["Sajid","I hope so. I'm trying to stay resilient."]]},
  Reluctant:{t:"Asking a teacher for help",l:[["Tonu","Why didn't you ask the teacher?"],["Emu","I felt reluctant. I thought it was a silly question."],["Tonu","Don't feel reluctant. Teachers like questions."]]},
  Meticulous:{t:"Packing for a trip",l:[["Nabil","You made a packing checklist?"],["Sonia","I'm meticulous when I travel."],["Nabil","Your meticulous planning saved us last time."]]},
  Empathetic:{t:"A classmate stressed before finals",l:[["Ayan","I can't sleep before finals."],["Rumi","That sounds exhausting. I'd feel the same."],["Ayan","You're very empathetic. Thank you."]]},
  Versatile:{t:"Choosing a kitchen tool",l:[["Nusrat","Take this pan. It's versatile."],["Hridoy","Can I bake and fry in it?"],["Nusrat","Yes, it's a truly versatile pan."]]},
  Inevitable:{t:"Exam week",l:[["Tipu","Exam stress feels inevitable."],["Rima","It is inevitable, but we can plan for it."],["Tipu","Then let's start the plan today."]]},
  Ambiguous:{t:"Reading a confusing text message",l:[["Shila","He wrote 'maybe later'. It's so ambiguous."],["Ron","Just ask him directly."],["Shila","Good idea. I dislike ambiguous answers."]]},
  Grateful:{t:"After a teacher's feedback",l:[["Pavel","Sir, your feedback helped me a lot."],["Sir","I'm glad it was useful."],["Pavel","I'm truly grateful for your time."]]},
  Assertive:{t:"Returning a broken phone",l:[["Friend","Don't just accept the shop's answer."],["Tara","I'll be assertive but polite."],["Friend","Good. Assertive people usually get fair results."]]},
  Genuine:{t:"Buying a watch",l:[["Rana","Is this watch genuine?"],["Seller","Yes, and it comes with a genuine warranty."],["Rana","Then I'll take it."]]},
  Hesitant:{t:"First day at the English club",l:[["Mita","Why are you so quiet?"],["Zayed","I'm hesitant to speak. My grammar isn't perfect."],["Mita","Don't be hesitant. Mistakes help us learn."]]},
  Compassionate:{t:"Volunteering at an animal shelter",l:[["Nahid","The shelter needs volunteers."],["Bithi","I'll join. The staff there are so compassionate."],["Nahid","They really are compassionate."]]},
  Accomplish:{t:"Weekend check-in",l:[["Selim","What did you accomplish this week?"],["Rubi","I finished my report."],["Selim","Great. Let's accomplish even more next week."]]}
};

// Curated phrases (hand-written by Kothika; NOT from a dictionary API). To add one, copy an entry and edit it.
// The full phrase must appear in the dialogue exactly as written in w (used for quiz blanks).
const PHRASES = [
 {w:"give it a shot",kind:"phrase",cat:"Everyday expression",d:"To try something, even if you are not sure you will succeed.",bn:"চেষ্টা করে দেখা",tone:"Informal, friendly",usage:"Used to encourage someone to try something new, or to say you will try it yourself.",
  ex:["I've never cooked biryani, but I'll give it a shot.","Why not give it a shot and apply?"],similar:["give it a try","have a go"],
  c:{t:"Joining a club",l:[["Mim","Are you going to try out for the debate club?"],["Arif","I'm nervous, but I'll give it a shot."],["Mim","Great! Nobody gets better without trying."]]},u:"What is one thing you could give a shot this week?"},
 {w:"on the same page",kind:"phrase",cat:"Everyday expression",d:"Sharing the same understanding or opinion about something.",bn:"একই বোঝাপড়া বা মতের ওপর থাকা",tone:"Informal to neutral",usage:"Common at work or in group projects to check that everyone understands the plan.",
  ex:["Before we start, let's make sure we're on the same page.","The team finally got on the same page about the deadline."],similar:["in agreement","see eye to eye"],
  c:{t:"Group project meeting",l:[["Sara","Before we split the tasks, are we all on the same page?"],["Dip","I think so. I'm doing slides, you're doing the report."],["Sara","Exactly. Now we're on the same page."]]},u:"Before your next group task, ask: are we on the same page?"},
 {w:"put up with",kind:"phrase",cat:"Phrasal verb",d:"To accept or tolerate something unpleasant without complaining.",bn:"সহ্য করা বা মেনে নেওয়া",tone:"Neutral, conversational",usage:"Used for noise, behaviour or situations you dislike but accept. It is followed by a noun or -ing form.",
  ex:["I can't put up with this noise any longer.","She puts up with a long commute every day."],similar:["tolerate","bear","stand"],
  c:{t:"In a noisy hostel",l:[["Riya","How do you study with that noise outside?"],["Tuhin","I have to put up with it. Exams are close."],["Riya","I couldn't put up with it for a day!"]]},u:"What is one thing you put up with that you could change?"},
 {w:"come across",kind:"phrase",cat:"Phrasal verb",d:"To find or meet something or someone by chance. It can also mean to seem a certain way.",bn:"হঠাৎ কিছু বা কারও সঙ্গে দেখা পাওয়া",tone:"Neutral",usage:"Also used for impressions: \"He comes across as shy.\"",
  ex:["I came across my old diary yesterday.","She comes across as very confident."],similar:["run into","stumble upon"],
  c:{t:"Cleaning a bookshelf",l:[["Nila","Where did you get this old novel?"],["Hasan","I always come across forgotten books when I clean."],["Nila","Lucky you. I never come across anything good."]]},u:"What is the most interesting thing you came across this week?"},
 {w:"break the ice",kind:"phrase",cat:"Idiom",d:"To say or do something that makes people feel relaxed when they first meet.",bn:"অচেনা পরিবেশে আড়ষ্টতা কাটিয়ে আলাপ শুরু করা",tone:"Informal, widely used",usage:"Used for first meetings, parties and new classes.",
  ex:["He told a joke to break the ice.","A simple hello can break the ice."],similar:["start a conversation","warm things up"],
  c:{t:"First day of class",l:[["Emu","Everyone is so quiet. Someone should break the ice."],["Tonu","I'll ask about their favourite movie."],["Emu","Perfect. That will break the ice."]]},u:"Think of one question you could ask to break the ice with a new person."},
 {w:"once in a blue moon",kind:"phrase",cat:"Idiom",d:"Very rarely; almost never.",bn:"কালেভদ্রে",tone:"Informal",usage:"Describes something that happens very seldom.",
  ex:["We eat out once in a blue moon.","He calls me once in a blue moon."],similar:["rarely","hardly ever","seldom"],
  c:{t:"Talking about a cousin",l:[["Pia","Do you see your cousin often?"],["Zim","Only once in a blue moon. He lives abroad."],["Pia","I see my cousins once in a blue moon too."]]},u:"What do you do only once in a blue moon?"},
 {w:"I see where you're coming from",kind:"phrase",cat:"Conversational phrase",d:"A polite way of saying you understand someone's point of view, even if you may not fully agree.",bn:"আপনি কী বলতে চাইছেন তা আমি বুঝতে পারছি",tone:"Polite, conversational",usage:"Often used before politely giving a different opinion.",
  ex:["I see where you're coming from, but I'd choose another plan."],similar:["I understand your point","I get what you mean"],
  c:{t:"Choosing a project topic",l:[["Sumon","I think we should pick the easiest topic."],["Lina","I see where you're coming from. But a harder topic may impress the teacher."],["Sumon","Fair point. Let's talk about it."]]},u:"Practise using it before disagreeing politely with someone."},
 {w:"That makes sense",kind:"phrase",cat:"Conversational phrase",d:"Used to show that you understand an explanation or agree that it is logical.",bn:"কথাটা যুক্তিসঙ্গত, বুঝতে পারলাম",tone:"Informal to neutral",usage:"A short reply that shows you are following someone's reasoning.",
  ex:["You were tired, so that makes sense.","Oh, that makes sense now!"],similar:["I get it","That's logical"],
  c:{t:"Explaining a late arrival",l:[["Rafi","I'm late because the bridge was closed."],["Tania","Ah, that makes sense. Traffic must be terrible."],["Rafi","Exactly. I left early, but it made no difference."]]},u:"Use it today when someone explains something to you."}
];
// ---------- 2. STATE & STORAGE ----------
const KEY = "kothika_v1";
const DAY = 86400000;
const INTERVALS = [1, 3, 7, 14, 30]; // days between reviews by stage
let state = load();
function load() {
  try { return JSON.parse(localStorage.getItem(KEY)) || fresh(); } catch (e) { return fresh(); }
}
function fresh() { return { saved: {}, answered: 0, correct: 0, streak: 0, lastDay: "" }; }
function save() { localStorage.setItem(KEY, JSON.stringify(state)); }
const norm = s => s.trim().replace(/[’‘]/g, "'").replace(/\s+/g, " ").replace(/[.?!,]+$/, "").toLowerCase();
const find = n => { // searches curated words, curated phrases, then saved lookups (case/space-insensitive)
  const k = norm(n), same = x => x && x.w.toLowerCase() === k;
  return WORDS.find(same) || PHRASES.find(same) || Object.values(state.saved).map(s => s.data).find(same);
};
const today = () => new Date().toDateString();
const $ = id => document.getElementById(id);
const dueList = () => Object.values(state.saved).filter(s => s.next <= Date.now());

// ---------- 3. TABS ----------
function show(tab) {
  document.querySelectorAll(".panel").forEach(p => p.classList.toggle("hidden", p.id !== tab));
  document.querySelectorAll(".tab").forEach(b => b.classList.toggle("active", b.dataset.tab === tab));
  if (tab === "saved") renderSaved();
  if (tab === "quiz") renderRevision();
  if (tab === "progress") renderProgress();
  if (tab === "home") renderHome();
}
$("nav").onclick = e => { if (e.target.closest(".tab")) show(e.target.closest(".tab").dataset.tab); };
function updateBadges() {
  $("savedCount").textContent = Object.keys(state.saved).length;
  const n = dueList().length;
  $("dueCount").textContent = n;
  $("dueCount").style.display = n ? "" : "none"; // hide the badge when nothing is due
  renderReminder();
}

// ---------- 4. SEARCH & WORD CARD ----------
const EXAMPLES = ["serendipity", "give it a shot", "put up with", "ephemeral", "break the ice", "once in a blue moon",
  "come across", "thrive", "that makes sense", "on the same page", "I see where you're coming from", "candid", "nostalgia", "procrastinate"];
function renderChips() { // a few random suggestions: examples only, not the full library
  const pick = EXAMPLES.slice().sort(() => Math.random() - .5).slice(0, 5);
  $("chips").innerHTML = `<span class="text-xs text-stone-500">Try:</span>` + pick.map(w => `<button type="button" class="chip" data-w="${w}">${w}</button>`).join("");
}
renderChips();
$("chips").onclick = e => { const w = e.target.dataset.w; if (w) { $("searchInput").value = w; showWord(w); } };
$("searchForm").onsubmit = e => { e.preventDefault(); showWord($("searchInput").value); };

function speak(text) {
  if (!("speechSynthesis" in window)) return alert("Speech is not supported in this browser.");
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text); u.lang = "en-US"; u.rate = .9;
  speechSynthesis.speak(u);
}
const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");                       // safe text for RegExp
const clean = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); // safe text for HTML
function highlight(t, w) { return t.replace(new RegExp(esc(w), "gi"), m => `<mark>${m}</mark>`); }
const msg = t => `<div class="card text-center">${t}</div>`;

// --- live dictionary lookup (single words) ---

async function getRes(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);

  try {
    return await fetch(url, {
      signal: controller.signal
    });
  } finally {
    clearTimeout(timer);
  }
}

const plain = h =>
  clean(
    new DOMParser()
      .parseFromString(String(h || ""), "text/html")
      .body.textContent.trim()
  );

async function fetchDictApi(q) {
  const url =
    "https://api.dictionaryapi.dev/api/v2/entries/en/" +
    encodeURIComponent(q);

  const r = await getRes(url);

  if (r.status === 404) return null;
  if (r.status === 429) throw new Error("rate");
  if (!r.ok) throw new Error("http " + r.status);

  const data = await r.json();
  const e = data[0];
  const meanings = (e && e.meanings) || [];

  if (!meanings.length) return null;

  const definitions = meanings.flatMap(
    m => m.definitions || []
  );

  const unique = items =>
    [...new Set(items)].slice(0, 8).map(clean);

  const phonetics = e.phonetics || [];
  const phoneticAudio = phonetics.find(p => p.audio);

  let audio = phoneticAudio ? phoneticAudio.audio : "";

  if (audio && audio.startsWith("//")) {
    audio = "https:" + audio;
  }

  return {
    w: clean(e.word),
    kind: "word",
    src: "api",
    pos: clean(meanings[0].partOfSpeech || ""),
    p: clean(
      e.phonetic ||
      (phonetics.find(p => p.text) || {}).text ||
      ""
    ),
    audio,
    bn: "",
    d: clean(
      (meanings[0].definitions[0] || {}).definition || ""
    ),
    ex: definitions
      .map(d => d.example)
      .filter(Boolean)
      .slice(0, 3)
      .map(clean),
    syn: unique(
      meanings.flatMap(m => [
        ...(m.synonyms || []),
        ...(m.definitions || []).flatMap(
          d => d.synonyms || []
        )
      ])
    ),
    ant: unique(
      meanings.flatMap(m => [
        ...(m.antonyms || []),
        ...(m.definitions || []).flatMap(
          d => d.antonyms || []
        )
      ])
    )
  };
}

async function fetchWiki(q) {
  const url =
    "https://en.wiktionary.org/api/rest_v1/page/definition/" +
    encodeURIComponent(q);

  const r = await getRes(url);

  if (r.status === 404) return null;
  if (r.status === 429) throw new Error("rate");
  if (!r.ok) throw new Error("http " + r.status);

  const data = await r.json();
  const english = data.en || [];

  const definitions = english
    .flatMap(entry =>
      (entry.definitions || []).map(d => ({
        pos: entry.partOfSpeech,
        definition: d.definition,
        examples: d.examples || []
      }))
    )
    .filter(item => item.definition);

  if (!definitions.length) return null;

  const first = definitions[0];

  return {
    w: clean(q),
    kind: q.includes(" ") ? "phrase" : "word",
    cat: plain(first.pos || "Expression"),
    src: "wiki",
    pos: plain(first.pos || ""),
    p: "",
    audio: "",
    bn: "",
    d: plain(first.definition),
    ex: definitions
      .flatMap(item => item.examples)
      .slice(0, 3)
      .map(plain)
      .filter(Boolean)
  };
}

async function fetchWord(q) {
  let lastError = null;

  try {
    const result = await fetchDictApi(q);
    if (result) return result;
  } catch (e) {
    lastError = e;
    console.warn("Dictionary API failed:", e);
  }

  try {
    const result = await fetchWiki(q);
    if (result) return result;
  } catch (e) {
    lastError = lastError || e;
    console.warn("Wiktionary failed:", e);
  }

  if (lastError) throw lastError;

  return null;
}

// --- Bengali via a free machine-translation API (optional; returns "" on any problem) ---
async function fetchBn(text) {
  try {
    const r = await fetch("https://api.mymemory.translated.net/get?q=" + encodeURIComponent(text) + "&langpair=en|bn");
    if (!r.ok) return "";
    const j = await r.json(), t = j.responseData && j.responseData.translatedText;
    return (+j.responseStatus === 200 && t && t.toLowerCase() !== text.toLowerCase()) ? clean(t) : "";
  } catch (e) { return ""; }
}
// --- pronunciation (IPA) from Wiktionary when the main lookup didn't provide one ---
async function fetchIpa(word) {
  try {
    const r = await getRes("https://en.wiktionary.org/w/api.php?action=parse&prop=wikitext&format=json&origin=*&page=" + encodeURIComponent(word));
    if (!r.ok) return "";
    const j = await r.json(), t = (j.parse && j.parse.wikitext && j.parse.wikitext["*"]) || "";
    const m = t.match(/\{\{IPA\|en\|([^|}]+)/);
    return m ? clean(m[1].trim()) : "";
  } catch (e) { return ""; }
}

async function fetchAIConversation(x) {
  try {
    const response = await fetch(
      "https://kothika-conversations.m-zannat-atiha.workers.dev/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          word: x.w,
          definition: x.d || ""
        })
      }
    );

    if (!response.ok) {
      throw new Error("Conversation request failed");
    }

    const conversation = await response.json();

    if (conversation.t && Array.isArray(conversation.l)) {
      x.c = conversation;
    }
  } catch (error) {
    console.warn("AI conversation unavailable:", error);
  }
}


let lookupId = 0;
async function showWord(q) {
  const id = ++lookupId, out = $("result");
  q = norm(q || "");
  if (!q) { out.innerHTML = msg("Type a word or phrase to search."); return; }
  if (q.length > 60 || !/^[a-z][a-z\s'\-]*$/.test(q)) { out.innerHTML = msg("Please enter an English word or phrase (letters only, up to 60 characters)."); return; }
  let x = find(q);
  if (!x) {
    out.innerHTML = msg(`Looking up “${q}”…`);
    try { x = await fetchWord(q); }
   catch (e) {
  if (id !== lookupId) return;

  console.error("Lookup failed:", e);

  out.innerHTML = msg(
    e.message === "rate"
      ? "The dictionary services are busy right now. Please wait a minute and try again."
      : "Neither dictionary service responded. Check your internet connection and try again. Curated words and phrases still work offline."
  );

  return;
}
    if (id !== lookupId) return;
    if (!x) {
      out.innerHTML = msg(`<p class="text-lg mb-1">No result for “${q}”.</p><p class="text-sm text-stone-500">Check the spelling or try a simpler form. The dictionary service handles single words well, but Kothika's phrase library is small and hand-written, so many idioms and phrasal verbs aren't available yet. Try one of the suggestions above.</p>`);
      return;
    }
    
x.bn = await fetchBn(x.w);
x.bnAuto = !!x.bn;
if (x.kind === "word" && !x.p) x.p = await fetchIpa(x.w);

if (!x.c) {
  await fetchAIConversation(x);
}

    if (id !== lookupId) return;
  }
  renderEntry(x);
}

function renderEntry(x) {
  const isPhrase = x.kind === "phrase", saved = Object.keys(state.saved).some(k => k.toLowerCase() === x.w.toLowerCase());
  const meta = isPhrase ? x.cat : [x.p, x.pos].filter(Boolean).join(" · ");
  const list = (t, a) => a && a.length ? `<p class="mt-2 text-sm"><b>${t}:</b> ${a.join(", ")}</p>` : "";
  const canSpeak = x.audio || "speechSynthesis" in window;
  $("result").innerHTML = `
  <div class="card">
    <div class="flex flex-wrap items-start justify-between gap-2">
      <div><h2 class="text-3xl font-bold text-teal-800">${x.w}</h2>${meta ? `<p class="text-stone-500"><i>${meta}</i></p>` : ""}</div>
      <div class="flex gap-2">
        ${canSpeak ? `<button id="speakBtn" class="border border-teal-700 text-teal-800 px-3 py-2 rounded-lg">🔊 Listen</button>` : ""}
        <button id="saveBtn" class="px-3 py-2 rounded-lg text-white ${saved ? "bg-stone-400" : "bg-amber-500 hover:bg-amber-600"}" ${saved ? "disabled" : ""}>${saved ? "✓ Saved" : "＋ Save"}</button>
      </div>
    </div>
    <span class="srcbadge">${x.src === "api" ? "Dictionary lookup (dictionaryapi.dev)" : x.src === "wiki" ? "Wiktionary lookup" : "Kothika library"}</span>
    <p class="mt-3 text-lg">${x.d}</p>
    ${x.bn ? `<p class="mt-1 text-xl text-amber-700">${x.bn}</p>${x.bnAuto ? `<p class="text-xs text-stone-500">Auto-translated, so it may not be exact.</p>` : ""}` : ""}
    ${x.tone ? `<p class="mt-2 text-sm"><b>Tone:</b> ${x.tone}</p>` : ""}
    ${x.usage ? `<p class="mt-1 text-sm"><b>How it's used:</b> ${x.usage}</p>` : ""}
    ${list("Synonyms", x.syn)}${list("Antonyms", x.ant)}${list("Similar expressions", x.similar)}
    ${x.ex && x.ex.length ? `<ul class="mt-3 list-disc pl-5 text-stone-700">${x.ex.map(s => `<li>${highlight(s, x.w)}</li>`).join("")}</ul>` : ""}
  </div>
  ${x.c ? `<div class="card"><h3 class="font-semibold text-teal-800 mb-3">💬 In conversation: ${x.c.t}</h3>
    <div class="space-y-2">${x.c.l.map((l, i) => `<div class="flex"><div class="bubble ${i % 2 ? "b" : "a"}"><div class="text-xs text-stone-500">${l[0]}</div>${highlight(l[1], x.w)}</div></div>`).join("")}</div></div>` : ""}
  <div class="card bg-teal-50"><h3 class="font-semibold text-teal-800">🌱 Use it in your life</h3>
    <p class="mt-1">${x.u || `Write one sentence using “${x.w}” about your own day.`}</p></div>`;
  if ($("speakBtn")) $("speakBtn").onclick = () => { if (x.audio) new Audio(x.audio).play().catch(() => speak(x.w)); else speak(x.w); };
  $("saveBtn").onclick = () => saveWord(x);
}

function makeSavedWord(w) {
  return { word: w, savedAt: Date.now(), stage: 0, next: Date.now(), correct: 0, wrong: 0, last: null };
}
// Saves words AND phrases into the same state.saved list (no second system).
function saveWord(x) {
  if (typeof x === "string") x = find(x);
  if (!x) return;
  const dup = Object.keys(state.saved).some(k => k.toLowerCase() === x.w.toLowerCase());
  if (!dup) {
    const s = makeSavedWord(x.w);
    if (!WORDS.includes(x) && !PHRASES.includes(x)) s.data = x; // keep a copy of live-lookup entries so they can be reviewed
    state.saved[x.w] = s; save(); updateBadges();
  }
  renderEntry(x);
}
// ---------- 5. SAVED WORDS ----------
function renderSaved() {
  const list = Object.values(state.saved);
  if (!list.length) { $("saved").innerHTML = `<div class="card text-center">No saved items yet. Search a word or phrase and press "Save".</div>`; return; }
  $("saved").innerHTML = list.map(s => {
    const x = find(s.word) || { w: s.word, bn: "" }, due = s.next <= Date.now();
    const tag = x.kind === "phrase" ? x.cat : (x.pos || "word");
    return `<div class="card flex flex-wrap items-center justify-between gap-2">
      <div><b class="text-lg text-teal-800">${x.w}</b> <span class="tag">${tag}</span> <span class="text-amber-700">${x.bn || ""}</span>
      <div class="text-sm text-stone-500">Level ${s.stage}/5 · ${due ? "Due for review now" : "Next review: " + new Date(s.next).toLocaleDateString()}</div></div>
      <div class="flex gap-2"><button class="border px-3 py-1 rounded-lg" data-w="${s.word}" onclick="openWord(this.dataset.w)">View</button>
      <button class="border border-red-300 text-red-600 px-3 py-1 rounded-lg" data-w="${s.word}" onclick="removeWord(this.dataset.w)">Remove</button></div></div>`;
  }).join("");
}
function openWord(w) { show("search"); $("searchInput").value = w; showWord(w); }
function removeWord(w) { delete state.saved[w]; save(); updateBadges(); renderSaved(); }

// ---------- 6. DAILY RECALL QUIZ ----------
let queue = [], qi = 0, practice = false, session = { ok: 0, n: 0 };
function startQuiz(forcePractice) {
  practice = !!forcePractice;
  const all = Object.values(state.saved);
  queue = (practice ? all : dueList()).sort(() => Math.random() - .5);
  qi = 0; session = { ok: 0, n: 0 };
  if (!all.length) { $("quiz").innerHTML = `<div class="card text-center">Save some words first, then come back to test your memory.</div>`; return; }
  if (!queue.length) { $("quiz").innerHTML = `<div class="card text-center"><p class="text-lg">🎉 Nothing is due right now.</p><p class="text-stone-500 my-2">Spaced review means words come back after 1, 3, 7, 14 and 30 days.</p><button class="bg-teal-700 text-white px-4 py-2 rounded-lg" onclick="startQuiz(true)">Practise anyway</button></div>`; return; }
  nextQuestion();
}
function pick3(correct) {
  const src = correct.kind === "phrase" ? PHRASES : WORDS;
  const others = src.filter(x => x.w !== correct.w).sort(() => Math.random() - .5).slice(0, 3);
  return [correct, ...others].sort(() => Math.random() - .5);
}
function bubbles(convo, w, blank) {
  return convo.l.map((l, i) => {
    const text = blank ? l[1].replace(new RegExp(esc(w), "gi"), "<b>_____</b>") : highlight(l[1], w);
    return `<div class="bubble ${i % 2 ? "b" : "a"} mb-2"><div class="text-xs text-stone-500">${l[0]}</div>${text}</div>`;
  }).join("");
}
function nextQuestion() {
  if (qi >= queue.length) return finishQuiz();
  const s = queue[qi], x = find(s.word), opts = pick3(x);
  // Even stages: NEW conversation with a blank. Odd stages: definition recall.
  let prompt;
    if (s.stage % 2 === 0 && (CONVOS2[x.w] || x.c)) {
    const c2 = CONVOS2[x.w] || x.c;
    prompt = `<p class="mb-1 font-semibold">Which word completes this conversation?</p>
      <p class="text-sm text-stone-500 mb-3">New situation: ${c2.t}</p>${bubbles(c2, x.w, true)}`;
  } else {
    prompt = `<p class="mb-3 font-semibold">Which word or phrase matches this meaning?</p><p class="text-lg mb-2">${x.d}</p><p class="text-amber-700">${x.bn}</p>`;
  }
  $("quiz").innerHTML = `<div class="card">
    <p class="text-sm text-stone-500 mb-2">Question ${qi + 1} of ${queue.length}${practice ? " · practice mode" : ""}</p>
    ${prompt}
    <div class="mt-4">${opts.map(o => `<button class="opt" data-a="${o.w}">${o.w}</button>`).join("")}</div>
    <div id="fb"></div></div>`;
  document.querySelectorAll(".opt").forEach(b => b.onclick = () => answer(b, x, s));
}
function answer(btn, x, s) {
  const wasConvo = s.stage % 2 === 0 && !!(CONVOS2[x.w] || x.c);// check before the stage changes below
  const ok = btn.dataset.a === x.w;
  document.querySelectorAll(".opt").forEach(b => { b.disabled = true; if (b.dataset.a === x.w) b.classList.add("right"); });
  if (!ok) btn.classList.add("wrong");
  state.answered++; session.n++;
  if (ok) { state.correct++; session.ok++; }
  if (!practice) {
    s.last = Date.now();
    if (ok) { s.correct++; s.stage = Math.min(s.stage + 1, 5); s.next = Date.now() + INTERVALS[Math.min(s.stage, 5) - 1] * DAY; }
    else { s.wrong++; s.stage = Math.max(0, s.stage - 1); s.next = Date.now() + DAY; }
  }
  save(); updateBadges();
  $("fb").innerHTML = `<p class="mt-3 ${ok ? "text-green-700" : "text-red-600"} font-semibold">${ok ? "Correct!" : "Not quite – it was " + x.w + "."}</p>
    <p class="text-sm text-stone-600">${x.d}</p>
    ${wasConvo ? `<div class="mt-3">${bubbles(CONVOS2[x.w] || x.c, x.w, false)}</div>` : ""}
    <button class="mt-3 bg-teal-700 text-white px-4 py-2 rounded-lg" id="nextBtn">${qi + 1 >= queue.length ? "Finish" : "Next"}</button>`;
  $("nextBtn").onclick = () => { qi++; nextQuestion(); };
}
function finishQuiz() {
  if (!practice && state.lastDay !== today()) {
    const yesterday = new Date(Date.now() - DAY).toDateString();
    state.streak = state.lastDay === yesterday ? state.streak + 1 : 1;
    state.lastDay = today(); save();
  }
  $("quiz").innerHTML = `<div class="card text-center"><h2 class="text-2xl font-bold text-teal-800">Session complete</h2>
    <p class="text-lg my-2">You got ${session.ok} of ${session.n} right.</p>
    <p class="text-stone-500">🔥 Streak: ${state.streak} day(s)</p></div>`;
  toast("Review complete – nice work!");
}


 // ---------- 7. PROGRESS ----------
function renderProgress() {
  const list = Object.values(state.saved);
  const mastered = list.filter(s => s.stage >= 5).length;
  const acc = state.answered
    ? Math.round(state.correct / state.answered * 100)
    : 0;

  const stat = (n, l) => `
    <div class="card text-center">
      <div class="text-3xl font-bold text-teal-800">${n}</div>
      <div class="text-sm text-stone-500">${l}</div>
    </div>`;

  $("progress").innerHTML = `
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
      ${stat(list.length, "Words saved")}
      ${stat(mastered, "Mastered")}
      ${stat(dueList().length, "Due today")}
      ${stat(acc + "%", "Quiz accuracy")}
      ${stat(state.answered, "Questions answered")}
      ${stat("🔥 " + state.streak, "Day streak")}
    </div>

    <button class="text-sm text-red-600 underline"
      onclick="if(confirm('Delete all progress?')) {
        state = fresh();
        save();
        updateBadges();
        renderProgress();
      }">
      Reset all data
    </button>`;
}

// ---------- 9. REMINDERS & DAILY REVISION ----------
const NKEY = "kothika_notified_day"; // remembers the last day we sent a notification

function nextDueText() {
  const times = Object.values(state.saved).map(s => s.next);
  if (!times.length) return "";
  return new Date(Math.min(...times)).toLocaleString([], { dateStyle: "medium", timeStyle: "short" });
}

// Banner on the Search (home) page
function renderReminder() {
  const el = $("reminder");
  if (!el) return;
  const n = dueList().length;
  if (!Object.keys(state.saved).length) { el.innerHTML = ""; return; }
  el.innerHTML = n
    ? `<div class="card flex flex-wrap items-center justify-between gap-3">
         <div><b class="text-lg">🔔 ${n} word${n > 1 ? "s" : ""} due for review today</b>
         <div class="text-sm text-stone-500">Reviewing now keeps them in your memory.</div></div>
         <button class="bg-teal-700 text-white px-4 py-2 rounded-lg" onclick="show('quiz')">Review now</button>
       </div>`
    : `<div class="card text-sm text-stone-500">✅ You're all caught up. Next review: ${nextDueText()}</div>`;
}

// Daily Revision screen (shown when you open the Daily Recall tab)
function renderRevision() {
  const all = Object.values(state.saved);
  const due = dueList().sort((a, b) => a.next - b.next);
  let html = `<div class="card"><h2 class="text-xl font-bold mb-2">Daily Revision</h2>`;
  if (!all.length) {
    html += `<p class="text-stone-500">Save some words first, then they will appear here when it is time to review them.</p>`;
  } else if (!due.length) {
    html += `<p class="text-lg">🎉 No words are due right now.</p>
      <p class="text-stone-500 my-2">Next review: ${nextDueText()}</p>
      <button class="border px-4 py-2 rounded-lg" onclick="startQuiz(true)">Practise anyway (does not change your schedule)</button>`;
  } else {
    html += `<p class="text-stone-500 mb-3">${due.length} word${due.length > 1 ? "s are" : " is"} ready for review:</p>
      <div class="mb-4">${due.map(s => {
        const x = find(s.word);
        return `<div class="flex justify-between items-center border-b py-2"><span><b>${x.w}</b> <span class="text-amber-700">${x.bn}</span></span><span class="text-sm text-stone-500">Level ${s.stage}/5</span></div>`;
      }).join("")}</div>
      <button class="bg-teal-700 text-white px-5 py-2 rounded-lg font-semibold" onclick="startQuiz()">Start review</button>`;
  }
  html += `</div>` + notificationCard();
  $("quiz").innerHTML = html;
}

// Notification settings card

function notificationCard() {
  let body;

  if (!("Notification" in window)) {
    body = `<p class="text-sm text-stone-500">This browser does not support notifications.</p>`;
  } else if (Notification.permission === "denied") {
    body = `<p class="text-sm text-stone-500">Notifications are blocked in your browser settings.</p>`;
  } else if (localStorage.getItem("kothika_notifications_off") === "true") {
    body = `
      <p class="text-sm mb-2">Notifications are turned off in Kothika.</p>
      <button class="bg-teal-700 text-white px-4 py-2 rounded-lg"
        onclick="enableNotifications()">Turn On Notifications</button>
    `;
  } else if (Notification.permission === "granted") {
    body = `
      <p class="text-sm mb-2">✓ Notifications are enabled.</p>
      <button class="border px-4 py-2 rounded-lg"
        onclick="disableNotifications()">Turn Off Notifications</button>
    `;
  } else {
    body = `<button class="bg-teal-700 text-white px-4 py-2 rounded-lg" onclick="enableNotifications()">Enable Notifications</button>`;
  }

  return `<div class="card">
    <h3 class="font-semibold mb-1">🔔 Browser reminders (optional)</h3>
    ${body}
    <p class="text-xs text-stone-500 mt-3">Reminders only appear while Kothika is open in a browser tab.</p>
  </div>`;
}


function disableNotifications() {
  localStorage.setItem("kothika_notifications_off", "true");
  renderRevision();
}

function enableNotifications() {
  if (!("Notification" in window)) return;

  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      localStorage.removeItem("kothika_notifications_off");
      new Notification("Kothika", {
        body: "Reminders are on. We'll tell you when words are due."
      });
    }
    renderRevision();
  });
}

// Sends at most one notification per day, only if permission was granted
function notifyDue() {
  if (!("Notification" in window) || Notification.permission !== "granted") return;
  const n = dueList().length;
  if (!n || localStorage.getItem(NKEY) === today()) return;
  try {
    new Notification("Kothika – time to review", { body: n + " word" + (n > 1 ? "s are" : " is") + " ready for review." });
    localStorage.setItem(NKEY, today());
  } catch (e) {}
}
// ---------- 11. HOME DASHBOARD ----------
const  TKEY = "kothika_timer";
const QUOTES = [
  "One step at a time, one day at a time.", "Small progress is still progress.",
  "Every new word opens another door.", "Confidence grows with every conversation.",
  "You don't have to learn everything today. Just keep going.", "Curiosity is the best study partner.",
  "Be patient with yourself. Fluency is built slowly.", "A word used today is a word remembered tomorrow."
];
const pad = n => String(n).padStart(2, "0");
function jget(k, fb) { try { return JSON.parse(localStorage.getItem(k)) || fb; } catch (e) { return fb; } }
function jset(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

function toast(msg) {
  const t = $("toast"); if (!t) return;
  t.textContent = msg; t.classList.add("show");
  clearTimeout(toast.id); toast.id = setTimeout(() => t.classList.remove("show"), 3000);
}

// Focus timer: stores an END timestamp, so it stays accurate in background tabs and after refresh.

let T = jget(TKEY, {
  dur: 2,
  left: 2 * 60000,
  run: false,
  end: 0
});

function tLeft() { return T.run ? Math.max(0, T.end - Date.now()) : T.left; }
function tSave() { jset(TKEY, T); }
function timerToggle() {
  if (T.run) { T.left = tLeft(); T.run = false; } else { T.end = Date.now() + T.left; T.run = true; }
  tSave(); drawTimer();
}
function timerReset() { T.run = false; T.left = T.dur * 60000; tSave(); drawTimer(); } // reset records nothing
function timerDur(m) { if (T.run) return; T.dur = +m; T.left = T.dur * 60000; tSave(); drawTimer(); }
function notifyFocusDone() {
  if (!("Notification" in window) || Notification.permission !== "granted" || localStorage.getItem("kothika_notifications_off") === "true") return;
  try { new Notification("Kothika – focus session complete", { body: "Well done! Take a short break." }); } catch (e) {}
}
function tickTimer() {
  if (T.run && tLeft() === 0) {
    T.run = false; T.left = T.dur * 60000; tSave(); // stop first, so a session can never count twice
    toast("Focus session complete – well done!");
      notifyFocusDone();
    if (!$("home").classList.contains("hidden")) renderHome();
  }
  drawTimer();
}
function drawTimer() {
  const t = $("tTime"); if (!t) return;
  const left = tLeft(), total = T.dur * 60000, s = Math.ceil(left / 1000);
  t.textContent = pad(Math.floor(s / 60)) + ":" + pad(s % 60);
  $("tRing").style.strokeDashoffset = 327 * (1 - left / total);
  $("tBtn").textContent = T.run ? "Pause" : (left < total ? "Resume" : "Start");
  $("tSel").disabled = T.run || left < total;
}
setInterval(tickTimer, 500);

function renderHome() {
  const now = new Date();
  const h = now.getHours();

  const greet = h < 12
    ? "Good morning"
    : h < 18
      ? "Good afternoon"
      : "Good evening";

  const day = Math.floor(
    (Date.now() - now.getTimezoneOffset() * 60000) / DAY
  );

  const due = dueList().sort((x, y) => x.next - y.next);
  const hasWords = Object.keys(state.saved).length > 0;

  $("home").innerHTML = `
    <div class="card hero">
      <p class="text-sm text-stone-500">${greet} 👋</p>

      <div class="card quote mt-4">
        <p class="eyebrow">TODAY'S INSPIRATION</p>
        <p class="text-xl mt-2 leading-snug">
          “${QUOTES[day % QUOTES.length]}”
        </p>
      </div>

      <div class="flex flex-wrap gap-3 mt-4">
        <button class="bg-teal-700 text-white px-5 py-3 rounded-lg font-semibold"
          onclick="show('quiz');startQuiz()">
          Start Revision
        </button>

        <button class="border px-5 py-3 rounded-lg"
          onclick="show('search')">
          Learn New Words
        </button>
      </div>
    </div>

    <div class="card">
      <h3 class="font-semibold mb-2">Daily Revision</h3>

      ${
        due.length
          ? `<p class="text-sm text-stone-500 mb-3">
               ${due.length} word${due.length === 1 ? "" : "s"} ready for review.
             </p>
             <button class="bg-teal-700 text-white px-4 py-2 rounded-lg"
               onclick="show('quiz');startQuiz()">
               Start Revision
             </button>`
          : hasWords
            ? `<p class="text-sm text-stone-500">
                 You're all caught up! Next review: ${nextDueText()}
               </p>`
            : `<p class="text-sm text-stone-500">
                 Save your first word to begin reviewing it later.
               </p>`
      }
    </div>

    <div class="card text-center">
      <h3 class="font-semibold mb-3">Focus Timer</h3>

      <div class="relative mx-auto" style="width:140px;height:140px">
        <svg viewBox="0 0 120 120"
          class="w-full h-full -rotate-90" aria-hidden="true">
          <circle cx="60" cy="60" r="52" class="ring-bg"/>
          <circle id="tRing" cx="60" cy="60" r="52" class="ring"/>
        </svg>

        <div id="tTime"
          class="absolute inset-0 flex items-center justify-center text-3xl font-bold"
          role="timer">02:00</div>
      </div>

      <div class="flex justify-center items-center gap-2 mt-3">
        <button id="tBtn"
          class="bg-teal-700 text-white px-5 py-2 rounded-lg font-semibold"
          onclick="timerToggle()">Start</button>

        <button class="border px-4 py-2 rounded-lg"
          onclick="timerReset()">Reset</button>

        <select id="tSel" class="tsel"
          onchange="timerDur(this.value)"
          aria-label="Session length">
          ${[2, 5, 10, 15].map(m =>
            `<option value="${m}"${m === T.dur ? " selected" : ""}>${m} min</option>`
          ).join("")}
        </select>
      </div>
    </div>
  `;

  drawTimer();
}

// ---------- 8. START ----------
updateBadges();
show("search");
notifyDue();
setInterval(() => { updateBadges(); notifyDue(); }, 60000); // re-check every minute
