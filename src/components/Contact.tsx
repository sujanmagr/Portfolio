import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false });

    try {
      await emailjs.send(
        'service_k4lef96', //  EmailJS service ID
        'template_ypj27ax', //  EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'budhathokisachin143@gmail.com',
        },
        '9kj51aDuk_frdtD4s' //  EmailJS public key
      );

      setStatus({ submitting: false, submitted: true, error: false });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({ submitting: false, submitted: false, error: true });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="section-padding bg-light">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="text-secondary">
              Feel free to reach out to me for any opportunities or questions. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:budhathokisachin143@gmail.com"
                className="flex items-center gap-2 text-dark hover:text-primary transition-colors"
              >
                <EnvelopeIcon className="h-5 w-5" />
                budhathokisachin143@gmail.com
              </a>
              <a
                href="tel:+9805196680"
                className="flex items-center gap-2 text-dark hover:text-primary transition-colors"
              >
                <PhoneIcon className="h-5 w-5" />
                9805196680
              </a>
            </div>

            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/sujanmagr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sachin-budhathoki-8b2190311/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-10 w-full max-w-lg mx-auto space-y-6 border border-gray-100"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 bg-gray-50 hover:bg-gray-100"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 bg-gray-50 hover:bg-gray-100"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 bg-gray-50 hover:bg-gray-100"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-3 text-lg rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                disabled={status.submitting}
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
              </button>

              {status.submitted && (
                <p className="text-green-600 text-center">
                  Thank you for your message! I'll get back to you soon.
                </p>
              )}

              {status.error && (
                <p className="text-red-600 text-center">
                  Sorry, there was an error sending your message. Please try again later.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 