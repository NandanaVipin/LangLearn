import { motion } from 'framer-motion';
import { Languages, Mail, Github, Twitter, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const footerLinks = {
    learn: [
      { name: 'Language Courses', href: '/courses' },
      { name: 'Live Classes', href: '/live-classes' },
      { name: 'Study Materials', href: '/materials' },
      { name: 'Practice Tests', href: '/tests' },
      { name: 'Language Exchange', href: '/exchange' },
    ],
    resources: [
      { name: 'E-Books Library', href: '/ebooks' },
      { name: 'Audio Lessons', href: '/audio' },
      { name: 'Video Tutorials', href: '/videos' },
      { name: 'Flashcards', href: '/flashcards' },
      { name: 'Learning Tools', href: '/tools' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Press', href: '/press' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Accessibility', href: '/accessibility' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="bg-white border-t mt-20">
      <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Languages className="h-8 w-8 text-indigo-600" />
              </motion.div>
              <span className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                LangLearn
              </span>
            </Link>
            <p className="mt-4 text-gray-500 text-base max-w-md">
              Empowering global communication through innovative language learning.
              Join millions of learners worldwide in their journey to master new languages.
            </p>
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Connect with us
              </h3>
              <div className="flex space-x-4 mt-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.href}
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Learning
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.learn.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-base text-gray-500 hover:text-indigo-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-base text-gray-500 hover:text-indigo-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-base text-gray-500 hover:text-indigo-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mt-8">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-base text-gray-500 hover:text-indigo-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="text-base text-gray-400">
              © {new Date().getFullYear()} LangLearn. All rights reserved.
            </p>
            <div className="flex space-x-6 md:justify-end">
              <a href="#" className="text-gray-400 hover:text-indigo-600 text-sm">
                Download our App
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600 text-sm">
                Help Center
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600 text-sm">
                Status
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 