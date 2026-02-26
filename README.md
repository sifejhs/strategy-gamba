# Strategy Gamba

One independent, SEO-optimized page per combo: **Stake mines strategy**, **Stake mines predictor**, **Stake crash strategy**, **Roobet blackjack strategy**, **Roobet crash predictor**, etc. For every casino × game × variant (strategy, predictor, tips, guide).

## Run locally

```bash
cd referral-casino
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## Project structure

- **Home** – Example strategy links, by game, by casino. Links to `/strategies`.
- **/[slug]** – One page per combo, e.g. `/stake-mines-strategy`, `/roobet-crash-predictor`. Each has its own title, description and content (diverse wording).
- **/strategies** – List of all strategy pages (diverse order).
- **/games/[slug]** – Legacy game index pages.
- **/casinos**, **/casinos/[slug]** – Casino index and per-casino pages.
- **Disclaimer** – On every page (house always wins, no strategy 100%).
- **Download button** – On every page.

## SEO

- Each strategy page has a **unique title and description** (templates with different word order and phrasing).
- Canonical URL per page. Open Graph. No duplicate content – one topic per URL.

## Data

- `src/lib/strategy-data.ts` – Casinos, games, variants. Add more to grow the grid (casino × game × variant).
