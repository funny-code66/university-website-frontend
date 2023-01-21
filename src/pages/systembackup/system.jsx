import React from "react";
import {
  Typography,
  Alert,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import plus from '../../../public/img/plus.png';
import Backup  from "@/data/backup-props";
import success from '../../../public/img/system/success.png'

export function System() {
   

  return (
    <div className="mt-12 w-full bg-[#E8E9EB] px-14 my-20 flex flex-col gap-8">
        <div className="flex justify-between">
            <div className="flex-col mb-7">
                <h3 className="text-left text-4xl font-bold text-[#280559]">Backup</h3>
                <p className="text-[#9898A3] text-lg text-left">Backup Management</p>
            </div>
            <Button className="flex text-center text-flex justify-center h-[50px] rounded-lg text-white p-3 w-[180px] items-center bg-[#280559]">
                <img src={plus} alt='Add'/>
                <p className="ml-1 text-center" >Create New User</p>
            </Button> 
        </div>
        <Card>
        <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border-none rounded-lg">
                        <h4 className="ml-6 text-2xl font-medium text-left mb-7 text-[#333333]">Backup List</h4>
                        <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50 w-full justify-between">
                            <tr>
                                <th
                                    className="w-[50%] px-6 py-3 text-base font-bold text-left text-gray-500"
                                >
                                    Name
                                </th>
                                <th
                                    className="w-[115px] px-6  py-3 text-base font-bold text-left text-gray-500"
                                >
                                    Date
                                </th>
                                <th
                                    className="w-[100px] px-6 py-3 text-base font-bold text-left text-gray-500"
                                >
                                    Size
                                </th>
                                <th
                                    className="w-[113px] px-6 py-3 text-base font-bold text-center text-gray-500"
                                >
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {Backup.map((items) => (
                            <tr>
                                <td className="flex px-6 py-4 text-lg font-base text-gray-800 whitespace-nowrap text-left">
                                    <p>📄{items.name}</p>
                                </td>
                                <td className="px-6 py-4 text-lg font-base text-gray-800 whitespace-nowrap text-left">
                                    {items.date}
                                </td>
                                <td className="px-6 py-4 text-lg font-base text-gray-800 whitespace-nowrap text-left">
                                    {items.size}
                                </td>
                                <td className="flex items-center justify-center">
                                    <div className="flex mx-2">
                                        <Button className="w-[43px] h-[43px] bg-[#65BF83] flex items-center justify-center rounded-full">
                                            <p className="text-2xl">⟲</p>
                                        </Button>
                                    </div>
                                    <div className="flex mx-2">
                                        <Button className="w-[43px] h-[43px] bg-[#280559] flex items-center justify-center rounded-full">
                                            <p className="text-2xl">☁</p>
                                        </Button>
                                    </div>
                                    <div className="flex mx-2">
                                        <Button className="w-[43px] h-[43px] bg-[#DB0D4B] flex items-center justify-center rounded-full">
                                            <p className="text-2xl">🗑</p>
                                        </Button>
                                    </div>
                                    
                                </td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        <table className="min-w-full divide-y divide-gray-200">               
            
            
        </table>
        </Card>
    </div>
  );
}

export default System;
