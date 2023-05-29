import { useState } from "react";
import ChangeContext from "./context";

const Provider =({children}) =>{
    //GN các state = action cập nhật state để share các global
    const [bgColor, setBgColor] = useState('light');
    const [color, setColor] = useState('black')

    // viết sk ng dùng ấn chuyển
    const onChange =(checked)=>{
        if(checked ){
            setBgColor('light');
            setColor('black');
        }
        else {
            setBgColor('dark');
            setColor('white');
        }
    }
    return (
        //value là gtri cần truyền đi là gì
        <ChangeContext.Provider value={{color,bgColor, onChange}}>
        {children}
        </ChangeContext.Provider >
    )
}
export default Provider