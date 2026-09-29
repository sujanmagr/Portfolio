
import React from 'react';
import { motion } from 'framer-motion';

import {
  SiSelenium,
  SiPostman,
  SiJira,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiDotnet,
  SiPython,
  SiMysql,
} from 'react-icons/si';

import {
  FaBug,
  FaTachometerAlt,
  FaUsers,
  FaComments,
  FaFileAlt,
} from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Testing & QA',
      description:
        'Tools I use to test, automate, and validate software.',
      icon: <FaBug />,
      skills: [
        {
          name: 'Selenium',
          description: 'Web Automation',
          icon: <SiSelenium />,
        },
        {
          name: 'Postman',
          description: 'API Testing',
          icon: <SiPostman />,
        },
        {
          name: 'JMeter',
          description: 'Performance Testing',
          icon: <FaTachometerAlt />,
        },
        {
          name: 'Jira',
          description: 'Defect Tracking',
          icon: <SiJira />,
        },
      ],
    },

    {
      title: 'Web Development',
      description:
        'Technologies I use to build modern web applications.',
      icon: <SiReact />,
      skills: [
        {
          name: 'HTML',
          description: 'Web Structure',
          icon: <SiHtml5 />,
        },
        {
          name: 'CSS',
          description: 'Styling & Layout',
          icon: <SiCss />,
        },
        {
          name: 'JavaScript',
          description: 'Web Programming',
          icon: <SiJavascript />,
        },
        {
          name: 'React',
          description: 'Frontend Development',
          icon: <SiReact />,
        },
        {
          name: 'ASP.NET Core',
          description: 'Web Development',
          icon: <SiDotnet />,
        },
      ],
    },

    {
      title: 'Programming & Database',
      description:
        'Languages and technologies I use for development and data.',
      icon: <SiPython />,
      skills: [
        {
          name: 'Python',
          description: 'Automation & Development',
          icon: <SiPython />,
        },
        {
          name: 'SQL',
          description: 'Database Management',
          icon: <SiMysql />,
        },
      ],
    },

    {
      title: 'Professional Skills',
      description:
        'Skills that help me communicate and work effectively in a team.',
      icon: <FaUsers />,
      skills: [
        {
          name: 'Teamwork',
          description: 'Collaboration',
          icon: <FaUsers />,
        },
        {
          name: 'Communication',
          description: 'Clear & Effective',
          icon: <FaComments />,
        },
        {
          name: 'Documentation',
          description: 'Test & Technical Docs',
          icon: <FaFileAlt />,
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="section-padding bg-light"
    >
      <div className="container-custom">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold uppercase tracking-wider mb-2">
            What I Work With
          </p>

          <h2 className="section-title mb-4">
            Skills & Technologies
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600">
            A collection of tools, technologies, and professional
            skills I use across software testing and web development.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-2 gap-8">

          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.1,
              }}
              viewport={{ once: true }}
              className="
                bg-white
                rounded-2xl
                p-6
                md:p-8
                border
                border-gray-100
                shadow-sm
                hover:shadow-xl
                transition-shadow
                duration-300
              "
            >

              {/* Category Header */}
              <div className="flex items-start gap-4 mb-7">

                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-primary/10
                    text-primary
                    flex
                    items-center
                    justify-center
                    text-xl
                    shrink-0
                  "
                >
                  {category.icon}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {category.description}
                  </p>
                </div>

              </div>

              {/* Skills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">

                {category.skills.map(
                  (skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: skillIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                      whileHover={{
                        y: -5,
                        scale: 1.02,
                      }}
                      className="
                        group
                        p-4
                        rounded-xl
                        border
                        border-gray-100
                        bg-gray-50
                        hover:bg-white
                        hover:border-primary/30
                        hover:shadow-md
                        transition-all
                        duration-300
                        cursor-default
                      "
                    >

                      {/* Skill Icon */}
                      <div
                        className="
                          text-3xl
                          text-gray-600
                          group-hover:text-primary
                          transition-colors
                          duration-300
                          mb-3
                        "
                      >
                        {skill.icon}
                      </div>

                      {/* Skill Name */}
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {skill.name}
                      </h4>

                      {/* Skill Description */}
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                        {skill.description}
                      </p>

                    </motion.div>
                  )
                )}

              </div>
            </motion.div>
          ))}

        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          viewport={{ once: true }}
          className="
            mt-10
            text-center
            p-6
            rounded-2xl
            border
            border-primary/10
            bg-primary/5
          "
        >
          <p className="text-gray-700">
            <span className="font-semibold text-primary">
              Always learning.
            </span>{' '}
            Continuously exploring new tools, testing techniques,
            and technologies to improve software quality.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
