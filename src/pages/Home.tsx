import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Users, Zap, Shield, TrendingUp, CheckCircle } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-blue-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Level Up Your Code with
              <span className="text-primary-600 block">AI-Powered Reviews</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get instant, intelligent feedback on your code. Learn from AI-powered reviews, 
              connect with expert mentors, and accelerate your development skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg border border-primary-600 hover:bg-primary-50 transition-colors"
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Improve Your Code
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive code analysis, personalized feedback, and expert mentorship all in one platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI-Powered Analysis */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Analysis</h3>
              <p className="text-gray-600">
                Get instant feedback on code quality, security vulnerabilities, performance issues, and best practices.
              </p>
            </div>

            {/* Expert Mentorship */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Mentorship</h3>
              <p className="text-gray-600">
                Connect with experienced developers for personalized guidance and code reviews.
              </p>
            </div>

            {/* Multi-Language Support */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Language Support</h3>
              <p className="text-gray-600">
                Support for JavaScript, Python, Java, C++, and many more programming languages.
              </p>
            </div>

            {/* Security Focus */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Security Focus</h3>
              <p className="text-gray-600">
                Identify security vulnerabilities and learn secure coding practices with detailed explanations.
              </p>
            </div>

            {/* Progress Tracking */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Progress Tracking</h3>
              <p className="text-gray-600">
                Track your improvement over time with detailed analytics and personalized learning paths.
              </p>
            </div>

            {/* Learning Resources */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Learning Resources</h3>
              <p className="text-gray-600">
                Access curated learning materials and tutorials based on your specific areas for improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get better at coding in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Submit Your Code</h3>
              <p className="text-gray-600">
                Upload your code files or paste your code directly. Support for multiple programming languages and frameworks.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get AI Analysis</h3>
              <p className="text-gray-600">
                Our AI analyzes your code for best practices, security issues, performance problems, and provides detailed explanations.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Learn & Improve</h3>
              <p className="text-gray-600">
                Apply the feedback, connect with mentors, and track your progress as you become a better developer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Loved by Developers Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what developers are saying about CodeMentor AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Sarah Chen</p>
                  <p className="text-sm text-gray-600">Frontend Developer</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "CodeMentor AI helped me identify security vulnerabilities I never would have caught. 
                The explanations are clear and actionable. My code quality has improved significantly!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Marcus Johnson</p>
                  <p className="text-sm text-gray-600">Backend Developer</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "As a junior developer, the mentorship feature has been invaluable. Getting feedback from 
                experienced developers has accelerated my learning tremendously."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Aisha Patel</p>
                  <p className="text-sm text-gray-600">Full Stack Developer</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The AI analysis is incredibly thorough. It catches performance issues and suggests optimizations 
                that have made my applications run much faster."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your needs. Upgrade or downgrade at any time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Free</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$0</div>
                <p className="text-gray-600">Perfect for getting started</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">5 code reviews per month</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">Basic AI analysis</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">Community support</span>
                </li>
              </ul>
              <Link
                to="/signup"
                className="w-full btn-secondary block text-center"
              >
                Get Started Free
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-primary-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Pro</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$19</div>
                <p className="text-gray-600">per month</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">Unlimited code reviews</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">Advanced AI analysis</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">Mentor matching</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">Priority support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">Progress tracking</span>
                </li>
              </ul>
              <Link
                to="/signup"
                className="w-full btn-primary block text-center"
              >
                Start Pro Trial
              </Link>
            </div>

            {/* Team Plan */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Team</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$49</div>
                <p className="text-gray-600">per month</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">Everything in Pro</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">Team analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">Private reviews</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">Custom rules</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">Admin dashboard</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="w-full btn-secondary block text-center"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Level Up Your Coding Skills?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already improving their code quality with CodeMentor AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors border border-primary-500"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;