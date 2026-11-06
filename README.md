# Scrawl Product Website

Dependency-free static HTML, CSS, and JavaScript website for **Scrawl**. Can be deployed directly to any static HTTPS host.

## Local Preview

```sh
python3 -m http.server 4173
```

## Pages & Structure

- `index.html`: Product narrative, representative workspace UI, Desktop/Server MCP connection switcher, real-world workflow examples, edition comparison table, and FAQ.
- `docs.html`: Persistent documentation and help center covering the MCP connection model, Desktop & Server setup preparation, permissions, 24/7 automation architecture, verification prompts, and troubleshooting.
- `start.html`: Edition selector (`Desktop` vs. `Server`) and onboarding links.
- `assets/site.js`: Keyboard-accessible tabs, mobile navigation toggle, copy-to-clipboard buttons for verification prompts, and scroll-spy navigation for documentation.
- `assets/style.css`: Responsive layout and component styles.

The in-app Help button can link directly to `docs.html` or deep-link to a specific section anchor (e.g., `docs.html#desktop` or `docs.html#server`).
