
import React, { useState, useRef, useEffect } from 'react';
import { getTriageAdvice } from '../services/geminiService';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hello! I'm your CampusCare AI Assistant. How can I help you support our students today? You can ask me to draft a follow-up email, categorize symptoms, or suggest appropriate campus resources." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const advice = await getTriageAdvice(userMessage);
      setMessages(prev => [...prev, { role: 'assistant', content: advice || "I'm sorry, I couldn't process that. Please try again or consult the emergency protocol." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "There was an error connecting to the AI service. Please check your connectivity." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-160px)] flex flex-col animate-in fade-in duration-500">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
          <i className="fas fa-robot text-indigo-500"></i>
          Care AI Assistant
        </h1>
        <p className="text-slate-500">Get instant triage advice and case management support powered by Gemini.</p>
      </header>

      <div className="flex-1 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col">
        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 bg-slate-50/30">
          {messages.map((m, idx) => (
            <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-4 rounded-2xl shadow-sm ${
                m.role === 'user' 
                  ? 'bg-indigo-600 text-white rounded-tr-none' 
                  : 'bg-white border border-slate-100 text-slate-700 rounded-tl-none'
              }`}>
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.content}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-none flex gap-2">
                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-75"></span>
                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-150"></span>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-6 bg-white border-t border-slate-100">
          <div className="flex gap-4">
            <input 
              type="text" 
              placeholder="E.g., 'A student is reporting severe stress about graduation. What's the best resource?'"
              className="flex-1 bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all disabled:opacity-50 shadow-lg shadow-indigo-100"
            >
              <i className="fas fa-paper-plane mr-2"></i>
              Send
            </button>
          </div>
          <p className="text-[10px] text-slate-400 mt-3 text-center uppercase tracking-widest font-bold">
            Always verify AI-generated triage with official campus protocol for critical cases.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
