import "./index.scss";
import { useState } from "react";
import SideBar from "../menuSidebar";

export default function Menu({itens}) {
    const [sidebar, setSidebar] = useState(false);

    //alterna entre true e false
    function showSidebar() {
        setSidebar(!sidebar)
    } 

    return (
        <div className="componente-menu">
            <div className="container-menu">

                {/* Três barrinhas */}
                <svg onClick={showSidebar} className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="black" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
                </svg>

                {sidebar && <SideBar active={setSidebar} item={itens} />} 
            </div>
        </div>
    );
}
