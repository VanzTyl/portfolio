"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, Mail, MessageSquare } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  // Fix: Added AJAX submission handler required for Netlify Forms in Next.js
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      form.reset();
      onClose();
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };

  return (
    <AnimatePresence>
        <div className={`fixed inset-0 z-100 flex items-center justify-center px-4 pointer-events-auto ${isOpen ? "flex" : "hidden"}`}>
          {/* Blurred Backdrop - This obscures the site behind the modal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-charcoal-950/80 backdrop-blur-md"
          />

          {/* Modal Content - Elevated solid base (900) to contrast against global background (950) */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-charcoal-900 border border-charcoal-700 shadow-2xl shadow-charcoal-950 rounded-2xl overflow-hidden isolate"
          >
            {/* Header - Lighter top edge (800) */}
            <div className="flex items-center justify-between p-6 bg-charcoal-800 border-b border-charcoal-700">
              <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                <div className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-lightning"></span>
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-lightning"></span>
                </div>
                Let's Connect
              </h2>
              <button
                onClick={onClose}
                className="p-2 text-foreground-secondary hover:text-white hover:bg-charcoal-700 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form Base (900) with Inset Inputs (950) */}
            <form 
            name="contact"
            method="POST"
            action="/"
            onSubmit={handleSubmit}
            className="p-6 space-y-5 bg-charcoal-900" 
            data-netlify="true" 
            autoComplete="off">
              <input type="hidden" name="form-name" value="contact" />
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground-secondary flex items-center gap-2">
                  <User className="w-4 h-4" /> Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Please enter your name here"
                  className="w-full px-4 py-3 bg-charcoal-950 border border-charcoal-800 rounded-xl text-white placeholder:text-charcoal-700 focus:outline-none focus:border-lightning focus:ring-1 focus:ring-lightning transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground-secondary flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Please enter your e-mail here"
                  autoComplete="off"
                  className="w-full px-4 py-3 bg-charcoal-950 border border-charcoal-800 rounded-xl text-white placeholder:text-charcoal-700 focus:outline-none focus:border-lightning focus:ring-1 focus:ring-lightning transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground-secondary flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" /> Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="How can we work together?"
                  autoComplete="off"
                  className="w-full px-4 py-3 bg-charcoal-950 border border-charcoal-800 rounded-xl text-white placeholder:text-charcoal-700 focus:outline-none focus:border-lightning focus:ring-1 focus:ring-lightning transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 mt-2 bg-lightning hover:bg-lightning-hover text-white rounded-xl font-medium transition-colors"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
    </AnimatePresence>
  );
}