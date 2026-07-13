import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactCard() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setFormState('sending');
    setTimeout(() => {
      setFormState('success');
      setName('');
      setEmail('');
      setMessage('');
    }, 1500);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8" id="contact-section">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-black mb-3.5">
          <Mail className="w-3.5 h-3.5 text-black" />
          <span className="font-mono text-[10px] text-black font-black uppercase tracking-widest">Connection</span>
        </div>
        <h2 className="text-3xl font-display font-black text-[#1A1A1A] uppercase tracking-tight">
          Let's Build Together
        </h2>
        <p className="text-gray-600 text-xs sm:text-sm mt-1.5 max-w-xl mx-auto font-medium">
          Interested in discussing high-performance data pipelines, cloud analytics, or autonomous AI workflows? Connect with me directly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        
        {/* Contact Info Card */}
        <div className="p-6 md:p-8 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex flex-col justify-between relative">
          
          <div>
            <h3 className="font-display font-black text-xl text-[#1A1A1A] uppercase tracking-tight mb-2.5">
              Contact Information
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-8 max-w-sm font-medium">
              Feel free to call, email, or message me. I typically respond within 24 hours. Based in Austin, TX—open to remote and hybrid arrangements.
            </p>

            {/* Infolist */}
            <div className="space-y-4">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-4 p-3 bg-[#F8F9FA] border-2 border-black hover:bg-gray-50 text-black transition-all duration-150"
                id="contact-email-link"
              >
                <span className="p-2.5 bg-black text-white border-2 border-black shrink-0">
                  <Mail className="w-4 h-4" />
                </span>
                <div className="text-left">
                  <p className="text-[10px] font-mono text-gray-400 font-bold uppercase tracking-widest">Email Me</p>
                  <p className="text-xs font-bold text-black">{PERSONAL_INFO.email}</p>
                </div>
              </a>

              <a 
                href="tel:+19407582745"
                className="flex items-center gap-4 p-3 bg-[#F8F9FA] border-2 border-black hover:bg-gray-50 text-black transition-all duration-150"
                id="contact-phone-link"
              >
                <span className="p-2.5 bg-black text-white border-2 border-black shrink-0">
                  <Phone className="w-4 h-4" />
                </span>
                <div className="text-left">
                  <p className="text-[10px] font-mono text-gray-400 font-bold uppercase tracking-widest">Call Me</p>
                  <p className="text-xs font-bold text-black">{PERSONAL_INFO.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-3 bg-[#F8F9FA] border-2 border-black text-black">
                <span className="p-2.5 bg-black text-white border-2 border-black shrink-0">
                  <MapPin className="w-4 h-4" />
                </span>
                <div className="text-left">
                  <p className="text-[10px] font-mono text-gray-400 font-bold uppercase tracking-widest">Location</p>
                  <p className="text-xs font-bold text-black">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social connections */}
          <div className="pt-6 border-t-2 border-black mt-8 flex items-center justify-between">
            <span className="font-mono text-[10px] text-gray-500 font-bold uppercase tracking-widest">Find Me On Socials</span>
            <div className="flex gap-2">
              <a 
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 bg-black hover:bg-gray-950 text-white text-xs font-mono font-black uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
                id="contact-linkedin-link"
              >
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Messaging Form */}
        <div className="p-6 md:p-8 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex flex-col justify-center relative">
          <AnimatePresence mode="wait">
            {formState === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-8 flex flex-col items-center justify-center"
              >
                <div className="p-4 bg-black text-white border-2 border-black mb-4 shrink-0">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-display font-black text-xl text-[#1A1A1A] uppercase tracking-tight mb-1.5">
                  Message Sent Safely!
                </h3>
                <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed mb-6 font-medium">
                  Thank you! Your payload was successfully ingested. I will get in touch with you as soon as possible.
                </p>
                <button
                  onClick={() => setFormState('idle')}
                  className="px-4 py-2 bg-white hover:bg-gray-50 text-black font-mono text-xs font-black uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <h3 className="font-display font-black text-xl text-[#1A1A1A] uppercase tracking-tight mb-2 pb-2 border-b-2 border-black">
                  Send Direct Message
                </h3>

                <div>
                  <label htmlFor="form-name" className="block text-[10px] font-mono text-black font-black uppercase tracking-widest mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="form-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={formState === 'sending'}
                    placeholder="Jane Doe"
                    className="w-full bg-white text-black placeholder-gray-400 text-xs rounded-none px-4 py-3 focus:outline-none border-2 border-black font-mono"
                  />
                </div>

                <div>
                  <label htmlFor="form-email" className="block text-[10px] font-mono text-black font-black uppercase tracking-widest mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="form-email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={formState === 'sending'}
                    placeholder="jane@example.com"
                    className="w-full bg-white text-black placeholder-gray-400 text-xs rounded-none px-4 py-3 focus:outline-none border-2 border-black font-mono"
                  />
                </div>

                <div>
                  <label htmlFor="form-message" className="block text-[10px] font-mono text-black font-black uppercase tracking-widest mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    id="form-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={formState === 'sending'}
                    placeholder="Hi Shriharsha, I'd love to connect regarding..."
                    className="w-full bg-white text-black placeholder-gray-400 text-xs rounded-none px-4 py-3 focus:outline-none border-2 border-black font-mono resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="form-submit-btn"
                  disabled={formState === 'sending'}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-black hover:bg-gray-950 text-white rounded-none font-mono text-xs font-black uppercase tracking-wider transition-all duration-200 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50 cursor-pointer"
                >
                  {formState === 'sending' ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Ingesting Payload...
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      Send Transmission
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
