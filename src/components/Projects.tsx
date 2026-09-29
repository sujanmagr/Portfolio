import React from 'react';
import { motion } from 'framer-motion';
import {
  FaArrowUpRightFromSquare,
  FaCode,
  FaMobileScreenButton,
  FaServer,
  FaSuitcaseRolling,
  FaGlobe,
} from 'react-icons/fa6';

const Projects = () => {
  const projects = [
    {
      title: 'SheGuideMe',
      description:
        'End-to-end QA testing project covering web functionality, test automation, API validation, and performance testing. Automated critical workflows using Playwright, Python, and PyTest with the Page Object Model.',
      tech: ['Playwright', 'Python', 'PyTest', 'Postman', 'JMeter'],
      type: 'QA Engineering',
      icon: <FaSuitcaseRolling />,
      featured: true,
      link: 'https://github.com/sujanmagr/SheGuidesMe.git',
      demo: '',
    },
    {
      title: 'Totto Marketplace',
      description:
        'Mobile marketplace application tested across multiple user and marketplace workflows, including product listings, marketplace creation, messaging, and user interactions.',
      tech: ['Postman', 'Android Testing', 'API Testing'],
      type: 'Mobile QA',
      icon: <FaMobileScreenButton />,
      featured: false,
      link: '',
      demo: '',
    },
    {
      title: 'YatriGhar',
      description:
        'Full-stack hotel booking platform developed with the MERN stack. Includes hotel search, room booking, reservation management, and user management, with planned AI-powered recommendations and review sentiment analysis.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      type: 'Full-Stack Development',
      icon: <FaGlobe />,
      featured: true,
      link: 'https://github.com/bijaya-dev07/YatriGhar.git',
      demo: 'https://yatrighar.vercel.app/',
    },
    {
      title: 'BareStyle E-commerce',
      description:
        'Modern e-commerce platform for clothing and accessories featuring product browsing, search functionality, wishlist management, user authentication, cart functionality, and a demo payment flow.',
      tech: ['React.js', 'JavaScript', 'HTML', 'CSS'],
      type: 'Web Development',
      icon: <FaCode />,
      featured: false,
      link: 'https://github.com/sujanmagr/Bare-Style.git',
      demo: 'https://bare-style.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-24 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Selected Work
          </span>

          <h2 className="section-title !mb-4">
            Projects
          </h2>

          <p className="text-secondary text-lg leading-relaxed">
            A selection of QA, automation, mobile testing, and full-stack
            projects where I have applied practical testing and development
            skills.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className={`group relative bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden ${
                project.featured ? 'md:min-h-[360px]' : ''
              }`}
            >
              {/* Top accent */}
              <div className="h-1 w-full bg-gradient-to-r from-primary/80 via-primary to-primary/30" />

              <div className="p-7">
                {/* Icon + Type */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {project.icon}
                  </div>

                  <span className="px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-xs font-semibold text-secondary">
                    {project.type}
                  </span>
                </div>

                {/* Title */}
                <div className="mb-3">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-secondary leading-7 mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-primary/5 text-primary border border-primary/10 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-5 pt-5 border-t border-gray-100">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-primary transition-colors"
                    >
                      <FaCode className="text-sm" />
                      View Code
                      <FaArrowUpRightFromSquare className="text-xs" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-400">
                      <FaCode className="text-sm" />
                      GitHub link
                    </span>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/70 transition-colors"
                    >
                      Live Demo
                      <FaArrowUpRightFromSquare className="text-xs" />
                    </a>
                  )}
                </div>
              </div>

              {/* Hover decoration */}
              <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300 pointer-events-none" />
            </motion.article>
          ))}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 bg-gray-900 rounded-3xl p-7 md:p-8 text-white relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-primary/20 blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <FaServer className="text-primary" />
                <h3 className="text-xl font-bold">
                  Quality across the development lifecycle
                </h3>
              </div>

              <p className="text-gray-400 max-w-2xl leading-relaxed">
                From requirements and test cases to automation, API validation,
                performance testing, and defect reporting, I focus on building
                reliable software through practical QA processes.
              </p>
            </div>

            <a
              href="#contact"
              className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Let's Connect
              <FaArrowUpRightFromSquare className="text-sm" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;