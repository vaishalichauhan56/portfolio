const projects = [
  {
    title: "Portfolio Website",
    tech: "React, Vite",
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <p>{project.tech}</p>
          <a href={project.link}>Live</a>
          <a href={project.github}>GitHub</a>
        </div>
      ))}
    </section>
  );
}
