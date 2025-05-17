import  { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Bubbles from "../components/Bubbles";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };
 const handleSignup = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      {/* Top Section with Blue Background and Wave */}
      <div className="relative bg-[#001a3d]  h-[52dvh] text-white">
        <Bubbles/>
        <div className="absolute inset-0 flex flex-col ml-5 items-left justify-center">
          <h2 className="text-5xl font-semibold ">Create</h2>
          <h2 className="text-5xl font-semibold mt-1"> Account</h2>
        </div>
          {/* Animated Waves */}
  <div className="absolute bottom-0 left-0 w-full z-10">
    <div className="relative w-full h-[150px] overflow-hidden">
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
    </div>
  </div>
      </div>

      {/* Signup Form */}
      <div className="flex-1 px-6 py-4 w-full max-w-sm mx-auto">
        <form className="flex flex-col gap-6">
          <div className="relative border-b border-gray-300">
            <FaUser className="absolute top-3 left-0 text-gray-400" />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-8 py-2 focus:outline-none"
            />
          </div>

          <div className="relative border-b border-gray-300">
            <FaEnvelope className="absolute top-3 left-0 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-8 py-2 focus:outline-none"
            />
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

          <button
            onClick={handleSignup}
            className="w-full bg-[#001a3d]  text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sign up
          </button>
        </form>

        <div className="text-center text-gray-500 mt-4">or</div>

        <button
          onClick={handleLogin}
          className="block w-full mt-4 border border-gray-300 text-center py-2 rounded-lg text-[#001a3d]  hover:bg-blue-50"
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default Signup;
