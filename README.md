# Xin Lei / 雷鑫 Portfolio

Personal AI product and agent portfolio for Xin Lei / 雷鑫.

Live site: https://leoxin99.github.io/xinlei-portfolio/

## What This Is

This repository hosts a static portfolio site for AI product, AI application, and agent-related opportunities. It is designed to help interviewers quickly understand:

- who I am and what roles I am targeting;
- which AI projects I have shipped, researched, or prototyped;
- how I think about users, product scope, evaluation, and risk boundaries;
- how my research, engineering, and product background fit together.

## Featured Work

### PixelTravelMap

An offline-first AI travel artifact generator.

- Turns natural-language travel plans into validated itinerary JSON.
- Renders an interactive HTML atlas with projected map, POIs, city detail views, distance labels, itinerary panels, and poster tools.
- Supports browser-local travel notes with `localStorage`.
- Uses GitHub Actions to validate offline HTML/SVG artifacts and demo regeneration.

Links:

- GitHub: https://github.com/leoxin99/PixelTravelMap
- Demo: https://leoxin99.github.io/PixelTravelMap/dist/italy_france_switzerland_demo.html

### CellSAM

A biomedical image segmentation research project for hiPSC-CM whole-cell instance segmentation.

- Adapts Transformer / ViT / SAM-style visual foundation models to a microscopy setting.
- Focuses on model adaptation, prompt generation, inference pipeline design, evaluation, and research workflow management.
- Includes an agent-assisted research workflow for experiment planning, review, training monitoring, result consolidation, and paper / portfolio handoff.

Portfolio page:

- https://leoxin99.github.io/xinlei-portfolio/cellsam.html

### VLM Game Companion Agent

A product research prototype for low-interruption multimodal game companionship.

- Uses game screenshots or video frames as VLM input.
- Converts visual context into a structured `game_state`.
- Decides whether to speak, what tone to use, and how to avoid interrupting gameplay.
- Explores voice companionship, emotional value, and user feedback loops.

Status: product research / prototype design, not a launched product.

### 糖宠照护记录

A C-end product prototype for long-term diabetic cat and dog care records.

- Helps first-time pet caregivers record glucose, diet, insulin execution, symptoms, visits, and notes.
- Focuses on long-term care, review, family communication, and vet-facing report preparation.
- Clear boundary: record and communication support only; no diagnosis, treatment advice, or dosage recommendation.

Status: Web prototype direction; mini program version can be explored later.

## Product Notes

The site includes a lightweight `Product Notes` section for project retrospectives and AI product thinking. Planned notes include:

- PixelTravelMap: from travel planning to offline AI artifacts.
- VLM game companionship: product boundaries for low-interruption AI companions.
- 糖宠照护记录: information architecture for long-term care.
- Agent-assisted research: planning, audit, and delivery in complex AI projects.
- How AI PMs can evaluate RAG, agent, and multimodal applications.

## Site Structure

```text
index.html          Portfolio homepage
cellsam.html        CellSAM case detail page
assets/content.js   Main content data source
assets/site.js      Client-side rendering
assets/site.css     Visual styling
assets/             Images and static assets
```

Local preparation notes, resume drafts, and interview materials live under `local-notes/` and are not part of the public site strategy.

## Local Preview

Open `index.html` directly in a browser, or run a local static server:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Then visit:

```text
http://127.0.0.1:8000/index.html
```

## Editing Content

Most homepage content lives in:

```text
assets/content.js
```

The site is intentionally static:

- no backend;
- no database;
- no public API;
- all links are relative or public project links.

## Deployment

This repository is deployed through GitHub Pages from the `main` branch root.

Public URL:

```text
https://leoxin99.github.io/xinlei-portfolio/
```

## Content Principles

- Mark project status clearly: shipped, prototype, product research, or research project.
- Do not claim unverified metrics or launched outcomes.
- Separate public portfolio content from private resume/interview preparation notes.
- Describe AI projects through user problem, product scope, technical chain, evaluation, and risk boundary.
