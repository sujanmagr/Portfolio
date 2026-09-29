import React from 'react';
import { motion } from 'framer-motion';
import {
  FaArrowRight,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaPlay,
} from 'react-icons/fa';
import {
  SiPython,
  SiPostman,
  SiSelenium,
  SiMeteor,
} from 'react-icons/si';

const Hero = () => {
  const technologies = [
    { name: 'Selenium', icon: <SiSelenium /> },
    { name: 'Playwright', icon: <FaPlay /> },
    { name: 'Python', icon: <SiPython /> },
    { name: 'Postman', icon: <SiPostman /> },
    { name: 'JMeter', icon: <SiMeteor /> },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-light w-full max-w-full"
    >
      {/* Background Decorations (kept inside the screen on mobile) */}
      <div className="absolute top-20 -left-20 sm:-left-32 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-20 sm:-right-32 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-primary/[0.02] rounded-full blur-3xl pointer-events-none" />

      {/* px-4 gives safe side margins on mobile */}
      <div className="container-custom relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:py-24">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-center">
          {/* =========================================
              LEFT CONTENT
          ========================================== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 min-w-0"
          >
            {/* Availability / Current Role */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex max-w-full items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm mb-6"
            >
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>

              <span className="text-xs sm:text-sm text-gray-600">
                QA Engineer at{' '}
                <span className="font-semibold text-gray-900">
                  Mindrisers Technologies
                </span>
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-gray-900 break-words">
              Hi, I'm <span className="text-primary">Sachin</span>
              <br />
              <span className="text-gray-900">Quality Assurance</span>
              <br />
              <span className="text-gray-900">Engineer.</span>
            </h1>

            {/* Location */}
            <div className="flex items-center gap-2 mt-5 text-gray-500 text-sm sm:text-base">
              <FaMapMarkerAlt className="text-primary shrink-0" />
              <span>Kathmandu, Nepal</span>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mt-6"
            >
              I help build reliable software through{' '}
              <span className="font-semibold text-gray-800">
                manual testing, test automation, API testing, and performance
                testing
              </span>{' '}
              across web and mobile applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                View My Work
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-gray-800 font-semibold border border-gray-200 hover:border-primary/30 hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Technology Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-10"
            >
              <p className="text-xs uppercase tracking-widest font-semibold text-gray-400 mb-4">
                Working With
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {technologies.map((technology, index) => (
                  <motion.div
                    key={technology.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.07 }}
                    whileHover={{ y: -3 }}
                    className="flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-lg bg-white border border-gray-100 shadow-sm text-gray-600 hover:text-primary hover:border-primary/20 transition-all duration-300"
                  >
                    <span className="text-lg">{technology.icon}</span>
                    <span className="text-sm font-medium">
                      {technology.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* =========================================
              RIGHT PROFILE AREA
          ========================================== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 flex justify-center lg:justify-end min-w-0"
          >
            <div className="relative">
              {/* Decorative Circles (smaller on mobile, outer one hidden) */}
              <div className="absolute -inset-3 sm:-inset-6 rounded-full border border-primary/10" />
              <div className="hidden sm:block absolute -inset-12 rounded-full border border-primary/5" />

              {/* Profile Card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative w-60 h-72 sm:w-72 sm:h-96 md:w-80 md:h-[420px] rounded-[2rem] overflow-hidden bg-gray-900 shadow-2xl"
              >
                <img
                  src="sachin.jpg"
                  alt="Sachin Budhathoki - QA Engineer"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/10 to-transparent" />

                {/* Profile Information */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <FaCheckCircle className="text-primary" />
                    <span className="text-xs font-medium text-gray-300">
                      Quality Assurance
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Sachin Budhathoki
                  </h3>

                  <p className="text-sm text-gray-300 mt-1">
                    QA Engineer · BSc CSIT
                  </p>
                </div>
              </motion.div>

              {/* Floating QA Badge (only from md up so it never overflows) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute md:-left-6 lg:-left-8 top-10 bg-white rounded-xl shadow-xl border border-gray-100 px-4 py-3 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <FaCheckCircle />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Focus</p>
                    <p className="text-sm font-bold text-gray-900">
                      Software Quality
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Automation Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.05 }}
                className="absolute md:-right-4 lg:-right-6 bottom-16 bg-white rounded-xl shadow-xl border border-gray-100 px-4 py-3 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <FaPlay className="text-sm" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Specialty</p>
                    <p className="text-sm font-bold text-gray-900">
                      Test Automation
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-400 hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Explore</span>

          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-lg"
          >
            ↓
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
