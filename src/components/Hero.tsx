import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Globe, Users, ChevronDown, Sparkles, Target, Clock, Award, Video, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const languages = [
  { name: 'Spanish', level: 'Beginner to Advanced', image: 'https://images.unsplash.com/photo-1592435468595-09934d0a4f79?auto=format&fit=crop&q=80&w=300&h=200' },
  { name: 'French', level: 'All Levels', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=300&h=200' },
  { name: 'German', level: 'Beginner to Advanced', image: 'https://images.unsplash.com/photo-1554072675-66db59dba46f?auto=format&fit=crop&q=80&w=300&h=200' },
  { name: 'Japanese', level: 'All Levels', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&q=80&w=300&h=200' },
];

export default function Hero() {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [showLanguages, setShowLanguages] = useState(false);
  const navigate = useNavigate();

  const handleStartLearning = () => {
    if (!selectedLanguage) {
      // Add a subtle shake animation to the language selector
      const button = document.querySelector('.language-selector');
      button?.classList.add('shake');
      setTimeout(() => button?.classList.remove('shake'), 500);
      return;
    }
    // Navigate to the language-specific learning page
    navigate(`/learn/${selectedLanguage}`);
  };

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
          >
            <span className="block">Master Any Language</span>
            <span className="block text-indigo-600">With Expert Resources</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            Access curated learning materials, e-books, and resources to accelerate your language learning journey.
            Join thousands of learners worldwide in mastering a new language.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 max-w-md mx-auto"
          >
            <div className="relative">
              <button
                onClick={() => setShowLanguages(!showLanguages)}
                className="language-selector w-full flex items-center justify-between px-4 py-3 border border-gray-300 rounded-lg bg-white shadow-sm hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
              >
                <span className="text-gray-700">{selectedLanguage || 'Choose your language'}</span>
                <motion.div
                  animate={{ rotate: showLanguages ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {showLanguages && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-lg overflow-hidden"
                  >
                    {languages.map((language, index) => (
                      <motion.button
                        key={language.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ backgroundColor: '#EEF2FF' }}
                        onClick={() => {
                          setSelectedLanguage(language.name);
                          setShowLanguages(false);
                        }}
                        className="w-full flex items-center px-4 py-3 hover:bg-indigo-50 transition-colors duration-200"
                      >
                        <img src={language.image} alt={language.name} className="w-12 h-8 object-cover rounded mr-3" />
                        <div className="text-left">
                          <div className="font-medium text-gray-900">{language.name}</div>
                          <div className="text-sm text-gray-500">{language.level}</div>
                        </div>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8 space-y-3 sm:space-y-0 sm:space-x-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStartLearning}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg md:py-4 md:text-lg md:px-10"
            >
              Start Learning
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg md:py-4 md:text-lg md:px-10"
            >
              Browse E-Books
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-200"
            >
              <div className="flex justify-center">
                <BookOpen className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Curated Resources</h3>
              <p className="mt-2 text-base text-gray-500">
                Expert-selected learning materials designed for effective language acquisition at every level
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-200"
            >
              <div className="flex justify-center">
                <Globe className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Multiple Languages</h3>
              <p className="mt-2 text-base text-gray-500">
                Comprehensive resources for popular languages with personalized learning paths
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-200"
            >
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Community Learning</h3>
              <p className="mt-2 text-base text-gray-500">
                Join language exchange groups and practice with native speakers worldwide
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-500">
            Trusted by over 100,000 learners worldwide
          </p>
        </motion.div>
      </div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose LangLearn?
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Our comprehensive platform offers everything you need to master a new language
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Sparkles,
              title: "Personalized Learning",
              description: "AI-powered system adapts to your learning style and pace"
            },
            {
              icon: Target,
              title: "Goal-Oriented",
              description: "Set and track your language learning objectives"
            },
            {
              icon: Clock,
              title: "Flexible Schedule",
              description: "Learn at your own pace, anytime and anywhere"
            },
            {
              icon: Video,
              title: "Live Sessions",
              description: "Practice with native speakers in real-time video calls"
            },
            {
              icon: MessageCircle,
              title: "Community Support",
              description: "Connect with fellow learners and language partners"
            },
            {
              icon: Award,
              title: "Certification",
              description: "Earn recognized certificates as you progress"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-center">
                <feature.icon className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-base text-gray-500">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Active Learners", value: "100K+" },
              { label: "Languages", value: "25+" },
              { label: "Native Tutors", value: "1,000+" },
              { label: "Learning Resources", value: "10,000+" }
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="text-3xl font-extrabold text-white">{stat.value}</p>
                <p className="mt-1 text-base text-indigo-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Learners Say
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Join thousands of satisfied language learners worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              name: "Sarah Johnson",
              role: "English Learner",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
              quote: "LangLearn made it possible for me to achieve fluency in English within a year. The personalized approach really works!"
            },
            {
              name: "Michael Chen",
              role: "Spanish Learner",
              image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
              quote: "The live sessions with native speakers helped me gain confidence in speaking Spanish. Highly recommended!"
            },
            {
              name: "Emma Wilson",
              role: "Japanese Learner",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
              quote: "The structured approach and community support made learning Japanese enjoyable and effective."
            }
          ].map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-500 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}