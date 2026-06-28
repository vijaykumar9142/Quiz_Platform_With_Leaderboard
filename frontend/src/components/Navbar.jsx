import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Quiz India</h1>

      <div className="flex items-center gap-8 ">
        <Link to="/home">
          <button className="cursor-pointer">Home</button>
        </Link>
        <Link to="/leaderboard">
          <button className="cursor-pointer">Leaderboard</button>
        </Link>
        <Link to="/about">
          <button className="cursor-pointer">About</button>
        </Link>
        <Link to="/add">
          <button className="cursor-pointer">Add</button>
        </Link>
        <Link to="/account" className="bg-blue-600 text-white px-4 py-2 rounded">
          Account
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;