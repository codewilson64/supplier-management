import { Button, Tag } from "antd";
import { useLocation } from "react-router-dom";
import TabsDetails from "../components/Tabs";

const Supplier = () => {
  const location = useLocation();
  const supplier = location.state?.supplier;

  return (
    <div className="w-full">
      {/* Top Content */}
      <div className="flex items-center justify-between p-[16px]">
        <div className="w-[40%] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-[70px] h-[70px] border-black bg-gray-300/60">
              </div>
              <div>
                <h3 className="font-normal">{supplier.name}</h3>
                <p className="text-gray-500/60">Fatmawati Raya St, 33</p>
                <p className="text-gray-500/60">Jakarta Selatan</p>
              </div>
            </div>
            <div>
              <Tag color={supplier.status === "Active" ? "green" : supplier.status === "Blocked" ? "red" : "orange"}>
                {supplier.status}
              </Tag>
            </div>
        </div>

        <div>
          <Button className="bg-red-500 text-white">
            Block/Unblock
          </Button>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="p-[16px]">
          <TabsDetails />
      </div>
    </div>
  )
}

export default Supplier