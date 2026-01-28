

import useAuth from '../Hooks/useAuth';
import DashboardNavber from '../Dashboard/DashboardNavber/DashboardNavber';
import { Outlet } from 'react-router';

const Dashboard = () => {

    const {user} = useAuth()
  

    return (
        <div className="grid grid-cols-16 gap-0 min-h-screen bg-slate-50">
               
            <div className='col-span-3'>
           <DashboardNavber></DashboardNavber>
                
            </div>

           
            <main className="col-span-13 sm:p-10 overflow-y-auto">
             
              <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Dashboard;