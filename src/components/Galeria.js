import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import firebase from 'firebase'

const styles = theme => ({
  root: {
    
    maxWidth: 400,
    flexGrow: 1,
    paddingTop:5
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default,
  },
  img: {
    maxWidth: 400,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
});

class TextMobileStepper extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeStep: 0,
      productos:[  {
        label: '',
        imgPath:'',
      }]
    };
  }
  

  handleNext(){
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack(){
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };
  initFirebase(){
    // Initialize Firebase
   var config = {
       apiKey: "AIzaSyCQJaPHqvCr2siOCTrAq9uOZHbhvq30jhM",
       authDomain: "app-tienda-30bfc.firebaseapp.com",
       databaseURL: "https://app-tienda-30bfc.firebaseio.com",
       projectId: "app-tienda-30bfc",
       storageBucket: "app-tienda-30bfc.appspot.com",
       messagingSenderId: "359786120031"
   };
   firebase.initializeApp(config);
}
loadProduct(){
  // Get a reference to the database service
  var database = firebase.database();
return firebase.database().ref('/productos/').once('value').then((snapshot)=> {
  var productos = snapshot.val();
  this.setState({
    productos
  })
  // ...
});
}
componentDidMount(){
  this.initFirebase();
  this.loadProduct();
  
}
  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = this.state.productos.length;

    return (
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
          <Typography>{this.state.productos[activeStep].label}</Typography>
        </Paper>
        <img
          className={classes.img}
          src={this.state.productos[activeStep].imgPath}
          alt={this.state.productos[activeStep].label}
        />
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={this.handleNext.bind(this)} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack.bind(this)} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
        
      </div>
    );
  }
}

TextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TextMobileStepper);