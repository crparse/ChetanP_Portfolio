# 🚀 Chetan Parse | Futuristic AI Portfolio

A premium, high-performance developer portfolio showcasing expertise in Backend Engineering, AI, and Scalable Systems. Built with a futuristic aesthetic and integrated with Gemini AI for an interactive "Core Intelligence" representative experience.

![Project Preview](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop)

---

## 🛠 Tech Stack

### Frontend
- **Framework:** [React 18](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion (motion/react)](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

### Backend & API
- **Runtime:** [Node.js](https://nodejs.org/)
- **Server:** [Express.js](https://expressjs.com/)
- **AI Engine:** [Google Gemini 1.5 Flash](https://ai.google.dev/gemini-api)
- **SDK:** [@google/genai](https://www.npmjs.com/package/@google/genai)
- **Deployment Proxy:** Custom Express API route to secure AI API keys.

---

## 🌟 Key Features

- **Interactive AI Assistant:** A "Core Intelligence Engine" that knows Chetan's career details and can answer technical queries.
- **Futuristic UI/UX:** Dark-themed, high-contrast interface with neon accents and smooth motion transitions.
- **Dynamic Projects Showcase:** Highlighting projects like **ShraK.AI** (AI Cloud IDE), AI Email Automation, and IoT systems.
- **Architecture Proxy:** All AI calls are proxied through a server-side route to ensure `GEMINI_API_KEY` is never exposed to the client.
- **Fully Responsive:** Optimized for everything from mobile devices to ultra-wide monitors.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20 or higher
- A Google AI Studio API Key (Get it from [aistudio.google.com](https://aistudio.google.com/))

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add your key:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run in Development mode:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

---

## 📦 Deployment on Vercel

This project is pre-configured for seamless deployment on Vercel with serverless function support for the AI API.

1. **Push your code to GitHub.**
2. **Import the project** in the [Vercel Dashboard](https://vercel.com/new).
3. **Environment Variables:** In the project settings, add:
   - `GEMINI_API_KEY`: Your actual API key.
4. **Deploy!** Vercel will automatically detect the Vite config and the `api/` directory.

---

## 📂 Project Structure

```text
├── api/                # Vercel Serverless Functions (Backend)
│   └── ai/
│       └── chat.ts     # Gemini AI Proxy Handler
├── src/
│   ├── components/     # UI Components (AIAssistant, ProjectCard, etc.)
│   ├── constants.ts    # Centralized portfolio data
│   ├── services/       # Client-side API services
│   └── App.tsx         # Main Application Entry
├── server.ts           # Development Express Server
├── vercel.json         # Vercel deployment configuration
└── vite.config.ts      # Vite build configuration
```

---

## 📩 Contact

- **Name:** Chetan Parse
- **Email:** [chetanparse73@gmail.com](mailto:chetanparse73@gmail.com)
- **LinkedIn:** [Chetan Parse](https://linkedin.com/in/chetanparse)
- **Role:** Backend Developer & AI Engineer

---

*Built with ❤️ by Chetan Parse.*
