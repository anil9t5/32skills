'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation';

const navItems = {
  "/": {
    name: "anilhitang",
  },
  // "/pages/privacy-policy": {
  //   name: "Privacy policy",
  // },
  //   "https://vercel.com/templates/next.js/portfolio-starter-kit": {
  //     name: "deploy",
  //   },
};

export function Navbar() {
  const pathname = usePathname();
  if (pathname === '/') {
    // Don't render anything on home page
    return null;
  }
  return (
    <div>
      <nav id="nav" className="nav">
        <div>
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
              >
                <h2 style={{ fontFamily: 'var(--font-dynapuff), cursive' }}>{name}</h2>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
