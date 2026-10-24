# Kothika (কথিকা) – From Words to Conversation

Kothika is an English vocabulary app that teaches words and phrases through natural conversations, then brings them back later for recall. It was built as an individual university web development project.

**Live site:** https://AtihaOfficial.github.io/kothika/

## Features
- **Search any English word or phrase.** Curated words and phrases work instantly. Other words are looked up live online.
- **Meaning and usage:** definition, part of speech, pronunciation where available, examples, synonyms and antonyms.
- **Listen:** recorded audio when the dictionary provides it, otherwise the browser's built-in voice.
- **Bangla meaning:** hand-written for curated entries, and automatically translated for live lookups (marked as auto-translated).
- **Conversations:** curated dialogues for built-in entries, and AI-generated dialogues for new words.
- **Save and remove** words and phrases in "My Words".
- **Daily Recall quiz** with a practice mode that does not change your schedule.
- **Spaced repetition:** correct answers move a word up the review ladder of 1, 3, 7, 14 and 30 days. Wrong answers bring it back sooner.
- **Progress page:** words saved, mastered, due today, quiz accuracy, questions answered and day streak.
- **Optional browser notifications** for due words and finished focus sessions, with a Turn Off button.
- **Focus timer** (2, 5, 10 or 15 minutes) that stays accurate in background tabs.
- **Dashboard** with a time-based greeting and a quote that changes every day.
- **Dark theme** and a responsive layout for desktop and mobile.

## Technologies
- HTML5, CSS3, Tailwind CSS (loaded from a CDN) and vanilla JavaScript
- `localStorage` for saved words, progress and settings (no database, no login)
- Free public services: dictionaryapi.dev, Wiktionary and MyMemory (translation)
- Gemini AI, called through a Cloudflare Worker so the API key stays secret on the server

## Project structure

kothika/
├── index.html   (page structure and navigation)
├── style.css    (dark theme and custom styles)
├── script.js    (all logic)
└── README.md


## How to run
1. Download or clone the project and keep the files in one folder.
2. In VS Code, install the Live Server extension, right-click `index.html` and choose Open with Live Server.
3. An internet connection is required for Tailwind, live dictionary lookups, translation and AI conversations. The built-in words and phrases still work without live lookups.

## How it works
1. **Search:** the app checks the curated words and phrases and your saved items first. If nothing matches, it asks dictionaryapi.dev, then Wiktionary as a backup.
2. **Translation:** the English definition is sent to a free translation service. If it fails, the Bangla line is hidden.
3. **Pronunciation:** if the result has no IPA, the app reads it from the word's Wiktionary page.
4. **Conversation:** for new words, the word and definition are sent to a Cloudflare Worker, which asks Gemini for a short two-person dialogue.
5. **Save:** the item is stored in `localStorage` with a review stage and the next review time.
6. **Review:** due items appear in Daily Recall. Questions alternate between a conversation with a blank and a meaning question.
7. **Schedule:** a correct answer raises the stage and sets the next review time from the 1/3/7/14/30-day ladder.

### Saved data format (in `localStorage`)
{ saved: { word: { word, savedAt, stage (0-5), next (timestamp), correct, wrong, last, data? } },
  answered, correct, streak, lastDay }


## Limitations
- Live phrase and idiom lookups depend on Wiktionary, and the curated phrase list is small.
- Bangla for live words is machine translation and may not be exact.
- AI conversations need internet and can occasionally fail, in which case none is shown.
- Saved data lives only in one browser on one device (no accounts or sync).
- Notifications and the timer only work while Kothika is open in a browser tab, because there is no server.
- Tailwind through the CDN is meant for learning. A production site would build a smaller CSS file.

## Future improvements
- More curated words, phrases and conversations
- Typed-answer quizzes and speaking practice
- Export and import of saved words
- User accounts and cloud sync with a real backend
- An installable app (PWA) with offline support

