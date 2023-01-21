import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import menuIcon from '../../../public/img/menuIcon.svg';
import {
  Avatar,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { useMaterialTailwindController, setOpenSidenav } from "@/context";

export function Sidenav({ brandImg, brandName, routes }) {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavColor, sidenavType, openSidenav } = controller;
  const sidenavTypes = {
    dark: "bg-blue-gray-800",
    white: "bg-blue-gray-800",
    transparent: "bg-transparent",
  };

  return (
    <aside
      className='bg-[#280559] fixed inset-0 z-50 my-4 ml-4 h-full w-[350px] rounded-xl transition-transform duration-300 xl:translate-x-0 lg-max:w-[100px]'
    >
       {/* className={`${sidenavTypes[sidenavType]} ${
        openSidenav ? "translate-x-0" : "-translate-x-80"
      } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-[350px] rounded-xl transition-transform duration-300 xl:translate-x-0`}
    >  */}
      <div
        className="mb-7"  >
        <Link to="/dashboard/dashboard" className="flex items-center justify-center py-6">
          <img src={menuIcon} className=' w-[27px] h-[18px] mx-5' />
          <img src={brandImg} className=' w-[219px] h-[44px] lg-max:hidden' />
          <Typography
            variant="h6"
            color={sidenavType === "dark" ? "white" : "blue-gray"}
          >
          </Typography>
        </Link>
           <p className=" text-white mx-12 lg-max:hidden ">{brandName}</p> 
      </div>
      <div className="px-3 mx-3 lg-max:mx-0">
        {routes.map(({layout, title, pages }, key) => (
          <ul key={key} className="mb-4 flex flex-col gap-1 items-center">
            {title && (
              <li className="mx-3.5 mt-4 mb-2">
                <Typography
                  variant="small"
                  color={sidenavType === "dark" ? "white" : "blue-gray"}
                  className="font-black uppercase opacity-75"
                >
                  {title}
                </Typography>
              </li>
            )}
            {pages.map(({ icon1,icon2, name, path }) => (
              <li className="w-full" key={name}>
                <NavLink to={`/${layout}${path}`}>
                  {({ isActive }) => (
                    <div className="flex flex-row items-center">
                      <div className={`${isActive ? "":"hidden"} absolute bg-white rounded-sm w-1 h-8 left-0`}/>
                      <div className={`bg-${isActive ? "white":""} w-full flex items-center rounded-2xl py-5 px-7 capitalize lg-max:items-center `} >
                        {isActive ? icon2:icon1}
                        <div className={`text-${isActive ? "[#280559]":"white"} flex font-medium text-base capitalize mx-4 lg-max:hidden`}>
                          {name}
                        </div>
                      </div>
                    </div>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </aside>
  );
}

Sidenav.defaultProps = {
  brandImg: "/img/logo.svg",
  brandName: "menu",
};

Sidenav.propTypes = {
  brandImg: PropTypes.string,
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

export default Sidenav;
