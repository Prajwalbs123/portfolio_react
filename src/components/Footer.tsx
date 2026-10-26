const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-container flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Prajwal. Built with care.</p>
        <div className="flex gap-5 font-semibold">
          <a
            className="transition-colors hover:text-emerald-800"
            href="https://github.com/Prajwalbs123"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <a
            className="transition-colors hover:text-emerald-800"
            href="https://www.linkedin.com/in/prajwal-b-s-877a40202"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
