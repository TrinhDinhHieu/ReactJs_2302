import { memo, useContext } from "react";
import { Switch } from 'antd';
import ChangeContext from "../share/context";

function SwitchComponent() {
    // const onChange =()=>{
        const {onChange} = useContext(ChangeContext);
    // }
    return ( 
        <Switch defaultChecked onChange={onChange} >
            <h4>Light</h4>
        </Switch>
     );
}

export default memo(SwitchComponent);