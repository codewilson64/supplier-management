import { Input, Button, Tag } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import Create from "../components/Create";
import Status from "../components/Dropdown";

const Homepage = () => {
  const [suppliers, setSuppliers] = useState([
    { id: 1, name: "PT Setroom Indonesia", nick: "Setroom", address: "Jakarta, Indonesia", contact: "Albert Einstein", status: "Active" },
    { id: 2, name: "PT Suka Suka", nick: "Sukasuka", address: "Bandung, Indonesia", contact: "James Lee", status: "In Progress" },
    { id: 3, name: "PT Angin Ribut", nick: "Angin", address: "Denpasar, Indonesia", contact: "Maria Chen", status: "Blocked" },
  ]);

  return (
    <div className="w-full p-[16px]">     
      <div className="flex items-center justify-between mb-[16px]">
        <h1 className="text-xl font-bold">Supplier List</h1>
        <Create setSuppliers={setSuppliers}/>
      </div>

      <div className="w-full flex items-center gap-3">
        <div className="w-full border border-gray-300/50 rounded-xl px-4 py-2 mb-[16px]">
          <p className="text-gray-500 text-sm">Total Supplier</p>
          <p>1,869</p>
          <p className="text-sm text-green-500">+8% vs last year</p>
        </div>
        <div className="w-full border border-gray-300/50 rounded-xl px-4 py-2 mb-[16px]">
          <p className="text-gray-500 text-sm">New Supplier</p>
          <p>27</p>
          <p className="text-sm text-green-500">+1% vs last year</p>
        </div>
        <div className="w-full border border-gray-300/50 rounded-xl px-4 py-2 mb-[16px]">
          <p className="text-gray-500 text-sm">Avg Cost per Supplier</p>
          <p>Rp 320,3 Mn</p>
          <p className="text-sm text-red-500">-1% vs last year</p>
        </div>
        <div className="w-full border border-gray-300/50 rounded-xl px-4 py-2 mb-[16px]">
          <p className="text-gray-500 text-sm">Blocked Supplier</p>
          <p>31</p>
          <p className="text-sm text-red-500">-4% vs last year</p>
        </div>
      </div>

      <div className="flex justify-between items-center mb-[16px]">
        <div className="flex gap-2">
          <div className="flex items-center gap-3 w-[300px]">
            <Input 
                placeholder="Search customer" 
            />
          </div>
            <Status />
        </div>
          <div>
            <Button>Export</Button>
          </div>
      </div>

      <div className="border border-b-0 border-gray-300/50">  
        <div className="w-full flex items-center p-4 bg-gray-300/50">
            <div className="w-[40%]">Name</div>
            <div className="w-[20%]">Address</div>
            <div className="w-[20%]">Contact</div>
            <div className="w-[20%]">Status</div>
        </div>
          
        {suppliers.map(item => (
          <Link to={`/supplier/${item.id}`} state={{ supplier: item }} key={item.key} className="w-full flex p-4 border-b">
            <div className="w-[40%]">{item.name}</div>
            <div className="w-[20%]">{item.address}</div>
            <div className="w-[20%]">{item.contact}</div>
            <div className="w-[20%]">
              <Tag color={item.status === "Active" ? "green" : item.status === "Blocked" ? "red" : "orange"}>
                {item.status}
              </Tag>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Homepage