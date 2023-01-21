import React from "react";
import {
  Typography,
  Alert,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import saveIcon from "../../../public/img/saveIcon.svg"


export function AddUser() {
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
        <div className="flex justify-between">
            <div className="flex-col mb-7">
                <h3 className="text-left text-4xl font-bold text-[#280559]">Add New User</h3>
                <p className="text-[#9898A3] text-lg text-left">add New User</p>
            </div>
            <Button className="bg-[#280559]  rounded-[15px] w-[206px] h-[60px]">
                <div className="flex flex-row justify-center items-center">
                    <img src={saveIcon} alt='...'/>
                    <p className="text-white text-base font-medium px-[11px] normal-case ">Save Changes</p>
                </div>
            </Button>
        </div>
        <Card>
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="m-0 p-4 flex-col w-full justify-between items-center"
        >
            <div className="mb-3 flex w-full px-4 items-center">
                <h3 className="text-left text-2xl font-semibold text-[#333333]">User Details</h3>
            </div>  
            <div className="px-4 flex mb-8">
                <div className="w-[420px] h-[57px]">
                    <p className="mb-4 font-medium text-base">Name</p>
                    <Select label="Select University">
                        <Option>Select University</Option>
                        <Option>Select University</Option>
                        <Option>Select University</Option>
                    </Select>
                </div>
                <div className="w-[420px] h-[57px] pl-3">
                    <p className="mb-4 font-medium text-base">Email Address</p>
                    <Select label="example@email.com">
                        <Option>alex@email.com</Option>
                        <Option>mistro@email.com</Option>
                        <Option>gentle@email.com</Option>
                    </Select>
                </div>
                <div className="w-[420px] h-[57px] pl-3 mb-3">
                    <p className="mb-4 font-medium text-base">Phone</p>
                    <div className="">
                        <Input label="+91" />
                    </div>
                </div>
            </div>
            <div className="px-4 flex mb-16">
                <div className="w-[420px] h-[57px]">
                    <p className="mb-4 font-medium text-base">Role</p>
                    <Select label="Select Role">
                        <Option>Select Role</Option>
                        <Option>Select Role</Option>
                        <Option>Select Role</Option>
                    </Select>
                </div>
                <div className="w-[420px] h-[57px] pl-3 mb-3">
                    <p className="mb-4 font-medium text-base">Position</p>
                    <div className="">
                        <Input label="Position" />
                    </div>
                </div>
                <div className="w-[420px] h-[57px] pl-3 mb-3">
                    <p className="mb-4 font-medium text-base">Number</p>
                    <div className="">
                        <Input label="0123456" />
                    </div>
                </div>
            </div>
            
            <div className="px-4 flex">
                <div className="w-[420px] h-[57px] mb-3">
                    <p className="mb-4 font-medium text-base">Add Field</p>
                    <div className="">
                        <Input disabled label="Click to add more field" className=" outline-none"/>
                    </div>
                </div>
            </div>
        </CardHeader>
        </Card>
        <NavLink to="User">
            <Button className="bg-[#280559] px-4 rounded-[15px] w-[206px] h-[60px]">
                <div className="flex flex-row justify-center items-center">
                    <img src={saveIcon} alt='...'/>
                    <p className="text-white text-base font-medium px-[11px] normal-case ">Save Changes</p>
                </div>
            </Button>
        </NavLink>
    </div>
  );
}

export default AddUser;
