import { useEffect, useState } from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
const DetailReport = () => {
    const [data, setData]= useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/Details")
            .then(res=> res.json)
            .then(json=> setData)
    }, []);
  return (
    <>
      <div className="bg-white shadow-md">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-black">Detailed report</h2>
            <div className="flex gap-2">
              <button  className="text-pink-300 border-2 p-2 rounded ">Import</button>
              <button className="text-pink-300 border-2 p-2 rounded ">Export</button>
            </div>
          </div>

          <div className="w-full">
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-50">
                        <th><MdCheckBoxOutlineBlank /></th>
                        <th className="text-gray-400 font-bold">CUSTOMER NAME</th>
                        <th className="text-gray-400 font-bold">COMPANY</th>
                        <th className="text-gray-400 font-bold">ORDER VALUE</th>
                        <th className="text-gray-400 font-bold">ORDER DATE</th>
                        <th className="text-gray-400 font-bold">STATUS</th>
                        <th className="text-gray-400 font-bold"></th>
                    </tr>
                </thead>
            </table>
          </div>

          <div><span>63 resuls</span></div>

          
        </div>
      </div>
    </>
  );
};
export default DetailReport;
