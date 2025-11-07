# School ERP Dashboard

A modern, AI-powered ERP dashboard interface for a School Management System, inspired by Perplexity AI, Notion, and Linear.app.

## Features

- 🎨 **Modern Design**: Sleek dark theme with navy blue, graphite, and black tones
- ✨ **Glassmorphism**: Beautiful glass-like effects with backdrop blur
- 🌈 **Neon Accents**: Electric violet and cyan accent colors
- 📊 **Interactive Charts**: Performance trends with Recharts
- 🤖 **AI Chat**: Integrated AI assistant panel
- 📱 **Responsive**: Fully responsive design
- ⚡ **Smooth Animations**: Micro-animations and transitions

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Recharts
- Lucide React (Icons)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx          # Left navigation sidebar
│   ├── Navbar.jsx           # Top navigation bar
│   ├── Dashboard.jsx        # Main dashboard container
│   └── dashboard/
│       ├── KPICards.jsx     # KPI metric cards
│       ├── PerformanceChart.jsx  # Performance trends chart
│       ├── ActivityFeed.jsx      # Recent activity timeline
│       └── AIChat.jsx            # AI assistant chat panel
├── lib/
│   └── utils.js            # Utility functions
├── App.jsx                  # Main app component
├── main.jsx                 # Entry point
└── index.css               # Global styles
```

---

## 🚀 Live Demo
🔗 **[View on Vercel](https://mintrix-erp-harsh.vercel.app)**

---

## 🧩 Tech Stack

| Layer | Tools |
|-------|--------|
| Framework | React (Vite) |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| UI Components | shadcn/ui *(optional)* |
| AI Integration | Serverless OpenAI Proxy (Vercel Function) |
| Deployment | Vercel |

---

## 🧱 Folder Structure



## Design System

- **Colors**: Dark navy background with neon violet (#a855f7) and cyan (#06b6d4) accents
- **Typography**: Inter font family
- **Effects**: Glassmorphism, glow effects, smooth transitions
- **Animations**: Fade-in, slide-in, glow animations

## Components

### Sidebar
- Collapsible navigation menu
- Dashboard, Students, Attendance, Reports, Settings
- Glassmorphism styling with hover effects

### Navbar
- Global search bar
- AI assistant button
- Notifications
- User profile

### Dashboard
- KPI cards with metrics
- Performance trend charts
- Activity feed
- AI chat interface


