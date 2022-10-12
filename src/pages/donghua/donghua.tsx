import { Outlet } from "react-router-dom";
import { Wrapper } from "./style";

function Donghua() {
    return (
        <Wrapper>
            <Outlet></Outlet>
        </Wrapper>
    )
}

export default Donghua;
