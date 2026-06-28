import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Leaderboard from "./pages/Leaderboard";
import SubjectDetails from "./pages/SubjectDetails";
import Quiz from "./pages/Quiz";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Auth from "./pages/Auth";
import Account from "./pages/Account";
import AddQuestion from "./pages/AddQuestion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />
        <Route path="/auth" element={<Auth />} />
        <Route path="/account" element={<Account />} />
        <Route
          path="/add"
          element={<AddQuestion />}
        />

        <Route
          path="/subject/:subject"
          element={<SubjectDetails />}
        />

        <Route
          path="/quiz/:subject/:level"
          element={<Quiz />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;