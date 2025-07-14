import { Button, Input, Space, Table, Tag } from 'antd';

const columns = [
  {
    title: 'Material Detail ID',
    dataIndex: 'id',
    key: 'id',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Material Detail Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Material ID',
    dataIndex: 'material_id',
    key: 'material id',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Price Upload date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
]

const data = [
  {
    key: '1',
    id: "83E30041uk",
    name: 'Lenovo Yoga',
    material_id: 'Computer / Notebook',
    price: "Rp 19.000.000",
    date: "01/01/2025 10:23:01",
    status: "Active"
  },
];

const MaterialCatalog = () => {
  return (
    <div className='w-full'>
      <div className='flex items-center justify-between mb-[16px]'> 
        <div className="flex w-[300px]">
          <Input 
            placeholder="Search material" 
          />
        </div>
        <div className='flex items-center gap-3'>
          <Button>Import</Button>
          <Button>New Material Detail</Button>
        </div>
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default MaterialCatalog