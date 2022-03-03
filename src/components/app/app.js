import { Component } from 'react';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/styles';
import Paper from '@mui/material/Paper';

import MainHeader from '../main-header/main-header';
import MainContent from '../main-content/main-content';
import OurBestItemsList from '../our-best-items-list/our-best-items-list';
import Footer from '../footer/footer';

import './app.css';


const MainWrapper = styled(Paper)({
    color: 'darkslategray',
    backgroundColor: 'ligthgray',
    padding: 8,
    borderRadius: 4,
    maxWidth: '2040px',
    margin: '0 auto',
    
  });

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Solimo Coffee Beans 2kg', price: 10.73, src: '/img/solimo.png', id: 1},
                {name: 'Presto Coffee Beans 1kg', price: 15.99, src: 'img/presto-1.png', id: 2},
                {name: 'AROMISTICO Coffee 1 kg', price: 6.99, src: 'img/aromistico.png', id: 3}
            ] 
        };
        this.menuTheme = [ 
            {color: 'white', path: '/img/coffe.svg'},
            {color: 'black', path: '/img/beans-black.png'}
        ]
    }

    render () {
        return (
            <MainWrapper className="App" elevation={3}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12}>
                        <div className="app-header-wrapper">
                            <header className="App-header">
                                <MainHeader color={this.menuTheme[0].color} path={this.menuTheme[0].path}/>
                            </header>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <MainContent/>
                    </Grid>
                    <Grid item xs={12} className="text-align-center">
                        <OurBestItemsList data={this.state.data}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Footer color={this.menuTheme[1].color} path={this.menuTheme[1].path}/>
                    </Grid>
                </Grid>
            </MainWrapper>
        );
    }
  
}

// export default App;