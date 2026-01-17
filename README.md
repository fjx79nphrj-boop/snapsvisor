# Snapsvisor App 🎵

En webapp för att skapa personliga snapsvisor-häften med svenska klassiska visor. Perfekt för midsommar, studenten, kräftskiva, julbord, födelsedagar, bröllop och påsk!

## Features ✨

- 7 färdiga teman med 12 visor vardera
- Anpassa med festens namn, datum och personligt meddelande
- Skapar professionella PDF-häften i A5-format
- Apple Design Guidelines inspirerad design
- Ingen backend behövs - allt körs i browsern
- Fungerar offline efter första besöket (PWA)

## Teman 🎭

- 🌼 **Midsommar** - 12 klassiska midsommarvisor
- 🎓 **Student** - 12 studentvisor
- 🦞 **Kräftskiva** - 12 kräftvisor
- 🎄 **Jul** - 12 julvisor
- 🎂 **Födelsedag** - 12 födelsedagsvisor
- 💍 **Bröllop** - 12 bröllopssånger
- 🐣 **Påsk** - 12 påskvisor

## Hur det fungerar 📖

1. Välj tema
2. Fyll i festens namn, datum och meddelande (valfritt)
3. Klicka på "Skapa PDF"
4. Öppna den nedladdade HTML-filen
5. Tryck Ctrl+P (eller Cmd+P på Mac)
6. Välj "Spara som PDF"
7. Klart! Nu har du ett snyggt vishäfte med 4 sidor

## Installation 🚀

### Förutsättningar
- Node.js (version 14 eller senare)
- npm eller yarn

### Steg-för-steg

1. Klona repot:
```bash
git clone https://github.com/dittanvandrarnamn/snapsvisor-app.git
cd snapsvisor-app
```

2. Installera dependencies:
```bash
npm install
```

3. Starta utvecklingsservern:
```bash
npm start
```

4. Öppna [http://localhost:3000](http://localhost:3000) i din webbläsare

## Bygg för produktion 📦

```bash
npm run build
```

Detta skapar en optimerad version i `build/` mappen som kan deployas till valfri statisk hosting (Netlify, Vercel, GitHub Pages, etc.).

## Deploy till GitHub Pages 🌐

1. Lägg till i `package.json`:
```json
"homepage": "https://dittanvandrarnamn.github.io/snapsvisor-app"
```

2. Installera gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Lägg till scripts i `package.json`:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

4. Deploy:
```bash
npm run deploy
```

## Teknisk stack 💻

- **React** - UI framework
- **CSS-in-JS** - Inline styling
- **HTML5** - PDF-generation via print
- **PWA** - Offline-first approach

## Filstruktur 📁

```
snapsvisor-app/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Anpassa 🎨

### Lägga till fler visor
Öppna `src/App.js` och lägg till visor i `themes` objektet:

```javascript
songs: [
  { 
    title: 'Din visa', 
    lyrics: 'Texten här...' 
  },
  // ... fler visor
]
```

### Ändra färger
Varje tema har en `colors` array med två färger för gradienten:

```javascript
colors: ['#FFD700', '#FFA500']
```

## Licens 📄

MIT License - använd fritt!

## Bidra 🤝

Pull requests är välkomna! För större ändringar, öppna först en issue för att diskutera vad du vill ändra.

## Support ❤️

Om du gillar projektet, ge det en ⭐ på GitHub!
