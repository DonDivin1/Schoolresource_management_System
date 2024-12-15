import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import SignupForm from '../components/auth/SignupForm';
import { useAuth } from '../contexts/AuthContext';

const Signup = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleSignup = async (data: {
    name: string;
    email: string;
    password: string;
    role: string;
  }) => {
    try {
      await signup(data);
      navigate('/login');
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <AuthLayout
      title="Create an account"
      subtitle="Get started with our school resource management system"
    >
      <SignupForm onSubmit={handleSignup} />
    </AuthLayout>
  );
};

export default Signup;