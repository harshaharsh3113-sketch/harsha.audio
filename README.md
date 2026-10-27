# Harsha — Live Sound & FOH Engineer Portfolio

A 10-page A4 print-ready portfolio web application built with React, Vite, Tailwind CSS, and Lucide React.

## Getting Started (VS Code)

1. Unzip this folder.
2. Open the `project/` folder in VS Code.
3. In the terminal:

```bash
npm install
npm run dev
```

4. Open the local URL shown in the terminal.

## Print to PDF (10-page A4)

- Open the site in Chrome/Chromium.
- Press `Ctrl+P` (Windows) or `Cmd+P` (Mac).
- Set destination to **Save as PDF**.
- Set paper size to **A4**.
- Set margins to **None / 0**.
- Enable **Background graphics**.
- Save — you will get exactly 10 A4 pages.

## Build for Production

```bash
npm run build
```

Output is generated in the `dist/` folder.

## Project Structure

```
project/
├── public/
│   ├── image_01.jpg  → Cover
│   ├── image_02.jpg  → Worship Production
│   ├── image_03.jpg  → Classical Production
│   ├── image_04.jpg  → Open-Air Production
│   ├── image_05.jpg  → Wedding Production
│   ├── image_06.jpg  → FOH Console
│   ├── image_07.jpg  → Operating FOH / Stage
│   ├── image_08.jpg  → Soundcheck / Technical Setup
│   ├── image_09.jpg  → Live Performance / Open-Air
│   └── image_10.jpg  → Professional Profile
├── src/
│   ├── components/
│   │   ├── PortfolioPage.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── ImageFrame.tsx
│   │   ├── CaseStudy.tsx
│   │   ├── TechnicalGrid.tsx
│   │   ├── WorkflowStep.tsx
│   │   └── ContactCard.tsx
│   ├── pages/
│   │   ├── Page01Cover.tsx
│   │   ├── Page02About.tsx
│   │   ├── Page03Experience.tsx
│   │   ├── Page04Capabilities.tsx
│   │   ├── Page05Technical.tsx
│   │   ├── Page06SelectedWork.tsx
│   │   ├── Page07Workflow.tsx
│   │   ├── Page08VisualArchive.tsx
│   │   ├── Page09Profile.tsx
│   │   └── Page10Contact.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
└── tsconfig.json
```

## Push to GitHub

```bash
cd project
git init
git add .
git commit -m "Harsha live sound portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/harsha-live-sound-portfolio.git
git push -u origin main
```
