import { useState } from 'react';
import { Github, Brain, Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { Link } from 'react-router-dom'

export default function Login() {

    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        fullName: '',
        username: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return(
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 font-montserrat">
            <div className="max-w-md w-full">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl my-10">
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center mb-4">
                            <div className="p-2 bg-purple-600 rounded-xl mr-3"><Brain className="w-6 h-6 text-white" /></div>
                            <h2 className="text-2xl font-bold text-white">CodeMentor AI</h2>
                        </div>
                        <p className="text-gray-300">Welcome back! Sign in to continue your coding journey.</p>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="w-full pl-12 pr-12 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                                >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <input type="checkbox" className="rounded border-gray-600 text-purple-600 focus:ring-purple-500" />
                                <span className="ml-2 text-sm text-gray-300">Remember me</span>
                            </label>
                            <a href="#" className="text-sm text-purple-400 hover:text-purple-300">Forgot password?</a>
                        </div>

                        <button onClick={handleSubmit} className="w-full py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors" >Sign In</button>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/20"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-transparent text-gray-300">Or continue with</span>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="w-full py-3 mb-5 bg-gray-800 text-white rounded-xl font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center"
                        >
                            <Github className="w-5 h-5 mr-2" />
                            Sign in with GitHub
                        </button>
                    </div>

                    <Link to="/signup" className="text-center text-gray-300 mt-6">
                        Don't have an account?{' '}
                        <button 
                            className="text-purple-400 hover:text-purple-300 font-semibold"
                        >
                            Sign up
                        </button>
                    </Link>

                    <Link to="/" 
                        className="flex mt-4 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                        ← Back to home
                    </Link>
                </div>
            </div>
        </div>
    )
    
}