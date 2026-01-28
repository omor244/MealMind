import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import Loading from "../Components/Loading/Loading";




const useRole = () => {

    const { user, loading } = useAuth()
    const axiossecure = useAxiosSecure()

    const { data: role, isLoading } = useQuery({
        queryKey: ['role', user?.email],

        queryFn: async () => {

            const { data } = await axiossecure.get(`/user/role/${user?.email}`)

            return data?.role
        }
    })



    if (isLoading) return <Loading></Loading>
    return { role };
};

export default useRole;