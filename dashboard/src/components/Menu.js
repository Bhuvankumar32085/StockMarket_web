import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthButton from "./logout";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setisProfileDropdownOpen] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleProtectedClick = (index, path) => {
    if (token) {
      setSelectedMenu(index);
      navigate(path);
    } else {
      navigate("/apps/login");
    }
  };

  const handleProfileClick = () => {
    setisProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="/logo.png" style={{ width: "50px" }} alt="logo" />
      <div className="menus">
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass} onClick={() => setSelectedMenu(0)}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link to="/orders" style={{ textDecoration: "none" }}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass} onClick={() => setSelectedMenu(1)}>
                Orders
              </p>
            </Link>
          </li>
          <li onClick={() => handleProtectedClick(2, "/holdings")}>
            <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
          </li>
          <li onClick={() => handleProtectedClick(3, "/positions")}>
            <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
          </li>
          <li>
            <Link to="/funds" style={{ textDecoration: "none" }}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass} onClick={() => setSelectedMenu(4)}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <AuthButton />
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
        {isProfileDropdownOpen}
      </div>
    </div>
  );
};

export default Menu;
