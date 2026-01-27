import { useContext } from 'react'
import { AuthContext } from '../Provider/Context/AuthContex'



const useAuth = () => {
  const auth = useContext(AuthContext)
  return auth
}

export default useAuth
