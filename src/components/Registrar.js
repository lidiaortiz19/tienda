import React from 'react';
//Material Components
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';



/**
 * This class shows the interface to capture
 * information necesary to park system
 */
class Registro extends React.Component {
    constructor(props){
        super(props);
        this.state={
            value:10
        }
    }

    render() {
        return (
            <div>
                <Paper>
                <Grid container>
                    <Grid item xs={6}>
                        <FormControl>
                            <InputLabel>Registro Usuario</InputLabel>
                            <Select value={this.state.value}>
                                <MenuItem value={10}>
                                    <em>Licores</em>
                                </MenuItem>
                                <MenuItem value={20}>Granos</MenuItem>
                                <MenuItem value={20}>Viveres</MenuItem>
                                <MenuItem value={30}>Abarrotes</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    
                </Grid>

                <Grid containerspacing={24}>
                    <Grid item xs={6}>
                        <TextField
                            id="Nombre del Usuario"
                            label="Nombre del Usuario"
                            placeholder=""
                            margin="normal"
                        />
                    </Grid>
                    
                    <Grid item xs={6}>
                        <TextField
                            id="Direccion"
                            label="Direccion"
                            placeholder=""
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="Clave"
                            label="Clave"
                            placeholder="ejm: xxxxxxxx"
                            margin="normal"
                        />
                    </Grid>
                   
                </Grid>



                <br />










                    <Grid container spacing={24}>
                    

                        <Button variant="contained" color="secondary" onClick={()=>this.props.changeview(4)}>
                            Guardar Registro
    
                            </Button>


</Grid>
                    


                        


                    
              
                </Paper>
            </div>
        )
    }
}
export default Registro;