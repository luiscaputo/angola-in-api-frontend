import { Form, Link, NavLink, Outlet, redirect, useLoaderData } from "react-router-dom";
import './index.css';

export default function Menu() {
  return (
    <>
      <div id="sidebar">
        <div>
          <h1>Angola On <strong> HAND</strong></h1>
        </div>
        <h1>Developed by: <Link to={'https://github.com/luiscaputo'} id="link"><strong> Luís Caputo</strong></Link></h1>
        <nav>
          <ul>
            <li>
              <NavLink
                to={'identification'}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active"
                    : isPending
                      ? "pending"
                      : ""
                }
              >
                Identificação
              </NavLink>
            </li>

            <li>
              <NavLink
                to={'counties'}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active"
                    : isPending
                      ? "pending"
                      : ""
                }
              >
                Províncias
              </NavLink>
            </li>

            <li>
              <NavLink
                to={'validations'}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active"
                    : isPending
                      ? "pending"
                      : ""
                }
              >
                Validações
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}