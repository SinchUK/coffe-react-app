import { styled } from '@mui/styles';
import Link from '@mui/material/Link';

import './main-header-menu.css';


const MainHeaderMenu = (props) => {
    const {color, path} = props;
    console.log(color, path, "props");
    const MenuItems = styled('ul')({
        border: 0,
        borderRadius: 3,
        color: color,
        height: 48,
        padding: '0 30px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end'
    });
    
    const Item = styled('li')({
        listStyle: 'none',
        color: color,
        fontFamily: 'Merienda',
        fontSize: '0.75rem',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '1.063rem',
        letterSpacing: '0em'
    });

    return (
            <MenuItems > 
                <Item href='#'>
                    <Link href='#'className='main-header-menu_link'>
                        <img className="main-header-menu_logo" src={path} alt ='coffe beans logo'/>
                    </Link>
                </Item>
                <Item className='main-header-menu_item'>
                    <Link href='#' color="inherit" underline="hover" className='main-header-menu_link'>Coffe house</Link>
                </Item>
                <Item className='main-header-menu_item' >
                    <Link href='#' color="inherit" underline="hover" className='main-header-menu_link'>Our coffe</Link>
                </Item>
                <Item className='main-header-menu_item'>
                    <Link href='#' color="inherit" underline="hover" className='main-header-menu_link'>For your pleasure</Link>
                </Item>
            </MenuItems>
    )
}

export default MainHeaderMenu;