import React from "react";
import {
  Typography,
  Alert,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Input } from "@material-tailwind/react";
import search from '../../../public/img/search.png';
import { Checkbox } from "@material-tailwind/react";
import settingData from '@/data/settings-table-props';
import { NavLink } from "react-router-dom";
import plus from '../../../public/img/plus.svg';
import vector from '../../../public/img/vector.svg';
import Vector from "../../../public/img/Vector.png";
import print from "../../../public/img/print.png";
import { 
    Button,
    Menu,
      MenuHandler,
      MenuList,
      MenuItem,
  } from "@material-tailwind/react";
import Currency  from "@/data/assets-props";



export function ReportsCost() {
    const title=[
        {
            name:'Balance Sheet',
            id:'balance'
        },
        {
            name:'Profit Loss',
            id:'profit'
        },
        {
            name:'Income Statement ',
            id:'income'
        },
        {
            name:'Expanses',
            id:'expanses'
        },
        {
            name:'Cost Of Sale',
            id:'cost'
        }
    ];
    const cost = [
        {
            name:'Advertising',
            currency:'USD',
            amount:'$120.00'
        },
        {
            name:'Delivery/Freight Expense',
            currency:'USD',
            amount:'$120.00'
        },
        {
            name:'Depriciation',
            currency:'USD',
            amount:'$120.00'
        },
        {
            name:'Insurance',
            currency:'USD',
            amount:'$120.00'
        },
        {
            name:'Office Supplies',
            currency:'USD',
            amount:'$120.00'
        },
        {
            name:'Rent/Lease',
            currency:'USD',
            amount:'$120.00'
        },
        {
            name:'Maintenance and Repairs',
            currency:'USD',
            amount:'$120.00'
        },
        {
            name:'Wages',
            currency:'USD',
            amount:'$120.00'
        },
        {
            name:'Utilities/Telephone Expenses',
            currency:'USD',
            amount:'$120.00'
        },
        {
            name:'Other Expenses',
            currency:'USD',
            amount:'$120.00'
        }
    ]

  return (
    <div className=" mt-12 w-full bg-[#E8E9EB] px-14 my-20 flex flex-col gap-8">
        <div className="flex-col mb-7">
            <h3 className="text-left text-4xl font-bold text-[#280559]">Reports</h3>
            <p className="text-[#9898A3] text-lg text-left">View Reports</p>
        </div>
        {/* <Card>
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="m-0 p-4 flex w-full"
        >
            <div className="w-full flex">
                {title.map((item) => (
                    <NavLink to='/statusmanagement' className='text-left text-2xl text-[#92929D] ml-8 hover:border-t-4 border-[#280559]' color="blue-gray">
                        {item.name}
                    </NavLink> 
                ))}
          </div>
        </CardHeader>
        </Card> */}

        <div className="relative bg-white flex flex-row justify-between items-center p-12 mb-7   rounded-[34px]">
            <div className="flex flex-row gap-6">
                <NavLink to="Reports">
                    <div className="flex flex-col items-center">
                        <div className="absolute top-0 w-[150px] h-1 bg-[#280559] hidden "/>
                        <p className="text-[24px] text-[#92929D] font-semibold">Balance Sheet</p>
                    </div>
                </NavLink>
                <NavLink to="profit">
                    <div className="flex flex-col items-center border-[#280559] ">
                        <div className="absolute top-0 w-[120px] h-1 bg-[#280559] hidden "/>
                        <p className="text-[24px] text-[#92929D] font-semibold">Profit Loss</p>
                    </div>
                </NavLink>
                <NavLink to="income">
                    <div className="flex flex-col items-center">
                        <div className="absolute top-0 w-[190px] h-1 bg-[#280559] hidden "/>
                        <p className="text-[24px] text-[#92929D] font-semibold">Income Statement</p>
                    </div>
                </NavLink>
                <NavLink to="expenses">
                    <div className="flex flex-col items-center">
                        <div className="absolute top-0 w-[112px] h-1 bg-[#280559] hidden "/>
                        <p className="text-[24px] text-[#92929D] font-semibold ">Expanses</p>
                    </div>
                </NavLink>
                <NavLink to="reportsCost">
                    <div className="flex flex-col items-center">
                        <div className="absolute top-0 w-[137px] h-1 bg-[#280559] "/>
                        <p className="text-[24px] text-[#280559] font-semibold">Cost Of Sale</p>
                    </div>
                </NavLink>
            </div>
        </div>


        <Card>
            <CardBody>
            <div className="w-full flex max-md:flex-col">
                    <Typography href='/#' className= 'mb-[54px] w-full flex justify-between space-x-3 text-[#92929D] ml-8 ' variant="h5" color="blue-gray">
                        <p className="text-[#280559] text-[36px] text-center">Cost Of Sale</p> 
                    </Typography>
            </div>
            <div className=" pl-12 rounded-lg flex w-full justify-between">
                {/* <Input size="lg" className="w-full" htmlFor="hs-table-search" label="🔍 Search user"/> */}
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
                            className="w-[772px] h-[58px] py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                        />
                    </div>
                </form>
                <Button variant="outlined" className="text-base focus:ring-2 ring-offset-current outline-white flex justify-center items-center ml-2 w-[220px] h-[58px]">
                    <span className=" text-[#BEBFC3] px-2">From Date</span>
                </Button>
                <Button variant="outlined" className="text-base focus:ring-2 ring-offset-current outline-white flex justify-center items-center ml-2 w-[220px] h-[58px]">
                    <span className=" text-[#BEBFC3] px-2">To Date</span>
                </Button>
                <Button variant="outlined" className=" focus:ring-2 ring-offset-current outline-white flex justify-center items-center ml-2 w-[220px] h-[58px]">
                    <img className=" justify-between items-start" src={Vector} alt='Vector'/> 
                    <span className="ml-1 text-[#280559] text-base px-2">Apply</span>
                </Button>
                <Button variant="outlined" className=" focus:ring-2 ring-offset-current outline-white flex justify-center items-center ml-2 w-[220px] h-[58px]">
                    <img className=" justify-between items-start" src={print} alt='Print'/> 
                    <span className="ml-1 text-[#280559] text-base px-2">Print</span>
                </Button>
            </div>
            </CardBody>
        </Card>
        <Card>
            <CardBody>
            <div className="mb-3 mt-3 flex w-full px-4 items-center">
                <h3 className="text-left text-2xl font-semibold text-[#333333]">Cost Of Sale</h3>
            </div>  
            <div className="flex flex-col justify-between">
                <div className="overflow-x-auto ">
                    <div className="p-1.5 w-full inline-block align-middle">
                        <div className="overflow-hidden border-none rounded-lg">
                            <table className="w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50 w-full">
                                    <tr className=" justify-between">
                                        
                                        <th
                                            className="w-full py-3 text-base font-bold text-left text-gray-500"
                                        >
                                            Name
                                        </th>
                                        <th
                                            className=" px-6 py-3 text-base font-bold text-left text-gray-500"
                                        >
                                            Currency
                                        </th>
                                        <th
                                            className=" px-6 py-3 text-base font-bold text-left text-gray-500"
                                        >
                                            Amount
                                        </th>
                                        
                                    </tr>
                                </thead>    
                                <tbody className="divide-y divide-gray-200">
                                    {Currency.map((items) => (
                                    <tr>
                                        <td className="px-6 py-4 text-lg font-normal text-gray-800 whitespace-nowrap">
                                            {items.name}
                                        </td>
                                        <td className="px-6 py-4 text-lg font-normal text-gray-800 whitespace-nowrap">
                                            {items.currency}
                                        </td>
                                        <td className="px-6 py-4 text-lg font-normal text-gray-800 whitespace-nowrap">
                                            {items.amount}
                                        </td>
                                    </tr>
                                    ))}  
                                <div className="mb-3 mt-3 flex w-full justify-between items-center">
                                    <h3 className=" text-xl font-semibold text-[#333333]">Total Expenses</h3>
                                    <h3 className=" text-xl font-semibold text-[#333333]">$1,101.00</h3>
                                </div> 
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            </CardBody>
           
        </Card>
        <Card>
            <CardBody>
            <div className="mb-3 mt-3 flex w-full px-4 items-center">
                <h3 className="text-left text-2xl font-semibold text-[#333333]">Total Cost Of Sale</h3>
            </div> 
                <div className="mb-3 px-4 mt-3 flex w-full justify-between items-center">
                    <h3 className=" text-xl font-semibold text-[#333333]">Total Cost Of Sale</h3>
                    <h3 className=" text-xl font-semibold text-[#333333]">$1,101.00</h3>
                </div> 
            </CardBody>
        </Card>
    </div>
  );
}

export default ReportsCost;
