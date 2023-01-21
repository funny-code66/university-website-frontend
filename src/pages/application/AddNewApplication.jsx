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
import upload from "../../../public/img/upload.svg"
import esc from '../../../public/img/esc.svg';
import deletee from '../../../public/img/delete.svg';
import up from '../../../public/img/up.svg';

export function AddNewApplication() {
   
    return (
        <div className="mt-12 w-full bg-[#E8E9EB] px-14">
            <div className="grid grid-cols-1 my-10">
                <p className=" text-4xl font-semibold text-[#280559]">Add New Application</p>
                <p className=" text-base font text-[#9898A3]">Create or edit application</p>
            </div>
            <div className="bg-white rounded-[34px] p-[39px]">
                <p className="text-[#333333] text-2xl font-semibold my-8">Applicants Personal Info</p>
                <div className="grid grid-cols-3 gap-[30px] mb-14">
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
                        <p className=" text-base font-semibold my-4">Phone Number</p>
                        <Input  className="h-[57px]"label="Phone Number"></Input>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">Phone Number</p>
                        <Input  className="h-[57px]"label="Phone Number"></Input>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">Phone Number</p>
                        <Input  className="h-[57px]"label="Phone Number"></Input>
                    </div>
                    
                </div>
                <div>
                    <div className=" flex flex-row gap-[90px]  ">
                        <p className="text-[#333333] text-base font-semibold">Full passport Pages</p>
                        <div className="flex flex-col justify-center">
                            <img className=" w-[309px] h-[258px] outline outline-1 outline-[#CBD2DC] rounded-2xl mb-3"  src={universityLogo} alt='...'/>
                            <button className="w-[150px] ">
                                <p className="text-sm outline outline-1 outline-[#CBD2DC] rounded-2xl px-[35px] py-3">Upload</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-[30px] mb-14">
                    <div>
                        <p className=" text-base font-semibold my-4">Passport No</p>
                        <Input  className="h-[57px]" label="Passport No"></Input>
                    </div>
                    <div >
                        <p className=" text-base font-semibold my-4">Add Field</p>
                        <button className=" text-[#BEBFC3] h-[57px] px-[30px]" > Click to add more field  </button>
                    </div>
                </div>
            </div>


            <div className="bg-white rounded-[34px] p-[39px] my-[30px]">

                <p className="text-[#333333] text-2xl font-semibold my-8">Application Details</p>
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
                        <p className=" text-base font-semibold my-4">University Name</p>
                        <Input className="h-[57px]" label="University Name"></Input>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">University Name</p>
                        <Input className="h-[57px]" label="University Name"></Input>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">University Name</p>
                        <Input className="h-[57px]" label="University Name"></Input>
                    </div>
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
                        <p className=" text-base font-semibold my-4">Counsellor Name</p>
                        <Input  className="h-[57px]" label="Counsellor Name"></Input>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">Counsellor Name</p>
                        <Input  className="h-[57px]" label="Counsellor Name"></Input>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">Counsellor Name</p>
                        <Input  className="h-[57px]" label="Counsellor Name"></Input>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">Counsellor Name</p>
                        <Input  className="h-[57px]" label="Counsellor Name"></Input>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">Counsellor Name</p>
                        <Input  className="h-[57px]" label="Counsellor Name"></Input>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">Counsellor Name</p>
                        <Input  className="h-[57px]" label="Counsellor Name"></Input>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">Counsellor Name</p>
                        <Input  className="h-[57px]" label="Counsellor Name"></Input>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">Counsellor Name</p>
                        <Input  className="h-[57px]" label="Counsellor Name"></Input>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">Counsellor Name</p>
                        <Input  className="h-[57px]" label="Counsellor Name"></Input>
                    </div>
                    
                    <div >
                        <p className=" text-[#BEBFC3] text-base font-semibold my-4">Add Field</p>
                        <button className=" h-[57px] px-[30px]" > Click to add more field  </button>
                    </div>
                </div>
            </div>


            <div className="bg-white rounded-[34px] p-[39px] my-[30px] ">
                <p className="text-[#333333] text-2xl font-semibold my-8">Upload Document</p>
                <div className=" flex flex-row gap-[20px]">
                   <img className="w-[726px] outline-dotted outline-2 outline-[#384EB7] rounded-lg" src={upload} alt='...'/>
                   <div className="w-full items-center">
                        <div className=" border-b-4 border-deep-purple-900">
                            <p className=" text-[#92929D] text-sm">Uploading - 3/3 files</p>
                            <div className=" relative flex flex-row outline outline-1 outline-[#E3E3E3] rounded-lg p-3 items-center justify-between my-7">
                                <p className="text-black text-sm ">your-file-here.PDF</p>
                                <button>
                                    <img className="flex justify-end" src={esc} alt='...'/>
                                </button>
                            </div>
                        </div>
                        <div className="my-5">
                            <p className=" text-[#92929D] text-sm">Uploading </p>
                            <div className="flex flex-row outline outline-1 outline-[#11AF22] rounded-lg p-3 items-center justify-between my-7">
                                <p className="text-black text-xs ">document-name.PDF</p>
                                <button>
                                    <img className="flex justify-end" src={deletee} alt='...'/>
                                </button>
                            </div>  
                            <div className="flex flex-row outline outline-1 outline-[#11AF22] rounded-lg p-3 items-center justify-between my-7">
                                <p className="text-black text-xs ">image-name-goes-here.png</p>
                                <button>
                                    <img className="flex justify-end" src={deletee} alt='...'/>
                                </button>
                            </div>  
                        </div>
                        <NavLink to="leads">
                             <Button className="bg-[#280559]  rounded-[15px]">
                                 <div className="flex flex-row justify-center items-center px-[33px] py-[10px]">
                                    <img src={up} alt='...'/>
                                    <p className="text-white text-base font-medium px-[11px] normal-case ">Save Changes</p>
                                </div>
                            </Button>
                        </NavLink>
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

export default AddNewApplication;