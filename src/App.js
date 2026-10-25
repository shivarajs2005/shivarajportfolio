import React, { useMemo, useState } from "react";
import { projects } from "./data/projects.js";

const skills = [
  { title: "Web design & UI", items: "Figma · Photoshop · Layout · Visual hierarchy" },
  { title: "Front-end", items: "HTML5 · CSS3 · JavaScript · Bootstrap · jQuery" },
  { title: "React", items: "Components · Props · Hooks · localStorage" },
  { title: "Foundations", items: "PHP · MySQL · REST API basics · Git / GitHub" }
];

function ExternalLink({ href, children, className = "" }) {
  const usable = href && href !== "#";
  return (
    <a className={className} href={usable ? href : undefined}
      target={usable ? "_blank" : undefined}
      rel={usable ? "noreferrer" : undefined}
      aria-disabled={!usable}
      onClick={!usable ? (event) => event.preventDefault() : undefined}
      title={!usable ? "Add your real URL in src/data/projects.js" : undefined}>
      {children}
    </a>
  );
}

function ProjectCard({ project, index }) {
  return (
    <article className={`project-card ${project.featured ? "featured" : ""}`}>
      <div className="project-card-top">
        <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
        <span className="project-category">{project.category}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="stack-list">
        {project.stack.map((item) => <span key={item}>{item}</span>)}
      </div>
      <div className="project-actions">
        <ExternalLink href={project.demo} className="project-demo">Live demo ↗</ExternalLink>
        <ExternalLink href={project.code} className="project-code">Source code ↗</ExternalLink>
      </div>
    </article>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Web Design", "React", "PHP / MySQL", "AI / ML"];
  const filteredProjects = useMemo(() => {
    if (filter === "All") return projects;
    if (filter === "Web Design") return projects.filter(p => /Win Optimize|E-commerce|Typing Master|Skill Gap/i.test(p.title));
    if (filter === "React") return projects.filter(p => /React/i.test(p.title));
    if (filter === "PHP / MySQL") return projects.filter(p => /PHP|Attendance|Service & Repair/i.test(p.title + " " + p.category));
    return projects.filter(p => /Tomato|Parkinson/i.test(p.title));
  }, [filter]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu}><span className="wordmark-icon">S</span><span>Shivaraj S<span className="wordmark-period">.</span></span></a>
        <button className="menu-button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "✕" : "☰"}</button>
        <nav className={menuOpen ? "navigation open" : "navigation"} aria-label="Main navigation">
          {[["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Contact", "#contact"]].map(([label, href]) =>
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          )}
        </nav>
        <a className="header-contact" href="mailto:shivarajselvakumar@gmail.com">Get in touch <span>↗</span></a>
      </header>

      <main id="home">
        <section className="hero page-width">
          <div className="hero-main">
            <p className="overline"><span className="availability-dot"></span> FRESHER · OPEN TO OPPORTUNITIES</p>
            <p className="hero-greeting">Hello, I'm</p>
            <h1>Shivaraj <span>S.</span></h1>
            <h2>Web Designer <i>·</i> Front-End Developer</h2>
            <p className="hero-description">I build clean, responsive web experiences and thoughtful user interfaces. I work with HTML, CSS and JavaScript, design with Figma and Photoshop, and am currently developing my React and MERN Stack skills.</p>
            <div className="hero-buttons">
              <a className="button button-dark" href="#projects">Explore projects <span>↘</span></a>
              <a className="button button-light" href="/Shivaraj_Resume.pdf" target="_blank" rel="noreferrer">View resume ↗</a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/shivarajs2005" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/shivarajs2005/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="mailto:shivarajselvakumar@gmail.com">Email ↗</a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Minimal graphic with the initials S S">
            <div className="visual-top"><span>PERSONAL PORTFOLIO</span><span>2026</span></div>
            <div className="visual-monogram">S<span>.</span></div>
            <div className="visual-bottom"><span>DESIGN</span><span className="visual-line"></span><span>DEVELOP</span></div>
            <div className="visual-note note-top">UI / UX</div>
            <div className="visual-note note-bottom">React · Learning</div>
          </div>
          <div className="hero-bottom-line"><span>BASED IN CHENNAI, INDIA</span><a href="#about">SCROLL TO EXPLORE ↓</a></div>
        </section>

        <section className="section page-width" id="about">
          <div className="section-heading"><p className="overline">01 / ABOUT</p><h2>Good design should feel <span>simple.</span></h2></div>
          <div className="about-layout">
            <p className="about-lead">I’m a 2026 B.E. Computer Science graduate who enjoys creating websites that look clear, work smoothly and help people get things done.</p>
            <div className="about-copy"><p>My focus is entry-level Web Designer, UI Designer and Front-End Developer opportunities. I combine front-end fundamentals with a visual-design mindset, and I’m learning React and MERN Stack through hands-on projects.</p><p>I’m looking for a team where I can contribute, learn from experienced people and keep improving my craft.</p><div className="about-facts"><div><b>2026</b><span>B.E. CSE graduate</span></div><div><b>Web + UI</b><span>Current focus</span></div><div><b>React</b><span>Currently learning</span></div></div></div>
          </div>
        </section>

        <section className="section page-width" id="skills">
          <div className="section-heading"><p className="overline">02 / CAPABILITIES</p><h2>Skills & <span>tools.</span></h2></div>
          <div className="skills-grid">{skills.map((skill, i) => <article className="skill-card" key={skill.title}><span className="skill-number">0{i + 1}</span><h3>{skill.title}</h3><p>{skill.items}</p></article>)}</div>
          <p className="skills-disclaimer">Skills listed reflect my current learning and practice. I’m actively improving through projects.</p>
        </section>

        <section className="section page-width" id="projects">
          <div className="projects-heading"><div className="section-heading"><p className="overline">03 / SELECTED WORK</p><h2>Projects & <span>practice.</span></h2></div><p className="projects-intro">A selection of academic and personal projects across web interfaces, CRUD applications and AI/ML.</p></div>
          <div className="filter-list" aria-label="Filter projects">{categories.map(category => <button key={category} className={filter === category ? "filter active" : "filter"} onClick={() => setFilter(category)}>{category}</button>)}</div>
          <div className="projects-grid">{filteredProjects.map((project) => <ProjectCard key={project.title} project={project} index={projects.indexOf(project)} />)}</div>
          <p className="projects-note">Please replace placeholder demo URLs with deployed projects and each GitHub profile fallback with the exact repository URL before sharing this portfolio.</p>
        </section>

        <section className="section page-width" id="contact">
          <div className="contact-panel"><div><p className="overline">04 / CONTACT</p><h2>Have a role in mind? <span>Let’s talk.</span></h2><p>I’m open to fresher roles and internships in Web Design, UI Design and Front-End Development.</p></div><a className="button button-dark" href="mailto:shivarajselvakumar@gmail.com?subject=Portfolio%20Opportunity">Email Shivaraj ↗</a></div>
          <div className="contact-details"><div><span>EMAIL</span><a href="mailto:shivarajselvakumar@gmail.com">shivarajselvakumar@gmail.com</a></div><div><span>LOCATION</span><p>Chennai, Tamil Nadu, India</p></div><div><span>PROFILES</span><p><a href="https://github.com/shivarajs2005" target="_blank" rel="noreferrer">GitHub ↗</a> &nbsp;·&nbsp; <a href="https://www.linkedin.com/in/shivarajs2005/" target="_blank" rel="noreferrer">LinkedIn ↗</a></p></div></div>
        </section>
      </main>
      <footer className="site-footer"><span>© {new Date().getFullYear()} Shivaraj S</span><span>Designed and built with React.</span><a href="#home">Back to top ↑</a></footer>
    </>
  );
}