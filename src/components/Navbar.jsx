import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-neutral-800 flex justify-between px-20 py-4">
      <Link to="/" className="text-white font-bold text-lg py-2">
        <h1>MERN Stack CRUD</h1>
      </Link>

      <ul className="flex gap-x-1">
        <li>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to="/">Home</Link></button>
        </li>
        <li>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to="/new">Create a task</Link></button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
