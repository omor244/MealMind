import axios from "axios"


export const saveorupdateuser = async (userdata) => {


    const { data } = await axios.post('https://meal-mind-server-ashy.vercel.app/users', userdata)
    
    return data
}