import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import FooterSection from './footer/FooterSection';
import FooterLink from './footer/FooterLink';

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 transition-colors duration-300">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-wrap -mx-4">
          <FooterSection title="About Me">
            <div className="space-y-4">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Tamilvendhan M
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Passionate IT student and web developer creating innovative solutions through code.
              </p>
            </div>
          </FooterSection>

          <FooterSection title="Quick Links">
            <div className="space-y-2">
              <FooterLink to="home">Home</FooterLink>
              <FooterLink to="skills">Skills</FooterLink>
              <FooterLink to="experience">Experience</FooterLink>
              <FooterLink to="projects">Projects</FooterLink>
              <FooterLink to="contact">Contact</FooterLink>
            </div>
          </FooterSection>

          <FooterSection title="Contact Info">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-blue-600 dark:text-blue-400" />
                <a href="tel:+918940826859" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  +91 89408 26859
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-600 dark:text-blue-400" />
                <a href="mailto:tamilvendhanips2003@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  tamilvendhanips2003@gmail.com
                </a>
              </div>
            </div>
          </FooterSection>

          <FooterSection title="Connect">
            <div className="flex flex-wrap gap-4">
              <FooterLink href="https://github.com/tamilvendhan23" external>
                <div className="flex items-center gap-2">
                  <FaGithub size={20} />
                  <span>GitHub</span>
                </div>
              </FooterLink>
              <FooterLink href="https://linkedin.com/in/tamilvendhan23" external>
                <div className="flex items-center gap-2">
                  <FaLinkedin size={20} />
                  <span>LinkedIn</span>
                </div>
              </FooterLink>
            </div>
          </FooterSection>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} Tamilvendhan M. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;