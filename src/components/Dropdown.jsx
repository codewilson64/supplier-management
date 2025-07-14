import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const items = [
  {
    key: '1',
    label:'Active'
  },
];

const Status = () => {
  return (
    <Dropdown menu={{ items }}>
    <a onClick={e => e.preventDefault()}>
      <Space>
        Active
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
  )
}

export default Status