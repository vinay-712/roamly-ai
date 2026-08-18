# Contributing to Roamly AI

Thank you for your interest in improving Roamly AI. Contributions that strengthen the interface, accessibility, responsiveness, documentation, or prototype interactions are welcome.

## Before you begin

- Search existing issues before opening a new one.
- Keep proposals focused on one problem or improvement.
- Do not include API keys, personal information, or licensed assets you cannot redistribute.
- For significant product or visual changes, open an issue before implementation.

## Local development

1. Fork and clone the repository.
2. Create a focused branch:

   ```bash
   git checkout -b feature/short-description
   ```

3. Start a local server:

   ```bash
   python -m http.server 4173
   ```

4. Open `http://localhost:4173`.

## Quality checklist

Before submitting a pull request, confirm that:

- All six screens still render.
- Bottom navigation and back actions work.
- The interface remains usable at mobile and desktop widths.
- Interactive controls have clear labels and visible focus states.
- No browser-console errors were introduced.
- Documentation reflects the change.
- The change contains no secrets or private data.

## Pull requests

Use a clear title and explain:

- What changed
- Why it changed
- How it was tested
- Any visual or accessibility impact

Screenshots or short recordings are encouraged for visible interface changes.

## Code style

- Use semantic HTML where practical.
- Reuse the existing CSS variables and component classes.
- Keep JavaScript framework-free unless a larger migration is discussed first.
- Prefer small, readable functions and descriptive names.

By participating, you agree to follow the [Code of Conduct](CODE_OF_CONDUCT.md).
