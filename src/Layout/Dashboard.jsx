import { NavLink, Outlet } from "react-router-dom";
import {
  FaCartShopping,
  FaWallet,
  FaCalendarDays,
  FaHouse,
  FaBars,
  FaBagShopping,
  FaEnvelope,
} from "react-icons/fa6";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ms-10 ">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu p-4 w-80 bg-[#D1A054]">
          <h1 className="text-3xl font-semibold">BISTRO BOSS</h1>
          <h5 className="text-sm font-semibold">Restaurant</h5>
          <li>
            <NavLink to="/">
              <FaHouse /> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendarDays /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">
              <FaWallet /> Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myCart">
              <FaCartShopping /> My Cart
            </NavLink>
          </li>

          <div className="divider"></div>

          <li>
            <NavLink to="/">
              <FaHouse /> HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaBars /> MENU
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaBagShopping /> SHOP
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaEnvelope /> CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
