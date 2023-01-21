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

export function CreateAcademic() {
   
    return (
        <div className="mt-12 w-full bg-[#E8E9EB] px-14">
            <div className="grid grid-cols-1 my-10">
                <p className=" text-4xl font-semibold text-[#280559]">Create Progaram</p>
                <p className=" text-base font text-[#9898A3]">Create or edit program</p>
            </div>
            <div className="bg-white rounded-[34px] p-[39px]">
                <p className="text-[#333333] text-2xl font-semibold my-8">Program Details</p>
                
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
                        <p className=" text-base font-semibold my-4">Counsellor Name</p>
                        <Input  className="h-[57px]" label="Counsellor Name"></Input>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">Phone Number</p>
                        <Input  className="h-[57px]"label="Phone Number"></Input>
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
                    <div >
                        <p className=" text-base font-semibold my-4">Add Field</p>
                        <button className=" h-[57px] px-[118px]" > Click to add more field  </button>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-[34px] p-[39px] my-[30px]">
                <p className="text-[#333333] text-2xl font-semibold my-8">Program Requirments</p>
                <div className="grid grid-cols-2 gap-[30px]">
                    <div className="h-[170px]">
                        <p className=" text-base font-semibold my-4">University Name</p>
                        <Input className="h-[143px]" label="University Name"></Input>
                    </div>
                    <div className="h-[170px]">
                        <p className=" text-base font-semibold my-4">University Name</p>
                        <Input className="h-[143px]" label="University Name"></Input>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">Add Section</p>
                        <button className=" h-[57px] px-[118px]" > Click to add more field  </button>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-[34px] p-[39px] my-[30px]">
                <p className="text-[#333333] text-2xl font-semibold my-8">Add Campus</p>

                <div className="flex justify-center items-center">
                    <button className=" h-[57px] px-[30px]" > Click to add more field  </button>
                </div>
            </div>

            
            <NavLink to="academic">
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

export default CreateAcademic;