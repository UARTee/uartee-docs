# UARTee documentation

User and developer documentation for UARTee, a dual USB-to-UART adapter with
Dual, Share, and Tap connection modes.

UARTee is in development. This repository will publish only instructions that
have been verified against the identified hardware and firmware revisions.

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
