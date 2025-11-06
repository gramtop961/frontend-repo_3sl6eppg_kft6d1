import { ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Products", href: "#products" },
    { name: "New", href: "#new" },
    { name: "Deals", href: "#deals" },
    { name: "Support", href: "#support" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl/80 bg-white/60 dark:bg-zinc-900/60 border-b border-white/20 dark:border-zinc-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2">
          <span className="h-7 w-7 rounded-md bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-cyan-400" />
          <span className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 text-lg">PulseTech</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              {l.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="relative inline-flex items-center gap-2 rounded-full bg-zinc-900 text-white px-4 py-2 shadow-lg shadow-zinc-900/10 hover:shadow-zinc-900/20 transition">
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">Cart</span>
            <span className="absolute -top-1 -right-1 h-5 w-5 text-xs grid place-items-center bg-gradient-to-r from-fuchsia-500 to-cyan-400 rounded-full">2</span>
          </button>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-zinc-200 dark:border-zinc-800"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-4">
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl p-3 space-y-1">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/50"
              >
                {l.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
