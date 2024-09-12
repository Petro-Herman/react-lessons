import { useState } from "react";

export default function ComponentB () {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openSidebar = () => setIsSidebarOpen(true);
    const closeSidebar = () => setIsSidebarOpen(false);

    return (
        <>
            <button onClick={openSidebarw}>Open sideBar</button>
            <Sidebar isOpen={isSidebarOpen} onClouse={closeSidebar} />
        </>
    );
};