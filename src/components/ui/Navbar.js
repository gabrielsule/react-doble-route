import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand"
                to="/"
            >
                Sci-Fi
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/asimov"
                    >
                        Asimov
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/bradbury"
                    >
                        Bradbury
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/clarke"
                    >
                        Clarke
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/dick"
                    >
                        Dick
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/login"
                    >
                        salir
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
