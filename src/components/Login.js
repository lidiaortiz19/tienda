import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import firebase from 'firebase'
import { FormControl, TextField } from '@material-ui/core';


const styles = {
    card: {
      minWidth: 275,
      width:375
    },
    div:{
        paddingTop: 100,
        paddingLeft:400
    }
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            userAccount:null
        }
    }
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
    
    loginFacebook(){
        this.setState({anchortE1: null});
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result)=> {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var userAccount = result.user;
            //this.setState({userAccount,anchortE1:null});
            this.props.changeview(2,userAccount);
            // ...
          }).catch((error) =>{
            console.warn(error)
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            this.setState({userAccount:null,anchortE1: null});
          });
          
    }
    componentDidMount(){
        this.initFirebase();
        this.getStories();

    handleImputChange= prop => event =>{
        console.log(event.target.value);
    }
    }
    loginGoogle(){
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var userAccount = result.user;
            // ...
            this.props.changeview(3,userAccount);
          }).catch((error)=> {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            this.setState({userAccount:null,anchortE1: null})
          });
    }
    
    componentDidMount(){
        //this.initFirebase();
    }    
            
    render() {
        return (
           
            <div style={styles.div}>
              
              <Card style={styles.card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                        Selecciona tu método de Inicio de Sesión
                        </Typography>
                                      
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={()=>this.loginFacebook()}>Inciar con Facebook</Button>
                    </CardActions>
                    <CardActions>
                        <Button size="small" onClick={()=>this.loginGoogle()}>Inciar con Google</Button>
                    </CardActions>
                    </Card>


                   
            </div>

                
                
        )
        

    }

}
export default Login;