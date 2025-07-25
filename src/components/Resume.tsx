import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const Resume = () => {
  return (
    <section id="resume" className="section-padding">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Resume
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg text-secondary mb-8">
            I am a dedicated QA Engineer and aspiring full-stack developer with a strong foundation in software testing and web development. My experience includes automation testing, performance testing, and API testing, along with hands-on experience in web development technologies.
          </p>

          <a
            href="/sachin-budhathoki.pdf"
            download
            className="inline-flex items-center gap-2 btn-primary"
          >
            <ArrowDownTrayIcon className="h-5 w-5" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume; 