import { memo } from "react";

const HeardComponent = () =>{
    console.log('Header Component');
    return (
        <>
        <h1>This is Hearder Component</h1>
        </>
    )
}
export default memo(HeardComponent);