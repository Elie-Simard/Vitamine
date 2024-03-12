import React from 'react';

import { Grid, Typography } from '@mui/material';



import ConcourCard from './concourCard';
import NavBar from '../navBar';

const Concours = () => {
    return (
        <div>
            <NavBar />

            <div style={{ backgroundColor: 'white', padding: '10px', maxWidth: '1000px', margin: '0 auto', minHeight: '100vh' }}>
                <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
                    <Typography variant="h4" component="h1" style={{ fontFamily: 'Comic Sans MS', fontWeight: 'bold' }}>CONCOURS</Typography>
                </Grid>
                <div>
                    <ConcourCard
                        nomConcour="Participer c'est GAGNANT!"
                        date="Du 2024/02/26 au 2024/08/01"
                        prix="À gagner: Médicaments gratuit à vie!*"
                        concourUrl="/concour1"
                        imageUrl="images/imageConcour.png"
                    ></ConcourCard>
                </div>
                <div>
                    <ConcourCard
                        nomConcour="Dancer pour la santer! (Terminé)"
                        date="Du 2024/02/26 au 2024/12/20"
                        prix="À gagner: Carte cadeau de 1000$"
                        concourUrl="/concour1"
                        imageUrl="images/silhouettes-of-party-people-dancing-vector-2889095.jpg"
                    ></ConcourCard>
                </div>
            </div>
        </div>
    )
}

export default Concours;