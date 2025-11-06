import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="relative mt-10 border-t border-white/10 bg-white/[0.02]">
      <div className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-24 max-w-7xl bg-gradient-to-r from-fuchsia-500/10 via-purple-500/10 to-cyan-400/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4 md:px-6">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-cyan-400" />
            <span className="text-sm font-semibold tracking-wider text-white/90">NovaTech</span>
          </div>
          <p className="mt-3 max-w-md text-sm text-white/70">Minimal, futuristic hardware crafted for the age of AI. Designed to feel alive — yet calm.</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Press</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Get updates</h4>
          <form className="mt-3 flex gap-2">
            <input type="email" required placeholder="Email address" className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
            <button type="submit" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">© {new Date().getFullYear()} NovaTech. All rights reserved.</div>
    </footer>
  );
}
