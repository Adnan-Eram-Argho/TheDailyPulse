import { useSignOut } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../firebase/firebase.config";

function DashboardLayouts() {
  const [signOut] = useSignOut(auth);

    const handleSignOut =async () => {
        const success = await signOut();
        if (success) {
          alert('You are sign out');
        }
      }
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex flex-col justify-between h-full">
          <ul className="menu p-4 w-80 bg-secondary-content text-base-content">
            {/* Sidebar content here */}
            <div>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"profile"}>Profile</Link>
              </li>
              <li>
                <Link to={"/dashboard"}>Overview</Link>
              </li>
              <li>
                <Link to={"all-news"}>All News</Link>
              </li>
              <li>
                <Link to={"add-news"}>Add News</Link>
              </li>
            </div>
          </ul>
          <div className="p-4">
            <button className="w-full btn btn-neutral" onClick={handleSignOut}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayouts;
