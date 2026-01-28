import useAuth from "../Hooks/useAuth";
import { LayoutDashboard, Calendar, Utensils, Heart, User, LogOut, TrendingUp, Plus } from 'lucide-react';
import useRole from "../Hooks/useRole";
import AdminOverview from "./AdminOverview";
import UserOverview from "./UserOverview";

const OverView = () => {
    const { user } = useAuth()
    const {role} = useRole()
   


    return (
        <div>
           

            <div>
                {role === "admin" && <>
                 <AdminOverview></AdminOverview>
                </>}
          </div>

            <div>
                {
                    role === "user" && <> 
                     <UserOverview></UserOverview>
                    </>
                }
          </div>
           


           
        </div>
    );
};

export default OverView;