const navigation = [
  { label: "About", href: "#about" },
  { label: "Profiles", href: "#profiles" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <header className="site-header">
      <div className="site-container flex min-h-[72px] items-center justify-between gap-5">
        <a
          href="#home"
          className="font-[Manrope] text-lg font-extrabold tracking-tight text-stone-900"
          aria-label="Prajwal - home"
        >
          prajwal<span className="text-emerald-800">.</span>
        </a>
        <nav aria-label="Main navigation" className="flex items-center gap-3 sm:gap-7">
          {navigation.map((item) => (
            <a className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
