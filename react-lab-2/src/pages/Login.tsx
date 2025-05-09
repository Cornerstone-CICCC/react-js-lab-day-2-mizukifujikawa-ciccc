import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/useUser";

const LoginPage = () => {
  const [name, setName] = useState("");
  const { login } = useUser();
  const navigate = useNavigate();

  const handleLogin = () => {
    login(name);
    navigate("/todos");
  };

  return (
    <div className="flex justify-center items-center bg-gray-800 min-h-screen">
      <div className="bg-gray-700 p-8 rounded-xl shadow-2xl w-96">
        <h1 className="text-white text-3xl mb-6 text-center font-bold">
          Hi. What's your name?
        </h1>
        <input
          type="text"
          placeholder="Enter your name"
          className="mb-6 p-3 w-full rounded-md text-white"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-blue-600 transition-all"
        >
          Login
        </button>
      </div>
    </div>
  );
};


export default LoginPage;
