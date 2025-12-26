import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Cart3, List } from "react-bootstrap-icons";
import "./NavBar.css";

export default function NavBar() {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top shadow-sm">
      <div className="container">
        <NavLink
          to="/"
          className="Title text-decoration-none fw-bold fs-2"
          style={{ color: "green"}}
        >
          Fayrouz
        </NavLink>

        <div className="d-flex align-items-center gap-2 d-lg-none">
          <Link
            to="/cart"
            className="position-relative text-decoration-none"
          >
            <Cart3 className="cart-icon" />
            {totalItems > 0 && (
              <span className="cart-badge badge rounded-pill bg-danger">
                {totalItems}
              </span>
            )}
          </Link>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <List size={28} color="green" />
          </button>
        </div>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item ms-lg-4 fs-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-bold" : ""}`
                }
              >
                الرئيسية
              </NavLink>
            </li>
            <li className="nav-item ms-lg-4 fs-4">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-bold" : ""}`
                }
              >
                المنتجات
              </NavLink>
            </li>
            <li className="nav-item ms-lg-4 fs-4">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-bold" : ""}`
                }
              >
                تواصل
              </NavLink>
            </li>
          </ul>
        </div>

        <Link
          to="/cart"
          className="position-relative text-decoration-none me-5 d-none d-lg-block"
        >
          <Cart3 className="cart-icon" />
          {totalItems > 0 && (
            <span className="cart-badge badge rounded-pill bg-danger">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
