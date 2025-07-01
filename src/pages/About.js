import React from 'react';
import Skills from './Skills';
import { Link } from 'react-router-dom';

const About = () => {
  const currentProjects = [
    {
      id: "small-business-manager",
      title: "Small Business Manager",
      description:
        "A desktop app for managing inventory, tracking sales/returns, and generating income statements. Built using Python, Tkinter, and SQLite3 with built-in double-entry accounting principles.",
      tags: ["Python", "Tkinter", "SQLite3"],
      githubLink: "https://github.com/shaxzod02/Small-Business-Manager"
    },
    {
      id: "pywebhive",
      title: "PyWebHive – Lightweight Python Web Framework",
      description:
        "A custom-built WSGI-compatible framework with routing, templating, static file handling, and published to PyPI. Used to deploy production-ready apps.",
      tags: ["Python", "WSGI", "PyPI"],
      githubLink: "https://github.com/shaxzod02/PyWebhive-Web-Framework",
      demoLink: "https://pypi.org/project/pywebhive"
    }
  ];

  const CompactProjectCard = ({ id, title, description, tags, githubLink, demoLink }) => (
    <div className="bg-white shadow rounded-lg p-4 mx-auto">
      <h3 className="text-lg font-semibold">
        <Link to={`/projects/${id}`} className="text-primary">{title}</Link>
      </h3>
      <p className="text-sm text-text-secondary my-2">{description}</p>
      <div className="flex flex-wrap gap-2 mb-2">
        {tags && tags.map((tag, index) => (
          <span key={index} className="bg-secondary text-text-secondary px-2 py-1 rounded-full text-sm">{tag}</span>
        ))}
      </div>
      <div className="text-sm space-x-4">
        {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub</a>}
        {demoLink && <a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">View</a>}
      </div>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-text-secondary mb-4">
          I'm Shahzod, a Computer Science graduate from Changsha University of Science and Technology. I specialize in building full-stack applications using tools like Python, Django, React, PostgreSQL, and more. I enjoy developing useful tools for real-world use — from desktop business software to Python web frameworks. I'm always exploring new technologies, working on personal projects, and writing clean, maintainable code.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="space-y-4">
          {currentProjects.map((project) => (
            <CompactProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <div>
          <h3 className="text-xl font-semibold">Changsha University of Science and Technology</h3>
          <p className="text-sm text-text-secondary">2021 - 2025</p>
          <p className="mt-2">
            Bachelor of Science in Computer Science. Focused on software engineering, algorithms, and web technologies.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <Skills />
      </section>
    </div>
  );
};

export default About;
