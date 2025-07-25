import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'BareStyle E-commerce',
      description: 'A full-featured e-commerce platform for clothes and accessories with search functionality, wishlist, and dummy payment system.',
      tech: ['React.js', 'JavaScript', 'CSS', 'HTML'],
      type: 'Web Development',
      link: 'https://github.com/sujanmagr/Bare-Style',
      demo: 'https://bare-style.vercel.app/'
    },
    {
      title: 'Ekantipur Automation',
      description: 'Automated testing suite for Ekantipur News website, covering login, signup, and article writing functionalities.',
      tech: ['Selenium', 'Python'],
      type: 'QA Automation',
      link: 'https://github.com/sujanmagr/News-Site-Testing'
    },
    {
      title: 'YatriGhar',
      description: 'A fullstack MERN homestay booking system for Nepal, featuring AI-powered hotel recommendation and review analyzer.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'AI'],
      type: 'Fullstack Web',
      link: '', // Add GitHub or live link if available
      demo: '' // Add live demo link if available
    }
  ];

  const pythonProjects = [
    {
      title: 'Slot Machine Game',
      description: 'An interactive slot machine game with betting functionality and random number generation.',
      tech: ['Python', 'Random Module'],
      type: 'Python',
      link: 'https://github.com/sujanmagr/Slot-Machine'
    },
    {
      title: 'Story Generator',
      description: 'A creative writing tool that generates random stories using predefined templates and word banks.',
      tech: ['Python', 'String Manipulation'],
      type: 'Python',
      link: 'https://github.com/sujanmagr/Python-Mini-Projects'
    },
    {
      title: 'Math Problem Generator',
      description: 'A tool that generates random math problems with varying difficulty levels and solutions.',
      tech: ['Python', 'Random Module'],
      type: 'Python',
      link: 'https://github.com/sujanmagr/Python-Mini-Projects'
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <span className="text-sm font-semibold text-primary mb-2 block">
                  {project.type}
                </span>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      Code
                    </a>
                  )}
                  {project.demo && project.demo !== '' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mt-12 mb-6"
        >
          Python Projects
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pythonProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <span className="text-sm font-semibold text-primary mb-2 block">
                  {project.type}
                </span>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 