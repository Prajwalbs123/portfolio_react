import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/' className="h-10 w-28 rounded-lg flex shadow-md items-center font-bold bg-white justify-center">
        <p className=" text-gray-500">Portfolio.</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-gray-500" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-gray-500" : "text-black"}>
          Projects
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? "text-gray-500" : "text-black"}>
          Contact-Me
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
