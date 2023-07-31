import "./header.css";
import HamburgerMenu from '../../assets/hamburger-menu-icon.svg';
import notificationIcon from '../../assets/notification-icon.svg';

const Header = () => {
    return(
        <div className="header-container">
            <div className="header__menu-icon-container">
                <img src={HamburgerMenu} className='header__menu-icon' alt="Menu icon" />
            </div>
            <div className="header__title">Dashboard</div>
            <div className="header__profile-icon-container">
                <img src={notificationIcon} className='header__profile-icon' alt="Notification icon" />
            </div>
        </div>
    )
}

export default Header;