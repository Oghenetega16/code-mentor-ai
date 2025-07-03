import { useState } from "react";
import { Brain, Eye, EyeOff, Mail, Lock } from "lucide-react";

export default function SignupPage({ onBack }: { onBack?: () => void }) {
    const [formData, setFormData] = useState({
        fullName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState<{
        fullName?: string;
        username?: string;
        email?: string;
        password?: string;
        confirmPassword?: string;
    }>({});

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const validate = () => {
        const newErrors: typeof errors = {};
        if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
        if (!formData.username.trim()) newErrors.username = "Username is required";

        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!emailRegex.test(formData.email))
        newErrors.email = "Email is invalid";

        if (!formData.password) newErrors.password = "Password is required";
        else if (formData.password.length < 6)
        newErrors.password = "Password must be at least 6 characters";

        if (!formData.confirmPassword)
        newErrors.confirmPassword = "Please confirm your password";
        else if (formData.password !== formData.confirmPassword)
        newErrors.confirmPassword = "Passwords do not match";

        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
        console.log("Signup data:", formData);
        // TODO: call your signup API here
        }
    };

    const ErrorMsg = ({ message }: { message?: string }) =>
        message ? <p className="mt-1 text-xs text-red-500">{message}</p> : null;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
            <div className="max-w-md w-full">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center mb-4">
                            <div className="p-2 bg-purple-600 rounded-xl mr-3">
                                <Brain className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Create Account</h2>
                        </div>
                        <p className="text-gray-300">Join CodeMentor AI and start your coding journey!</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                                errors.fullName ? "border-red-500 focus:ring-red-500" : "border-white/20"
                                }`}
                                placeholder="Enter your full name"
                                aria-describedby="fullName-error"
                                required
                            />
                            <ErrorMsg message={errors.fullName} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Username</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                                errors.username ? "border-red-500 focus:ring-red-500" : "border-white/20"
                                }`}
                                placeholder="Choose a username"
                                aria-describedby="username-error"
                                required
                            />
                                <ErrorMsg message={errors.username} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full pl-12 pr-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                                    errors.email ? "border-red-500 focus:ring-red-500" : "border-white/20"
                                }`}
                                placeholder="Enter your email"
                                aria-describedby="email-error"
                                required
                                />
                            </div>
                                <ErrorMsg message={errors.email} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={`w-full pl-12 pr-12 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                                        errors.password ? "border-red-500 focus:ring-red-500" : "border-white/20"
                                    }`}
                                    placeholder="Create a password"
                                    aria-describedby="password-error"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                    tabIndex={-1}
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                            <ErrorMsg message={errors.password} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                    className={`w-full pl-12 pr-12 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                                        errors.confirmPassword ? "border-red-500 focus:ring-red-500" : "border-white/20"
                                    }`}
                                    placeholder="Confirm your password"
                                    aria-describedby="confirmPassword-error"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                                    tabIndex={-1}
                                >
                                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                            <ErrorMsg message={errors.confirmPassword} />
                        </div>

                        <button
                        type="submit"
                        className="w-full py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors"
                        >
                        Create Account
                        </button>

                        <p className="text-center text-gray-300 mt-6">
                            Already have an account?{" "}
                            <button
                                type="button"
                                onClick={onBack}
                                className="text-purple-400 hover:text-purple-300 font-semibold"
                            >
                                Sign in
                            </button>
                        </p>
                    </form>

                    {onBack && (
                        <button
                        type="button"
                        onClick={onBack}
                        className="mt-4 text-sm text-gray-400 hover:text-white transition-colors"
                        >
                        ← Back to home
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
