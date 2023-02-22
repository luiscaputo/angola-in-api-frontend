import { Form, Link, NavLink, Outlet, redirect, useLoaderData } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <div id="sidebar">
        <h1>Angola On <strong> HAND</strong></h1>
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