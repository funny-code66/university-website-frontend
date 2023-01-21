import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import plus from '../../../public/img/plus.svg';
import vector from '../../../public/img/vector.svg';
import saveIcon from "../../../public/img/saveIcon.svg"
import { 
    Button,
    Menu,
      MenuHandler,
      MenuList,
      MenuItem,
  } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";


const Curr =[
    {
        iso:'AED',
        currency:'Arabic dirham',
        rate:'3.67'
    },
    {
        iso:'AUD',
        currency:'Australian dollar',
        rate:'1.45'
    },
    {
        iso:'RM',
        currency:'Ringgit Malaysia',
        rate:'4.1'
    },
    {
        iso:'CNY',
        currency:'Renminbi yuan',
        Rate:'6.76'
    },
    {
        iso:'GBP',
        currency:'Sterling pound',
        rate:'0.75'
    }
    
]
export function Currency() {

  return (
    <div className="mt-12 w-full bg-[#E8E9EB] px-14 my-20 flex flex-col gap-8">
        <div className="flex justify-between">
            <div className="flex-col mb-7">
                <h3 className="text-left text-4xl font-bold text-[#280559]">Currency</h3>
                <p className="text-[#9898A3] text-lg text-left">Currency Management</p>
            </div>
            <Button className="bg-[#280559] w-[206px] h-[60px] rounded-[15px]">
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
            <div className="mb-4 flex w-full px-4 justify-between items-center">
                <h3 className="text-left text-2xl font-semibold text-[#333333]">Default Currency</h3>
                <Button className="bg-[#280559] w-[206px] h-[60px] rounded-[15px]">
                <div className="flex flex-row justify-center items-center">
                    <img src={saveIcon} alt='...'/>
                    <p className="text-white text-base font-medium px-[11px] normal-case ">Save Changes</p>
                </div>
                </Button>   
            </div>  
            <div className="px-4 flex">
                <div className="mb-3">
                    <p className="mb-4 font-semibold text-base">Currency</p>
                    <div className="w-[420px] h-[57px]">
                        <Select label="USD">
                            <Option>USD</Option>
                            <Option>COIN</Option>
                            <Option>BTN</Option>
                        </Select>
                    </div>
                </div>
                <div className="pl-3 mb-3">
                    <p className="mb-4 font-semibold text-base">Exchange Rate</p>
                    <div className="w-[420px] h-[57px]">
                        <Input label="Fix exchange rate" />
                    </div>
                </div>
            </div>
        </CardHeader>
        </Card>
        <Card>
            <CardBody>
                <div className="w-full flex max-md:flex-col">
                    <Typography href='/#' className= 'mb-[54px] w-full flex justify-between space-x-3 text-[#92929D] ml-8 ' variant="h5" color="blue-gray">
                        <p className="text-[#333333] text-[24px] font-semibold text-center">Currency List</p> 
                        <NavLink to='create'>   
                            <Button className="w-[206px] h-[60px] last:flex text-center text-flex justify-center rounded-[15px] text-white p-3 items-center bg-[#280559]">
                                <img src={plus} alt='Add'/>
                                <p className="ml-1 text-center" >Add New Currency</p>
                            </Button> 
                        </NavLink> 
                    </Typography>
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
                                            className="w-[200px] px-6 py-3 text-base font-bold text-left text-gray-500"
                                        >
                                            ISO Codes
                                        </th>
                                        <th
                                            className="w-[200px] px-6 py-3 text-base font-bold text-left text-gray-500"
                                        >
                                            Currency
                                        </th>
                                        <th
                                            className="w-[100px] px-6 py-3 text-base font-bold text-left text-gray-500"
                                        >
                                            Rate
                                        </th>
                                        <th
                                            className="w-[100px] px-6 py-3 text-base font-bold text-left text-gray-500"
                                        >
                                            Status
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
                                    {Curr.map((items) => (
                                    <tr>
                                        <td className="px-6 py-4 text-left text-lg font-medium text-gray-800 whitespace-nowrap">
                                            {items.iso}
                                        </td>
                                        <td className="px-6 py-4 text-left text-lg font-medium text-gray-800 whitespace-nowrap">
                                            {items.currency}
                                        </td>
                                        <td className="px-6 py-4 text-left text-lg font-medium text-gray-800 whitespace-nowrap">
                                            {items.rate}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <Button variant="text" className="font-medium rounded-full text-sm text-[#0263FF]">Active</Button>
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
                            <div className="flex w-[90%] justify-between ml-16 items-center">
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

export default Currency;
