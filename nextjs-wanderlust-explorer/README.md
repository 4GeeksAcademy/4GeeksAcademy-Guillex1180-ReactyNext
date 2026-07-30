# 🌍 Wanderlust Labs — Explorer

A Next.js travel experiences explorer built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

Discover 100+ handpicked travel experiences, search by keyword with regex, filter by category and destination, and save your favorites — all persisted in `localStorage`.

---

## ✨ Features

- **5 pages** with client-side navigation (no full page reloads): Home, Explorer, Detail, Favorites, Profile
- **Regex-based search** on experience titles with live URL sync
- **Category & destination filters** that combine independently with search
- **URL query param sync** — all active filters reflected in the URL (`/experiences?search=vela&category=adventure&destination=Croacia`)
- **Pre-filled inputs** on page load when URL has existing query params
- **Favorites system** using React `useState` passed as props (no external state libraries)
- **Custom hooks** (`useExperiences`, `useFavorites`) encapsulating all business logic
- **Responsive design** — mobile, tablet, and desktop with Tailwind CSS
- **Empty state** with reset filters button when no results match
- **Dynamic `document.title`** on the detail page via `useEffect`

---

## 🗺️ Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero section with stats, gradient, and CTAs |
| `/experiences` | Explorer | Search, filters, grid of all experiences |
| `/experiences/[id]` | Detail | Full experience details with save button |
| `/favorites` | Favorites | Saved experiences with clear all option |
| `/profile` | Profile | User info, stats, and quick links |

---

## 🧩 Architecture

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx          ← Root layout with Navbar
│   ├── page.tsx            ← Home page (Hero)
│   ├── experiences/
│   │   ├── page.tsx        ← Explorer (Suspense wrapper)
│   │   └── [id]/page.tsx   ← Detail page
│   ├── favorites/page.tsx
│   └── profile/page.tsx
├── components/
│   ├── Navbar.tsx          ← Sticky nav with active link highlight
│   ├── SearchBar.tsx       ← Controlled input with live URL sync
│   ├── FilterBar.tsx       ← Category chips + destination dropdown
│   ├── ExperienceCard.tsx  ← Card with image, rating, heart toggle
│   └── ExperienceGrid.tsx  ← Responsive grid with empty state
├── hooks/
│   ├── useExperiences.ts   ← Filtering + URL sync logic
│   └── useFavorites.ts     ← Favorites with localStorage persistence
└── data/
    └── experiences.ts      ← Experience interface + 100 entries
```

### Key decisions

- **No Zustand, Redux, or Context** — favorites are managed via `useState` and passed as props
- **`useSearchParams` isolated in `<Suspense>`** — required by Next.js App Router
- **`useExperiences` custom hook** — encapsulates filtering, regex search, and URL param sync
- **`useEffect` in detail page** — updates `document.title` dynamically with cleanup

---

## 🔍 How filtering works

All filters are read from and written to URL query params via `useExperiences()`:

```
/experiences?search=surf&category=adventure&destination=Costa%20Rica
```

1. **Search** — `new RegExp(term, 'i').test(exp.title)` (case-insensitive regex)
2. **Category** — exact match on `category` field
3. **Destination** — partial match on `destination` field (e.g. "Italia" matches "Roma, Italia")

When a filter is cleared, its key is removed from the URL. When all filters are cleared, the URL returns to `/experiences`.

---

## 🎨 Design References

The UI design draws inspiration from three leading travel and experience platforms:

### 1. Airbnb Experiences
[airbnb.com/s/experiences](https://airbnb.com/s/experiences)

![Airbnb Experiences](https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop)

Design focused on quick exploration with a prominent search bar, colorful category chips, and clear per-person pricing. Inspiration for `SearchBar`, `FilterBar`, and `ExperienceCard`.

### 2. GetYourGuide
[getyourguide.com](https://getyourguide.com)

![GetYourGuide](https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop)

Clean card-based layout with high-quality imagery, rating badges, and easy-to-scan activity cards. Inspiration for `ExperienceGrid` and the responsive card layout.

### 3. Viator
[viator.com](https://viator.com)

![Viator](https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop)

Detailed experience pages with sticky price cards, save-to-wishlist functionality, and breadcrumb navigation. Inspiration for the `[id]` detail page layout and sticky price sidebar.

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| Next.js 16 (App Router) | Framework & routing |
| React 19 | UI components |
| TypeScript 5 | Type safety |
| Tailwind CSS v4 | Styling |
| lucide-react | Icons |

## 📁 Repository

This project is part of the [4GeeksAcademy-Guillex1180-ReactyNext](https://github.com/4GeeksAcademy/4GeeksAcademy-Guillex1180-ReactyNext) repository.
