import useAuth from '../Hooks/useAuth';
import DashboardNavber from '../Dashboard/DashboardNavber/DashboardNavber';
import { Outlet } from 'react-router';
import { Menu } from 'lucide-react'; 

const Dashboard = () => {
    const { user } = useAuth();

    return (
        <div className="drawer lg:drawer-open min-h-screen bg-slate-50">
           
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content flex flex-col overflow-x-hidden">
              
                <div className="lg:hidden flex items-center justify-between p-4 bg-slate-900 text-white sticky top-0 z-20">
                    <span className="text-lg font-bold tracking-tighter uppercase">
                        Meal<span className="text-primary">MIND</span>
                    </span>
                    <label htmlFor="dashboard-drawer" className="btn btn-ghost btn-circle drawer-button">
                        <Menu size={24} />
                    </label>
                </div>

              
                <main className="flex-1 p-4 md:p-8 lg:p-10">
                    <Outlet />
                </main>
            </div>

            
            <div className="drawer-side z-40">
                <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="min-h-full">
                    <DashboardNavber />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;