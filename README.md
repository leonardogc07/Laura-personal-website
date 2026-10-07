# Laura Personal Website

Local monorepo for Laura’s personal blog: a **Next.js** frontend (`apps/web`) and a **Strapi 5** headless CMS (`apps/cms`).

Focus areas: yoga, sewing, natural fabric coloring, and vegan lifestyle.

## Stack

| App | Path | Default URL |
| --- | --- | --- |
| Next.js (App Router) | `apps/web` | http://localhost:3000 |
| Strapi 5 (SQLite) | `apps/cms` | http://localhost:1337 · Admin http://localhost:1337/admin |

## Prerequisites

- Node.js **20+**
- npm **9+** (ships with Node)

## Quick start

### 1. Clone and install

```bash
git clone https://github.com/leonardogc07/Laura-personal-website.git
cd Laura-personal-website
```

Install each app (recommended while developing independently):

```bash
cd apps/cms && npm install && cd ../..
cd apps/web && npm install && cd ../..
```

Or from the repo root with npm workspaces:

```bash
npm install
```

### 2. Environment files

**CMS**

```bash
cp apps/cms/.env.example apps/cms/.env
```

Generate real secrets (do not commit `.env`):

```bash
# example helpers
openssl rand -base64 32
```

Fill `APP_KEYS` (comma-separated list of 4 values), `API_TOKEN_SALT`, `ADMIN_JWT_SECRET`, `TRANSFER_TOKEN_SALT`, `JWT_SECRET`, and `ENCRYPTION_KEY`.

Optional — auto-create the first admin on bootstrap when no admin exists yet:

```env
ADMIN_EMAIL=laura@example.com
ADMIN_PASSWORD=ChangeMeNow123!
ADMIN_FIRSTNAME=Laura
ADMIN_LASTNAME=Admin
```

If you skip those, Strapi will ask you to create the first admin in the browser.

**Web**

```bash
cp apps/web/.env.example apps/web/.env.local
```

Default:

```env
STRAPI_URL=http://localhost:1337
```

### 3. Start Strapi (terminal 1)

```bash
cd apps/cms
npm run develop
```

On first boot the CMS will:

1. Ensure **Public** role can `find` / `findOne` for **Post**, **Category**, and **Author**
2. Optionally create the first admin from `ADMIN_EMAIL` / `ADMIN_PASSWORD`
3. Seed sample categories, Laura as author, and 8 published posts (2 per category) if the database is empty

Open:

- API: http://localhost:1337/api/posts
- Admin: http://localhost:1337/admin

### 4. Start Next.js (terminal 2)

```bash
cd apps/web
npm run dev
```

Open http://localhost:3000

You should see recent posts on the homepage, a filterable blog index, individual posts with an author sidebar, and the About page.

## Routes

| Route | Description |
| --- | --- |
| `/` | Homepage — recent posts grid |
| `/blog` | Blog index |
| `/blog?category=yoga` | Category filter (`sewing`, `natural-fabric-coloring`, `vegan-lifestyle`) |
| `/blog/[slug]` | Post detail + author sidebar |
| `/about` | Author bio |

## Managing content in Strapi

1. Open http://localhost:1337/admin and sign in.
2. In **Content Manager**:
   - **Post** — create/edit title, slug, excerpt, content (Markdown rich text), published date, category, author. Use **Publish**.
   - **Category** — yoga, sewing, natural fabric coloring, vegan lifestyle (seeded).
   - **Author** — Laura’s bio (seeded).
3. Refresh the Next.js site (ISR revalidates about every 60s; or restart `npm run dev` for an immediate refresh).

Public read access is bootstrapped automatically. To adjust permissions manually: **Settings → Users & Permissions → Roles → Public**.

## Design notes

- Cream background `#FDFAF6`
- Dark charcoal text
- Accent `#D97706`
- Serif (Lora) for body copy, sans-serif (Source Sans 3) for UI

## Project layout

```
apps/
  web/     Next.js frontend
  cms/     Strapi 5 CMS (SQLite at apps/cms/.tmp/data.db)
```

## Troubleshooting

- **Homepage shows “Could not reach Strapi”** — start `apps/cms` first (`npm run develop`), confirm http://localhost:1337/api/posts returns JSON.
- **Empty post list** — wait for Strapi bootstrap/seed logs, or delete `apps/cms/.tmp` and restart develop (re-seeds when empty).
- **Admin already exists** — use the account you created; bootstrap only creates an admin when the admin table is empty.
- **CORS errors** — `apps/cms/config/middlewares.ts` allows `http://localhost:3000`.

## License

Private / personal project unless otherwise noted.
