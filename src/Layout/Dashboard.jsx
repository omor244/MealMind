

import useAuth from '../Hooks/useAuth';
import DashboardNavber from '../Dashboard/DashboardNavber/DashboardNavber';
import { Outlet } from 'react-router';

const Dashboard = () => {

    const {user} = useAuth()
  

    return (
        <div className="grid grid-cols-12 gap-0 min-h-screen bg-slate-50">
               
            <div className='col-span-2'>
           <DashboardNavber></DashboardNavber>
                
            </div>

           
            <main className="col-span-10 sm:p-10 overflow-y-auto">
             
              <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Dashboard;