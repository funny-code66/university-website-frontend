import React from "react";
import { Link } from "react-router-dom";
import { 
    Input,
    Select,
    Option,
  Button,
  Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Checkbox
} from "@material-tailwind/react";
import saveIcon from '../../../public/img/saveIcon.svg';
import filterIcon from '../../../public/img/filterIcon.svg';
import down from '../../../public/img/downIcon.svg';
import vector from '../../../public/img/vector.svg';
import print from '../../../public/img/print.svg';
import Sales_recording_data from "@/data/Sales-recording-data";
export function CreateSales() {
   
    return (
        <div className="mt-12 w-full bg-[#E8E9EB] px-14">
            <div className="grid grid-cols-1 my-10">
                <p className=" text-4xl font-semibold text-[#280559]">Accounting Module</p>
                <p className=" text-base font text-[#9898A3]">View Accounting</p>
            </div>
            <div>
            <div className="relative bg-white flex flex-row justify-between items-center p-12 mb-7   rounded-[34px]">
                    <div className="flex flex-row gap-6">
                        <Link to="sales">
                            <div className="flex flex-col items-center">
                                <div className="absolute top-0 w-[81px] h-1 bg-[#280559] "/>
                                <p className="text-[24px] text-[#280559] font-semibold">Sales</p>
                            </div>
                        </Link>
                        <Link to="cost">
                            <div className="flex flex-col items-center border-[#280559]">
                                <div className="absolute top-0 w-[137px] h-1 bg-[#280559] hidden "/>
                                <p className="text-[24px] text-[#92929D] font-semibold">Cost of Sales</p>
                            </div>
                        </Link>
                        <Link to="debit">
                            <div className="flex flex-col items-center">
                                <div className="absolute top-0 w-[237px] h-1 bg-[#280559] hidden"/>
                                <p className="text-[24px] text-[#92929D] font-semibold">Debit & Credit</p>
                            </div>
                        </Link>
                        <Link to="expenses">
                            <div className="flex flex-col items-center">
                                <div className="absolute top-0 w-[112px] h-1 bg-[#280559] hidden "/>
                                <p className="text-[24px] text-[#92929D] font-semibold ">Expanses</p>
                            </div>
                        </Link>
                        <Link to="sales">
                            <div className="flex flex-col items-center">
                                <div className="absolute top-0 w-[237px] h-1 bg-[#280559] hidden"/>
                                <p className="text-[24px] text-[#92929D] font-semibold">Reports</p>
                            </div>
                        </Link>
                    </div>
                </div>  
            </div>
            <div className="grid grid-cols-1 my-10">
                <p className=" text-4xl font-semibold text-[#280559]">Create Sales</p>
                <p className=" text-base font text-[#9898A3]">Create or edit Sales</p>
            </div>
            <div className="bg-white rounded-[34px] p-[39px] my-[30px]">

                <p className="text-[#333333] text-2xl font-semibold my-8">Sale Details</p>
                <div className="grid grid-cols-3 gap-[30px]">
                    <div>
                        <p className=" text-base font-semibold my-4">Name of Sale</p>
                        <Input className="h-[57px]" label="Sale Name Here"></Input>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">Descripton</p>
                        <Input className="h-[57px]" label="Descripton"></Input>
                    </div>
                    <div>
                        <p className=" text-base font-semibold my-4">Amount</p>
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
                        <p className=" text-base font-semibold my-4">Date</p>
                        <Input className="h-[57px]" label="DD/MM/YYYY"></Input>
                    </div>
                    <div >
                        <p className=" text-base font-semibold my-4">Add More Field</p>
                        <button className=" h-[57px] px-[30px]" > Click to add more field  </button>
                    </div>
                </div>
            </div>
            <Link to="Sales">
                <Button className="bg-[#280559]  rounded-[15px]">
                    <div className="flex flex-row justify-center items-center px-[33px] py-[10px]">
                        <img src={saveIcon} alt='...'/>
                        <p className="text-white text-base font-medium px-[11px] normal-case ">Save Changes</p>
                    </div>
                </Button>
            </Link>
        </div>
    )
}

export default CreateSales;