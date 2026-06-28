import { useState } from "react";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  const user = localStorage.getItem("userInfo");

  if (user) {
    return <Navigate to="/home" />;
  }

  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] =
    useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [forgotData, setForgotData] = useState({
    email: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        const { data } = await axios.post(
          "http://localhost:5000/api/auth/login",
          {
            email: formData.email,
            password: formData.password,
          }
        );

        localStorage.setItem(
          "userInfo",
          JSON.stringify(data)
        );

        alert("Login Successful");

        navigate("/home");
      } else {
        if (
          formData.password !==
          formData.confirmPassword
        ) {
          return alert("Passwords do not match");
        }

        const { data } = await axios.post(
          "http://localhost:5000/api/auth/register",
          {
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }
        );

        localStorage.setItem(
          "userInfo",
          JSON.stringify(data)
        );

        alert("Account Created Successfully");

        navigate("/home");
      }
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/forgot-password",
        forgotData
      );

      alert(data.message);

      setIsForgotPassword(false);
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

  if (isForgotPassword) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6">
            Reset Password
          </h1>

          <form
            onSubmit={handleForgotPassword}
            className="space-y-4"
          >
            <input
              type="email"
              placeholder="Email"
              value={forgotData.email}
              onChange={(e) =>
                setForgotData({
                  ...forgotData,
                  email: e.target.value,
                })
              }
              className="w-full p-3 border rounded-lg"
              required
            />

            <input
              type="password"
              placeholder="New Password"
              value={forgotData.newPassword}
              onChange={(e) =>
                setForgotData({
                  ...forgotData,
                  newPassword: e.target.value,
                })
              }
              className="w-full p-3 border rounded-lg"
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg"
            >
              Reset Password
            </button>

            <button
              type="button"
              onClick={() =>
                setIsForgotPassword(false)
              }
              className="w-full border py-3 rounded-lg"
            >
              Back to Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-2">
          Quiz India
        </h1>

        <p className="text-center text-gray-500 mb-6">
          {isLogin
            ? "Login to continue"
            : "Create your account"}
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />

          <div className="relative">
            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-600"
            >
              {showPassword
                ? "Hide"
                : "Show"}
            </button>
          </div>

          {!isLogin && (
            <div className="relative">
              <input
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                name="confirmPassword"
                placeholder="Confirm Password"
                value={
                  formData.confirmPassword
                }
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-600"
              >
                {showConfirmPassword
                  ? "Hide"
                  : "Show"}
              </button>
            </div>
          )}

          {isLogin && (
            <div className="text-right">
              <button
                type="button"
                onClick={() =>
                  setIsForgotPassword(true)
                }
                className="text-blue-600 text-sm"
              >
                Forgot Password?
              </button>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
          >
            {isLogin
              ? "Login"
              : "Create Account"}
          </button>
        </form>

        <div className="text-center mt-6">
          {isLogin ? (
            <p>
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() =>
                  setIsLogin(false)
                }
                className="text-blue-600 font-semibold"
              >
                Sign Up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() =>
                  setIsLogin(true)
                }
                className="text-blue-600 font-semibold"
              >
                Login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;