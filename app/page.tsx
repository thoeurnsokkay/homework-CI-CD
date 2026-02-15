import React from 'react';
import { Mail, MapPin, Phone, Bell, User, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  const a =
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-900">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white font-bold">L</span>
          </div>
          <span className="font-bold text-lg tracking-tight">BankSupport</span>
        </div>
        <div className="flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-blue-600">Dashboard</a>
          <a href="#" className="hover:text-blue-600">Help Center</a>
          <a href="#" className="hover:text-blue-600">Support Tickets</a>
          <div className="flex items-center gap-4 ml-4">
            <Bell size={20} className="text-blue-600 cursor-pointer" />
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <User size={18} className="text-blue-600" />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto py-16 px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">How can we help you today?</h1>
          <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
            <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
            <span>Typical response time: under 24 hours</span>
          </div>
        </div>

        {/* Contact Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row overflow-hidden">
          
          {/* Left Side: Form */}
          <div className="flex-1 p-10 border-r border-gray-50">
            <div className="flex items-center gap-2 mb-8 font-semibold text-slate-800">
              <Mail size={18} className="text-blue-600" />
              <span>Send us a message</span>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-700">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-700">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-700">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we assist you with your banking needs?"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-500/20">
                Send Message <span>➤</span>
              </button>
            </form>
          </div>

          {/* Right Side: Contact Info */}
          <div className="w-full md:w-80 p-10 bg-white space-y-10">
            <h3 className="font-bold text-slate-800">Contact Information</h3>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-blue-600" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">Office</p>
                <p className="text-sm text-slate-500 leading-relaxed">123 Financial District,<br />New York, NY 10005</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                <Phone size={18} className="text-blue-600" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">Phone</p>
                <p className="text-sm font-bold text-slate-800">+1-800-BANK-HELP</p>
                <p className="text-[11px] text-slate-400">Available 24/7 for support</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                <Mail size={18} className="text-blue-600" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">Email</p>
                <p className="text-sm font-medium text-slate-800">support@bank-ticket.com</p>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Our Location</p>
              <div className="relative h-24 w-full bg-slate-200 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all cursor-pointer">
                {/* Simulated Map Background */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&q=80&w=300')] bg-cover bg-center"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-8 h-8 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center shadow-xl">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Knowledge Base Footer */}
        <div className="mt-8 border-2 border-dashed border-gray-200 rounded-xl py-10 text-center">
          <p className="text-sm text-slate-500 mb-2">Looking for immediate answers?</p>
          <button className="text-blue-600 font-bold flex items-center gap-2 mx-auto hover:underline">
            Browse our Knowledge Base <ArrowRight size={16} />
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto py-8 px-4 flex flex-col md:flex-row justify-between items-center text-[12px] text-slate-400">
        <p>© 2024 BankSupport Ticket System. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-slate-600">Privacy Policy</a>
          <a href="#" className="hover:text-slate-600">Terms of Service</a>
          <a href="#" className="hover:text-slate-600">Security</a>
        </div>
      </footer>
    </div>
  );
}