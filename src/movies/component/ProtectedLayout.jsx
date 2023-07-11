// pải đăng nhập mới vào dk 
import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

const ProtectedLayout = ()=>{
    const {user} = useAuth();
    const outlet = useOutlet() ;//chờ data chạy xog
    if(!user){
        return <Navigate to="/login"/>
    }
    return(
        <>
        {outlet}
        </>
    )
}
export default ProtectedLayout;