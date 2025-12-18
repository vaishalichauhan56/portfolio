const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Vite",
  "Git",
  "Responsive Design",
];

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
