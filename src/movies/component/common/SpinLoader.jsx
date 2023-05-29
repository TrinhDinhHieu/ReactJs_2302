import { Spin } from "antd";
import './common.css'
function SpinLoader() {
    return (  
        <div className="loading-spin">
            <Spin/>
        </div>
    );
}

export default SpinLoader;
