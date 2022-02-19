import { styled } from '@mui/styles';
import './main-header-content.css';



const HeaderContent = styled('div') ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
});

const ContentBox = styled('div') ({
    display: 'flex',
    flexDirection: 'column',
    width: '66%',
    alignItems: 'center'
})


const MainHeaderContent = () => {
    return (
        <HeaderContent>
            <ContentBox className='main-header-content'>
                <div className='main-header-content-item_title text-align-left'>
                    <h3>Everything You Love About Coffe</h3>
                </div>
                <div className='main-header-content-item_logo'>
                    <img src="/img/beans-line-logo.png" alt="between line logo beans"/>
                </div>
                <div className='main-header-content-item_text'>
                    <p>We makes every day full energy and taste</p>
                </div>
                <div className='main-header-content-item_question'>
                    <p>Want to try our beans?</p>
                </div>
                <button>More</button>
            </ContentBox>
        </HeaderContent>
    )
}

export default MainHeaderContent;