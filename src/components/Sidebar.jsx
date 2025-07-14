import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const sidebar_1 = [
  {
    key: 'sub1',
    label: 'Dashboard',
  },
  {
    key: 'sub2',
    label: 'Supplier Management',
    children: [
      { key: '1', label: 'Dashboard' },
      { key: '2', label: 'Supplier List' },
      { key: '3', label: 'Review & Approvals' },
      { key: '4', label: 'Configurations' },
    ],
  },
  {
    key: 'sub3',
    label: 'Funnel Management',
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      { key: '11', label: 'Option 11' },
      { key: '12', label: 'Option 12' },
    ],
  },
];

const sidebar_2 = [
  {
    key: 'sub1',
    label: 'Help & Support',
  },
  {
    key: 'sub2',
    label: 'John Doe',
    children: [
      { key: '1', label: 'Sign out' },
    ],
  },
]

const Sidebar = () => {
  const onClick = e => {
    console.log('click ', e);
  };

  return (
    <div className='flex flex-col justify-between border border-t-0 border-gray-300/50 h-screen'>
        <div>
            <div className='px-7 py-4 text-2xl'>
              <h1>ALISA</h1>
            </div>

            <Menu
              onClick={onClick}
              style={{ width: 256, border: 'none' }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              items={sidebar_1}
            />
        </div>
        
        <div>
          <Menu
            onClick={onClick}
            style={{ width: 256, border: 'none' }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={sidebar_2}
            />
        </div>
    </div>
  )
}

export default Sidebar