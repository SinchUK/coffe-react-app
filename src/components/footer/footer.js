import MainHeaderMenu from '../main-header/main-header-menu/main-header-menu';
import './footer.css';


const Footer = (props) => {
    const {color, path} = props;
    return (
        <footer className="footer-container">
            <MainHeaderMenu color={color} path={path}/>
            <div className="text-align-center footer_logo">
                <img className="main-header-menu_logo" src="/img/beans-logo-black.png" alt="between line logo beans"/>
            </div>
        </footer>
    )
}

export default Footer;