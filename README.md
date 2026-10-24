# Kothika (কথিকা) – From Words to Conversation

An English vocabulary app that teaches words through real conversations and brings them back later for recall.
Built with HTML5, CSS3, Tailwind CSS (CDN) and vanilla JavaScript. No backend, no login, no AI service.

## How to run
1. Keep `index.html`, `style.css`, `script.js` in one folder named `kothika`.
2. Double-click `index.html`, **or** in VS Code install "Live Server", right-click `index.html` → "Open with Live Server".
3. **Tailwind is loaded from a CDN, so you need an internet connection.** Without it the layout loses most styling.

## Architecture
- `index.html`: header + 4 sections (Search, My Words, Daily Recall, Progress).
- `style.css`: small custom styles (chat bubbles, quiz states, animation). Tailwind handles layout.
- `script.js`: (1) data, (2) localStorage state, (3) tabs, (4) search, (5) saved list, (6) quiz, (7) progress.

### Data
Built-in `WORDS` array (15 words): word, pronunciation, part of speech, Bangla meaning, definition, synonyms, examples, one conversation (situation + dialogue lines), and a "Use it in your life" prompt.

Saved in `localStorage` under `kothika_v1`:
```
{ saved: { Resilient: { word, savedAt, stage (0-5), next (timestamp), correct, wrong, last } },
  answered, correct, streak, lastDay }
```

### Main flow
Search → read meaning, hear pronunciation, read conversation → Save → (1 day later) Daily Recall →
correct answers raise the stage and push the next review to 1, 3, 7, 14, 30 days; wrong answers lower the stage and bring it back tomorrow.
Even stages ask a **conversation fill-in-the-blank**; odd stages ask for the **word from its meaning**, so the word is met in a different form each time.

## Presentation guide (about 5 minutes)
1. **Purpose:** most dictionaries stop at the definition; Kothika teaches how to *use* a word in a conversation and checks recall later.
2. **Technologies:** HTML structure, Tailwind + CSS for design, JavaScript for logic.
3. **localStorage:** saves words and progress in the browser, so no server is needed.
4. **Quizzes:** multiple choice with 3 random wrong options; two question types.
5. **Review scheduling:** a simple spaced-repetition ladder (1/3/7/14/30 days).
6. **Speech synthesis:** the browser's `SpeechSynthesisUtterance` reads the word aloud.
7. **Limitations:** only 15 words, one conversation per word, data is per-browser, needs internet for Tailwind, speech voices differ by device.
8. **Future work:** more words and situations, typed answers, import/export, dark mode, installable PWA, Bangla UI.

## Viva questions
1. **What problem does it solve?** Learners know definitions but not how to use words in conversation.
2. **Why no backend?** The project is front-end only; localStorage is enough for personal data.
3. **What is localStorage?** Browser key-value storage that stays after closing the tab; stores strings only, so I use `JSON.stringify`/`JSON.parse`.
4. **How is search case-insensitive?** Both the input and word list are converted with `toLowerCase()`.
5. **How does review scheduling work?** Each saved word has a `stage` and a `next` timestamp; correct answers move it up the 1/3/7/14/30-day ladder.
6. **How are quiz options made?** The correct word plus 3 random others, shuffled with `sort(() => Math.random() - .5)`.
7. **How does pronunciation work?** `speechSynthesis.speak()` with an English voice.
8. **How is the streak calculated?** If the last finished session was yesterday, streak +1; otherwise it restarts at 1.
9. **Why Tailwind?** Fast responsive styling with utility classes, no heavy CSS.
10. **What would you improve?** More content, typed-answer quizzes, export/import of progress, and an offline build.
