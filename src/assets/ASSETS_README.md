Place the three logo image files you want to use in this folder with the following exact filenames:

- symfony_logo.png
- java_logo.png
- python_logo.png

If you have the new logo images provided as attachments, copy them here (overwrite existing files if present). Webpack/Vue CLI will bundle them automatically when you run the dev server.

To test locally (Windows PowerShell):

1. Install dependencies (if not already):
   npm install

2. Start the dev server:
   npm run serve

3. Open http://localhost:8080 (or the printed URL) and go to the About page to verify the logos.

Notes:
- `AboutView.vue` was updated to reference these files using `require('@/assets/....')`.
- If you prefer different filenames, update `src/views/AboutView.vue` to match.
