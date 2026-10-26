import LeetCode from "../assets/images/LC.png";
import GeeksForGeeks from "../assets/images/GFG.jpg";
import Project from "./Project";

const codingProfiles = [
  {
    name: "LeetCode",
    handle: "prajwalshirshyad",
    image: LeetCode,
    href: "https://leetcode.com/prajwalshirshyad/",
  },
  {
    name: "GeeksforGeeks",
    handle: "prajwalshirshyad",
    image: GeeksForGeeks,
    href: "https://auth.geeksforgeeks.org/user/prajwalshirshyad/practice",
  },
];

const Home = () => {
  return (
    <>
      <section id="home" className="site-container hero-section">
        <div>
          <p className="eyebrow">Information Science Engineering student</p>
          <h1 className="hero-title">
            Hi, I’m
            <br />
            <span>Prajwal.</span>
          </h1>
          <p className="hero-copy">
            I enjoy solving problems, learning how things work, and building my
            skills one project at a time.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="primary-button" href="#projects">
              Explore my work <span aria-hidden="true">↘</span>
            </a>
            <a className="secondary-button" href="#contact">
              Get in touch
            </a>
            <a
              className="secondary-button"
              href="https://drive.google.com/file/u/2/d/1tBEb6eAlUead6OpnC9g3jmSH2W4N2cPg/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume ↗
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-stone-500">
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
            <a
              className="transition-colors hover:text-emerald-800"
              href="mailto:prajwalshirshard@gmail.com"
            >
              Email ↗
            </a>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="hero-art-glow" />
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />
          <div className="hero-art-tags">
            <span className="hero-float-tag">
              <span className="hero-tag-symbol">&lt;/&gt;</span> Web development
            </span>
            <span className="hero-float-tag">
              <span className="hero-tag-symbol">✳</span> Problem solving
            </span>
          </div>
          <div className="hero-code-card">
            <div className="hero-code-card-header">
              <div className="hero-window-controls">
                <span />
                <span />
                <span />
              </div>
              <span className="hero-file-name">about-me.json</span>
              <span className="hero-file-type">JSON</span>
            </div>
            <div className="hero-code-content">
              <div className="hero-code-line">
                <span className="hero-line-number">01</span>
                <span>{"{"}</span>
              </div>
              <div className="hero-code-line">
                <span className="hero-line-number">02</span>
                <span className="hero-code-indent">
                  <span className="hero-code-key">&quot;name&quot;</span>
                  <span className="hero-code-punctuation">: </span>
                  <span className="hero-code-string">&quot;Prajwal&quot;</span>,
                </span>
              </div>
              <div className="hero-code-line">
                <span className="hero-line-number">03</span>
                <span className="hero-code-indent">
                  <span className="hero-code-key">&quot;studies&quot;</span>
                  <span className="hero-code-punctuation">: </span>
                  <span className="hero-code-string">&quot;Info Science&quot;</span>,
                </span>
              </div>
              <div className="hero-code-line">
                <span className="hero-line-number">04</span>
                <span className="hero-code-indent">
                  <span className="hero-code-key">&quot;focus&quot;</span>
                  <span className="hero-code-punctuation">: </span>
                  <span className="hero-code-string">&quot;software + DSA&quot;</span>,
                </span>
              </div>
              <div className="hero-code-line">
                <span className="hero-line-number">05</span>
                <span className="hero-code-indent">
                  <span className="hero-code-key">&quot;approach&quot;</span>
                  <span className="hero-code-punctuation">: </span>
                  <span className="hero-code-string">&quot;learn by building&quot;</span>,
                </span>
              </div>
              <div className="hero-code-line">
                <span className="hero-line-number">06</span>
                <span className="hero-code-indent">
                  <span className="hero-code-key">&quot;growth&quot;</span>
                  <span className="hero-code-punctuation">: </span>
                  <span className="hero-code-string">&quot;in progress&quot;</span>
                </span>
              </div>
              <div className="hero-code-line">
                <span className="hero-line-number">07</span>
                <span>{"}"}</span>
              </div>
            </div>
            <div className="hero-code-card-footer">
              <span className="hero-status-dot" />
              <span>still becoming</span>
              <span className="hero-footer-sparkle">✳</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-pad border-y border-stone-200/80 bg-white">
        <div className="site-container grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div>
            <p className="eyebrow">A little about me</p>
            <h2 className="section-title">Curious by nature, consistent by choice.</h2>
          </div>
          <div>
            <p className="body-copy mt-0">
              I’m Prajwal, pursuing a BE in Information Science Engineering at
              The National Institute of Engineering. I’m interested in software
              development and enjoy strengthening my fundamentals through
              coursework, coding practice, and hands-on projects.
            </p>
            <p className="body-copy mt-4">
              Outside of coding, I enjoy playing cricket and keeping up with new
              ideas in technology. I’m always looking for opportunities to learn
              and grow.
            </p>
          </div>
        </div>
      </section>

      <section id="profiles" className="site-container section-pad">
        <div className="mb-8 max-w-2xl">
          <p className="eyebrow">Problem solving</p>
          <h2 className="section-title">Find me on coding platforms</h2>
          <p className="body-copy mt-4">
            I use these profiles to practice data structures and algorithms and
            track my progress.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {codingProfiles.map((profile) => (
            <a
              key={profile.name}
              className="surface-card profile-card"
              href={profile.href}
              target="_blank"
              rel="noreferrer"
            >
              <img className="profile-logo" src={profile.image} alt="" />
              <span className="min-w-0 flex-1">
                <span className="block font-bold text-stone-900">{profile.name}</span>
                <span className="mt-1 block truncate text-sm text-stone-500">
                  {profile.handle}
                </span>
              </span>
              <span className="text-lg text-emerald-800" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </section>

      <Project />
    </>
  );
};

export default Home;
