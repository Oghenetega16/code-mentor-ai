import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Code,
  Users,
  Zap,
  Shield,
  TrendingUp,
  CheckCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-br from-primary-50 to-blue-100 overflow-hidden"
        aria-label="Hero"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={0}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            variants={fadeUp}
            custom={1}
          >
            Level Up Your Code with
            <span className="text-primary-600 block">AI-Powered Reviews</span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            variants={fadeUp}
            custom={2}
          >
            Get instant, intelligent feedback on your code. Learn from AI-powered reviews, connect with expert mentors, and accelerate your development skills.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeUp}
            custom={3}
          >
            <Link to="/signup" className="btn-primary inline-flex items-center justify-center">
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/demo" className="btn-secondary inline-flex items-center justify-center">
              View Demo
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-white" aria-label="Features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
            >
              Everything You Need to Improve Your Code
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
            >
              Comprehensive code analysis, personalized feedback, and expert mentorship all in one platform.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{ title: 'AI-Powered Analysis', icon: <Zap className="h-8 w-8 text-primary-600" />, desc: 'Get instant feedback on code quality, security vulnerabilities, performance issues, and best practices.' }, { title: 'Expert Mentorship', icon: <Users className="h-8 w-8 text-primary-600" />, desc: 'Connect with experienced developers for personalized guidance and code reviews.' }, { title: 'Multi-Language Support', icon: <Code className="h-8 w-8 text-primary-600" />, desc: 'Support for JavaScript, Python, Java, C++, and many more programming languages.' }, { title: 'Security Focus', icon: <Shield className="h-8 w-8 text-primary-600" />, desc: 'Identify security vulnerabilities and learn secure coding practices with detailed explanations.' }, { title: 'Progress Tracking', icon: <TrendingUp className="h-8 w-8 text-primary-600" />, desc: 'Track your improvement over time with detailed analytics and personalized learning paths.' }, { title: 'Learning Resources', icon: <CheckCircle className="h-8 w-8 text-primary-600" />, desc: 'Access curated learning materials and tutorials based on your specific areas for improvement.' }].map((feature, index) => (
              <motion.div
                className="text-center p-6"
                key={index}
                aria-label={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={index + 1}
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated How It Works Section */}
      <motion.section className="py-20 bg-gray-50" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" variants={fadeUp} custom={1}>
              How It Works
            </motion.h2>
            <motion.p className="text-xl text-gray-600 max-w-2xl mx-auto" variants={fadeUp} custom={2}>
              Get better at coding in three simple steps
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Submit Your Code", "Get AI Analysis", "Learn & Improve"].map((step, i) => (
              <motion.div key={i} className="text-center" variants={fadeUp} custom={i + 1}>
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {i + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step}</h3>
                <p className="text-gray-600">
                  {[
                    "Upload your code files or paste your code directly. Support for multiple programming languages and frameworks.",
                    "Our AI analyzes your code for best practices, security issues, performance problems, and provides detailed explanations.",
                    "Apply the feedback, connect with mentors, and track your progress as you become a better developer."
                  ][i]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* TODO: Add animations to Testimonials, Pricing, CTA sections */}
    </div>
  );
};

export default Home;
