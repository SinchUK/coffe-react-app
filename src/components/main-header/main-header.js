import MainHeaderMenu from './main-header-menu/main-header-menu';
import MainHeaderContent from './main-header-content/main-header-content';

import { styled } from '@mui/styles';


const HeaderContainer = styled('div') ({
    maxWidth: '80%',
    margin: '0 auto',
    paddingTop: '1.25rem',
})



const MainHeader = (props) => {
    const {color, path} = props;
    return (
        <HeaderContainer>
            <MainHeaderMenu color={color} path={path}/>
            <MainHeaderContent/>
        </HeaderContainer>
    )
} 

export default MainHeader;