import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    
    
      <nav className="pointer-events-auto hidden md:block">
    <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 ring-1 shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <li>
            <Link to="/">
                <div className="relative block px-3 py-2 transition text-teal-500 dark:text-teal-400">
                    About<span className="absolute inset-x-1 -bottom-px h-px bg-linear-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
                </div>
            </Link>
        </li>
        <li>
            <Link to="/Contact">
                <div className="relative block px-3 py-2 transition text-teal-500 dark:text-teal-400">
                    About<span className="absolute inset-x-1 -bottom-px h-px bg-linear-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
                </div>
            </Link>
        </li>
        <li>
            <Link to="/Service">
                <div className="relative block px-3 py-2 transition text-teal-500 dark:text-teal-400">
                    About<span className="absolute inset-x-1 -bottom-px h-px bg-linear-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
                </div>
            </Link>
        </li>
       
       
    </ul>
</nav>
  )
}

export default Navbar;