import Accounting1 from '../public/img/sidebar/Accounting1.svg';
import Accounting2 from '../public/img/sidebar/Accounting2.svg';
import application1 from '../public/img/sidebar/application1.svg';
import application2 from '../public/img/sidebar/application2.svg';
import currency1 from '../public/img/sidebar/currency1.svg';
import currency2 from '../public/img/sidebar/currency2.svg';
import dashboard1 from '../public/img/sidebar/dashboard1.svg';
import dashboard2 from '../public/img/sidebar/dashboard2.svg';
import invoice1 from '../public/img/sidebar/invoice1.svg';
import invoice2 from '../public/img/sidebar/invoice2.svg';
import Leads1 from '../public/img/sidebar/Leads1.svg';
import Leads2 from '../public/img/sidebar/Leads2.svg';
import report1 from '../public/img/sidebar/report1.svg';
import report2 from '../public/img/sidebar/report2.svg';
import setting1 from '../public/img/sidebar/setting1.svg';
import setting2 from '../public/img/sidebar/setting2.svg';
import system1 from '../public/img/sidebar/system1.svg';
import system2 from '../public/img/sidebar/system2.svg';
import University1 from '../public/img/sidebar/University1.svg';
import University2 from '../public/img/sidebar/University2.svg';
import { Home, Tables, Notifications } from "@/pages/dashboard";
import Universitymodule from './pages/universitymodule/Universitymodule';
import Leadsmodule from './pages/leads/Leadsmodule';
import ApplicationModule from './pages/application/applicationModule';
import InvoiceManagement from './pages/InvoiceManagement/InvoiceManagement';
import AccountingSystem from './pages/Accounting/AccountingSystem';
import ReportsManagement from './pages/reports/reportsManagement';
import SettingsManagement from './pages/settings/SettingsManagement';
import CurrencyManagement from './pages/currency/CurrencyManagement';
import System from './pages/systembackup/system';
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon1: <img src={dashboard1} />,
        icon2: <img src={dashboard2} />,
        name: "dashboard",
        path: "/dashboard",
        element: <Home />,
      },
      {
        icon1: <img src={University1}  />,
        icon2: <img src={University2}  />,
        name: "University module",
        path: "/university_module/*",
        element: <Universitymodule />,
      },
      {
        icon1: <img src={Leads1} />,
        icon2: <img src={Leads2} />,
        name: "Leads Modules",
        path: "/Leadsmodule/*",
        element: <Leadsmodule />,
      },
      {
        icon1: <img src={application1} />,
        icon2: <img src={application2} />,
        name: "Application Management",
        path: "/ApplicationModule/*",
        element: <ApplicationModule />,
      },
      {
        icon1: <img src={invoice1} />,
        icon2: <img src={invoice2}  />,
        name: "Invoice Management",
        path: "/InvoiceManagement/*",
        element: <InvoiceManagement />,
      },
      {
        icon1: <img src={Accounting1} />,
        icon2: <img src={Accounting2}  />,
        name: "Accounting System",
        path: "/Accounting/*",
        element: <AccountingSystem />,
      },
      {
        icon1: <img src={report1}  />,
        icon2: <img src={report2}  />,
        name: "report",
        path: "/reportsManagement/*",
        element: <ReportsManagement />,
      },
      {
        icon1: <img src={setting1}  />,
        icon2: <img src={setting2}  />,
        name: "settingsManagement",
        path: "/settingsManagement/*",
        element: <SettingsManagement />,
      },
      {
        icon1: <img src={currency1}  />,
        icon2: <img src={currency2} />,
        name: "currency",
        path: "/CurrencyManagement/*",
        element: <CurrencyManagement />,
      },
      {
        icon1: <img src={system1} />,
        icon2: <img src={system2}  />,
        name: "system",
        path: "/system/*",
        element: <System />,
      }
    ],
  },
  // {
  //   title: "auth pages",
  //   layout: "auth",
  //   pages: [
  //     {
  //       icon: <ArrowRightOnRectangleIcon {...icon} />,
  //       name: "sign in",
  //       path: "/sign-in",
  //       element: <SignIn />,
  //     },
  //     {
  //       icon: <UserPlusIcon {...icon} />,
  //       name: "sign up",
  //       path: "/sign-up",
  //       element: <SignUp />,
  //     },
  //   ],
  // },
];

export default routes;
