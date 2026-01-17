# Hur du laddar upp till GitHub 🚀

## Steg 1: Skapa ett GitHub-konto (om du inte har)
1. Gå till [github.com](https://github.com)
2. Klicka på "Sign up"
3. Följ instruktionerna

## Steg 2: Installera Git på din dator

### Windows:
1. Ladda ner från [git-scm.com](https://git-scm.com/download/win)
2. Kör installationen (använd default settings)

### Mac:
```bash
# Installera via Homebrew (rekommenderat)
brew install git

# Eller installera Xcode Command Line Tools
xcode-select --install
```

### Linux:
```bash
# Ubuntu/Debian
sudo apt-get install git

# Fedora
sudo dnf install git
```

## Steg 3: Konfigurera Git (första gången)
```bash
git config --global user.name "Ditt Namn"
git config --global user.email "din@email.com"
```

## Steg 4: Skapa ett nytt repository på GitHub
1. Logga in på GitHub
2. Klicka på "+" uppe till höger → "New repository"
3. Fyll i:
   - **Repository name**: `snapsvisor-app`
   - **Description**: "En app för att skapa personliga snapsvisor-häften"
   - **Public** eller **Private** (välj själv)
   - **VIKTIGT**: Kryssa INTE i "Add a README file" (vi har redan en!)
4. Klicka "Create repository"

## Steg 5: Förbered dina filer lokalt

### Skapa projektmapp och lägg in filerna:
```bash
# Skapa mapp
mkdir snapsvisor-app
cd snapsvisor-app

# Kopiera alla filer från /mnt/user-data/outputs/ till denna mapp
# Filstruktur ska se ut så här:

snapsvisor-app/
├── .gitignore
├── LICENSE
├── README.md
├── package.json
├── public/
│   └── index.html
└── src/
    ├── App.js
    └── index.js
```

## Steg 6: Initiera Git och ladda upp

### I din projektmapp, kör:
```bash
# 1. Initiera git
git init

# 2. Lägg till alla filer
git add .

# 3. Gör din första commit
git commit -m "Initial commit: Snapsvisor app med 7 teman och 84 visor"

# 4. Lägg till ditt GitHub repo som remote
# Byt ut 'dittanvandrarnamn' mot ditt riktiga GitHub-användarnamn!
git remote add origin https://github.com/dittanvandrarnamn/snapsvisor-app.git

# 5. Pusha till GitHub
git branch -M main
git push -u origin main
```

### Om du får autentiseringsfel:
GitHub kräver inte längre lösenord - använd istället en Personal Access Token:

1. Gå till GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Klicka "Generate new token (classic)"
3. Ge den ett namn (t.ex. "Snapsvisor App")
4. Välj scope: `repo` (full control)
5. Klicka "Generate token"
6. **KOPIERA TOKEN NU** (du ser den aldrig igen!)
7. Använd token istället för lösenord när du pushar

## Steg 7: Verifiera att det fungerade
1. Gå till `https://github.com/dittanvandrarnamn/snapsvisor-app`
2. Du ska nu se alla dina filer!

## Alternativ: Använd GitHub Desktop (enklare)
1. Ladda ner [GitHub Desktop](https://desktop.github.com/)
2. Logga in med ditt GitHub-konto
3. File → Add Local Repository → Välj din projektmapp
4. Fyll i commit-meddelande och klicka "Commit to main"
5. Klicka "Publish repository"

## Vanliga kommandon framöver

```bash
# Se status
git status

# Lägg till ändringar
git add .

# Committa ändringar
git commit -m "Beskrivning av vad du ändrat"

# Pusha till GitHub
git push

# Hämta senaste från GitHub
git pull
```

## Deploy till GitHub Pages (bonus!)

När du vill göra appen live:

```bash
# 1. Installera gh-pages
npm install --save-dev gh-pages

# 2. Lägg till i package.json:
"homepage": "https://dittanvandrarnamn.github.io/snapsvisor-app",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

# 3. Deploy!
npm run deploy
```

Din app finns nu live på: `https://dittanvandrarnamn.github.io/snapsvisor-app`

## Behöver hjälp?
- [Git dokumentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [GitHub Desktop Guide](https://docs.github.com/en/desktop)

---

**Tips**: Spara din Personal Access Token säkert! Du behöver den varje gång du pushar till GitHub.
