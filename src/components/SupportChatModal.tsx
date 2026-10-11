import React, { useState } from 'react';
import { X, Send, Bot, User, CheckCircle2, Phone, Mail } from 'lucide-react';

interface SupportChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentCity: string;
}

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
}

export const SupportChatModal: React.FC<SupportChatModalProps> = ({
  isOpen,
  onClose,
  currentCity,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'm1',
      sender: 'bot',
      text: `Hello! Welcome to SharePal ${currentCity} support. How can I help you with console rentals, delivery slots, or zero-deposit verification today?`,
      time: 'Just now',
    },
  ]);
  const [input, setInput] = useState('');

  if (!isOpen) return null;

  const quickPrompts = [
    'How does zero deposit work?',
    `What delivery slots in ${currentCity}?`,
    'Can I add extra controllers & FIFA/FC?',
    'How do I extend my rental?',
  ];

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text) return;

    const userMsg: Message = {
      id: 'usr-' + Date.now(),
      sender: 'user',
      text,
      time: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');

    // Generate responsive bot reply
    setTimeout(() => {
      let botReply = `Thank you for asking! Our ${currentCity} support team is ready to assist. You can place your rental order directly, and our delivery executive will handle doorstep handover.`;

      const lower = text.toLowerCase();
      if (lower.includes('deposit') || lower.includes('kyc')) {
        botReply = `SharePal offers ₹0 Security Deposit across ${currentCity} for all verified Indian residents. Simply upload your Aadhaar/Driving license during digital KYC checkout.`;
      } else if (lower.includes('delivery') || lower.includes('slot') || lower.includes('bangalore') || lower.includes(currentCity.toLowerCase())) {
        botReply = `We offer two convenient delivery slots daily in ${currentCity}: Morning (10:00 AM - 1:00 PM) and Evening (4:00 PM - 8:00 PM) with doorstep handover!`;
      } else if (lower.includes('controller') || lower.includes('fifa') || lower.includes('game')) {
        botReply = `All our PS5 and Xbox bundles come with 1, 2, or 4 controllers. EA Sports FC (FC 24/25), Spider-Man 2, God of War Ragnarök, and Mortal Kombat come pre-installed.`;
      } else if (lower.includes('extend')) {
        botReply = `Partial and full extensions are super simple! Just text us or tap "Extend" in your account dashboard at least 4 hours before the scheduled return pickup slot.`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: 'bot-' + Date.now(),
          sender: 'bot',
          text: botReply,
          time: 'Just now',
        },
      ]);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-3xl max-w-md w-full h-[580px] shadow-2xl flex flex-col justify-between relative animate-scaleUp overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-sm">SharePal Care • {currentCity}</h3>
              <p className="text-[11px] text-blue-200 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Online • Instant Reply
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Stream */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50 text-xs">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex gap-2 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'bot' && (
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                  SP
                </div>
              )}
              <div
                className={`max-w-[80%] p-3 rounded-2xl leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-blue-600 text-white rounded-br-none shadow-xs'
                    : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-xs'
                }`}
              >
                <p>{m.text}</p>
                <span
                  className={`text-[9px] block mt-1 ${
                    m.sender === 'user' ? 'text-blue-200 text-right' : 'text-slate-400'
                  }`}
                >
                  {m.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Prompts */}
        <div className="px-3 py-2 bg-white border-t border-slate-100 flex gap-1.5 overflow-x-auto no-scrollbar">
          {quickPrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(p)}
              className="whitespace-nowrap bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-700 text-[10px] font-semibold px-2.5 py-1 rounded-full transition shrink-0 cursor-pointer"
            >
              {p}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-white border-t border-slate-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 text-xs bg-slate-100 border border-slate-200 rounded-xl px-3 py-2.5 text-slate-800 focus:bg-white focus:border-blue-500"
            />
            <button
              type="submit"
              className="p-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2 px-1">
            <span>Direct WhatsApp: +91 80 4718 1920</span>
            <span>care@sharepal.in</span>
          </div>
        </div>
      </div>
    </div>
  );
};
