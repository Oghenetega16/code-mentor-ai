import { useState } from "react";
import { Brain, Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // Adjust path if needed
import { createUserWithEmailAndPassword, sendEmailVerification, } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";


type FormData = {
    fullName: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
};

type FormErrors = {
    fullName?: string;
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
};

export default function SignupPage({ onBack }: { onBack?: () => void }) {
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [firebaseError, setFirebaseError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const validate = () => {
        const newErrors: FormErrors = {};

        if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
        if (!formData.username.trim()) newErrors.username = "Username is required";

        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!emailRegex.test(formData.email)) newErrors.email = "Email is invalid";

        if (!formData.password) newErrors.password = "Password is required";
        else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";

        if (!formData.confirmPassword)
        newErrors.confirmPassword = "Please confirm your password";
        else if (formData.password !== formData.confirmPassword)
        newErrors.confirmPassword = "Passwords do not match";

        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFirebaseError(null);
        const validationErrors = validate();
        setErrors(validationErrors);
    
        if (Object.keys(validationErrors).length === 0) {
        setLoading(true);
        try {
            // 1. Create user with email and password
            const userCredential = await createUserWithEmailAndPassword(
            auth,
            formData.email,
            formData.password
            );
    
            const user = userCredential.user;
    
            // 2. Save fullName and username to Firestore
            await setDoc(doc(db, "users", user.uid), {
            fullName: formData.fullName,
            username: formData.username,
            email: formData.email,
            createdAt: new Date().toISOString()
            });

        // 3. Send verification email
        await sendEmailVerification(user);

            alert("Verification email sent. Please check your inbox.");
            navigate("/login");
        } catch (error: unknown) {
            if (error instanceof FirebaseError) {
            setFirebaseError(error.message);
            } else {
            setFirebaseError("An unexpected error occurred.");
            }
        } finally {
            setLoading(false);
        }
        }
    };

    const ErrorMsg = ({ message }: { message?: string }) =>
        message ? <p className="mt-1 text-xs text-red-500">{message}</p> : null;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 font-montserrat">
            <div className="max-w-md w-full">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl my-10">
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center mb-4">
                            <div className="p-2 bg-purple-600 rounded-xl mr-3"><Brain className="w-6 h-6 text-white" /></div>
                            <h2 className="text-2xl font-bold text-white">Create Account</h2>
                        </div>
                        <p className="text-gray-300">Join CodeMentor AI and start your coding journey!</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                        {/* Full Name */}
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
                                required
                            />
                            <ErrorMsg message={errors.fullName} />
                        </div>

                        {/* Username */}
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
                                required
                            />
                            <ErrorMsg message={errors.username} />
                        </div>

                        {/* Email */}
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
                                    required
                                />
                            </div>
                            <ErrorMsg message={errors.email} />
                        </div>

                        {/* Password */}
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
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                                    aria-label="Toggle password visibility"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5 cursor-pointer" /> : <Eye className="w-5 h-5 cursor-pointer" />}
                                </button>
                            </div>
                            <ErrorMsg message={errors.password} />
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Confirm Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className={`w-full pl-12 pr-12 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                                        errors.confirmPassword ? "border-red-500 focus:ring-red-500" : "border-white/20"
                                    }`}
                                    placeholder="Confirm your password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                                    aria-label="Toggle confirm password visibility"
                                >
                                    {showConfirmPassword ? <EyeOff className="w-5 h-5 cursor-pointer" /> : <Eye className="w-5 h-5 cursor-pointer" />}
                                </button>
                            </div>
                            <ErrorMsg message={errors.confirmPassword} />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-3 ${
                                loading ? "bg-purple-400" : "bg-purple-600 hover:bg-purple-700"
                            } text-white rounded-xl font-semibold transition-colors cursor-pointer`}
                        >
                            {loading ? "Creating Account..." : "Create Account"}
                        </button>

                        {firebaseError && (
                        <p className="mt-4 text-sm text-red-400 text-center">{firebaseError}</p>
                        )}

                        <Link to="/login" className="text-center text-gray-300 mt-6 block">
                            Already have an account?{" "}
                            <button
                                type="button"
                                onClick={onBack}
                                className="text-purple-400 hover:text-purple-300 font-semibold cursor-pointer"
                            >
                                Sign in
                            </button>
                        </Link>
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
