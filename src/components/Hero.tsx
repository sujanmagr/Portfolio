import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="section-padding min-h-screen flex items-center">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Sachin Budhathoki
            </h1>
            <h2 className="text-xl md:text-2xl text-primary mb-6">
              QA Engineer | CSIT Student | Web Developer
            </h2>
            <p className="text-lg text-secondary mb-8">
              Passionate about Quality Assurance, Automation, and Web Development.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="btn-primary"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="btn-primary bg-secondary hover:bg-opacity-90"
              >
                View Projects
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
              <img
                src="/473226936_1350551429689233_5488799913422202554_n.jpg"
                alt="Sachin Budhathoki"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 