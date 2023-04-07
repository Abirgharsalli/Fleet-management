import { Outlet } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';

const SidebarElement = () => (
  <>
    <Sidebar />
    <Outlet />
  </>
)
export default SidebarElement