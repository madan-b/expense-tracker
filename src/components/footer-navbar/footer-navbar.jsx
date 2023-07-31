import "./footer-navbar.css";
import { getNavbarMenuItems } from '../../config/config-util.js';
import { useState } from "react";

const FooterNavbar = ({ showAddTransaction }) => {
    const [selectedTab, _setSelectedTab] = useState('home-tab');
    
    const handleClick = (tabName) => {
        switch(tabName){
            case 'add-tab':
                showAddTransaction(true);
                break;
        }
    }

    return(
        <div className="footer-container">
            {getNavbarMenuItems().map((menuItem) => {
                let containerClassName = menuItem.containerClassName ? menuItem.containerClassName : '';
                containerClassName += selectedTab === menuItem.tabName ? ' footer-selected-tab' : '';
                return (
                    <div className={containerClassName} key={menuItem.id} onClick={() => handleClick(menuItem.tabName)}>
                        <img src={require(`../../assets/${menuItem.importName}.svg`)} alt={menuItem.alt} className={`${menuItem.className} icon-regular`} />
                    </div>
                )
            })}
        </div>
    )
}

export default FooterNavbar;
