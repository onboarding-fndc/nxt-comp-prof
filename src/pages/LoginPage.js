
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Link from 'next/link';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Login submitted:', { email, password });
  };

  return (
    <div><Navbar/>
    <div className="container mx-auto mt-8 mb-8">
      <h2 className="text-3xl font-bold text-center mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            className="w-full p-2 border border-gray-400"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full p-2 border border-gray-400"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </button>
        <div className="mt-4 text-gray-700">
          Don't have an account?{' '}
          <Link href="/register">
            <div className="text-blue-500">Register here</div>
          </Link>
        </div>
      </form>
    </div>
    </div>
  );
};

export default LoginPage;
