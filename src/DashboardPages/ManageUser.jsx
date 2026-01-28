import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Loading from "../Components/Loading/Loading";
import useAuth from "../Hooks/useAuth";
import { Trash2, Mail, Calendar, ChevronDown, UserCheck } from "lucide-react";
import Swal from "sweetalert2";

const ManageUser = () => {
    const axiosSecure = useAxiosSecure();
    const { user: currentUser } = useAuth();

    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure('/users');
            return res.data;
        }
    });


    const handleRoleUpdate = async (user, newRole) => {


       
        if (user.role === newRole) return 

        try {
            const res = await axiosSecure.patch(`/users/${user._id}`, { role: newRole });
            if (res.data.modifiedCount) {
                Swal.fire({
                    title: "Success!",
                    text: `${user.name} is now an ${newRole}`,
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false
                });
                refetch();
            }
        } catch (error) {
            Swal.fire("Error", "Role update failed", "error");
        }
    };

    const handleDeleteUser = (user) => {


       
        if (user?.email == currentUser?.email) {
            return Swal.fire("Error", "You cannot delete yourself!", "error");
        }

        Swal.fire({
            title: "Are you sure?",
            text: `Remove ${user.name} from the system?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ef4444",
            confirmButtonText: "Yes, delete!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/users/${user?._id}`);
                if (res.data.deletedCount) {
                    Swal.fire("Deleted!", "User removed.", "success");
                    refetch();
                }
            }
        });
    };

    if (isLoading) return <Loading />;

    return (
        <div className="p-4 md:p-10">
            <div className="mb-8 flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-black text-slate-900">User <span className="text-primary">Management</span></h1>
                    <p className="text-slate-500 font-medium">Update roles and manage {users.length} users.</p>
                </div>
                <div className="hidden md:block bg-primary/10 px-4 py-2 rounded-xl text-primary font-bold border border-primary/20">
                    Admin Panel
                </div>
            </div>

            <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-slate-100">
                <div className="overflow-x-auto">
                    <table className="table w-full border-separate border-spacing-0">
                        <thead className="bg-slate-900 text-white">
                            <tr>
                                <th className="p-5 text-left font-bold uppercase text-[10px] tracking-widest">User Details</th>
                                <th className="p-5 text-left font-bold uppercase text-[10px] tracking-widest">Email</th>
                                <th className="p-5 text-left font-bold uppercase text-[10px] tracking-widest">Joined Date</th>
                                <th className="p-5 text-left font-bold uppercase text-[10px] tracking-widest">Role Selector</th>
                                <th className="p-5 text-center font-bold uppercase text-[10px] tracking-widest">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {users.map((item) => (
                                <tr key={item._id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="p-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                <UserCheck size={20} />
                                            </div>
                                            <span className="font-black text-slate-800">{item.name}</span>
                                        </div>
                                    </td>
                                    <td className="p-5 text-slate-500 font-medium text-sm">
                                        <div className="flex items-center gap-2 italic">
                                            <Mail size={14} className="text-slate-400" /> {item.email}
                                        </div>
                                    </td>
                                    <td className="p-5 text-slate-400 text-xs">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={14} />
                                            {new Date(item.createdAt).toLocaleDateString()}
                                        </div>
                                    </td>

                                 
                                    <td className="p-5">
                                        <div className="relative w-fit group">
                                            <select
                                                value={item.role}
                                                onChange={(e) => handleRoleUpdate(item, e.target.value)}
                                                className={`appearance-none outline-none pl-4 pr-10 py-2 rounded-xl text-[11px] font-black uppercase tracking-tighter border-2 transition-all cursor-pointer
                                                    ${item.role === 'admin'
                                                        ? 'bg-primary/5 border-primary/20 text-primary'
                                                        : 'bg-slate-50 border-slate-100 text-slate-400'
                                                    }`}
                                            >
                                                <option value="user">User</option>
                                                <option value="admin">Admin</option>
                                            </select>
                                            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-50" />
                                        </div>
                                    </td>

                                    <td className="p-5 text-center">
                                        <button
                                            onClick={() => handleDeleteUser(item)}
                                            className="p-3 bg-red-50 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all duration-300 group shadow-sm hover:shadow-red-200"
                                        >
                                            <Trash2 size={18} className="group-hover:scale-110 transition-transform" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUser;