/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import Section from './Section';
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';
import { streamAI } from '../services/aiService';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "INTELLIGENCE_CORE_ONLINE. I am the high-fidelity digital projection of Chetan Parse's technical persona. How can I assist with your engineering inquiry?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const QUICK_ACTIONS = [
    { label: "Analyze Tech Stack", query: "Can you provide a technical analysis of Chetan's backend tech stack?" },
    { label: "Project Architecture", query: "Explain the architecture of ShraK.AI." },
    { label: "Coding Proficiency", query: "What are Chetan's DSA and coding statistics?" },
    { label: "Contact Protocol", query: "What is the best way to collaborate with Chetan?" }
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleAction = (query: string) => {
    if (isLoading) return;
    processMessage(query);
  };

  const processMessage = async (text: string) => {
    const userMsg: Message = { role: 'user', content: text };
    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    // Format history for Gemini
    const chatHistory = messages.map(m => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }]
    }));

    setMessages(prev => [...prev, { role: 'assistant', content: "" }]);
    
    let fullResponse = "";
    try {
      const stream = streamAI(text, chatHistory);
      for await (const chunk of stream) {
        fullResponse += chunk;
        setMessages(prev => {
          const newMessages = [...prev];
          if (newMessages.length > 0) {
            newMessages[newMessages.length - 1] = { 
              ...newMessages[newMessages.length - 1], 
              content: fullResponse 
            };
          }
          return newMessages;
        });
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Streaming error:", error);
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1] = { 
          ...newMessages[newMessages.length - 1], 
          content: "ERROR_DETECTION: High latency or neural interference detected. System is auto-recovering. Please re-establish session." 
        };
        return newMessages;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    const msg = input.trim();
    setInput("");
    processMessage(msg);
  };

  return (
    <Section id="ai-assistant" subtitle="05 // PRO AI" title="Intelligence Interface">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-card flex flex-col h-[700px] p-0 overflow-hidden border-neon-blue/20 bg-black/40 backdrop-blur-3xl"
        >
          {/* Header */}
          <div className="bg-white/5 px-6 py-5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center relative group">
                <Bot className="w-7 h-7 text-neon-blue group-hover:scale-110 transition-transform" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-4 border-deep-bg animate-pulse" />
              </div>
              <div>
                <h3 className="font-mono font-bold text-sm tracking-tight">CHETAN_OS // AGENT_V4</h3>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
                  <p className="text-[10px] text-white/40 font-mono uppercase tracking-[0.2em]">Neural Sync: 98.4%</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-[8px] font-mono text-white/20 uppercase">Core Temperature</span>
                <span className="text-[10px] font-mono text-neon-purple">32.4°C</span>
              </div>
              <Sparkles className="w-5 h-5 text-neon-purple animate-pulse" />
            </div>
          </div>

          {/* Chat area */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-8 space-y-8 scroll-smooth scrollbar-thin"
          >
            {/* Quick Actions at the very start */}
            <div className="flex flex-wrap gap-2 mb-4">
              {QUICK_ACTIONS.map((action) => (
                <button
                  key={action.label}
                  onClick={() => handleAction(action.query)}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-white/50 hover:bg-neon-blue/10 hover:text-neon-blue hover:border-neon-blue/50 transition-all active:scale-95"
                >
                  {">"} {action.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="popLayout">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: m.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-4 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-10 h-10 rounded-xl shrink-0 flex items-center justify-center border shadow-lg ${
                      m.role === 'user' ? 'bg-neon-purple/20 border-neon-purple/30' : 'bg-neon-blue/20 border-neon-blue/30'
                    }`}>
                      {m.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5 text-neon-blue" />}
                    </div>
                    <div className={`p-5 rounded-2xl text-[13px] leading-relaxed shadow-xl ${
                      m.role === 'user' 
                        ? 'bg-neon-purple/10 border border-neon-purple/20 rounded-tr-none text-white/90' 
                        : 'glass border border-white/10 rounded-tl-none text-white/80'
                    }`}>
                      <div className="font-mono text-[10px] opacity-30 mb-2 uppercase tracking-widest">
                        {m.role === 'user' ? 'Local_User' : 'Chetan_Agent'}
                      </div>
                      {m.content}
                    </div>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-neon-blue/20 border border-neon-blue/30 flex items-center justify-center">
                      <Loader2 className="w-5 h-5 text-neon-blue animate-spin" />
                    </div>
                    <div className="p-5 glass rounded-2xl rounded-tl-none text-[13px] text-white/40 font-mono italic">
                      [INFO] Processing request through Neural_Net...
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white/5 border-t border-white/10 backdrop-blur-xl">
            <form 
              onSubmit={handleSend}
              className="relative group"
            >
              <div className="absolute inset-0 bg-neon-blue/5 rounded-2xl blur-xl group-focus-within:bg-neon-blue/10 transition-all pointer-events-none" />
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Query the Intelligence Core..."
                className="w-full bg-deep-bg border border-white/10 rounded-2xl py-5 pl-8 pr-16 focus:outline-none focus:border-neon-blue/50 transition-all text-sm font-mono placeholder:text-white/20 relative z-10"
              />
              <button 
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-3 top-3 bottom-3 px-5 rounded-xl bg-neon-blue text-deep-bg hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100 z-20 flex items-center justify-center shadow-lg hover:shadow-neon-blue/30"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
            <div className="mt-4 flex justify-between items-center px-2">
              <p className="text-[9px] text-white/20 uppercase font-mono tracking-[0.3em]">
                Architecture: Gemini-3 Pro-Engine // LLM-v4.0
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-[9px] font-mono text-white/30 uppercase">Secure</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
                  <span className="text-[9px] font-mono text-white/30 uppercase">Ready</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
