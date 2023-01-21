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
import saveIcon from "../../../public/img/saveIcon.svg"
import TitleData from "@/data/props";
// import { Status } from "@/data";



export function Properties() {
    const title=[
        {name:'User'},
        {name:'Branch'},
        {name:'Profile'},
        {name:'Status'},
        {name:'Properties'},
        {name:'Activity Log'}

    ];
    


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
                    <div className="flex flex-col items-center border-[#280559]  ">
                        <div className="absolute top-0 w-[120px] h-1 bg-[#280559] hidden "/>
                        <p className="text-[24px] text-[#92929D] font-semibold">Branch</p>
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
                        <div className="absolute top-0 w-[110px] h-1 bg-[#280559] "/>
                        <p className="text-[24px] text-[#280559] font-semibold">Properties</p>
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
                <h3 className="text-left text-4xl font-bold text-[#280559]">Properties Management</h3>
                <p className="text-[#9898A3] text-lg text-left">Status Management</p>
            </div>
            <Button className="bg-[#280559] w-[206px] h-[60px] rounded-[15px]">
                <div className="flex flex-row justify-center items-center">
                    <img src={saveIcon} alt='...'/>
                    <p className="text-white text-base font-medium px-[11px] normal-case ">Save Changes</p>
                </div>
            </Button>
        </div>
        <div className="mb-4">
        {TitleData.map((items) => (
            <Card className="mb-4">
            <CardBody className="mb-4" >
                <div className="w-full flex max-md:flex-col ">
                    <Typography href='/#' className= 'mb-[54px] w-full flex justify-between space-x-3 text-[#92929D] ml-8 ' variant="h5" color="blue-gray">
                        <p className="text-[#333333] text-[24px] font-semibold text-center">
                            {items.tname}
                            </p> 
                        <NavLink to='/create'>   
                            <Button className="w-[206px] h-[60px] last:flex text-center text-flex justify-center rounded-[15px] text-white p-3 items-center bg-[#280559]">
                                <img src={plus} alt='Add'/>
                                <p className="ml-1 text-center">Add New Status</p>
                            </Button> 
                        </NavLink> 
                    </Typography>
                </div>
                <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="p-1.5 w-full inline-block align-middle">
                        <div className="overflow-hidden border-none rounded-lg">
                            <table className="w-[50%] divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            className="w-[83px] px-6 py-3 text-base font-bold text-left text-gray-500"
                                        >
                                            Status Name
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
                                    {items.statusname.map((item) => (
                                    <tr>
                                        <td className="px-6 py-4 text-lg font-normal text-gray-800 whitespace-nowrap">
                                            
                                            {item.sname}
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
                        </div>
                    </div>
                </div>
                </div>
            </CardBody>
        </Card>
        ))}
        </div>
    </div>
  );
}

export default Properties;
                                      