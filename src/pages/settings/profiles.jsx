import React from "react";
import {
  Typography,
  Alert,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import saveIcon from "../../../public/img/saveIcon.svg"
import { NavLink } from "react-router-dom";
import photo from '../../../public/img/photo.png'

export function Profiles() {
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
        {/* <Card>\
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
                        <div className="absolute top-0 w-[40px] h-1 bg-[#280559] hidden "/>
                        <p className="text-[24px] text-[#92929D] font-semibold">Branch</p>
                    </div>
                </NavLink>
                <NavLink to="Profiles">
                    <div className="flex flex-col items-center">
                        <div className="absolute top-0 w-[90px] h-1 bg-[#280559]   "/>
                        <p className="text-[24px] text-[#280559] font-semibold">Profile</p>
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
                <h3 className="text-left text-4xl font-bold text-[#280559]">Profile</h3>
                <p className="text-[#9898A3] text-lg text-left">Manage Profile</p>
            </div>
            <Button className="bg-[#280559]  rounded-[15px] w-[206px] h-[60px]">
                <div className="flex flex-row justify-center items-center">
                    <img src={saveIcon} alt='...'/>
                    <p className="text-white text-base font-medium px-[11px] normal-case ">Save Changes</p>
                </div>
            </Button>
        </div>
        <Card>
        <CardBody
          color="transparent"
          floated={false}
          shadow={false}
          className="m-0 p-4 flex-col w-full justify-between items-center"
        >
            <div className="flex w-full px-4 items-center mb-3">
                <h3 className="text-left text-2xl font-semibold text-[#333333]">Personal Details</h3>
            </div>  
            <div className="w-[300px] h-[202px] flex px-4 justify-between 0">
                <p className="mb-4 font-medium text-base">Photo</p>
                <div className="w-[150px] h-[150px]">
                    <div className="flex-col justify-center items-center">
                        <img src={photo} alt='Upload Photo'/>
                        <p className="text-center mt-3">Upload Photo</p>
                    </div>
                </div>
                
            </div>
            <div className="px-4 flex mb-8">
                <div className="w-[420px] h-[57px]">
                    <p className="mb-4 font-medium text-base">Full Name</p>
                    <div className="">
                        <Input label="University Name" />
                    </div>
                </div>
                <div className="w-[420px] h-[57px] pl-3 mb-3">
                    <p className="mb-4 font-medium text-base">Passport No</p>
                    <div className="">
                        <Input label="0123 456 789" />
                    </div>
                </div>
                <div className="w-[420px] h-[57px] pl-3">
                    <p className="mb-4 font-medium text-base">Lead Group</p>
                    <Select label="Select Group">
                        <Option>alex@email.com</Option>
                        <Option>mistro@email.com</Option>
                        <Option>gentle@email.com</Option>
                    </Select>
                </div>
            </div>
            <div className="px-4 flex mb-16">
                <div className="w-[420px] h-[57px]">
                    <p className="mb-4 font-medium text-base">Nationality/Country</p>
                    <Select label="Select Country">
                        <Option>Select Country</Option>
                        <Option>Select Country</Option>
                        <Option>Select Country</Option>
                    </Select>
                </div>
                <div className="w-[420px] h-[57px] pl-3 mb-3">
                    <p className="mb-4 font-medium text-base">Phone Number</p>
                    <div className="">
                        <Input label="+91 0123 456 789" />
                    </div>
                </div>
                <div className="w-[420px] h-[57px] pl-3 mb-3">
                    <p className="mb-4 font-medium text-base">Email Address</p>
                    <div className="">
                        <Input label="example@email.com" />
                    </div>
                </div>
            </div>
            
            <div className="px-6 flex ">
                <div className="w-[420px] h-[57px] mb-3 justify-between">
                    <p className="mb-4 font-medium text-base">Add Field</p>
                    <div className="">
                        <Input disabled label="Click to add more field" className=" outline-none"/>
                    </div>
                </div>
            </div>
        </CardBody>
        </Card>
        <Button className="bg-[#280559] px-4 rounded-[15px] w-[206px] h-[60px]">
            <div className="flex flex-row justify-center items-center">
                <img src={saveIcon} alt='...'/>
                <p className="text-white text-base font-medium px-[11px] normal-case ">Save Changes</p>
            </div>
        </Button>
        <Card className="mb-4">
        <CardBody
          color="transparent"
          floated={false}
          shadow={false}
          className="m-0 p-4 flex-col w-full justify-between items-center"
        >
            <div className="flex w-full px-4 items-center mb-3">
                <h3 className="text-left text-2xl font-semibold text-[#333333]">Password</h3>
            </div>  
            <div className="px-6 flex ">
                <div className="w-[420px] h-[57px] mb-6">
                    <div className="">
                        <label for="password" class="block mb-2text-gray-900 mb-4 font-medium text-base dark:text-white">New Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                    </div>
                </div>
                <div className="w-[420px] h-[57px] mb-6">
                    <div className="pl-3">
                        <label for="password" class="block font-medium text-base mb-4 text-gray-900 dark:text-white">Confirm Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                    </div>
                </div>
            </div>
        </CardBody>
        </Card>
    </div>
  );
}

export default Profiles;
