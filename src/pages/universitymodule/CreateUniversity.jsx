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

export function CreateUniversity() {
   
    return (
        <div className="mt-12 w-full bg-[#E8E9EB] px-14">
            <div className="grid grid-cols-1 my-10">
                <p className=" text-4xl font-semibold text-[#280559]">Create University</p>
                <p className=" text-base font text-[#9898A3]">Create or edit university</p>
            </div>
            <div className="bg-white rounded-[34px] p-[39px]">
                <p className="text-[#333333] text-2xl font-semibold my-8">University Details</p>
                <div className=" flex flex-row gap-4">
                    <p className="text-[#333333] text-base font-semibold">University Logo</p>
                    <div className="flex flex-col justify-center items-center">
                        <img className="outline outline-1 outline-[#CBD2DC] rounded-2xl mb-3"  src={universityLogo} alt='...'/>
                        <button className="w-[150px] ">
                            <p className="text-sm outline outline-1 outline-[#CBD2DC] rounded-2xl px-[35px] py-3">Upload Logo</p>
                        </button>
                    </div>
                </div>
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
                        <p className=" text-base font-semibold my-4">Counsellor Name</p>
                        <Input  className="h-[57px]" label="Counsellor Name"></Input>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">Phone Number</p>
                        <Input  className="h-[57px]"label="Phone Number"></Input>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">Email Address</p>
                        <Input  className="h-[57px]" label="Email Address"></Input>
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
                        <p className=" text-base font-semibold my-4">University Name</p>
                        <Input className="h-[57px]" label="University Name"></Input>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">Counsellor Name</p>
                        <Input  className="h-[57px]" label="Counsellor Name"></Input>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">Phone Number</p>
                        <Input  className="h-[57px]"label="Phone Number"></Input>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">Email Address</p>
                        <Input  className="h-[57px]" label="Email Address"></Input>
                    </div>
                    <div >
                        <p className=" text-base font-semibold my-4">Add More Field</p>
                        <button className=" h-[57px] px-[118px]" > Click to add more field  </button>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-[34px] p-[39px] my-[30px]">
                <p className="text-[#333333] text-2xl font-semibold my-8">Campus 2</p>
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
                        <p className=" text-base font-semibold my-4">Counsellor Name</p>
                        <Input  className="h-[57px]" label="Counsellor Name"></Input>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">Phone Number</p>
                        <Input  className="h-[57px]"label="Phone Number"></Input>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">Email Address</p>
                        <Input  className="h-[57px]" label="Email Address"></Input>
                    </div>
                    <div >
                        <p className=" text-base font-semibold my-4">Add More Field</p>
                        <button className=" h-[57px] px-[30px]" > Click to add more field  </button>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-[34px] p-[39px] my-[30px]">
                <p className="text-[#333333] text-2xl font-semibold my-8">Add Campus</p>

                <div className="flex justify-center items-center">
                    <button className=" h-[57px] px-[30px]" > Click to add more field  </button>
                </div>
            </div>
            <div className="w-full bg-white rounded-[34px] p-[39px] my-[30px]" >
                <p className="text-[#333333] text-2xl font-semibold my-8">University Details</p>
                <div className="grid grid-cols-3 gap-8">
                    <div>
                            <p className=" text-base font-semibold my-4">Visa Application Fee</p>
                        <form className="w-[420px]">
                            <div className="relative">
                                <div className=" absolute top-[1px] left-[1px]   bg-[#E5E8ED] rounded-md">
                                    <p className="text-[#333333] text-base font-medium p-[12px]">USD:</p>
                                </div>
                                <input
                                    type="text"
                                    placeholder="0.00"
                                    className="w-full py-3 pl-16 pr-4 text-gray-500  rounded-md border-[#E5E8ED]  outline-none bg-gray-50"
                                />
                            </div>  
                        </form>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">Visa Application Fee</p>
                        <form className="w-[420px]">
                            <div className="relative">
                                <div className=" absolute top-[1px] left-[1px]   bg-[#E5E8ED] rounded-md">
                                    <p className="text-[#333333] text-base font-medium p-[12px]">USD:</p>
                                </div>
                                <input
                                    type="text"
                                    placeholder="0.00"
                                    className="w-full py-3 pl-16 pr-4 text-gray-500  rounded-md border-[#E5E8ED]  outline-none bg-gray-50"
                                />
                            </div>
                        </form>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">Visa Application Fee</p>
                        <form className="w-[420px] ">
                            <div className="relative">
                                <div className=" absolute top-[1px] left-[1px]   bg-[#E5E8ED] rounded-md">
                                    <p className="text-[#333333] text-base font-medium p-[12px]">USD:</p>
                                </div>
                                <input
                                    type="text"
                                    placeholder="0.00"
                                    className="w-full py-3 pl-16 pr-4 text-gray-500  rounded-md border-[#E5E8ED]  outline-none bg-gray-50"
                                />
                            </div>
                        </form>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">Commission Duration</p>
                            <Select  className="h-[57px]" label="Select Duration">
                                <Option>University</Option>
                                <Option>University</Option>
                                <Option>University</Option>
                                <Option>University</Option>
                                <Option>University</Option>
                            </Select>
                    </div>
                    <div >
                        <p className=" text-base font-semibold my-4">Add More Field</p>
                        <button className=" h-[57px] px-[30px]" > Click to add more field  </button>
                    </div>
                </div>
            </div>
            <NavLink to="university">
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

export default CreateUniversity;