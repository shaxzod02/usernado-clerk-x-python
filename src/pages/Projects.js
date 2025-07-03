import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ProjectView from '../components/project/ProjectView';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';
// import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

/* ---------------------- 1. STATIK LOYIHALAR RO‘YXATI ---------------------- */
const PROJECTS = [
  {
    id: 'ChromaPlot-Paper-Chromatography-Simulator',
    title: 'ChromaPlot-Paper-Chromatography-Simulator',
    description:
      'Python (matplotlib, numpy), HTML, CSS, JavaScript ChromaPlot is a web-based tool for generating paper chromatography simulations of chemical compounds as animated GIFs..',
    tags: ['Python', 'JavaScript', 'HTML', 'CSS'],
    demoLink: 'https://chromaplot.com/',
    githubLink: 'https://github.com/shaxzod02/ChromaPlot-Paper-Chromatography-Simulator'
  },
  {
    id: 'SpectroSim',
    title: 'SpectroSim Chemical Spectroscopy Simulator',
    description:
      'Visualize and simulate compound UV-Vis absorption spectra based on chemical parameters like λmax and εmax. Powered by a Gaussian distribution model in a Python FastAPI backend, integrated with PubChem API queries and custom result caching to support fast access to millions of compounds!',
    tags: ['React + Vite', 'HTML', 'CSS', 'JavaScript', 'Python', 'FastAPI', 'JSON',],
    githubLink: 'https://github.com/shaxzod02/spectro-sim'
  },
  {
    id: 'small-business-manager',
    title: 'Small Business Manager',
    description:
      'Python (Tkinter), SQLite3, JSON A comprehensive, easy-to-use business ledger tool for small businesses, designed to track inventory, expense, sales/returns, and annual tinances througn double-entry accounting practices.',
    tags: ['Python', 'Tkinter', 'SQLite3', 'JSON'],
    githubLink: 'https://github.com/shaxzod02/Small-Business-Manager'
  },
  {
    id: 'pywebhive',
    title: 'PyWebHive Python Web Framework',
    description:
      'PyWebhive is a Python Web Framework built for learning purposes. The plan is to learn how frameworks are built by implementing their features, writing blog posts about them and keeping the codebase as simple as possible.',
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
