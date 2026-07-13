import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, MessageSquare, Bot, User, CornerDownLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ChatMessage } from '../types';
import { PRESET_QA, PERSONAL_INFO } from '../data';

export default function InteractiveConsole() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      sender: 'agent',
      text: "Hi there! I'm Shriharsha's Data & AI Agent representative. Ask me anything about Shriharsha's engineering experience, core skills, or projects!",
      timestamp: new Date(),
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Intelligent client-side keyword responder
  const getSimulatedResponse = (query: string): string => {
    const q = query.toLowerCase();
    
    if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('program') || q.includes('language')) {
      return "Shriharsha specializes in Python and SQL (Microsoft SQL Server, BigQuery, Redshift). He has extensive skills in ETL development, data modeling, query optimization, and Azure DevOps, along with cloud architecture in GCP & AWS.";
    }
    if (q.includes('ai') || q.includes('agent') || q.includes('llm') || q.includes('vertex') || q.includes('prompt')) {
      return "He's certified in Agentic AI and Multi-Agent Systems by Google. He built 'Manuel El Manual', a GCP-hosted multi-agent AI orchestration platform, and integrated Gemini AI into 'Atomic OS' for habit verification!";
    }
    if (q.includes('experience') || q.includes('work') || q.includes('job') || q.includes('tekstar') || q.includes('origin')) {
      return "He has 4+ years of experience! Currently a Data Engineer at Tekstar IT in Austin, where he handles enterprise pipelines of over 10 million records. Previously, he designed ETL systems at Origin Hubs and analyzed data at Stigmata Techno Solutions.";
    }
    if (q.includes('project') || q.includes('portfolio') || q.includes('build')) {
      return "His major projects are: 1) 'Atomic OS' (React/Firebase/Gemini AI habit tracker), 2) 'Manuel El Manual' (Multi-Agent platform on GCP), and 3) 'Spotify ETL Pipeline' loading multi-market stats into AWS Redshift.";
    }
    if (q.includes('education') || q.includes('university') || q.includes('college') || q.includes('degree') || q.includes('unt')) {
      return "Shriharsha holds an MS in Business Analytics (2023) from the University of North Texas, and a Bachelor's in Computer Science (2019) from Anna University.";
    }
    if (q.includes('certification') || q.includes('cert') || q.includes('google') || q.includes('microsoft') || q.includes('azure')) {
      return "He holds three key credentials: Google AI Professional Certificate (2026), Agentic AI: Multi-Agent Systems Google Cert (2025), and Microsoft Certified: Azure Data Engineer Associate (DP-203).";
    }
    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('hire') || q.includes('linkedin')) {
      return `You can reach Shriharsha directly at ${PERSONAL_INFO.email}, call him at ${PERSONAL_INFO.phone}, or connect via linkedin.com/in/harsha68. He is based in Austin, TX!`;
    }
    if (q.includes('location') || q.includes('austin') || q.includes('texas') || q.includes('relocate')) {
      return "Shriharsha is based in Austin, TX. He is open to hybrid/onsite roles in the Austin metropolitan area, as well as full-time remote roles.";
    }
    
    return "That's an interesting question! While I represent Shriharsha as an AI agent, you can find full details about his experience, projects, and skills in the tabs below, or ask me about his 'skills', 'experience', 'projects', or 'certifications' directly!";
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: ChatMessage = {
      id: Math.random().toString(),
      sender: 'user',
      text: text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Simulate agent typing and response
    setTimeout(() => {
      const responseText = getSimulatedResponse(text);
      const agentMsg: ChatMessage = {
        id: Math.random().toString(),
        sender: 'agent',
        text: responseText,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, agentMsg]);
      setIsTyping(false);
    }, 1000);
  };

  const handlePresetClick = (qaId: string, question: string) => {
    // Add user question
    const userMsg: ChatMessage = {
      id: Math.random().toString(),
      sender: 'user',
      text: question,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // Get preset answer
    setTimeout(() => {
      const preset = PRESET_QA.find((p) => p.id === qaId);
      const agentMsg: ChatMessage = {
        id: Math.random().toString(),
        sender: 'agent',
        text: preset ? preset.answer : getSimulatedResponse(question),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, agentMsg]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6" id="interactive-console">
      <div className="bg-[#F8F9FA] border-2 border-black p-4 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col h-[520px] md:h-[580px] rounded-none relative">
        {/* Console Header */}
        <div className="flex items-center justify-between border-b-2 border-black pb-4 mb-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-black text-white border-2 border-black rounded-none">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-display font-black text-sm text-[#1A1A1A] uppercase tracking-wide">Shriharsha's Data Assistant</h3>
                <span className="flex h-2.5 w-2.5 bg-green-500 relative rounded-full">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                </span>
              </div>
              <p className="text-[10px] font-mono text-gray-500 font-bold uppercase tracking-widest">Autonomous Recruiter Copilot v1.0</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-white border-2 border-black rounded-none">
            <Sparkles className="w-3 h-3 text-black" />
            <span className="font-mono text-[9px] text-black font-black uppercase tracking-wider">Agentic Mode Active</span>
          </div>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-1 mb-4 scrollbar-none flex flex-col">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 max-w-[85%] ${
                msg.sender === 'user' ? 'self-end flex-row-reverse' : 'self-start'
              }`}
            >
              {/* Avatar */}
              <div className={`p-1.5 rounded-none shrink-0 border-2 ${
                msg.sender === 'user' 
                  ? 'bg-black border-black text-white' 
                  : 'bg-white border-black text-black'
              }`}>
                {msg.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
              </div>

              {/* Message Bubble */}
              <div className={`p-3.5 rounded-none text-xs leading-relaxed font-medium shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
                msg.sender === 'user'
                  ? 'bg-black text-white border border-black'
                  : 'bg-white text-[#1A1A1A] border-2 border-black'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-start gap-2.5 self-start">
              <div className="p-1.5 bg-white border-2 border-black text-black rounded-none">
                <Bot className="w-3.5 h-3.5" />
              </div>
              <div className="bg-white py-3 px-4 rounded-none border-2 border-black flex items-center gap-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="w-1.5 h-1.5 bg-black rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 bg-black rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 bg-black rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Preset Suggestions */}
        <div className="mb-3.5 shrink-0">
          <p className="text-[10px] font-mono text-gray-400 mb-1.5 flex items-center gap-1 uppercase font-black tracking-widest">
            <MessageSquare className="w-3 h-3 text-black" /> Quick Inquiries
          </p>
          <div className="flex flex-wrap gap-2">
            {PRESET_QA.map((p) => (
              <button
                key={p.id}
                id={`preset-${p.id}`}
                onClick={() => handlePresetClick(p.id, p.question)}
                className="px-3 py-1.5 bg-white hover:bg-gray-50 text-[11px] text-black font-mono font-bold uppercase tracking-wider rounded-none border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 text-left cursor-pointer"
              >
                {p.question}
              </button>
            ))}
          </div>
        </div>

        {/* Console Input Footer */}
        <div className="flex gap-2 items-center border-t-2 border-black pt-3 shrink-0">
          <input
            type="text"
            value={inputText}
            id="chat-input"
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(inputText)}
            placeholder="Ask about my skills, certifications, experience, or projects..."
            className="flex-1 bg-white text-black placeholder-gray-400 text-xs rounded-none px-4 py-3 focus:outline-none border-2 border-black font-mono"
          />
          <button
            onClick={() => handleSendMessage(inputText)}
            id="chat-send-btn"
            className="p-3 bg-black hover:bg-gray-950 text-white rounded-none transition-all duration-200 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
