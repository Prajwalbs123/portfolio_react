import GitHubIcon from "../assets/icons/github.svg";

type PortfolioProject = {
  title: string;
  description: string;
  technologies: string[];
};

const projects: PortfolioProject[] = [
  {
    title: "Personal Portfolio",
    description:
      "A personal website to bring together my background, coding profiles, and work in one place.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "OOP with Java",
    description:
      "A terminal-based project created to practice object-oriented programming concepts in Java.",
    technologies: ["Java", "OOP"],
  },
  {
    title: "Hospital Database",
    description:
      "A hospital database project exploring relational data, schema design, and SQL queries.",
    technologies: ["MySQL", "SQL", "Database design"],
  },
];

const Project = () => {
  return (
    <section id="projects" className="section-pad border-y border-stone-200/80 bg-white">
      <div className="site-container">
        <div className="mb-9 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Selected work</p>
            <h2 className="section-title">Projects I’ve worked on</h2>
            <p className="body-copy mt-4">
              A few projects from my learning journey. I’ll add more as I build
              and ship them.
            </p>
          </div>
          <a
            className="secondary-button w-fit"
            href="https://github.com/Prajwalbs123"
            target="_blank"
            rel="noreferrer"
          >
            <img className="h-5 w-5" src={GitHubIcon} alt="" aria-hidden="true" />
            Browse GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project, index) => (
            <article className="surface-card project-card" key={project.title}>
              <span className="project-number">0{index + 1}</span>
              <h3 className="mt-5 font-[Manrope] text-xl font-bold tracking-tight text-stone-900">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-stone-600">
                {project.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                {project.technologies.map((technology) => (
                  <li className="project-tag" key={technology}>
                    {technology}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
