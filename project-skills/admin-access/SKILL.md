---
name: bits-please-admin-access
description: Preserve server-enforced authentication and private handling of the Bits, Please editorial panel when changing this project.
---

# Bits, Please Admin Access

- Keep the editorial panel at `/admin` and enforce authentication in `server.mjs` before serving the editor route.
- Keep the admin password in the ignored `.env.local` file. Never put passwords in React code, Vite client environment variables, source control, public links, or examples.
- Do not add public navigation links to the editor. The absence of a link is not the access control; server authentication remains required.
- Keep login sessions HTTP-only, SameSite, short-lived, and unpredictable. Do not log credentials or session tokens.
- Preserve public category URLs under `/categoria/<slug>` without exposing editor controls.
- Remember that the current editor stores articles in browser localStorage. Any future shared publishing API must independently enforce the same authentication and authorization on every write operation.
