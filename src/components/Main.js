import React from 'react';
//my components
import Menu from './menu';
import Galeria from './Galeria';
import LoginForm from './Login';
import Registrar from './Registrar';
import Comprador from './Comprador';




class Main  extends React.Component{
    constructor(props){
        super(props);
        this.state={
            view:0,
            userAccount:null
        }
    }
    changeview(view,userAccount){
      this.setState(
          {
              view,
              userAccount //userAccount:userAccount
          }
      )  
    }
    /**prueba de comentario */
    renderComponnents(){
        const op=this.state.view;
        switch(op){
            case 0:
                return (<Galeria/>);    
            case 1: 
                return(<LoginForm changeview={this.changeview.bind(this)} />);
            case 2:
                return(<Registrar/>);
            case 3:
                return(<Comprador changeview={this.changeview.bind(this)} />);   
            case 4:
                return(<Dialogo changeview={this.changeview.bind(this)} />);     
        }
        return(
            <Galeria/>
          )
        
    }
    render(){
        return(
            <>
              <Menu userAccount={this.state.userAccount} titulo={"LA TIENDA DE ALBA"} elboton={()=>this.changeview(1)} />  
              {this.renderComponnents()}              
            </>
        )
    }
}
export default Main;