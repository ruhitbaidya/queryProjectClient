import { useQuery } from "@tanstack/react-query"
import axios from "axios"


const SecureAxis = () => {
    const {data, refetch} = useQuery({
        queryKey : ["product"],
        queryFn : async()=>{
            const res = await axios.get("https://queryserver.vercel.app/productGetCard", {withCredentials: true})
            return res
        }
    })

    return [data, refetch]
}

export default SecureAxis