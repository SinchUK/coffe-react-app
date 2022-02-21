import { styled } from '@mui/styles';
import Link from '@mui/material/Link';
import useMediaQuery from '@mui/material/useMediaQuery';

import './main-header-menu.css';


const MainHeaderMenu = (props) => {
    const {color, path} = props;
    const matches = useMediaQuery('(max-width:426px)');
    let MenuItems;
    let Item;

    if (matches) {
        MenuItems = styled('ul')({
            border: 0,
            borderRadius: 3,
            color: color,
            height: '10px',
            padding: '0px 0px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center'
        });

        Item = styled('li')({
            listStyle: 'none',
            color: color,
            fontFamily: 'Merienda',
            fontSize: '0.6rem',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '1.063rem',
            letterSpacing: '0em'
        });

    }  else {
        MenuItems = styled('ul')({
            border: 0,
            borderRadius: 3,
            color: color,
            height: 48,
            padding: '0 30px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end'
        });

        Item = styled('li')({
            listStyle: 'none',
            color: color,
            fontFamily: 'Merienda',
            fontSize: '0.75rem',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '1.063rem',
            letterSpacing: '0em'
        });
    }
    
    
    
    

    return (
            <MenuItems className="main-header-menu"> 
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