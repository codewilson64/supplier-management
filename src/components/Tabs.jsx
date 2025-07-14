import { Tabs } from 'antd';
import MaterialCatalog from './MaterialCatalog';

const onChange = key => {
  console.log(key);
};

const overviewTabs = [
  {
    key: '1-1',
    label: 'Address',
    children: 'Content of Profile Tab',
  },
  {
    key: '1-2',
    label: 'Contacts',
    children: 'Content of Settings Tab',
  },
  {
    key: '1-3',
    label: 'Groups',
    children: 'Content of Settings Tab',
  },
  {
    key: '1-4',
    label: 'Material List',
    children: 'Content of Settings Tab',
  },
  {
    key: '1-5',
    label: 'Others',
    children: 'Content of Settings Tab',
  },
];

const items = [
  {
    key: '1',
    label: 'Overview',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Assessment',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Material Catalog',
    children: <MaterialCatalog />,
  },
  {
    key: '4',
    label: 'Orders',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '5',
    label: 'Invoices',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '6',
    label: 'Projects',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '7',
    label: 'Services',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '8',
    label: 'History',
    children: 'Content of Tab Pane 1',
  },
]

const TabsDetails = () => {

  return (
    <Tabs 
      defaultActiveKey="1" 
      items={items} 
      onChange={onChange} 
    />
  )
}

export default TabsDetails