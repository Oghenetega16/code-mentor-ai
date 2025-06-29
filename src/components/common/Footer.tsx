import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Github, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Logo and Description */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <Code className="h-8 w-8 text-primary-400" />
                            <span className="text-xl font-bold">CodeMentor AI</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-4">
                        Empowering developers to write better code through AI-powered reviews and mentorship. 
                        Level up your coding skills with personalized feedback and expert guidance.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Product</h3>
                        <ul className="space-y-2">
                            <li><Link to="/features" className="text-gray-400 hover:text-white text-sm transition-colors">Features</Link></li>
                            <li><Link to="/pricing" className="text-gray-400 hover:text-white text-sm transition-colors">Pricing</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">About</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li><Link to="/help" className="text-gray-400 hover:text-white text-sm transition-colors">Help Center</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact Us</Link></li>
                            <li><Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-400 text-sm">© {new Date().getFullYear()} CodeMentor AI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;