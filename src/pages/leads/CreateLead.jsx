import React from "react";
import { Link, NavLink } from "react-router-dom";
import { 
    Select,
    Option,
    Button,
    Input,
} from "@material-tailwind/react";  
import universityLogo from "../../../public/img/universityLogo.svg"
import saveIcon from "../../../public/img/saveIcon.svg"

export function CreateLead() {
   
    return (
        <div className="mt-12 w-full bg-[#E8E9EB] px-14">
            <div className="grid grid-cols-1 my-10">
                <p className=" text-4xl font-semibold text-[#280559]">Create Lead</p>
                <p className=" text-base font text-[#9898A3]">Create or edit lead</p>
            </div>
            <div className="bg-white rounded-[34px] p-[39px]">
                <p className="text-[#333333] text-2xl font-semibold my-8">University Details</p>
                <div>
                    <div className=" flex flex-row gap-[90px]  ">
                        <p className="text-[#333333] text-base font-semibold">Photo</p>
                        <div className="flex flex-col justify-center items-center">
                            <img className="outline outline-1 outline-[#CBD2DC] rounded-2xl mb-3"  src={universityLogo} alt='...'/>
                            <button className="w-[150px] ">
                                <p className="text-sm outline outline-1 outline-[#CBD2DC] rounded-2xl px-[35px] py-3">Upload Logo</p>
                            </button>
                        </div>
                        <div>
                            <p className=" text-base font-semibold mb-4">Generated ID</p>
                            <Input  className="h-[57px]" label="Generated ID"></Input>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-[30px]">
                    <div>
                        <p className=" text-base font-semibold my-4">University Name</p>
                        <Input className="h-[57px]" label="University Name"></Input>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">University Name</p>
                        <Input className="h-[57px]" label="University Name"></Input>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">University Type</p>
                            <Select  className="h-[57px]" label="University Type">
                                <Option>University</Option>
                                <Option>University</Option>
                                <Option>University</Option>
                                <Option>University</Option>
                                <Option>University</Option>
                            </Select>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">University Type</p>
                            <Select  className="h-[57px]" label="University Type">
                                <Option>University</Option>
                                <Option>University</Option>
                                <Option>University</Option>
                                <Option>University</Option>
                                <Option>University</Option>
                            </Select>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">Counsellor Name</p>
                        <Input  className="h-[57px]" label="Counsellor Name"></Input>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">Phone Number</p>
                        <Input  className="h-[57px]"label="Phone Number"></Input>
                    </div>
                    <div >
                        <p className=" text-base font-semibold my-4">Add More Field</p>
                        <button className=" h-[57px] px-[118px]" > Click to add more field  </button>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-[34px] p-[39px] my-[30px]">

                <p className="text-[#333333] text-2xl font-semibold my-8">Main Campus</p>
                <div className="grid grid-cols-3 gap-[30px]">
                    <div>
                        <p className=" text-base font-semibold my-4">University Name</p>
                        <Input className="h-[57px]" label="University Name"></Input>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">University Type</p>
                            <Select  className="h-[57px]" label="University Type">
                                <Option>University</Option>
                                <Option>University</Option>
                                <Option>University</Option>
                                <Option>University</Option>
                                <Option>University</Option>
                            </Select>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">University Type</p>
                            <Select  className="h-[57px]" label="University Type">
                                <Option>University</Option>
                                <Option>University</Option>
                                <Option>University</Option>
                                <Option>University</Option>
                                <Option>University</Option>
                            </Select>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">University Type</p>
                            <Select  className="h-[57px]" label="University Type">
                                <Option>University</Option>
                                <Option>University</Option>
                                <Option>University</Option>
                                <Option>University</Option>
                                <Option>University</Option>
                            </Select>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">University Type</p>
                            <Select  className="h-[57px]" label="University Type">
                                <Option>University</Option>
                                <Option>University</Option>
                                <Option>University</Option>
                                <Option>University</Option>
                                <Option>University</Option>
                            </Select>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">Counsellor Name</p>
                        <Input  className="h-[57px]" label="Counsellor Name"></Input>
                    </div>
                    <div className="h-[170px] my-[30px]">
                        <p className=" text-base font-semibold my-4">University Name</p>
                        <Input className="h-[143px]" label="University Name"></Input>
                    </div>
                </div>
                <div >
                    <p className=" text-base font-semibold my-4">Add Field</p>
                    <button className=" h-[57px] px-[30px]" > Click to add more field  </button>
                </div>
            </div>
            <div className="bg-white rounded-[34px] p-[39px] my-[30px]">
                <p className="text-[#333333] text-2xl font-semibold my-8">Referral Details</p>
                <div className="grid grid-cols-3 gap-[30px]">
                    <div>
                        <p className=" text-base font-semibold my-4">Referral Name Name</p>
                        <Input className="h-[57px]" label="Select University"></Input>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">Email</p>
                        <Input className="h-[57px]" label="example@email.com"></Input>
                    </div>
                    <div >
                        <p className=" text-base font-semibold my-4">Add Field</p>
                        <button className=" h-[57px] px-[30px]" > Click to add more field  </button>
                    </div>
                </div>
            </div>
           
            <NavLink to="leads">
                <Button className="bg-[#280559]  rounded-[15px]">
                    <div className="flex flex-row justify-center items-center px-[33px] py-[10px]">
                        <img src={saveIcon} alt='...'/>
                        <p className="text-white text-base font-medium px-[11px] normal-case ">Save Changes</p>
                    </div>
                </Button>
            </NavLink>
            
        </div>
    )
        
}

export default CreateLead;