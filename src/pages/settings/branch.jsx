import React from "react";
import {
  Typography,
  Alert,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import plus from '../../../public/img/plus.svg';
import vector from '../../../public/img/vector.svg';
import Vector from "../../../public/img/Vector.png";
import { 
    Button,
    Menu,
      MenuHandler,
      MenuList,
      MenuItem,
  } from "@material-tailwind/react";
import BranchProps from "@/data/branch-props";




export function Branch() {
    const title=[
        {name:'User'},
        {name:'Branch'},
        {name:'Profile'},
        {name:'Status'},
        {name:'Properties'},
        {name:'Activity Log'}

    ]

  return (
    <div className="mt-12 w-full bg-[#E8E9EB] px-14 my-20 flex flex-col gap-8">
        <div className="flex-col mb-7">
            <h3 className="text-left text-4xl font-bold text-[#280559]">Settings</h3>
            <p className="text-[#9898A3] text-lg text-left">View all settings</p>
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
                    <NavLink to='/addbranch' className= 'text-left text-2xl text-[#92929D] ml-8 hover:border-t-4 border-[#280559]' color="blue-gray">
                        {item.name}
                    </NavLink> 
                ))}
          </div>
        </CardHeader>
        </Card> */}

        <div className="relative bg-white flex flex-row justify-between items-center p-12 mb-7   rounded-[34px]">
            <div className="flex flex-row gap-6">
                <NavLink to="User">
                    <div className="flex flex-col items-center">
                        <div className="absolute top-0 w-[50px] h-1 bg-[#280559] hidden "/>
                        <p className="text-[24px] text-[#92929D] font-semibold">User</p>
                    </div>
                </NavLink>
                <NavLink to="Branch">
                    <div className="flex flex-col items-center border-[#280559] ">
                        <div className="absolute top-0 w-[80px] h-1 bg-[#280559]  "/>
                        <p className="text-[24px] text-[#280559] font-semibold">Branch</p>
                    </div>
                </NavLink>
                <NavLink to="Profiles">
                    <div className="flex flex-col items-center">
                        <div className="absolute top-0 w-[190px] h-1 bg-[#280559] hidden  "/>
                        <p className="text-[24px] text-[#92929D] font-semibold">Profile</p>
                    </div>
                </NavLink>
                <NavLink to="StatusManagement">
                    <div className="flex flex-col items-center">
                        <div className="absolute top-0 w-[112px] h-1 bg-[#280559] hidden  "/>
                        <p className="text-[24px] text-[#92929D] font-semibold ">Status</p>
                    </div>
                </NavLink>
                <NavLink to="Properties">
                    <div className="flex flex-col items-center">
                        <div className="absolute top-0 w-[237px] h-1 bg-[#280559] hidden"/>
                        <p className="text-[24px] text-[#92929D] font-semibold">Properties</p>
                    </div>
                </NavLink>
                <NavLink to="Settings">
                    <div className="flex flex-col items-center">
                        <div className="absolute top-0 w-[237px] h-1 bg-[#280559] hidden"/>
                        <p className="text-[24px] text-[#92929D] font-semibold">Activity Log</p>
                    </div>
                </NavLink>
            </div>
        </div>


        <div className="flex justify-between">
            <div className="flex-col mb-7">
                <h3 className="text-left text-4xl font-bold text-[#280559]">Branch</h3>
                <p className="text-[#9898A3] text-lg text-left">Manage Branch</p>
            </div>
            <NavLink to='AddBranch'> 
                <Button className="bg-[#280559]  rounded-[15px] w-[206px] h-[60px]">
                    <div className="flex flex-row justify-center items-center">
                        <img src={plus} alt='...'/>
                        <p className="text-white text-base font-medium normal-case">Add New Branch</p>
                    </div>
                </Button>
            </NavLink>
        </div>
        <Card>
            <CardBody>
            <div className=" pl-12 rounded-lg flex w-full justify-between">
                <p className="text-[#333333] text-[24px] font-semibold text-center">List of Branch</p>
            </div>
            </CardBody>
            <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border-none rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        className="w-[30px] items-center flex justify-start px-6 py-3"
                                    >
                                        <Checkbox />
                                    </th>
                                    <th
                                        className="w-[83px] py-3 text-base font-bold text-left text-gray-500"
                                    >
                                        Branch Name
                                    </th>
                                    <th
                                        className="w-[220px] px-6 py-3 text-base font-bold text-left text-gray-500"
                                    >
                                        Email
                                    </th>
                                    <th
                                        className="w-[115px] px-6 py-3 text-base font-bold text-left text-gray-500"
                                    >
                                        Branch manager
                                    </th>
                                    <th
                                        className="w-[113px] px-6 py-3 text-base font-bold text-left text-gray-500"
                                    >
                                        Country
                                    </th>
                                    <th
                                        className="w-[100px] px-6 py-3 text-base font-bold text-left text-gray-500"
                                    >
                                        Action
                                    </th>
                                    <th
                                        className="w-[100px] px-6 py-3 text-base font-bold text-left text-gray-500"
                                    >
                                        Option
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {BranchProps.map((items) => (
                                <tr>
                                    <td
                                        className="w-[30px] items-center justify-start px-6 py-3"
                                    >
                                        <Checkbox />
                                    </td>
                                    <td className="py-4 text-lg font-normal text-gray-800 whitespace-nowrap">
                                        {items.branchname}
                                    </td>
                                    <td className="px-6 py-4 text-lg font-normal text-gray-800 whitespace-nowrap">
                                        {items.email}
                                    </td>
                                    <td className="px-6 py-4 text-lg font-normal text-left whitespace-nowrap">
                                        {items.branchmanager}
                                    </td>
                                    <td className="px-6 py-4 text-lg font-normal text-left whitespace-nowrap">
                                        {items.country}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <Button variant='outlined' className=' font-medium rounded-full text-sm outline-indigo-800'>View</Button>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <Button variant="text" className="">⋮</Button>
                                    </td>
                                </tr>
                                ))}  
                                
                            </tbody>
                        </table>
                        <div className="flex w-[95%] justify-between ml-16 items-center">
                            <div className="w-[50%] whitespace-nowrap items-center pl-2">
                                <p className=" text-base text-[#BEBFC3]" ><span className="text-[#280559]">1</span> - 5 of 56</p>
                            </div>
                            <div className="flex flex-row items-center justify-center">
                                <p className="text-base text-[#92929D]">The page you’re on</p>
                                <div className=" w-[77px]">
                                    <Menu>
                                        <MenuHandler>
                                        <button className=" shadow-lg w-[77px] h-[40px] rounded-2xl outline-1 outline-[#CBD2DC] flex flex-row justify-center items-center">
                                            <p className="mx-3">1</p>
                                        </button>
                                        </MenuHandler>
                                        <MenuList>
                                            <MenuItem>1</MenuItem>
                                            <MenuItem>2</MenuItem>
                                            <MenuItem>3</MenuItem>
                                            <MenuItem>4</MenuItem>
                                            <MenuItem>5</MenuItem>
                                        </MenuList>
                                    </Menu>
                                </div>
                                <button className="w-10 h-10 rounded-xl shadow-lg outline-2 outline-black flex justify-center items-center"><img src={vector} alt="..."/></button>
                                <button className="w-10 h-10 rounded-xl shadow-lg outline-2 outline-black flex justify-center items-center"><img className=" rotate-180" src={vector} alt="..."/></button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </Card>
    </div>
  );
}

export default Branch;
