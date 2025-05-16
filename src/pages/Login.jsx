import  { useState } from "react";
import { FaEnvelope, FaLock, FaCheck, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    navigate("/forgot-password");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/sign-up");
  };
const handleLogin = (e)=>{
  e.preventDefault();
  navigate('/');
}
  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      {/* Top Section with Blue Background and Wave */}
      <div className="relative bg-[#001a3d] h-[55vh] text-white">
        <div className="absolute inset-0 flex items-left  flex-col justify-center ml-5 ">
          <h2 className="text-5xl font-semibold  ">Welcome</h2>
          <div className="text-5xl font-semibold mt-1 ">Back</div>
        </div>
        
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 360 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,50 C70,0 270,80 360,30 L360,150 L0,80 Z"
            fill="white"
           stroke="none"
           
          />
        
        </svg>
        {/* Animated Wave */}
  <div className="wave-wrapper absolute bottom-0 left-0 w-full h-16 overflow-hidden">
    <div className="wave"></div>
    <div className="wave wave2"></div>
  </div>
      </div>

      {/* Login Form */}
      <div className="flex-1 px-6 py-4 w-full max-w-sm mx-auto">
        <form className="flex flex-col gap-6">
          <div className="relative border-b border-gray-300">
            <FaEnvelope className="absolute top-3 left-0 text-gray-400" />
            <input
              type="email"
              placeholder="water@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-8 pr-8 py-2 focus:outline-none"
            />
            {isValidEmail(email) && (
              <FaCheck className="absolute top-3 right-0 text-green-500" />
            )}
          </div>

          <div className="relative border-b border-gray-300">
            <FaLock className="absolute top-3 left-0 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-8 pr-8 py-2 focus:outline-none"
            />
            <div
              className="absolute top-3 right-0 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          <div className="text-right  text-blue-500 font-semibold">
            <button onClick={handleForgotPassword} className="hover:underline">
              Forgot password?
            </button>
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-[#001a3d] text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Log in
          </button>
        </form>

        <div className="text-center text-gray-500 mt-4">or</div>

        <button
          onClick={handleSignup}
          className="block w-full mt-4 border border-gray-300 text-center py-2 rounded-lg text-[#001a3d] hover:bg-blue-50"
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Login;