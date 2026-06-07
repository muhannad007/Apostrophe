import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/logo.png";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillSkype,
  AiFillTwitterCircle,
} from "react-icons/ai";

const InputField = ({
  icon: Icon,
  placeholder,
  type,
  value,
  onChange,
  borderColor,
}) => (
  <div
    className={`flex items-center bg-gray-100 p-3 rounded-lg ${borderColor}`}
  >
    <Icon className="text-gray-500 mr-3" size={20} />
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="bg-transparent outline-none flex-1 text-gray-800"
      required
    />
  </div>
);

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirm, setConfirm] = useState(null);
  const [borderColor, setBorderColor] = useState("");
  const [valEmail, setValEmail] = useState(null);

  const validateForm = () => {
    if (name && email && password && confirm) {
      return true;
    } else {
      alert("Some fields are empty");
      return null;
    }
  };

  const validateEmail = (email) => {
    // A common regex pattern for basic email format validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    email &&
      (!regex.test(email)
        ? alert("Invalid Email.")
        : setValEmail("Email is valid"));
    console.log(valEmail);
    return valEmail;
  };

  const toggleMode = () => setIsLogin(!isLogin);

  const formVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  const handleLogin = async () => {
    validateForm();
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    validateForm() &&
      validateEmail(email) &&
      (confirm === password
        ? toggleMode()
        : setBorderColor("border border-red-500"));
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? "login" : "signup"}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={formVariants}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
                {isLogin ? "Welcome back" : "Create account"}
              </h1>
              <div className="space-y-4">
                {!isLogin && (
                  <InputField
                    icon={User}
                    placeholder="Full Name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                )}
                <InputField
                  icon={Mail}
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputField
                  icon={Lock}
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {!isLogin && (
                  <InputField
                    icon={Lock}
                    placeholder="Confirm password"
                    type="password"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    borderColor={borderColor}
                  />
                )}
              </div>
              <div className="mt-8">
                <button
                  onClick={isLogin ? handleLogin : handleSignup}
                  className={`text-white px-6 py-3 rounded-lg w-full flex items-center justify-center ${isLogin ? "bg-blue-600" : "bg-green-600"}`}
                >
                  {isLogin ? "Sign In" : "Sign Up"}{" "}
                  <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
              {isLogin && (
                <div className="mt-6 flex justify-center space-x-4">
                  <button className="p-2 bg-gray-200 rounded-full">
                    <AiFillFacebook
                      className="text-gray-700 hover:text-white"
                      size={24}
                    />
                  </button>
                  <button className="p-2 bg-gray-200 rounded-full">
                    <AiFillTwitterCircle
                      className="text-gray-700 hover:text-white"
                      size={24}
                    />
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div
        className={`w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 ${isLogin ? "bg-blue-600" : "bg-green-600"} signup-bg`}
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            {isLogin ? "New here?" : "Already have an account?"}
          </h2>
          <img className="m-auto" src={logo} width={100} alt="logo" />
          <p className="text-gray-200 mb-8">
            {isLogin
              ? "Sign up and discover a great amount of new opportunities!"
              : "Sign in to access your account and continue your journey!"}
          </p>
          <button
            className="bg-white px-6 py-3 rounded-lg"
            style={{ color: isLogin ? "#2563EB" : "#059669" }}
            onClick={toggleMode}
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
