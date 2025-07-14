import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Supplier from './pages/Supplier';
import Sidebar from './components/Sidebar';

function App() {

  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/supplier/:id' element={<Supplier />}/>
      </Routes> 
    </div>  
  )
}

export default App
