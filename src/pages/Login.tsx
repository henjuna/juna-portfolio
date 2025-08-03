import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log('Login successful:', userCredential.user);
      setError(false);
    } catch (error: any) {
      console.error('Login failed:', error.message);
      setError(true);
    }
  };

  return (
    <section
      id="login"
      className="min-h-screen flex items-center justify-center relative pt-20"
    >
      <div className="w-full max-w-md bg-white/10 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Admin Login
        </h1>
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              required
              type="email"
              placeholder="example@gmail.com"
              className={`w-full bg-white/5 border rounded px-4 py-3 text-white transition focus:outline-none focus:bg-blue-500/5 ${
                error
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-white/10 focus:border-blue-500'
              }`}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(false);
              }}
            />
          </div>
          <div className="relative">
            <input
              required
              type="password"
              placeholder="Password"
              className={`w-full bg-white/5 border rounded px-4 py-3 text-white transition focus:outline-none focus:bg-blue-500/5 ${
                error
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-white/10 focus:border-blue-500'
              }`}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm text-center -mt-4">
              Invalid email or password.
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-6 rounded-full font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
};
export default Login;
