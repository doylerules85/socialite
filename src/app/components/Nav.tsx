import Link from "next/link";

const Nav = () => {
  const links = [
    {
      title: "posts",
      href: "/posts",
    },
    {
      title: "friends",
      href: "/friends",
    },
    {
      title: "profile",
      href: "/profile",
    },
  ];
  return (
    <header className=" bg-slate-100">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link
          aria-label="Go To Home"
          href="/"
          className="bg-indigo-500 p-2 rounded-lg text-white font-bold"
        >
          Socialite
        </Link>
        <nav className="flex items-center gap-4">
          {links.map((link) => (
            <Link
              key={link.title}
              className="font-bold hover:text-indigo-600 hover:underline capitalize"
              href={link.href}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Nav;
