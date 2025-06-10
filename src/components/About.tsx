import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding bg-light">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title"
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-lg">
              I am currently pursuing my Bachelor's degree in Computer Science and Information Technology (CSIT) at Tribhuvan University. My academic journey has been complemented by hands-on experience in the field of Quality Assurance.
            </p>
            <p className="text-lg">
              Recently, I completed a QA internship where I gained extensive experience in:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Automation testing using Selenium and Python</li>
              <li>Performance testing with JMeter</li>
              <li>API testing using Postman</li>
            </ul>
            <p className="text-lg">
              I have successfully automated testing for various websites including Ekantipur News and The Authorized Partner Portal, demonstrating my ability to implement efficient testing solutions.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Bachelor's in CSIT</h4>
                <p className="text-secondary">Tribhuvan University</p>
                <p className="text-sm text-gray-500">2020 - Present</p>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">Experience</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">QA Intern</h4>
                <p className="text-secondary">Recent Internship</p>
                <ul className="list-disc list-inside mt-2 text-sm">
                  <li>Automated testing with Selenium & Python</li>
                  <li>Performance testing with JMeter</li>
                  <li>API testing with Postman</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 