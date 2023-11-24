import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <div>THis is the main layout</div>
            <Outlet></Outlet>
        </>
    );
};

export default MainLayout;