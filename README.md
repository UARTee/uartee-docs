# UARTee documentation

User and developer documentation for UARTee, a dual USB-to-UART adapter with
Dual, Share, and Tap connection modes.

UARTee is in development. This repository will publish only instructions that
have been verified against the identified hardware and firmware revisions.

The documentation is a static, no-build website. The entry page is
`docs/index.html`; the root `index.html` redirects to it.

## What is included

- `index.html`: short redirect to the documentation landing page
- `docs/index.html`: documentation overview and searchable section cards
- `docs/styles.css`: shared responsive layout and design
- `docs/script.js`: search and mobile sidebar behavior
- `docs/*.html`: setup, safety, mode, configuration, update, troubleshooting,
  specification, and optional integration pages
- `.nojekyll`: prevents Jekyll processing on GitHub Pages

## Preview locally

Run a local server from this repository:

```bash
python3 -m http.server 8080 --bind 127.0.0.1
```

Open `http://127.0.0.1:8080/docs/`.

## Documentation structure

The first documentation release will cover:

1. **Getting started:** package contents, supported hosts, and the first
   connection.
2. **Wiring and safety:** revision-specific pinouts, logic voltage, common
   ground, no RS-232 connection, no isolation, and power-sequencing limits.
3. **Connection modes:** Dual, Share, and active Tap, each with a tested wiring
   diagram and port map.
4. **Configuration:** configuration entry, supported settings, and recovery.
5. **Firmware updates:** board compatibility, update procedure, and required
   option bytes.
6. **Troubleshooting:** identifying ports, checking ownership, and tracing
   missing data.
7. **Specifications:** measured limits, supported settings, and test
   conditions.
8. **Optional MCP integration:** host setup and safety boundaries, with normal
   UART use kept independent of AI tooling.

Instructions that depend on a particular board or firmware revision will name
that revision explicitly. Follow the project at
[github.com/UARTee](https://github.com/UARTee).
