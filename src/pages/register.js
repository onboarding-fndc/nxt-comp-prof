// components/RegisterPage.js
import { useState } from 'react';
import Navbar from '../../components/Navbar';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const HandleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const HandlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Registration submitted:', { email, password });
  };

  return (
    <div>
        <Navbar/>
    <div className="container mx-auto mt-8 mb-10">
      <h2 className="text-3xl font-bold text-center mb-4">Register</h2>
      <form onSubmit={HandleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={HandleEmailChange}
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
            onChange={HandlePasswordChange}
            className="w-full p-2 border border-gray-400"
            required
          />
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Register
        </button>
      </form>
    </div>
    </div>
  );
};

export default Register;
