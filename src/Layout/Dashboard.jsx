import { NavLink, Outlet } from "react-router-dom";
import {
  FaCartShopping,
  FaWallet,
  FaHouse,
  FaBars,
  FaBagShopping,
  FaUtensils,
  FaUsers,
  FaBarsStaggered,
} from "react-icons/fa6";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  // TODO: load da from the server dynamic isAdmin on data
  const [isAdmin] = useAdmin();
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
        <ul className="menu p-4 w-72 bg-[#D1A054]">
          <h1 className="text-3xl font-semibold mt-6">BISTRO BOSS</h1>
          <h5 className="text-md font-semibold ms-1 mb-6 tracking-[.75em]">Restaurant</h5>
          {isAdmin ? 
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHouse /> ADMIN HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItem">
                  <FaUtensils /> ADD ITEMS
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaBarsStaggered /> MANAGE ITEMS
                </NavLink>
              </li>
              {/* TODO: <li>
                <NavLink to="/">
                  <FaWallet /> MANAGE BOOKINGS (Not Implemented)
                </NavLink>
              </li> */}
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUsers /> All USERS
                </NavLink>
              </li>
              
            </>
           : 
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHouse /> User Home
                </NavLink>
              </li>
              {/* TODO <li>
                <NavLink to="/">
                  <FaCalendarDays /> Reservation (Not Implemented)
                </NavLink>
              </li> */}
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaWallet /> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myCart">
                  <FaCartShopping /> My Cart
                  <div className="badge badge-neutral">
                    +{cart?.length || 0}
                  </div>
                </NavLink>
              </li>
              
            </>
          }
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
            <NavLink to="/order/salad">
              <FaBagShopping /> Order Food
            </NavLink>
          </li>
          {/* TODO: <li>
            <NavLink to="/">
              <FaEnvelope /> CONTACT (Not Implemented)
            </NavLink>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
