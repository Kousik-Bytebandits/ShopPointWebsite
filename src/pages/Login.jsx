import { useState } from "react";
import { FaEnvelope, FaLock, FaCheck, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Bubbles from "../components/Bubbles";

const Login = () => {
  const [email, setEmail] = useState("metroscales"); // default username
  const [password, setPassword] = useState("admin@metro"); // default password
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

 

  const handleForgotPassword = (e) => {
    e.preventDefault();
    navigate("/forgot-password");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/sign-up");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://auth.bytebandits.in/user/admin", {
        method: "POST",
        headers: {
          Authorization: "9f3a7c2d8e6b1a47",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Login failed");
      }

      console.log("Login successful:", data);
      
      navigate("/"); 
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      <div className="relative bg-[#001a3d] h-[50dvh] text-white overflow-hidden">
        <Bubbles />
        <div className="absolute inset-0 flex flex-col justify-center -mt-12   ml-5 z-10">
          <h2 className="text-5xl font-semibold">Welcome</h2>
          <div className="text-5xl font-semibold mt-1">Back</div>
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

      <div className="flex-1 px-6 py-4 w-full max-w-sm mx-auto mt-4">
        <form className="flex flex-col gap-6" onSubmit={handleLogin}>
          <div className="relative border-b border-gray-300">
            <FaEnvelope className="absolute top-3 left-0 text-gray-400" />
            <input
              type="text"
              placeholder="Admin Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-8 pr-8 py-2 focus:outline-none"
            />
            {email && (
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

          {error && (
            <div className="text-red-600 text-sm font-medium -mt-4">{error}</div>
          )}

          <div className="text-right text-blue-500 font-semibold">
            <button onClick={handleForgotPassword} className="hover:underline">
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#001a3d] text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            {loading ? "Logging in..." : "Log in"}
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
