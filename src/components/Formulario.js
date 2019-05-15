import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function AddressForm() {
    return(
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
             DATOS DEL CLIENTE
            </Typography>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={6}>
                <TextField
                  requiered
                  label="NOMBRE"
                  fullWidth
                  autoComplete="NOMBRE"
                />
            </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  requiered
                  label="TELEFONO"
                  fullWidth
                  autoComplete="TELEFONO"
                 />
            </Grid>
            
            
            <Grid item xs={12} sm={6}>
                <TextField
                  requiered
                  label="DIRECCION"
                  fullWidth
                  autoComplete="DIRECCION"
                 />
            </Grid>
            <Grid item xs={12}>
             
            </Grid>
            </Grid>
            <Button color="primary"  variant="contained">solicitar
            </Button>


        </React.Fragment>
        

    );
}
export default AddressForm;