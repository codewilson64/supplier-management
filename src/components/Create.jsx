import { useState } from 'react';
import { Button, Input, Modal } from 'antd';

const Create = ({ setSuppliers }) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    nick: "",
    address: "",
    contact: "",
    status: "Active",
  })

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    setSuppliers(prev => [...prev, {...form}])
    setForm({ name: "", address: "", contact: "", status: "Active" });
    setOpen(false);
  }

  const showModal = () => {
    setOpen(true);
  }

  const handleCancel = () => {
    setOpen(false);
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        New Supplier
      </Button>

      <Modal
        title="New Supplier"
        open={open}
        onOk={handleSubmit}
        onCancel={handleCancel}
      >
        <form>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
                <label>Supplier Name</label>
                <Input 
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                />
            </div>
            <div className='flex flex-col gap-2'>
                <label>Nick Name</label>
                <Input 
                    name='nick'
                    value={form.nick}
                    onChange={handleChange}
                />
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
};
export default Create;