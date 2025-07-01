import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ProjectView from '../components/project/ProjectView';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';

/* ---------------------- 1. STATIK LOYIHALAR RO‘YXATI ---------------------- */
const PROJECTS = [
  {
    id: 'illini-plan',
    title: 'IlliniPlan: AI-Powered Class Planner',
    description:
      'Course mapping, graduation tracking, and rule-enforcing scheduling with personalized recommendations.',
    tags: ['React', 'LLM', 'Algorithms'],
    demoLink: 'https://main.d3jmvbxto8loyp.amplifyapp.com/'
  },
  {
    id: 'illini-spots',
    title: 'IlliniSpots: Study-Spot Sharing App',
    description:
      'Shows campus buildings with live room availability; users can favourite and comment.',
    tags: ['React Native', 'Swift', 'Firebase', 'PostgreSQL'],
    githubLink: 'https://github.com/shaxzod02/IlliniSpots'
  },
  {
    id: 'small-business-manager',
    title: 'Small Business Manager',
    description:
      'Desktop app for inventory, sales/returns, and auto-generated financial statements.',
    tags: ['Python', 'Tkinter', 'SQLite3'],
    githubLink: 'https://github.com/shaxzod02/Small-Business-Manager'
  },
  {
    id: 'pywebhive',
    title: 'PyWebHive – Lightweight Python Web Framework',
    description:
      'WSGI-compatible framework with routing, Jinja2 templating, middleware support, and PyPI release.',
    tags: ['Python', 'WSGI', 'Jinja2', 'PyPI'],
    githubLink: 'https://github.com/shaxzod02/PyWebhive-Web-Framework',
    demoLink: 'https://pypi.org/project/pywebhive'
  }
];

/* --------------------------- 2. KARTA KOMPONENTI -------------------------- */
const ProjectCard = ({ id, title, description, demoLink, githubLink, tags }) => (
  <div className="bg-white shadow rounded-lg p-6 mb-6">
    <h3 className="text-xl font-semibold mb-2">
      <Link to={`/projects/${id}`} className="text-primary">
        {title}
      </Link>
    </h3>

    <p className="text-text-secondary mb-4">{description}</p>

    {tags?.length > 0 && (
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="bg-secondary text-text-secondary px-2 py-1 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    )}

    {demoLink && (
      <a
        href={demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary mr-4"
      >
        View Demo
      </a>
    )}
    {githubLink && (
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary"
      >
        View on GitHub
      </a>
    )}
  </div>
);

/* ----------------------------- 3. SAHIFA ----------------------------- */
const Projects = () => {
  /* loader/spinner/error qolsa ham kerak bo‘lsa deb qoldirdik */
  const loading = false;
  const error = null;

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="container mx-auto px-4">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h2 className="text-2xl font-bold mb-6">Projects</h2>

              {PROJECTS.length > 0 ? (
                PROJECTS.map(project => (
                  <ProjectCard key={project.id} {...project} />
                ))
              ) : (
                <p>No projects available. Create your first project!</p>
              )}
            </>
          }
        />
        <Route
          path=":projectId"
          element={<ProjectView projects={PROJECTS} />}
        />
      </Routes>
    </div>
  );
};

export default Projects;
