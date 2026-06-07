# تخصص سازان (Hire Freelancer)

A Persian (RTL) freelance marketplace frontend built with React and TypeScript. The app connects **employers (کارفرما)**, **freelancers (فریلنسر)**, and **admins** through project listings, proposals, and role-based dashboards.

**Live demo:** [https://hire-freelancer-react.vercel.app/](https://hire-freelancer-react.vercel.app/)

---

## Overview

This repository is the frontend for the Hire Freelancer platform. It runs in **frontend-only demo mode** — all data is stored in the browser via `localStorage` through a mock API layer. No backend server is required to explore the full workflow.

| Role | Description |
|------|-------------|
| **Owner** | Post projects, manage listings, review and accept/reject freelancer proposals |
| **Freelancer** | Browse open projects, submit proposals, track submitted requests |
| **Admin** | View platform stats, manage user verification status, oversee projects and proposals |
| **Guest** | Browse the public home page and open projects |

---

## Features

### Authentication & profiles
- One-click demo login by role (Admin / Owner / Freelancer)
- Sign up as Owner or Freelancer
- Profile editing
- Role-based route protection and verification checks

### Projects
- Create, edit, and delete projects (Owner)
- Search, filter by category/status, and sort projects
- Toggle project open/closed status
- View project details and attached proposals
- Browse recommended and submitted projects

### Proposals
- Submit proposals on open projects (Freelancer)
- Accept or reject proposals (Owner) — accepting closes the project and assigns the freelancer
- Filter and sort proposals by status

### Admin panel
- Dashboard with platform statistics
- User list with status management (pending / verified)
- Global view of projects and proposals

### UX
- RTL Persian UI
- Dark mode toggle
- Favorite projects (persisted in `localStorage`)
- Toast notifications
- Responsive layout with sidebar navigation for dashboards

---

## Tech stack

| Category | Tools |
|----------|-------|
| Framework | [React 18](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) |
| Build tool | [Vite 5](https://vitejs.dev/) |
| Routing | [React Router v6](https://reactrouter.com/) |
| Data fetching | [TanStack React Query v4](https://tanstack.com/query) |
| Forms | [React Hook Form](https://react-hook-form.com/) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/), [MUI 5](https://mui.com/), [Headless UI](https://headlessui.com/) |
| HTTP client | [Axios](https://axios-http.com/) (service layer; demo uses mock store) |
| Icons | [React Icons](https://react-icons.github.io/react-icons/) |
| Notifications | [React Hot Toast](https://react-hot-toast.com/) |
| Date picker | [React Multi Date Picker](https://shahabyazdi.github.io/react-multi-date-picker/) (Persian calendar support) |
| Other | React OTP Input, React Tag Input, React Loader Spinner |

---

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd hire-freelancer-react

# Install dependencies
npm install
```

### Environment variables

Create a `.env` file in the project root (optional for demo mode):

```env
# Frontend-only demo mode — no backend API needed
```

The app works out of the box without additional configuration.

### Development

```bash
npm run dev
```

The dev server starts at [http://localhost:3000](http://localhost:3000).

### Other scripts

| Command | Description |
|---------|-------------|
| `npm run build` | Type-check with `tsc` and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint on `.ts` and `.tsx` files |

---

## Demo usage

### Quick login

1. Open [http://localhost:3000/auth](http://localhost:3000/auth) (or click **ورود دمو** on the home page).
2. Choose a role:
   - **ادمین** — Admin panel
   - **کارفرما** — Owner (post and manage projects)
   - **فریلنسر** — Freelancer (browse and propose on projects)

No password is required in demo mode; login is instant.

### Pre-seeded demo accounts

| Role | Name | Email | Phone |
|------|------|-------|-------|
| Admin | مدیر سیستم | admin@takhasossazan.ir | 09120000001 |
| Owner | علی کارفرما | owner@takhasossazan.ir | 09234949876 |
| Freelancer | سارا فریلنسر | freelancer@takhasossazan.ir | 09352587903 |

Additional seed users (pending verification) are included for admin testing.

### Reset demo data

Clear browser `localStorage` keys prefixed with `hf_`, or run in the browser console:

```js
Object.keys(localStorage)
  .filter((k) => k.startsWith("hf_"))
  .forEach((k) => localStorage.removeItem(k));
```

Reload the page to restore seed data.

---

## Routes

| Path | Access | Description |
|------|--------|-------------|
| `/` | Public | Home — project browsing and role-specific sections |
| `/auth` | Public | Login and signup |
| `/complete-profile` | Authenticated | Complete user profile |
| `/edit-profile` | Authenticated | Edit profile |
| `/owner/dashboard` | Owner | Owner dashboard |
| `/owner/projects` | Owner | Manage own projects |
| `/owner/projects/:id` | Owner | Project detail and proposals |
| `/freelancer/dashboard` | Freelancer | Freelancer dashboard |
| `/freelancer/projects` | Freelancer | Browse submitted/open projects |
| `/freelancer/proposals` | Freelancer | My proposals |
| `/admin/dashboard` | Admin | Admin dashboard |
| `/admin/users` | Admin | User management |
| `/admin/projects` | Admin | All projects |
| `/admin/proposals` | Admin | All proposals |
| `/recomended-projects` | Public | Recommended projects |
| `/sended-proposals` | Authenticated | Sent proposals |
| `/favourit-projects` | Authenticated | Saved favorite projects |
| `/order-project` | Authenticated | Register / order a project |

Protected routes redirect unauthenticated users to `/auth`. Users with unverified status (`status !== 2`) are redirected to the home page.

---

## Project structure

```
hire-freelancer-react/
├── public/                 # Static assets
├── src/
│   ├── context/            # React context (auth, dark mode, favorites)
│   ├── feachures/          # Feature modules by domain
│   │   ├── admin/          # Admin dashboard, users, stats
│   │   ├── authentication/ # Login, signup, profile, OTP forms
│   │   ├── freelancer/     # Freelancer dashboard and proposals
│   │   ├── owner/          # Owner dashboard and home sections
│   │   ├── projects/       # Project CRUD, tables, filters
│   │   ├── project/        # Single project view and proposal actions
│   │   ├── proposals/      # Proposal listing and management
│   │   ├── order-projects/ # Project registration flow
│   │   └── recomended-projects/
│   ├── hooks/              # Shared custom hooks
│   ├── mocks/
│   │   ├── mockStore.ts    # localStorage-backed mock API
│   │   └── seedData.ts     # Demo users, projects, proposals, categories
│   ├── pages/              # Route-level page components
│   ├── services/           # API service functions (delegate to mockStore)
│   ├── types/              # Shared TypeScript types
│   ├── ui/                 # Reusable UI components
│   ├── utils/              # Helpers (dates, text truncation)
│   ├── App.tsx             # Root routes and providers
│   └── main.tsx            # App entry point
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## Architecture

### Mock data layer

In demo mode, all service modules (`authService`, `projectService`, `proposalService`, `CategoryService`) call `mockStore`, which:

1. Seeds initial data from `src/mocks/seedData.ts` on first load
2. Persists reads/writes to `localStorage` under these keys:
   - `hf_users`
   - `hf_projects`
   - `hf_proposals`
   - `hf_categories`
   - `hf_current_user`
3. Simulates network latency with short `delay()` calls

### State management

- **TanStack React Query** — server state, caching, and mutations
- **React Context** — authentication session, dark mode, favorites
- **localStorage** — favorites list and mock persistence

### Authorization

`ProtectedRoute` and `useAuthorize` enforce:

- User is authenticated
- User is verified (`status === 2`)
- User role matches the route prefix (`/admin`, `/owner`, `/freelancer`)

---

## Connecting a real backend

The service layer is structured to swap `mockStore` calls for real HTTP requests. Replace implementations in `src/services/` with Axios calls to your API, and add environment variables such as:

```env
VITE_API_BASE_URL=https://your-api.example.com
```

Ensure API responses match the shapes defined in `src/types/index.ts`.

---

## Deployment

Build the production bundle:

```bash
npm run build
```

Output is written to the `dist/` folder. Deploy `dist/` to any static host (Netlify, Vercel, Liara, etc.).

The live demo is hosted at [https://takhasossazan.liara.run/](https://takhasossazan.liara.run/).

---

## Contact

For questions or inquiries, contact the project maintainer at [seyedalirafazi80@gmail.com](mailto:seyedalirafazi80@gmail.com).

---

## License

This project is private. All rights reserved unless otherwise specified by the repository owner.
