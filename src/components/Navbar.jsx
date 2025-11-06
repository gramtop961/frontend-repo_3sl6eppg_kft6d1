import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#" className="group inline-flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-cyan-400 shadow-[0_0_40px_-10px] shadow-cyan-400 transition-transform group-hover:scale-110" />
          <span className="text-sm font-semibold tracking-wider text-white/90">NovaTech</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-white/70 hover:text-white">Features</a>
          <a href="#showcase" className="text-sm text-white/70 hover:text-white">New</a>
          <a href="#contact" className="text-sm text-white/70 hover:text-white">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80 hover:bg-white/10">
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">Cart</span>
          </button>
          <button
            className="md:hidden rounded-md border border-white/10 bg-white/5 p-2 text-white/80"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-3 md:px-6">
            <div className="grid gap-2">
              <a href="#features" className="rounded-md px-2 py-2 text-sm text-white/80 hover:bg-white/5">Features</a>
              <a href="#showcase" className="rounded-md px-2 py-2 text-sm text-white/80 hover:bg-white/5">New</a>
              <a href="#contact" className="rounded-md px-2 py-2 text-sm text-white/80 hover:bg-white/5">Contact</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
