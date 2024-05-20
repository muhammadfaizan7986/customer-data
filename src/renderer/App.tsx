import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import './App.css';
import Home from './pages/Home';
import CustomerTable from './pages/CustomerTable';
import ServicesTable from './pages/ServicesTable';
import SideBar from './components/ui/sideBar/SideBar';
import Login from './pages/Login';
import InvoicesTablePage from './modules/InvoicesTablePage';
import OrderTablePage from './modules/OrderTablePage';

export default function App() {
  return (
    <Router>
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customer-table" element={<CustomerTable />} />
        <Route path="/service-table" element={<ServicesTable />} />
        <Route path="/invoices" element={<InvoicesTablePage />} />
        <Route path="/order" element={<OrderTablePage />} />
      </Routes>
    </Router>
  );
}
