import {Grid, Button, Typography} from '@material-ui/core';
import Icon from '@mdi/react'
import { mdiQrcodeScan } from '@mdi/js';
import { Link } from "react-router-dom";

function Home() {

    return (
        <div>

            <Typography style={{margin:30}} variant="h2">
            ScanCode 
            </Typography>

            <Grid container spacing={6}>
                <Grid item xs={6}>
                    <Link to="/scan">
                    <Button variant="contained" size="large" color="primary">
                        <Icon 
                        style={{padding:10}}
                        path={mdiQrcodeScan}
                        title="QR Scanner"
                        size={15}
                        color="white"
                        />
                    </Button>
                    </Link>
                </Grid>
            </Grid>
        
        </div>
    );
  }
  
  export default Home;
  