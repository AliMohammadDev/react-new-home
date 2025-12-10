import { Link } from 'react-router-dom';
import HomeLogo from '../../../assets/images/home-logo-white.svg';
import EmailIcon from '../../../assets/icons/EmailIcon';
import PasswordIcon from '../../../assets/icons/PasswordIcon';
import LeftIcon from '../../../assets/icons/LeftIcon';
function Register() {
  return (
    <div
      className="w-full min-h-screen  bg-cover bg-no-repeat relative bg-center md:bg-right"
      style={{ backgroundImage: `url(https://res.cloudinary.com/dzvrf9xe3/image/upload/v1765358011/LoginImage_q4fdk3.jpg)` }}
    >
      <div className="absolute top-1 md:top-6 left-6 z-20">
        <Link to={-1} className="hover:opacity-80 transition">
          <LeftIcon />
        </Link>
      </div>
      <div className="flex h-screen items-center justify-center bg-cover bg-center relative">
        <div className="relative w-full max-w-md px-4">
          <div className="rounded-2xl bg-white/10 backdrop-blur-md p-8 shadow-2xl border border-white/20 text-white">
            <div className="flex mb-6">
              <img src={HomeLogo} className="w-20 h-15" alt="Home Logo" />
            </div>

            <h2 className="text-2xl mb-1">Welcome back!</h2>
            <p className=" text-gray-200 mb-6">
              Hello, please log in to access your account.
            </p>

            <form className="space-y-5">
              {/* E-mail with icon */}
              <div className="relative">
                {/* SVG icon (email) */}
                <div className="pointer-events-none absolute left-1 top-1/2 -translate-y-1/2">
                  <EmailIcon />
                </div>

                <input
                  type="text"
                  className="block w-full rounded-md border border-white/20 bg-white/20 px-3 py-3 pl-10 text-white placeholder-gray-300 focus:outline-none focus:ring-2  sm:text-sm"
                  required
                  placeholder="E-mail Address"
                  autoComplete="new-name"
                />
              </div>

              <div className="relative">
                {/* SVG icon (lock) */}
                <div className="pointer-events-none absolute left-1  top-1/2 -translate-y-1/2">
                  <PasswordIcon />
                </div>

                <input
                  type="password"
                  className="block w-full rounded-md border border-white/20 bg-white/20 px-3 py-3 pl-10 placeholder-gray-300 focus:outline-none focus:ring-2  sm:text-sm"
                  placeholder="Password"
                  autoComplete="new-password"
                />
              </div>

              <div className="relative">
                {/* SVG icon (lock) */}
                <div className="pointer-events-none absolute left-1  top-1/2 -translate-y-1/2">
                  <PasswordIcon />
                </div>

                <input
                  type="password"
                  className="block w-full rounded-md border border-white/20 bg-white/20 px-3 py-3 pl-10 placeholder-gray-300 focus:outline-none focus:ring-2  sm:text-sm"
                  placeholder="Confirm password"
                  autoComplete="new-password"
                />
              </div>

              <div className="flex justify-center sm:justify-between items-center gap-3 text-sm text-gray-200 mt-4">
                <label className="flex items-center gap-2 select-none">
                  <input type="checkbox" className="accent-white w-4 h-4" />
                  <span>
                    I accept the{' '}
                    <a
                      href="#"
                      className="text-white underline underline-offset-2 hover:text-white transition"
                    >
                      Terms and Conditions
                    </a>
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
              >
                Sign up
              </button>

              <div className="text-center text-sm text-white mt-4">
                Already have an account?{' '}
                <Link to="/login" className="text-white hover:underline">
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
