import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import SubmitCode from './pages/SubmitCode';
import ReviewResults from './pages/ReviewResults';
import Profile from './pages/Profile';
import ProtectedRoute from './components/auth/ProtectedRoute';

export default function App() {
    return (
        <AuthProvider>
            <Router>
                <div>
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home/>} />
                            <Route path="/login" element={<Login/>} />
                            <Route path="/signup" element={<Signup/>} />

                            <Route path="/dashboard" element={
                                <ProtectedRoute>
                                    <Dashboard />
                                </ProtectedRoute>
                            }/>

                            <Route path="/submit" element={
                                <ProtectedRoute>
                                    <SubmitCode />
                                </ProtectedRoute>
                            }/>

                            <Route path="/review/:id" element={
                                <ProtectedRoute>
                                    <ReviewResults />
                                </ProtectedRoute>
                            }/>

                            <Route path="/profile" element={
                                <ProtectedRoute>
                                    <Profile />
                                </ProtectedRoute>
                            }/>

                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </AuthProvider>
    )
}

