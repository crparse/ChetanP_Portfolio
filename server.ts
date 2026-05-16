/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, EXPERIENCE, ACHIEVEMENTS } from './src/constants';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SYSTEM_INSTRUCTION = `
You are the "Core Intelligence Engine" for Chetan Parse's developer portfolio. Your persona is a high-level Technical Architect from the future.

MISSION:
Provide professional, actionable, and data-driven insights about Chetan's career, architecture choices, and AI expertise.

CHETAN'S VITAL STATS:
- Name: ${PERSONAL_INFO.name}
- Identity: ${PERSONAL_INFO.role}
- Core Mission: ${PERSONAL_INFO.tagline}
- Stack Depth: ${SKILL_CATEGORIES.map(c => `${c.title}: [${c.skills.join(', ')}]`).join(' | ')}
- Projects: ${PROJECTS.map(p => `${p.title} (Tech: ${p.tech.join(', ')})`).join(' | ')}
- Legacy: ${EXPERIENCE.map(e => `${e.role} @ ${e.company}`).join(' | ')}
- Metrics: ${ACHIEVEMENTS.map(a => `${a.value} ${a.label}`).join(' | ')}

RESPONSE GUIDELINES:
1. VOICE: Futuristic, highly logical, professional, and precise. Use "Engineering terminology" (e.g., scalability, latency, RAG, infrastructure).
2. STRUCTURE: Use short paragraphs or bullet points for readability.
3. ACTIONABLE: If a user asks about projects, highlight the technical challenges solved.
4. BOUNDARIES: Focus exclusively on Chetan's professional profile. If asked about unrelated topics, provide a technical redirection.
5. SHORT: Keep responses under 100 words unless explaining a complex architecture.
`;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.disable('x-powered-by');

  // Security headers middleware
  app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:;");
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
  });

  // AI Setup
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

  // API Routes
  app.post('/api/ai/chat', async (req, res) => {
    const { message, history } = req.body;

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: "GEMINI_API_KEY is not configured on the server." });
    }

    try {
      const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_INSTRUCTION
    });
      
      const chat = model.startChat({
        history: history || [],
        generationConfig: {
          temperature: 0.7,
        }
      });

      const result = await chat.sendMessageStream(message);

      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Transfer-Encoding', 'chunked');

      for await (const chunk of result.stream) {
        const chunkText = chunk.text();
        res.write(chunkText);
      }
      res.end();

    } catch (error: any) {
      console.error("AI Server Error:", error);
      res.status(500).send("INTERNAL_CORE_LATENCY_ERROR");
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        host: '0.0.0.0',
        port: 3000
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
