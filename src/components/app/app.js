import { Component } from 'react';
import * as React from 'react';
import Grid from '@mui/material/Grid';

import MainHeader from '../main-header/main-header';





export default class App extends Component {
  render () {
    return (
        <div className="App">
          
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12}>
                    <header className="App-header">
                        <MainHeader/>
                    </header>
                </Grid>
                <Grid item xs={12}>
                    <div>2</div>
                </Grid>
                <Grid item xs={12}>
                    <div>3</div>
                </Grid>
                <Grid item xs={12}>
                    <div>4</div>
                </Grid>
            </Grid>
          
          
        </div>
      );
  }
  
}

// export default App;