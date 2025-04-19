import { useEffect, useState } from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import DetailEdit from "../DetailEdit";
import "./style.css"
import AddUser from "../AddUser";

const DetailReportList = () => {
  const [data, setData] = useState([]);

  const handleReload= ()=>{
    fetchAPI();
  }
  const fetchAPI= async ()=>{
    const response=await fetch("http://localhost:8000/Details");
    const result=await response.json();
    setData(result.reverse());
  }
  useEffect(() => {
    fetchAPI();
  }, []);

  console.log(data);
  
  return (
    <div className="bg-white shadow-md">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-black">Detailed report</h2>
          <div className="flex gap-2">
            <div className="text-pink-300 border-2 p-2 rounded"><AddUser onReload= {handleReload}/></div>
            {/* <button className="text-pink-300 border-2 p-2 rounded">Import</button> */}
            <button className="text-pink-300 border-2 p-2 rounded">Export</button>
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

            <tbody>
              {data.length>0 && data.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="text-center py-2"><input type="checkbox" /></td>
                  <td className="py-2 flex">
                    <img src={item.avatar} className="avatar" alt="no image" />
                    {item.customer_name}
                    </td>
                  <td className="py-2">{item.company}</td>
                  <td className="py-2">{item.order_value}</td>
                  <td className="py-2">{item.order_date}</td>
                  <td className="py-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      item.status === "New"
                        ? "bg-blue-100 text-blue-600"
                        : item.status === "In-progress"
                        ? "bg-yellow-100 text-yellow-600"
                        : item.status === "Completed"
                        ? "bg-green-100 text-green-600"
                        : ""
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="text-center text-gray-400"><DetailEdit item= {item} onReload= {handleReload}/></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-gray-500">
          <span>{data.length} results</span>
        </div>
      </div>
    </div>
  );
};

export default DetailReportList;
