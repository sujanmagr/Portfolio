
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCheckCircle,
  FaCode,
  FaGraduationCap,
  FaLaptopCode,
  FaMapMarkerAlt,
  FaRocket,
} from 'react-icons/fa';

const About = () => {
  const highlights = [
    {
      icon: <FaCheckCircle />,
      value: '1+',
      label: 'Year of QA Experience',
    },
    {
      icon: <FaCode />,
      value: '10+',
      label: 'Testing Technologies',
    },
    {
      icon: <FaLaptopCode />,
      value: 'Web & Mobile',
      label: 'Testing Experience',
    },
    {
      icon: <FaRocket />,
      value: 'E2E',
      label: 'Testing Approach',
    },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-light relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary font-semibold uppercase tracking-wider mb-2">
            Get to Know Me
          </p>

          <h2 className="section-title mb-4">
            About Me
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600">
            A QA Engineer focused on building reliable software through
            thoughtful testing, automation, and continuous learning.
          </p>
        </motion.div>

        {/* Main About Content */}
        <div className="grid lg:grid-cols-5 gap-10 items-stretch">

          {/* Left - Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="h-full bg-white rounded-2xl p-7 md:p-9 border border-gray-100 shadow-sm">

              {/* Role */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  Junior QA Engineer
                </span>

                <span className="flex items-center gap-2 text-sm text-gray-500">
                  <FaMapMarkerAlt className="text-primary" />
                  Kathmandu, Nepal
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
                I make software better through{' '}
                <span className="text-primary">
                  quality-focused testing.
                </span>
              </h3>

              <div className="space-y-4 text-gray-600 leading-relaxed">

                <p>
                  I am a Junior QA Engineer with hands-on experience in
                  manual testing, automation testing, API testing, and
                  performance testing across web and mobile applications.
                </p>

                <p>
                  My day-to-day work involves designing test scenarios,
                  writing and executing test cases, identifying defects,
                  validating REST APIs, and automating repetitive testing
                  workflows. I work with tools such as{' '}
                  <strong className="text-gray-800">
                    Selenium, Playwright, Python, PyTest, Postman, and JMeter
                  </strong>.
                </p>

                <p>
                  I enjoy understanding how a product works from both a
                  user's and tester's perspective. My goal is to identify
                  issues early, improve test coverage, and help teams deliver
                  reliable software.
                </p>

              </div>

              {/* Focus Areas */}
              <div className="mt-8 pt-7 border-t border-gray-100">
                <p className="text-sm font-semibold text-gray-900 mb-4">
                  Current Focus
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    'Test Automation',
                    'API Testing',
                    'Performance Testing',
                    'Web Testing',
                    'Mobile Testing',
                    'PyTest & POM',
                  ].map((item) => (
                    <span
                      key={item}
                      className="
                        px-3
                        py-1.5
                        rounded-lg
                        bg-gray-50
                        border
                        border-gray-100
                        text-sm
                        text-gray-600
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right - Education & Current Role */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="h-full space-y-5">

              {/* Current Role Card */}
              <div className="bg-gray-900 text-white rounded-2xl p-7 shadow-lg">

                <div className="flex items-center gap-4 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-primary">
                    <FaLaptopCode />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400">
                      Currently
                    </p>

                    <h3 className="font-bold text-lg">
                      Junior QA Engineer
                    </h3>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  Working at Mindrisers Technologies, contributing to
                  software quality through manual testing, automation,
                  API validation, and performance testing.
                </p>

                <div className="mt-5 flex items-center justify-between text-sm">
                  <span className="text-gray-400">
                    Mindrisers Technologies
                  </span>

                  <span className="text-primary font-medium">
                    2025 – Present
                  </span>
                </div>

              </div>

              {/* Education Card */}
              <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <FaGraduationCap />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400">
                      Education
                    </p>

                    <h3 className="font-bold text-lg text-gray-900">
                      Academic Background
                    </h3>
                  </div>
                </div>

                <div className="relative pl-6 border-l-2 border-primary/20">

                  <div className="relative">
                    <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-primary" />

                    <h4 className="font-semibold text-gray-900">
                      BSc Computer Science & IT
                    </h4>

                    <p className="text-sm text-primary mt-1">
                      Nepalaya College · Tribhuvan University
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      2021 – 2026
                    </p>
                  </div>

                  <div className="relative mt-6">
                    <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-gray-300" />

                    <h4 className="font-semibold text-gray-900">
                      National Examination Board (+2)
                    </h4>

                    <p className="text-sm text-gray-500 mt-1">
                      Nepal Police School
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      2018 – 2020
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </motion.div>

        </div>

        {/* Highlight Stats */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.3 + index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="
                bg-white
                rounded-xl
                p-5
                border
                border-gray-100
                shadow-sm
                hover:shadow-md
                transition-all
                duration-300
              "
            >
              <div className="flex items-center gap-3">
                <div className="text-primary text-xl">
                  {item.icon}
                </div>

                <div>
                  <p className="font-bold text-lg text-gray-900">
                    {item.value}
                  </p>

                  <p className="text-xs text-gray-500">
                    {item.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default About;
