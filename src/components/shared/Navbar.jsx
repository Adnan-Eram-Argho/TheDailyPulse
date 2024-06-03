import { Link } from "react-router-dom"


function Navbar() {
  return (
    <div className="navbar bg-secondary-content rounded-xl sticky z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to={'local'}>Local</Link></li>
        
        <li><Link to={'world'}>World</Link></li>

        <li>
          <a>others</a>
          <ul className="p-2">
            <li><Link to={"technology"}>Technology</Link></li>
            <li><Link to={"environment"}>Environment</Link></li>
            <li><Link to={"business"}>Business</Link></li>
            
          </ul>
        </li>
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost text-xl">TheDailyPulse</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to={'local'}>Local</Link></li>

    <li><Link to={'world'}>World</Link></li>
    <li><Link to={'health'}>Health</Link></li>
      <li>
        <details>
          <summary>Others</summary>
          <ul className="p-2">
            <li><Link to={"technology"}>Technology</Link></li>
            <li><Link to={"environment"}>Environment</Link></li>
            <li><Link to={"business"}>Business</Link></li>
            
          </ul>
        </details>
        
      </li>
      <li><Link to={'about'}>About us</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-secondary-content">Button</a>
  </div>
</div>
  )
}

export default Navbar
