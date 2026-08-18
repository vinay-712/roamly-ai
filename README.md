<div align="center">

# Roamly AI

### A thoughtful AI travel companion for discovering places and shaping memorable trips

[![Live Demo](https://img.shields.io/badge/Live_Demo-Open_Prototype-b8e585?style=for-the-badge&logo=github&logoColor=0f4f40)](https://vinay-712.github.io/roamly-ai/)
[![License: MIT](https://img.shields.io/badge/License-MIT-0f4f40?style=for-the-badge)](LICENSE)
[![Responsive](https://img.shields.io/badge/Responsive-Mobile_First-c7e0eb?style=for-the-badge)](https://vinay-712.github.io/roamly-ai/)

</div>

## Overview

Roamly AI is an interactive, mobile-first travel companion prototype. It demonstrates how an AI-assisted experience can make destination discovery, itinerary creation, saved places, and trip management feel calm and approachable.

> **[View the live interactive prototype →](https://vinay-712.github.io/roamly-ai/)**

## Experience highlights

- **Destination discovery** — browse nearby recommendations and explore by travel mood.
- **AI trip planning** — begin with a natural-language prompt or a quick preset.
- **Destination details** — review ratings, descriptions, and local highlights.
- **Generated itinerary** — move through a structured multi-city trip plan.
- **Saved places** — keep destinations ready for future planning.
- **Traveller profile** — explore preferences and account settings.
- **Responsive presentation** — use the prototype on mobile or desktop.

## Product flow

| Step | Screen | Purpose |
| --- | --- | --- |
| 01 | Explore | Discover destinations and enter the planning flow |
| 02 | Ask Roamly AI | Describe a trip and select prompt presets |
| 03 | Destination details | Evaluate a place and add it to a trip |
| 04 | My trip | Review the AI-crafted route and itinerary |
| 05 | Saved places | Revisit travel inspiration |
| 06 | Profile | Manage traveller preferences |

## Technology

- Semantic HTML5
- Modern responsive CSS
- Vanilla JavaScript
- GitHub Pages
- Google Fonts — Inter

No framework or build step is required.

## Run locally

1. Clone the repository:

   ```bash
   git clone https://github.com/vinay-712/roamly-ai.git
   cd roamly-ai
   ```

2. Open `index.html` directly, or start a local server:

   ```bash
   python -m http.server 4173
   ```

3. Visit `http://localhost:4173`.

## Project structure

```text
roamly-ai/
├── index.html          # Application shell and metadata
├── styles.css          # Responsive UI and design tokens
├── app.js              # Screens, navigation, and interactions
├── CONTRIBUTING.md     # Contribution workflow
├── CODE_OF_CONDUCT.md  # Community standards
├── SECURITY.md         # Responsible security reporting
├── LICENSE             # MIT license
└── README.md
```

## Current scope

This repository is a polished frontend prototype. Navigation and interface interactions work in the browser, while destination data and itinerary generation are currently simulated.

A production version would add:

- A secure AI itinerary service
- Authentication and user accounts
- Persistent trips and saved places
- Live destination, map, and travel data
- Automated tests and deployment checks

## Design principles

- Calm visual hierarchy
- Clear, focused actions
- Friendly AI guidance
- Mobile-first interaction
- Reusable colors, spacing, cards, and navigation patterns

## Roadmap

- [ ] Connect a real AI itinerary API
- [ ] Add destination search and map data
- [ ] Persist saved places and trips
- [ ] Add authentication
- [ ] Improve keyboard and screen-reader coverage
- [ ] Add automated browser tests

## Contributing

Contributions and thoughtful feedback are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) before proposing a change.

## Author

**Vinay Chandra (Trilok)** — UI/UX Designer working with AI

[LinkedIn](https://www.linkedin.com/in/vinay-chandra-trilok-a8b99b261/) · [GitHub](https://github.com/vinay-712)

## License

This project is available under the [MIT License](LICENSE).
