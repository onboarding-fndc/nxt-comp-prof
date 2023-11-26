
import { useState } from 'react';
import Navbar from '../../components/Navbar';

const Forgot = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // custom logic forgot password disini
    console.log('Forgot Password submitted:', email);
  };

  return (
    <div>
        <Navbar/>
    <div className="container mx-auto mt-8 mb-10">
      <h2 className="text-3xl font-bold text-center mb-4">Forgot Password</h2>
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
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
          Reset Password
        </button>
      </form>
    </div>
    </div>
  );
};

export default Forgot;
