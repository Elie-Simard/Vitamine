import React from 'react';

import { Grid, Typography } from '@mui/material';


import Connect4 from './connect4';
import NavBar from '../navBar';

const Jeu1 = () => {
    return (
        <div>



            <div style={{ backgroundColor: 'white', padding: '10px', maxWidth: '1000px', margin: '0 auto', minHeight: '100vh' }}>
                <NavBar />
                <Grid container justifyContent="center" style={{ marginTop: '20px', marginBottom: '20px' }}>
                    <Typography variant="h4" component="h1" style={{ fontFamily: 'Comic Sans MS', fontWeight: 'bold' }}>Connecte 4</Typography>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" style={{
                    backgroundColor: 'orange',
                    padding: '10px',
                    maxWidth: '500px', // Utiliser maxWidth au lieu de width pour une meilleure responsivité
                    margin: '0 auto', // Ajout pour centrer le conteneur dans la vue
                    display: 'flex', // S'assure que les enfants sont flexibles
                    flexDirection: 'column' // Organise les enfants en colonne
                }}>
                    <Connect4 />
                </Grid>
                <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
                    <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                        Règles:
                    </Typography>
                    <Typography variant="body1">
                        Le but est de connecter 4 de vos jetons horizontalement, verticalement ou diagonalement avant votre adversaire. Les jetons tombes dans la case la plus basse disponible.
                    </Typography>
                </Grid>


            </div>
        </div >
    )
}

export default Jeu1;