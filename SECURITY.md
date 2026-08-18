# Security Policy

## Supported version

Security updates apply to the latest version on the `main` branch.

## Reporting a vulnerability

Please do not publish sensitive vulnerability details in a public issue.

Instead, use GitHub's private vulnerability reporting feature if it is enabled for this repository. Include:

- A clear description of the issue
- Steps to reproduce it
- The affected file or interaction
- The potential impact
- A suggested fix, if available

You should receive an acknowledgement within seven days.

## Current prototype scope

Roamly AI is currently a static frontend prototype. It does not process payments, store user accounts, connect to an AI provider, or retain personal travel data.

Future integrations must keep secrets on a server. API keys must never be placed in `app.js`, committed to the repository, or exposed in browser code.
