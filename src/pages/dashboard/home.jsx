import React from "react";
import { 
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
  checkbox,
  Button,
  Checkbox
} from "@material-tailwind/react";
import Canvas from "@/widgets/charts/Canvas";
import { PieChart } from 'react-minimal-pie-chart';
import universityCardData from "@/data/university-data";
import programCardData from "@/data/program-data";
import leadsCardData from "@/data/leads-data";
import applicationCardData from "@/data/application-data";
import commissionCardData from "@/data/commission-data";
import GeneralCardData from "@/data/General-data";
import AccountingCardData from "@/data/Accounting-data";
import tableCardData from "@/data/table-data copy";
import { StatisticsChart } from "@/widgets/charts";
import nametableCardData from "@/data/nametable-data";
import HomeApplicationData from "@/data/home-table-props";
import {
  statisticsCardsData,
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
} from "@/data";
import {
  ClockIcon,
  CheckIcon,
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import plus from '../../../public/img/plus.svg'
import { StatisticsCard } from "@/widgets/cards";
import { Horizontal } from "@/widgets/charts/Horizontal-chart";
import { Pie01 } from "@/widgets/charts/pie-chart01";
import { Pie02 } from "@/widgets/charts/pie-chart02";
import { Bar } from "@/widgets/charts/bar-chart";
import { Stackedbar } from "@/widgets/charts/stackedbar-chart";
import GaugeChart from "@/widgets/charts/gauge-chart";
import filterIcon from '../../../public/img/filterIcon.svg';
import down from '../../../public/img/downIcon.svg';
export function Home() {
  return (
    <div className="mt-12 w-full bg-[#E8E9EB] px-14">
      <div className="grid grid-cols-1 my-10">
       <p className=" text-4xl font-semibold text-[#280559]">Dashboard</p>
       <p className=" text-base font text-[#9898A3]">View all status from the dashbaord</p>
      </div>
      <div className="mb-12 grid gap-y-10 gap-x-3 md:grid-cols-2 xl:grid-cols-5">
        {statisticsCardsData.map(({ value, title}) => (
          <StatisticsCard
            value={value}
            title={title}
          />
        ))}
      </div>
      <div className=" mb-5 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        <Pie01/>
        <Bar/>
        <Pie02/>  
        <Canvas/>
      </div>
      
      <div className=" mb-5 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        
        <Horizontal/>
        <Stackedbar/>
      
      
        {nametableCardData.map((items)=>(
          <div className="w-[470px] p-8">
            <div className="flex flex-row justify-between items-center mx-4">
                <p className="w-1/2 text-xl text-black font-medium">{items.subject}</p>
                <Button className=" w-[115px] h-[46px] bg-[#0263FF] rounded-[15px] justify-center p-0" fullWidth>
                  <p className=" text-base text-white normal-case text-center">View All</p>
                </Button>
            </div>
            <div className="flex flex-row justify-between items-center mx-4 my-5">
                <p className="w-[320px] text-base text-[#92929D] font-medium">{items.name}</p>
                <p className="w-[75px] text-base text-[#92929D] normal-case text-center px-4">Action</p>
            </div>
            {items.tablelist.map((item) => (
              <div className="flex flex-row justify-between items-center mx-4 mt-6">
                  <p className="w-[320px] text-lg text-black font-medium">{item.data}</p>
                  <Button className=" w-[78px] h-[28px] bg-[#0263FF] rounded-[15px] justify-center items-center p-0"  fullWidth>
                  <p className="text-base text-white normal-case text-center">view</p>
                  </Button>
              </div>
            ))}
          </div>
        ))}

        <div className="w-[470px] p-8">
          <div className="flex flex-row justify-between items-center mx-4">
              <p className="w-1/2 text-xl text-black font-medium">Application</p>
              <Button className=" w-[115px] h-[46px] bg-[#0263FF] rounded-[15px] p-0" fullWidth>
                <p className=" text-base text-white normal-case text-center">View All</p>
              </Button>
          </div>
          <div className="flex flex-row justify-between items-center mx-4 my-5">
              <p className="w-[220px] text-base text-[#92929D] font-medium">University name</p>
              <p className="w-[75px] text-base text-[#92929D] normal-case text-center ">Status</p>
              <p className="w-[75px] text-base text-[#92929D] normal-case text-center ">Action</p>
          </div>
          {applicationCardData.map((item) => (
            <div className="flex flex-row justify-between items-center mx-4 mt-6">
              <p className="w-[195px] text-lg text-black font-medium mx-2">{item.name}</p>
              <p className={`text-[${item.color}] w-[85px] text-base normal-case text-center mx-2`}>{item.status}</p>
              <Button className=" w-[78px] h-[28px] bg-[#0263FF] rounded-[15px] justify-center items-center p-0"  fullWidth>
                <p className="text-base text-white normal-case text-center">View</p>
              </Button>
            </div>
          ))}
          
          </div>

      </div> 
      <div className="grid grid-cols-1 2xl:grid-cols-2 ">
        {tableCardData.map((data) => (          
        <div className="w-[720px] p-8">
          <div className="flex flex-row justify-between items-center mx-4">
              <p className="w-1/2 text-xl text-black font-medium">{data.subject}</p>
              <Button className=" w-[115px] h-[46px] bg-[#0263FF] rounded-[15px] p-0" fullWidth>
                <p className=" text-base text-white normal-case text-center">View All</p>
              </Button>
          </div>

          <div className="flex flex-row justify-between items-center mx-4 my-5">
              <p className="w-[200px] text-xl text-[#92929D] font-medium">Recipient</p>
              <p className="w-[85px] text-base text-[#92929D] normal-case text-center ">Amount</p>
              <p className="w-[85px] text-base text-[#92929D] normal-case text-center ">Status</p>
              <p className="w-[78px] text-base text-[#92929D] normal-case text-center ">Action</p>
          </div>
          {data.tablelist.map((item) => (
            <div className="flex flex-row justify-between items-center mx-4 mt-8">
              <p className="w-[200px] text-lg text-black font-medium mx-2">{item.name}</p>
              <p className="text-[#333333] w-[85px] text-lg font-bold normal-case text-center mx-2">{item.amount}</p>
              <p className={`text-[${item.color}] w-[85px] text-base normal-case text-center mx-2`}>{item.status}</p>
              <Button className=" w-[78px] h-[28px] bg-[#0263FF] rounded-[15px] justify-center items-center p-0"  fullWidth>
                <p className="text-base text-white normal-case text-center">View</p>
              </Button>
            </div>
          ))}
        </div>
        ))}

      </div>



      <div>
        <div className=" bg-white flex flex-row justify-between items-center p-12 mb-7   rounded-[34px]">
          <div>
            <p className="text-[32px] text-black font-semibold">We Need Additional Information</p>
            <p className=" text-2xl text-black font-normal">Please provide additional documentation to proceed with your application</p>
          </div>
          <Button className="w-[174px] h-[60px] bg-[#280559] rounded-2xl flex flex-row justify-center items-center">
            <img className="w-[20px] m-1" src={plus} alt='...'/>
            <p className="m-1 text-base text-white font-medium normal-case">Upload</p>
          </Button>
        </div>
        <div className=" bg-white p-12 rounded-[34px]">
          <div className=" w-full flex flex-row justify-between py-5 my-3">
            <p className="text-[32px] text-black font-bold">Your Applications</p>
            <Button className="w-[174px] h-[60px] bg-[#280559] rounded-2xl flex flex-row justify-center items-center">
              <img className="w-[20px] m-1" src={plus} alt='...'/>
              <p className="m-1 text-base text-white font-medium normal-case">Upload</p>
            </Button>
          </div>
          <div className="flex flex-row justify-between py-5 my-3">
              <form className="w-full px-4">
                <div className="relative">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    />
                </div>
              </form>
              <div className="flex flex-row gap-4">
                <button className=" shadow-lg w-[135px] h-[57px] rounded-2xl outline-1 outline-[#CBD2DC] flex flex-row justify-center items-center">
                  <img className="w-[20px]" src={filterIcon} alt="..."/>
                  <p className="mx-3 ">Filters</p>
                </button>
                <button className=" shadow-lg w-[135px] h-[57px] rounded-2xl outline-1 outline-[#CBD2DC] flex flex-row justify-center items-center">
                  <img className="w-[20px]" src={down} alt="..."/>
                  <p className="mx-3 ">Export</p>
                </button>
              </div>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                  <tr>
                      <th
                          scope="col"
                          className="w-[50px] py-3 text-lg font-bold text-left text-gray-500  "
                      >
                          
                      </th>
                      <th
                          scope="col"
                          className="w-[200px] py-3 text-lg font-bold text-left text-gray-500  "
                      >
                          Date
                      </th>
                      <th
                          scope="col"
                          className="w-[83px] px-6 py-3 text-lg font-bold text-left text-gray-500  "
                      >
                          Time
                      </th>
                      <th
                          scope="col"
                          className="w-[346px] px-6 py-3 text-lg font-bold text-left text-gray-500  "
                      >
                          Email
                      </th>
                      <th
                          scope="col"
                          className="w-[113px] px-6 py-3 text-lg font-bold text-center text-gray-500  "
                      >
                          Status
                      </th>
                      <th
                          scope="col"
                          className="w-[115px] px-6 py-3 text-lg font-bold text-center text-gray-500  "
                      >
                          action
                      </th>
                      <th
                          scope="col"
                          className="w-[115px] px-6 py-3 text-lg font-bold text-left text-gray-500  "
                      >
                          Option
                      </th>
                  </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                  {HomeApplicationData.map((items) => (
                  <tr>
                      <td className="py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        <div className="flex items-center h-7">
                          <Checkbox/>
                        </div>
                      </td>
                      <td className="py-4 text-lg font-medium text-gray-800 whitespace-nowrap">
                          {items.date}
                      </td>
                      <td className="px-6 py-4 text-lg text-gray-800 whitespace-nowrap">
                          {items.name}
                      </td>
                      <td className="px-6 py-4 text-lg text-gray-800 whitespace-nowrap">
                          {items.Email}
                      </td>
                      <td className={`text-${items.color} px-6 py-4 text-sm font-semibold text-center whitespace-nowrap`}>
                          {items.status}
                      </td>
                      <td className=" textpy-4 text-lg font-medium text-center whitespace-nowrap">
                        <Button variant="outlined" className=" rounded-2xl px-5 py-2"><p className=" text-center justify-center p-0 m-0">view</p></Button>
                      </td>
                      <td className="px-6 py-4 text-lg font-medium text-left whitespace-nowrap">
                          {items.option}
                      </td>
                  </tr>
                  ))}  
                  
              </tbody>
            </table>
        </div>
      </div>

      
  </div>
  );
}

export default Home;
