import React from 'react';
//my components
import Menu from './Menu'
import Login from './Login'
import Registro from './Registro';



class Main  extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Registro:0
        }
    }
    changeLogin(){
      this.setState(
          {
              Registro:1
          }
      )  
    }
    render(){
        return(
            <>
              <Menu titulo={"LA TIENDA DE ALBA"} elboton={this.changerREGISTRARSE.bind(this)} />  
              {this.state.Registro==0?<Login/>:<Registro/>}              
            </>
        )
    }
}
export default Registro;