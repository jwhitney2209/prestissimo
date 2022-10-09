import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const menuClick = () => {
  document.activeElement.blur();
};

const Navbar = () => {
  const { user } = useAuthContext();

  const { logout } = useLogout();
  return (
    <>
      <div className="navbar bg-base-100 max-w-[1240px] px-4 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              onClick={menuClick}
            >
              {" "}
              {!user && (
                <>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li tabIndex={0}>
                    <Link to="/pricing" className="justify-between">
                      {" "}
                      Pricing
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                      </svg>
                    </Link>
                    <ul className="p-2 shadow bg-base-100">
                      <li>
                        <Link to="/">Submenu 1</Link>
                      </li>
                      <li>
                        <Link to="/">Submenu 2</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                </>
              )}
              {user && (
                <>
                  <li>
                    <Link to="/people">People</Link>
                  </li>
                  <li tabIndex={0}>
                    <Link to="/inventory" className="justify-between">
                      {" "}
                      Inventory
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                      </svg>
                    </Link>
                    <ul className="p-2 shadow bg-base-100">
                      <li>
                        <Link to="/uniforms">Uniforms</Link>
                      </li>
                      <li>
                        <Link to="/assets">Assets</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/library">Music Library</Link>
                  </li>
                  <li>
                    <Link to="/fundraising">Fundraising</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <Link to="/">
            <button className="btn btn-ghost normal-case text-xl">
              Prestissimo
            </button>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0" onClick={menuClick}>
            {!user && (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li tabIndex={0}>
                  <Link to="/pricing">
                    {" "}
                    Pricing
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </Link>

                  <ul className="p-2 shadow bg-base-100">
                    <li>
                      <Link to="/">Submenu 1</Link>
                    </li>
                    <li>
                      <Link to="/">Submenu 2</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </>
            )}
            {user && (
              <>
                <li tabIndex={0}>
                  <Link to="/people">
                    People
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </Link>
                  <ul className="p-2 shadow bg-base-100">
                  <li>
                      <Link to="/students">Students</Link>
                    </li>
                    <li>
                      <Link to="/ensembles">Ensembles</Link>
                    </li>
                  </ul>
                </li>
                <li tabIndex={0}>
                  <Link to="/inventory">
                    {" "}
                    Inventory
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </Link>

                  <ul className="p-2 shadow bg-base-100">
                    <li>
                      <Link to="/uniforms">Uniforms</Link>
                    </li>
                    <li>
                      <Link to="/assets">Assets</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/library">Music Library</Link>
                </li>
                <li>
                  <Link to="/fundraising">Fundraising</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {!user && (
            <>
              <Link to="/login">
                <button className="btn btn-sm md:btn-md btn-primary mx-2">Log In</button>
              </Link>
              <Link to="/signup">
                <button className="btn btn-sm md:btn-md btn-secondary">Sign Up</button>
              </Link>
            </>
          )}
          {user && (
            <>
              <Link to="/dashboard">
                <button className="btn btn-sm md:btn-md btn-primary mx-2">Dashboard</button>
              </Link>
              <Link to="/" onClick={logout}>
                <button className="btn btn-sm md:btn-md btn-secondary">Logout</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
