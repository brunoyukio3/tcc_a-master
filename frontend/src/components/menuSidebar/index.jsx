import './index.scss';
import React from 'react';

import SidebarItem from '../menuItens';

export default function SideBar ({ active, item }) {

    function closeSidebar() {
        active(false);
    };

    let itens = item


    return (
        <div className="componente-menuSidebar">
            <div className={`container-sidebar ${active ? 'active' : ''}`}>

                {/* Icone de X */}
                <svg onClick={closeSidebar} className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                </svg>

                <div className='itens-menu'>
                    <img src="/assets/images/logo/Ashey-Logo.svg" alt="logo" className='logo' width={200}/>

                  {itens.map((item, index) => (
                    <div className='itens' key={index}>
                        <SidebarItem icon={item.icone} text={item.nome} link={item.link} />
                    </div>
                  ))}

                </div>
            </div>
        </div>
    );
};
