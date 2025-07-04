import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import LoadingSpinner from './components/common/LoadingSpinner';
import ScrollToTop from './components/common/ScrollToTop';
import OtpVerification from './pages/OTPVerification';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const SubmitCode = lazy(() => import('./pages/SubmitCode'));
const ReviewResults = lazy(() => import('./pages/ReviewResults'));
const Profile = lazy(() => import('./pages/Profile'));
const Mentorship = lazy(() => import('./pages/Mentorship'));
const Learning = lazy(() => import('./pages/Learning'));
const Community = lazy(() => import('./pages/Community'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
    return (
        <AuthProvider>
            <Router>
                <ScrollToTop />
                <div className="min-h-screen bg-gray-50 flex flex-col">
                    <Header />
                    <main className="flex-1">
                        <Suspense fallback={<LoadingSpinner />}>
                            <Routes>
                                {/* Public Routes */}
                                <Route path="/" element={<Home />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/signup" element={<Signup />} />
                                <Route path="/otpverification" element={<OtpVerification />} />

                                {/* Protected Routes */}
                                <Route path="/dashboard" element={
                                    <ProtectedRoute>
                                        <Dashboard />
                                    </ProtectedRoute>
                                } />

                                <Route path="/submit" element={
                                    <ProtectedRoute>
                                        <SubmitCode />
                                    </ProtectedRoute>
                                } />

                                <Route path="/review/:id" element={
                                    <ProtectedRoute>
                                        <ReviewResults />
                                    </ProtectedRoute>
                                } />

                                <Route path="/mentorship" element={
                                    <ProtectedRoute>
                                        <Mentorship />
                                    </ProtectedRoute>
                                } />

                                <Route path="/learning" element={
                                    <ProtectedRoute>
                                        <Learning />
                                    </ProtectedRoute>
                                } />

                                <Route path="/community" element={
                                    <ProtectedRoute>
                                        <Community />
                                    </ProtectedRoute>
                                } />

                                <Route path="/profile" element={
                                    <ProtectedRoute>
                                        <Profile />
                                    </ProtectedRoute>
                                } />

                                {/* Not Found */}
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </Suspense>
                    </main>
                    <Footer />
                </div>
            </Router>
        </AuthProvider>
    );
}
