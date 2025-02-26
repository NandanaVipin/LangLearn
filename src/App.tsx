import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { BookOpen, Video, Headphones, FileText, Users, Star } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import FavIcon from './components/FavIcon';

// Learning Page Content
const LearningPage = () => (
  <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Start Your Learning Journey
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Choose your path and begin mastering a new language today
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Beginner Course",
            description: "Perfect for those just starting their language journey",
            features: ["Basic vocabulary", "Essential grammar", "Simple conversations"],
            price: "$9.99/month",
            popular: false
          },
          {
            title: "Intermediate Course",
            description: "Take your language skills to the next level",
            features: ["Advanced grammar", "Vocabulary expansion", "Cultural insights"],
            price: "$14.99/month",
            popular: true
          },
          {
            title: "Advanced Course",
            description: "Master the language like a native speaker",
            features: ["Complex topics", "Business language", "Native conversations"],
            price: "$19.99/month",
            popular: false
          }
        ].map((course) => (
          <motion.div
            key={course.title}
            whileHover={{ scale: 1.03 }}
            className={`rounded-lg shadow-lg overflow-hidden ${
              course.popular ? 'border-2 border-indigo-500' : ''
            }`}
          >
            <div className="bg-white p-8">
              {course.popular && (
                <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Popular Choice
                </span>
              )}
              <h3 className="mt-4 text-2xl font-bold text-gray-900">{course.title}</h3>
              <p className="mt-4 text-gray-500">{course.description}</p>
              <ul className="mt-6 space-y-4">
                {course.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Star className="h-5 w-5 text-indigo-500" />
                    <span className="ml-3 text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <div className="text-3xl font-bold text-gray-900">{course.price}</div>
                <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

// E-Books Page Content
const EBooksPage = () => (
  <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Language Learning E-Books
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Comprehensive guides and resources for every level
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Complete Spanish Guide",
            level: "Beginner to Intermediate",
            pages: "450 pages",
            format: "PDF & EPUB",
            price: "$24.99"
          },
          {
            title: "French Business Communication",
            level: "Intermediate to Advanced",
            pages: "320 pages",
            format: "PDF & EPUB",
            price: "$29.99"
          },
          {
            title: "Japanese for Beginners",
            level: "Beginner",
            pages: "280 pages",
            format: "PDF & EPUB",
            price: "$19.99"
          }
        ].map((book) => (
          <motion.div
            key={book.title}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-8">
              <BookOpen className="h-12 w-12 text-indigo-600" />
              <h3 className="mt-4 text-xl font-bold text-gray-900">{book.title}</h3>
              <div className="mt-4 space-y-2">
                <p className="text-gray-500">Level: {book.level}</p>
                <p className="text-gray-500">Length: {book.pages}</p>
                <p className="text-gray-500">Format: {book.format}</p>
              </div>
              <div className="mt-6">
                <span className="text-2xl font-bold text-gray-900">{book.price}</span>
                <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                  Purchase Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

// Resources Page Content
const ResourcesPage = () => (
  <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Learning Resources
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Everything you need to succeed in your language learning journey
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: Video,
            title: "Video Lessons",
            description: "Learn from native speakers with our curated video lessons"
          },
          {
            icon: Headphones,
            title: "Audio Materials",
            description: "Improve your listening skills with podcasts and audio lessons"
          },
          {
            icon: FileText,
            title: "Practice Exercises",
            description: "Test your knowledge with interactive exercises"
          },
          {
            icon: Users,
            title: "Community Forums",
            description: "Connect with other learners and share experiences"
          }
        ].map((resource) => (
          <motion.div
            key={resource.title}
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <resource.icon className="h-12 w-12 text-indigo-600" />
            <h3 className="mt-4 text-xl font-bold text-gray-900">{resource.title}</h3>
            <p className="mt-2 text-gray-500">{resource.description}</p>
            <button className="mt-4 text-indigo-600 hover:text-indigo-700 font-medium">
              Learn More →
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

// Define the resource types for better type safety
interface LearningItem {
  title: string;
  type: string;
  duration?: string;
  price?: string;
}

interface LanguageContent {
  beginner: LearningItem[];
  intermediate: LearningItem[];
  recommended: LearningItem[];
}

interface LanguageResources {
  [key: string]: LanguageContent;
}

// Add this new component for language-specific learning
const LanguageLearningPage = () => {
  const { language } = useParams();
  const navigate = useNavigate();

  const languageResources: LanguageResources = {
    Spanish: {
      beginner: [
        { title: "Basic Spanish Vocabulary", type: "Video", duration: "15 mins" },
        { title: "Spanish Pronunciation Guide", type: "Audio", duration: "20 mins" },
        { title: "Essential Spanish Phrases", type: "Practice", duration: "10 mins" }
      ],
      intermediate: [
        { title: "Spanish Conversation Practice", type: "Interactive", duration: "30 mins" },
        { title: "Spanish Grammar Deep Dive", type: "Lesson", duration: "25 mins" },
        { title: "Spanish Culture & Idioms", type: "Reading", duration: "20 mins" }
      ],
      recommended: [
        { title: "Spanish for Beginners E-Book", type: "E-Book", price: "$19.99" },
        { title: "Spanish Conversation Course", type: "Course", price: "$49.99" },
        { title: "Spanish Grammar Workbook", type: "Workbook", price: "$29.99" }
      ]
    },
    French: {
      beginner: [
        { title: "French Basics", type: "Video", duration: "20 mins" },
        { title: "French Pronunciation", type: "Audio", duration: "25 mins" },
        { title: "Common French Phrases", type: "Practice", duration: "15 mins" }
      ],
      intermediate: [
        { title: "French Conversation Skills", type: "Interactive", duration: "35 mins" },
        { title: "Advanced French Grammar", type: "Lesson", duration: "30 mins" },
        { title: "French Culture & Customs", type: "Reading", duration: "25 mins" }
      ],
      recommended: [
        { title: "French Language Guide", type: "E-Book", price: "$19.99" },
        { title: "French Mastery Course", type: "Course", price: "$49.99" },
        { title: "French Practice Book", type: "Workbook", price: "$29.99" }
      ]
    },
    German: {
      beginner: [
        { title: "German Fundamentals", type: "Video", duration: "20 mins" },
        { title: "German Pronunciation", type: "Audio", duration: "25 mins" },
        { title: "Basic German Phrases", type: "Practice", duration: "15 mins" }
      ],
      intermediate: [
        { title: "German Conversations", type: "Interactive", duration: "35 mins" },
        { title: "German Grammar in Detail", type: "Lesson", duration: "30 mins" },
        { title: "German Traditions", type: "Reading", duration: "25 mins" }
      ],
      recommended: [
        { title: "German Language Book", type: "E-Book", price: "$19.99" },
        { title: "German Complete Course", type: "Course", price: "$49.99" },
        { title: "German Exercises", type: "Workbook", price: "$29.99" }
      ]
    },
    Japanese: {
      beginner: [
        { title: "Japanese Basics", type: "Video", duration: "20 mins" },
        { title: "Japanese Pronunciation", type: "Audio", duration: "25 mins" },
        { title: "Essential Japanese", type: "Practice", duration: "15 mins" }
      ],
      intermediate: [
        { title: "Japanese Dialogue", type: "Interactive", duration: "35 mins" },
        { title: "Japanese Writing", type: "Lesson", duration: "30 mins" },
        { title: "Japanese Culture", type: "Reading", duration: "25 mins" }
      ],
      recommended: [
        { title: "Japanese Starter Pack", type: "E-Book", price: "$19.99" },
        { title: "Japanese Full Course", type: "Course", price: "$49.99" },
        { title: "Japanese Workbook", type: "Workbook", price: "$29.99" }
      ]
    }
  };

  // Check if language exists in resources
  if (!language || !languageResources[language]) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Language Not Found</h1>
          <p className="mt-4 text-xl text-gray-600">Please select a valid language to continue.</p>
          <button
            onClick={() => navigate('/')}
            className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  const resources = languageResources[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Learn {language}
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Start your journey to master {language} with our curated resources
          </p>
        </motion.div>

        {/* Today's Learning Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Start Learning Today</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.beginner.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-indigo-600">{item.type}</span>
                  <span className="text-sm text-gray-500">{item.duration}</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                  Start Lesson
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Next Steps Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Next Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.intermediate.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-indigo-600">{item.type}</span>
                  <span className="text-sm text-gray-500">{item.duration}</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                <button className="mt-4 w-full bg-white text-indigo-600 border border-indigo-600 py-2 px-4 rounded-md hover:bg-indigo-50 transition-colors">
                  Preview
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recommended Resources */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Recommended Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.recommended.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-indigo-600">{item.type}</span>
                  <span className="text-lg font-bold text-gray-900">{item.price}</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                  Get Access
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <FavIcon />
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/courses" element={<LearningPage />} />
              <Route path="/ebooks" element={<EBooksPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/learn/:language" element={<LanguageLearningPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;