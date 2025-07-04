import { useState } from 'react';
import { Github, Brain, Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { signInWithPopup } from "firebase/auth";
import { auth, githubProvider } from "../firebase";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [firebaseError, setFirebaseError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFirebaseError(null);
        setLoading(true);
        try {
            const { user } = await signInWithEmailAndPassword(auth, formData.email, formData.password);
            if (!user.emailVerified) {
                alert("Please verify your email before logging in.");
                return;
            }
            navigate('/dashboard'); 
        } catch (error: unknown) {
            if (error instanceof FirebaseError) {
                if (error.code === 'auth/user-not-found') {
                    setFirebaseError("No account found with this email.");
                } else if (error.code === 'auth/wrong-password') {
                    setFirebaseError("Incorrect password.");
                } else {
                    setFirebaseError(error.message);
                }
            } else {
                setFirebaseError("An unexpected error occurred.");
            }
        } finally {
            setLoading(false);
        }
    };

    const handleGitHubLogin = async () => {
        try {
            const result = await signInWithPopup(auth, githubProvider);
            console.log("GitHub user:", result.user);
        } catch (error) {
            console.error(error);
        }
    };

    return (
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

                    <form className="space-y-6" onSubmit={handleSubmit}>
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
                                    required
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
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5 cursor-pointer" /> : <Eye className="w-5 h-5 cursor-pointer" />}
                                </button>
                            </div>
                        </div>

                        {firebaseError && (
                            <p className="text-sm text-red-400 text-center">{firebaseError}</p>
                        )}

                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <input type="checkbox" className="rounded border-gray-600 text-purple-600 focus:ring-purple-500 cursor-pointer" />
                                <span className="ml-2 text-sm text-gray-300">Remember me</span>
                            </label>
                            <Link to="/forgotpassword" className="text-sm text-purple-400 hover:text-purple-300 cursor-pointer">Forgot password?</Link>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-3 ${
                                loading ? "bg-purple-400" : "bg-purple-600 hover:bg-purple-700"
                            } text-white rounded-xl font-semibold transition-colors cursor-pointer`}
                        >
                            {loading ? "Signing in..." : "Sign In"}
                        </button>

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
                            onClick={handleGitHubLogin}
                            className="w-full py-3 mb-5 bg-gray-800 text-white rounded-xl font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center cursor-pointer"
                        >
                            <Github className="w-5 h-5 mr-2" />
                            Sign in with GitHub
                        </button>
                    </form>

                    <Link to="/signup" className="text-center text-gray-300 mt-6 block">
                        Don't have an account?{' '}
                        <button className="text-purple-400 hover:text-purple-300 font-semibold cursor-pointer">
                            Sign up
                        </button>
                    </Link>

                    <Link to="/" className="flex mt-4 text-sm text-gray-400 hover:text-white transition-colors">
                        ← Back to home
                    </Link>
                </div>
            </div>
        </div>
    );
}
