/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenerativeAI } from '@google/generative-ai';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, EXPERIENCE, ACHIEVEMENTS } from '../../src/constants';

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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, history } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY is not configured' });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
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

    // For Vercel Edge/Serverless streaming
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      res.write(chunkText);
    }
    
    res.end();
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Failed to process AI request' });
  }
}
