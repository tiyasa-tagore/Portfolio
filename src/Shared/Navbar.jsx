import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-blue-950">
  <div className="navbar-start">
    <div className="dropdown ">
      <label tabIndex={0} className="btn btn-ghost btn-circle text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a><Link to="/">Home</Link></a></li>
        <li><a><Link to='/resume'>Resume</Link></a></li>
        <li><a><Link to='/about'>About</Link></a></li>
        <li><a><Link to='/projects'>Projects</Link></a></li>
        <li><a><Link to='/contact'>Contact </Link></a></li>
      </ul>
    </div>
  </div>
 
  <div className="navbar-end text-right text-white space-x-12 mx-20">
    <button className="btn btn-ghost btn-circle text-l">
       <Link to='/'>Home</Link>
    </button>
    <button className="btn btn-ghost btn-circle text-l">
       <Link to='/resume'>Resume</Link>
    </button>
    <button className="btn btn-ghost btn-circle text-l">
       <Link to='/projects'>Projects</Link>
    </button>
   
    <button className="btn btn-ghost btn-circle text-l">
       <Link to='/contact'>Contact </Link>
    </button>
    <button className="btn btn-ghost btn-circle text-l">
       <Link to='/about'>About</Link>
    </button>
    
  </div>
</div>
        </div>
    );
};

export default Navbar;