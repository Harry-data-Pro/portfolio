import { useState } from 'react';
const Projects = () => {
  const [projects, setProjects] = useState([
    {
      title: 'Project 1',
      description: 'A brief description of project 1',
      techStack: ['PyTorch', 'Transformers'],
      liveDemo: 'https://example.com/project-1',
      githubRepo: 'https://github.com/example/project-1',
      impact: 'Achieved 94.7% accuracy on X',
    },
    {
      title: 'Project 2',
      description: 'A brief description of project 2',
      techStack: ['TensorFlow', 'Scikit-learn'],
      liveDemo: 'https://example.com/project-2',
      githubRepo: 'https://github.com/example/project-2',
      impact: 'Improved model performance by 25%',
    },
    // Add more projects here
  ]);
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto p-4 pt-6 pb-12 flex flex-col items-center">
        <h2 className="text-lg font-medium text-gray-600 mb-2">Projects</h2>
        <ul className="flex space-x-4">
          {projects.map((project, index) => (
            <li key={index}>
              <div
                className="bg-white rounded shadow-md p-4"
                onMouseOver={() => {
                  // Add hover effect here
                }}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="flex space-x-2">
                  {project.techStack.map((tech, index) => (
                    <li key={index}>
                      <div className="rounded-full bg-gray-200 shadow-md p-1">
                        {/* Tech badge */}
                      </div>
                    </li>
                  ))}
                </ul>
                <p>{project.impact}</p>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded"
                  type="button"
                >
                  View Live Demo
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Projects;
