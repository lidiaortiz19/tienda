//React Library
import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
//Materials Components
import { MuiThemeProvider } from '@material-ui/core/styles';
import Main from './components/Main'
import LinearProgress from '@material-ui/core/LinearProgress';



//My Components
import theme from './theme'

function App() {
  function LinearIndeterminate(props) {
    const { classes } = props;
    return (
      <div className={classes.root}>
        <LinearProgress />
        <br />
        <LinearProgress color="secondary" />
      </div>
    );
  }
  
  
  const title = <h1>LOGIN</h1>;
  return (
  <div>

    
      <MuiThemeProvider theme={theme}>
      <Main/>     
      </MuiThemeProvider>
      
      
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));