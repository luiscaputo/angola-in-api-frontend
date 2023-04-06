import { Form, Link, NavLink, Outlet, redirect, useLoaderData } from "react-router-dom";
import './index.css';
import Home from "../../pages/Home/Index";

export default function Menu() {
  return (
    <>

      <div id="sidebar">
        <div>
          <Link to={'/'} className="__header_link">
            <h1>Angola In <strong> API</strong></h1>
          </Link>
        </div>
        <h1>Developed by: <Link to={'https://github.com/luiscaputo'} id="link"><strong> Luís Caputo</strong></Link> &copy; {new Date().getFullYear()}</h1>
        <nav>
          <ul>
            <li>
              <NavLink
                to={'https://o-me-api.onrender.com/v1/api-docs/'}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active"
                    : isPending
                      ? "pending"
                      : ""
                }
              >
                Documentação
              </NavLink>
            </li>

            {/* <li>
              <NavLink
                to={'repositories'}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active"
                    : isPending
                      ? "pending"
                      : ""
                }
              >
                Repositórios
              </NavLink>
            </li> */}

            <li>
              <NavLink
                to={'use-terms'}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active"
                    : isPending
                      ? "pending"
                      : ""
                }
              >
                Termos de Uso
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Home />
        <Outlet />
      </div>
    </>
  );
}