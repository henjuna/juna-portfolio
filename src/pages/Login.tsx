import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useLoginStore } from '../store/Login.store';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

/**
 *
 * @param {ReturnType<typeof useNavigate>} navigate
 */
const processLogin = async (navigate: ReturnType<typeof useNavigate>) => {
  const store = useLoginStore.getState();
  const auth = getAuth();

  try {
    await signInWithEmailAndPassword(
      auth,
      store.formValues.email,
      store.formValues.password,
    );
    store.setError(false);
    navigate('/dashboard');
  } catch {
    store.setError(true);
  }
};

export const Login = () => {
  const store = useLoginStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    processLogin(navigate);
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate('/dashboard');
      }
    });
    return unsubscribe;
  }, [navigate]);

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
              autoFocus
              type="email"
              placeholder="example@gmail.com"
              className={`w-full bg-white/5 border rounded px-4 py-3 text-white transition focus:outline-none focus:bg-blue-500/5 ${
                store.error
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-white/10 focus:border-blue-500'
              }`}
              onChange={(e) => {
                store.formValues.setEmail(e.target.value);
                store.setError(false);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  (e.currentTarget.form as HTMLFormElement)?.requestSubmit();
                }
              }}
            />
          </div>
          <div className="relative">
            <input
              required
              type="password"
              placeholder="Password"
              className={`w-full bg-white/5 border rounded px-4 py-3 text-white transition focus:outline-none focus:bg-blue-500/5 ${
                store.error
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-white/10 focus:border-blue-500'
              }`}
              onChange={(e) => {
                store.formValues.setPassword(e.target.value);
                store.setError(false);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  (e.currentTarget.form as HTMLFormElement)?.requestSubmit();
                }
              }}
            />
          </div>
          {store.error && (
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
