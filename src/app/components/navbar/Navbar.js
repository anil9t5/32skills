import Link from "next/link";

const navItems = {
  "/": {
    name: "home",
  },
  "/pages/privacy-policy": {
    name: "privacy",
  },
  //   "https://vercel.com/templates/next.js/portfolio-starter-kit": {
  //     name: "deploy",
  //   },
};

export function Navbar() {
  return (
    <div>
      <nav id="nav">
        <div>
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
              >
                {name}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
