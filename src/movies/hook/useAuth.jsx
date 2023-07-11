// viet hooks kiem tra - xac thuc thong tin dang nhap
import { useLocalStorage } from "./useLocalStorage";
import {
    createContext,
    useContext,
    useState,
    useMemo
} from "react";
import { loginUser } from "../sevices/login";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
const AuthContext = createContext();

export const AuthProvider = ({ children, userData }) => {
    const [user, setUser] = useLocalStorage("reactjs2302-movie", userData);//data localStore
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);
    const navigate = useNavigate(); // dieu huong trang

    // cho nay se dc goi tu form login 
    // dataLoginUser: du lieu nguoi dung nhap tu form
    const login = async (dataLoginUser) => {
        // call api login
        setLoading(true);
        setErrors(null);
        await loginUser(dataLoginUser)
                .then(res => {
                    setLoading(false);
                    // thanh cong
                    setUser(res);
                    // dieu huong ve trang mac dinh nao do
                    navigate("/");
                })
                .catch(err => {
                    // loi
                    setLoading(false);
                    setErrors({
                        cod: 500,
                        mess: err
                    });
                    setUser(null);
                });
    }

    const logout = () => {
        // remove data user o local storage
        setUser(null);
        // quay ve login
        navigate("/login");
    }

    const value = useMemo(() => ({
        user,
        loading,
        errors,
        login,
        logout
    }), [user, loading, errors]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

// lay gia tri tu provider useAuth
export const useAuth = () => {
    return useContext(AuthContext);
    /*
    return ve nhung thu sau :
        user,
        loading,
        errors,
        login,
        logout
    */
}